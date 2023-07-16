import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="john doe" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="johndoe@example.com" />
          </div>
          <div>
            <label>Report</label>
            <input type="text" required placeholder="Your response..." />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
