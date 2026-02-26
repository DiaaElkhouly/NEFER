/**
 * About page component
 */
import { IMAGE_PATHS, APP_NAME } from "../../config/constants";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-950 to-pink-900 text-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title with decorative elements */}
        <div className="text-center mb-10">
          <div className="inline-block relative">
            <div className="absolute -inset-4 border border-yellow-500/30 rounded-3xl"></div>
            <h1 className="text-5xl font-bold text-center mb-8 nefer-font text-white relative px-8">
              About {APP_NAME}
            </h1>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
        </div>

        {/* Logo Image */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-yellow-500/10 rounded-full blur-xl"></div>
            <img 
              className="w-40 relative z-10" 
              src={IMAGE_PATHS.LOGO_ASSET} 
              alt={`${APP_NAME} Logo`} 
            />
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-6">
          <span className="inline-block px-6 py-2 bg-pink-800/50 border border-yellow-500/30 rounded-full">
            <h2 className="text-xl font-normal nefer-font text-yellow-400">
              The Face of Nefertiti
            </h2>
          </span>
        </div>

        {/* Main Content */}
        <div className="bg-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
          <p className="text-lg text-gray-200 leading-relaxed text-center italic">
            "At the heart of the logo stands the timeless face of Queen Nefertiti,
            a symbol globally associated with elegance, grace, and beauty. Her
            presence reflects both the Egyptian origin of the brand and the
            meaning behind her name—'the beautiful one has come.' It embodies
            {APP_NAME}'s promise of refined, enduring beauty."
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-500"></div>
            <div className="w-3 h-3 bg-yellow-500 rotate-45"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-500"></div>
          </div>

          <p className="text-lg text-gray-200 leading-relaxed text-center">
            The Cartouche (Oval Shape) represents protection and royal authority,
            connecting our products to the ancient Egyptian tradition of beauty
            and elegance that has stood the test of time.
          </p>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-yellow-500/50"></div>
            <div className="text-yellow-500 text-2xl">𓀀</div>
            <div className="w-8 h-px bg-yellow-500/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
