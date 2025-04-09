"use client";
import React, { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await fetch("https://formspree.io/f/mrbpowzl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-white dark:bg-gray-900">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 relative">
          {/* Full-size map stays untouched */}
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.9)" }}
            src="https://www.google.com/maps/embed/v1/place?q=111+Monument+Cir,+Indianapolis,+IN,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />

          {/* Floating contact menu */}
          <div
            className={`transition-all duration-500 ease-in-out absolute m-4 z-10 ${
              isMenuOpen
                ? "bg-white dark:bg-gray-900 rounded shadow-md p-6 w-[90%] max-w-lg"
                : "w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full shadow-md"
            }`}
          >
            {isMenuOpen ? (
              <>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-2 right-2 text-slate-700 dark:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex flex-wrap">
                  <div className="w-1/2 px-2">
                    <h2 className="title-font font-semibold dark:text-white text-slate-700 tracking-widest text-xs">
                      ADDRESS
                    </h2>
                    <p className="mt-1 text-sm dark:text-gray-300">
                      Salesforce Tower, 111 Monument Cir Suite 4200,
                      <br />
                      Indianapolis, IN 46204
                    </p>
                  </div>
                  <div className="w-1/2 px-2 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold dark:text-white text-slate-700 tracking-widest text-xs">
                      EMAIL
                    </h2>
                    <a className="text-emerald-500 leading-relaxed text-sm">
                      acy1999@email.com
                    </a>
                    <h2 className="title-font font-semibold dark:text-white text-slate-700 tracking-widest text-xs mt-4">
                      PHONE
                    </h2>
                    <p className="leading-relaxed text-sm dark:text-gray-300">
                      317-443-7523
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-slate-700 dark:text-white"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Keeps the div height consistent for layout */}
          <div className="pt-[56.25%] relative" />
        </div>
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="dark:text-white text-slate-700 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Get In Touch
          </h2>
          <p className="leading-relaxed mb-5">
            Feel free to reach out to me using this form or via the email/phone
            number listed under the map to the left.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full dark:bg-gray-800 rounded border dark:border-gray-700 focus:border-emerald-500 focus:ring-2  text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full dark:bg-gray-800 rounded border dark:border-gray-700 focus:border-emerald-500 focus:ring-2  text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full dark:bg-gray-800 rounded border dark:border-gray-700 focus:border-emerald-500 focus:ring-2 h-32 text-base outline-none dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-green-500">
              Thank you for your message! I&apos;ll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-red-500">
              Sorry, there was an error sending your message. Please try again
              or reach out via email.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
