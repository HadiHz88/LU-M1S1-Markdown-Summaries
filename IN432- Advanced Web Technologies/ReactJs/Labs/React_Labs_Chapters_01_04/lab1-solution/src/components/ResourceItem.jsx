import React from 'react';

function ResourceItem({ title, description, badge, isNew }) {
  return (
    <li className="resource-item">
      <div className="resource-content">
        <h3 className="heading-small">
          {title}
          {isNew ? <span className="badge badge-new">NEW</span> : (badge ? <span className="badge">{badge}</span> : null)}
        </h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default ResourceItem;

