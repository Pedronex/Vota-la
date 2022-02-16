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

export const Button = styled(RectButton)`
  width: 95%;
  height: 15%;
  border-radius: 30px;
`;

export const ButtonView = styled(View)`
  width: 100%;
  height: 100%;

  background-color: #4374a8;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 30px;

  border-width: 3px;
  border-color: #83aedb;
  padding: 2%;
`;

export const ButtonText = styled(Text)`
  width: 70%;

  color: #fff;
  font-family: ${fonts.familyTitle};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

export const ButtonLogo = styled(Image).attrs({
  resizeMode: "contain",
})`
  width: 30%;
  height: 100%;
`;

export const ButtonLogout = styled(RectButton)`
  width: 95%;
  align-items: center;
`;
