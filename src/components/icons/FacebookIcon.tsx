export const FacebookIcon = ({ className = '' }: { className?: string }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M22.46 0H1.54C.69 0 0 .69 0 1.54v20.92C0 23.31.69 24 1.54 24h11.24v-9.29H9.69v-3.62h3.09V8.41c0-3.05 1.87-4.71 4.58-4.71 1.3 0 2.42.1 2.75.14v3.18l-1.89.001c-1.48 0-1.77.7-1.77 1.74v2.28h3.55l-.46 3.62h-3.09V24h6.05c.85 0 1.54-.69 1.54-1.54V1.54C24 .69 23.31 0 22.46 0z" 
        fill="currentColor"
      />
    </svg>
  );
};
