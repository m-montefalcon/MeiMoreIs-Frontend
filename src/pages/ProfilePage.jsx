import React from 'react'
import NavBarComponent from '../components/home_components/NavBarComponent'
import { Container, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'

const ProfilePage = () => {
  return (
    <>
      <NavBarComponent />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative', // Add position relative to the div
          marginTop: '2%',
        }}
      >
        {/* Cover picture */}
        <div
          className="p-2"
          style={{
            marginTop: '2%',
            position: 'relative',
            borderRadius: '15px 50px 30px',
            overflow: 'hidden',
            width: '75%',
          }}
        >
          <img
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '15px 50px 30px',
            }}
            src="https://w0.peakpx.com/wallpaper/924/304/HD-wallpaper-arthur-morgan-fire-red-dead-redemption-red-dead-redemption-2.jpg"
            alt="Cover"
          />
        </div>
        {/* Profile picture */}
        <div
          className="p-2"
          style={{
            position: 'relative', // Change to absolute positioning
            borderRadius: '50%',
            width: '200px', // Adjust the size of the circular image
            height: '200px', // Adjust the size of the circular image
            right: '20%', // Adjust the positioning to overlay slightly on the cover picture
            top: '50%', // Adjust the positioning to overlay slightly on the cover picture
            transform: 'translateY(-50%)', // Center vertically
          }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
            src="https://pbs.twimg.com/media/Dn9sqIkXoAc9bJ4.jpg"
            alt="Profile"
          />
        </div>
        {/* Name */}
        <div
          className="p-2"
          style={{
            position: 'absolute',
            borderRadius: '15px',
            fontSize: '32px',
            top: '63%',
            left: '38%',
          }}
        >
          <strong> Arthur Morgan</strong>
        </div>
      </div>
      {/* Card */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '5px',
        }}
      >
        <Card
          style={{
            display: 'block',
            width: '50%',
            backgroundColor: '#f9f9f9',
            marginBottom: '20px',
          }}
        >
          <Card.Body>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <img
                loading="lazy"
                src="https://steamuserimages-a.akamaihd.net/ugc/2084661280640962641/427933A9933FD5BE3336902EE1B85C68721E501F/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                className="rounded-circle"
                alt=""
                style={{
                  width: '50px',
                  height: '50px',
                  marginRight: '10px',
                  flexShrink: 0,
                }}
              />
              <div>
                <Card.Title>sample</Card.Title>
                <Card.Subtitle
                  className="text-muted"
                  style={{ fontSize: '0.8rem' }}
                >
                  July 20, 2075
                </Card.Subtitle>
              </div>
            </div>
            <Card.Text className="mt-3" style={{ marginBottom: '10px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              numquam quibusdam eius mollitia, magnam quas assumenda eaque
              maxime perspiciatis neque magni aspernatur amet aperiam maiores
              laboriosam modi quia asperiores aliquid?
            </Card.Text>
            <div style={{ overflow: 'hidden', marginBottom: '10px' }}>
              <img
                loading="lazy"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgQBW3uNcWjIvghcFXKiEAMJxsQ3357eXvdk2tAOksLQ_hV1f6MxbKbrQN9DCZkdBPxI&usqp=CAU"
                alt="Post Image"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              <div style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon
                  icon={solidHeart}
                  style={{
                    marginLeft: '10px',
                    marginRight: '5px',
                    fontSize: '24px',
                  }}
                />
              </div>
              <p
                style={{
                  marginBottom: '0',
                  marginTop: '0',
                  marginLeft: '5px',
                }}
              >
                likes
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default ProfilePage
