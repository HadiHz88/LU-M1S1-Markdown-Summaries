import React from 'react';
import WelcomeBanner from './WelcomeBanner.jsx';
import CourseSummary from './CourseSummary.jsx';
import ResourceList from './ResourceList.jsx';

function LabOverview({ welcome, current, upcoming, resources }) {
  return (
    <div className="lab-overview layout-two-col">
      <WelcomeBanner {...welcome} />

      <div className="summaries">
        <CourseSummary title={current.title} {...current}>
          <p className="note">{current.note}</p>
        </CourseSummary>

        <CourseSummary title={upcoming.title} {...upcoming}>
          <p className="note">{upcoming.note}</p>
        </CourseSummary>
      </div>

      <ResourceList resources={resources} />
    </div>
  );
}

export default LabOverview;
