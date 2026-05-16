export default function EnglishFlag() {
  return (
    <svg viewBox="0 0 900 600" className="w-full h-full">
      {/* Blue background */}
      <rect width="900" height="600" fill="#012169" />
      
      {/* White cross */}
      <rect x="0" y="250" width="900" height="100" fill="#FFFFFF" />
      <rect x="400" y="0" width="100" height="600" fill="#FFFFFF" />
      
      {/* Red cross */}
      <rect x="0" y="270" width="900" height="60" fill="#C8102E" />
      <rect x="420" y="0" width="60" height="600" fill="#C8102E" />
      
      {/* Diagonal crosses */}
      <g stroke="#C8102E" strokeWidth="40" fill="none">
        <line x1="0" y1="0" x2="900" y2="600" />
        <line x1="900" y1="0" x2="0" y2="600" />
      </g>
      <g stroke="#FFFFFF" strokeWidth="20" fill="none">
        <line x1="0" y1="0" x2="900" y2="600" />
        <line x1="900" y1="0" x2="0" y2="600" />
      </g>
    </svg>
  );
}
