import { PcpCalculator } from "@/components/pcp-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto">
      {/* Full-width banner image */}
      <div className="w-full">
        <Image
          src="/images/pcp-car-loan-calculator.png"
          alt="Car PCP Loan Calculator"
          width={1920}
          height={400}
          className="w-full h-[300px] object-cover"
        />
      </div>

      <div className="container mx-auto py-6 px-4 sm:px-0">
        <div className="flex flex-col md:flex-row gap-4">
          <PcpCalculator className="w-full md:w-1/2" />

          <Card className="w-full md:w-1/2 h-fit">
            <CardHeader>
              <CardTitle>
                Understanding PCP (Personal Contract Purchase)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Personal Contract Purchase (PCP) is a popular financing option
                for new car buyers, but it can be a bit complex. Our calculator
                simplifies the process by allowing you to input your details and
                get an estimate of what your monthly PCP payments might be.
              </p>
              <p className="mt-4">
                Please note that this is an estimate based on the numbers you
                provide. Be sure to confirm the &apos;Final Payment&apos; with
                your dealer, as it typically ranges between 45% and 55% of the
                car&apos;s Recommended Retail Price (RRP).
              </p>
              <p className="mt-4">
                For more information on other car financing options, check out
                our comprehensive car finance guide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
