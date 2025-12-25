import React from 'react';

function CourseSummary({ title = 'Lab Segment', topics, duration, deliveryMode, children }) {
  return (
    <section className="card summary">
      <h2 className="heading-medium">{title}</h2>
      <dl className="summary-list">
        <div>
          <dt>Topics</dt>
          <dd>{topics}</dd>
        </div>
        <div>
          <dt>Duration</dt>
          <dd>{duration}</dd>
        </div>
        <div>
          <dt>Delivery</dt>
          <dd>{deliveryMode}</dd>
        </div>
      </dl>
      {children && <footer className="summary-footer">{children}</footer>}
    </section>
  );
}

export default CourseSummary;

