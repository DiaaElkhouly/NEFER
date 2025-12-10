import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TiltedCard from "../body/TiltedCard";

const productData = {
  "body-splash": {
    strawberry: {
      title: "STRAWBERRY",
      img: "body-splash-straw.jpeg",
      description: "Refreshing strawberry body splash.",
      category: "body splash",
    },
    coconut: {
      title: "COCONUT",
      img: "body-splash-coco.jpeg",
      description: "Tropical coconut body splash.",
      category: "body splash",
    },
    gingham: {
      title: "GINGHAM",
      img: "body-splash-ging.jpeg",
      description: "Elegant gingham body splash.",
      category: "body splash",
    },
    tulib: {
      title: "TULIB",
      img: "body-splash-tulib.jpeg",
      description: "Beautiful tulib body splash.",
      category: "body splash",
    },
    youaretheone: {
      title: "YOU ARE THE ONE",
      img: "body-splash-you.jpeg",
      description: "Special 'You Are The One' body splash.",
      category: "body splash",
    },
  },
  "body-lotion": {
    strawberry: {
      title: "STRAWBERRY",
      img: "body-loation-straw.png",
      description: "Nourishing strawberry body lotion.",
      category: "body lotion",
    },
    coconut: {
      title: "COCONUT",
      img: "body-loation-coco.png",
      description: "Hydrating coconut body lotion.",
      category: "body lotion",
    },
    gingham: {
      title: "GINGHAM",
      img: "body-loation-ging.png",
      description: "Smooth gingham body lotion.",
      category: "body lotion",
    },
    tulib: {
      title: "TULIB",
      img: "body-loation-tulib.png",
      description: "Gentle tulib body lotion.",
      category: "body lotion",
    },
    youaretheone: {
      title: "YOU ARE THE ONE",
      img: "body-loation-you.png",
      description: "Exclusive 'You Are The One' body lotion.",
      category: "body lotion",
    },
  },
  "lip-palm": {
    lippalm: {
      title: "LIP PALM",
      img: "lip-palm.png",
      description: "Moisturizing lip palm balm.",
      category: "lip palm",
    },
  },
};

const productDetails = {
  "body-splash": {
    ingredients: [
      "Distilled Water %68",
      "Ethyl Alcohol (96%)",
      "Cremophor (%40)",
      "Fragrance 6%",
      "Phenoxyethanol 1%",
    ],
    use: [
      "Main base of the formula",
      "Solvent for the fragrance,  gives a cooling effect also has mild preservation",
      "Solubilizer that keeps the fragrance mixed with water and prevents separation",
      "The main scent component",
      "A preservative prevent the growth of bacteria, mold, and fungi in the water-containing product. It is essential for safety and extending the product's shelf life.",
    ],
  },
  "body-lotion": {
    ingredients: {
      "PHASE A (WATER PHASE)": [
        "Distilled Water - (40%)",
        "Aloe Vera Gel -(5%)",
        "Glycerin- (5%)",
      ],
      "PHASE B (OIL C)": [
        "Coconut Oil -(10%)",
        "Coconut Butter -(10%)",
        "Emulsifying Wax- (3%)",
        "Cetyl Alcohol-(3%)",
      ],
      "PHASE C (COOL PHASE)": [
        "Urea -(10% solution)",
        "Phenoxyethanol -(1%)",
        "Vitamin E -(1%)",
        "Fragrance- (1%)",
        "Citric Acid -(to adjust pH)",
      ],
    },
    use: [
      "Main solvent for water-soluble ingredients and the base of the emulsion. Using distilled/purified water ensures purity and prevents contamination or instability.",
      "Provides moisturizing, soothing, and mild anti-inflammatory properties. Hydrates the skin, supports the skin barrier, and promotes healing and regeneration.",
      "Highly effective humectant: draws water from the atmosphere and deeper skin layers to the skin surface. Strengthens the skin barrier and improves hydration. Enhances product texture, spreadability, and formulation stability.",
      "Emollients rich in fatty acids (lauric, capric acid) that moisturize, soften, and protect the skin barrier. Has mild antimicrobial properties.",
      "Adds thickness, locks in moisture, and nourishes the skin.",
      "Primary emulsifier that binds oil and water phases, forming a smooth, stable emulsion. Prevents separation over time, ensure stability of a product.",
      "Fatty alcohol that acts as a thickener, secondary emulsifier, and stabilizer. Contributes to creamy texture, smooth feel, and overall consistency.",
      "Potent humectant and keratolytic agent: softens and exfoliates dead skin cells. Provides intensive hydration, especially for dry, rough, or scaly skin. Helps manage keratosis pilaris by breaking down keratin buildup, smoothing skin, and reducing redness.",
      "Preservative that prevents bacterial, fungal, and mold growth. Essential for product safety and extended shelf-life.",
      "Antioxidant that protects oils in the formula from oxidation (rancidity). Supports skin repair and helps fight free radicals.",
      "Adds pleasant scent and improves user experience. Use cautiously; may cause sensitivity in some users.",
      "To adjust the pH of final product to (4.5-5.5), suitable for skin and urea.",
    ],
  },

  "lip-palm": {
    ingredients: [
      "Coconut Oil 30%",
      "Jojoba Oil 15%",
      "Cocoa Butter 23%",
      "Beeswax 23%",
      "Titanium Dioxide 5%",
      "Vitamin E 1%",
      "Phenoxyethanol 1%",
      "Color 1%",
      "Flavor 1%",
    ],
    use: [
      "Softens lips, adds glide, and works as an emollient healing properties from fatty acids",
      "penetrates the skin to moisturize from within, creating a lightweight, non-greasy feel unlike some other oils.Soothing and healing promote healing.It has anti-inflammatory properties that help soothe irritated, dry, or chapped lips and",
      "structure and a creamy texture of Cocoa butter make balanced consistency firm yet spreadable Deep hydration: Cocoa butter's fatty acids create a protective layer on the lips that locks in moisture,providing long- lasting hydration so prevents dryness. Nourishes and repairs: It contains vitamins and minerals that help nourish the lips and repair damage from dryness and chapping, leaving them feeling softer and smoother",
      "Thickener and structuring agent; raises the melting point and gives the balm firmness and stability",
      " primarily serves as a physical sunscreen It reflects and scatters UV rays, making it effective for sun protection",
      "Antioxidant that protects oils from oxidation and slow rancidity by nutralizing the free radicals adds skin benefits",
      "Broad-spectrum preservative to keep the balm microbiologically safe and extends shelf life",
      "Lip-safe pigment that adds colour",
      "Provides pleasant taste scent",
    ],
  },
};

export default function Product() {
  const { type, productName } = useParams();
  const product = productData[type]?.[productName];

  if (!product) {
    return (
      <>
        <Header />
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold">Product Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Product Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-pink-950">
              {product.category}
            </h1>
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 shadow-2xl">
                <TiltedCard
                  imageSrc={`./images/${product.img}`}
                  altText={product.title}
                  captionText={product.title}
                  containerHeight="16rem"
                  containerWidth="16rem"
                  imageHeight="16rem"
                  imageWidth="16rem"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="tilted-card-demo-text text-2xl font-bold p-2 text-pink-950 ml-2 absolute -top-6">
                      {product.title}
                    </p>
                  }
                />
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-1 shadow-lg max-w-2xl mx-auto">
              <p className="text-xl text-gray-200 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Ingredients Section */}
          {productDetails[type] && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 shadow-2xl">
              {type === "body-lotion" ? (
                <>
                  <h2 className="text-3xl font-bold mb-8 -ml-5 text-center text-pink-950">
                    Body Lotion Ingredients
                  </h2>
                  {Object.entries(productDetails[type].ingredients).map(
                    ([phase, ingredients]) => (
                      <div key={phase} className="mb-10">
                        <h3 className="text-2xl font-semibold mb-6 text-pink-900 border-b border-pink-700 pb-2">
                          {phase}
                        </h3>
                        <div className="grid gap-6 md:grid-cols-2">
                          {ingredients.map((ingredient, index) => {
                            const allIngredients = Object.values(
                              productDetails[type].ingredients
                            ).flat();
                            const useIndex = allIngredients.indexOf(ingredient);
                            return (
                              <div
                                key={index}
                                className="bg-gray-700/50 hover:bg-gray-800/50 p-4 rounded-xl shadow-lg border border-pink-600/20 hover:border-pink-800/50 transition-all duration-300"
                              >
                                <div className="font-bold text-pink-500/60 mb-3 text-lg">
                                  {ingredient}
                                </div>
                                <div className="text-gray-300 text-sm leading-relaxed">
                                  {productDetails[type].use[useIndex]}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )
                  )}
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-8 text-center text-pink-950">
                    {type === "body-splash"
                      ? "Body Splash Ingredients"
                      : "Lip Palm Ingredients"}
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {productDetails[type].ingredients.map(
                      (ingredient, index) => (
                        <div
                          key={index}
                          className="bg-gray-700/50 hover:bg-gray-800/50 p-4 rounded-xl shadow-lg border border-pink-400/20 hover:border-pink-700/50 transition-all duration-300"
                        >
                          <div className="font-bold text-pink-500/60 mb-3 text-lg">
                            {ingredient}
                          </div>
                          <div className="text-gray-300 text-sm leading-relaxed">
                            {productDetails[type].use[index]}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
