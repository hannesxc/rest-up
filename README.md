# Rest-Up  

Rest-Up is an online web application where people can find nightclubs, bars, restaurants and so on, in their vicinity / city. This only works in the United Kingdom, so only UK cities / towns are accepted. Results are limited to 300 in order to stay under the API quota.  
  
P.S. Inaccurate results, if any, aren't my fault. I'm just displaying what the API fetches.  
  
This project was bootstrapped with create-react-app, and uses wyre API to fetch restaurants, google maps API to show their co-ords on the map, and material-ui for the general templates/layouts/icons.  
  
## Running it on your machine 
   
Fork it and clone the repo to your local machine. Make sure you have npm installed prior to running these following commands -  
> `npm install` to install dependencies  
> `npm start` to deploy on localhost  
  
Create a .env.local file inside base directory, and throw in your wyre API key and google maps JS api key inside `REACT_APP_API_KEY` and `REACT_API_MAPS_API_KEY` respectively to actually make the app work. Else put dummy data into the data variable and you could preview its basic features.  