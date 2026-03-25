import { Materia } from "@/src/app/types/Materia";
import { DadosMateria } from "./MateriasDados";
import { MateriasForm } from "./MateriasForm";
import { TopicoForm } from "../../topicos/forms/TopicoForm";

type Props = {
  tipo: "detalhes" | "form" | "topico" | null;
  setTipo: (tipo: "detalhes" | "form" | "topico" | null) => void;
  materiaSelecionada: Materia | null;
  onClose: () => void;
};

export function MateriasModal({ tipo, materiaSelecionada, onClose, setTipo }: Props) {

  if (!tipo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl">
        <button 
            onClick={onClose}
            className="absolute -top-12 right-0 bg-red-500 text-white border-4 border-black w-10 h-10 font-black text-xl hover:scale-110 transition-all z-10"
        >
            X
        </button>

        {tipo === "detalhes" && materiaSelecionada && (
          <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <DadosMateria 
                materia={materiaSelecionada}
                onClickAdicionarTopico={() => setTipo("topico")}
            />
          </div>
        )}

        {tipo === "form" && (
          <MateriasForm />
        )}

        {tipo === "topico" && materiaSelecionada && (
          <TopicoForm materiaId={materiaSelecionada.id} />
        )}
      </div>
    </div>
  );
}