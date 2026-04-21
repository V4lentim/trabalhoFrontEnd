import { Card } from "./Card"

export function RenderizarCard({ data }) {
    return (<>
        {data.map((jogo) => {
            return (
                <Card
                    key={jogo.id}
                    nome={jogo.nome}
                    imagem={jogo.imagem}
                    descricao={jogo.descricao}
                    tipo={jogo.tipo.join(" / ")}
                />
            )
        })
        }
    </>
    )
}