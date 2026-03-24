'use client';
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { CriarTopico } from "../service/CriarTopico";
import { TopicosForm } from "../components/TopicosForm";
import Aside from "@/src/components/Aside";


interface Topico {
    id: number,
    titulo: string,
    descricao: string,
    materiaId: number,
}

export function TopicoForm () {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [materiaId, setMateriaId] = useState<number | null>(null);
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
                descricao,
                materiaId,
            });

        }catch(error: any){
            toast.error(error.message  || 'Erro ao criar tópico')
        }
        setTitulo("")
        setDescricao("")
    }


    return (
       <div className="min-h-screen  p-6 md:p-12 font-sans flex flex-col items-center gap-16">
         <div className="w-full max-w-3xl">
            <h2 className="text-4xl font-black uppercase mb-6 italic">/ Adicionar Novo Tópico</h2>
        <Toaster position="top-right"/>
        <Aside>
            
        </Aside>
            <TopicosForm
            onClick={handleSubmit}
            titulo = {titulo}
            descricao = {descricao}
            onChangeTitulo={(e) => setTitulo(e.target.value)}
            onChangeDescricao={(e) => setDescricao(e.target.value)}
            ></TopicosForm>  
        </div>
        </div>
    )
}