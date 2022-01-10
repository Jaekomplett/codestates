const http = require('http');
const PORT = 5000;
const ip = 'localhost';

const server = http.createServer((request, response) => {
  console.log(request);
  if (request.method === 'OPTIONS') {
    // 클라이언트의 preflight request에 대한 응답을 돌려준다
    response.writeHead(200, defaultCorsHeader);
    response.end(); // end() 담은 게 없으면 아무것도 출력하지 않는다.
  }
  
  if (request.method === 'POST') {
    let body = [];
    request
      .on('data', (chunk) => {
        // 위의 HTTP 트랜잭션 해부 문서에서 공부했던 것처럼,
        // body 배열에 chunk를 담고
        body.push(chunk);
      })
      .on('end', () => {
        // end 이벤트에서 이어 붙이고 문자열로 만든다
        body = Buffer.concat(body).toString();
        response.writeHead(201, defaultCorsHeader);
        if (request.url === '/lower') {
          response.end(body.toLowerCase());
        } else if (request.url === '/upper') {
          response.end(body.toUpperCase());
        } else {
          response.writeHead(404, defaultCorsHeader);
          response.end();
        }
      });
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

// 응답 헤더
const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10,
};



// const http = require('http');

// const PORT = 5000;

// const ip = 'localhost';

// const server = http.createServer((request, response) => {
//   const {method, url} = request;
  
//   if(method === "OPTIONS"){
//     response.writeHead(204, defaultCorsHeader)
//     response.end()
//   }
//     if(method === "POST") {
//     let body = [];
//     request.on('data', (chunk) => {
//       body.push(chunk);
//     }).on('end', () => {
//       body = Buffer.concat(body).toString();
//       // 여기서 `body`에 전체 요청 바디가 문자열로 담겨있습니다.
//       response.writeHead(201, defaultCorsHeader)
//       if(url ==="/upper"){
//         response.end(body.toUpperCase())
//       }else if(url === '/lower') {
//         response.end(body.toLowerCase())
//       }else {
//         response.writeHead(404, defaultCorsHeader)
//         response.end()
//       }
//     })  
//   }
  
//       // 여기서 `body`에 전체 요청 바디가 문자열로 담겨있습니다.
      
  
//   console.log(
//     `http request method is ${request.method}, url is ${request.url}`
//   );
//   response.writeHead(200, defaultCorsHeader);
//   response.end('hello mini-server sprints');
// });

// server.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });

// const defaultCorsHeader = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Accept',
//   'Access-Control-Max-Age': 10
// };