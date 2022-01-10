const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

const readAllUsersChaining = () => {
  // files/user1.json, files/user2.json => [{}, {}];
  // files/user1.json -> buffer -> string -> JSON.parse -> javascript object
  return getDataFromFilePromise(user1Path)
    .then((user1) => {
      // then이 전달받는 parameter는 실행된 함수의 결과값
      return getDataFromFilePromise(user2Path)
      // 프로미스를 리턴, 성공하면 return 값이 다음 인자로 전달이 된다.
      .then((user2) => {
        return "[" + user1 + "," + user2 + "]";
      });
    })
    .then((result) => JSON.parse(result)); // 파일 읽기의 결과가 문자열이므로
};


// getDataFromFilePromise 함수가 다 잘 작동 되었고 그 결과는 OOO이다.
  // Promise 객체가 위 정보를 다 담고 있다.
  // Promise의 상태: fulfilled
  // Promise의 body: 그 결과
    // then을 통해서 알 수 있다.

module.exports = {
  readAllUsersChaining,
};
