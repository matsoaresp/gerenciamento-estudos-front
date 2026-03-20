
type MateriasProps = {
    id: number;
    nome: string;
    descricao?: string;
}

export function ListaMaterias ({materias}: {materias: MateriasProps[]}) {

    return  (
        <div>
            {materias.map(materia => (
                <div key={materia.id} className="p-4  shadow">
                    <h2 className="font-semibold">{materia.nome}</h2>
                    <p> Progresso: {materia.descricao}</p>
                </div>
            ))}
        </div>
    )
}