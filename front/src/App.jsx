import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import ContactDetail from './ContactDetail';
import Login from './Login';

function App() {
  // set up pour créer un tableau de contacts
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem('contacts');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // fonction qui permet d'ajouter ou de modifier un contact
  const addOrUpdateContact = (contact) => {
    if (contact.id) {
      const updatedContacts = contacts.map((c) =>
        c.id === contact.id ? contact : c
      );
      setContacts(updatedContacts);
    } else {
      setContacts([...contacts, { ...contact, id: crypto.randomUUID() }]);
    }
  };

  // fonction pour delete un contact
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Router>
      <Routes>
        
        <Route path="/home" element={<ContactsList contacts={contacts} />} />
        <Route
          path="/add"
          element={<ContactForm onSubmit={addOrUpdateContact} />}
        />
        <Route
          path="/edit/:id"
          element={
            <ContactForm onSubmit={addOrUpdateContact} contacts={contacts} />
          }
        />
        <Route
          path="/contact/:id"
          element={
            <ContactDetail contacts={contacts} onDelete={deleteContact} />
          }
        />

        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
