// import { useState } from "react";
// import axios from "axios";

// const Contact = () => {
//   const [isSubmit, setSubmit] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [state, setState] = useState({
//     email: "",
//     number: "",
//     message: "",
//   });

//   // const sendEmail = (e) => {
//   //   axios
//   //     .post("/send", { ...state })
//   //     .then((response) => {
//   //       setResult(response.data);
//   //       setState({
//   //         email: "",
//   //         number: "",
//   //         message: "",
//   //       });
//   //     })
//   //     .catch(() => {
//   //       setResult({
//   //         success: false,
//   //         message: "Error Sending Email",
//   //       });
//   //     });

//   //   // sending email code
//   // };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(value);

//     setState({ ...state, [name]: value });
//   };
//   const btn = async (event) => {
//     event.preventDefault();
//     setSubmit(true);

//     try {
//       const response = await axios.post("http://localhost:5173/contact", state);

//       if (response.status === 200) {
//         alert("Message Sent Successfully");
//         // window.location.reload();
//       }
//     } catch (err) {
//       console.log("Error while sending mail", err);
//       setErrorMessage("Failed to send email. Please try again later.");
//     } finally {
//       setSubmit(false);
//     }

//     return (
//       <>
//         {errorMessage && <p>{errorMessage}</p>}
//         <form onSubmit={btn}>
//           <div className="">
//             <div className="flex flex-col justify-center">
//               <div className="text-center sm:p-5 lg:p-8">
//                 <h1 className="text-3xl font-bold p-4">
//                   Feel Free To Contact Us
//                 </h1>
//                 <div className="flex flex-col justify-center items-center">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.08064816005!2d77.3185553752147!3d28.56734087570031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin!4v1704620459926!5m2!1sen!2sin"
//                     className="w-[100%] h-80 border-2 shadow-xl  rounded-lg "
//                   />
//                 </div>
//               </div>

//               <div className="mt-10 flex justify-center items-center">
//                 <form className="flex flex-col p-3">
//                   <input
//                     value={state.email}
//                     onChange={handleChange}
//                     type="text"
//                     name="email"
//                     placeholder="Enter Email"
//                     className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
//                   />
//                   <input
//                     className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
//                     type="number"
//                     name="number"
//                     placeholder="Mobile number"
//                     value={state.number}
//                     onChange={handleChange}
//                   />
//                   <textarea
//                     className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
//                     type="text"
//                     name="message"
//                     placeholder="Message"
//                     rows={6}
//                     onChange={handleChange}
//                     value={state.message}
//                   />
//                   <button className="bg-purple-600 text-white font-bold rounded-lg p-1 hover:bg-purple-500">
//                     {isSubmit ? "sending" : "send"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </form>
//       </>
//     );
//   };
// };
// export default Contact;

import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [isSubmit, setSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [state, setState] = useState({
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmit(true);

    try {
      const response = await axios.post("http://localhost:5173/contact", state);

      if (response.status === 200) {
        alert("Message Sent Successfully");
        setState({ email: "", number: "", message: "" }); // Reset form fields
      }
    } catch (err) {
      console.error("Error while sending mail", err);
      setErrorMessage("Failed to send email. Please try again later.");
    } finally {
      setSubmit(false);
    }
  };

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="flex flex-col justify-center">
            <div className="text-center sm:p-5 lg:p-8">
              <h1 className="text-3xl font-bold p-4">
                Feel Free To Contact Us
              </h1>
              <div className="flex flex-col justify-center items-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.08064816005!2d77.3185553752147!3d28.56734087570031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India%2C%20Noida!5e0!3m2!1sen!2sin!4v1704620459926!5m2!1sen!2sin"
                  className="w-[100%] h-80 border-2 shadow-xl  rounded-lg "
                />
              </div>
            </div>

            <div className="mt-10 flex justify-center items-center">
              <form className="flex flex-col p-3">
                <input
                  value={state.email}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
                />
                <input
                  className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
                  type="number"
                  name="number"
                  placeholder="Mobile number"
                  value={state.number}
                  onChange={handleChange}
                />
                <textarea
                  className="p-1 m-1 border border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] hover:border-gray-500"
                  type="text"
                  name="message"
                  placeholder="Message"
                  rows={6}
                  onChange={handleChange}
                  value={state.message}
                />
                <button
                  className="bg-purple-600 text-white font-bold rounded-lg p-1 hover:bg-purple-500"
                  disabled={isSubmit}
                >
                  {isSubmit ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
