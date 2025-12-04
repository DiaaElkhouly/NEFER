import TiltedCard from "./TiltedCard";
import ImageSlider from "./imageSlider";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <div className=" mt-5 mx-10">
      <h1 className="text-xl font-bold mb-3 text-center">
        “Everyone deserves its own Cadenza - a moment to shine”
      </h1>
      <div className="flex justify-center">
        <ImageSlider className="mb-3" />
      </div>
      <h1 className=" text-3xl font-bold  mb-5 bg-emerald-900 w-fit  rounded-r-2xl p-1 absolute left-0  pl-5 pr-2 mt-4 shadow-2xl">
        Body Splash
      </h1>
      {/* cards */}
      <div className="flex flex-col md:flex-row gap-7 mt-18 items-center ">
        <Link to="/vanilla">
          <TiltedCard
            imageSrc="/images/Vanilla-mockup.jpg"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Body Splash"
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
              <p className="tilted-card-demo-text text-2xl font-bold  p-1 text-green-950 ml-2.5">
                Vanilla
              </p>
            }
          />
        </Link>

        <Link to="/baccaraat">
          <TiltedCard
            imageSrc="/images/Baccaraat-rouge-mockups.jpg"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Baccaraat"
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
              <p className="tilted-card-demo-text text-2xl font-bold  p-1 text-green-950 ml-1.5">
                Baccaraat
              </p>
            }
          />
        </Link>
        <Link to="/monosparkle">
          <TiltedCard
            imageSrc="/images/Monosparkle-mockup.jpg"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Monosparkle"
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
              <p className="tilted-card-demo-text text-xl font-bold  p-1 text-green-950 ml-1 ">
                Mono Sparkle
              </p>
            }
          />
        </Link>
      </div>
      {/* deodorant */}
      <h1 className=" text-3xl font-bold  mb-5 bg-emerald-900 w-fit  rounded-r-2xl p-1 absolute left-0  pl-5 pr-2 mt-2 shadow-2xl">
        Deodorant
      </h1>
      <div className=" flex  gap-7 mt-16 justify-center">
        <Link to="/deodorant">
          <TiltedCard
            imageSrc="/images/deodorant.png"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Body Lotion"
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
              <p className="tilted-card-demo-text text-2xl font-bold p-1 text-green-950 ml-1 ">
                Deodorant
              </p>
            }
          />
        </Link>
      </div>
      {/* Acne */}
      <h1 className=" text-3xl font-bold  mb-5 bg-emerald-900 w-fit  rounded-r-2xl p-1 absolute left-0  pl-5 pr-2 mt-2 shadow-2xl">
        Acne Cream
      </h1>
      <div className=" flex  gap-7 mt-16 justify-center">
        <Link to="/acneCream">
          <TiltedCard
            imageSrc="/images/Acne-cream-circular.png"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Body Lotion"
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
              <p className="tilted-card-demo-text text-2xl font-bold p-1 text-green-950 ml-1 ">
                Acne Cream
              </p>
            }
          />
        </Link>
      </div>
    </div>
  );
}
