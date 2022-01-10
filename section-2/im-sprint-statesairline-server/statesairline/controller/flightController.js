const flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: (req, res) => {
    // console.log(req.query.departure)
    const dt = req.query.departure_times
    const at = req.query.arrival_times

    if(dt && at){
      const filtered = flights.filter(el => 
        el.departure_times === dt &&
        el.arrival_times === at
      )
      return res.json(filtered) 
      // return res.status(200).json(filtered)
      // status(200)은 원래 기본값으로 출력돼서 굳이 입력하지 않아도 오류없이 출력된다.

    }

    const destination = req.query.destination 
    const departure = req.query.departure
    if(destination && departure){
      const filtered = flights.filter(el => 
        el.destination === destination &&
        el.departure === departure
        )
        return res.json(filtered)
    }
    
      // {
      //   uuid: 'af6fa55c-da65-47dd-af23-578fdba40bed',
      //   departure: 'ICN',
      //   destination: 'CJU',
      //   departure_times: '2021-12-02T12:00:00',
      //   arrival_times: '2021-12-03T12:00:00'
      // }
    return res.json(flights); // 아무것도 입력하지 않았을 때
  },
  // [GET] /flight/:id
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: (req, res) => {
    // TODO:
    // console.log(req.params)
    if(req.params.id){
      const filtered = flights.filter(el => 
        el.uuid === req.params.id
        )
      return res.json(filtered)
    } else {
      res.status(404).send('Not Found')

    }
  },

  // [PUT] /flight/:id 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    let data;
    // TODO:

    return res.status(200).json(data);
  }
};
