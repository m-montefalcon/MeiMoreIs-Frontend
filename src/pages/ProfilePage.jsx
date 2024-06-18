import React, { useState, useEffect } from 'react'
import NavBarComponent from '../components/home_components/NavBarComponent'
import CoverPageComponent from '../components/profile_components/CoverPageComponent'
import ProfilePictureComponent from '../components/profile_components/ProfilePictureComponent'
import NameComponent from '../components/profile_components/NameComponent'
import CardsComponents from '../components/home_components/CardsComponents'
import useUserData from '../../customHooks/useUserData'
import axios from 'axios'

axios.defaults.withCredentials = true
const baseUrl = import.meta.env.VITE_BACKEND_API_ENDPOINT

const ProfilePage = () => {
  const { userData, imageUrl } = useUserData()
  const [apiData, setApiData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        if (userData && userData.userData && userData.userData.id) {
          const response = await axios.get(
            `${baseUrl}/post/${userData.userData.id}`,
            { withCredentials: true },
          )
          setApiData(response.data)
          console.log(response.data)
        }
      } catch (error) {
        console.error('Error fetching API data:', error)
        alert(
          'Failed to load data. Please check your connection and try again.',
        )
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [baseUrl, userData])
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <NavBarComponent image={imageUrl} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative', // Add position relative to the div
              marginTop: '2%',
            }}
          >
            <CoverPageComponent coverPhoto = {userData.coverPhoto}/>
            <ProfilePictureComponent image={imageUrl} />
            <NameComponent />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5px',
              flexDirection: 'column',
            }}
          >
            {apiData.map((data, index) => (
              <CardsComponents key={index} data={data} />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default ProfilePage
