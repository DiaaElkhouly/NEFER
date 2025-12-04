import TiltedCard from "../body/TiltedCard";
export default function Deodorant() {
  const items = [
    {
      title: "Bees Wax",
      use: "Provides structure and allows smooth application.",
    },
    {
      title: "Coconut Butter",
      use: "Moisturizes the skin and keeps it soft",
    },
    {
      title: "Coconut Oil",
      use: "Moisturizes the skin and keeps it soft",
    },
    {
      title: "Jojoba Oil",
      use: "Lightweight and effective hydration.",
    },
    {
      title: "Rose Oil",
      use: "Natural fragrance, antioxidant, and helps even skin tone with long-term use ",
    },
    {
      title: "Zinc Oxide",
      use: "Prevents odor by inhibiting bacterial growth and absorbs moisture. ",
    },
    {
      title: "Kaolin Clay",
      use: "Absorbs sweat and gives a dry, fresh feel. ",
    },
    {
      title: "Corn Starch ",
      use: " Absorbs excess sweat. ",
    },
    {
      title: "Phenoxyethanol",
      use: "Preservative.",
    },
    { title: "Vitamin E", use: "Antioxidant that protects the skin. " },
    {
      title: "Peppermint Essential Oil",
      use: "Cooling effect, refreshing scent, and antibacterial properties. ",
    },
    {
      title: "Tea Tree Essential Oil",
      use: "Cooling effect, refreshing scent, and antibacterial properties. ",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center p-5 gap-3 ">
        <h1 className="text-3xl font-bold text-emerald-950">Deodorant Stick</h1>
        <p className="text-center">
          A natural deodorant that protects against unpleasant odor while
          moisturizing the skin and leaving a refreshing feel throughout the
          day.
        </p>
        <div className=" flex justify-center rounded-2xl">
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
                <div className="text-lg font-medium">- {item.title} :</div>
                <div className=" font-normal">{item.use}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
