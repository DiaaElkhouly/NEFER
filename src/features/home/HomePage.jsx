/**
 * Home page component
 */
import ProductCard from "../../components/body/ProductCard";
import ImageSlider from "../../components/body/imageSlider";
import { bodySplashProducts, bodyLotionProducts } from "../../data";
import { toSlug } from "../../utils";
import { IMAGE_PATHS } from "../../config/constants";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-950 to-pink-900">
      {/* Hero Section */}
      <div className="relative py-10 px-5">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title with decorative box */}
          <div className="inline-block relative mb-8">
            <div className="absolute -inset-4 border border-yellow-500/30 rounded-3xl"></div>
            <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-100 tracking-wide relative px-2">
              "Beauty carved in history,{" "}
              <span className="text-yellow-400">revived anew</span> in NEFER"
            </h1>
          </div>

          {/* Subtitle in styled box */}
          <div className="bg-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 inline-block">
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
              Experience the elegance of ancient Egyptian beauty traditions
            </p>
          </div>

          {/* Decorative Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-8"></div>
        </div>
      </div>

      {/* Featured Slider */}
      <div className="px-4 mb-16">
        <div className="max-w-4xl mx-auto bg-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
          <ImageSlider />
        </div>
      </div>

      {/* Products Section - Body Splash */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto bg-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-12 bg-yellow-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
              Body Splash
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
          </div>

          <div className="flex flex-row gap-6 items-center overflow-x-auto no-scrollbar py-4 px-2 -mx-4">
            {bodySplashProducts.map((f, index) => {
              const route = `/body-splash/${toSlug(f.title)}`;
              return (
                <ProductCard
                  key={f.title}
                  imageSrc={`./images/${f.img}`}
                  altText={f.title}
                  title={f.title}
                  category="Body Splash"
                  route={route}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section - Body Lotion */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto bg-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-12 bg-yellow-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
              Body Lotion
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
          </div>

          <div className="flex flex-row gap-6 items-center overflow-x-auto no-scrollbar py-4 px-2 -mx-4">
            {bodyLotionProducts.map((f, index) => {
              const route = `/body-lotion/${toSlug(f.title)}`;
              return (
                <ProductCard
                  key={f.title}
                  imageSrc={`./images/${f.img}`}
                  altText={f.title}
                  title={f.title}
                  category="Body Lotion"
                  route={route}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section - Lip Palm */}
      <section className="py-8 px-4 mb-12">
        <div className="max-w-7xl mx-auto bg-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-12 bg-yellow-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
              Lip Palm
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
          </div>

          <div className="flex justify-center">
            <ProductCard
              imageSrc={IMAGE_PATHS.LIP_PALM}
              altText="Lip Palm Product"
              title="LIP PALM"
              category="Lip Care"
              route="/lip-palm/lippalm"
              index={0}
            />
          </div>
        </div>
      </section>

      {/* Decorative Footer Divider */}
      <div className="flex justify-center items-center gap-4 pb-12">
        <div className="w-20 h-px bg-gradient-to-r from-transparent to-yellow-500"></div>
        <div className="text-yellow-500 text-2xl">𓀀</div>
        <div className="w-20 h-px bg-gradient-to-l from-transparent to-yellow-500"></div>
      </div>
    </div>
  );
};

export default HomePage;
