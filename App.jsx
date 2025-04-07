import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WalletApp() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-6">ChronoByte Wallet</h1>

      <Card className="max-w-md mx-auto">
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Deposit (INR to CHB)</label>
            <Input placeholder="Enter INR amount" type="number" />
            <Button className="mt-2 w-full">Convert to CHB</Button>
          </div>

          <div>
            <label className="block text-sm font-medium">Buy CHB</label>
            <Input placeholder="Enter CHB amount" type="number" />
            <Button className="mt-2 w-full">Buy Now</Button>
          </div>

          <div>
            <label className="block text-sm font-medium">Sell CHB</label>
            <Input placeholder="Enter CHB to Sell" type="number" />
            <Button className="mt-2 w-full">Sell Now</Button>
          </div>
        </CardContent>
      </Card>

      <p className="text-center mt-6 text-xs text-gray-500">
        Secure. Transparent. Controlled Supply. © ChronoByte 2025
      </p>
    </div>
  );
}
