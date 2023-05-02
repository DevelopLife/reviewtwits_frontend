export const getSearchParams = (getQueryName: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  const productURL = searchParams.get(getQueryName);

  return productURL ? productURL : null;
};
