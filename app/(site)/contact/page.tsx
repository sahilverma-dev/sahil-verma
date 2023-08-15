"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import PageWrapper from "../components/PageWrapper";

import { motion } from "framer-motion";
import { child, parent } from "@/constants/variants";
import { addContact } from "@/sanity/sanity-utils/addContact";
import { Toaster } from "react-hot-toast";

// icons
import { TbFidgetSpinner as SpinnerIcon } from "react-icons/tb";
import Image from "next/image";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await addContact({
        email: form.email,
        message: form.message,
        title: form.title,
        name: form.name,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setForm({
        email: "",
        message: "",
        name: "",
        title: "",
      });
    }
  };
  return (
    <PageWrapper>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="md:min-h-screen flex items-center w-full max-w-7xl mx-auto">
        <div className="w-full mt-40 p-2 md:min-h-screen flex items-center flex-col">
          <div className="flex gap-6 items-center w-full">
            <div className="w-full">
              <h1 className="text-5xl mb-6 font-bold">Contact Me</h1>
              <motion.form
                variants={parent}
                initial="hidden"
                animate="visible"
                id="contact-form"
                className="flex flex-col md:gap-6 gap-4"
                onSubmit={submitForm}
              >
                <motion.input
                  variants={child}
                  type="text"
                  placeholder="Your Name"
                  className="border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 focus:border-orange-600 text-gray-200 border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed "
                  name="name"
                  disabled={isLoading}
                  value={form.name}
                  onChange={handleChange}
                />
                <motion.input
                  variants={child}
                  type="text"
                  placeholder="Message Title"
                  className="border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 focus:border-orange-600 text-gray-200 border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed "
                  name="title"
                  disabled={isLoading}
                  value={form.title}
                  onChange={handleChange}
                />
                <motion.input
                  variants={child}
                  type="email"
                  placeholder="Your Email"
                  className="border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 focus:border-orange-600 text-gray-200 border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed "
                  name="email"
                  disabled={isLoading}
                  value={form.email}
                  onChange={handleChange}
                />
                <motion.textarea
                  variants={child}
                  placeholder="Your Message"
                  className="border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 h-[150px] focus:border-orange-600 text-gray-200 border-gray-400 transition-all "
                  name="message"
                  disabled={isLoading}
                  value={form.message}
                  onChange={handleChange}
                />
                <div className="form-submit">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="uppercase text-sm tracking-[2px] px-10 py-4 rounded-full inline-block font-semibold transition-all text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110  disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <SpinnerIcon className="animate-spin" size={20} />
                        <p>Submitting ...</p>
                      </div>
                    ) : (
                      "Submit Now"
                    )}
                  </button>
                </div>
              </motion.form>
            </div>
            <div className="hidden sm:block flex-shrink-0">
              <Image
                src="/images/contact.jpg"
                alt="contact image"
                width={500}
                height={500}
                className="rounded-xl shrink-0 aspect-square object-cover object-top w-full h-full md:max-w-[500px] max-w-[350px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
