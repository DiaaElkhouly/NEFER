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
    },
    coconut: {
      title: "COCONUT",
      img: "body-splash-coco.jpeg",
      description: "Tropical coconut body splash.",
    },
    gingham: {
      title: "GINGHAM",
      img: "body-splash-ging.jpeg",
      description: "Elegant gingham body splash.",
    },
    tulib: {
      title: "TULIB",
      img: "body-splash-tulib.jpeg",
      description: "Beautiful tulib body splash.",
    },
    youaretheone: {
      title: "YOU ARE THE ONE",
      img: "body-splash-you.jpeg",
      description: "Special 'You Are The One' body splash.",
    },
  },
  "body-lotion": {
    strawberry: {
      title: "STRAWBERRY",
      img: "body-loation-straw.png",
      description: "Nourishing strawberry body lotion.",
    },
    coconut: {
      title: "COCONUT",
      img: "body-loation-coco.png",
      description: "Hydrating coconut body lotion.",
    },
    gingham: {
      title: "GINGHAM",
      img: "body-loation-ging.png",
      description: "Smooth gingham body lotion.",
    },
    tulib: {
      title: "TULIB",
      img: "body-loation-tulib.png",
      description: "Gentle tulib body lotion.",
    },
    youaretheone: {
      title: "YOU ARE THE ONE",
      img: "body-loation-you.png",
      description: "Exclusive 'You Are The One' body lotion.",
    },
  },
  "lip-palm": {
    lippalm: {
      title: "LIP PALM",
      img: "lip-palm.png",
      description: "Moisturizing lip palm balm.",
    },
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
    <>
      <Header />
      <div className="mt-10 mx-10 text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-5 text-pink-950">
          {product.title}
        </h1>
        <div className=" flex justify-center mt-5">
          <TiltedCard
            imageSrc={`./images/${product.img}`}
            altText={product.title}
            captionText={product.title}
            containerHeight="15rem"
            containerWidth="15rem"
            imageHeight="15rem"
            imageWidth="15rem"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text text-2xl font-bold  p-1 text-pink-950 ml-2.5">
                {product.title}
              </p>
            }
          />
        </div>
        <p className="text-lg mt-7 text-gray-200">{product.description}</p>
      </div>
      <Footer />
    </>
  );
}
