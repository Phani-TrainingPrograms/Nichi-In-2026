import { useState } from 'react'// hold the data in the component.
import { getContacts } from './services/contactService' //Gets the data for the component
import ContactList from './components/contactList'; //UI for UR Contact List. 
import ContactForm from './components/ContactForm';

function App() {
  //data for this app:
  const [contacts, setContacts] = useState(getContacts());
  const [editingContact, setEditingContact] = useState(null);

  const onEdit = ()=> { alert("yet to implement") }
  const onDelete = ()=> { alert("yet to implement") }
  return (
    <>
      <h1>Contact Manager</h1>
      <hr />
      <div className="container">
        <div className="row">
          <ContactList contacts={contacts} onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </>
  )
}

export default App
