//TODO:uncomment this if CORS error no longer exists
// import axios from 'axios';



// const baseURL = process.env.NODE_ENV === 'production'
//   ? 'https://cors-anywhere.herokuapp.com/https://recruiting-datasets.s3.us-east-2.amazonaws.com'
//   : 'http://localhost:8080'; 

//   const api = axios.create({
//     baseURL,
//   });


// export const loadRestaurants = async({commit}) => {
//     const { data } = await api.get('/data_melp.json'); 
//     commit('setRestaurants', data)
//  }

import data from '../data.json'
export const loadRestaurants = async({commit}) => {
    // const { data } = await api.get('/data_melp.json'); 
    commit('setRestaurants', data)
 }