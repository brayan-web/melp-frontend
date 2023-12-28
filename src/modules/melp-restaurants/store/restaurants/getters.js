export const getRestaurantsByRate = (state ) => (rate) => {
    if(rate === '' ) return state.restaurants
    return state.restaurants.filter((restaurant) => {
        return restaurant.rating === rate
    })
  }