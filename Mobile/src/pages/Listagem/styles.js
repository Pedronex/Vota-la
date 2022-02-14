import { Text, View, Image } from "react-native";
import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import { fonts } from "../../styles";

export const Container = styled(View)`
  flex: 1;

  align-items: center;
  justify-content: space-evenly;

  background-color: #fff;
`;

export const ListView = styled(View)`
  width: 80%;
`;

export const Button = styled(RectButton)`
  width: 100%;
  border-radius: 30px;
`;

export const ButtonView = styled(View)`
  align-items: center;

  border-radius: 30px;

  border-width: 3px;
  border-color: #83aedb;

  padding: 2%;
`;

export const TextHeader = styled(Text)`
  width: 100%;

  color: #000;
  font-family: ${fonts.familyContent};
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const TextContent = styled(Text)`
  width: 100%;

  color: ${(props) => props.colorText || "#000"};
  font-family: ${fonts.familyContent};
  font-weight: bold;
  font-size: 14px;
`;

export const ButtonLogo = styled(Image).attrs({
  resizeMode: "contain",
})`
  width: 30%;
  height: 100%;
`;
