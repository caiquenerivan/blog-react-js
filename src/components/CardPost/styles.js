import styled from "styled-components";

export const Card = styled.div`
    width: 15em;
    height: 20em;
    border: 0.1px solid ${(props) => props.theme.primaryColor};
    border-radius: .2em;
    padding: 0;
    margin: .5em;
`;
export const Imagem = styled.img`
    width: 100%;
    border-bottom: 0.1px solid ${(props) => props.theme.primaryColor};
    height: 40%;
    object-fit: cover;
`;
export const CardInfo = styled.div`
    width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60%;
`;

export const Titulo = styled.h1`
    color: ${(props) => props.theme.primaryColor};
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    max-width: 100%;
    text-transform: uppercase;
`;
export const SubTitulo = styled.h2`
    color: ${(props) => props.theme.primaryColor};
    font-size: .8rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    max-width: 100%;
    text-transform: uppercase;
`;
export const Data = styled.p`
    color: ${(props) => props.theme.primaryColor};
    font-size: .6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    max-width: 100%;
`;

export const Autor = styled.p`
    color: ${(props) => props.theme.primaryColor};
    font-size: .6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    max-width: 100%;
`;