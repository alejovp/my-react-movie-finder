import React from 'react';
import './Footer.css';

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="float-right">
          <a onClick={() => window.scrollTo(0, 0)}>Back to top</a>
        </p>
        <p>My React Movie Finder it's a training exercise, created with react + redux and powered with <a href="https://www.themoviedb.org/documentation/api">The Movie DB API</a>.</p>
      </div>
    </footer>
  );
}