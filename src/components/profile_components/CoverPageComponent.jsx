import React from 'react'

const CoverPageComponent = () => {
  return (
    <>
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
    </>
  )
}

export default CoverPageComponent
