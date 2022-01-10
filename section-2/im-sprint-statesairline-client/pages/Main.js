import Head from "next/head";
import { useEffect, useState } from "react";
import { getFlight } from "../api/FlightDataApi";
import FlightList from "./component/FlightList";
import LoadingIndicator from "./component/LoadingIndicator";
import Search from "./component/Search";
import Debug from "./component/Debug";

import json from "../resource/flightList";

export default function Main() {
  // 상위 컴포넌트의 "상태를 변경하는 함수"
  // 그 자체를 하위 컴포넌트로 전달하고, 이 함수를 하위 컴포넌트가 실행한다.
  // 1. state 변경 함수 setCondition을 -> search 함수에 전달
  const [condition, setCondition] = useState({
    departure: "ICN",
  });
  const [flightList, setFlightList] = useState(json);
  const [isLoading, setIsLoading] = useState(true); 
  // isLoading 로딩중 true -> 로딩끝 false

  const search = ({ departure, destination }) => {
    // destination은 useState 초기값을 담지 않고 있는데 어떻게 인자로 넣어줄 수 있는 거?
    if (
      condition.departure !== departure ||
      condition.destination !== destination
    ) {
      console.log("condition 상태를 변경시킵니다");
      // 2. setCondition() 함수안에 condition state 입력
      setCondition({ departure, destination });
      // TODO:
    }
  };

  useEffect(() => { // flightDataApi 참고해서
    setIsLoading(true); // 새롭게 HTTP 요청 보낼 때는 .. 로딩중
    getFlight(condition)
    .then(data => { // Promise 객체 성공 시 resolve가 잘 되었다.
      setIsLoading(false); // 로딩이 다 끝났다.
      setFlightList(data); // 항공편 목록 전달
    })
  }, [condition]); // 조건이 바뀔 때


  global.search = search; // 실행에는 전혀 지장이 없지만, 테스트를 위해 필요한 코드입니다. 이 코드는 지우지 마세요!

  return (
    <div>
      <Head>
        <title>States Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>여행가고 싶을 땐, States Airline</h1>
        {/* Search 컴포넌트에 props 전달 */}
        <Search onSearch={search} /> 
        <div className="table">
          <div className="row-header">
            <div className="col">출발</div>
            <div className="col">도착</div>
            <div className="col">출발 시각</div>
            <div className="col">도착 시각</div>
            <div className="col"></div>
          </div>
          {isLoading ? <LoadingIndicator /> : <FlightList list={flightList}/> }
        </div>

        <div className="debug-area">
          <Debug condition={condition} />
        </div>
      </main>
    </div>
  );
}
