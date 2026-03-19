export async function criarMateria (data: any) {

    const response = await fetch('http://localhost:3001/materia', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    const result = await response.json()

    if (!response.ok){
        throw new Error(data.message || "Não foi possivel criar Materia")
    }

    return result;
}