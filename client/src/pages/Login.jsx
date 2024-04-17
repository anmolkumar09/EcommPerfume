import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const ImgUrl =
    "https://images.pexels.com/photos/8562747/pexels-photo-8562747.jpeg?auto=compress&cs=tinysrgb&w=400";
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${ImgUrl})` }}
    >
      <form className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-md w-96">
        <h3 className="text-2xl mb-4">Login here</h3>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="mt-1 p-2 w-full rounded-md border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="mt-1 p-2 w-full rounded-md border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>

        <div className="mt-4">
          <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            <FaGoogle className="mr-2" />
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
