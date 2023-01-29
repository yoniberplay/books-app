import React from "react";




const Nav = ( props ) => {

  const searchElement = React.useRef();

const searchClick = ( e )=> {

  if (e.key === 'Enter' || !e.key) {
    if(searchElement.current.value === "" || searchElement.current.value.trim().length === 0){
    
    }else{
      props.onSearchClick( searchElement.current.value.toUpperCase() );
    }
    searchElement.current.value = "";
  }
  
}
  
  return (
    <div className="toolbar ">
      <div className="flex flex-col	md:flex-row	justify-between mb-3 z-20 ">
        <div className="mt-3">
          <button  onClick={()=> {props.onCategoryClick({ type: 'loadData' })}} className="filter-item boton " data-group="all">
            All Categories
          </button>
          <button onClick={()=> {props.onCategoryClick({ type: 'bk-fantasy' })}}  className="filter-item boton" data-group="fantasy">
            Fantasy
          </button>
          <button onClick={()=> {props.onCategoryClick({ type: 'bk-scifi' })}}  className="filter-item boton" data-group="sci-fi">
            Sci-Fi
          </button>
          <button onClick={()=> {props.onCategoryClick({ type: 'bk-classics' })}}  className="filter-item boton" data-group="classic">
            Classics
          </button>
          <button onClick={()=> {props.onCategoryClick({ type: 'bk-fairy' })}}  className="filter-item boton" data-group="fairy">
            Fairy Tale
          </button>
          <button onClick={()=> {props.onCategoryClick({ type: 'bk-youngadultu' })}}  className="filter-item boton" data-group="young">
            Young Adult
          </button>
        </div>

        <div className="flex mt-5 md:m-0 ">
          <input
          ref={searchElement}
            onKeyDown={searchClick}
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primario	 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            onClick={searchClick}
            className="ml-1 btn inline-block px-6 py-2.5 bg-primario text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primario800 hover:shadow-lg focus:bg-primario800  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primario800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
