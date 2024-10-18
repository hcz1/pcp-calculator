import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { ChartContainer, ChartTooltipContent } from "./ui/chart";
import { useMemo } from "react";

interface CumulativeChartProps {
  paymentData: {
    month: number;
    payment: number;
  }[];
}

export function CumulativeChart({ paymentData }: CumulativeChartProps) {
  const cumulativeData = useMemo(() => {
    let cumulative = 0;
    return paymentData.map(({ month, payment }) => {
      cumulative += payment;
      return { month, cumulative: parseFloat(cumulative.toFixed(2)) };
    });
  }, [paymentData]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cumulative Payment Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="pt-4 border-t">
          <ChartContainer
            config={{
              cumulative: {
                label: "Cumulative Payment",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cumulativeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="cumulative"
                  stroke="var(--color-cumulative)"
                  fill="var(--color-cumulative-fill)"
                  name="Cumulative Payment"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
