'use client';

import { DefaultForm } from "@/src/components/DefaultForm";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { CriarTopico } from "../service/CriarTopico";


interface Topico {
    id: number,
    titulo: string,
    descricao: string,
}

export function TopicoForm () {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [topicos, setTopicos] = useState<Topico[]>([]);

    const handleSubmit = async () => {

        if (!titulo.trim() || !descricao.trim()){
            toast.error("Preencha todos os campos")
            return;
        }

        if (!titulo.trim()){
            toast.error("Preencha o campo titulo")
            return;
        }

        if (!descricao.trim()){
            toast.error("Preencha o campo descrição")
            return;
        }

        try {
            await CriarTopico ({
                titulo,
                descricao
            });

        }catch(error: any){
            toast.error(error.message  || 'Erro ao criar tópico')
        }
        setTitulo("")
        setDescricao("")

    }


    return (
        <div>

        <Toaster position="top-right"/>
            <DefaultForm
            className=""
            onClick={handleSubmit}
            titulo = {titulo}
            descricao = {descricao}
            onChangeTitulo={(e) => setTitulo(e.target.value)}
            onChangeDescricao={(e) => setDescricao(e.target.value)}
            ></DefaultForm>  
           


        </div>
    )
}