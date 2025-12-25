# IN432 - Project 1: Personal Portfolio Website

## 🎯 Project Overview

**Duration:** 2 weeks  
**Difficulty:** Intermediate to Advanced  
**Technologies:** HTML5, CSS3 Only (No JavaScript Required)  
**Project Type:** Individual Assignment

### Learning Objectives

By completing this project, students will:

- Master semantic HTML5 structure and accessibility best practices
- Implement advanced CSS layouts using Flexbox and CSS Grid
- Create responsive designs that work across all devices
- Develop CSS-only animations and interactive components
- Use advanced CSS selectors and pseudo-classes for interactivity
- Implement CSS custom properties for theming and consistency
- Build a professional portfolio showcasing pure CSS techniques
- Practice content strategy and professional presentation

### Project Description

Create a professional personal portfolio website using only HTML5 and CSS3. This project will demonstrate your mastery of modern CSS techniques including advanced selectors, animations, responsive design, and interactive components - all without requiring any JavaScript. The website will serve as your digital business card and showcase your pure CSS development skills.

---

## 📋 Detailed Page Specifications

### Page 1: Homepage (index.html)

#### Content Requirements

**Hero Section:**

- Professional headshot or avatar (minimum 400x400px)
- Compelling headline that describes your role (e.g., "Front-End Developer", "Web Designer")
- Brief tagline or value proposition (1-2 sentences)
- Primary call-to-action button: "View My Work"
- Secondary call-to-action button: "Get In Touch"
- Social media links (GitHub, LinkedIn, Twitter, etc.)

**About Preview Section:**

- 2-3 sentence introduction about yourself
- Key personality traits or professional qualities
- "Learn More About Me" link to full about page

**Featured Projects Section:**

- Display 3 best projects in a grid layout
- Each project card must include:
  - Project thumbnail/screenshot (400x300px minimum)
  - Project title and brief description (2-3 sentences)
  - Technology stack used (HTML, CSS, JavaScript, etc.)
  - "View Project" and "View Code" buttons
  - Project completion date

**Skills Overview Section:**

- List of technical skills organized by category:
  - **Frontend:** HTML5, CSS3, JavaScript, React, etc.
  - **Backend:** Node.js, Python, PHP, etc.
  - **Tools:** Git, VS Code, Figma, etc.
  - **Databases:** MySQL, MongoDB, etc.
- Visual representation (progress bars, skill meters, or icon grid)

**Latest Updates Section:**

- Recent blog post preview (if applicable)
- Latest project completion
- Current learning goals or technologies you're exploring

#### Design Requirements

**Layout Structure:**

```
Header (Navigation)
Hero Section (Full viewport height)
About Preview (2-column layout)
Featured Projects (3-column grid, 1-column mobile)
Skills Overview (4-column grid, 2-column tablet, 1-column mobile)
Latest Updates (2-column layout)
Footer
```

**Color Scheme Requirements:**

- Primary color (for buttons, links, accents)
- Secondary color (for backgrounds, borders)
- Neutral colors (grays for text and backgrounds)
- Ensure WCAG AA contrast ratios (4.5:1 minimum)

**Typography Requirements:**

- Choose 2 fonts maximum (one for headings, one for body text)
- Implement proper font loading (Google Fonts or local fonts)
- Font size scale: 14px, 16px, 18px, 24px, 32px, 48px
- Line height: 1.5 for body text, 1.2 for headings

**Animation Requirements:**

- Smooth scroll between sections
- Fade-in animations for sections on scroll
- Hover effects on project cards and buttons
- Hero section typing animation or slide-in effect
- Smooth transitions (0.3s ease-in-out) for all interactive elements

#### Technical Implementation

**HTML Structure Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="John Doe - Front-End Developer Portfolio">
    <title>John Doe - Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <!-- Navigation content -->
        </nav>
    </header>
    
    <main>
        <section class="hero" id="home">
            <!-- Hero content -->
        </section>
        
        <section class="about-preview" id="about-preview">
            <!-- About preview content -->
        </section>
        
        <section class="featured-projects" id="projects">
            <!-- Featured projects content -->
        </section>
        
        <section class="skills" id="skills">
            <!-- Skills content -->
        </section>
        
        <section class="updates" id="updates">
            <!-- Latest updates content -->
        </section>
    </main>
    
    <footer class="footer">
        <!-- Footer content -->
    </footer>
</body>
</html>
```

**CSS Structure Requirements:**

```css
/* CSS Custom Properties */
:root {
    --primary-color: #3b82f6;
    --secondary-color: #64748b;
    --text-dark: #1e293b;
    --text-light: #64748b;
    --bg-light: #f8fafc;
    --bg-white: #ffffff;
    --border-color: #e2e8f0;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Inter', sans-serif;
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-body);
    line-height: 1.6;
    color: var(--text-dark);
}

/* Component Styles */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.featured-projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 4rem 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    .featured-projects {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}
```

---

### Page 2: About Page (about.html)

#### Content Requirements

**Professional Biography Section:**

- Detailed professional story (400-600 words)
- Career journey and motivation for web development
- Personal values and work philosophy
- What drives your passion for technology
- Professional goals and aspirations

**Education Section:**

- University information:
  - Degree title and major
  - University name and location
  - Graduation date (expected or actual)
  - Relevant coursework list
  - Academic achievements or honors
- Additional education:
  - Online courses and certifications
  - Bootcamps or workshops attended
  - Self-learning initiatives

**Experience Timeline:**

- Work experience (if applicable):
  - Job title, company, dates
  - Key responsibilities and achievements
  - Technologies used
- Project experience:
  - Personal projects with dates
  - Freelance work
  - Open source contributions
- Volunteer experience (if relevant)

**Skills & Expertise Section:**

- Technical skills with proficiency levels:
  - **Expert:** Technologies you're highly proficient in
  - **Intermediate:** Technologies you're comfortable with
  - **Learning:** Technologies you're currently studying
- Soft skills:
  - Communication, teamwork, problem-solving
  - Project management, time management
  - Creativity, attention to detail

**Personal Interests Section:**

- Hobbies and interests outside of coding
- Sports, music, travel, reading, etc.
- How these interests influence your work
- Community involvement or activities

**Professional Photos:**

- High-quality professional headshot
- Casual workspace photo
- Optional: photo at a conference, meetup, or team event

#### Design Requirements

**Layout Structure:**

- Hero section with large professional photo and introduction
- Two-column layout for main content (desktop)
- Timeline visualization for experience/education
- Skills section with visual indicators
- Personal interests with icons or images

**Visual Elements:**

- Timeline with connecting lines and milestone markers
- Progress bars or circular progress indicators for skills
- Icon grid for interests and hobbies
- Pull quotes or highlighted text for key achievements
- Photo gallery with hover effects

#### Implementation Details

**Timeline CSS Example:**

```css
.timeline {
    position: relative;
    margin: 2rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--primary-color);
}

.timeline-item {
    position: relative;
    margin: 2rem 0;
    padding: 1rem;
    background: var(--bg-white);
    border-radius: 8px;
    box-shadow: var(--shadow);
}

.timeline-item:nth-child(odd) {
    margin-left: 0;
    margin-right: 50%;
}

.timeline-item:nth-child(even) {
    margin-left: 50%;
    margin-right: 0;
}
```

---

### Page 3: Portfolio/Projects Page (portfolio.html)

#### Content Requirements

**Project Categories:**

- **Web Development Projects** (minimum 4 projects)
- **Design Projects** (minimum 2 projects)
- **Course Projects** (minimum 3 projects)
- **Personal Projects** (minimum 2 projects)

**Each Project Must Include:**

- **Project Title** and subtitle/tagline
- **Project Description** (100-150 words explaining the problem solved)
- **My Role** in the project (if team project)
- **Technologies Used** with version numbers where applicable
- **Project Duration** (start and end dates)
- **Key Features** list (3-5 bullet points)
- **Challenges Faced** and how you solved them
- **What I Learned** from the project
- **Project Screenshots** (minimum 3 images per project)
- **Live Demo Link** (GitHub Pages, Netlify, etc.)
- **Source Code Link** (GitHub repository)
- **Project Status** (Completed, In Progress, Planning)

**Featured Case Studies (2-3 projects):**

- **Problem Statement:** What challenge did this project address?
- **Research & Planning:** How did you approach the solution?
- **Design Process:** Wireframes, mockups, user flow diagrams
- **Development Process:** Technical decisions and implementation
- **Results & Impact:** Metrics, feedback, lessons learned
- **Future Improvements:** What would you do differently or add?

#### Project Examples with Details

**Example Project 1: E-Commerce Website**

- **Title:** "TechGear - Electronics E-Commerce Platform"
- **Description:** A fully responsive e-commerce website for electronics with advanced filtering, shopping cart functionality, and user authentication system.
- **Technologies:** HTML5, CSS3, JavaScript ES6, Local Storage API
- **Duration:** 4 weeks (September - October 2024)
- **Key Features:**
  - Product catalog with search and filter functionality
  - Shopping cart with local storage persistence
  - Responsive design optimized for mobile devices
  - Product comparison feature
  - User review and rating system
- **Challenges:** Implementing complex product filtering without backend database
- **Solution:** Used JavaScript arrays and local storage to simulate database functionality
- **Screenshots:** Homepage, product listing, product detail, shopping cart
- **Links:** [Live Demo] | [GitHub Repo]

**Example Project 2: Restaurant Website**

- **Title:** "Bella Vista - Italian Restaurant Website"
- **Description:** Modern restaurant website with online menu, reservation system, and location information.
- **Technologies:** HTML5, CSS3, CSS Grid, Flexbox, Google Maps API
- **Duration:** 2 weeks (August 2024)
- **Key Features:**
  - Interactive menu with dietary filters
  - Image gallery with lightbox effect
  - Contact form with validation
  - Embedded Google Maps
  - Social media integration
- **Challenges:** Creating an appealing food gallery layout
- **Solution:** Implemented CSS Grid with varying image sizes and hover effects
- **Screenshots:** Homepage hero, menu page, gallery, contact page
- **Links:** [Live Demo] | [GitHub Repo]

#### Design Requirements

**CSS-Only Project Filter System:**

```css
/* Hidden radio buttons for filtering */
.filter-radio {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

/* Filter button styling */
.filter-label {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--primary-color);
    background: transparent;
    color: var(--primary-color);
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 25px;
    margin: 0.25rem;
    font-weight: 600;
}

/* Active filter styling */
.filter-radio:checked + .filter-label {
    background: var(--primary-color);
    color: white;
    transform: scale(1.05);
}

/* Project grid */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

/* CSS-only filtering logic */
#filter-all:checked ~ .projects-grid .project-card {
    display: block;
}

#filter-web:checked ~ .projects-grid .project-card {
    display: none;
}

#filter-web:checked ~ .projects-grid .project-card[data-category="web"] {
    display: block;
}

#filter-design:checked ~ .projects-grid .project-card {
    display: none;
}

#filter-design:checked ~ .projects-grid .project-card[data-category="design"] {
    display: block;
}

#filter-course:checked ~ .projects-grid .project-card {
    display: none;
}

#filter-course:checked ~ .projects-grid .project-card[data-category="course"] {
    display: block;
}
```

**HTML Structure for CSS-Only Filtering:**

```html
<div class="portfolio-filters">
    <!-- Hidden radio buttons -->
    <input type="radio" id="filter-all" name="project-filter" class="filter-radio" checked>
    <input type="radio" id="filter-web" name="project-filter" class="filter-radio">
    <input type="radio" id="filter-design" name="project-filter" class="filter-radio">
    <input type="radio" id="filter-course" name="project-filter" class="filter-radio">
    
    <!-- Visible filter buttons -->
    <label for="filter-all" class="filter-label">All Projects</label>
    <label for="filter-web" class="filter-label">Web Development</label>
    <label for="filter-design" class="filter-label">Design</label>
    <label for="filter-course" class="filter-label">Course Work</label>
</div>

<div class="projects-grid">
    <div class="project-card" data-category="web">
        <!-- Web project content -->
    </div>
    <div class="project-card" data-category="design">
        <!-- Design project content -->
    </div>
    <div class="project-card" data-category="course">
        <!-- Course project content -->
    </div>
</div>
```

**Project Card Design:**

```css
.project-card {
    background: var(--bg-white);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.project-image {
    position: relative;
    overflow: hidden;
    height: 200px;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.05);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(59, 130, 246, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
    opacity: 1;
}
```

---

### Page 4: Services Page (services.html)

#### Content Requirements

**Service Offerings:**

- **Web Development Services:**
  - Custom website development
  - Responsive web design
  - E-commerce solutions
  - Website maintenance and updates
  - Performance optimization

- **Design Services:**
  - UI/UX design
  - Wireframing and prototyping
  - Logo and brand identity
  - Print design (business cards, brochures)
  - Social media graphics

- **Consulting Services:**
  - Technical consulting
  - Code review and optimization
  - Technology stack recommendations
  - Project planning and estimation
  - Training and workshops

**Service Packages:**

- **Basic Package ($500-$1000):**
  - 3-5 page website
  - Responsive design
  - Contact form
  - Basic SEO
  - 30 days support

- **Professional Package ($1000-$2500):**
  - 5-10 page website
  - Custom design
  - CMS integration
  - Advanced SEO
  - E-commerce functionality
  - 90 days support

- **Enterprise Package ($2500+):**
  - Unlimited pages
  - Custom web application
  - Advanced functionality
  - Performance optimization
  - Ongoing maintenance
  - Priority support

**Work Process:**

1. **Discovery Phase (Week 1):**
   - Initial consultation
   - Requirements gathering
   - Project scope definition
   - Timeline and budget estimation

2. **Design Phase (Week 2-3):**
   - Wireframe creation
   - Visual design mockups
   - Client feedback and revisions
   - Final design approval

3. **Development Phase (Week 3-6):**
   - Frontend development
   - Backend integration (if needed)
   - Testing and debugging
   - Cross-browser compatibility

4. **Launch Phase (Week 6-7):**
   - Final testing
   - Client training
   - Website deployment
   - Post-launch support

**Client Testimonials:**

- Include 5-6 testimonials with:
  - Client name and company
  - Project description
  - Testimonial text (2-3 sentences)
  - Client photo (if available)
  - Star rating (5-star system)

**FAQ Section:**

- Common questions about pricing, timeline, process
- Technical questions about maintenance and updates
- Questions about revisions and changes
- Payment terms and methods

#### Design Requirements

**Service Cards Layout:**

```css
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.service-card {
    text-align: center;
    padding: 2rem;
    background: var(--bg-white);
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-5px);
}

.service-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1rem;
    background: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

**Pricing Table:**

```css
.pricing-table {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.pricing-card {
    background: var(--bg-white);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    position: relative;
}

.pricing-card.featured {
    border-color: var(--primary-color);
    transform: scale(1.05);
}

.pricing-card.featured::before {
    content: 'Most Popular';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
}
```

---

### Page 5: Contact Page (contact.html)

#### Content Requirements

**Contact Form Fields:**

- **Personal Information:**
  - Full name (required)
  - Email address (required, with validation)
  - Phone number (optional)
  - Company/Organization (optional)

- **Project Information:**
  - Project type dropdown:
    - New website development
    - Website redesign
    - E-commerce development
    - Maintenance and updates
    - Consulting
    - Other
  - Budget range selection:
    - Under $500
    - $500 - $1000
    - $1000 - $2500
    - $2500 - $5000
    - $5000+
    - Not sure yet

- **Project Details:**
  - Project description (required, minimum 50 characters)
  - Timeline requirements:
    - ASAP
    - Within 1 month
    - 1-3 months
    - 3-6 months
    - No rush
  - Preferred contact method:
    - Email
    - Phone
    - Video call
    - In-person meeting

- **Additional Information:**
  - How did you hear about me?
  - Newsletter subscription checkbox
  - Terms and conditions agreement

**Contact Information:**

- Primary email address
- Phone number (if comfortable sharing)
- Physical location (city, state)
- Time zone and availability hours
- Response time expectations

**Alternative Contact Methods:**

- Social media profiles:
  - LinkedIn (professional networking)
  - GitHub (code repositories)
  - Twitter (industry discussions)
  - Instagram (personal/creative work)
- Professional platforms:
  - Behance or Dribbble (design portfolio)
  - CodePen (code snippets)
  - Stack Overflow profile

**Office Hours/Availability:**

- Best times to reach you
- Response time expectations
- Different contact methods for urgent vs. non-urgent matters

#### Form Validation Requirements

**HTML5 Validation:**

```html
<form class="contact-form" novalidate>
    <div class="form-group">
        <label for="name">Full Name *</label>
        <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            minlength="2"
            maxlength="50"
            pattern="[A-Za-z\s]+"
            title="Please enter your full name"
        >
        <span class="error-message">Please enter a valid name</span>
    </div>
    
    <div class="form-group">
        <label for="email">Email Address *</label>
        <input 
            type="email" 
            id="email" 
            name="email" 
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
        >
        <span class="error-message">Please enter a valid email</span>
    </div>
    
    <div class="form-group">
        <label for="message">Project Description *</label>
        <textarea 
            id="message" 
            name="message" 
            required 
            minlength="50"
            maxlength="1000"
            rows="6"
            placeholder="Tell me about your project..."
        ></textarea>
        <span class="error-message">Please provide at least 50 characters</span>
        <span class="char-count">0/1000</span>
    </div>
</form>
```

**CSS Validation Styling:**

```css
/* Form styling */
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: var(--bg-white);
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 1.5rem;
    position: relative;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-dark);
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid var(--border-color);
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Validation states */
.form-group input:valid {
    border-color: #10b981;
}

.form-group input:invalid:not(:focus):not(:placeholder-shown) {
    border-color: #ef4444;
}

.error-message {
    display: none;
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

.form-group input:invalid:not(:focus):not(:placeholder-shown) + .error-message {
    display: block;
}

/* Character counter */
.char-count {
    position: absolute;
    bottom: 0.5rem;
    right: 0.75rem;
    font-size: 0.75rem;
    color: var(--text-light);
}
```

---

## 🎨 CSS-Only Interactive Techniques

### Advanced CSS Selectors for Interactivity

**CSS-Only Modal Windows:**

```css
/* Hidden checkbox to control modal state */
.modal-toggle {
    display: none;
}

/* Modal overlay */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
}

/* Show modal when checkbox is checked */
.modal-toggle:checked + .modal-overlay {
    opacity: 1;
    visibility: visible;
}

/* Modal content */
.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.7);
    background: white;
    padding: 2rem;
    border-radius: 12px;
    transition: transform 0.3s ease;
    max-width: 500px;
    width: 90%;
}

.modal-toggle:checked + .modal-overlay .modal-content {
    transform: translate(-50%, -50%) scale(1);
}
```

**CSS-Only Smooth Scroll Navigation:**

```css
html {
    scroll-behavior: smooth;
}

/* Active navigation state */
.nav-link {
    position: relative;
    color: var(--text-dark);
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link:target::after {
    width: 100%;
}
```

**CSS-Only Accordion/FAQ System:**

```css
/* FAQ accordion using checkbox hack */
.faq-item {
    border: 1px solid var(--border-color);
    border-radius: 8px;
    margin-bottom: 1rem;
    overflow: hidden;
}

.faq-toggle {
    display: none;
}

.faq-header {
    padding: 1rem;
    background: var(--bg-light);
    cursor: pointer;
    position: relative;
    transition: background 0.3s ease;
}

.faq-header::after {
    content: '+';
    position: absolute;
    right: 1rem;
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.faq-toggle:checked + .faq-header::after {
    transform: rotate(45deg);
}

.faq-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background: white;
}

.faq-toggle:checked + .faq-header + .faq-content {
    max-height: 200px;
    padding: 1rem;
}
```

**CSS-Only Image Gallery with Lightbox:**

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
}

.gallery-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-img {
    transform: scale(1.1);
}

/* CSS-only lightbox */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 2000;
}

.lightbox:target {
    opacity: 1;
    visibility: visible;
}

.lightbox img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
}
```

---

## 🚀 Implementation Guidelines

### Week-by-Week Development Plan

#### Week 1: Planning and Structure

**Days 1-2: Project Setup**

- Create project folder structure
- Set up HTML files for all 5 pages
- Create CSS folder and main stylesheet
- Plan color scheme and typography
- Gather or create all necessary images

**Days 3-4: Content Creation**

- Write all text content for each page
- Collect project screenshots and information
- Create wireframes for each page layout
- Plan responsive breakpoints

**Days 5-7: HTML Structure**

- Complete semantic HTML for all pages
- Add proper meta tags and SEO elements
- Implement accessible markup
- Test HTML validation

#### Week 2: CSS Foundation

**Days 1-3: Base Styles**

- Set up CSS custom properties
- Create typography system
- Implement reset and base styles
- Design navigation and footer

**Days 4-5: Layout Implementation**

- Build responsive grid systems
- Implement flexbox layouts
- Create mobile-first responsive design
- Test across different screen sizes

**Days 6-7: Component Styling**

- Style buttons, forms, and interactive elements
- Create hover and focus states
- Implement consistent spacing system
- Add color and visual hierarchy

#### Week 3: Advanced Features

**Days 1-3: Interactive Components**

- Add CSS animations and transitions
- Create image galleries and carousels
- Implement modal windows and overlays
- Build accordion and tab interfaces

**Days 4-5: Portfolio Functionality**

- Implement project filtering system
- Create smooth scroll navigation
- Add loading animations
- Build contact form validation

**Days 6-7: Polish and Optimization**

- Optimize images and assets
- Improve loading performance
- Test cross-browser compatibility
- Refine animations and transitions

#### Week 4: Testing and Documentation

**Days 1-2: Testing**

- Test on multiple devices and browsers
- Validate HTML and CSS
- Check accessibility compliance
- Test form functionality

**Days 3-4: Documentation**

- Create project documentation
- Write technical implementation notes
- Document design decisions
- Prepare presentation materials

**Days 5-7: Final Submission**

- Deploy to hosting platform
- Final testing and bug fixes
- Submit project files
- Present project to class

### File Structure

```
portfolio-website/
├── index.html
├── about.html
├── portfolio.html
├── services.html
├── contact.html
├── css/
│   ├── style.css
│   ├── reset.css
│   └── components.css
├── images/
│   ├── hero-bg.jpg
│   ├── profile-photo.jpg
│   ├── projects/
│   │   ├── project1-thumb.jpg
│   │   ├── project1-full.jpg
│   │   └── ...
│   └── icons/
│       ├── html-icon.svg
│       ├── css-icon.svg
│       └── ...
├── fonts/
│   ├── heading-font.woff2
│   └── body-font.woff2
└── docs/
    ├── wireframes.pdf
    ├── design-guide.pdf
    └── project-documentation.md
```

### Project Evaluation Criteria

#### Technical Implementation

- **HTML Structure**
  - Semantic markup and accessibility
  - Valid HTML5 code structure
  - Proper document organization

- **CSS Quality**
  - Advanced layout techniques (Grid, Flexbox)
  - Responsive design implementation
  - Code organization and maintainability
  - Modern CSS features usage

#### Design and User Experience

- **Visual Design**
  - Professional appearance and consistency
  - Typography and color scheme
  - Consistent branding throughout

- **User Experience**
  - Intuitive navigation and usability
  - Optimized mobile experience
  - Fast loading and performance

#### Content and Functionality

- **Content Quality**
  - Complete and relevant information
  - Professional writing and presentation

- **Functionality**
  - Working forms and validation
  - Interactive elements and animations

### Submission Requirements

**Required Deliverables:**

1. Complete website files (HTML, CSS, images)
2. Live deployment link (GitHub Pages, Netlify, Vercel)
3. GitHub repository with clean commit history
4. Project documentation (design decisions, challenges, solutions)
5. 10-minute presentation covering:
   - Project overview and goals
   - Technical implementation highlights
   - Design decisions and rationale
   - Challenges faced and solutions
   - Lessons learned and future improvements

**Additional Features (Optional Enhancements):**

- CSS-only animations and microinteractions
- Advanced accessibility features (screen reader testing)
- Performance optimization (PageSpeed Insights score 90+)
- Creative use of modern CSS features (:has(), container queries)
- Integration with CSS framework version (Tailwind/Bootstrap)
- Custom icon set or illustrations
- Dark/light theme toggle
- Multi-language support

### Resources and References

**Design Inspiration:**

- [Dribbble Portfolio Designs](https://dribbble.com/tags/portfolio)
- [Awwwards Portfolio Sites](https://www.awwwards.com/websites/portfolio/)
- [Behance Web Design](https://www.behance.net/galleries/web-design)

**Technical Resources:**

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [A11y Project](https://www.a11yproject.com/)
- [Web.dev](https://web.dev/)

**Tools and Utilities:**

- [Color Palette Generator](https://coolors.co/)
- [Font Pairing Tool](https://fontjoy.com/)
- [Image Optimization](https://tinypng.com/)
- [CSS Validation](https://jigsaw.w3.org/css-validator/)
- [HTML Validation](https://validator.w3.org/)

This comprehensive project will give students hands-on experience with all major aspects of modern web development while creating a professional portfolio they can use throughout their careers.
