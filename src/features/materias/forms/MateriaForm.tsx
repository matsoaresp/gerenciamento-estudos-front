'use client';
import { useState } from "react";
import { FormMaterias } from "../components/FormMaterias";
import { toast } from "sonner";

export function MateriaForm () {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');


    const handleSubmit = () => {

        if (!titulo.trim() || !descricao.trim()){
            toast.error('Nenhum campo foi preenchido')
            return
        }
        if (!titulo.trim()){
            toast.error('Titulo não foi preenchido')
            return
        }
        if (!descricao.trim()){
            toast.error('Descrição não foi preenchida')
            return
        }


    }
    return (
        <div>
            <FormMaterias
            onChangeTitulo={(e) => setTitulo(e.target.value)}
            onChangeDescricao={(e) => setDescricao(e.target.value)}
            titulo="Informe o titulo"
            descricao="Informe a descrição"
            ></FormMaterias>
        </div>
    )
}