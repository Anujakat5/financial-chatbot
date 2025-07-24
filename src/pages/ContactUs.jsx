import React from "react";

const ContactUs = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">
          We're here to help. Reach out to us with any questions or feedback.
        </p>
      </div>

      <div className="row justify-content-center">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card p-4 shadow border-0">
            <h5 className="mb-4 text-center">Write to Us</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control rounded-pill px-4"
                  id="name"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control rounded-pill px-4"
                  id="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control rounded px-4 py-3"
                  id="message"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5 rounded-pill">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Optional Contact Info Section */}
        <div className="col-md-4 mt-5 mt-md-0">
          <div className="bg-light p-4 rounded shadow-sm">
            <h6 className="mb-3">Bank Contact Details</h6>
            <p className="mb-1">
              <strong>Phone:</strong> +91 12345 67890
            </p>
            <p className="mb-1">
              <strong>Email:</strong> support@yourbank.com
            </p>
            <p className="mb-1">
              <strong>Address:</strong> 123 Finance Street, Mumbai, India
            </p>
            <p className="mb-0">
              <strong>Working Hours:</strong> Mon–Fri, 9am–6pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
