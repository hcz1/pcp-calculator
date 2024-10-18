import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { ChartContainer, ChartTooltipContent } from "./ui/chart";
import { useMemo } from "react";

interface PaymentDistributionChartProps {
  amountToBeFinanced: number;
  finalPayment: number;
  totalPayments: number;
}

export function PaymentDistributionChart({
  amountToBeFinanced,
  finalPayment,
  totalPayments,
}: PaymentDistributionChartProps) {
  const data = useMemo(
    () => [
      { name: "Amount Financed", value: amountToBeFinanced },
      { name: "Final Payment", value: finalPayment },
      { name: "Total Payments", value: totalPayments },
    ],
    [amountToBeFinanced, finalPayment, totalPayments]
  );

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Distribution Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[300px]" config={{}}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
