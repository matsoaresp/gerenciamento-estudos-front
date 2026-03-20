'use client';
import { useEffect, useState } from "react";
import { FormMaterias } from "../components/FormMaterias";
import { toast, Toaster } from "sonner";
import { ListaMaterias } from "../components/ListaMaterias";
import { criarMateria } from "../service/CriarMateria";
import { listarMaterias} from "../service/ListarMateria";

interface Materia {

    id: number,
    nome: string,
    descricao: string;

}

export function MateriaForm () {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [materias, setMaterias] = useState<Materia[]>([]);


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

    useEffect(() => {

        const buscarMaterias = async () => {

            try{
                const data =  await listarMaterias();
                setMaterias(data)


            }catch(error: any){
                toast.error(error.message || 'Erro ao listar materias')
            }
        }

        buscarMaterias()

    }, [])

    
    return (
        <div>
            <Toaster position="top-right"/>
            <FormMaterias
            onClick={handleSubmit}
            titulo = {nome}
            descricao = {descricao}
            onChangeTitulo={(e) => setNome(e.target.value)}
            onChangeDescricao={(e) => setDescricao(e.target.value)}
            ></FormMaterias>  
            <ListaMaterias
            materias={materias}
            >
            </ListaMaterias>

        </div>
    )
}