import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const postRef = doc(db, 'content', postId);

    getDoc(postRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.data());
        setPost(snapshot.data());
      }
    });
  }, []);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
export default PostDetail;
