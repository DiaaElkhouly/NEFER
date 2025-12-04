import ShinyText from "./shinyText";
export default function Header() {
  return (
    <div className=" flex justify-center">
      <div className=" bg-emerald-900 flex justify-around mt-3 p-4 rounded-2xl w-[85%] shadow-2xl">
        {/* logo */}
        <img className=" w-10 rounded-full" src="/images/logo.png" alt="" />
        <ShinyText
          text="CADENZA®"
          disabled={false}
          speed={3}
          className="custom-class text-white text-3xl font-bold"
        />
      </div>
    </div>
  );
}
