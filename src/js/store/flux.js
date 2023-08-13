const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList : [
				{
					fullName: "Mike Anamendolla",
					address: "5842 Hillcrest Rd",
					phone: "8865-9851",
					contactEmail: "mike.ana@example.com",
				},

				{
					fullName: "Luz Piedra",
					address: "5842 Boston Rd",
					phone: "8165-951",
					contactEmail: "luz.dfr@example.com",	
				},

				{
					fullName: "Marcela Pineda",
					address: "5842 Hillcrest Rd",
					phone: "8865-9881",
					contactEmail: "m.pineda@example.com",
				}		
			]

		},
		actions: {

			createUpdateContact: (contactObject) => {

				 let store = getStore();
				 let contactList = [...store.contactList, contactObject];
				 setStore({ contactList });

			},

			updateContact: (updatedContact) => {
				console.log("Email del contacto actualizado:", updatedContact.contactEmail);
				let store = getStore();
				let contacts = store.contactList;

				if (!contacts) return;

				const updatedContactList = contacts.map(contact => {
				  if(contact.contactEmail === updatedContact.contactEmail) {
					console.log('Viejo contacto:', contact);
    				console.log('Nuevo contacto:', updatedContact);
					  return {
						  ...contact,
						  ...updatedContact
					  };
				  }
				  else {
					return contact;
				  }
			  });

			  setStore({contactList: updatedContactList});
			  },

			getContacts: () => {
				let contactList = getStore().contactList;
				return contactList;
			},

			deleteContact : (email) => {
				let store = getStore();
		
				 let updatedContactList = store.contactList.filter((value) => value.contactEmail !== email);
		
				 setStore({contactList: updatedContactList});
		
			}

		}
	};
};

export default getState;
