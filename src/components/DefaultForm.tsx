'use client'
import Button from "@/src/components/Button";

type DefaultFormProps = {
    
    titulo: string;
    descricao?: string
    onChangeTitulo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDescricao : (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export function DefaultForm({ titulo,
    descricao,
    onChangeTitulo,
    onChangeDescricao,
    onClick,
    className
}: DefaultFormProps) {
    return (
        <div>
            <form
                >
                <input
                onChange ={onChangeTitulo}
                type="text"
                value={titulo}
                placeholder="Informe o titulo"/>

                <input
                onChange={onChangeDescricao}
                type="text" 
                placeholder="Informe a descrição"
                value={descricao}
                 />

                <Button
                onClick={onClick}
                type= "button"
                text="Enviar"
                ></Button>
            </form>
        </div>
    )
}