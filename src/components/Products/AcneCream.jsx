import TiltedCard from "../body/TiltedCard";

export default function AcneCream() {
  //  (Do not exceed to prevent irritation.)

  const OilPhase = [
    {
      title: "Crodafos",
      use: "Base of the cream, provides a smooth and stable texture.",
    },
    {
      title: "GMS",
      use: "Base of the cream, provides a smooth and stable texture..",
    },
    {
      title: "Cetostearyl alcohol",
      use: "Base of the cream, provides a smooth and stable texture. ",
    },
    {
      title: "Cremophore",
      use: "Base of the cream, provides a smooth and stable texture. ",
    },
    { title: "Tea tree oil", use: " Antibacterial and soothes inflammation. " },
    {
      title: "Vitamin E",
      use: "Antioxidant that protects and nourishes the skin. ",
    },
  ];

  const CoolPhase = [
    {
      title: "Niacinamide",
      use: "Strengthens the skin barrier and increases natural ceramide production.",
    },
    {
      title: "Ginkgo biloba extract",
      use: "Antioxidant that protects the skin from oxidative stress.",
    },
    {
      title: "Salicylic acid",
      use: "Cleanses pores and treats acne.",
    },
    {
      title: "Citric acid",
      use: "Adjusts the skin’s pH. ",
    },
    {
      title: "Phenoxyethanol",
      use: "Preservative that maintains the stability of the cream. ",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center p-5 gap-3 ">
        <h1 className="text-3xl font-bold text-emerald-950">
          Vanilla Body Splash
        </h1>
        <p className="text-center">
          Experience the warmth and elegance of our Vanilla Body Splash. Perfect
          for any occasion!
        </p>
        <div className=" flex justify-center rounded-2xl">
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
        </div>
      </div>
      {/* details */}
      <div className=" sm:mr-7 mr-1 p-5 ">
        {/* oil phase */}
        <div>
          <h1 className=" text-2xl font-bold">Active Ingredients</h1>
          <h1 className=" text-xl font-bold"> 1-Oil Phase</h1>
          <ol className="last:mb-5">
            {OilPhase.map((item, index) => (
              <li key={index} className="mt-1.5 text-lg font-medium">
                {item.title}
              </li>
            ))}
          </ol>
        </div>
        {/* water phase */}
        <h1 className=" text-xl font-bold"> 2-Water Phase</h1>
        <p className="mt-1.5 text-lg font-medium">Distilled water</p>
        {/* cool phase */}
        <div>
          <h1 className=" text-xl font-bold"> 3-Cool Phase</h1>
          <ol className="last:mb-5">
            {CoolPhase.map((item, index) => (
              <li key={index} className="mt-1.5 text-lg font-medium">
                {item.title}
              </li>
            ))}
          </ol>
        </div>
        <hr />
        {/* uses */}
        <div>
          <h1 className="text-2xl font-bold mt-3 mb-3">
            Uses of Each Ingredient:
          </h1>
          <h1 className=" text-xl font-bold"> 1-Oil Phase</h1>
          <ol className="last:mb-5">
            {OilPhase.map((item, index) => (
              <li key={index} className="mt-1.5">
                <div className="text-lg font-medium">- {item.title}</div>
                <div className=" font-normal">{item.use}</div>
              </li>
            ))}
          </ol>
          <h1 className=" text-xl font-bold mt-3"> 2-Cool Phase</h1>
          <ol className="last:mb-5">
            {CoolPhase.map((item, index) => (
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
