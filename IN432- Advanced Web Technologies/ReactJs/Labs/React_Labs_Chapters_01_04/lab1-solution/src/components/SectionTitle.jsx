import React from 'react';

function SectionTitle({ text, level = 'h2' }) {
  const Tag = level;
  return <Tag className="heading-medium">{text}</Tag>;
}

export default SectionTitle;
