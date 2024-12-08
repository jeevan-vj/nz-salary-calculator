
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full py-6 bg-background border-b"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary">
          NZ Salary Calculator
        </h1>
        <p className="text-muted-foreground">
          Calculate your take-home pay including PAYE, ACC, and KiwiSaver
        </p>
      </div>
    </motion.header>
  );
}