import axios from 'axios'

export default {
  getSeason: 'season/',
  HTTP: axios.create({ 
      baseURL: 'https://api.jikan.moe/v3/',
      timeout:30000,
  }),
  data() {
    return {
    }
  }
}