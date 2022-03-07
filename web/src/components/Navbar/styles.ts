import styled from "styled-components";
import Logo from "../../assets/Registrar.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: 10px 0px;

  height: 6vh;
  width: 100vw;

  background-color: #453f8f;

  justify-content: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  font-family: Roboto;
  text-align: center;
  align-self: center;
`;

export const LogoImage = styled.img.attrs(() => ({
  src: Logo,
  alt: "Logo vota lá",
}))`
  height: 100%;
  margin-right: 1%;
`;
