const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// script.js 파일을 만들고 태그를 가져와서 변수에 담기

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  // switch case
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

/*
buttons.addEventListener('click', function (event) {
  // 버튼이 눌렸을 때 자동으로 함수가 작동이 된다.
  // 'click'이 작동했을 때 뒤의 함수가 작동을 한다.
  // 'click'외의 다른 가 왔을 때도 다르게 작동.
  // function ()
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  // target으로 정한 대상의 이벤트가 어떻게 일어나는지 보인다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  // 이벤트가 일어난 오브젝트의 클래스가 string 형태로 담긴다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  // TODO : 숫자 입력 없이 연산자를 눌렀을 때 alert로 '숫자를 먼저 입력하세요.' 띄워보기.
  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면         
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      // ! 숫자 버튼 클릭 했을 때
      if (action === 'number') {
        if (isOperator === 0) {
          firstOperend.textContent = Number(firstOperend.textContent + buttonContent);
        } else {
          secondOperend.textContent = Number(secondOperend.textContent + buttonContent);
        }
      console.log('숫자 ' + buttonContent + ' 버튼');
    }
      
    if (action === 'operator') {
      // ! 연산자 버튼 클릭 했을 때
      operator.textContent = buttonContent
      isOperator = 1;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    // firstOperend : 소수점이 하나만 , secondOperend : 소수점 하나만
    //  operator를 받으면 두 번째로 넘어감.
    if (action === 'decimal') {
      if (Boolean(isOperator) === false){
        if (isDecimaln1 === 0){
          firstOperend.textContent = firstOperend.textContent + buttonContent;
          isDecimaln1 = 1;
        }
      } else {
        if (isDecimaln2 === 0){
          secondOperend.textContent = secondOperend.textContent + buttonContent;
          isDecimaln2 = 1;
        }
      }
       
      console.log('소수점 버튼');
    }

    if (action === 'clear') {
      isOperator = 0;
      isDecimaln1 = 0;
      isDecimaln2 = 0;
      firstOperend.textContent = '0';
      operator.textContent = '+';
      secondOperend.textContent = '0';
      calculatedResult.textContent = '0';

      console.log('초기화 버튼');
    }

    if (action === 'calculate') {
      // ! Enter 버튼 클릭
      // 첫 번째 숫자, 연산자, 두 번째 숫자를 확정해야 합니다.
      // 위 세가지를 함수 calculate에 전달하고, 돌려받은 결과값이 마지막 칸에 입력되어야 합니다.
      calculatedResult.textContent = calculate(Number(firstOperend.textContent), operator.textContent, Number(secondOperend.textContent))

      console.log('계산 버튼');
    }
  }
});
*/

// Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;
let isOperator = 0;
let isDecimaln1 = 0;
let isDecimaln2 = 0;
buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      if (isOperator === 0) {
        firstOperend.textContent = firstOperend.textContent + buttonContent;
      } else {
        secondOperend.textContent = secondOperend.textContent + buttonContent;
      }
      console.log ('숫자 ' + buttonContent + ' 버튼');

    }
    if (action === 'operator') {}
    if (action === 'decimal') {}
    if (action === 'clear') {}
    if (action === 'calculate') {}
  }

});
