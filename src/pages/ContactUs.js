import React from 'react';
import Swal from 'sweetalert2';
import bg from './asset/image/contact-bg.jpg'; 

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cf26476a-73fa-42fc-ac54-9de6906e4a3d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      event.target.reset(); 
    }
  };

  return (
    <div className="contact-us bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="max-w-5xl mx-auto py-12 px-6">
        {/* Contact Info */}
        <div className="contact-info text-white mb-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="contact-detail flex items-center mb-4 md:mb-0">
              <div className="icon phone-icon w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
                📞
              </div>
              <div className="detail-info">
                <h3 className="font-semibold">Phone Us</h3>
                <p>+03453300699</p>
              </div>
            </div>
            <div className="contact-detail flex items-center">
              <div className="icon email-icon w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
                📧
              </div>
              <div className="detail-info">
                <h3 className="font-semibold">Email</h3>
                <p>aqkhanedu@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-white p-6 rounded shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="name" className="block mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                required 
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="block mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email address" 
                required 
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="message" className="block mb-1">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                className="w-full border border-gray-300 rounded p-2"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>

        {/* Working Hours */}
        <div className="working-hours text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Working Hours</h2>
          <p>Monday to Friday: 8:00 am - 4:00 pm</p>
          <p>Saturday: 9:00 am - 1:00 pm</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Map */}
        <div className="location mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Our Location</h2>
          <iframe
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=3%20Harley%20Street,%20Rawalpindi,%20Pakistan+(Dr%20AQ%20Khan%20College%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Google Maps"
          ></iframe>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/30 pt-10 mt-10 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Dr. A Q Khan College</h3>
              <p className="opacity-80">Building futures, empowering education.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/" className="hover:text-blue-300 transition">Home</a>
              <a href="/admissions" className="hover:text-blue-300 transition">Admissions</a>
              <a href="/charter" className="hover:text-blue-300 transition">MOUs</a>
              <a href="/contact" className="hover:text-blue-300 transition">Contact</a>
            </div>
          </div>
          <p className="text-center mt-6 text-xs opacity-60">
            &copy; {new Date().getFullYear()} Dr. A Q Khan College. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
