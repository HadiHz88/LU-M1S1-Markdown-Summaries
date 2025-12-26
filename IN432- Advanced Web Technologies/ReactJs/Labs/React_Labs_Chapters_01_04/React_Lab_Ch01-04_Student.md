## React Lab 01 – Chapters 01–04 (Student Guide)

**Goal**  
Apply JSX fundamentals, props, lists, and composition exactly as presented in chapters 01–04 to build a multi-section lab overview page.

**Template Requirement**  

1. Locate the provided `lab-template` React + Vite project.  
2. Duplicate the folder and rename it using the pattern `react-lab01-<yourname>`.  
3. Install dependencies with `npm install` from inside the duplicated folder.  
4. Do not rename or delete starter files. All new components should live under `src/components`.  

**Predefined Styling**  

1. Keep the stylesheet `src/styles/lab-theme.css` exactly as provided.  
2. When you need new styles, add class names to your JSX and extend the CSS in a separate file (e.g., `src/styles/extensions.css`) that you import into `App.jsx`.  
3. Use the existing utility classes (cards, layout, typography) to keep a consistent look.  

---

### Part 1 – JSX & Rendering (Chapter 01)

1. Create a file `src/components/WelcomeBanner.jsx`.  
2. Export a function component that accepts props: `course`, `instructor`, `term`, and `description`.  
3. The component should return a single `<section>` with:  
   - Course title (from `course` prop), term (from `term` prop), instructor name (from `instructor` prop) and description (from `description` prop).  
   - A welcome paragraph explaining the lab focus.  
   - At least one nested element (e.g., `<strong>` or `<span>`) to practice JSX nesting.  
4. Import and render `WelcomeBanner` inside `src/App.jsx`, passing the required props as static values.  
5. Verify that the component renders correctly before moving on.  
6. *Stretch:* Add a helper function inside the component that returns "صباح الخير" or "مساء الخير" based on the current hour (use plain JavaScript conditionals only). Display this greeting in the component.  

### Part 2 – Props & Component Hierarchy (Chapter 02)

1. Create `src/components/CourseSummary.jsx`.  
2. Define props: `title`, `topics`, `duration`, `deliveryMode`, and an optional `children` area for extra notes.  
3. In `App.jsx`, pass static (hard-coded) values for these props—no state or external data yet.  
4. Render `CourseSummary` immediately after `WelcomeBanner`. The summary should be wrapped in a card layout using the predefined CSS.  
5. Add a footer note by wrapping additional JSX between the opening and closing tags of `CourseSummary` (this will populate `props.children`). The note should be passed as a child element (e.g., `<p className="note">...</p>`).  
6. *Stretch:* Provide a short static array (e.g., three bullet topics) as a prop and render it inline, separated by commas—no loops or dynamic updates in this stretch.  

### Part 3 – JSX Lists & Reusable Components (Chapter 03)

1. Create `src/components/ResourceItem.jsx` to display a resource title and description.  
2. The component should accept props: `title`, `description`, and an optional `isNew` (boolean).  
3. In `App.jsx`, declare a constant array `labResources` with at least four objects (`{ id, title, description }`). Optionally, some objects can include `isNew: true`.  
4. Create `src/components/ResourceList.jsx` that accepts a `resources` prop (array). Inside, map over the resources array to render a `ResourceItem` for each entry. Supply the `key` prop using the `id` from each resource object.  
5. Wrap the list in a `<section>` with a title like "Lab Resources" and apply the predefined list styling classes.  
6. *Stretch:* In `ResourceItem`, add a small badge (e.g., "NEW") that appears only when the `isNew` prop is `true` (use a ternary in JSX, not state).  

### Part 4 – Layout Composition (Chapter 04)

1. Create `src/components/LabOverview.jsx`.  
2. Inside `LabOverview`, compose the previous components in this order: `WelcomeBanner`, a pair of `CourseSummary` components (current lab and upcoming lab), and the resource list section (using `ResourceList`).  
3. Accept props in `LabOverview`: `welcome` (object with `course`, `instructor`, `term`, `description`), `current` (object with `title`, `topics`, `duration`, `deliveryMode`, `note`), `upcoming` (object with same structure as `current`), and `resources` (array of resource objects).  
4. Pass the appropriate props to each child component. For `CourseSummary` components, pass the data using spread operator (`{...current}`) and include the `note` as children (e.g., `<p className="note">{current.note}</p>`).  
5. In `App.jsx`, import `LabOverview`, prepare the data objects, and render the overview as the only child inside `<main>`.  
6. Apply the predefined layout class to arrange sections (e.g., two columns on wide screens).  
7. *Stretch:* Create a small reusable `SectionTitle` component in `src/components` that accepts `text` and optional `level` (default "h2") props. Use it in at least two sections to standardize headings.  

---

### Deliverables

1. A working React project built on the template with all components compiled successfully.  
2. `README.md` at the project root containing:  
   - Setup steps you followed.  
   - Brief description of each component.  
   - Any stretch goals you completed.  
3. Optional reflection file `REFLECTION.md` describing one challenge per part and how you solved it.  

### Submission Checklist

- [ ] Template duplicated and dependencies installed.  
- [ ] All components placed under `src/components`.  
- [ ] Styling uses the provided `lab-theme.css` plus optional extensions.  
- [ ] `LabOverview` renders every required section without runtime warnings.  
- [ ] README completed and project runs with `npm run dev`.  

Good luck, and remember to stay within chapters 01–04—no hooks or advanced patterns yet!
