const apiML = 'https://api.mercadolibre.com/sites/MLA/search?q=';

export const getItems = async (query: string) => {
  try {
    const data = await fetch(`${apiML}${query}`)
    return await data.json();
  } catch(e) {
    console.log(e);
  }
  
}