import { useState } from "react";

export default function App() {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <div className="App">
      <h1>Feedback</h1>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Test:
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="radio"
            name="feedback-type"
            id="feedback-type"
            required
          />
          <label>Issues</label>
        </p>
        <p>
          <input
            type="radio"
            name="feedback-type"
            id="feedback-type"
            required
          />
          <label>Requests</label>
        </p>
        <p>
          <input
            type="radio"
            name="feedback-type"
            id="feedback-type"
            required
          />
          <label>Other</label>
        </p>
        <p>
          <label>
            <input
              type="text"
              name="name"
              id="email"
              placeholder="Name"
              required
            />
          </label>
        </p>
        <p>
          <label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </label>
        </p>
        <p>
          <textarea
            name="details"
            id="details"
            cols="40 "
            rows="10"
            placeholder="Details"
            required
            maxLength={300}
          ></textarea>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
