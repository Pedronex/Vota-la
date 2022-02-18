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
`;

export const InfoData = styled(Text)`
  font-size: 16px;
  text-align: left;
  background-color: rgba(0,0,0,0.16);
  color: rgba(0,0,0,0.50);
  border-radius: 15px;
  padding: 5px;
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
`;

export const TextButton = styled(Text)`
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
`;

export const Footer = styled(View)`
  position: absolute;
  bottom: 2%;
  left: 0px;
  right: 0px;

  flex-direction: row;

  justify-content: space-evenly;
`;

export const Button = styled(RectButton)`
  width: 40%;

  background-color: ${(props) => props?.color || "#000"};

  border-radius: 10px;
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