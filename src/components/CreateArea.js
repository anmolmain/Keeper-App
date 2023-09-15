import React from "react";
import { useState } from "react";
import Note from "./Note";

function CreateArea() {
  const [docs, updateDocs] = useState([]);
  const [text, setText] = useState({
    title: "",
    desc: ""
  });
  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
    // console.log(e.target.name,e.target.value);
  };
  const addDoc = (e) => {
    e.preventDefault();
    updateDocs([...docs, text]);
    setText({
      title: "",
      desc: ""
    });
    // console.log(text);
    // console.log(docs);
  };
  const deleteDoc = (index) => {
    const mdocs = [...docs];
    mdocs.splice(index, 1);
    updateDocs(mdocs);
  };
  return (
    <div>
      <form>
        <input
          name="title"
          value={text.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="desc"
          value={text.desc}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addDoc}>Add</button>
      </form>
      {docs.map((item, index) => (
        <Note
          title={item.title}
          content={item.desc}
          key={index}
          deleteDoc={deleteDoc}
        />
      ))}
    </div>
  );
}

export default CreateArea;
