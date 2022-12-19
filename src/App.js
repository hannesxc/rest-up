import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [ data, setData ] = useState([])
  const [ city, setCity ] = useState('')
  const [ updatedCity, setUpdatedCity ] = useState('')
  const [ updatedLimit, setUpdatedLimit ] = useState()
  const [ limit, setLimit ] = useState(100)
  const options = {
    method: 'GET',
    url: `https://wyre-data.p.rapidapi.com/restaurants/town/${city}?limitQuery=${limit}`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'wyre-data.p.rapidapi.com'
    }
  }
  
  useEffect(() =>  {
    axios.request(options).then( res => setData(res.data) ).catch( err => console.log(err))
    // eslint-disable-next-line
  }, [updatedCity, updatedLimit])

  const onSearchHandler = () => {
    setUpdatedCity(city)
    if (isNaN(limit) === false) {
      setUpdatedLimit(limit)
    } else {
      alert("Limit only accepts numeric values.")
    }
    console.log(city, limit)
  }

  return (
    <div>
      <div className='parentBox'>
        <div className='inputBox'>
          <h3>Location</h3>
          <input type='text' placeholder='City / Town' value={city} onChange={(e) => setCity(e.target.value)} onKeyUp={(e) => {
            if (e.key === 'Enter') {
              onSearchHandler(e)
            }
          }}/>
        </div>
        <div className='inputBox'>
          <h3>Limit results by</h3>
          <input type='text' placeholder='default: 100' value={limit} onChange={(e) => setLimit(e.target.value)} onKeyUp={(e) => {
            if (e.key === 'Enter') {
              onSearchHandler(e)
            }
          }} />
        </div>
        <button onClick={onSearchHandler}>Search</button>
      </div>
      { data.length ? <div className='items'>
        { data && data.map( restaurant => {
          return <div className='subItems' key={restaurant._id}>
            <span>Name: {restaurant.BusinessName}</span>
            <span>Address: {restaurant.AddressLine2}, {restaurant.AddressLine3}</span>
            <span>Zip Code: {restaurant.PostCode}</span>
          </div>
        }) }
      </div> : 
      <div>
        <h2>No restaurants found. Please double-check city/town name.</h2>
      </div> }
    </div>
  );
}

export default App;
