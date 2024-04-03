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
    image: null, 
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`${BASE_URL_API}/contacts/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setContact({ ...data, id });
        })
        .catch((error) =>
          console.error('Error fetching contact for edit:', error)
        );
    }
  }, [id, BASE_URL_API]);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setContact({ ...contact, image: e.target.files[0] });
    } else {
      setContact({ ...contact, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in contact) {
      if (key === 'image' && contact[key]) {
        formData.append(key, contact[key]);
      } else if (key !== 'image') {
        formData.append(key, contact[key]);
      }
    }

    // Adjust your onSubmit to handle FormData if necessary
    onSubmit(formData);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Surname:
        <input name="surname" value={contact.surname} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input name="phone" value={contact.phone} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input name="address" value={contact.address} onChange={handleChange} />
      </label>
      <label>
        Other:
        <textarea name="other" value={contact.other} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input
          type="file"
          name="image"
          onChange={handleChange}
          accept="image/*"
        />
      </label>
      <button type="submit">Save Contact</button>
      <button type="button" onClick={() => navigate('/')}>
        Cancel
      </button>
    </form>
  );
}

export default ContactForm;
