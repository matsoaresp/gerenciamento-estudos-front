'use client';
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { ListaMaterias } from "../components/ListaMaterias";
import { criarMateria } from "../service/CriarMateria";
import { listarMaterias } from "../service/ListarMateria";
import { MateriasForm } from "../components/MateriasForm";

interface Materia {
    id: number;
    nome: string;
    descricao: string;
}

export function MateriaForm() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [materias, setMaterias] = useState<Materia[]>([]);

    const handleSubmit = async () => {
        if (!nome.trim() || !descricao.trim()) {
            toast.error('Preencha todos os campos');
            return;
        }

        try {
            await criarMateria({
                nome,
                descricao
            });
            
            const data = await listarMaterias();
            setMaterias(data);
            
            setNome("");
            setDescricao("");
            toast.success('Matéria criada com sucesso!');
            
        } catch (error: any) {
            toast.error(error.message || 'Erro ao criar materia');
        }
    };

    useEffect(() => {
        const buscarMaterias = async () => {
            try {
                const data = await listarMaterias();
                setMaterias(data);
            } catch (error: any) {
                toast.error(error.message || 'Erro ao listar materias');
            }
        };
        buscarMaterias();
    }, []);

    return (
      
        <div className="min-h-screen  p-6 md:p-12 font-sans flex flex-col items-center gap-16">
            <Toaster position="top-right" />
            
            <div className="w-full max-w-3xl">
                <h2 className="text-4xl font-black uppercase mb-6 italic">/ Adicionar Nova Matéria</h2>
                
                <MateriasForm
                    titulo={nome}
                    descricao={descricao}
                    onChangeTitulo={(e) => setNome(e.target.value)}
                    onChangeDescricao={(e) => setDescricao(e.target.value)}
                    onClick={handleSubmit}
                   
                    className="p-16" 
                />
            </div>

            <div className="w-full max-w-3xl">
                <ListaMaterias materias={materias} />
            </div>
        </div>
    );
}