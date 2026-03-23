'use client'
import Button from "@/src/components/Button";

type MateriasFormProps = {
    titulo: string;
    descricao?: string;
    onChangeTitulo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDescricao: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export function MateriasForm({ 
    titulo,
    descricao,
    onChangeTitulo,
    onChangeDescricao,
    onClick,
    className
}: MateriasFormProps) {
    return (
        <div className={`relative w-full max-w-2xl group ${className}`}>
            <div className="absolute inset-0 bg-black rounded-xl translate-x-2 translate-y-2"></div>
            
            <form className="relative bg-white border-4 border-black rounded-xl p-8 flex flex-col gap-6 h-90 w-200 p-20">
                <div className="flex flex-col gap-6">
                    <label className="font-black uppercase text-base tracking-widest text-black">Título da Matéria</label>
                    <input
                        onChange={onChangeTitulo}
                        type="text"
                        value={titulo}
                        placeholder="Informe o titulo"
                        className="border-4 border-black p-4 text-2xl font-bold outline-none h-15
                                 placeholder:text-gray-700 leading-relaxed placeholder:italic placeholder:font-medium
                                 focus:bg-yellow-50 focus:translate-x-1 focus:translate-y-1 transition-all
                                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-black uppercase text-base tracking-widest text-black">Descrição</label>
                    <input
                        onChange={onChangeDescricao}
                        type="text" 
                        placeholder="Informe a descrição"
                        value={descricao}
                        
                        className=" border-4 border-black p-4 text-2xl font-bold outline-none h-15
                                 placeholder:text-gray-700 leading-relaxed placeholder:italic placeholder:font-medium
                                 focus:bg-yellow-50 focus:translate-x-1 focus:translate-y-1 transition-all
                                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none "
                    />
                </div>
                <Button
                    onClick={onClick}
                    type="button"
                    text="Salvar Matéria +"
                    className="mt-2 bg-[#00FF85] text-black border-4 border-black py-4 px-8 h-15 flex items-center
                               text-xl font-black uppercase tracking-tighter 
                               shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                               hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                               active:bg-[#00e677] transition-all"
                />
            </form>
        </div>
    )
}