"use client";

import PageTransitionProvider from "@/components/pageTransitionProvider";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ConatctPage() {
  const text = "Leave a Message!";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <PageTransitionProvider>
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-4 my-8 lg:my-0">
        <div className="h-1/2 lg:min-h-[calc(100vh-6rem)] lg:w-1/2 flex justify-center items-center">
          <div className="text-4xl md:text-6xl">
            {text.split("").map((letter, idx) => {
              return (
                <motion.span
                  key={idx}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    delay: idx * 0.1,
                    repeat: Infinity,
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="h-1/2 lg:min-h-[calc(100vh-6rem)] lg:w-1/2 bg-rounded-xl font-semibold flex flex-col gap-8 justify-center p-8 my-8"
        >
          <span>Hello Manas,</span>
          <textarea
            rows="4"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="message"
            placeholder="Write a message..."
          />
          <span>My email address is:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
            name="user_email"
            placeholder="Provide your email...."
          />
          <span>Best Wishes!</span>
          <button className="bg-purple-200 rounded p-2 font-semibold text-xl uppercase text-gray-600 hover:scale-105 transition-all">
            Send
          </button>

          {success && (
            <span className="text-xs text-green-500 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-xs text-red-500 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </PageTransitionProvider>
  );
}

export default ConatctPage;
