export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-12 py-6 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} StockPlatformCompare. All rights
          reserved.
        </p>
        <p className="mt-2">
          Disclaimer: This site is for informational purposes only and does not
          provide financial advice. Investing involves risk.
        </p>
      </div>
    </footer>
  );
}
