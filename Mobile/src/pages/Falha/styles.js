import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { fonts } from "../../styles";

export const Container = styled(View)`
  flex: 1;
  
  align-items: center;
  justify-content: center;

  background-color: #D28A8A;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 36px;
  text-align: center;

  font-family: ${fonts.familyTitle};
`

export const SubTitle = styled(Text)`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  font-family: ${fonts.familyTitle};
`

export const Footer = styled(View)`
  position: absolute;
  bottom: 2%;
  left: 0px;
  right: 0px;

  align-items: center;
  justify-content: center;
`

export const Button = styled(RectButton)`
  width: 90%;
  
  background-color: #B10D0D;

  border-radius: 10px;
`

export const TextButton = styled(Text)`
  text-align: center;
  font-weight: 700;
  font-size: 18px;

  font-family: ${fonts.familyContent};
`
