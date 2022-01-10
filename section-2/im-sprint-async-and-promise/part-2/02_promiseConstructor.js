const fs = require("fs");

const getDataFromFilePromise = filePath => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if(err){
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
  
};

getDataFromFilePromise('README.md').then(data => console.log(data))
.catch(err => console.log(err))

module.exports = {
  getDataFromFilePromise
};
