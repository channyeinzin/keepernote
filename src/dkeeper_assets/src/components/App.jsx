import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Login from "./Login";
import { dkeeper } from "../../../declarations/dkeeper";

function App() {
  const [notes, setNotes] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  // Check login status from local storage when component mounts
  useEffect(() => {
    const isLogged = localStorage.getItem("isLoggedIn") === "true";
    setLoggedIn(isLogged);
  }, []);

  // Effect to fetch notes when logged in
  useEffect(() => {
    if (loggedIn) {
      fetchData();
    }
  }, [loggedIn]);

  // Fetch notes from the backend
  async function fetchData() {
    try {
      const notesArray = await dkeeper.readNotes();
      setNotes(notesArray);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  }

  // Add a new note
  async function addNote(newNote) {
    try {
      await dkeeper.createNote(newNote.title, newNote.content);
      setNotes(prevNotes => [newNote, ...prevNotes]);
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  }

  // Delete a note
  async function deleteNote(id) {
    try {
      await dkeeper.removeNote(id);
      setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  }

  // Handle user login
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setLoggedIn(true);
  };

  // Handle user logout
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
  };

  // Conditional rendering based on login status
  if (!loggedIn) {
    return <Login setLoggedIn={handleLogin} />;
  }

  return (
    <div>
      <Header isLoggedIn={loggedIn} onLogout={logout} />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={() => deleteNote(index)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
