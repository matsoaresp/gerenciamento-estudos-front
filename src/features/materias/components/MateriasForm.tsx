'use client'
import Button from "@/src/components/Button";
import { Toaster } from "sonner";

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
    className,
}: MateriasFormProps) {
    return (
        <div >
            <Toaster position="top-right" toastOptions={{className: "bg-red-500 text-white border-2 border-black",}}/>
            <form className="relative bg-white border-4 rounded-xl p-10 flex flex-col gap-6 w-[450px]">
                <div className="flex items-center flex-col gap-5">
                    <div className="flex flex-col gap-3 items-center">
                        <label className="font-black uppercase text-lg tracking-widest text-black">Título</label>
                        <input
                            placeholder="Informe o titulo"
                            type="text"
                            value={titulo}
                            onChange={onChangeTitulo}
                             className="border-4 border-black p-4 text-2xl font-bold outline-none h-15 w-150
                                 placeholder:text-gray-700 leading-relaxed placeholder:italic placeholder:font-medium
                                 focus:bg-yellow-50 focus:translate-x-1 focus:translate-y-1 transition-all
                                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none"
                        />
                    </div>

                    <div className="flex flex-col gap-3 items-center">
                        <label className="font-black uppercase text-lg tracking-widest text-black">Descrição</label>
                        <input
                            placeholder="Informe a descrição"
                            type="text" 
                            value={descricao}
                            onChange={onChangeDescricao}
                            className=" border-4 border-black p-4 text-2xl font-bold outline-none h-15 w-150
                                 placeholder:text-gray-700 leading-relaxed placeholder:italic placeholder:font-medium
                                 focus:bg-yellow-50 focus:translate-x-1 focus:translate-y-1 transition-all
                                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none "
                        />
                    </div>
                    <div >
                        <Button
                            onClick={onClick}
                            type="button"
                            text="Salvar Matéria"
                            className="mt-2 bg-[#00FF85] text-black border-4 border-black py-4 px-8 h-15 flex items-center w-full justify-center
                                     text-xl font-black uppercase tracking-tighter 
                                     shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                                     hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                                     active:bg-[#00e677] transition-all cursor-pointer"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}