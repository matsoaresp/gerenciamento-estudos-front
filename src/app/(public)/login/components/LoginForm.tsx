'use client';

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { toast, Toaster } from "sonner";

export function LoginForm() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e:SyntheticEvent) => {
        e.preventDefault();

         if (!email.trim() && !password.trim()) {
            toast.error('Nenhum campo foi preenchido')
            return;
        }
        if (!email.trim()) {
            toast.error('O campo e-mail não foi preenchido')
            return;
        }
        if (!password.trim()) {
            toast.error('O campo senha não foi preenchido')
            return;
        }

        if (password.length <= 8) {
            toast.error('A senha deve tem no mínimo 8 caracteres')
            return;
        }

        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            },
            
            body: JSON.stringify({email: email, password: password})
        })

        
        const data = await response.json()
        
        if (!response.ok){
            throw new Error(data?.message || "Erro ao logar")
        }

        localStorage.setItem("token", data.accessToken);
        console.log("DATA LOGIN", data)

        toast.success('Login realizado com sucesso!')
        setTimeout(() => {
            console.log("Redirecionando para pagina de tarefas")
            router.push("/materias")
        }, 1500)
    };


    return (
        <div className="flex items-center justify-center min-h-screen">
            <Toaster position="top-right"/>
            <form className="relative bg-white border-4 border-black rounded-xl p-10 flex flex-col gap-6 w-[450px]
  shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]"onSubmit={handleSubmit}>
                <div className="flex items-center flex-col gap-5 ">
                    
                     <div className="flex flex-col gap-3 items-center">
                        <label className="font-black uppercase text-lg tracking-widest text-black">E-mail</label>
                        <input
                        placeholder="Informe seu e-mail"
                            id="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-4 border-black p-4 text-2xl font-bold outline-none h-15 w-150
                                 placeholder:text-gray-700 leading-relaxed placeholder:italic placeholder:font-medium
                                 focus:bg-yellow-50 focus:translate-x-1 focus:translate-y-1 transition-all
                                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none"
                        />
                    </div>


                    <div className="flex flex-col gap-3 items-center">
                       <label className="font-black uppercase text-lg tracking-widest text-black">Senha</label>
                        <input
                        placeholder="Informe sua senha"
                            id="senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=" border-4 border-black p-4 text-2xl font-bold outline-none h-15 w-150
                                 placeholder:text-gray-700 leading-relaxed placeholder:italic placeholder:font-medium
                                 focus:bg-yellow-50 focus:translate-x-1 focus:translate-y-1 transition-all
                                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none "
                        />
                    </div>
                   

                    <div className="flex gap-8">
                    <div className="">
                        <button
                            type="submit"
                             className="mt-2 bg-[#00FF85] text-black border-4 border-black py-4 px-8 h-15 flex items-center
                               text-xl font-black uppercase tracking-tighter 
                               shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                               hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                               active:bg-[#00e677] transition-all"
                        >
                            Entrar
                        </button>
                    </div>

                    <div className="">
                        <button
                            type="button"
                            onClick={() => router.push("/cadastro")}
                             className="mt-5 bg-[#e6d522] text-black border-4 border-black py-4 px-8 h-15 flex items-center
                               text-xl font-black uppercase tracking-tighter 
                               shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                               hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                               active:bg-[#e6d522] transition-all"
                        >
                            Cadastrar-se
                        </button>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    );
}