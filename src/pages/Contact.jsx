import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-5 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      </header>
      <section className="flex-grow py-1 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="mb-8">
            If you have any questions, feedback, or suggestions, we would love
            to hear from you!
          </p>
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-base-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-base-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-3 rounded-lg bg-base-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
