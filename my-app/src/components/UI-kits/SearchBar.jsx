import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import debounce from "lodash.debounce";

export const SearchBar = () => {
  const [, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const debouncedHandleChange = useMemo(() => {
    return debounce(handleChange, 800);
  }, []);

  return (
    <WrapperStyled>
      <SearchBarStyled
        placeholder="Looking for..."
        onChange={debouncedHandleChange}
        type="text"
      />
      <SearchButtonStyled>
        <BiSearchAlt size={22} color="white" />
      </SearchButtonStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  margin: auto;
  display: flex;
  gap: 5px;
`;

const SearchBarStyled = styled.input`
  border: none;
  background-color: #e3e3e3;
  border-radius: 10px;
  width: 300px;
  height: 45px;
  font-size: 1.3rem;
  padding-left: 15px;
  padding-right: 15px;
`;

const SearchButtonStyled = styled.div`
  cursor: pointer;
  background-color: #0bbcff;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
