import React from 'react';

function WelcomeBanner() {
  return (
    <section className="card banner">
      <h1 className="heading-large">IN432 React Lab 01</h1>
      <p className="meta">Fall Term · Instructor: Dr. Kamal</p>
      <p>
        Welcome! In this lab you will practice JSX rendering, props, list rendering, and component composition using the
        provided template and theme.
      </p>
    </section>
  );
}

export default WelcomeBanner;

