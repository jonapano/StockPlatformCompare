export default function AboutPage() {
  return (
    <main className="bg-gray-50 px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About StockPlatformCompare
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Helping investors make informed decisions by comparing the most
            popular U.S. stock trading platforms.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              StockPlatformCompare is an independent comparison website created
              to help users understand the differences between major U.S. stock
              trading platforms. Our goal is to present clear, unbiased
              information so users can choose a platform that fits their needs
              and experience level.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              How We Research Platforms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We analyze each platform using publicly available information and
              official broker documentation. Our comparisons focus on:
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Trading fees and commissions</li>
              <li>Minimum deposit requirements</li>
              <li>Available investment products</li>
              <li>Ease of use and mobile experience</li>
              <li>Educational tools and research features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Transparency & Independence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are not affiliated with any broker listed on this website. All
              content is provided for informational purposes only and should not
              be considered financial advice. Platform details may change over
              time, so users should always verify information directly with the
              broker.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
