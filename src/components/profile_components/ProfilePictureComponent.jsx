import React from 'react'

const ProfilePictureComponent = ({ image }) => {
  return (
    <>
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
          src={image}
          alt="Profile"
        />
      </div>
    </>
  )
}

export default ProfilePictureComponent
