import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ButtonCalendar = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(0,0,0,0.16);
`;