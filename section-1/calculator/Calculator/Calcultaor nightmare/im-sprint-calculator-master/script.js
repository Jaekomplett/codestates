const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
//함수 선언할 때 괄호 안 매개변수 (파라미터)
function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  // 함수 calculate 내부의 operator는 매개변수라서 이 안에서만 작동한다.
  
  // if (operator === '+') {
  //   result = Number(n1) + Number(n2);
  // }
  // if (operator === '-') {
  //   result = n1 - n2;
  // }
  // if (operator === '*') {
  //   result = n1 * n2;
  // }
  // if (operator === '/') {
  //   result = n1 / n2;
  // }
  
  switch (operator) {
    case '+': 
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*': 
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;
  }
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    //! 숫자 버튼
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      if (firstOperend === '0') {
        firstOperend.textContent = buttonContent;
      } else {
        secondOperend.textContent = buttonContent;
      }
      console.log('숫자 ' + buttonContent + ' 버튼');
    }
    //! 연산자 버튼
    if (action === 'operator') {
      operator.textContent = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }
    //! 초기화 버튼
    if (action === 'clear') {
      firstOperend.textContent = '0';
      operator.textContent = '+';
      secondOperend.textContent = '0';
      calculatedResult.textContent = '0';
      console.log('초기화 버튼');
    }
    //! 계산 버튼
    if (action === 'calculate') {
      // 전달인자(argument)
      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent)
      console.log('계산 버튼');
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum; // undefined 상태로 변수가 제시됨
// 365+345 
buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  // AC버튼으로 돌아가면 기본값으로 다시 돌아가게 값을 할당하면 된다. 
  if (target.matches('button')) {
    if (action === 'number') { 
      //! 숫자버튼 눌렀을 때. 연산자를 누르기 전까지 String끼리 더해주는 작업.
      // 문제) 앞에 0이 있으면 01234 이런 꼴로 나옴 
      // previousKey === “operator” 의 operator 랑 (action === ‘operator’) 의 operator 는 다름
      if(display.textContent === '0' || previousKey === "operator" || previousKey === "calcultor") {
        display.textContent = buttonContent;
      }

      else {
        display.textContent = display.textContent + buttonContent;
      }
      previousKey = "number"; // buttonContent도 해보기
    }
    if (action === 'operator') {
      //! 연산자 버튼을 눌렀을 때
      firstNum = display.textContent;
      operatorForAdvanced = buttonContent
      
      previousKey = "operator"
    }
    if (action === 'decimal') {
      previousKey = "decimal"
    }
    if (action === 'clear') {
      firstNum = undefined;
      operatorForAdvanced = undefined;
      previousNum = undefined;
      display.textContent = '0';
      previousKey = "clear";
    }
    if (action === 'calculate') {
      //! 엔터 버튼
      // 따로 저장된 숫자 = firstNum
      // 계산기 화면에 보이는 숫자 (display.textContent) = previousNum
      previousNum = display.textContent;
      display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
      previousKey = "calculate"
    }
  }

});

// 1. 엔터를 연속으로 누른 경우
//  이전에 했던 연산을 반복 
//  ex) 9 + 9 = = = =
/* if (previousKey === "calculate") {
    display.textContent = calculate(display.textContent, operatorForAdvanced) {
    else
  }
}
*/
// 2. 소수점 계산의 경우
  // 조건: 소수점은 한 숫자에 하나 밖에
  // dispaly.textContent에 .이 없다면?
  // . 버튼을 클릭했을 때 display로 보여줘야 함
  // 
// 마지막 테스트
// 3. 연산이 된 모습이 디스플레이에 보이도록 구현
// 오퍼레이터

