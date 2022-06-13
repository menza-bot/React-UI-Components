import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { CgCloseR } from "react-icons/cg";
import "../../styles.css";

export const NotificationsRoot = () => {
  const [isVisible, setVisible] = useState(false); // to make code without repeating it needs to be added React.Context
  const [currentAnim, setCurrentAnim] = useState("");

  return (
    <WrapperStyled>
      <CSSTransition
        in={isVisible}
        classNames={currentAnim === "hoising" ? "hoising" : "standard"}
        timeout={300}
        unmountOnExit
      >
        <Toaster setVisible={setVisible} />
      </CSSTransition>
      <>
        <Button
          color="blue"
          label="hoising"
          setVisible={setVisible}
          setCurrentAnim={setCurrentAnim}
        />
        <Button
          color="red"
          label="standard"
          setVisible={setVisible}
          setCurrentAnim={setCurrentAnim}
        />
      </>
    </WrapperStyled>
  );
};

const Button = ({ label, color, setVisible, setCurrentAnim }) => {
  return (
    <ButtonStyled
      color={color}
      onClick={() => {
        setCurrentAnim(label);
        setVisible(true);
      }}
    >
      {label}
    </ButtonStyled>
  );
};

const Toaster = ({ setVisible }) => {
  return (
    <ToasterStyled>
      <IconWrapper onClick={() => setVisible(false)}>
        <CgCloseR style={{ color: "white", size: "20px" }} />
      </IconWrapper>
    </ToasterStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin: auto;
`;

const ButtonStyled = styled.div`
  width: 150px;
  height: 50px;
  background-color: ${(props) =>
    props.color === "blue" ? "#38CFFF" : "#F11850"};
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ToasterStyled = styled.div`
  position: absolute;
  cursor: pointer;
  right: 30px;
  top: 30px;
  width: 300px;
  height: 80px;
  border-radius: 10px;
  background-color: #f11850;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;
