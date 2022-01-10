var newsURL = "http://localhost:5000/data/latestNews";
var weatherURL = "http://localhost:5000/data/weather";

function getNewsAndWeather() {
  // url 담을 객체 선언
  // 1. fetch(url) fetch로 url로부터 데이터 가져오기
  // 2. .then(res => res.json())
  // 받은 데이터를 내장 메소드 json() 이용해서 json 형태로 변환
  // 3. json 변환된 데이터

  // fetch -> response 객체 -> then -> json -> 자바스크립트 객체
  const values = {};

  return fetch(newsURL) // fetch API는 브라우저에서만 사용 가능하다.
    .then((response) => response.json())
    .then((json) => {
      values.news = json.data;
      return fetch(weatherURL);
    })
    .then((response) => response.json())
    .then((json) => {
      values.weather = json;
      return values;
    });
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeather,
  };
}

// method. 2
//   return fetch(newsURL)
//     .then(res => res.json())
//     .then(newsData => {
//       return fetch(weatherURL)
//         .then(res => res.json())
//         .then(weatherData => {
//           return {
//             a: newsData.data,
//             b: weatherData,
//           };
//         });
//     });
// }
