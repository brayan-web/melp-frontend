export const setRestaurants = (state, restaurants) => {
    state.restaurants = [...state.restaurants, ...restaurants];
    state.isLoading = false

}