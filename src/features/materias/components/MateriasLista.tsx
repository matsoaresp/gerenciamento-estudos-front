import Button from "@/src/components/Button";

export type Materia = {
  id: number;
  nome: string;
  descricao?: string;
};

type ListaMateriasProps = {
  materias: Materia[];
  openModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSelectMateria: (materia: Materia) => void;
};

export function ListaMaterias({ materias, onSelectMateria, openModal }: ListaMateriasProps) {

  return (
    <div className="w-full font-sans">
      <div className="max-w-3xl mx-auto ">
        <h1 className="flex text-4xl font-black text-black mb-12 tracking-tight uppercase italic items-center justify-center">
          / Minhas Matérias
        </h1>

        <div className="grid gap-8">
          {materias.map((materia, index) => (
            <div key={materia.id} className="relative group" onClick={() => onSelectMateria(materia)}>
              <div className="absolute inset-0 bg-black rounded-lg translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
              
              <div className="relative bg-white border-4 border-black rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
                
                <div className="absolute -right-4 -top-4 text-8xl font-black text-gray-100 -z-10 select-none">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-black text-black uppercase mb-2">
                    {materia.nome}
                  </h2>
                  <p className="text-gray-700 font-medium leading-relaxed max-w-md">
                    {materia.descricao || "Nenhuma descrição adicionada ainda."}
                  </p>
                </div>

              </div>
            </div>
          ))}
          {materias.length === 0 && (
            <div className="border-4 border-dashed border-black rounded-lg p-12 text-center">
              <p className="text-xl font-bold uppercase">Nada por aqui ainda...</p>
            </div>
          )}

  
        </div>
      </div>
      <Button
        onClick={openModal}
        type="button"
        text="+"
        className="fixed bottom-25 right-45 w-35 h-34 justify-right rounded-full cursor-pointer border-4 border-blackrounded-xl  bg-[#00FF85] hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                   active:bg-[#00e677] text-black text-6xl font-black uppercase tracking-tighter"
      >

      </Button>
    </div>
  );
}