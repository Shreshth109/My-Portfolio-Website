import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[rgb(35,44,77)] text-gray-200 flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6 text-[#FCD34D]">Let's connect.</h2>

      {/* Subtext */}
      <p className="text-gray-300 text-center max-w-2xl mb-10 leading-relaxed">
        If you want to know more about me or my work, or if you'd just like to
        say hello, send me a message. I'd love to hear from you.
      </p>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/mrbynkqk" // Replace with your Formspree or EmailJS endpoint
        method="POST"
        className="w-full max-w-lg bg-[rgb(44,54,92)] p-8 rounded-2xl shadow-md border border-gray-700"
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-300 mb-2 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-md bg-[rgb(35,44,77)] text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FCD34D]"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-300 mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Hey, how's it going?"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-[rgb(35,44,77)] text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FCD34D] resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#FCD34D] text-[rgb(35,44,77)] font-semibold rounded-md hover:brightness-110 transition"
        >
          Send ›
        </button>
      </form>

      {/* Social Media Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-300 text-lg mb-4">
          Connect with me through my social handles
        </p>
        <div className="flex items-center justify-center gap-8 text-3xl">
          <a
            href="https://github.com/Shreshth109"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#FCD34D] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shreshth109/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#FCD34D] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Shreshth_109"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#FCD34D] transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/shreshth_jaiswal_011/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#FCD34D] transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-400 text-sm text-center">
        © 2025 Kumar Shreshth. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
