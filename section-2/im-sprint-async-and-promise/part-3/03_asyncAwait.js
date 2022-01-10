var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() { // 함수에 async 
  // TODO: async/await 키워드를 이용해 작성합니다
  let newsObj = await fetch(newsURL).then(res => res.json());
  let weatherObj = await fetch(weatherURL).then(res => res.json());

  return {
    news: newsObj.data,
    weather: weatherObj
  }

  // 구조분해 할당 리턴하기
  // const news = newsObj.data
  // const weather = weatherObj

  // return { news, weather}
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}

