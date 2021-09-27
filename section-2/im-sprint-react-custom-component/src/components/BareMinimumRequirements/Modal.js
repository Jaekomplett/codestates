import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  height: 100%;
  text-align: center;
  margin: 8rem auto;
  
`;

export const ModalBackdrop = styled.div`
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
// TODO : Modal창 CSS를 구현합니다.
  height: 10rem;
  width: 10rem;
  background-color: yellowgreen;
  border-radius: 10px;

  > div.close_btn {
    margin: 20px;
    cursor: pointer;
  }

  > div.desc {
    color: white;
    margin: 50px;
  }
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
  };

  return (
    <>
      <ModalContainer>  
        {/*Modal 버튼*/}
        <ModalBtn onClick={openModalHandler}>
          {isOpen === false ? 'Open Modal' : 'Opened'}
        </ModalBtn>

        {/*Modal 버튼 활성화시 ? Modal 배경 출력(배경 누르면 off)*/}
        {/*Modal 배경 안에 ModalView 컴포넌트*/}
        {/**/}

        {isOpen === true ? <ModalBackdrop onClick={openModalHandler}>
          <ModalView>
            <span onClick={openModalHandler} className='close_btn'></span>
            <div className='desc'>This is Modal</div>
          </ModalView>
          </ModalBackdrop> : null}
      </ModalContainer>
    </>
  );
};