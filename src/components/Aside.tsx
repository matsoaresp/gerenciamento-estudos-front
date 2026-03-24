import { useRouter } from 'next/navigation'; // Certifique-se de importar o router

export default function Aside() {
  const router = useRouter();

  const menuItems = [
    { label: "Tópicos", path: "/topicos" },
    { label: "Progresso", path: "/progresso" },
    { label: "Metas", path: "/metas" },
  ];

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-80 h-screen bg-[#FEF6E4] border-r-8 border-black p-8 shadow-[10px_0px_0px_0px_rgba(0,0,0,1)]"
      aria-label="Sidebar"
    >
      <div className="h-full flex flex-col justify-between">
        
        <div>
          <div className="mb-16">
          </div>

          <ul className="space-y-12">
            <li>
              <button
                onClick={() => router.push("/materias")}
                className="w-full cursor-pointer group flex items-center justify-center h-24 text-black bg-[#00FF85] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <span className="font-black uppercase text-2xl tracking-widest">Materias</span>
              </button>
            </li>
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => router.push(item.path)}
                  className="w-full group cursor-pointer flex items-center justify-center h-24 text-black bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <span className="font-black uppercase text-2xl tracking-widest leading-none">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="pb-4">
          <button
            onClick={() => console.log("Logout logic here")}
            className="w-full group flex items-center justify-center h-24 text-black bg-red-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <span onClick={() => router.push('/login')} className="font-black uppercase text-2xl tracking-widest text-center w-full cursor-pointer">Sair</span>
          </button>
        </div>

      </div>
    </aside>
  );
}