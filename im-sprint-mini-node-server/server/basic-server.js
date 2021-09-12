// const http = require("http");

// const PORT = 5000;

// const ip = "localhost";

// const server = http.createServer((request, response) => {
//   console.log(`http:// ${request.method} ${request.url}`);
//   if (request.method === "OPTIONS") {
//     response.writeHead(200, defaultCorsHeader);
//     response.end("hello mini-server sprints");
//   }

//   if (request.method === "POST" && request.url === "/lower") {
//     let body = [];
//     request
//       .on("data", (chunk) => {
//         body.push(chunk);
//       })
//       .on("end", () => {
//         body = Buffer.concat(body).toString().toLowerCase();
//         response.writeHead(200, defaultCorsHeader);
//         response.end(body);
//       });
//   } else if (request.method === "POST" && request.url === "/upper") {
//     let body = [];
//     request
//       .on("data", (chunk) => {
//         body.push(chunk);
//       })
//       .on("end", () => {
//         body = Buffer.concat(body).toString().toUpperCase();
//         response.writeHead(200, defaultCorsHeader);
//         response.end(body);
//       });
//   } else {
//     response.writeHead(400, defaultCorsHeader);
//     response.statusCode = 404;
//     response.end();
//   }
// });

// server.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });

// const defaultCorsHeader = {
//   "Access-Control-Allow-Origin": "*",
//   // "Access-Control-Allow-Origin": "http://localhost:5600",
//   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type, Accept",
//   "Access-Control-Max-Age": 10,
// };



// express

const express = require("express"); // 모듈을 불러온다.
const cors = require("cors"); // cors 미들웨어를 불러온다.

const app = express(); // 서버를 만든다.
// app.use() 및 app.METHOD() 함수를 이용해 애플리케이션 미들웨어를 
// 앱 오브젝트의 인스턴스에 바인드

app.use(cors()); 
// 모든 요청이 이 use method를 거쳐간다. 
// 모든 요청에 대해 CORS 를 허용한다.

app.use(express.json({ strict: false })); 
// primitive data type 도 parsing 해주도록 설정

const port = 5000; //app.js에서 포트번호 확인
const ip = "localhost";
app.use(express.static("client")); // 원하는 값을 client 폴더에서 불러온다.


// method는 app에 바로 붙여서 적용이 가능하다.
// GET 
// 클라이언트가 server에 GET 메소드를 사용해서 요청한다. 해당 server의 html,css,js 등의 데이터가 넘겨와진다.
//
app.get("/", (req, res) => {
  res.send("Hello world!");
});


// POST 
// 
app.post("/upper", (req, res) => {
  console.log(req.body);

  let result = req.body;
  result = result.toUpperCase();
  console.log(result);

  res.json(result);
});

app.post("/lower", (req, res) => {
  console.log(req.body);

  let result = req.body;
  result = result.toLowerCase();
  console.log(result);

  res.json(result);
});


app.listen(port, (err) => { // 서버를 해당 포트에 연결시킨다. 
  if (err) return console.log(err); // 에러가 뜨면 에러를 출력한다.
  console.log(`http server listen on ${ip}:${port}`);
});
