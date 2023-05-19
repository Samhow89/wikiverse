import React, { useState } from 'react';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to a function for further processing
    createPost({ title, content, author, email, tags });

    // Clear the form after submission
    setTitle('');
    setContent('');
    setAuthor('');
    setEmail('');
    setTags('');
  };

  const createPost = (postData) => {
    console.log('Creating post:', postData);
 

  return (
    <div className="form">
      <h1>WikiVerse</h1>
      <h2>Add a page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="Title" name="Title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br /><br />
        <input type="text" id="ArticleContent" name="ArticleContent" placeholder="Article Content" value={content} onChange={(e) => setContent(e.target.value)} required /><br /><br />
        <input type="text" id="AuthorName" name="AuthorName" placeholder="Author Name" value={author} onChange={(e) => setAuthor(e.target.value)} required /><br /><br />
        <input type="email" id="AuthorEmail" name="AuthorEmail" placeholder="Author Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
        <input type="text" id="Tags" name="Tags" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} required /><br /><br />
        <input type="submit" value="Create Page" />
      </form>
    </div>
  );
};

export default AddPostForm;
