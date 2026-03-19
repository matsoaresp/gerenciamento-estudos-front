'use client'
import Button from "@/src/components/Button";

type FormMateriasProps = {

    titulo: string;
    descricao?: string
    onChangeTitulo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDescricao : (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function FormMaterias({ titulo,
    descricao,
    onChangeTitulo,
    onChangeDescricao,
    onSubmit,
}: FormMateriasProps) {
    return (
        <div>
            <form onSubmit={onSubmit}
                >
                <input
                onChange ={onChangeTitulo}
                type="text"
                placeholder= {titulo}/>

                <input
                onChange={onChangeDescricao}
                type="text" 
                placeholder= {descricao} 
                name="" 
                id="" />

                <Button
                type= "submit"
                text="Enviar"
                ></Button>
            </form>
        </div>
    )
}