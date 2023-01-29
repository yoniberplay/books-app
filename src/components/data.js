// import { v1 as uuidv1 } from 'uuid';

// const data = [
//   {
//     id: uuidv1(),
//     Title: "Of Mice and Men",
//     Author: "John Steinbeck",
//     Year: 1937,
//     Category: "bk-left",
//     Details:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//   },
//   {
//     id: uuidv1(),
//     Title: "The Catcher in the Rye",
//     Author: " J.D. Salinger",
//     Year: 1951,
//     Category: "bk-fantasy",
//     Details:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//   },
//   {
//     id: uuidv1(),
//     Title: "The Great Gatsby",
//     Author: "F. Scott Fitzgerald",
//     Year: 1925,
//     Category: "bk-youngadultu",
//     Details:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//   },
//   {
//     id: uuidv1(),
//     Title: "Lord of the Flies",
//     Author: "William Golding",
//     Year: 1954,
//     Category: "bk-classics",
//     Details:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//   },
//   {
//     id: uuidv1(),
//     Title: "Harry Potter and the Order of the Phoenix    ",
//     Author: "J.K. Rowling",
//     Year: 2003,
//     Category: "bk-scifi",
//     Details:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//   },
//   {
//     id: uuidv1(),
//     Title: "A Clockwork Orange",
//     Author: "Anthony Burgess",
//     Year: 1962,
//     Category: "bk-fairy",
//     Details:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//   },
// ];

const Getdata = async () => {

  // fetch("https://library-920b7-default-rtdb.firebaseio.com/books.json")
  //   .then(response => {
  //     const list =  response.json();
  //     const loadedMovies = [];
  //   for (const key in list) {
  //     loadedMovies.push({
  //       id: list[key].id,
  //       Title: list[key].Title,
  //       Author: list[key].Author,
  //       Category: list[key].Category,
  //       Year: list[key].Year,
  //       Details: list[key].Details,
  //     });
  //     console.log(key)
  //   }
   
  //   return loadedMovies;
  //   })
  //   .catch(error => {
  //     console.log(error.message);
  //   });


  try {

    const response = await fetch(
      "https://library-920b7-default-rtdb.firebaseio.com/books.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong.");
    }
    const list = await response.json();

    const loadedMovies = [];
    for (const key in list) {
      loadedMovies.push({
        id: list[key].id,
        Title: list[key].Title,
        Author: list[key].Author,
        Category: list[key].Category,
        Year: list[key].Year,
        Details: list[key].Details,
      });
    }
   
    return loadedMovies;
  } catch (e) {
    console.log(e.message);
  }
};

export default Getdata;
