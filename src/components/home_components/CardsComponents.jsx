import React, { useState, useEffect, useMemo } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { firebaseApp } from "../../../service/firebaseConfig";
import { getUserDataFromLocalStorage } from "../../util/localStorageUtils";
import axios from "axios";

axios.defaults.withCredentials = true;
const baseUrl = import.meta.env.VITE_BACKEND_API_ENDPOINT;

const CardsComponents = (props) => {
  const [isFilled, setIsFilled] = useState(false);
  const [profileUrl, setProfileUrl] = useState(null);
  const [contentUrl, setContentUrl] = useState(null);
  const [likes, setLikes] = useState(parseInt(props.data.counts));

  // Memoize formatted timestamp
  const formattedTimestamp = useMemo(() => {
    return (
      new Date(props.data.timestamp).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }) +
      " " +
      new Date(props.data.timestamp).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  }, [props.data.timestamp]);

  const toggleHeart = async (postId) => {
    const currentUser = await getUserDataFromLocalStorage();

    try {
      const result = await axios.post(
        `${baseUrl}/like`,
        {
          postId: postId,
          userId: currentUser.userData.id,
        },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );
      if (result.status === 200) {
        setLikes((prevState) => prevState + 1);
        setIsFilled(true);
      }
    } catch (error) {
      console.error("Failed to toggle heart:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const storage = getStorage(firebaseApp);
      const profileImageUrl = await getImageUrl(
        storage,
        `meimoreis/user/${props.data.profile_picture}`
      );
      const contentImageUrl = await getImageUrl(
        storage,
        `meimoreis/post/${props.data.image}`
      );
      setProfileUrl(profileImageUrl);
      setContentUrl(contentImageUrl);
    };

    const checkIfLiked = async () => {
      const currentUser = await getUserDataFromLocalStorage();
      const users = props.data.user_ids;
      const checkUser = users.find((user) => user === currentUser.userData.id);
      setIsFilled(!!checkUser);
    };

    fetchData();
    checkIfLiked();

  }, [props.data]);

  const getImageUrl = async (storage, imagePath) => {
    try {
      const imageRef = ref(storage, imagePath);
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (error) {
      console.error("Error fetching image:", error);
      return null;
    }
  };
  return (
    <>
      <div key={props.data.post_id}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Card
            style={{
              width: "500px",
              backgroundColor: "#f9f9f9",
              marginBottom: "20px",
            }}
          >
            <Card.Body>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  loading="lazy"
                  src={profileUrl || ""}
                  className="rounded-circle"
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <Card.Title>
                    {props.data.f_name} {props.data.l_name}
                  </Card.Title>
                  <Card.Subtitle
                    className="text-muted"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {formattedTimestamp}
                  </Card.Subtitle>
                </div>
              </div>
              <Card.Text className="mt-3" style={{ marginBottom: "10px" }}>
                {props.data.content}
              </Card.Text>
              <div style={{ overflow: "hidden", marginBottom: "10px" }}>
                <img
                  loading="lazy"
                  src={contentUrl || ""}
                  alt="Post Image"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div
                  onClick={() => toggleHeart(props.data.post_id)}
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    icon={isFilled ? solidHeart : regularHeart}
                    style={{
                      marginLeft: "10px",
                      marginRight: "5px",
                      fontSize: "24px",
                    }}
                  />
                </div>
                <p
                  style={{
                    marginBottom: "0",
                    marginTop: "0",
                    marginLeft: "5px",
                  }}
                >
                  {likes} likes
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CardsComponents;
