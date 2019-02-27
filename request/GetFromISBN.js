export function GetFromISBN(ISBN){
  const link = 'https://tsun-do-ku.herokuapp.com/api/book/isbn2/'+ISBN
  return fetch(link)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}