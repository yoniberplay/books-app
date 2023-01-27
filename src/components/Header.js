

const Header = ( props ) =>{

   return (
    <header id="header" className="page-header">
    <div className="page-header-container row">

      <div className="main-logo">
        <a href="#" className="logo">The Library</a>
      </div>

      <div className="menu-search">
        <div className="main-navigation">
          <a href="#">Menu</a>
        </div>

        <div className="catalog-search">
          <input className="shuffle-search input_field " type="search" autocomplete="off" value="" maxlength="128" id="input-search" />
          <label className="input_label" for="input-search">
            <span className="input_label-content">Search Library</span>
            <span className="input_label-search"></span>
          </label>
        </div>

      </div>
    </div>
  </header>
   )

    
}


export default Header;