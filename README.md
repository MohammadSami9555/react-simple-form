# 📩 React Simple Contact Form 

A simple React contact form built using **controlled components** with **basic form validation**.  
This project is created as part of **Basic React – Day 4** learning.



## 🎯 Project Objective

- Understand **controlled inputs** in React
- Learn basic **form validation**
- Display **inline error messages**
- Improve user experience with proper form feedback



## 🛠️ Technologies Used

- React JS
- Vite
- JavaScript (ES6)
- CSS (No external library)



## ⚙️ How the App Works

1. Each input field (Name, Email, Message) is managed using React `useState`.
2. On form submission, validation checks:
   - All fields are required
   - Email must follow a valid format
3. If validation fails, error messages are shown below inputs.
4. If validation passes:
   - A success message is displayed
   - The form fields are cleared
5. No backend or API is used in this project.



## 📘 What I Have Learned

- How to build **controlled components** in React
- How to manage multiple form states using `useState`
- How to implement **client-side validation**
- How to show **inline error messages**
- How to disable submit button until form is valid
- How to improve UI using pure CSS



## 🧠 Core Concepts Used

### Controlled Components
All input values are controlled by React state using `value` and `onChange`.

### Validation Logic
Form validation is handled on submit by checking empty fields and email format.

### Character Counter
The message field has a **300 character limit** with remaining characters displayed.



## 📁 Project Structure

react-day4
│── src
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│── index.html
│── package.json
│── vite.config.js
│── README.md


## ▶️ How to Run the Project

```bash
npm install
npm run dev