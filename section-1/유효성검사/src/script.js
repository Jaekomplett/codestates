// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector("#username"); // 변수에 selector 할당하기 ->

let elInputPassword = document.querySelector("#password"); 
let elPasswordConfirm = document.querySelector("#password-retype")

let elPassMismatch = document.querySelector(".mismatch-message")
// 변수에 비밀번호 selector 할당


let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");




elInputUsername.onkeyup = function () {
  // '글자 수가 4개 이상'이면
  if (isMoreThan4Length(elInputUsername.value)) {
    // 성공 메시지 띄우기
    elSuccessMessage.classList.remove("hide");

    // 실패 메시지 가리기
    elFailureMessage.classList.add("hide");
  } else {
    // 성공 메시지 가리기
    elSuccessMessage.classList.add("hide");

    // 실패 메시지 띄우기
    elFailureMessage.classList.remove("hide");
  }
}

function isMoreThan4Length(value) {
  return value.length >= 4;
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
}


elPasswordConfirm.onkeyup = function () {
  if (isMatch(elInputPassword.value,elPasswordConfirm.value)) {
    //일치
    elPassMismatch.classList.add("hide")
  } else {
    //실패
    elPassMismatch.classList.remove("hide")
  }
}


function isMatch(password1, password2) {
  return password1 === password2;

  
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  
}
