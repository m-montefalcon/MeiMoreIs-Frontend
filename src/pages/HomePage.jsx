import React, { useEffect, useState } from 'react'
import Nav from '../components/home_components/NavBarComponent'
import CardsComponents from '../components/home_components/CardsComponents'
import AddMemoryButton from '../components/home_components/AddMemoryButton'
import useUserData from '../util/useUserData.js'
import axios from 'axios'

axios.defaults.withCredentials = true
const baseUrl = import.meta.env.VITE_BACKEND_API_ENDPOINT

const HomePage = () => {
  const { userData, imageUrl } = useUserData()
  const [apiData, setApiData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        if (userData && userData.userData && userData.userData.id) {
          const response = await axios.get(`${baseUrl}/post`, {
            withCredentials: true,
          })
          setApiData(response.data)
        }
      } catch (error) {
        console.error('Error fetching API data:', error)
        alert(`${error}`)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [baseUrl, userData])

  return (
    <>
      {loading ? (
        <div> Loading </div>
      ) : (
        <div
          style={{
            display: 'block',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Nav
            name={`${userData.userData.fName} ${userData.userData.lName} `}
            image={imageUrl}
          />
          <AddMemoryButton />
          {apiData.map((data, index) => (
            <CardsComponents key={index} data={data} />
          ))}
        </div>
      )}
    </>
  )
}

export default HomePage
