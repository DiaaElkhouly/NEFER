import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CodeIcon from "@mui/icons-material/Code";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const socialLinks = [
    {
      icon: FacebookRoundedIcon,
      href: "https://www.facebook.com/diaa.elkhouly.3",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/diaaelkhouly/",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: GitHubIcon,
      href: "https://github.com/DiaaElkhouly",
      label: "GitHub",
      color: "hover:bg-gray-600",
    },
    {
      icon: WhatsAppIcon,
      href: "https://wa.me/201201449924?text=مرحبا%20بك",
      label: "WhatsApp",
      color: "hover:bg-green-600",
    },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/aboutNefer", label: "About NEFER" },
    { to: "/ourMembers", label: "Our Members" },
    { to: "/body-splash", label: "Body Splash" },
    { to: "/body-lotion", label: "Body Lotion" },
    { to: "/lip-palm/lippalm", label: "Lip Palm" },
  ];

  const handleSocialClick = (href) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing! We'll keep you updated.");
      setEmail("");
    }
  };

  const handleOrderClick = () => {
    window.open(
      "https://wa.me/201201449924?text=Hello,%20I%20want%20to%20order%20NEFER%20products",
      "_blank",
    );
  };

  return (
    <footer className="bg-gradient-to-b from-pink-950 via-pink-900 to-pink-950 text-gray-100 mt-16 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="egypt-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path d="M30 5 L35 20 L30 15 L25 20 Z" fill="currentColor" />
            <circle cx="30" cy="35" r="3" fill="currentColor" />
            <path
              d="M20 45 Q30 35 40 45"
              stroke="currentColor"
              fill="none"
              strokeWidth="1"
            />
          </pattern>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#egypt-pattern)"
          />
        </svg>
      </div>

      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-7 relative z-10">
        {/* Main Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <h2 className="text-4xl font-bold text-white nefer-font tracking-wider golden-glow">
                NEFER<span className="text-yellow-500">®</span>
              </h2>
              <p className="mt-4 text-base text-gray-300 italic font-light leading-relaxed">
                "The beautiful one has come"
              </p>
              <p className="text-sm text-gray-400 mt-2">
                — Ancient Egyptian wisdom in modern beauty
              </p>

              {/* Order Button */}
              <button
                onClick={handleOrderClick}
                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-pink-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group"
              >
                <ShoppingBagIcon className="group-hover:scale-110 transition-transform" />
                Order Now
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 h-full">
              <h3 className="text-lg font-semibold text-yellow-500 mb-5 tracking-wide flex items-center gap-2">
                <span className="w-8 h-0.5 bg-yellow-500"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.slice(0, 3).map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-yellow-500/50 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Quick Links */}
          <div className="col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 h-full">
              <h3 className="text-lg font-semibold text-yellow-500 mb-5 tracking-wide flex items-center gap-2">
                <span className="w-8 h-0.5 bg-yellow-500"></span>
                Products
              </h3>
              <ul className="space-y-3">
                {quickLinks.slice(3).map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-yellow-500/50 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <h3 className="text-lg font-semibold text-yellow-500 mb-4 tracking-wide flex items-center gap-2">
                <span className="w-8 h-0.5 bg-yellow-500"></span>
                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe for exclusive offers and new product updates.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-pink-900/50 border border-yellow-500/30 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 transition-all"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-pink-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 flex items-center justify-center gap-2"
                >
                  <SendIcon style={{ fontSize: 18 }} />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-10 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:info@nefer.com"
              className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-yellow-400 transition-colors group"
            >
              <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                <EmailIcon className="text-yellow-500" />
              </div>
              <span>info@nefer.com</span>
            </a>
            <a
              href="tel:+201201449924"
              className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-yellow-400 transition-colors group"
            >
              <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                <PhoneIcon className="text-yellow-500" />
              </div>
              <span>+20 120 144 9924</span>
            </a>
            <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
              <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center">
                <LocationOnIcon className="text-yellow-500" />
              </div>
              <span>Al Minya, Egypt</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-yellow-500/20">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear}{" "}
              <span className="text-yellow-500 font-semibold">NEFER</span> —
              Crafted with <span className="text-red-500">♥</span> in Egypt. All
              rights reserved.
            </p>

            {/* Developer Credit - Professional Manner */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-yellow-500/30"></div>
              <a
                href="https://github.com/DiaaElkhouly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-yellow-400 transition-colors group"
              >
                <span className="text-sm font-medium">
                  Designed & Developed by{" "}
                  <span className="text-yellow-500">Diaa Elkhouly</span>
                </span>
              </a>
              <div className="h-px w-12 bg-yellow-500/30"></div>
            </div>
            {/* Social Links */}
            <div className="my-4 text-center">
              <div className="flex justify-center gap-3">
                {socialLinks.map((social) => (
                  <button
                    key={social.label}
                    onClick={() => handleSocialClick(social.href)}
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-full bg-pink-900/40 border border-yellow-500/20 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg ${social.color} hover:border-yellow-400 group`}
                  >
                    <social.icon
                      style={{ fontSize: "22px" }}
                      className="text-gray-300 group-hover:text-white transition-colors"
                    />
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-2 text-gray-600 text-xs">
              "Nefer" means beauty in ancient Egyptian
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
