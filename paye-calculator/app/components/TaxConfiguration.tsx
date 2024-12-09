import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";

// Animation variants
const tabContentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function TaxConfiguration() {
  return (
    <Tabs defaultValue="general" className="w-full">
      <div className="relative w-full">
        <div className="overflow-x-auto scrollbar-hide">
          <TabsList className="w-max border-b">
            <TabsTrigger value="general" className="min-w-[100px]">General</TabsTrigger>
            <TabsTrigger value="paye" className="min-w-[100px]">PAYE</TabsTrigger>
            <TabsTrigger value="acc" className="min-w-[100px]">ACC</TabsTrigger>
            <TabsTrigger value="studentLoan" className="min-w-[100px]">Student Loan</TabsTrigger>
            <TabsTrigger value="secondary" className="min-w-[100px]">Secondary Tax</TabsTrigger>
          </TabsList>
        </div>
      </div>

      <TabsContent value="general" className="space-y-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={tabContentVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid gap-4"
        >
          <div className="space-y-2">
            <Label>Standard Hours per Week</Label>
            <Input type="number" placeholder="40" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="overtime" />
            <Label htmlFor="overtime">Enable Overtime Calculations</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="holiday-pay" />
            <Label htmlFor="holiday-pay">Add Holiday Pay (Casual Workers)</Label>
          </div>
          <div className="space-y-2">
            <Label>Pay Rise Percentage</Label>
            <Input type="number" placeholder="0" />
          </div>
        </motion.div>
      </TabsContent>

      <TabsContent value="paye" className="space-y-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={tabContentVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid gap-4"
        >
          <h3 className="text-lg font-semibold">Tax Brackets (2023-2024)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>$0 - $14,000</Label>
              <div className="text-sm text-muted-foreground">Tax Rate: 10.5%</div>
            </div>
            <div>
              <Label>$14,001 - $48,000</Label>
              <div className="text-sm text-muted-foreground">Tax Rate: 17.5%</div>
            </div>
            <div>
              <Label>$48,001 - $70,000</Label>
              <div className="text-sm text-muted-foreground">Tax Rate: 30%</div>
            </div>
            <div>
              <Label>$70,001 - $180,000</Label>
              <div className="text-sm text-muted-foreground">Tax Rate: 33%</div>
            </div>
            <div>
              <Label>$180,001+</Label>
              <div className="text-sm text-muted-foreground">Tax Rate: 39%</div>
            </div>
          </div>
        </motion.div>
      </TabsContent>

      <TabsContent value="acc" className="space-y-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={tabContentVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <Label>ACC Levy Rate</Label>
            <div className="text-sm text-muted-foreground">Current rate: 1.39%</div>
          </div>
        </motion.div>
      </TabsContent>

      <TabsContent value="studentLoan" className="space-y-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={tabContentVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <Label>Student Loan Repayment Rate</Label>
            <div className="text-sm text-muted-foreground">Current rate: 12%</div>
            <div className="text-sm text-muted-foreground">
              Applies to income over $20,280 per year
            </div>
          </div>
        </motion.div>
      </TabsContent>

      <TabsContent value="secondary" className="space-y-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={tabContentVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <Label>Secondary Tax Rate</Label>
            <select className="w-full p-2 border rounded">
              <option value="0.105">10.5%</option>
              <option value="0.175">17.5%</option>
              <option value="0.30">30%</option>
              <option value="0.33">33%</option>
              <option value="0.39">39%</option>
            </select>
          </div>
        </motion.div>
      </TabsContent>
    </Tabs>
  );
}