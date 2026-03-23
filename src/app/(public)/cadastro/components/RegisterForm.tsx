'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from 'sonner';


interface User{
    id: number;
    name: string;
    email: string;
}
export default function RegiserForm() {
    const router = useRouter();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState<User[]>([])
    const [password, setPassword] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('')


    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!name.trim()){
            toast.error('O campo nome não foi preenchido')
            return;
        }

        if(!email.trim()) {
            toast.error('Preencha o campo E-mail');
            return;
        }
        if(!password.trim()) {
            toast.error('Preencha o campo Senha');
            return;
        }
        if (password.length <= 8){
            toast.error('A senha deve ter no mínimo 8 caracteres')
            return;
        }

        if(confirmarSenha !== password) {
            toast.error('As senhas não coincidem');
            return;
        }

        const response = await fetch('http://localhost:3001/user',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nome: name, email:email, password: password})
        })

        const data = await response.json()

        if(!response.ok){
            console.log('Erro na requisição da API')
            throw new Error(data?.message || "Não foi possivel criar usuario")
        }
        const newUser = [
            ...users,
            {id: Date.now(), name: name.trim(), email: email.trim()}
        ]
        setUsers(newUser)
        localStorage.setItem("users", JSON.stringify(newUser));
        setName("");
        setEmail("");
        setPassword("");
        setConfirmarSenha("");

        toast.success('Cadastro realizado com sucesso')
        setTimeout(() => {
        console.log("Redirecionando para login...");
        router.push('/login');
      }, 1500);

        
    }
   return (
           <div className="flex items-center justify-center min-h-screen p-4">
               <Toaster position="top-right" />
               
               <form className="relative bg-white border-4 border-black rounded-xl p-10 flex flex-col gap-6 w-[500px]
  shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]"onSubmit={handleSubmit}>
                   <div className="flex items-center flex-col gap-5">

                        <div className="flex flex-col gap-3 items-center">
                           <label className="font-black uppercase text-lg tracking-widest text-black">Nome</label>
                           <input
                           placeholder="Informe seu nome"
                               id="nome"
                               type="text"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                               className="border-4 border-black p-4 text-2xl font-bold outline-none h-15 w-150
                                 placeholder:text-gray-700 leading-relaxed placeholder:italic placeholder:font-medium
                                 focus:bg-yellow-50 focus:translate-x-1 focus:translate-y-1 transition-all
                                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none"
                           />
                       </div>
                       
                       <div className="flex flex-col gap-3 items-center">
                           <label className="font-black uppercase text-lg tracking-widest text-black">E-mail</label>
                           <input
                           placeholder="Informe seu e-mail"
                               id="email"
                               type="text"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               className=" border-4 border-black p-4 text-2xl font-bold outline-none h-15 w-150
                                 placeholder:text-gray-700 leading-relaxed placeholder:italic placeholder:font-medium
                                 focus:bg-yellow-50 focus:translate-x-1 focus:translate-y-1 transition-all
                                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none "
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


                       <div className="flex flex-col gap-3 items-center">
                           <label className="font-black uppercase text-lg tracking-widest text-black">Confirmar SENHA</label>
                           <input
                           placeholder="Confirme sua senha"
                               id="senha"
                               type="password"
                               value={confirmarSenha}
                               onChange={(e) => setConfirmarSenha(e.target.value)}
                               className=" border-4 border-black p-4 text-2xl font-bold outline-none h-15 w-150
                                 placeholder:text-gray-700 leading-relaxed placeholder:italic placeholder:font-medium
                                 focus:bg-yellow-50 focus:translate-x-1 focus:translate-y-1 transition-all
                                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-none "
                           />
                       </div>
                      
   
                       <div className="flex items-center">
                           <button
                               type="submit"
                                className="mt-2 bg-[#00FF85] text-black border-4 border-black py-4 px-8 h-15 w-30 flex items-center justify-center
                               text-xl font-black uppercase tracking-tighter 
                               shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                               hover:shadow-none hover:translate-x-1 hover:translate-y-1 
                               active:bg-[#00e677] transition-all"
                           >
                               Enviar
                           </button>
                       </div>
   
                   </div>
               </form>
           </div>
       );
}