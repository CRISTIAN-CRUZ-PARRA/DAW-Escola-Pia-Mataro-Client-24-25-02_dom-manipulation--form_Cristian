### CHALLENGE.md

# Introduction

Welcome to the **HTML Forms Foundations and DOM Manipulation** challenge!

In this exercise, you will learn to create a simple web interface with forms using semantic HTML, style it with basic CSS principles, and add interactivity using JavaScript. You will also keep working **Source Version Control** with Git and GitHub, and deploy the project using **Netlify** as part of **Continuous Integration/Continuous Deployment (CI/CD)**.

By the end of this challenge, you will have:

- Created a web interface following semantic HTML practices.
- Styled the interface using CSS with **BEM** notation.
- Added JavaScript to handle form submission, sanitize form data, and dynamically manipulate the DOM.
- Set up Git for version control and deployed the project on Netlify.

# Source Version Control

### Git and GitHub Setup

Follow the same version control workflow as outlined in the previous challenge:

1. **Create a New Repository** based on the provided template.
2. **Clone the repository** to your local machine and create a new `develop` branch to work on the project.
3. **Work on the challenge**, and commit your changes using proper version control practices.
4. **Create a Pull Request** to merge changes into the main branch after completing the challenge, pending teacher approval.

# Challenge

### Requirements

In this challenge, you will recreate an HTML/CSS interface and add JavaScript to handle form submissions and DOM manipulation. Follow the steps below:

### HTML: Structure

1. **Create `index.html`**:

   - Use semantic HTML5 tags to structure your page based on provided prototype.
   - The form:
     - should include an input for note title. (required)
     - should include an input for note content.(required)
     - should include a selector for priority (High | Medium | Low).
     - should include a submit button.
     - should ensure a correct a11y.
   - Include a section to display form data dynamically (this will be manipulated using JavaScript).

### CSS: Layout & Styles

1. **Create `styles.css`**:

   - Reset styles to ensure cross-browser consistency (you can use a reset like `sanitize.css`).
   - Apply styles based on provided prototype, using **BEM (Block Element Modifier)** notation for better structure and maintainability.
   - Implement **mobile first** layout.
   - Implement **light mode** & **dark mode** layout.

```css
/*global variables*/
:root {
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-l: 1.5rem;
  --spacing-xl: 2rem;

  --radius-xs: 0.25rem;
  --radius-sm: 0.5rem;
  --border-md: 1rem;

  /* Global Variables */
  --color-accent: #007bff;
  --color-error: #ff5722;
  --color-success: #4caf50;

  /* Light Theme Variables */
  --color-bg-light: #f5f5f5;
  --color-text-light: #333333;
  --color-form-bg-light: #ffffff;
  --color-input-bg-light: #f0f0f0;
  --color-input-border-light: #d1d5db;
  --color-input-text-light: #333333;
  --color-button-bg-light: #4caf50;
  --color-button-hover-light: #3e8e41;
  --color-button-text-light: #ffffff;
  --color-card-bg-light: #ffffff;
  --color-card-border-light: #e0e0e0;
  --color-card-text-light: #333333;
  --color-card-shadow-light: #e0e0e0;
  --color-link-light: #007bff;

  /* Dark Theme Variables */
  --color-bg-dark: #121212;
  --color-text-dark: #e5e5e5;
  --color-input-bg-dark: #2c2c2c;
  --color-input-border-dark: #424242;
  --color-input-text-dark: #e5e5e5;
  --color-button-bg-dark: #4caf50;
  --color-button-text-dark: #e5e5e5;
  --color-card-bg-dark: #5e5e5e;
  --color-card-border-dark: #333333;
  --color-card-text-dark: #d3d3d3;
  --color-card-shadow-dark: #000000;
  --color-link-dark: #66bfff;
}
```

2. **Create `sanitize.css`**:

   - Include basic styles to normalize the behavior across browsers.

### JavaScript: Behavior

1. **Create `index.js`**:

   - Add interactivity to the form with the following requirements:
     - Define an event listener for the **form submit event**.
     - Upon form submission, retrieve the form data.
     - Validate priority selection. If no value has been selected then print `No priority`.
     - **Sanitize** the form data to prevent security vulnerabilities.
     - Create a new DOM node that includes the submitted information.
     - Add the new node to a designated section of the page.
     - Ensure basic form validation before submission.
     - Ensure form values reset after submission.

### Testing & Debugging

1. Open the `index.html` file in your browser to ensure the form submits data correctly and updates the DOM dynamically.
2. Test across different browsers to check for layout consistency.

# CI/CD

### Deploy the Project Using Netlify

Follow these steps to deploy your project online:

2. **Link your GitHub repository to Netlify** to deploy the project automatically on each push to `main`.
3. Customize the domain from your Netlify dashboard.
4. **Deploy your site** and share the Netlify-provided URL.

> [!IMPORTANT]  
> Test your app once deployed in preview.

# Generative AI

### Using AI Assistance

You can use AI tools to:

- Get explanations on HTML forms, DOM manipulation, or JavaScript concepts.
- Receive guidance on CSS best practices, such as BEM or layout design.
- Ask for suggestions on Git workflows, CI/CD practices, or deployment troubleshooting.

However, use AI to **learn** and ensure you understand the code and processes.

Good luck! 🚀
