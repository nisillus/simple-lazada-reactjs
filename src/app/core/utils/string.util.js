export function createRandomHash (length) {
  let result = '',
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randPosition = Math.floor(Math.random() * charactersLength),
      randChar = characters.charAt(randPosition);

    result = `${ result }${ randChar }`;
  }

  return result;
}

export function parseProductUrlToSlug (productUrl) {
  if (!productUrl) {
    return '';
  }

  const rawSlug = productUrl.split('/products/')[1],
    slug = rawSlug?.split('?')[0];

  return slug;
}