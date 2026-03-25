import { Topicos } from "@/src/app/types/Materia";


type TopicoProps = {
  topico: Topicos;
}

export function TopicoCard({ topico }: TopicoProps) {
  return (
    <div className="group relative">

      <div className="absolute inset-0 bg-black rounded-lg translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition"></div>

      <div className="relative bg-white border-4 border-black rounded-lg p-6">

        <h2 className="text-2xl font-black uppercase mb-2">
          {topico.nome}
        </h2>

        <p className="text-gray-700">
          {topico.descricao || "Sem descrição"}
        </p>

      </div>
    </div>
  );
}