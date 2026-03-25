'use client';
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";

import { criarMateria } from "../service/CriarMateria";
import { listarMaterias } from "../service/ListarMateria";
import { MateriasForm } from "../components/MateriasForm";
import Aside from "@/src/components/Aside";
import { ListaMaterias } from "../components/MateriasLista";
import { Materia, Topicos } from "@/src/app/types/Materia";
import { DadosMateria } from "../components/MateriasDados";
import { TopicoForm } from "../../topicos/forms/TopicoForm";

export function MateriaForm() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [materias, setMaterias] = useState<Materia[]>([]);

    const [materiaSelecionada, setMateriaSelecionada] = useState<Materia | null>(null);

    const [modalTipo, setModalTipo] = useState<"form" | "detalhes" | "topicos" | null>(null);

    const abrirModalForm = () => {
        setMateriaSelecionada(null);
        setModalTipo("form");
    };

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
            setModalTipo(null); 

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
        <div className="min-h-screen p-6 md:p-12 font-sans flex flex-col items-center gap-16">
            <Toaster position="top-right" />
            <Aside />

            <div className="w-full max-w-3xl">
                <ListaMaterias 
                    openModal={abrirModalForm}
                    materias={materias}
                    onSelectMateria={(materia) => {
                        setMateriaSelecionada(materia);
                        setModalTipo("detalhes"); 
                    }}
                />
            </div>

            {modalTipo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setModalTipo(null)}
                    />

                    <div className="relative w-full max-w-2xl">
                        <button 
                            onClick={() => setModalTipo(null)}
                            className="absolute -top-3 -right-4 bg-red-500 text-white border-4 border-black w-10 h-10 font-black text-xl hover:scale-110 transition-all z-10"
                        >
                            X
                        </button>

                        {modalTipo === "detalhes" && materiaSelecionada && (
                            <div className="bg-white border-4 border-black rounded-xl p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <DadosMateria 
                                    materia={materiaSelecionada}
                                    onClickAdicionarTopico={() => setModalTipo("topicos")} 
                                />
                            </div>
                        )}

                        {modalTipo === "form" && (
                            <MateriasForm
                                titulo={nome}
                                descricao={descricao}
                                onChangeTitulo={(e) => setNome(e.target.value)}
                                onChangeDescricao={(e) => setDescricao(e.target.value)}
                                onClick={handleSubmit}
                            />
                        )}

                        {modalTipo === "topicos" && materiaSelecionada && (
                            <TopicoForm materiaId={materiaSelecionada.id} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}