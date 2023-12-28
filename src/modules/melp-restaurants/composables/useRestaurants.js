import { computed } from "vue";
import { useStore } from "vuex"

const useRestaurants = () => {
    const store = useStore();

    const getInfoRestaurants = async() => {
     const resp = await store.dispatch('restaurant/loadRestaurants');
        return resp;
    }


   
    
    return{
        getInfoRestaurants,
        
        
    }
}



export default useRestaurants