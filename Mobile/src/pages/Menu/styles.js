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
