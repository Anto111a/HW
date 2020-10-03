import axios from 'axios'

function getData(req) {
  return axios
    .get(`http://api.tvmaze.com/search/shows/?q=${req}`)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}
export { getData }
