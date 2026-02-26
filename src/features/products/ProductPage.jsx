/**
 * Product page component - Professional Version with Original Identity
 */
import { Link, useParams } from "react-router-dom";
import TiltedCard from "../../components/body/TiltedCard";
import { getProduct, getProductDetails } from "../../data";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import OpacityIcon from "@mui/icons-material/Opacity";
import SpaIcon from "@mui/icons-material/Spa";

const ProductPage = () => {
  const { type, productName } = useParams();
  const product = getProduct(type, productName);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Product Not Found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            <HomeIcon /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const productDetail = getProductDetails(type);

  const handleOrderClick = () => {
    const message = `Hello, I want to order ${product.title} (${product.category})`;
    window.open(
      `https://wa.me/201201449924?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  // Get category icon
  const getCategoryIcon = () => {
    switch (type) {
      case "body-splash":
        return <WaterDropIcon />;
      case "body-lotion":
        return <OpacityIcon />;
      case "lip-palm":
        return <SpaIcon />;
      default:
        return <SpaIcon />;
    }
  };

  // Get category label
  const getCategoryLabel = () => {
    switch (type) {
      case "body-splash":
        return "Body Splash";
      case "body-lotion":
        return "Body Lotion";
      case "lip-palm":
        return "Lip Palm";
      default:
        return product.category;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      {/* Breadcrumb Navigation */}
      <div className="max-w-5xl mx-auto mb-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
          <Link
            to="/"
            className="hover:text-yellow-500 transition-colors flex items-center gap-1"
          >
            <HomeIcon style={{ fontSize: 18 }} />
            Home
          </Link>
          <ArrowForwardIcon style={{ fontSize: 16 }} />
          <Link
            to={`/${type}`}
            className="hover:text-yellow-500 transition-colors"
          >
            {getCategoryLabel()}
          </Link>
          <ArrowForwardIcon style={{ fontSize: 16 }} />
          <span className="text-yellow-500">{product.title}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-pink-950/80 via-pink-900/80 to-pink-950/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-yellow-500/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                  <TiltedCard
                    imageSrc={`./images/${product.img}`}
                    altText={product.title}
                    captionText={product.title}
                    containerHeight="18rem"
                    containerWidth="18rem"
                    imageHeight="18rem"
                    imageWidth="18rem"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text text-2xl font-bold p-2 text-white ml-2 absolute -top-6 drop-shadow-lg">
                        {product.title}
                      </p>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="text-center lg:text-left">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm font-medium mb-4">
                {getCategoryIcon()}
                {getCategoryLabel()}
              </div>

              {/* Product Title */}
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 nefer-font golden-glow">
                {product.title}
              </h1>

              {/* Product Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleOrderClick}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-pink-950 font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105"
                >
                  <ShoppingBagIcon />
                  Order Now
                </button>
                <a
                  href="https://wa.me/201201449924?text=Hello,%20I%20have%20a%20question%20about%20NEFER%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-yellow-500/20 hover:border-yellow-500/50 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  <WhatsAppIcon className="text-green-500" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        {productDetail && (
          <div className="mt-10 bg-gradient-to-br from-pink-950/60 via-pink-900/60 to-pink-950/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-yellow-500/20 shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 nefer-font">
                Product <span className="text-yellow-500">Ingredients</span>
              </h2>
              <p className="text-gray-400">
                Premium quality ingredients for your skin care
              </p>
            </div>

            {type === "body-lotion" ? (
              // Body Lotion Ingredients - Multiple Phases
              <div className="space-y-8">
                {Object.entries(productDetail.ingredients).map(
                  ([phase, ingredients]) => (
                    <div
                      key={phase}
                      className="bg-white/5 rounded-2xl p-6 border border-yellow-500/10"
                    >
                      <h3 className="text-xl font-semibold text-yellow-500 mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
                        {phase}
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {ingredients.map((ingredient, index) => {
                          const allIngredients = Object.values(
                            productDetail.ingredients,
                          ).flat();
                          const useIndex = allIngredients.indexOf(ingredient);
                          return (
                            <div
                              key={index}
                              className="group bg-pink-950/50 hover:bg-pink-900/50 border border-yellow-500/10 hover:border-yellow-500/30 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
                            >
                              <div className="font-bold text-yellow-400/80 mb-2 text-sm uppercase tracking-wide">
                                {ingredient}
                              </div>
                              <div className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                {productDetail.use[useIndex]}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ),
                )}
              </div>
            ) : (
              // Body Splash & Lip Palm Ingredients - Single List
              <div className="grid gap-4 sm:grid-cols-2">
                {productDetail.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="group bg-pink-950/50 hover:bg-pink-900/50 border border-yellow-500/10 hover:border-yellow-500/30 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                        <span className="text-yellow-500 font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-yellow-400/80 mb-2 text-sm uppercase tracking-wide">
                          {ingredient}
                        </div>
                        <div className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                          {productDetail.use[index]}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Additional Info Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <SpaIcon className="text-yellow-500" style={{ fontSize: 18 }} />
              </span>
              Natural Ingredients
            </h3>
            <p className="text-gray-400 text-sm">
              Our products are crafted with carefully selected natural
              ingredients to provide the best care for your skin.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center">
                <WhatsAppIcon
                  className="text-pink-500"
                  style={{ fontSize: 18 }}
                />
              </span>
              Direct Order
            </h3>
            <p className="text-gray-400 text-sm">
              Order directly through WhatsApp for fastest response and
              personalized service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
