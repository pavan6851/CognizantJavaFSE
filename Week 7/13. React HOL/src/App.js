import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [selectedView, setSelectedView] = useState('courses'); // Initially, we display Course Details

  const renderComponent = () => {
    switch (selectedView) {
      case 'books':
        return <BookDetails />;
      case 'blogs':
        return <BlogDetails />;
      case 'courses':
      default:
        return <CourseDetails />;
    }
  };

  return (
    <div className="App">
      <div className="nav">
        <button onClick={() => setSelectedView('courses')}>Course Details</button>
        <button onClick={() => setSelectedView('books')}>Book Details</button>
        <button onClick={() => setSelectedView('blogs')}>Blog Details</button>
      </div>
      <div className="content">
        <h1>{selectedView.charAt(0).toUpperCase() + selectedView.slice(1)} Details</h1>
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
