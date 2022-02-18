import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { fonts } from '../../styles'

export const Container = styled(View)`
  flex: 1;

  align-items: center;

  padding: 5%;
`;

export const ListView = styled(View)`
  width: 95%;
`;

export const ViewContent = styled(View)`

  background-color: rgba(0,0,0,0.16);
  border-radius: 10px;

  justify-content: space-between;

  padding: 2%;

  margin-bottom: 5%;
`;

export const TitleContent = styled(Text)`
  width: 100%;

  font-family: ${fonts.familyContent};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Content = styled(Text)`
  font-family: ${fonts.familyContent};
  text-align: left;
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