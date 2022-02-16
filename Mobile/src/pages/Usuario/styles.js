import { Text, TextInput, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { fonts } from "../../styles";

export const Container = styled(View)`
  flex: 1;
  
  justify-content: space-between;

  padding: 5%;
  padding-bottom: 15%;
`;

export const Form = styled(View)`
  max-height: 50%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ListView = styled(View)`
  max-height: 50%;
`;

export const InfoInput = styled(Text)`
  font-size: 16px;
  font-family: ${fonts.familyContent};
  text-align: left;
`;

export const Input = styled(TextInput)`
  width: 100%;

  padding: 2%;

  font-size: 16px;
  color: #000;

  background-color: rgba(0,0,0,0.16);

  border-radius: 30px;
`;

export const Info = styled(Text)`
  background-color: #b10d0d;

  padding: 2%;

  border-radius: 10px;

  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto_400Regular;
  text-align: center;
`;

export const Footer = styled(View)`
  position: absolute;
  bottom: 2%;
  left: 5%;
  right: 5%;

  align-items: center;
  justify-content: center;
`

export const Button = styled(RectButton)`
  width: 100%;
  height: 40px;
  
  background-color: ${props => props?.color || '#B10D0D'};

  border-radius: 10px;
  justify-content: center;

  margin-top: 5%;
`

export const TextButton = styled(Text)`
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: #fff;

  font-family: ${fonts.familyContent};
`;

export const ViewInfo = styled(RectButton)`
  padding: 2%;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.16);
  margin: 1% 0px;

`;

export const GroupInfo = styled(View)`
  flex-direction: row;
  justify-content: space-between;

  margin: 1% 0px;
`;

export const TextInfo = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  font-family: ${fonts.familyContent};

  color: ${({ color = '#000' }) => color};
`;

export const ButtonUsuario = styled(RectButton)`
  min-width: 30%;
  padding: 2%;
  border-radius: 10px;

  background-color: ${({ background = '#000' }) => background};
`;