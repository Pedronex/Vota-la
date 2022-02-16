import { Text, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styled from "styled-components/native";
import { fonts } from "../../styles";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(View)`
  flex: 1;

  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;

  background-color: #fff;
`
export const InfoInput = styled(Text)`
  font-size: 16px;
  text-align: left;
  font-family: ${fonts.familyContent};
`

export const Input = styled(TextInput).attrs({
  maxLenght: 50
})`
  font-size: 16px;
  min-height: 45px;
  background-color: rgba(0,0,0,0.16);
  border-radius: 15px;
  padding: 5px;

  margin-bottom: 5%;
`;

export const InputMultiple = styled(TextInput).attrs({
  multiline: true
})`
  font-size: 16px;
  text-align: justify;
  min-height: 45px;
  background-color: rgba(0,0,0,0.16);
  border-radius: 15px;

  padding: 5px;
  margin-bottom: 5%;
`;

export const TextButton = styled(Text)`
  font-size: 16px;
  background-color: rgba(0,0,0,0.16);
  border-radius: 15px;

  padding: 5px;
  margin-bottom: 5%;
`