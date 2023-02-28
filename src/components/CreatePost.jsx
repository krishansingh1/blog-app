import React, { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');

  function handleFormData(e) {
    e.preventDefault();

    console.log(title);
    console.log(subtitle);
    console.log(content);

    const data = collection(db, 'content');

    addDoc(data, {
      title,
      subtitle,
      content,
      createdAt: new Date(),
    });
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleFormData}>
        <div className="form-field">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
