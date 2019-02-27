export function GetBooks(){
  const link = 'https://tsun-do-ku.herokuapp.com/api/book/all_books'
  return fetch(link)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}