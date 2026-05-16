export const EnglishFlag = ({ className = "w-8 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#clip)"/>
    <rect width="60" height="30" fill="none" stroke="#FFF" strokeWidth="1"/>
  </svg>
);
