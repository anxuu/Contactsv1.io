import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

export default function ViewContact2({ contacts }) {
    const { id } = useParams();

    const contact = contacts[id];

    if (!contact) {
        return <div> <Navbar /> Contact not found!</div>;
    }

    return (
        <>
            <Navbar />

            <div>
                <h1>Contact Details</h1>
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Mobile:</strong> {contact.mobile}</p>
                <p><strong>Email:</strong> {contact.email}</p>
            </div>

            <Link
                to="/ContactList2"
                style={{
                    textDecoration: 'none',
                    backgroundColor: 'yellow',
                    padding: '6px 14px',
                    borderRadius: '4px'
                }}
            >
                Back
            </Link>
        </>
    );
}