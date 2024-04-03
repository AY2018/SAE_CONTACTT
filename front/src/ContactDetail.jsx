import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ContactDetail({ contacts, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  // Updated comparison to directly use string-based IDs
  const contact = contacts.find((contact) => contact.id === id);

  const handleDelete = () => {
    onDelete(contact.id);
    navigate('/home', {
      state: {
        message: `Contact has been successfully deleted.`,
        type: 'deleted',
      },
    });
  };

  if (!contact) {
    return (
      <div>
        <p>Contact not found!</p>
        <button onClick={() => navigate('/home')}>Back to Contacts</button>
      </div>
    );
  }

  return (
    <article className="detailPage">
      <img
        src="https://media.licdn.com/dms/image/D4E03AQGfEr37Gx7qCQ/profile-displayphoto-shrink_800_800/0/1688640726963?e=1717632000&v=beta&t=tCz4YI6jVykaz8ccB2hBSeQNTcG2UNg9W3IEVfsUPoE"
        className="imgBG"
      ></img>
      <section className="contactTop">
        <i
          class="fa-solid fa-pen-to-square"
          onClick={() => navigate(`/edit/${contact.id}`)}
        ></i>
        <i class="fa-solid fa-arrow-left" onClick={() => navigate('/home')}></i>
        <img src="https://media.licdn.com/dms/image/D4E03AQGfEr37Gx7qCQ/profile-displayphoto-shrink_800_800/0/1688640726963?e=1717632000&v=beta&t=tCz4YI6jVykaz8ccB2hBSeQNTcG2UNg9W3IEVfsUPoE"></img>
      </section>
      <section className="infoSection">
        <h1>
          {contact.name} {contact.surname}
        </h1>
        <div className="infoSection_row">
          <i class="fa-solid fa-phone"></i>
          <p>{contact.phone}</p>
        </div>

        <div className="infoSection_row">
          <i class="fa-solid fa-envelope"></i>
          <p>{contact.email}</p>
        </div>

        <div className="infoSection_row">
          <i class="fa-solid fa-house"></i>
          <p>{contact.address}</p>
        </div>

        <div className="infoSection_row">
          <i class="fa-solid fa-info"></i>
          <p>{contact.other}</p>
        </div>

        <button onClick={handleDelete}>Delete</button>
      </section>
    </article>
  );
}

export default ContactDetail;
