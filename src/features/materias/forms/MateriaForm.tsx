'use client';
import { useState } from "react";
import { FormMaterias } from "../components/FormMaterias";
import { toast, Toaster } from "sonner";
import { ListaMaterias } from "../components/ListaMaterias";
import { criarMateria } from "../service/CriarMateria";

interface Materia {

    id: number,
    nome: string,
    descricao: string;

}

export function MateriaForm () {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [materia, setMateria] = useState<Materia[]>([]);


    const handleSubmit = async () => {

        if (!nome.trim() || !descricao.trim()){
            toast.error('Nenhum campo foi preenchido')
            return
        }
        if (!nome.trim()){
            toast.error('Titulo não foi preenchido')
            return
        }
        if (!descricao.trim()){
            toast.error('Descrição não foi preenchida')
            return
        }
        
        try{
            await criarMateria ({
                nome,
                descricao
            });
            
            toast.success('Matéria criada com sucesso')
            
        }catch(error: any) {
            
            toast.error(error.message || 'Erro ao criar materia')
        }
        setNome("")
        setDescricao("")
    }
    return (
        <div>
            <Toaster position="top-right"/>
            <FormMaterias
            onClick={handleSubmit}
            onChangeTitulo={(e) => setNome(e.target.value)}
            onChangeDescricao={(e) => setDescricao(e.target.value)}
            titulo="Informe o titulo"
            descricao="Informe a descrição"
            ></FormMaterias>  
        </div>
    )
}