# React Lab 01 Template

Starter project for the IN432 React lab covering chapters 01–04.

## Getting Started

1. **Duplicate the folder**: Copy `lab-template` and rename it `react-lab01-<yourname>`.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. Open the printed URL in your browser to view the app.

## Project Structure

- `src/App.jsx` – Entry component composing the sample layout.
- `src/components/` – Place all new components here.
- `src/styles/lab-theme.css` – Predefined styling used throughout the lab.

## Components (implemented)
- `WelcomeBanner` — displays course, term, instructor, description and a greeting (includes Arabic greeting as a stretch).
- `CourseSummary` — shows title, topics, duration, delivery mode, and accepts `children` for footer notes.
- `ResourceItem` — individual resource entry; shows a small `NEW` badge when `isNew` is true.
- `ResourceList` — maps an array of resources to `ResourceItem` components.
- `LabOverview` — composes the full page (welcome, current/upcoming summaries, resources).
- `SectionTitle` — small reusable heading component (stretch).

## Stretch Goals Completed
- Arabic greeting in `WelcomeBanner` (returns `صباح الخير` or `مساء الخير`).
- `SectionTitle` reusable heading component.
- Small style extensions in `src/styles/extensions.css` to support layout and a `NEW` badge.

Keep the theme CSS untouched and add extensions in a separate file if you need extra styles.

