let apiUrl1, apiUrl2;

if (process.env.NODE_ENV === 'development') {
  apiUrl1 = 'http://localhost:8080/data_melp.json';  // URL para desarrollo
  apiUrl2 = 'http://localhost:8080/maps/api/place/nearbysearch/json';  // Otra URL para desarrollo
} else {
  apiUrl1 = 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json';  // URL para producción
  apiUrl2 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';  // Otra URL para producción
}

export { apiUrl1, apiUrl2 };