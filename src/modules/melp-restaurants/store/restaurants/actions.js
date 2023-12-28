import restaurantsApi from '@/api/restaurantsApi'
import axios from 'axios';
export const loadRestaurants = async({commit}) => {
    const { data } = await axios.get('/data_melp.json'); 
    commit('setRestaurants', data)
 }