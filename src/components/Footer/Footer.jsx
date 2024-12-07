import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 max-w-[1000px] w-full m-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <img
            className="h-8"
            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
            alt="Swiggy Logo"
          />
          <p className="text-lg font-semibold">Rumman</p>
          <p className="text-sm text-gray-400">© 2024 Rumman. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-3 text-sm">
          <a
            href="https://www.linkedin.com/in/rummanhase"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaLinkedin className="text-blue-600" /> www.linkedin.com/in/rummanhase
          </a>
          <a
            href="mailto:rummanhase@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <FaEnvelope className="text-red-500" /> rummanhase@gmail.com
          </a>
          <a
            href="https://github.com/rumman1999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaGithub /> github.com/rumman1999
          </a>
          <a
            href="tel:+917753955595"
            className="flex items-center gap-2 hover:underline"
          >
            <FaPhoneAlt className="text-green-500" /> 7753955595
          </a>
          <a
            href="https://rummann.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaGlobe className="text-blue-400" /> rummann.netlify.app
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
