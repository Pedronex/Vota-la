import { Image, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { fonts } from "../../styles";

export const Container = styled(View)`
  flex: 1;

  align-items: center;
  justify-content: center;
  
  background-color: #fff;
`;

export const ListView = styled(View)`
  height: 90%;
`

export const Footer = styled(View)`
  position: absolute;
  bottom: 2%;
  left: 0px;
  right: 0px;

  flex-direction: row;

  justify-content: space-evenly;
`

export const GroupInfo = styled(View)`
  width: 75%;
`;

export const LogoCandidato = styled(Image).attrs({
  source: require("../../assets/Candidato.png"),
  resizeMode: "center",
})`
  width: 20%;
`;

export const ViewCandidato = styled(View)`
  background-color: ${props => props.background || 'rgba(0, 0, 0, 0.16)'};

  border-radius: 10px;

  margin-bottom: 5%;

  flex-direction: row;

  padding: 2%;
  justify-content: space-between;
`;

export const DescriptionText = styled(Text)`
  color: ${props => props.color || '#000'};
  font-size: 18px;
  text-align: center;
  font-family: ${fonts.familyContent};
  text-align: justify;
`;

export const ContentText = styled(Text)`
  font-size: 18px;
  text-align: ${(props) => props.align || "center"};
  font-family: ${fonts.familyContent};
  font-weight: 700;
  color: ${props => props.color || '#000'};
`;

export const Title = styled(Text)`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  font-family: ${fonts.familyContent};
`;

export const SubTitle = styled(Text)`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  font-family: ${fonts.familyContent};
`;

export const Button = styled(RectButton)`
  width: 40%;

  background-color: ${(props) => props?.color || "#000"};

  border-radius: 10px;
`;

export const TextButton = styled(Text)`
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
`;