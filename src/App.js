import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Pesquisar } from "./pages/Pesquisar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./tema/temas";

const AppContainer = styled.div`
  text-align: center;
  margin: 0;
  background-color: ${(props) => props.theme.bgColor};
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppContainer>
        <ContentBox>
          <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="/Pesquisar"
                element={<Pesquisar />}
              />
              <Route path="/post/:id" />
            </Routes>
          </BrowserRouter>
        </ContentBox>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
