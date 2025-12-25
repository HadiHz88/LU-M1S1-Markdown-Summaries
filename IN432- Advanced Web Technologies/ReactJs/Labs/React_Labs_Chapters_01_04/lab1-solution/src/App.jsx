import React from 'react';

import './styles/extensions.css';

import LabOverview from './components/LabOverview.jsx';

const WELCOME = {
  course: 'IN432 — Advanced Web Technologies',
  term: 'M1S1',
  instructor: 'Kamal B.',
  description: 'Overview of chapters 01–04 and lab goals.'
}

const CURRENT_LAB = {
  title: 'Current Lab: JSX & Rendering',
  topics: 'JSX Basics, Rendering',
  duration: '90 minutes',
  deliveryMode: 'In-person',
  note: 'Focus on writing semantic JSX and using the lab theme classes.'
};

const NEXT_LAB = {
  title: 'Next Lab: Props & Components',
  topics: 'Props & Reusable Components',
  duration: '90 minutes',
  deliveryMode: 'In-person',
  note: 'Prepare questions about prop drilling and component structure.'
};

const LAB_RESOURCES = [
  { id: 'guide', title: 'Lab Instructions', description: 'Step-by-step guide stored in React_Lab_Ch01-04_Student.md.' , isNew: true },
  { id: 'slides', title: 'Slides Chapters 01-04', description: 'Overview of key concepts covered so far.' , isNew: false},
  { id: 'cheatsheet', title: 'JSX Cheatsheet', description: 'Common patterns and syntax reminders.' },
  { id: 'css', title: 'Lab Theme Styles', description: 'Reference for available CSS classes.' }
];

function App() {
  return (
    <main className="layout">
      <LabOverview welcome={WELCOME} current={CURRENT_LAB} upcoming={NEXT_LAB} resources={LAB_RESOURCES} />
    </main>
  );
}

export default App;

