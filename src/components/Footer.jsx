import React from "react";

const Footer = () => (
  <footer className="footer bg-light text-center py-3 mt-auto">
    <div>
      <span>&copy; {new Date().getFullYear()} Financial Chatbot App</span> &nbsp;|&nbsp;
      <span>Email: support@example.com</span> &nbsp;|&nbsp;
      <span>Contact: +91-12345-67890</span>
    </div>
  </footer>
);

export default Footer;