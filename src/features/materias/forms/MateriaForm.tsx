'use client';
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { ListaMaterias, Materia } from "../components/ListaMaterias";
import { criarMateria } from "../service/CriarMateria";
import { listarMaterias } from "../service/ListarMateria";
import { MateriasForm } from "../components/MateriasForm";



export function MateriaForm() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [materias, setMaterias] = useState<Materia[]>([]);
    const [materiaSelecionada, setMateriaSelecionada] = useState<Materia | null>(null);
    const [isModalAberto, setIsModalAberto] = useState(false);

    const abrirModalTopico = (materia: Materia) => {
        setMateriaSelecionada(materia);
        setIsModalAberto(true);
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
                <ListaMaterias onCriarTopico={abrirModalTopico} materias={materias}/>
            </div>

            {isModalAberto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center ">
               
                <div 
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm " 
                    onClick={() => setIsModalAberto(false)} 
                />

                <div className="relative bg-white border-8 border-black w-full max-w-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">



                    
                <div className="p-10 pt-14">
                    <button 
                        onClick={() => setIsModalAberto(false)}
                        className="absolute -top-6 -right-6 bg-red-500 text-white border-4 border-black w-12 h-12 font-black text-2xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    >
                        X
                    </button>

                    <h3 className="text-3xl font-black uppercase mb-8 italic">
                        / Novo Tópico: {materiaSelecionada?.nome}
                    </h3>

                    <form className="flex flex-col gap-8">
                        <input 
                            placeholder="Título do Tópico" 
                            className="border-4 border-black p-4 text-xl font-bold outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none transition-all"
                        />
                        <textarea 
                            placeholder="Conteúdo do tópico..." 
                            className="border-4 border-black p-4 text-lg font-medium h-40 outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none transition-all"
                        />
                        <button 
                            type="button"
                            className="bg-yellow-400 border-4 border-black py-4 font-black uppercase text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                        >
                            Salvar Tópico +
                        </button>
                    </form>
                </div>
                </div>
            </div>
        )}
        </div>
    );
}