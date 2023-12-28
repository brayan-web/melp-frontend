export const getRestaurantsByRate = (state ) => (rate) => {
    console.log(rate)
    // return state.restaurants
    if(rate === '' ) return state.restaurants

  

    return state.restaurants.filter((restaurant) => {
        return restaurant.rating === rate
    })
  }