/* index.js */

// 모듈 변수선언
const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

// view는 ejs 확장자를 사용할거다
app.set("view engine", "ejs");

// static = "정적인" 이라는 뜻
// uploads 폴더에서 정적인 파일을 로드할 수 있다
app.use(express.static("uploads"));

// 요청 본문의 있는 데이터를 해석해서 req.body(bodyParser) 객체로 만들어주는 미들웨어
// 요청의 본문에 있는 데이터는 항상 URL-encoded라는 문자열로 들어오는데
// 데이터를 사용하기 위해선 객체로의 변환이 필요
app.use(express.urlencoded({ extended: true }));

// URL-encoded라는 문자열을 json 파일 형식으로 받을 것이다
// bodyParser는 json 파일 형식으로 받을 것이다
// json이라는 파일형식은 데이터를 저장하는 방법중 하나
// 우리가 전달받을 bodyParser는 회원가입때 인풋에 적은 것들이 될 것이다
app.use(bodyParser.json());

const router = require("/routes");
app.use("/", router);

// 이건 없어도 상관없음 서버가 열렸을때 이 콘솔을 찍어주겠다는
// 포트번호 알려주는거야 나중에 포트 번호 따로 적어줘
app.listen(port, () => {
    console.log("Server Port: ", port);
});
