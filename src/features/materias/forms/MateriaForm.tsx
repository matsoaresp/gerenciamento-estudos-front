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

export function MateriaForm() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [materias, setMaterias] = useState<Materia[]>([]);
    const [topicos, setTopicos] = useState<Topicos[]>([]);

    const [materiaSelecionada, setMateriaSelecionada] = useState<Materia | null>(null);

    // 🔥 NOVO CONTROLE DO MODAL
    const [modalTipo, setModalTipo] = useState<"form" | "detalhes" | null>(null);

    // 👉 ABRIR FORM
    const abrirModalForm = () => {
        setMateriaSelecionada(null);
        setModalTipo("form");
    };

    // 👉 SUBMIT
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
            setModalTipo(null); // 🔥 fecha modal

            toast.success('Matéria criada com sucesso!');
        } catch (error: any) {
            toast.error(error.message || 'Erro ao criar materia');
        }
    };

    // 👉 LISTAR
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
                    openModal={abrirModalForm}// 🔥 botão +
                    materias={materias}
                    onSelectMateria={(materia) => {
                        setMateriaSelecionada(materia);
                        setModalTipo("detalhes"); 
                    }}
                />
            </div>

            {modalTipo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setModalTipo(null)}
                    />

                    <div className="relative  border-black w-full max-w-2xl ">
                        <div className="p-10 pt-14">

                            <button 
                                onClick={() => setModalTipo(null)}
                                className="absolute -top-6 -right-15 bg-red-500 text-white border-4 border-black w-12 h-12 font-black text-2xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                            >
                                X
                            </button>


                            {modalTipo === "detalhes" && materiaSelecionada && (
                                <DadosMateria materia={materiaSelecionada} />
                            )}

                            {modalTipo === "form" && (
                                <MateriasForm
                                    titulo={nome}
                                    onChangeTitulo={(e) => setNome(e.target.value)}
                                    onChangeDescricao={(e) => setDescricao(e.target.value)}
                                    onClick={handleSubmit}
                                />
                            )}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}