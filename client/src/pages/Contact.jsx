

import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [isSubmit, setSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [state, setState] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmit(true);

    let dataSend = {
      email: state.email,
      subject: state.subject,
      message: state.message,
    };

    try {
      const res = await axios.post(`http://localhost:5000/email/sendEmail`, dataSend);

      if (res.status >= 200 && res.status < 300) {
        alert("Send Successfully!");
        setErrorMessage("");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to send email");
    } finally {
      setSubmit(false);
    }
  };

  return (
    <>
    <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl sm:py-20 lg:py-20">
          <div className="text-2xl mt-[-70px]">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Feel Free To Contact Us
            </h1>
          </div>
        </div>
        {/* ----------------------------- */}
        {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="flex flex-col justify-center">
            <div className="text-center sm:p-5 lg:p-8">
              <div className="flex flex-col justify-center items-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.08064816005!2d77.3185553752147!3d28.56734087570031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin!4v1704620459926!5m2!1sen!2sin"
                  className="w-[100%] h-80 border-2 shadow-xl rounded-lg "
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-10 flex justify-center items-center">
              <div className="flex flex-col p-3">
                <input
                  value={state.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
                />
                <input
                  className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={state.subject}
                  onChange={handleChange}
                />
                <textarea
                  className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
                  name="message"
                  placeholder="Message"
                  rows={6}
                  onChange={handleChange}
                  value={state.message}
                />
                <button
                  className="bg-purple-600 text-white font-bold rounded-lg p-1 hover:bg-purple-500"
                >
                  send
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      
    </>
  );
};

export default Contact;
