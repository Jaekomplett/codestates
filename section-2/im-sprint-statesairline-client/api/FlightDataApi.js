import flightList from "../resource/flightList";
import fetch from "node-fetch";

if (typeof window !== "undefined") {
  localStorage.setItem("flight", JSON.stringify(flightList)); 
  // 로컬스토리지로 setItem으로
}

export function getFlight(filterBy = {}) {
  // HINT: 가장 마지막 테스트를 통과하기 위해, fetch를 이용합니다. 아래 구현은 완전히 삭제되어도 상관없습니다.
  // TODO: 아래 구현을 REST API 호출로 대체하세요.
  // const getParameter = (condition) => {
  //   // 함수를 만든다 -> side effect 방지
  //   let queryString = '?'
  //   const { departure, destination } = condition;
  //     if(departure && destination) {
  //       return queryString + `departure=${departure}&destination=${destination}`;
  //     }
  //     if(departure) {
  //       return queryString + `departure=${departure}`;
  //     }
  //     if(destination) {
  //       return queryString + `destination=${destination}`;
  //     }
      
  //     const apiAddress = 'http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight'

  //     return fetch(apiAddress + getParameter(filterBy)).then(res => res.json());
  // }


  let url = `http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?`;

  if (filterBy.departure) {
    url = url + `departure=${filterBy.departure}&`;
  }
  if (filterBy.destination) {
    url = url + `destination=${filterBy.destination}`;
  }

  return fetch(url).then((res) => res.json());
}
