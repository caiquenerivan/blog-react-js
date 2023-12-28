import { A, Container, SubTitulo, Titulo } from "./styles";

export const PostsDestaque = ({ titulo, subTitulo, capa, id }) => {
  return (
    <A to={`/Post/:${id}`} titulo={titulo} subTitulo={subTitulo} capa={capa} id={id}>
      <Container capa={capa}>
        <Titulo>{titulo}</Titulo>
        <SubTitulo>{subTitulo}</SubTitulo>
      </Container>
    </A>
  );
};
