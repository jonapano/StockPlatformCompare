export default function ContactPage() {
  return (
    <main className="bg-gray-50 px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact & Feedback
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have feedback, corrections, or suggestions about our platform
            comparisons? We’d love to hear from you.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navyblue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navyblue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navyblue"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-navyblue text-white py-3 rounded-md font-medium hover:bg-blue-900 transition"
            >
              Send Message
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-6 text-center">
            This website does not provide financial advice. Messages sent
            through this form are for general feedback only.
          </p>
        </div>
      </div>
    </main>
  );
}
