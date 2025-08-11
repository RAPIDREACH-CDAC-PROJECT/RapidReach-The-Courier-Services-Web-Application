import React, { useState } from "react";
import ContactUs1 from './ContactUs1.jpg'; // adjust path as needed
import 'bootstrap/dist/css/bootstrap.min.css';

const Support = () => {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const faqList = [
    { q: "How do I track my parcel?", a: "Use the Tracking feature and enter your tracking number." },
    { q: "How can I change delivery address?", a: "Contact support with your order details ASAP." },
    { q: "What payment methods are accepted?", a: "We accept all major credit cards and PayPal." },
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!form.email || !form.subject || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col'>
          <h1 className='utext mb-4'>Contact Us</h1>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <img 
            src={ContactUs1} 
            alt='Contact Support' 
            className='img-fluid rounded shadow-sm mb-5'
            style={{ maxWidth: '600px', marginLeft: '20px' }} 
          />
        </div>
      </div>

      {/* Support Info */}
      <div className='text-center mb-5'>
        <h2 className='mb-5'>Support When You Need It</h2>
        <div className='row justify-content-center'>
          <div className='col-md-3 mb-4'>
            <h4 className="mb-2"><i className="bi bi-telephone-fill me-2"></i>Phone</h4>
            <p>Speak with us directly.</p>
            <p>
              <a href="tel:7507299369" className="text-decoration-none link-secondary">+91-7507299369</a>
            </p>
          </div>
          <div className='col-md-3 mb-4'>
            <h4 className="mb-2"><i className="bi bi-envelope-fill me-2"></i>Email</h4>
            <p>Write to us directly.</p>
            <p>
              <a href="mailto:support@rapidreach.com" className="text-decoration-none link-secondary">support@rapidreach.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <h3 className='mb-4 text-center'>Send Us a Message</h3>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className="form-control" value={form.email} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" name="subject" id="subject" className="form-control" value={form.subject} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" id="message" rows="4" className="form-control" value={form.message} onChange={handleChange} required />
              </div>

              <div>
                <button type="submit" className="btn btn-info my-3 px-5">Send Message</button>
              </div>

              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
          ) : (
            <div className="alert alert-success">
              Thank you for contacting support. We will get back to you shortly.
            </div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-5">
        <h4 className="mb-3">Frequently Asked Questions</h4>
        <ul className="list-group">
          {faqList.map((faq, idx) => (
            <li className="list-group-item" key={idx}>
              <strong>{faq.q}</strong>
              <p className="mb-0">{faq.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Support;
