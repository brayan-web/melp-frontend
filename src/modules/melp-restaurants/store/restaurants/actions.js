// import restaurantsApi from '@/api/restaurantsApi';
// import { apiUrl1 } from '@/api/api.js';
import axios from 'axios';



const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://recruiting-datasets.s3.us-east-2.amazonaws.com'
  : 'http://localhost:8080'; 

  const api = axios.create({
    baseURL,
  });

export const loadRestaurants = async({commit}) => {
    const { data } = await api.get('/data_melp.json'); 
    commit('setRestaurants', data)
 }