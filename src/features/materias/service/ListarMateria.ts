export async function listarMaterias (){

    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3001/materia', {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`
        },
    })

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Não foi possivel listar Materias")
    }

    return response.json();

}