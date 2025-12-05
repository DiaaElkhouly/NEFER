import ShinyText from "./shinyText";
export default function Header() {
  return (
    <div className=" flex justify-center">
      <div className=" bg-pink-950 flex justify-around mt-3 p-4 rounded-2xl w-[85%] shadow-2xl">
        {/* logo */}
        <img className=" w-8 " src="./images/logo-2.png" alt="" />
        <ShinyText
          text="NEFER®"
          disabled={false}
          speed={3}
          className="custom-class text-white text-5xl font-bold"
        />
      </div>
    </div>
  );
}
