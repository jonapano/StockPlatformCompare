import Image from "next/image";
import { PlatformDetailsDialog } from "../components/PlatformDetailsDialog";
import { platforms } from "../data/platforms";

export default function ReviewsPage() {
  return (
    <main className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stock Trading Platform Reviews
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            In-depth overviews of the most popular U.S. stock trading platforms,
            including fees, features, and who each platform is best for.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                width={
                  platform.name === "Interactive Brokers"
                    ? 180
                    : platform.name === "Charles Schwab"
                    ? 50
                    : 120
                }
                height={40}
                className="mb-4"
              />

              <p className="text-sm text-gray-500 mb-2">
                Best for: {platform.bestFor}
              </p>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {platform.description}
              </p>

              <PlatformDetailsDialog platform={platform} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
