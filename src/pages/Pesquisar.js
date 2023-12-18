import React, { useContext, useEffect, useState } from "react";
import styled, { ThemeContext, ThemeProvider } from "styled-components";

const ContentBox = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.h1`
  color: ${(props) => props.theme.primaryColor};
  font-family: 'Roboto', sans-serif;
`;

export const Pesquisar = () => {
  const themeContext = useContext(ThemeContext);

  {

    /*}
  const [theme, setTheme] = useState([]);

  useEffect(() => {
    const themes = JSON.parse(localStorage.getItem("theme"));
    console.log(themes);

    if (themes) {
      setTheme(themes);
    }
  }, []);
*/
  }
  return (
      <ContentBox>
        <Titulo>Pesquisar</Titulo>
      </ContentBox>
  );
};
