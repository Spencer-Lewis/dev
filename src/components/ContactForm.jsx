import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact-form-section" className="container mx-auto my-2 p-5">
      <h2 className="text-2xl font-bold mb-4 font-sans">Contact Me</h2>
      <form
        name="contact"
        method="post"
        onSubmit={() => {}}
        className="text-black"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-500 font-bold mb-2 font-sans">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 border-gray-300 p-2 w-full rounded focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-500 font-bold mb-2 font-sans">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-gray-300 p-2 w-full rounded focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-500 font-bold mb-2 font-sans">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border-2 border-gray-300 p-2 w-full rounded focus:outline-none"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded font-sans"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
