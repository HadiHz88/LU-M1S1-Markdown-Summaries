import React from 'react';
import ResourceItem from './ResourceItem.jsx';

function ResourceList({ resources }) {
  return (
    <section className="card resources">
      <h2 className="heading-medium">Lab Resources</h2>
      <ul className="resource-list">
        {resources.map((resource) => (
          <ResourceItem key={resource.id} {...resource} />
        ))}
      </ul>
    </section>
  );
}

export default ResourceList;

