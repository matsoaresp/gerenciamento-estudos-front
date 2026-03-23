export async function CriarTopico (data: any) {

    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3001/topicos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }, 
    body: JSON.stringify(data)
    })

    if (!response.ok){
        const error = await response.json() 
        throw new Error(error.message || "Não foi possivel criar Materia")
    }

    return response.json();
}