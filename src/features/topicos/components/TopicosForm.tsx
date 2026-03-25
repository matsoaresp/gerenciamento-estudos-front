'use client'
import Button from "@/src/components/Button";

type TopicosFormProps = {
    titulo: string;
    materiaId: number;
    descricao?: string;
    onChangeTitulo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDescricao: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export function TopicosForm({ 
    titulo,
    descricao,
    materiaId,
    onChangeTitulo,
    onChangeDescricao,
    onClick,
    className
}: TopicosFormProps) {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <form className="relative bg-white border-2 border-black rounded-xl p-10 flex flex-col gap-6 w-[450px] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] ring-1 ring-black/5">
                <div className="flex items-center flex-col gap-5">
                    
                    <div className="flex flex-col gap-3 items-center w-full">
                        <label className="font-black uppercase text-lg tracking-widest text-black">Título do Tópico</label>
                        <input
                            placeholder="Informe o título"
                            type="text"
                            value={titulo}
                            onChange={onChangeTitulo}
                            className="border-2 border-black p-4 text-2xl font-bold outline-none h-15 w-full rounded-lg placeholder:text-gray-400 placeholder:italic focus:bg-yellow-50 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-none"
                        />
                    </div>

                    <div className="flex flex-col gap-3 items-center w-full">
                        <label className="font-black uppercase text-lg tracking-widest text-black">Descrição</label>
                        <input
                            placeholder="Informe a descrição"
                            type="text" 
                            value={descricao}
                            onChange={onChangeDescricao}
                            className="border-2 border-black p-4 text-2xl font-bold outline-none h-15 w-full rounded-lg placeholder:text-gray-400 placeholder:italic focus:bg-yellow-50 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-none"
                        />
                    </div>

                    <div className="w-full pt-2">
                        <Button
                            onClick={onClick}
                            type="button"
                            text="Salvar Tópico +"
                            className="mt-2 bg-[#00FF85] text-black border-2 border-black border-b-4 py-4 px-8 h-15 flex items-center justify-center w-full rounded-xl text-xl font-black uppercase tracking-tighter hover:brightness-105 active:border-b-2 active:translate-y-[2px] transition-all shadow-md cursor-pointer"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}