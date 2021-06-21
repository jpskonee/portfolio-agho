import React from "react";

const EmailForm = () => {
  return (
    <div>
      <form action="forms/contact.php" method="post">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              data-rule="minlen:4"
              data-msg="Please enter at least 4 chars"
            />
            <div className="validate"></div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Your Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              data-rule="email"
              data-msg="Please enter a valid email"
            />
            <div className="validate"></div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name">Subject</label>
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            data-rule="minlen:4"
            data-msg="Please enter at least 8 chars of subject"
          />
          <div className="validate"></div>
        </div>
        <div className="form-group">
          <label htmlFor="name">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="7"
            data-rule="required"
            data-msg="Please write something for us"
          ></textarea>
          <div className="validate"></div>
        </div>
        <div className="mb-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>
        </div>
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
