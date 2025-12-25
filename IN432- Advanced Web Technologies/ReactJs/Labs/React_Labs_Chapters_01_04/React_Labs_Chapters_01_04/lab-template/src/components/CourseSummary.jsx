import React from 'react';

function CourseSummary({ topics, duration, deliveryMode, children }) {
  return (
    <section className="card summary">
      <h2 className="heading-medium">Lab Segment</h2>
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

