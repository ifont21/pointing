// Shared settings
let config = {
  API_URL: 'http://jsonplaceholder.typicode.com'
}

if (process.env.REACT_APP_ENV === 'production') {
  // Override settings for production enviroment.
  config = {...config, API_URL: 'httpS://jsonplaceholder.typicode.com'}
} else if (process.env.REACT_APP_ENV === 'test') {
  // Override settings for testing enviroment
} else {
  // Override settings for development enviroment.
  // You can use shared as default.
}

export let API_URL = config.API_URL;
export default config;
