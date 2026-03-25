import { Materia } from "@/src/app/types/Materia";
import { DadosMateria } from "./MateriasDados";
import { MateriasForm } from "./MateriasForm";

type Props = {
  tipo: "detalhes" | "form" | null;
  materiaSelecionada: Materia | null;
  onClose: () => void;
};

export function MateriasModal({ tipo, materiaSelecionada, onClose }: Props) {

  if (!tipo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="bg-white p-10 relative">

        <button onClick={onClose}>X</button>

        {tipo === "detalhes" && materiaSelecionada && (
          <DadosMateria materia={materiaSelecionada} />
        )}

        {tipo === "form" && (
          <MateriasForm />
        )}

      </div>
    </div>
  );
}