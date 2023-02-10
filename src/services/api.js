export async function getCategories() {
  const URL_API = 'https://api.mercadolibre.com/sites/MLB/categories';
  const dataCategories = await fetch(URL_API);
  const data = dataCategories.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  if (!categoryId && !query) return [];
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const dataProducts = await fetch(URL_API);
  const data = await dataProducts.json();
  return data;
}

export async function getProductById(id) {
  const URL_API = `https://api.mercadolibre.com/items/${id}`;
  const dataProductID = await fetch(URL_API);
  const data = await dataProductID.json();
  return data;
}
