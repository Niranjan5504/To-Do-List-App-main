import React, { useState } from 'react';
import { db } from '../firebase-config'; // Correct import path
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isNaN(value)) {
      alert('Input is not a number');
    } else {
      try {
        // Add a new document to the "todos" collection with the task and timestamp
        const docRef = await addDoc(collection(db, "todos"), {
          task: value,
          completed: false,
          createdAt: serverTimestamp() // Use Firestore's server timestamp
        });
        
        console.log("Document written with ID: ", docRef.id);
        addTodo(value); // Optionally update local state (if required)
        setValue(""); // Clear input field after successful submission
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className='todo-input'
        placeholder='What is the task today?'
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  );
};

export default TodoForm;
