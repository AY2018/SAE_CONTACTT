import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ContactForm({ onSubmit, contacts }) {
  const [contact, setContact] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    address: '',
    other: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id && contacts) {
      const contactToEdit = contacts.find((c) => c.id === id);
      if (contactToEdit) {
        setContact(contactToEdit);
      }
    }
  }, [id, contacts]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
    // Inside your handleSubmit function in ContactForm
    navigate('/home', {
      state: {
        message: `Contact has been successfully ${id ? 'edited' : 'added'}.`,
        type: id ? 'edited' : 'added',
      },
    });
  };

  return (
    <div className="formFinal_Container">
      <i class="fa-solid fa-arrow-left" onClick={() => navigate('/home')}></i>

      <form onSubmit={handleSubmit} className="formFinal">
        <fieldset>
          <label>Name</label>
          <input
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset>
          <label>Surname</label>
          <input
            name="surname"
            value={contact.surname}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Phone</label>
          <input name="phone" value={contact.phone} onChange={handleChange} />
        </fieldset>
        <fieldset>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Address</label>
          <input
            name="address"
            value={contact.address}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label>Other</label>
          <textarea
            name="other"
            value={contact.other}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <label>Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </fieldset>

        <button type="submit" className="saveBtn">
          Save Contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
