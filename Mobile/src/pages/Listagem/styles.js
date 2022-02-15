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

  padding-left: 3%;
  padding-right: 3%;
  padding-bottom: 3%;
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

export const Separator = styled(View)`
  height: 5px;

  background-color: rgba(43, 6, 78, 0.75);
  border-radius: 30px;

  width: 100%;
  align-self: center;

  margin: 3%;
`;

export const ButtonBack = styled(RectButton)`
  width: 90%;

  border-radius: 10px;
  background-color: #b10d0d;
`;

export const ButtonLogout = styled(RectButton)`
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;

  flex-direction: row;
`;

export const ButtonText = styled(Text)`
  color: ${(props) => props?.color || '#fff'};
  font-family: ${fonts.familyTitle};
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  margin-left: 3%;
`;

export const Footer = styled(View)`
  position: absolute;
  bottom: 2%;
  left: 0px;
  right: 0px;

  flex-direction: row;

  justify-content: space-evenly;
`;