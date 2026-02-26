import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  imageSrc,
  altText = "Product",
  title,
  category,
  route,
  index = 0,
}) => {
  return (
    <Link to={route} className="flex-shrink-0">
      <div
        className="group cursor-pointer"
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
      >
        <div className="relative w-52 h-52 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-pink-900/30 to-pink-950/50 border border-pink-800/30">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-950/90 via-pink-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-500/90 text-pink-950 rounded-full mb-2">
              {category}
            </span>
            <h3 className="text-lg font-bold text-white drop-shadow-lg group-hover:text-yellow-400 transition-colors">
              {title}
            </h3>
          </div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-yellow-500/50 rounded-tr-lg"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-yellow-500/50 rounded-bl-lg"></div>
        </div>
        <div className="mt-2 h-4 bg-pink-950/30 rounded-full blur-lg group-hover:bg-pink-900/50 transition-colors"></div>
      </div>
    </Link>
  );
};

export default ProductCard;
