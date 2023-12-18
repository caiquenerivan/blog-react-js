import { Autor, Card, CardInfo, Data, Imagem, SubTitulo, Titulo } from "./styles"

export const CardPost = ({titulo, subTitulo, dataPost, autor, capa}) =>{
    return(
        <Card>
            <Imagem src={capa}/>
            <CardInfo>
                <Titulo>
                    {titulo}
                </Titulo>
                <SubTitulo>
                    {subTitulo}
                </SubTitulo>
                <Data>
                    Atualizado em {dataPost}
                </Data>
                <Autor>
                    Por {autor}
                </Autor>
            </CardInfo>
        </Card>
    )
}