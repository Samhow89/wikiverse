import React from 'react';

export const Page = ({page}) => {

  return <>
    <div key={page.id}>
      <h3>{page.title}</h3>
      <p>{page.content}</p>
      <p>Author: {page.author}</p>
      <p>Email: {page.email}</p>
      <p>Tags: {page.tags}</p>
    </div>
  </>
} 
	