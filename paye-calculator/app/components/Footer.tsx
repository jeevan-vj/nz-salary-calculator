import { motion } from 'framer-motion';

export default function Footer() {
  return (
   
      <div className="flex items-center justify-center gap-1">
        Built with{' '}
        <span
          className="text-red-500 inline-block"
          style={{ 
            animation: 'heartbeat 2s infinite' 
          }}
        >
          ♥
        </span>
        {' '}by{' '}
        <a 
          href="https://iamjeevan.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-medium hover:text-primary transition-colors underline-offset-4 hover:underline"
        >
          iamjeevan.com
        </a>
      </div>
  );
}