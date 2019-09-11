import { globalHistory } from '@reach/router'

const config = {}

config.firebase = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
}

config.BASE_URL = globalHistory.location.origin
console.log('globalHistory.location.origin', globalHistory.location.origin)

switch (config.BASE_URL) {
  // Production
  case 'https://prod.com':
    console.log('Config case prod')
    config.BACKEND_URL = process.env.GATSBY_BACKEND_URL_PROD;
    break;

  // Development
  case 'http://localhost:8001':
  case 'http://localhost:8000':
    console.log('Config case test')
    if (process.env.NODE_ENV === 'staging') {
      config.BACKEND_URL = process.env.GATSBY_BACKEND_URL_TEST;
    } else {
      config.BACKEND_URL = process.env.GATSBY_BACKEND_URL_PROD;
    }
    break;

  // Branch deploys and deploys previews
  default:
    console.log('Config case default')
    config.BACKEND_URL = process.env.GATSBY_BACKEND_URL_PROD;
}

console.log('BACKEND_URL', config.BACKEND_URL)

export default config
