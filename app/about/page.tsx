import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">About Car PCP Loans</h1>
      <p className="mb-8">
        Welcome to our comprehensive guide on Personal Contract Purchase (PCP)
        car loans. We&apos;re here to help you understand this popular car
        financing option.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>What is a PCP Car Loan?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              A Personal Contract Purchase (PCP) is a flexible car finance
              option that allows you to drive a new car with lower monthly
              payments compared to traditional car loans. It&apos;s based on the
              car&apos;s Guaranteed Minimum Future Value (GMFV).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How PCP Works</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>You pay an initial deposit</li>
              <li>
                Make fixed monthly payments for an agreed term (usually 24-48
                months)
              </li>
              <li>
                At the end of the term, you have three options:
                <ul className="ml-6 mt-2">
                  <li>Pay the final balloon payment to own the car</li>
                  <li>Return the car with no further payments</li>
                  <li>Part-exchange for a new car on a new PCP deal</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Benefits of PCP</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Lower monthly payments compared to hire purchase</li>
              <li>Flexibility at the end of the agreement</li>
              <li>Ability to drive a newer, higher-spec car</li>
              <li>Protection against unexpected depreciation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Considerations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              While PCP offers many advantages, it&apos;s important to consider:
            </p>
            <ul className="mt-2">
              <li>Mileage limits and potential excess mileage charges</li>
              <li>The need to maintain the car in good condition</li>
              <li>
                You don&apos;t own the car unless you make the final payment
              </li>
              <li>
                The total cost may be higher than other finance options if you
                decide to keep the car
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Is PCP Right for You?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>PCP can be an excellent option if you:</p>
            <ul className="mt-2">
              <li>Want lower monthly payments</li>
              <li>Enjoy driving a new car every few years</li>
              <li>Are unsure about long-term car ownership</li>
              <li>Have a predictable annual mileage</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8">
        For more information on PCP car loans and to discuss your options,
        please contact our expert finance team.
      </p>
    </div>
  );
}
