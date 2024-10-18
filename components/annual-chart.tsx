import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { ChartContainer, ChartTooltipContent } from "./ui/chart";
import { useMemo } from "react";

interface AnnualChartProps {
  paymentData: {
    month: number;
    payment: number;
  }[];
}

export function AnnualChart({ paymentData }: AnnualChartProps) {
  const annualData = useMemo(() => {
    const dataMap: { [key: number]: number } = {};
    paymentData.forEach(({ month, payment }) => {
      const year = Math.ceil(month / 12);
      dataMap[year] = (dataMap[year] || 0) + payment;
    });
    return Object.entries(dataMap).map(([year, totalPayment]) => ({
      year: `Year ${year}`,
      totalPayment: parseFloat(totalPayment.toFixed(2)),
    }));
  }, [paymentData]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Annual Payment Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="pt-4 border-t">
          <ChartContainer
            config={{
              totalPayment: {
                label: "Total Annual Payment",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={annualData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="totalPayment"
                  fill="var(--color-annual)"
                  name="Total Annual Payment"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
