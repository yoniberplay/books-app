import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "../App.scss";
import Nav from "./Nav";
import ListLiItem from "./items/ListLiItem";
import data from "./data";

const PageContainer = (props) => {
  const [Datos, setDatos] = useState([]);
  const [allcategories, setallcategories] = useState(false);
  const [searching, setsearching] = useState(false);

  useEffect(() => {
    setDatos(data);
  }, [allcategories]);

  const onSearchClick = (name) => {
    setsearching(true);
    let items = Datos.filter((d) => d.Title.toUpperCase() === name);
    setDatos(items);
    setsearching(false);
    
  };

  const clickallcategories = () => {
    setsearching(true);
    setallcategories(!allcategories);
    setsearching(false);
  };

  return (
    <>
    <div className="m-4">
      <section id="book_list">
        <Nav
          onSearchClick={onSearchClick}
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
              {Datos.length > 0 ? (
                <ListLiItem Datos={Datos} />
              ) : (
                <h2 className="text-center	">No books founds</h2>
              )}
            </ul>
          </div>
        )}
      </section>
      
    </div>
    <Footer/></>
  );
};

export default PageContainer;
