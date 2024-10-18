import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
interface MonthlyChartProps {
  paymentData: {
    month: number;
    payment: number;
  }[];
}
export function MonthlyChart({ paymentData }: MonthlyChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Payment Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="pt-4 border-t">
          <ChartContainer
            config={{
              payment: {
                label: "Monthly Payment",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={paymentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="payment"
                  stroke="var(--color-payment)"
                  name="Monthly Payment"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
