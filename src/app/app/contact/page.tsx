import React from "react";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold transform hover:scale-105 transition-transform duration-500">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">
              Contact Form
            </h3>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg text-gray-800 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="your name"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 "
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg text-gray-800 mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="email"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 "
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg text-gray-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 "
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-lg shadow-xl overflow-hidden">
            <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">
              Our Location
            </h3>
            <div className="relative pb-[56.25%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.22472838171532!2d67.18116988420567!3d24.87765601928495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339fe82b48417%3A0xd40b075ee3f123c4!2sMalir%2015%20Flyover!5e0!3m2!1sen!2s!4v1735041149883!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy">
                </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
