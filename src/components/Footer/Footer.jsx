import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-cadenzaBlack text-cloud py-5 border-gray-700 border-t mt-2">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-1">
        {/* Logo & Brand */}
        <div>
          <h2 className="text-3xl font-bold text-baccarat text-gray-100 nefer-font">
            NEFER®
          </h2>
          <p className="mt-2 text-xl font-normal  text-gray-300">
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
              <Link to={"/aboutNefer"}>
                <li>
                  <a href="" className="hover:text-sparkle">
                    About NEFER
                  </a>
                </li>
              </Link>
              <Link to={"/ourMembers"}>
                <li>
                  <a href="" className="hover:text-sparkle">
                    Our Members
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
        <span className="text-xl font-bold text-gray-900 mr-0.5">
          Diaa Elkhouly
        </span>
        - All rights reserved
      </div>
      <div className="flex justify-center gap-7 mt-1 ">
        <FacebookRoundedIcon
          style={{ fontSize: "30" }}
          onClick={() => {
            window.location.href = "hhttps://www.facebook.com/diaa.elkhouly.3";
          }}
          className=" cursor-pointer text-gray-900"
        />
        <GitHubIcon
          style={{ fontSize: "30" }}
          className="cursor-pointer text-gray-900"
          onClick={() => {
            window.location.href = "https://github.com/DiaaElkhouly";
          }}
        />
        <InstagramIcon
          style={{ fontSize: "30" }}
          className="cursor-pointer text-gray-900"
          onClick={() => {
            window.location.href = "https://www.instagram.com/diaaelkhouly/";
          }}
        />
        <WhatsAppIcon
          style={{ fontSize: "30" }}
          className="cursor-pointer text-gray-900"
          onClick={() => {
            window.location.href = "https://wa.me/201201449924?text=مرحبا%20بك";
          }}
        />
      </div>
    </footer>
  );
}
