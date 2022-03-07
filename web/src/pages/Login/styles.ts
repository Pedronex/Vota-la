import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
`;

export const LayerLeft = styled.div`
  display: flex;
  align-self: flex-start;
  width: 20%;
  justify-content: space-between;

  background-color: #aaa;
`;

export const LayerRight = styled.div`
  display: flex;
  align-self: flex-end;
  width: 20%;
  justify-content: space-between;
  background-color: #eee;
`;

export const LayerCenter = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 80vh;
  align-items: center;
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  justify-content: center;
`;

export const InputForm = styled.input`
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  background-color: #333;

  border: 0px;
  border-radius: 5px;

  padding: 5px;

  margin-bottom: 15px;
`;

export const LabelForm = styled.label`
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto;

  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GroupButton = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 45%;

  border: 0px;
  border-radius: 10px;

  padding: 5px;

  font-size: 16px;
  font-weight: bold;

  background-color: ${(props) => props.color || "#5856D6"};
  color: inherit;
`;
