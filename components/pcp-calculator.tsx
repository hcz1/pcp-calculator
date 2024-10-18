"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { MonthlyChart } from "./monthly-chart";
import { AnnualChart } from "./annual-chart";
import { CumulativeChart } from "./cumulative-chart";
import { PaymentDistributionChart } from "./payment-distribution-chart";
import { cn } from "@/lib/utils";
interface PcpCalculatorProps {
  className?: string;
}
export function PcpCalculator({ className }: PcpCalculatorProps) {
  const [carPrice, setCarPrice] = useState(parseFloat("20000"));
  const [customerDeposit, setCustomerDeposit] = useState(parseFloat("2500"));
  const [dealerContribution, setDealerContribution] = useState(
    parseFloat("1000")
  );
  const [finalPayment, setFinalPayment] = useState(parseFloat("1000"));
  const [lengthOfFinance, setLengthOfFinance] = useState(36);
  const [mileageAgreement, setMileageAgreement] = useState(10000);
  const [apr, setApr] = useState(7);

  const amountToBeFinanced = useMemo(() => {
    return carPrice - customerDeposit - dealerContribution;
  }, [carPrice, customerDeposit, dealerContribution]);

  const monthlyPayment = useMemo(() => {
    const monthlyInterestRate = apr / 100 / 12;
    const numberOfPayments = lengthOfFinance;

    if (monthlyInterestRate === 0) {
      return (amountToBeFinanced - finalPayment) / numberOfPayments;
    }

    const payment =
      (monthlyInterestRate *
        (amountToBeFinanced -
          finalPayment *
            Math.pow(1 + monthlyInterestRate, -numberOfPayments))) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return payment;
  }, [amountToBeFinanced, finalPayment, lengthOfFinance, apr]);

  const paymentData = useMemo(() => {
    return Array.from({ length: lengthOfFinance }, (_, i) => ({
      month: i + 1,
      payment: monthlyPayment,
    }));
  }, [lengthOfFinance, monthlyPayment]);

  const totalPayments = useMemo(() => {
    return monthlyPayment * lengthOfFinance;
  }, [monthlyPayment, lengthOfFinance]);

  const totalAmountPaid = useMemo(() => {
    return totalPayments + finalPayment + customerDeposit;
  }, [totalPayments, finalPayment, customerDeposit]);

  const totalInterestPaid = useMemo(() => {
    return totalAmountPaid - carPrice;
  }, [totalAmountPaid, carPrice]);

  return (
    <Card className={cn("w-full mx-auto", className)}>
      <CardHeader>
        <CardTitle>PCP Car Loan Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <LabeledInput
            label="Car Price"
            value={carPrice}
            onChange={(e) => setCarPrice(parseFloat(e.target.value) || 0)}
            placeholder="i.e. £20,000"
          />
          <LabeledInput
            label="Customer Deposit"
            value={customerDeposit}
            onChange={(e) =>
              setCustomerDeposit(parseFloat(e.target.value) || 0)
            }
            placeholder="i.e. £2,500"
          />
          <LabeledInput
            label="Dealer Contribution"
            value={dealerContribution}
            onChange={(e) =>
              setDealerContribution(parseFloat(e.target.value) || 0)
            }
            placeholder="i.e. £1,000"
          />
          <LabeledInput
            label="Final Payment"
            value={finalPayment}
            onChange={(e) => setFinalPayment(parseFloat(e.target.value) || 0)}
            placeholder="i.e. £1,000"
          />
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center mb-2">
            <Label className="text-base font-semibold">
              Amount to be financed
            </Label>
            <span className="text-2xl font-bold">
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(amountToBeFinanced)}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <Label className="text-base font-semibold">
              Estimated Monthly Payment
            </Label>
            <span className="text-2xl font-bold">
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(monthlyPayment)}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <Label className="text-base font-semibold">Total Amount Paid</Label>
            <span className="text-2xl font-bold">
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(totalAmountPaid)}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <Label className="text-base font-semibold">
              Total Interest Paid
            </Label>
            <span className="text-2xl font-bold">
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(totalInterestPaid)}
            </span>
          </div>
        </div>

        <LabeledSlider
          label="Length of finance"
          value={lengthOfFinance}
          onChange={(value) => setLengthOfFinance(value[0])}
          min={12}
          max={48}
          step={1}
          formatValue={(value) => `${value} months`}
        />

        <LabeledSlider
          label="Mileage agreement"
          value={mileageAgreement}
          onChange={(value) => setMileageAgreement(value[0])}
          min={5000}
          max={30000}
          step={1000}
          formatValue={(value) => `${value} miles`}
        />

        <LabeledSlider
          label="APR %"
          value={apr}
          onChange={(value) => setApr(value[0])}
          min={0}
          max={20}
          step={0.1}
          formatValue={(value) => `${value}%`}
        />
        <MonthlyChart paymentData={paymentData} />
        <AnnualChart paymentData={paymentData} />
        <CumulativeChart paymentData={paymentData} />
        <PaymentDistributionChart
          amountToBeFinanced={amountToBeFinanced}
          finalPayment={finalPayment}
          totalPayments={totalPayments}
        />
      </CardContent>
    </Card>
  );
}

function LabeledInput({
  label,
  ...props
}: {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center space-x-2">
        <span>{label}</span>
        <InfoCircledIcon className="h-4 w-4 text-muted-foreground" />
      </Label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          £
        </span>
        <Input className="pl-7" type="number" {...props} />
      </div>
    </div>
  );
}

function LabeledSlider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  formatValue,
}: {
  label: string;
  value: number;
  onChange: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
  formatValue: (value: number) => string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label className="flex items-center space-x-2">
          <span>{label}</span>
          <InfoCircledIcon className="h-4 w-4 text-muted-foreground" />
        </Label>
        <span className="font-semibold">{formatValue(value)}</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={onChange}
        min={min}
        max={max}
        step={step}
        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  );
}
