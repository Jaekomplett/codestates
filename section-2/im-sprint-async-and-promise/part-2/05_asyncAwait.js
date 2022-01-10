const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  
  // TODO: async/await 키워드를 이용해 작성합니다
  // async, await
  // 비동기 non-blocking이 지친다?
    // 비동기 promise 지친다 동기 blocking 코드처럼 짜고 싶다.

  let data1 = await getDataFromFilePromise(user1Path); // 비동기 작업 끝날 때까지 기다려줌
  let data2 = await getDataFromFilePromise(user2Path); // 비동기 작업 끝날 때까지 기다려줌
  // 비동기 작업이 코드가 존나 많으면 존나 오래 걸림
  

  return [JSON.parse(data1), JSON.parse(data2)]; // [{}, {}]
}

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}