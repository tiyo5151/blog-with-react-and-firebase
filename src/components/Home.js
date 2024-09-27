import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Home = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({ doc })));
      // console.log( data.docs.map((doc) => ({ ...doc.data().author.username, id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    window.location.reload();
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <div className="nameAndDeleteButton">
              <h2>@{post.author.username}</h2>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>
                  <span class="text">Delete</span>
                  <span class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
