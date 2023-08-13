import "../../styles/home.css";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext"; 
import ContactList from "../component/ContactList";

export const Home = () => {
	const { store, actions } = useContext(Context);
	//console.log(store.contactList);
	return(
		<>
		{
			store.contactList.map((contact,index)=>{
				return(
						<ContactList fullName={contact.fullName} address={contact.address} phone={contact.phone} 
						email={contact.contactEmail} profilePicture={contact.profilePicture} key={index}></ContactList>
						)
						})
		}
		</>
	)
}


	


