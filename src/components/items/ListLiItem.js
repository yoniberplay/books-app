import "../../App.scss";
import LiItem from "./LiItem";
import Modal from "../UI/Modal";
import { useContext } from "react";
import ModalContext from "../ModalContext";
import { useState } from "react";
import DetailCard from "../Card/DetailCard";
const ListLiItem = (props) => {

    const Context = useContext(ModalContext);

    const [Datos, setDatos] = useState([]);

    const showDetails = ( item ) => {
        setDatos(item);
        Context.set();
    }
    let items = props.Datos.map((item) => {
     
    return <LiItem showDetails={()=> {showDetails(item)}} key={item.id} bk={item.Category} Title={item.Title} Author={item.Author} Year={item.Year} Details={item.Details}  />

    });
    return (
        
        <div className="grid lg:grid-cols-3 lg:gap-3 ">
       {items}   
       {Context.show && <Modal hideCarthandler={Context.set}>
        <DetailCard Datos={Datos}></DetailCard>
        </Modal>}
       </div>
       
    )
}

export default ListLiItem;