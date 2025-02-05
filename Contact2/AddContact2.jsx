import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

export default function AddContact2({ setContacts, contacts }) {


    const [importlist, setImportlist] = useState([]);

    const [stored, setStored] = useState({ name: '', photo: '', mobile: '', email: '', company: '', title: '' });
    const navigate = useNavigate();



    const handleChange = (e) => {
        setStored({ ...stored, [e.target.name]: e.target.value });


    }


    const handleClick = () => {
        console.log('ok');

        setContacts([...contacts, stored]);
        setStored({ name: '', photo: '', mobile: '', email: '', company: '', title: '' });
        navigate("/ContactList2");
    }






    return (
        <div style={{ backgroundColor: 'lightgray', }}>

            <div>
                <Navbar />

                <h3 style={{ color: 'green' }}>Create Contact</h3>

                <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quod adipisci minus obcaecati rerum delectus mollitia tempore ut nostrum quae architecto, optio, totam autem. Numquam consequuntur nesciunt iusto! Autem, libero?
                    Perspiciatis quia vero quos mollitia, dicta cumque beatae eius quae voluptates iure officia magni animi natus, ducimus doloremque aperiam corrupti delectus repudiandae corporis laborum placeat exercitationem. Placeat officia optio nulla!</div>
                <div>
                    <br />


                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px', padding: '10px', borderRadius: '10px' }}>

                        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={stored.name} /*  onClick={} style={ } */ />
                        <input type="url" name="photo" placeholder="Photo url" onChange={handleChange} value={stored.photo} /*onClick={} style={ } */ />
                        <input type="number" name="mobile" placeholder="Mobile" onChange={handleChange} value={stored.mobile} /*onClick={} style={ } */ />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={stored.email} /*onClick={} style={ } */ />
                        <input type="text" name="company" placeholder="Company" onChange={handleChange} value={stored.company} /*onClick={} style={ } */ />
                        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={stored.title} /*onClick={} style={ } */ />

                    </div>

                    <br />

                </div>
                <div style={{ display: 'flex', gap: '10px' }} >
                    <button onClick={handleClick}>Create </button>
                    <Link to={'/ContactList2'} style={{ textDecoration: 'none', backgroundColor: 'beige', padding: '6px 14px', borderRadius: '4px' }}>Cancel</Link>
                </div>

                <br />


            </div>


            <br />


        </div>

    );
}