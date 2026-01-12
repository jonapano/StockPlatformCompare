"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Platform = {
  name: string;
  logo: string;
  bestFor: string;
  fees: string;
  minDeposit: string;
  rating: string;
  description: string;
  pros: string[];
  cons: string[];
};

export function PlatformDetailsDialog({ platform }: { platform: Platform }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="text-navyblue font-medium hover:underline cursor-pointer">
          Read full review →
        </a>
      </DialogTrigger>

      <DialogContent className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[700px] lg:max-w-[900px] p-6 sm:p-12 overflow-auto">
        <DialogHeader>
          <DialogTitle>
            <Image
              src={platform.logo}
              alt={platform.name}
              width={
                platform.name === "Interactive Brokers"
                  ? 230
                  : platform.name === "Charles Schwab"
                  ? 70
                  : 170
              }
              height={40}
            />
          </DialogTitle>
        </DialogHeader>

        <p className="text-gray-700 mt-4 text-sm sm:text-base">
          {platform.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm sm:text-base">
          <p>
            <strong>Best for:</strong> {platform.bestFor}
          </p>
          <p>
            <strong>Trading fees:</strong> {platform.fees}
          </p>
          <p>
            <strong>Minimum deposit:</strong> {platform.minDeposit}
          </p>
          <p>
            <strong>Rating:</strong> {platform.rating}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="font-semibold mb-2">Pros</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              {platform.pros.map((pro) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Cons</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
              {platform.cons.map((con) => (
                <li key={con}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
