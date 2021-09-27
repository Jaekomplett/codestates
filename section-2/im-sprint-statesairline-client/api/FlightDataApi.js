import flightList from '../resource/flightList'
import fetch from 'node-fetch'

if (typeof window !== "undefined") {
  localStorage.setItem('flight', JSON.stringify(flightList));
}

/*
export function getFlight(filterBy = {}) {
  let json = []
  if (typeof window !== "undefined") {
    json = localStorage.getItem("flight");
  }
  const flight = JSON.parse(json) || [];

  return new Promise((resolve) => {
    const filtered = flight.filter((flight) => {
      let condition = true;
      if (filterBy.departure) {
        condition = condition && flight.departure === filterBy.departure
      }
      if (filterBy.destination) {
        condition = condition && flight.destination === filterBy.destination
      }
      return condition;
    })

    setTimeout(() => {
      resolve(filtered)
    }, 500);
  });
}
*/

export function getFlight(filterBy = {}) {
  let queryString = ''
  if (filterBy.departure) {
    queryString = queryString + `departure=${filterBy.departure}&`
  }
  if (filterBy.destination) {
    queryString = queryString + `destination=${filterBy.destination}`
  }

  let endpoint = `http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?${queryString}`

  return fetch(endpoint)
    .then(resp => resp.json())
}