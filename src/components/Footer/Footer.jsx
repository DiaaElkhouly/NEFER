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
          <h2 className="text-2xl font-heading text-baccarat">CADENZA®</h2>
          <p className="mt-2 text-sm text-gray-300">
            Luxury scents & natural care. A symphony of elegance in every
            product.
          </p>
        </div>
        <div className="flex justify-around">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-vanilla">Quick Links</h3>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a href="/#" className="hover:text-sparkle">
                  Products
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-sparkle">
                  Our Members
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-sparkle">
                  About CADENZA
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-sparkle">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-vanilla">Get in Touch</h3>
            <p className="mt-3 text-sm text-gray-300">
              Email: info@cadenza.com
            </p>
            <p className="text-sm text-gray-300">Phone: +20 1153469099</p>
            <p className="text-sm text-gray-300">Location: Al Minya, Egypt</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-5 border-t border-gray-700 pt-3 text-center text-gray-400 text-lg">
        © {new Date().getFullYear()}{" "}
        <span
          onClick={handelProfile}
          className="text-xl font-bold text-emerald-950 cursor-pointer mr-0.5"
        >
          Diaa Elkhouly
        </span>
        - All rights reserved
      </div>
    </footer>
  );
}
