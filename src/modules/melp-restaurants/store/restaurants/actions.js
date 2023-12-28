import restaurantsApi from '@/api/restaurantsApi';
import { apiUrl1 } from '@/api/api.js';
import axios from 'axios';
export const loadRestaurants = async({commit}) => {
    const { data } = await axios.get(apiUrl1); 
    commit('setRestaurants', data)
 }