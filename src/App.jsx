import { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const maxChars = 300;

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    if (validate()) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  const isFormValid =
    name.trim() &&
    email.trim() &&
    message.trim() &&
    Object.keys(errors).length === 0;

  return (
    <div className="container">
      <h1>Contact Us</h1>

      {success && (
        <p className="success">Form submitted successfully ✅</p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="error">{errors.email}</span>
          )}
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            maxLength={maxChars}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="char-count">
            {maxChars - message.length} characters remaining
          </div>
          {errors.message && (
            <span className="error">{errors.message}</span>
          )}
        </div>

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
