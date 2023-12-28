import { createStore } from "vuex";
import restaurantsModule from '../modules/melp-restaurants/store/restaurants';
const store = createStore({
    modules: {
        restaurant: restaurantsModule,
      
    }
});


export default store;