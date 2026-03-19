
type MateriasProps = {
    id: number;
    nome: string;
    descricao?: string;
}

export function ListaMaterias ({metas}: {metas: MateriasProps[]}) {

    return  (
        <div>
            {metas.map(meta => (
                <div key={meta.id} className="p-4  shadow">
                    <h2 className="font-semibold">{meta.nome}</h2>
                    <p> Progresso: {meta.descricao}</p>
                </div>
            ))}
        </div>
    )
}