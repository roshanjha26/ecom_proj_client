import React from "react";

const AdminLogin = () => {
  return (
    <div className="bg-black1 h-screen flex justify-center items-center">
      <form className="bg-black p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 rounded-lg">
        <h3 className="mb-4 text-white capitalize font-semibold text-lg">
          dashboard login
        </h3>
        <div className="mb-4 mt-4">
          <input
            type="email"
            name="email"
            className="w-full bg-black1 p-4 rounded text-white outline-none"
            placeholder="type your email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            className="w-full bg-black1 p-4  text-white rounded outline-none"
            placeholder="type your password"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value="sign in &rarr;"
            className="bg-indigo-600 w-full p-4 rounded text-white uppercase font-semibold cursor-pointer hover:bg-teal-600"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
