import Button from "@/src/components/Button";

type FormMateriasProps = {

    titulo: string;
    descricao?: string
    onChange: () => void;
}


export function FormMaterias({titulo, descricao}: FormMateriasProps) {

    return (
        <div>
            <form action="" >
                <input type="text" placeholder= {titulo}/>
                <input type="text" placeholder= {descricao} name="" id="" />
                <Button
                text="Enviar"
                ></Button>
            </form>
        </div>
    )
}