import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = collection(db, 'content');

    onSnapshot(postsRef, (snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // console.log('posts', posts);
      setPosts(posts);
    });
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Krishan</div>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subtitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;

// const styles = {
//   heading: {
//     fontSize: "3rem",
//   },
// };
