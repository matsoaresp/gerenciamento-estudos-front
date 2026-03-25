'use client'
import { useState } from "react";
import { toast } from "sonner";
import { CriarTopico } from "../service/CriarTopico";
import { TopicosForm } from "../components/TopicosForm";

interface TopicoFormProps {
    materiaId: number;
}

export function TopicoForm({ materiaId }: TopicoFormProps) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = async () => {
        if (!titulo.trim() || !descricao.trim()) {
            toast.error("Preencha todos os campos");
            return;
        }

        try {
            await CriarTopico({
                titulo,
                descricao,
                materiaId, 
            });
            toast.success("Tópico criado com sucesso!");
            setTitulo("");
            setDescricao("");
        } catch (error: any) {
            toast.error(error.message || 'Erro ao criar tópico');
        }
    }

    return (
        <TopicosForm
            materiaId={materiaId}
            titulo={titulo}
            descricao={descricao}
            onChangeTitulo={(e) => setTitulo(e.target.value)}
            onChangeDescricao={(e) => setDescricao(e.target.value)}
            onClick={handleSubmit}
        />
    );
}