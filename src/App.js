import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 text-center">
        <img
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h1 className="text-2xl font-bold mt-4 text-gray-800">John Doe</h1>
        <p className="text-blue-600 font-semibold">Full Stack Developer</p>
        <p className="text-gray-600 mt-3">
          Passionate about building scalable web applications and working with modern technologies.
        </p>

        <div className="mt-6 space-y-2">
          <p>
            📧 <span className="text-gray-700">john.doe@example.com</span>
          </p>
          <p>
            🌐 <a href="https://johndoe.dev" className="text-blue-500 hover:underline">johndoe.dev</a>
          </p>
          <p>
            📍 New York, USA
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
