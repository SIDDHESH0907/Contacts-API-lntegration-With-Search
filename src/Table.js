import React, { useState } from "react";
import "./Table.css";
import contacts from "./contacts.json";

function Table() {
  const contactList = contacts;

  const [search, setSearch] = useState("");

  console.log(search);
  return (
    <>
      <div>
        <h2>Contact List</h2>
        <form >
          <div id="search-container">
            <input onChange={(c) => setSearch(c.target.value)} type="text" id="search-input" placeholder="Search..." />
            <button id="search-button" onclick="search">
              Search
            </button>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contactList.filter((contact)=>{
                return search.toLowerCase() === '' ? contact : contact.fname.toLowerCase().includes(search)
            }).map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>
                  <img src={contact.image} alt={contact.fname} />
                </td>
                <td>{contact.fname}</td>
                <td>{contact.lname}</td>
                <td>{contact.gender}</td>
                <td>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
