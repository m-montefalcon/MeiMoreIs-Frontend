import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { firebaseApp } from '../service/firebaseConfig';
import { getUserDataFromLocalStorage } from '../src/util/localStorageUtils';

const useUserData = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const localUserData = getUserDataFromLocalStorage();
      if (!localUserData) {
        navigate('/login');
        return;
      }

      try {
        setUserData(localUserData);
        const storage = getStorage(firebaseApp);
        const imagePath = `meimoreis/user/${localUserData.userData.profilePicture}`;
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [navigate]);

  return { userData, imageUrl };
};

export default useUserData;
