import React, { useReducer, useEffect, useState, useCallback } from "react";
import Footer from "../components/Footer";
import "../App.scss";
import Nav from "./Nav";
import ListLiItem from "./items/ListLiItem";
import Getdata from "./data";
import ModalContext from "./ModalContext";


const initialstate = {
  itemlist:[],
}


function reducer(state, action) {


  switch (action.type) {
  
    case "allcategories":
      return {
        ...state,
        itemlist: action.itemlist,
      }
    case "onSearchClick":
      return {
        itemlist: action.itemlist,
      };
    case "bk-fantasy":
      return {
        itemlist: categorySearch(state.itemlist, "bk-fantasy"),
      };
    case "bk-scifi":
      return {
        itemlist: categorySearch(state.itemlist, "bk-scifi"),
      };
    case "bk-classics":
      return {
        itemlist: categorySearch(state.itemlist, "bk-classics"),
      };
    case "bk-youngadultu":
      return {
        itemlist: categorySearch(state.itemlist, "bk-youngadultu"),
      };
    case "bk-fairy":
      return {
        itemlist: categorySearch(state.itemlist, "bk-fairy"),
      };

    default:
      return {
        itemlist: [{}],
      };
  }
}

function categorySearch(array, categoryName) {
  let items = array.filter((d) => d.Category === categoryName);
  return items;
}

const PageContainer = (props) => {

  

  const [searching, setsearching] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [Datos, setDatos] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialstate);

  const fetchBooksHandler = useCallback(async () => {

    try {
      const response = await fetch(
        "https://library-920b7-default-rtdb.firebaseio.com/books.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
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
      //setDatos(loadedMovies);
      dispatch({ type: "allcategories", itemlist: loadedMovies });
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchBooksHandler();
    // console.log('#####')
  }, [fetchBooksHandler]);

  const onSearchClick = (name) => {
    setsearching(true);
    let items = Datos.data.filter((d) => d.Title.toUpperCase() === name);
    dispatch({ type: "onSearchClick", data: items });
    setsearching(false);
  };

  const clickallcategories = () => {
    setsearching(true);
    dispatch({ type: "allcategories" });
    setsearching(false);
  };

  const setmodal = (item) => {
    setshowModal(!showModal);
  };

  const cart_Context = {
    show: showModal,
    set: setmodal,
  };
  return (
    <ModalContext.Provider value={cart_Context}>
      <div className="m-4">
        <section id="book_list">
          <Nav
            onSearchClick={onSearchClick}
            onCategoryClick={dispatch}
            clickallcategories={clickallcategories}
          ></Nav>
          {searching ? (
            <div className="lds-dual-ring"></div>
          ) : (
            <div className="">
              <ul
                id="grid"
                className="grid  grid-flow-col gap-4 md:grid-rows-1  grid-rows-6"
              >
                {state.itemlist !== undefined && state.itemlist.length > 0 ? (
                  <ListLiItem Datos={state.itemlist} />
                ) : (
                  <h2 className="text-center">No books founds</h2>
                )}
              </ul>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </ModalContext.Provider>
  );
};

// const post = async ( param ) => {

//   const item = [
//       {
//         id: 1,
//         Title: "Of Mice and Men",
//         Author: "John Steinbeck",
//         Year: 1937,
//         Category: "bk-left",
//         Details:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//       },
//       {
//         id: 2,
//         Title: "The Catcher in the Rye",
//         Author: " J.D. Salinger",
//         Year: 1951,
//         Category: "bk-fantasy",
//         Details:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//       },
//       {
//         id: 3,
//         Title: "The Great Gatsby",
//         Author: "F. Scott Fitzgerald",
//         Year: 1925,
//         Category: "bk-youngadultu",
//         Details:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//       },
//       {
//         id: 4,
//         Title: "Lord of the Flies",
//         Author: "William Golding",
//         Year: 1954,
//         Category: "bk-classics",
//         Details:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//       },
//       {
//         id: 33,
//         Title: "Harry Potter and the Order of the Phoenix    ",
//         Author: "J.K. Rowling",
//         Year: 2003,
//         Category: "bk-scifi",
//         Details:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//       },
//       {
//         id: 5,
//         Title: "A Clockwork Orange",
//         Author: "Anthony Burgess",
//         Year: 1962,
//         Category: "bk-fairy",
//         Details:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
//       },
//     ];

//     for (const i of item) {
//       const response = await fetch('https://library-920b7-default-rtdb.firebaseio.com/books.json',{
//         method: 'POST',
//         body: JSON.stringify(i),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const res = await response.json;
  
      
      
//     }

   

// }

export default PageContainer;
