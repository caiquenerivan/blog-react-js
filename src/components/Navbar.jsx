import React from "react";
import styled from "styled-components";
import Switch from "./Switch/Switch";
import { NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Nav = styled.nav`
  border-bottom: 0.1px solid ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.bgColor};
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 2em;
`;
const Li = styled.li`
  list-style-type: none;
  font-size: 1.1em;
`;
const A = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.primaryColor};
  margin-right: 0.5em;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Open-Sans", sans-serif;
  &:hover {
    color: ${(props) => props.theme.secondColor};
    font-weight: 700;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryColor};
`;
const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TituloBlog = styled.h1`
  font-family: "Open-Sans", sans-serif;
  font-weight: 500;
  color: ${(props) => props.theme.primaryColor};
`;
const TituloBlogNegrito = styled.span`
  font-weight: 700;
`;
const TituloDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Dropdown = styled(NavDropdown)`
  font-size: 1.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.bgColor};
  font-family: "Open-Sans", sans-serif;
  padding: 0;
  margin: 0;

  .dropdown-menu.show {
    margin: 0;
    padding: 0;
  }

  &:hover {
    color: ${(props) => props.theme.secondColor};
    font-weight: 700;
  }
`;

const DropdownItem = styled(NavDropdown.Item)`
  margin: 0;
  text-decoration: none;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.bgColor};
  padding-right: 0.5em;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Open-Sans", sans-serif;

  &:hover {
    color: ${(props) => props.theme.secondColor};
    background-color: ${(props) => props.theme.bgColor};
    font-weight: 700;
  }
`;

export const Navbar = ({ toggleTheme, isDarkTheme }) => {
  return (
    <Nav>
      <Ul>
        <Li>
          <A href="/">Home</A>
        </Li>
        <Li>
          <A href="/Pesquisar"> Pesquisar</A>
        </Li>
        <Li>
          <A href="/Sobre"> Sobre</A>
        </Li>
        <Dropdown title="Categorias" id="basic-nav-dropdown">
          <DropdownItem href="/Esportes">Esportes</DropdownItem>
          <DropdownItem href="/Cultura">Cultura</DropdownItem>
          <DropdownItem href="/Tecnologia">Tecnologia</DropdownItem>
          <DropdownItem href="/OutrasCategorias">Outros Assuntos</DropdownItem>
        </Dropdown>
      </Ul>
      <TituloDiv>
        <TituloBlog>
          Blog do <TituloBlogNegrito>Nerivan</TituloBlogNegrito>
        </TituloBlog>
      </TituloDiv>
      <ToggleButton>
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </ToggleButton>
    </Nav>
  );
};
