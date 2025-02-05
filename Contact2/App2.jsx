import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Contact from '../Contact'; // Reuse the Contact component for editing

function App2({ contacts, getData }) {
    const [editingIndex, setEditingIndex] = useState(null);
    const navigate = useNavigate();

    // Edit contact
    const handleEdit = (index) => {
        setEditingIndex(index); // Set the index of the contact to be edited
    };

    // Update contact
    const updateContact = (updatedContact) => {
        const updatedContacts = contacts.map((contact, index) =>
            index === editingIndex ? updatedContact : contact
        );
        getData(updatedContacts);
        setEditingIndex(null); // Exit edit mode
    };

    // Delete contact
    const handleDelete = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        getData(updatedContacts);
    };

    return (
        <div>
            <h2>View Contacts</h2>
            <div>
                {contacts.length === 0 ? (
                    <div>No contacts available. Please add one!</div>
                ) : (
                    contacts.map((contact, index) => (
                        <div key={index} style={{ margin: '10px', padding: '10px', backgroundColor: 'beige' }}>
                            <div>Contact {index + 1}</div>
                            <div>Name: {contact.Name}</div>
                            <div>Number: {contact.Number}</div>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
            {/* If editing, show the Contact component with the selected contact */}
            {editingIndex !== null && (
                <Contact
                    getData={getData}
                    editingContact={contacts[editingIndex]}
                    updateContact={updateContact}
                />
            )}
        </div>
    );
}

export default App2;