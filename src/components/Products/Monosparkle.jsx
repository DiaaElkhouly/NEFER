import TiltedCard from "../body/TiltedCard";

export default function Monosparkle() {
  const items = [
    { title: "Distilled Water", use: "The main base of the formula." },
    {
      title: "Ethyl Alcohol (96%)",
      use: "Acts as a solvent for the fragrance, provides a refreshing cooling effect, and offers mild preservation.",
    },
    {
      title: "Cremophor",
      use: "Works as a solubilizer that helps blend the fragrance with water and prevents separation.",
    },
    { title: "Fragrance", use: "The main scent component : Mono Sparkle " },
  ];
  return (
    <>
      <div className="flex flex-col items-center p-4 gap-3 ">
        <h1 className="text-3xl font-bold text-emerald-950">Mono Sparkle</h1>
        <p className="text-center">
          Experience the warmth and elegance of our Mono Sparkle Body Splash.
          Perfect for any occasion!
        </p>
        <div className=" flex justify-center rounded-2xl">
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
                Monosparkle
              </p>
            }
          />
        </div>
      </div>
      {/* details */}
      <div className=" sm:mr-7 mr-1 p-5 ">
        <div>
          <h1 className=" text-2xl font-bold">Active Ingredients</h1>
          <ol className="last:mb-5">
            {items.map((item, index) => (
              <li key={index} className="mt-1.5 text-lg font-medium">
                {item.title}
              </li>
            ))}
          </ol>
        </div>
        <hr />
        {/* uses */}
        <div>
          <h1 className="text-2xl font-bold mt-3">Uses of Each Ingredient</h1>
          <ol className="last:mb-5">
            {items.map((item, index) => (
              <li key={index} className="mt-1.5">
                <div className="text-lg font-medium">- {item.title}</div>
                <div className=" font-normal">{item.use}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
