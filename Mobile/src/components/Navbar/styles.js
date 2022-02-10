import { Image, Text, View, Platform, TextInput } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

const statusbarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Header = styled(View)`
  width: 100%;

  padding-top: ${statusbarHeight + 2 + "px"};

  background: #453f8f;

  padding-bottom: 2%;

  flex-direction: row;

  elevation: 5;
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

export const Logo = styled(Image).attrs({
  source: require("../../assets/Registrar.png"),
  resizeMode: "center",
})`
  width: 10%;
  height: 100%;
`;
