import { Image, Text, View, Platform, TextInput } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

import { fonts } from "../../styles";
import { RectButton } from "react-native-gesture-handler";

const statusbarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Container = styled(View)`
  flex: 1;
  align-items: center;

  background-color: #fff;
`;

export const Form = styled(View)`
  height: 80%;
  width: 100%;

  background: #453f8f;

  elevation: 5;

  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 15px 
  border-bottom-right-radius: 15px 
`;

export const Footer = styled(View)`
  height: 10%;
  width: 90%;

  align-self: center;

  justify-content: space-around;
`;

export const TextHeader = styled(Text)`
  align-self: center;

  color: #fff;
  font-size: 24px;
  font-weight: bold;
  font-family: ${fonts.familyTitle};
  text-align: center;

  width: 80%;
`;

export const Header = styled(View)`
  width: 100%;

  padding-top: ${statusbarHeight + 2 + "px"};

  background: #453f8f;

  padding-bottom: 2%;

  flex-direction: row;

  elevation: 5;
`;

export const Input = styled(TextInput)`
  width: 100%;

  padding: 2%;

  font-size: 16px;
  color: #000;

  background-color: #fff;

  border-radius: 30px;
`;

export const InputInfo = styled(Text)`
  width: 100%;

  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto_400Regular;
`;

export const GroupInput = styled(View)`
  width: 80%;

  margin-bottom: 5%;
`;

export const Button = styled(RectButton)`
  width: 50%;

  background-color: #4374a8;

  border-radius: 30px;

  padding: 5px;
  margin-top: 5%;

  justify-content: center;
  align-content: center;
`;

export const TextButton = styled(Text)`
  width: 100%;

  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: Roboto_400Regular;
  text-align: center;
`;

export const Logo = styled(Image).attrs({
  source: require("../../assets/Registrar.png"),
  resizeMode: "center",
})`
  width: 10%;
  height: 100%;
`;
