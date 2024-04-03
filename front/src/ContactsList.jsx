import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function ContactsList({ contacts }) {

  /***************    IGNORRE CE CODE DE LÀ À LIGNE 65 *************/ 
  const [searchTerm, setSearchTerm] = useState('');
  // Ces 2 lignes pour le message
  const location = useLocation();
  const [alert, setAlert] = useState({ message: '', type: '' });

  // Ce useEffect pour le message
  useEffect(() => {
    // Check if there's a message and type in the location state
    if (location.state && location.state.message && location.state.type) {
      setAlert({
        message: location.state.message,
        type: location.state.type,
      });
      // Optionally clear the message after displaying it
      setTimeout(() => setAlert({ message: '', type: '' }), 5000); // Clears the message after 3 seconds

      // Clear the message from the location state
      // to prevent it from reappearing on refresh
      location.state.message = '';
    }
  }, [location]);

  // Cette variable pour le style du message
  const alertStyles = {
    backgroundColor:
      alert.type === 'added'
        ? 'rgb(29, 215, 29)'
        : alert.type === 'edited'
        ? 'rgb(53, 162, 235)'
        : 'rgb(235, 77, 75)', // Assuming red for deletion
  };

  // First, filter and sort contacts
  let filteredAndSortedContacts = contacts
    .filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (contact.surname &&
          contact.surname.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      const nameA = a.surname || a.name;
      const nameB = b.surname || b.name;
      return nameA.localeCompare(nameB);
    });

  // Then, create a new array that includes separators
  const contactsAndSeparators = [];
  let currentLetter = '';

  filteredAndSortedContacts.forEach((contact) => {
    const sortKey = (contact.surname || contact.name).toUpperCase();
    if (sortKey[0] !== currentLetter) {
      currentLetter = sortKey[0];
      contactsAndSeparators.push({ isSeparator: true, letter: currentLetter });
    }
    contactsAndSeparators.push(contact);
  });
  /***************    JUSQUE LÀ  *************/ 

  return (
    <div>
      <div>
        <header>
          {alert.message && (
            <div className="alertMsg" style={alertStyles}>
              {alert.message}
            </div>
          )}
          <div className="nav">
            <h2>Contacts</h2>
            <Link to="/log">
              <i class="fa-solid fa-right-to-bracket"></i>
            </Link>
          </div>
          <div className="search">
            <i className="fa-solid fa-search" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <main className="listMain">
          <article className="list" id="list">
            <Link to="/add">
              <i className="fa-solid fa-plus plusBtn" />
            </Link>

            {contactsAndSeparators.length > 0 ? (
              <ul>
                {contactsAndSeparators.map((item, index) =>
                  item.isSeparator ? (
                    <li
                      key={`separator-${item.letter}`}
                      className="separatorList"
                    >
                      {item.letter}
                    </li>
                  ) : (
                    <li key={item.id} className="otherLI">
                      <img src="https://media.licdn.com/dms/image/D4E03AQGfEr37Gx7qCQ/profile-displayphoto-shrink_800_800/0/1688640726963?e=1717632000&v=beta&t=tCz4YI6jVykaz8ccB2hBSeQNTcG2UNg9W3IEVfsUPoE"></img>
                      <Link to={`/contact/${item.id}`}>
                        {item.name} {item.surname}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p>No contacts found.</p>
            )}
          </article>
        </main>
      </div>
    </div>
  );
}

export default ContactsList;
