import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className='d-flex'>
      <img className='me-3 mt-3 ms-3' src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"></img>
      <div className='mt-3'>
        <div className='d-flex'>
          <h1>{props.fullName}</h1>
          <Link to={`/contact/update/${props.email}`}>
          <FontAwesomeIcon icon={faPenToSquare} className="ms-5" onClick={()=> {}}/>
          </Link>
          <FontAwesomeIcon icon={faTrash} className="ms-5" onClick={() => { actions.deleteContact(props.email) }}/>
        </div>
        <h5>{props.address}</h5>
        <h5>{props.phoneNumber}</h5>
        <h5>{props.email}</h5>
      </div>
    </div>
  )
}

export default ContactList