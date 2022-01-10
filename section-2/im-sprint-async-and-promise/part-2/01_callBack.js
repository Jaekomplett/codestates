const fs = require("fs");

const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해 작성합니다
  fs.readFile(filePath, 'utf8', (err, data) => {
    // 콜백을 데이터로
    if (err) {
      callback(err, null) // 에러를 던집니다.
    } else if (data) {
      callback(null, data)
    }
  })
}

getDataFromFile('README.md', (err, data) => console.log(err, data));

module.exports = {
  getDataFromFile
};
