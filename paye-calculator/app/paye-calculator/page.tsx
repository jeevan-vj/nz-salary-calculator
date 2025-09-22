import { redirect } from 'next/navigation';

export default function PayeCalculatorPage() {
  // Redirect to main page to maintain current functionality
  // while providing the SEO-friendly URL structure
  redirect('/');
}
