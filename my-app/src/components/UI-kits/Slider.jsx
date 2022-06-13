import React, { useState } from "react";
import styled from "styled-components";

export const Slider = () => {
  const [, setValue] = useState("25");
  const [minValue] = useState("1");
  const [maxValue] = useState("100");

  const rangeHandle = (e) => {
    setValue(e.target.value);
  };

  return (
    <WrapperStyled>
      <SliderStyled
        type="range"
        onChange={rangeHandle}
        min={minValue}
        max={maxValue}
      />
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  margin: auto;
`;

const SliderStyled = styled.input`
  -webkit-appearance: none;
  width: 250px;
  height: 10px;
  background: #d3d3d3;
  border-radius: 45px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #38cfff;
    cursor: pointer;
    border-radius: 45px;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #38cfff;
    cursor: pointer;
  }
`;
