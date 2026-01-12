import Image from "next/image";

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[700px] md:min-w-full bg-white shadow border-collapse text-sm">
        <thead className="bg-navyblue text-white">
          <tr>
            <th className="p-4 text-left">Platform</th>
            <th className="p-4">Best For</th>
            <th className="p-4">Trading Fees</th>
            <th className="p-4">Min Deposit</th>
            <th className="p-4">Mobile App</th>
            <th className="p-4">Key Features</th>
            <th className="p-4"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-300">
          <tr className="text-center">
            <td className="p-4 text-left">
              <Image
                src="/robinhood.png"
                alt="Robinhood"
                width={120}
                height={40}
              />
            </td>
            <td>Beginners</td>
            <td>$0</td>
            <td>$0</td>
            <td>Yes</td>
            <td>Easy to use</td>
            <td>
              <a
                className="text-navyblue font-medium hover:underline"
                href="https://robinhood.com/us/en/?wpsrc=Organic+Search&wpsn=www.google.com"
                target="_blank"
              >
                View Site
              </a>
            </td>
          </tr>

          <tr className="text-center">
            <td className="p-4 text-left">
              <Image
                src="/fidelity.png"
                alt="Fidelity"
                width={120}
                height={40}
              />
            </td>
            <td>Long-term investors</td>
            <td>$0</td>
            <td>$0</td>
            <td>Yes</td>
            <td>Strong research tools</td>
            <td>
              <a
                className="text-navyblue font-medium hover:underline"
                href="https://www.fidelity.com/"
                target="_blank"
              >
                View Site
              </a>
            </td>
          </tr>

          <tr className="text-center">
            <td className="p-4 text-left">
              <Image
                src="/charlesSchwab.jpeg"
                alt="Schwab"
                width={60}
                height={30}
              />
            </td>
            <td>Serious investors</td>
            <td>$0</td>
            <td>$0</td>
            <td>Yes</td>
            <td>Trusted U.S. broker</td>
            <td>
              <a
                className="text-navyblue font-medium hover:underline"
                href="https://www.schwab.com/"
                target="_blank"
              >
                View Site
              </a>
            </td>
          </tr>

          <tr className="text-center">
            <td className="p-4 text-left">
              <Image src="/webull.png" alt="Webull" width={120} height={40} />
            </td>
            <td>Active traders</td>
            <td>$0</td>
            <td>$0</td>
            <td>Yes</td>
            <td>Advanced charts</td>
            <td>
              <a
                className="text-navyblue font-medium hover:underline"
                href="https://www.webull.com/"
                target="_blank"
              >
                View Site
              </a>
            </td>
          </tr>

          <tr className="text-center">
            <td className="p-4 text-left">
              <Image
                src="/interactiveBrokers.png"
                alt="Interactive Brokers"
                width={180}
                height={80}
              />
            </td>
            <td>Professionals</td>
            <td>Low</td>
            <td>$0</td>
            <td>Yes</td>
            <td>Global market access</td>
            <td>
              <a
                className="text-navyblue font-medium hover:underline"
                href="https://www.interactivebrokers.com/"
                target="_blank"
              >
                View Site
              </a>
            </td>
          </tr>

          <tr className="text-center">
            <td className="p-4 text-left">
              <Image src="/etrade.png" alt="E*TRADE" width={120} height={40} />
            </td>
            <td>Intermediate investors</td>
            <td>$0</td>
            <td>$0</td>
            <td>Yes</td>
            <td>Education & tools</td>
            <td>
              <a
                className="text-navyblue font-medium hover:underline"
                href="https://us.etrade.com/home"
                target="_blank"
              >
                View Site
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
