import { Materia } from "@/src/app/types/Materia";
import { TopicoCard } from "./MateriasTopicoCard";

type DadosMateriaProps = {
  materia: Materia;
}

export function DadosMateria({ materia }: DadosMateriaProps) {
  return (
    <div className="w-full font-sans">
      <div className="max-w-4xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl font-black uppercase italic">
            {materia.nome}
          </h1>
          <p className="text-gray-600 mt-2">
            {materia.descricao || "Sem descrição"}
          </p>
        </div>

       
        <div className="grid gap-6">
          {materia.topicos?.map((topico) => (
            <TopicoCard key={topico.id} topico={topico} />
          ))}
        </div>

      </div>
    </div>
  );
}