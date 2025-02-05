import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

export default function EditContact2({ setContacts, contacts }) {


    const { id } = useParams();
    const contact = contacts[parseInt(id)];
    const navigate = useNavigate();


    const [editedContact, setEditedContact] = useState({ ...contact });

    if (!contact) {
        return <div> <Navbar /> Contact not found!</div>;
    }

    const handleChange = (e) => {
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
    }

    const handleUpdate = () => {
        const updatedContacts = [...contacts];
        updatedContacts[id] = editedContact;
        setContacts(updatedContacts);
        navigate("/ContactList2");

    }

    return (
        <>

            <div style={{ backgroundColor: 'lightgray', }}>

                <div>
                    <Navbar />

                    <h3 style={{ color: 'green' }}>Edit Contact</h3>

                    <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quod adipisci minus obcaecati rerum delectus mollitia tempore ut nostrum quae architecto, optio, totam autem. Numquam consequuntur nesciunt iusto! Autem, libero?
                        Perspiciatis quia vero quos mollitia, dicta cumque beatae eius quae voluptates iure officia magni animi natus, ducimus doloremque aperiam corrupti delectus repudiandae corporis laborum placeat exercitationem. Placeat officia optio nulla!</div>
                    <div>
                        <br />

                        <div display="flex" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px', padding: '10px', borderRadius: '10px' }}>

                                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={editedContact.name} />

                                <input type="number" name="mobile" placeholder="Mobile" onChange={handleChange} value={editedContact.mobile} />
                                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={editedContact.email} />


                            </div>

                            <img srcSet="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" style={{ width: '300px', height: '300px', borderRadius: '80%' }} />

                        </div>

                    </div>
                    <div style={{ display: 'flex', gap: '10px' }} >
                        <button onClick={handleUpdate}  >Update</button>
                        <Link to={'/ContactList2'} style={{ textDecoration: 'none', backgroundColor: 'beige', padding: '6px 14px', borderRadius: '4px' }}>Cancel</Link>
                    </div>

                    <br />


                </div>

            </div>
        </>
    )

}



// import React, { useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// export default function EditContact2({ contacts, setContacts }) {
//     const { id } = useParams();
//     const navigate = useNavigate();  // To redirect after editing
//     const contactIndex = parseInt(id, 10);

//     const contact = contacts[contactIndex];

//     if (!contact) {
//         return <div> <Navbar /> Contact not found!</div>;
//     }

//     // State to hold updated values
//     const [editedContact, setEditedContact] = useState({ ...contact });

//     // Handle input changes
//     const handleChange = (e) => {
//         setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
//     };

//     // Handle update logic
//     const handleUpdate = () => {
//         const updatedContacts = [...contacts];
//         updatedContacts[contactIndex] = editedContact; // Replace old contact with edited one
//         setContacts(updatedContacts);
//         navigate("/ContactList2");  // Redirect to contact list
//     };

//     return (
//         <div style={{ backgroundColor: 'lightgray' }}>
//             <Navbar />
//             <h3 style={{ color: 'green' }}>Edit Contact</h3>

//             <div>
//                 <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px', padding: '10px', borderRadius: '10px' }}>
//                         <input type="text" name="name" placeholder="Name" value={editedContact.name} onChange={handleChange} />
//                         <input type="number" name="mobile" placeholder="Mobile" value={editedContact.mobile} onChange={handleChange} />
//                         <input type="email" name="email" placeholder="Email" value={editedContact.email} onChange={handleChange} />
//                     </div>
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" style={{ width: '300px', height: '300px', borderRadius: '50%' }} />
//                 </div>
//             </div>

//             <div style={{ display: 'flex', gap: '10px' }}>
//                 <button onClick={handleUpdate}>Update</button>
//                 <Link to="/ContactList2" style={{ textDecoration: 'none', backgroundColor: 'beige', padding: '6px 14px', borderRadius: '4px' }}>Cancel</Link>
//             </div>
//         </div>
//     );
// }
