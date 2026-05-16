export const BritishFlag = ({ className = "w-8 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
    {/* Blue background */}
    <rect width="60" height="30" fill="#012169"/>
    
    {/* White cross */}
    <rect width="60" height="6" y="12" fill="#FFFFFF"/>
    <rect width="6" height="30" x="27" fill="#FFFFFF"/>
    
    {/* Red cross */}
    <rect width="60" height="4" y="13" fill="#C8102E"/>
    <rect width="4" height="30" x="28" fill="#C8102E"/>
    
    {/* Diagonal lines */}
    <polygon points="0,0 60,30 60,30 0,0" fill="none" stroke="#C8102E" strokeWidth="6"/>
    <polygon points="60,0 0,30 0,30 60,0" fill="none" stroke="#C8102E" strokeWidth="6"/>
    
    {/* White diagonal lines */}
    <polygon points="0,0 60,30 60,30 0,0" fill="none" stroke="#FFFFFF" strokeWidth="4"/>
    <polygon points="60,0 0,30 0,30 60,0" fill="none" stroke="#FFFFFF" strokeWidth="4"/>
  </svg>
);
