const apiML = 'https://api.mercadolibre.com/';

export const getItems = async (query: string) => {
  try {
    const data = await fetch(`${apiML}sites/MLA/search?q=${query}`)
    return await data.json();
  } catch(e) {
    console.log(e);
  }
}

export const getItem = async (id: string) => {
  try {
    const data = await fetch(`${apiML}items/${id}`)
    return await data.json();
  } catch(e) {
    console.log(e);
  }
}