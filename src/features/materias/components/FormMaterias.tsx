'use client'
import Button from "@/src/components/Button";

type FormMateriasProps = {
    
    titulo: string;
    descricao?: string
    onChangeTitulo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDescricao : (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function FormMaterias({ titulo,
    descricao,
    onChangeTitulo,
    onChangeDescricao,
    onClick,
}: FormMateriasProps) {
    return (
        <div>
            <form
                >
                <input
                onChange ={onChangeTitulo}
                type="text"
                value={''}
                placeholder= {titulo}/>

                <input
                onChange={onChangeDescricao}
                type="text" 
                value = {''}
                placeholder= {descricao} 
                name="" 
                id="" />

                <Button
                onClick={onClick}
                type= "button"
                text="Enviar"
                ></Button>
            </form>
        </div>
    )
}