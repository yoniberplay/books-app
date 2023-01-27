import "../../App.scss";
import LiItem from "./LiItem";

const ListLiItem = (props) => {

    let items = props.Datos.map((item) => {

    return <LiItem key={item.id} bk={item.Category} Title={item.Title} Author={item.Author} Year={item.Year} Details={item.Details}  />

    });
    return (
        <div className="grid lg:grid-cols-3 lg:gap-3 ">
       {items}       
       </div>
    )
}

export default ListLiItem;