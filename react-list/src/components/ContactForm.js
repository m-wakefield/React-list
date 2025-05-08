import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', comments: ''
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Form submitted!');
    console.log(form);
    setForm({ firstName: '', lastName: '', email: '', comments: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
      <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} />
      <textarea name="comments" placeholder="Comments" value={form.comments} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
