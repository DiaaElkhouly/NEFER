import TiltedCard from "./TiltedCard";
import ImageSlider from "./imageSlider";
import { Link } from "react-router-dom";
import "../../app.css";

export default function Body() {
  const bodySplash = [
    { title: "STRAWBERRY", img: "body-splash-straw.jpeg" },
    { title: "COCONUT", img: "body-splash-coco.jpeg" },
    { title: "GINGHAM", img: "body-splash-ging.jpeg" },
    { title: "TULIB", img: "body-splash-tulib.jpeg" },
    { title: "YOU ARE THE ONE", img: "body-splash-you.jpeg" },
  ];
  const bodyLotion = [
    { title: "STRAWBERRY", img: "body-loation-straw.png" },
    { title: "COCONUT", img: "body-loation-coco.png" },
    { title: "GINGHAM", img: "body-loation-ging.png" },
    { title: "TULIB", img: "body-loation-tulib.png" },
    { title: "YOU ARE THE ONE", img: "body-loation-you.png" },
  ];
  return (
    <div className=" mt-5 mx-8 my-10 ">
      <div className=" relative">
        <h1 className="keyMessage-header  text-2xl font-bold mb-3 text-center text-gray-100">
          "Beauty carved in history, revived anew in NEFER"
        </h1>
      </div>
      <div className="flex justify-center">
        <ImageSlider className="mb-3" />
      </div>
      {/* Body Splash */}
      <h1 className=" text-3xl font-bold  mb-5 bg-pink-950 text-gray-100 w-fit  rounded-r-2xl p-1 absolute left-0  pl-5 pr-2 mt-4 shadow-2xl">
        Body Splash
      </h1>
      <div className="flex flex-row gap-6 mt-10 items-center overflow-scroll no-scrollbar -mx-5 h-72 ">
        {bodySplash.map((f) => {
          const route = `/body-splash/${f.title
            .toLowerCase()
            .replace(/\s+/g, "")}`;
          return (
            <Link key={f.title} to={route}>
              <div className=" relative">
                <TiltedCard
                  className="relative"
                  imageSrc={`./images/${f.img}`}
                  altText="body-splash"
                  captionText="Body Splash"
                  containerHeight="13rem"
                  containerWidth="13rem"
                  imageHeight="13rem"
                  imageWidth="13rem"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    // if you want to add text in the bottom of card
                    // absolute  mb-1.5 -bottom-62
                    <p className="tilted-card-demo-text text-2xl font-bold  text-pink-950 ml-2.5 p-1 ">
                      {f.title}
                    </p>
                  }
                />
              </div>
            </Link>
          );
        })}
      </div>
      {/* Body Lotion */}
      <h1 className=" text-3xl font-bold  mb-5 bg-pink-950  text-gray-100 w-fit  rounded-r-2xl p-1 absolute left-0  pl-5 pr-2 mt-2 shadow-2xl">
        Body Lotion
      </h1>
      <div className="flex flex-row gap-6 mt-10 items-center overflow-scroll no-scrollbar -mx-5 h-72 ">
        {bodyLotion.map((f) => {
          const route = `/body-lotion/${f.title
            .toLowerCase()
            .replace(/\s+/g, "")}`;
          return (
            <Link key={f.title} to={route}>
              <TiltedCard
                imageSrc={`./images/${f.img}`}
                altText="body-lotion"
                captionText="Body Lotion"
                containerHeight="13rem"
                containerWidth="13rem"
                imageHeight="13rem"
                imageWidth="13rem"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text text-2xl font-bold  p-1 text-pink-950 ml-2.5">
                    {f.title}
                  </p>
                }
              />
            </Link>
          );
        })}
      </div>
      {/* Lip Palm */}
      <h1 className=" text-3xl font-bold  mb-5 bg-pink-950 text-gray-100 w-fit  rounded-r-2xl p-1 absolute left-0  pl-5 pr-2 mt-2 shadow-2xl">
        Lip Palm
      </h1>
      <div className=" flex  gap-7 mt-16 justify-center">
        <Link to="/lip-palm/lippalm">
          <TiltedCard
            imageSrc="./images/lip-palm.png"
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
              <p className="tilted-card-demo-text text-2xl font-bold p-1 text-pink-950 ml-1 ">
                LIP PALM
              </p>
            }
          />
        </Link>
      </div>
    </div>
  );
}
