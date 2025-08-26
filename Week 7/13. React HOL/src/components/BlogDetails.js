import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
    { title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' },
  ];

  return (
    <div className="blog-details">
      {blogs.length > 0 && (
        blogs.map((blog, index) => (
          <div key={index}>
            <h3>{blog.title}</h3>
            <p><strong>{blog.author}</strong></p>
            <p>{blog.content}</p>
          </div>
        ))
      )}
      {blogs.length === 0 && <p>No blogs available</p>}
    </div>
  );
};

export default BlogDetails;
