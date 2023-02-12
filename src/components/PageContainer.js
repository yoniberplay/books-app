import React, { useReducer, useEffect, useState, useCallback } from "react";
import Footer from "../components/Footer";
import "../App.scss";
import Nav from "./Nav";
import ListLiItem from "./items/ListLiItem";
import ModalContext from "./ModalContext";
import Getdata from "./data";

const initialstate = {
  itemlist:[],
}

let data;

function categorySearch(array, categoryName) {
  let items = array.filter((d) => d.Category === categoryName);
  return items;
}

const PageContainer = (props) => {

  const [searching, setsearching] = useState(false);
  const [showModal, setshowModal] = useState(false);
  

  const fetchBooksHandler = useCallback(async () => {
    const loadedMovies = await Getdata();
    if(typeof loadedMovies !== 'undefined'){
    data=loadedMovies;
    dispatch({ type: "allcategories", itemlist: loadedMovies });
    }else{
      data=localItem;
      dispatch({ type: "allcategories", itemlist: localItem });
      console.log('Failet fetch to firebase, using localbooks.');
    }
    
  }, []);

  const [state, dispatch] = useReducer((state, action)=>{
    switch (action.type) {
  
      case "allcategories":
        setsearching(false)
        return {
          ...state,
          itemlist: action.itemlist,
        }
        case "loadData":
          setsearching(true)
          fetchBooksHandler();
          return {
            ...state,            
          }  
      case "onSearchClick":
        return {
          itemlist: action.itemlist,
        };
      case "bk-fantasy":
        return {
          itemlist: categorySearch(data, "bk-fantasy"),
        };
      case "bk-scifi":
        return {
          itemlist: categorySearch(data, "bk-scifi"),
        };
      case "bk-classics":
        return {
          itemlist: categorySearch(data, "bk-classics"),
        };
      case "bk-youngadultu":
        return {
          itemlist: categorySearch(data, "bk-youngadultu"),
        };
      case "bk-fairy":
        return {
          itemlist: categorySearch(data, "bk-fairy"),
        };
  
      default:
        return {
          itemlist: [{}],
        };
    }
  }, initialstate);

  useEffect(() => {
    dispatch({ type: "loadData" });
  }, []);

  const onSearchClick = (name) => {
    setsearching(true);
    let items = data.filter((d) => d.Title.toUpperCase().includes(name));
    dispatch({ type: "onSearchClick", itemlist: items });
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


  const localItem = [
      {
        id: 1,
        Title: "Of Mice and Men",
        Author: "John Steinbeck",
        Year: 1937,
        Category: "bk-left",
        Details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
      },
      {
        id: 2,
        Title: "The Catcher in the Rye",
        Author: " J.D. Salinger",
        Year: 1951,
        Category: "bk-fantasy",
        Details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
      },
      {
        id: 3,
        Title: "The Great Gatsby",
        Author: "F. Scott Fitzgerald",
        Year: 1925,
        Category: "bk-youngadultu",
        Details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
      },
      {
        id: 4,
        Title: "Lord of the Flies",
        Author: "William Golding",
        Year: 1954,
        Category: "bk-classics",
        Details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
      },
      {
        id: 33,
        Title: "Harry Potter and the Order of the Phoenix    ",
        Author: "J.K. Rowling",
        Year: 2003,
        Category: "bk-scifi",
        Details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
      },
      {
        id: 5,
        Title: "A Clockwork Orange",
        Author: "Anthony Burgess",
        Year: 1962,
        Category: "bk-fairy",
        Details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam tellus nisi, eget pulvinar in, molestie et arcu",
      },
    ];

    

export default PageContainer;
