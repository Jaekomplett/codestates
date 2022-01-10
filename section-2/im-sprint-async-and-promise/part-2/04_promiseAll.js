const { text } = require("express");
const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
  // return Promise.all([
  // getDataFromFilePromise(user1Path),
  // getDataFromFilePromise(user2Path),
  // ])
  // .then(([user1, user2]) => {
  // return "[" + user1 + "," + user2 + "]";
  // })
  // .then((data) => JSON.parse(data));
  // };

  // files/user1.json, files/user2.json => [{}, {}];
  // files/user1.json -> buffer -> string -> JSON.parse -> javascript object
  // getDataFromFilePromise

  // method. 1
  // const user1 = getDataFromFilePromise(user1Path);
  // const user2 = getDataFromFilePromise(user2Path);

  // // Promise.all() 안에는 배열이 들어가야 한다.
  // return Promise.all([user1, user2])
  //   .then((result) => result.map((data) => JSON.parse(data)))
  //   .catch((err) => console.log(err));

  // method. 2
  const paths = [user1Path, user2Path];
  const texts = paths.map((path) => getDataFromFilePromise(path));
  // text === [ getDatxtsFromFilePromise(user1Path), getDataFromFilePromise(user2Path)]
  // text === [ Promise, Promise]
  // Promise.all(여기에 배열이 담긴다)
  return Promise.all(promise).then((texts) =>
    texts.map((text) => JSON.parse(text))
  );
  // 상태 : fullfilled, 결과 : ['', ''] => Promise
};

readAllUsers();

module.exports = {
  readAllUsers,
};
