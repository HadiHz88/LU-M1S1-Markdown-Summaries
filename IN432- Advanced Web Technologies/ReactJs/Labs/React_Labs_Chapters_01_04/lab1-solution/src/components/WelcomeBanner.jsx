import React from 'react';

function WelcomeBanner({ course, term, instructor, description }) {
  function arabicGreeting() {
    const hour = new Date().getHours();
    return hour < 18 ? 'صباح الخير' : 'مساء الخير';
  }

  return (
    <section className="card banner">
      <h1 className="heading-large">{course}</h1>
      <p className="meta">{term} - <strong>{instructor}</strong></p>
      <p>{description} <span className="muted">(Lab overview)</span></p>
      <p className="greeting">{arabicGreeting()} <span aria-hidden>—</span> <span className="sr-only">greeting</span></p>
    </section>
  );
}

export default WelcomeBanner;

