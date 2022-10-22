import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState, useRef } from "react";
import Layout from "../components/Layout";
import { firestore } from "../firebase/config";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    title: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (form.name && form.title && form.email && form.message) {
      const addContact = async () => {
        try {
          const response = await addDoc(collection(firestore, "contacts"), {
            ...form,
            timestamp: serverTimestamp(),
          });
          console.log(response?.id);
          formRef?.current?.reset();
        } catch (error) {
          console.log(error);
        }
      };
      addContact();
      console.log("Form submitted successfully");
    }
  };
  return (
    <Layout title="Contact">
      <div className="min-h-screen flex items-center w-full max-w-7xl mx-auto">
        <div className="w-full p-2 min-h-screen">
          <div className="md:mt-[130px] mt-[80px]">
            <div className="flex gap-6 items-center h-full">
              <div className="w-full">
                <h1 className="text-5xl mb-6 font-bold">Contact Me</h1>
                <form
                  id="contact-form"
                  className="flex flex-col md:gap-6 gap-4"
                  onSubmit={submitForm}
                  ref={formRef}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 focus:border-orange-600 text-gray-200 border-gray-400 transition-all "
                    name="name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Message Title"
                    className="border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 focus:border-orange-600 text-gray-200 border-gray-400 transition-all "
                    name="title"
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 focus:border-orange-600 text-gray-200 border-gray-400 transition-all "
                    name="email"
                    onChange={handleChange}
                  />
                  <textarea
                    placeholder="Your Message"
                    className="border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 h-[150px] focus:border-orange-600 text-gray-200 border-gray-400 transition-all "
                    name="message"
                    onChange={handleChange}
                  />
                  <div className="form-submit">
                    <button
                      type="submit"
                      className="uppercase text-sm tracking-[2px] px-10 py-4 rounded-full inline-block font-semibold transition-all text-white border-2 border-white/20 duration-200 hover:bg-orange-600 hover:scale-110"
                      disabled=""
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
              <div className="hidden sm:block flex-shrink-0">
                <img
                  src="/images/contact.jpg"
                  alt="contact image"
                  className="rounded-xl shrink-0 aspect-square object-cover object-top w-full h-full md:max-w-[500px] max-w-[350px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
