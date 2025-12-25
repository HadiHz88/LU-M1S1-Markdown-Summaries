import React from 'react';

import WelcomeBanner from './components/WelcomeBanner.jsx';
import CourseSummary from './components/CourseSummary.jsx';
import ResourceList from './components/ResourceList.jsx';

const CURRENT_LAB = {
  topics: 'JSX Basics, Rendering',
  duration: '90 minutes',
  deliveryMode: 'In-person',
  note: 'Focus on writing semantic JSX and using the lab theme classes.'
};

const NEXT_LAB = {
  topics: 'Props & Reusable Components',
  duration: '90 minutes',
  deliveryMode: 'In-person',
  note: 'Prepare questions about prop drilling and component structure.'
};

const LAB_RESOURCES = [
  { id: 'guide', title: 'Lab Instructions', description: 'Step-by-step guide stored in React_Lab_Ch01-04_Student.md.' },
  { id: 'slides', title: 'Slides Chapters 01-04', description: 'Overview of key concepts covered so far.' },
  { id: 'cheatsheet', title: 'JSX Cheatsheet', description: 'Common patterns and syntax reminders.' },
  { id: 'css', title: 'Lab Theme Styles', description: 'Reference for available CSS classes.' }
];

function App() {
  return (
    <main className="layout">
      <WelcomeBanner />
      <CourseSummary {...CURRENT_LAB}>
        <p className="note">Remember to reuse existing CSS utilities for consistent styling.</p>
      </CourseSummary>
      <CourseSummary {...NEXT_LAB}>
        <p className="note">Review the differences between props and state (introduced next week).</p>
      </CourseSummary>
      <ResourceList resources={LAB_RESOURCES} />
    </main>
  );
}

export default App;

