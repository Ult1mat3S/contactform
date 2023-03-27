export default function App() {
  return (
    <div className="App">
      <h1>Feedback</h1>
      {/* <form name="contact" method="post" netlify netlify-honeypot="bot-field">
         <p>
          <input type="hidden" name="form-name" value="Contact" />
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
      */}
      <form
        name="Contact"
        method="POST"
        netlify
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="Contact" />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <div class="form-btn">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
