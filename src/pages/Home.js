import React from "react";
import styled from "styled-components";
import { CardPost } from "../components/CardPost/CardPost";
import pac from "../assets/imgs/pac.jpg";
import { posts } from "../data/postList";

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
  margin-top: 1em;
  font-size: 1.5em;
  font-family: "Roboto", sans-serif;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1em;
`;

export const Home = () => {
  return (
    <ContentBox>
      <Titulo>Novos Posts</Titulo>
      <Cards>
        {posts.map((item) => {
          console.log(item.id);
          return (
            <CardPost
              key={item.id}
              capa={item.capa}
              titulo={item.titulo}
              subTitulo={item.subTitulo}
              autor={item.autor}
              dataPost={item.data}
            />
          );
        })}
      </Cards>
    </ContentBox>
  );
};
