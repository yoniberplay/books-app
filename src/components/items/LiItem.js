import React from "react";
import "../../App.scss";


const LiItem = (props) => {

  return (
    
    <li className="book-item w-4/5 sm:w-full">
      <div className="bk-img">
        <div className="bk-wrapper">
          <div onClick={props.showDetails} className="bk-book bk-bookdefault cursor-pointer">
            <div className="bk-front">
              <div id={props.bk} className="bk-cover "></div>
            </div>
            <div className="bk-back "></div>
            <div className={props.bk}></div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flow-root	">
        
        <h3 className="">{props.Title}</h3>
        <p className="author ">
          by {props.Author} &bull; {props.Year}
        </p>

        <p>{props.Details}</p>
        
        
        
        <button
          onClick={props.showDetails}
          type="button"
          className="text-white bg-footer hover:bg-navmenu focus:ring-4 focus:outline-none focus:primario700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primario700 dark:hover:bg-primario700 dark:focus:ring-primario800 mt-3"
        >
          Details
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>


      </div>
    </li>
  );
};

export default LiItem;
