import { useState, useEffect } from "react";

const contact1 = { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" };
export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(contact1);
    console.log("Contact: ", contact);
    useEffect(()=>{
        async function fetchContact(selectedContactId) {
            try {
              let response = await fetch(`http://fsa-async-await.herokuapp.com/api/workshop/guests/${selectedContactId}`);
              let json = await response.json();
              console.log("fetch selected contact response: " , json);
              setContact(json);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact(selectedContactId)
    },[]);
    return (
        <div>
          <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </tr>
          <button onClick={() => {setSelectedContactId(null)}}>Back</button>
        </div>
        
    );
}