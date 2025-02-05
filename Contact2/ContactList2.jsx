import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import './App.css';
import data from '../data.json';
import { Api } from "../Api";



export default function ContactList2({ contacts, setContacts }) {

    // const [importlist, setimportlist] = useState([]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let response = await Api.getAllContacts();
    //             console.log(response.data);
    //             setimportlist(response.data)

    //         } catch (error) {
    //             console.error("Error fetching contacts", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await Api.getAllContacts();
                setContacts(response.data);  // Directly set contacts instead of using importlist
            } catch (error) {
                console.error("Error fetching contacts", error);
            }
        };
        fetchData();
    }, [setContacts]);





    const handleDelete = (e, index) => {
        e.preventDefault();
        setContacts(contacts.filter((_, i) => i !== index));
        console.log(data);

    }



    // useEffect(() => {
    //     if (importlist.length > 0) {
    //         setContacts(prevContacts => [...prevContacts, ...importlist]);
    //     }
    // }, [importlist, setContacts]);

    return (
        <div>
            <Navbar />

            <br />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>Contact manager</span>

                <Link to="/AddContact2" style={{ color: 'white', backgroundColor: 'blue', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px' }}>+ New</Link>
            </div>

            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque natus ratione dolor eveniet. Expedita iure numquam excepturi repudiandae recusandae consequatur, voluptas dolorum nihil! Magni cupiditate, in asperiores incidunt esse aliquid!
            </div>
            <div style={{ display: ' flex', alignItems: 'center', gap: '10px' }} >

            </div>



            <br />


            {
                contacts.length > 0 ? contacts.map((contact, index) =>

                (<div key={index} >

                    <div className="newrow" style={{ backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px', width: '500px' }}>

                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />

                        <div className="details" >
                            <p>
                                <strong>Name:</strong> {contact.name}
                            </p>
                            <p >
                                <strong>Mobile:</strong> {contact.mobile}
                            </p>
                            <p >
                                <strong>Email:</strong> {contact.email}
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column ', gap: '10px' }} >

                            <Link to={`/view-contact/${index}`} style={{ textDecoration: 'none', backgroundColor: 'beige', padding: '6px 14px', borderRadius: '4px' }}> 👁  </Link>
                            <Link to={`/EditContact2/${index}`} style={{ textDecoration: 'none', backgroundColor: 'beige', padding: '6px 14px', borderRadius: '4px' }}> ✏️  </Link>
                            <Link onClick={(e) => handleDelete(e, index)} to={'/'} style={{ textDecoration: 'none', backgroundColor: 'beige', padding: '6px 14px', borderRadius: '4px' }}> ❌  </Link>


                        </div>
                    </div>
                    <br />


                </div>)) : (<div> No contacts to display </div>)
            }
        </div>
    );
}


