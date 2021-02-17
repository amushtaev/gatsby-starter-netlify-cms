import React from "react";
import styled from 'styled-components';
import {InputContainerRu} from "./pricing/styledComponents";

const Container = styled.div`
    display: inline-block;
    height: 64px;
    position: relative;
    width: 100%;
`;

const Back = styled.div`
    display: inline-block;
    height: 64px;
    background: #f4f4f4;
    border-radius: 60px;
    width: 100%;
`;

const Input = styled.input`
    background: #f4f4f4;
    border: none;
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    outline: none;
    height: 100%;
    width: 93%;
`;

export const SmallSimpleTextInputRus = (props) => {
  const {id, className, name, placeholder, defaultValue, onChange} = props;
  return (
    <Container className={className}>
      <Back>
        <InputContainerRu>
          <Input
            id={id}
            type='text'
            name={name}
            placeholder={placeholder ?? ''}
            defaultValue={defaultValue ?? ''}
            onChange={(e) => {
              if (onChange !== undefined) {
                onChange(e.target.value);
              }
            }}
          />
        </InputContainerRu>
      </Back>
    </Container>
  );
};
