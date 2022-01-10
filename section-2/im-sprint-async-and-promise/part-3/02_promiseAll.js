var newsURL = "http://localhost:5000/data/latestNews";
var weatherURL = "http://localhost:5000/data/weather";

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  // const urls = [newsURL, weatherURL];
  // fetchs = urls.map(url => fetch(url));
  // Response => then
  // return Promise.all(fetchs) // Promise 배열이 들어온다.
  // .then((responses) => {
    //  return responses.map(res => res.json());
    // })
    // . then((objs) => {
      // objs
    // })

  const values = {};
  return Promise.all([fetch(newsURL), fetch(weatherURL)])
    .then(([newsResponse, weatherResponse]) => {
      return Promise.all([newsResponse.json(), weatherResponse.json()]);
    })
    .then(([json1, json2]) => {
      values.news = json1.data;
      values.weather = json2;
      return values;
    });
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAll,
  };
}


// method 2.
// function getNewsAndWeatherAll() {
//   // TODO: Promise.all을 이용해 작성합니다
//   return Promise.all([fetch(newsURL), fetch(weatherURL)])
//   .then(([resNews, resWeather]) => {
//     return Promise.all([resNews.json(), resWeather.json()]);
//   })  
//   .then(([jsonNews, jsonWeather]) => {
//     return {
//       news: jsonNews.data,
//       weather: jsonWeather,
//     }
//   })
// }

