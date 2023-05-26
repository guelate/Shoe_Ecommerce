import React from 'react';
import styled from 'styled-components';
import BlackButton from './BlackButton';

const CustomField = styled.label`
    display:flex;
    flex-direction:row;
    padding: 10px; 10px; 5px; 0px;
    position: relative;
    font-size: 14px;
    width:230px;
    outline:solid;
    justify-content:space-between;
    border-radius:10px;
    background:white;
`;
const Input = styled.input`
  border: none;
  border-radius: 3px;
  width: 150px;
  outline: none;
  font-size: 14px;
  background:white;
  align-items:center;

`;

const CustomInput = () => {
  return (
    <CustomField>
      <Input type="text" placeholder="@ EMAIL" maxLength={35}/>
      <BlackButton padding="0% 10%" children={"validez"} />
    </CustomField>
  );
};

export default CustomInput;
