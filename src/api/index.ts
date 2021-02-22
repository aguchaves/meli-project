const apiML = 'http://localhost:8000/';

export const getItems = async (query: string) => {
  try {
    const data = await fetch(`${apiML}api/items?q=${query}`)
    
    return await data.json();
  } catch(e) {
    console.log(e);
  }
}

export const getItem = async (id: string) => {
  try {
    const data = await fetch(`${apiML}api/items/${id}`)
    return await data.json();
  } catch(e) {
    console.log(e);
  }
}