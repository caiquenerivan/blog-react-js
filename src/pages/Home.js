import React, { useState } from "react";
import styled from "styled-components";
import { CardPost } from "../components/CardPost/CardPost";
import pac from "../assets/imgs/pac.jpg";
import { posts } from "../data/postList";
import { PostsDestaque } from "../components/PostsDestaque/PostsDestaque";
import { Carousel, CarouselItem } from "react-bootstrap";

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

export const ContainerDestaques = styled.div`
  width: 90%;
  height: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2em;
  border-bottom: 0.1px solid ${(props) => props.theme.primaryColor};
`;
export const Carrossel = styled(Carousel)`
  width: 100%;
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

export const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <ContentBox>
      <ContainerDestaques>
        <Carrossel activeIndex={index} onSelect={handleSelect} >
          {posts.map((item) => {
            if (item.destaque === true) {
              console.log(item.id);
              return (
                <CarouselItem className="carousel">
                    <PostsDestaque
                      className="carousel"
                      key={item.id}
                      capa={item.capa}
                      titulo={item.titulo}
                      subTitulo={item.subTitulo}
                      id={item.id}
                    />
                </CarouselItem>
              );
            }
          })}
        </Carrossel>
      </ContainerDestaques>
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
