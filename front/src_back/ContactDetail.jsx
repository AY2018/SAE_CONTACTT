import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ContactDetail({ onDelete, BASE_URL_API }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL_API}/contacts/${id}`)
      .then((response) => response.json())
      .then((data) => setContact(data))
      .catch((error) => console.error('Error fetching contact:', error));
  }, [id, BASE_URL_API]);

  const handleDelete = () => {
    onDelete(id);
    navigate('/');
  };

  if (!contact) {
    return (
      <div>
        <p>Loading contact...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Contact Detail</h2>
      {contact.imagePath && (
        <img
          src={`${BASE_URL_API}/${contact.imagePath}`}
          alt={`${contact.name}'s avatar`}
          style={{ maxWidth: '100px', maxHeight: '100px' }}
        />
      )}
      <p>Name: {contact.name}</p>
      <p>First Name: {contact.surname}</p>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Address: {contact.address}</p>
      <p>Other: {contact.other}</p>
      <button onClick={() => navigate(`/edit/${contact.id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate('/')}>Back to Contacts</button>
    </div>
  );
}

export default ContactDetail;
