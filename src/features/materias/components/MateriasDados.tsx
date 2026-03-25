import { Materia } from "@/src/app/types/Materia";
import { TopicoCard } from "./MateriasTopicoCard";
import Button from "@/src/components/Button";

type DadosMateriaProps = {
  materia: Materia;
  onClickAdicionarTopico: () => void;
}

export function DadosMateria({ materia, onClickAdicionarTopico }: DadosMateriaProps) {
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

          <Button
          onClick={onClickAdicionarTopico}
          text="Tópico +"
          type="button"
          className="mt-2 bg-[#00FF85]  text-black border-4 border-black py-4 px-8 h-15 flex items-center w-50 justify-center
                                     text-xl font-black uppercase tracking-tighter 
                                     shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                                     hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                                     active:bg-[#00e677] transition-all cursor-pointer"

          >
          </Button>
      </div>
    </div>
  );
}