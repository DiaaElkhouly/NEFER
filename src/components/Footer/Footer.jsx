import { Link } from "react-router-dom";
// components/Footer.js
export default function Footer() {
  function handelProfile() {
    window.location.href = "https://www.facebook.com/diaa.elkhouly.3";
  }
  return (
    <footer className="bg-cadenzaBlack text-cloud py-7 border-gray-700 border-t mt-2">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Logo & Brand */}
        <div>
          <h2 className="text-3xl font-bold text-baccarat text-gray-100 nefer-font">
            NEFER®
          </h2>
          <p className="mt-2 text-lg font-normal text-center text-gray-300">
            "The power of Egyptian heritage in every drop"
          </p>
        </div>
        <div className="flex justify-around">
          {/* Quick Links */}
          <div className="-ml-3  ">
            <h3 className="text-xl font-semibold text-vanilla text-gray-100">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-1  text-md text-gray-100 flex flex-col gap-1">
              <Link to={"/ourMembers"}>
                <li>
                  <a href="" className="hover:text-sparkle">
                    Our Members
                  </a>
                </li>
              </Link>
              <Link to={"/aboutNefer"}>
                <li>
                  <a href="" className="hover:text-sparkle">
                    About NEFER
                  </a>
                </li>
              </Link>
              <li>
                <a href="/#" className="hover:text-sparkle">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-gray-100">
            <h3 className="text-lg font-semibold text-vanilla">Get in Touch</h3>
            <p className="mt-3 text-sm text-gray-300">Email: info@nefer.com</p>
            <p className="text-sm text-gray-300">Phone: +20 1201449924</p>
            <p className="text-sm text-gray-300">Location: Al Minya, Egypt</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-5 border-t border-gray-700 pt-3 text-center text-gray-400 text-lg">
        © {new Date().getFullYear()}{" "}
        <span
          onClick={handelProfile}
          className="text-xl font-bold text-gray-900 cursor-pointer mr-0.5"
        >
          Diaa Elkhouly
        </span>
        - All rights reserved
      </div>
    </footer>
  );
}
