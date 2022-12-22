import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Item from './components/Item';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';

function App() {

  const [ data, setData ] = useState([
    {
      _id: 43826,
      BusinessName: "ABC",
      AddressLine2: "LOL",
      AddressLine3: "OKK",
      lat: 65,
      long: 32,
      Postcode: 7589,
      RatingValue: 3
    },
    {
      _id: 43827,
      BusinessName: "ABC2",
      AddressLine2: "LOL1",
      AddressLine3: "OKK",
      lat: 15,
      long: 42,
      Postcode: 78687,
      RatingValue: 2
    },
    {
      _id: 43432829,
      BusinessName: "ABC3",
      AddressLine2: "LOL2",
      AddressLine3: "OKK",
      lat: 45,
      long: 22,
      Postcode: 67587,
      RatingValue: 5
    },
    {
      _id: 4123828,
      BusinessName: "ABC",
      AddressLine2: "LOL",
      AddressLine3: "OKK",
      lat: 65,
      long: 32,
      Postcode: 53242,
      RatingValue: 1
    },
    {
      _id: 43831228,
      BusinessName: "ABC",
      AddressLine2: "LOL",
      AddressLine3: "OKK",
      lat: 65,
      long: 32,
      Postcode: 53242,
      RatingValue: 1
    },
    {
      _id: 43823428,
      BusinessName: "ABC",
      AddressLine2: "LOL",
      AddressLine3: "OKK",
      lat: 65,
      long: 32,
      Postcode: 53242,
      RatingValue: 1
    },
    {
      _id: 4385628,
      BusinessName: "ABC",
      AddressLine2: "LOL",
      AddressLine3: "OKK",
      lat: 65,
      long: 32,
      Postcode: 53242,
      RatingValue: 1
    },
    {
      _id: 44323828,
      BusinessName: "ABC",
      AddressLine2: "LOL",
      AddressLine3: "OKK",
      lat: 65,
      long: 32,
      Postcode: 53242,
      RatingValue: 1
    },
    {
      _id: 4382128,
      BusinessName: "ABC",
      AddressLine2: "LOL",
      AddressLine3: "OKK",
      lat: 65,
      long: 32,
      Postcode: 53242,
      RatingValue: 1
    },
    {
      _id: 438413228,
      BusinessName: "ABC",
      AddressLine2: "LOL",
      AddressLine3: "OKK",
      lat: 65,
      long: 32,
      Postcode: 53242,
      RatingValue: 1
    },
    {
      _id: 443228,
      BusinessName: "ABC",
      AddressLine2: "LOL",
      AddressLine3: "OKK",
      lat: 65,
      long: 32,
      Postcode: 53242,
      RatingValue: 1
    },
    {
      _id: 4332828,
      BusinessName: "ABC",
      AddressLine2: "LOL",
      AddressLine3: "OKK",
      lat: 65,
      long: 32,
      Postcode: 53242,
      RatingValue: 1
    },
    {
      _id: 43828,
      BusinessName: "ABC",
      AddressLine2: "LOL",
      AddressLine3: "OKK",
      lat: 65,
      long: 32,
      Postcode: 53242,
      RatingValue: 1
    }
  ])
  const [ city, setCity ] = useState('')
  const [ open, setOpen ] = useState(false)
  const [ updatedCity, setUpdatedCity ] = useState('')
  const [ updatedLimit, setUpdatedLimit ] = useState()
  const [ limit, setLimit ] = useState(100)
  const [ page, setPage ] = useState(1)
  const resultsPerPage = 10
  const [ pages, setPages ] = useState(Math.ceil(data.length / resultsPerPage))
  const options = {
    method: 'GET',
    url: `https://wyre-data.p.rapidapi.com/restaurants/town/${city}?limitQuery=${limit}`,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'wyre-data.p.rapidapi.com'
    }
  }
  
  useEffect(() =>  {
    axios.request(options).then( (res) => {
      setData(res.data)
      setOpen(false)
      setPages(Math.ceil(data.length / resultsPerPage))
    }).catch( (err) => {
      console.log(err)
      setOpen(false)
    })
    // eslint-disable-next-line
  }, [updatedCity, updatedLimit])

  const onSearchHandler = () => {
    if (isNaN(limit) === false && limit < 301) {
      setOpen(true)
      setUpdatedCity(city)
      setUpdatedLimit(limit)
    } else {
      alert("Limit only accepts numeric, upto 300 values.")
    }
    console.log(options.url)
  }

  const handlePageChange = (event, currentPage) => {
    console.log(currentPage)
    setPage(parseInt(currentPage, 10))
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Navbar />
      <div className='main childBox'>
        <div className='parentBox'>
          <div className='inputBox'>
            <TextField className='inputField' id='outlined-name' label='Location' type='text' placeholder='City / Town' variant='standard' value={city} onChange={(e) => setCity(e.target.value)} onKeyUp={(e) => {
              if (e.key === 'Enter') {
                onSearchHandler(e)
              }
            }}/>
          </div>
          <div className='inputBox'>
            <TextField className='inputField' id='outlined-name' label="Limit" type='text' placeholder='default: 100' variant='standard' value={limit} onChange={(e) => setLimit(e.target.value)} onKeyUp={(e) => {
              if (e.key === 'Enter') {
                onSearchHandler(e)
              }
            }} />
          </div>
          <SearchIcon sx={{ fontSize: 40, cursor: "pointer" }} className='icon' onClick={onSearchHandler} />
        </div>
        { data.length ? 
        <Box className='childBox' sx={{ flexGrow: 1 }}>
          <Backdrop sx={{ color: 'gray', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
            <CircularProgress color="warning" />
          </Backdrop>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: "center" }}>
            { data && data.slice((page - 1) * resultsPerPage, ((page - 1) * resultsPerPage) + resultsPerPage).map( restaurant => {
              return <Grid key={restaurant._id}>
                <Item restaurant={restaurant} />
              </Grid>
            }) }
          </Grid>
          <Pagination count={pages} page={page} onChange={handlePageChange} className="pages"/>
        </Box> : 
        <div className='childBox'>
          <h2>No restaurants found. Please double-check city/town name.</h2>
        </div> }
      </div>
    </>
  );
}

export default App;
