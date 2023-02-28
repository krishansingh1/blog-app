import React, { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useFormInput } from '../hooks';

function CreatePost() {
  const title = useFormInput('');
  const subtitle = useFormInput('');
  const content = useFormInput('');

  function handleFormData(e) {
    e.preventDefault();

    console.log(title);
    console.log(subtitle);
    console.log(content);

    const data = collection(db, 'content');

    addDoc(data, {
      title: title.value,
      subtitle: subtitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleFormData}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input {...subtitle} />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
