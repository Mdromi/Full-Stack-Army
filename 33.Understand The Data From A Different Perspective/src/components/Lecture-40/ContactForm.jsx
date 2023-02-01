import React from 'react';
import { useState } from 'react';
import ContactSection from './ContactSection'
import Table from './Table'

const ContactForm = () => {
    const [contacts, setContacts] = useState([])
    const getContact = contact => {
        setContacts([].concat(contacts, contact))
    }

    return (
        <div style={{ width: '50%', margin: '0 auto' }}>
            <h1>Contact App</h1>
            <ContactSection getContact={getContact} />
            <Table contacts={contacts} />
        </div>
    );
}

export default ContactForm;
