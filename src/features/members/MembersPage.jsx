/**
 * Members page component
 */
import { members, galleryItems } from "../../data";
import CircularGallery from "../../components/Footer/CircularGallery";
import { IMAGE_PATHS } from "../../config/constants";

const MembersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-950 to-pink-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-block relative">
            <div className="absolute -inset-4 border border-yellow-500/30 rounded-3xl"></div>
            <h1 className="text-5xl font-bold text-center mb-4 nefer-font text-white relative px-8">
              OUR MEMBERS
            </h1>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-yellow-500/10 rounded-full blur-xl"></div>
            <img
              className="w-40 relative z-10"
              src={IMAGE_PATHS.LOGO_ASSET}
              alt="NEFER Logo"
            />
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2 bg-pink-800/50 border border-yellow-500/30 rounded-full">
            <h2 className="text-xl font-normal nefer-font text-yellow-400">
              Group Team
            </h2>
          </span>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {members.map((name, index) => (
            <div
              key={index}
              className="bg-pink-900/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20 text-center hover:border-yellow-500/50 transition-colors"
            >
              <span className="text-gray-200 font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Circular Gallery */}
      <div className="-mt-8 mb-4" style={{ height: "20rem" }}>
        <CircularGallery items={galleryItems} bend={1} textColor="#ffffff" />
      </div>
    </div>
  );
};

export default MembersPage;
