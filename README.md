## Table of Contents

1. [Description](#description)  
1. [Demo](#demo)   
1. [Features](#features)  
1. [Technologies Used](#technologies-used)  
1. [Project Challenges](#project-challenges)  
1. [Thoughts and Observations](#thoughts-and-observations)  
1. [Future Enhancements](#future-enhancements)  
1. [Installation](#installation)  

---

## Description

This is a simple CV/resumé generator built with React and Vite. Users can enter general information, educational background, and multiple work experiences. The project is designed to help solidify key React concepts such as `useState`, `props`, conditional rendering, and dynamic form data handling. It also introduces the fundamentals of structuring a React app with component-based architecture and real-world form handling.

---

## Demo

Click here: [https://your-live-demo-link.com](https://your-live-demo-link.com)  


---

## Features

- Capture and update general info like name, email, and phone.
- Add, edit, and display education history.
- Dynamically add multiple work experience entries.
- Responsibilities displayed as clean bullet points using `•` delimited input.
- Toggle between "edit" and "display" modes for real-time previewing.
- Resume layout styled to mimic a Word document for print-readiness.

---

## Technologies Used

- React (with Hooks)  
- Vite  
- JavaScript (ES6+)  
- HTML/CSS  
- CSS Modules  
- Git + GitHub  

---

## Project Challenges

- Managing dynamic forms for multiple experience entries.  
- Updating a nested array of objects inside state while maintaining immutability.  
- Handling controlled components and syncing form data with display views.  
- Parsing multiline responsibilities into clean, structured lists.  
- Understanding why React StrictMode causes double renders in development.  

---

## Thoughts and Observations

This project helped reinforce how powerful and flexible React state can be when managing dynamic UIs. Implementing multiple work experiences required careful control of data structures and component communication. Breaking the layout into focused components greatly simplified logic and styling. This is a solid introductory project with just enough complexity to demonstrate practical React use.

---

## Future Enhancements

- Allow drag-and-drop to reorder work experiences.  
- Export resume as PDF using a library like `react-to-print` or `jspdf`.  
- Add preview themes (e.g., minimalist, creative, corporate).  
- Save and load user data from `localStorage`.  
- Improve mobile responsiveness.  

---

## Installation

To run this project locally:

1. Clone the GitHub repository to your local machine:

   ```bash
   git clone https://github.com/jasneetcodes/cv-app.git
   ```

2. Navigate to the project's directory:

   ```bash
   cd cv-app
   ```

3. Install the project's dependencies using npm:

   ```bash
   npm install
   ```

4. To build the project:

   ```bash
   npm run build
   ```
