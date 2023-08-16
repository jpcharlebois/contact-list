import { useState } from 'react'
import  ContactList  from './components/ContactList'
import SelectedContact from "./components/SelectedContact"
import './App.css'

function App() {
  let [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}

export default App
