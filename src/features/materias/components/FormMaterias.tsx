'use client'
import Button from "@/src/components/Button";

type FormMateriasProps = {

    titulo: string;
    descricao?: string
    onChangeTitulo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDescricao : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormMaterias({ titulo,
    descricao,
    onChangeTitulo,
    onChangeDescricao}: FormMateriasProps) {
    return (
        <div>
            <form action="" 
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