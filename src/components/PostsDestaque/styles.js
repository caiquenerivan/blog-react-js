import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 40em;
  border: 0.1px solid ${(props) => props.theme.primaryColor};
  border-radius: 0.2em;
  margin: 0.5em;
  background-image: url(${(props) => props.capa});
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: end;
  align-items: baseline;
  flex-direction: column;
  cursor: pointer;

  &:before{
    background-color: rgba(0, 0, 0, 0.4);
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
  }
  &:hover{
    transform:scale(1.02);
  }
`;

export const Titulo = styled.h1`
  color: #f6f6ed;
  font-size: 4rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  max-width: 100%;
  text-transform: uppercase;
  margin-left: 2em;
  margin-bottom: 0;
  position: relative;
`;

export const SubTitulo = styled.h2`
  color: #f6f6ed;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  max-width: 100%;
  text-transform: uppercase;
  margin-bottom: 2em;
  position: relative;

`;

export const A = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryColor};
  margin-right: 0.5em;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Open-Sans", sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.secondColor};
    font-weight: 700;
  }
`;