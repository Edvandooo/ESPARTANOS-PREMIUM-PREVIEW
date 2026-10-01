import React from 'react';

interface EspartanosLogoProps {
  className?: string;
}

export const EspartanosLogo: React.FC<EspartanosLogoProps> = ({ className = 'h-14 sm:h-16 w-auto' }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] select-none`}
      aria-label="Espartanos Hamburgueria Artesanal Premium Logo"
    >
      <defs>
        {/* Gold gradients for metallic ring & banner */}
        <linearGradient id="gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#cf9f4e" />
          <stop offset="25%" stopColor="#fae09c" />
          <stop offset="50%" stopColor="#c59239" />
          <stop offset="75%" stopColor="#f3d789" />
          <stop offset="100%" stopColor="#9a6e21" />
        </linearGradient>

        <linearGradient id="gold-dark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9b7026" />
          <stop offset="100%" stopColor="#5d4212" />
        </linearGradient>

        {/* Flame gradient */}
        <linearGradient id="flame-grad" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#d84315" />
          <stop offset="40%" stopColor="#f4511e" />
          <stop offset="70%" stopColor="#fb8c00" />
          <stop offset="100%" stopColor="#ffb74d" />
        </linearGradient>

        {/* Bun gradient */}
        <radialGradient id="bun-grad" cx="45%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#e59846" />
          <stop offset="70%" stopColor="#b4641d" />
          <stop offset="100%" stopColor="#7a3f11" />
        </radialGradient>

        {/* Patty gradient */}
        <linearGradient id="patty-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4e2c1d" />
          <stop offset="50%" stopColor="#2e150d" />
          <stop offset="100%" stopColor="#1a0b06" />
        </linearGradient>
      </defs>

      {/* 1. TOP FLAMES */}
      <g id="flames">
        {/* Outer flame */}
        <path
          d="M250 15 C265 60 300 70 305 105 C310 140 280 160 315 140 C340 125 350 90 355 60 C370 110 365 180 320 220 C345 200 360 170 350 225 C340 270 295 300 250 300 C205 300 160 270 150 225 C140 170 155 200 180 220 C135 180 130 110 145 60 C150 90 160 125 185 140 C220 160 190 140 195 105 C200 70 235 60 250 15 Z"
          fill="url(#flame-grad)"
          filter="drop-shadow(0 0 8px rgba(245,124,0,0.5))"
        />
        {/* Inner flame core */}
        <path
          d="M250 55 C258 85 280 92 284 116 C288 141 268 155 292 141 C310 130 316 106 320 85 C331 120 327 170 295 198 C275 185 285 165 278 150 C270 170 255 185 250 210 C245 185 230 170 222 150 C215 165 225 185 205 198 C173 170 169 120 180 85 C184 106 190 130 208 141 C232 155 212 141 216 116 C220 92 242 85 250 55 Z"
          fill="#ffe082"
          opacity="0.85"
        />
      </g>

      {/* 2. CIRCULAR METALLIC EMBLEM RING */}
      {/* Top arc ring */}
      <path
        d="M 125 240 A 155 155 0 0 1 375 240"
        stroke="url(#gold-metal)"
        strokeWidth="28"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 130 240 A 150 150 0 0 1 370 240"
        stroke="url(#gold-dark)"
        strokeWidth="2"
        fill="none"
      />

      {/* Bottom arc ring */}
      <path
        d="M 140 310 A 155 155 0 0 0 360 310"
        stroke="url(#gold-metal)"
        strokeWidth="30"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 145 310 A 150 150 0 0 0 355 310"
        stroke="url(#gold-dark)"
        strokeWidth="2"
        fill="none"
      />

      {/* Curved texts along top arc */}
      <path id="left-arc" d="M 120 225 A 148 148 0 0 1 200 130" fill="none" />
      <text fill="#ffffff" fontSize="12" fontWeight="bold" letterSpacing="3">
        <textPath href="#left-arc" startOffset="5%">HAMBURGUERIA</textPath>
      </text>

      <path id="right-arc" d="M 300 130 A 148 148 0 0 1 380 225" fill="none" />
      <text fill="#ffffff" fontSize="12" fontWeight="bold" letterSpacing="3">
        <textPath href="#right-arc" startOffset="12%">ARTESANAL</textPath>
      </text>

      {/* 3. BURGER ILLUSTRATION IN CENTER */}
      <g id="burger-art" transform="translate(170, 115) scale(0.64)">
        {/* Top Bun */}
        <path
          d="M30 110 C30 35 220 35 220 110 C220 115 30 115 30 110 Z"
          fill="url(#bun-grad)"
          stroke="#422108"
          strokeWidth="4"
        />
        {/* Sesame seeds */}
        <g fill="#fae19c" opacity="0.9">
          <ellipse cx="80" cy="65" rx="3.5" ry="2" transform="rotate(-15 80 65)" />
          <ellipse cx="120" cy="52" rx="3.5" ry="2" transform="rotate(10 120 52)" />
          <ellipse cx="160" cy="68" rx="3.5" ry="2" transform="rotate(25 160 68)" />
          <ellipse cx="95" cy="85" rx="3.5" ry="2" transform="rotate(-5 95 85)" />
          <ellipse cx="140" cy="82" rx="3.5" ry="2" transform="rotate(15 140 82)" />
          <ellipse cx="180" cy="90" rx="3.5" ry="2" transform="rotate(-20 180 90)" />
        </g>
        {/* Melted Cheese dripping */}
        <path
          d="M25 110 Q 50 115 75 110 Q 90 135 110 112 Q 140 140 165 112 Q 195 130 225 110 L 225 120 Q 185 135 150 122 Q 120 145 95 124 Q 60 138 25 118 Z"
          fill="#ffca28"
          stroke="#e65100"
          strokeWidth="2.5"
        />
        {/* Tomato & Lettuce ruffles */}
        <path
          d="M35 125 C45 138 65 122 80 135 C100 120 120 138 140 124 C160 136 185 122 205 135 L 215 125 C190 120 170 122 150 118 C125 122 105 118 80 122 C60 118 45 122 35 125 Z"
          fill="#66bb6a"
          stroke="#2e7d32"
          strokeWidth="2.5"
        />
        <path
          d="M45 128 Q 125 140 205 128 L 200 138 Q 125 150 50 138 Z"
          fill="#e53935"
        />
        {/* Grilled Patty */}
        <path
          d="M20 135 C20 130 230 130 230 135 C232 165 18 165 20 135 Z"
          fill="url(#patty-grad)"
          stroke="#110502"
          strokeWidth="4"
        />
        {/* Grill marks */}
        <path
          d="M50 138 L85 158 M95 138 L130 158 M140 138 L175 158 M185 138 L210 154"
          stroke="#120502"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Bottom Bun */}
        <path
          d="M32 155 C32 155 218 155 218 155 C215 185 35 185 32 155 Z"
          fill="url(#bun-grad)"
          stroke="#422108"
          strokeWidth="4"
        />
      </g>

      {/* 4. MAIN BANNER & "ESPARTANOS" BRAND NAME */}
      {/* Horizontal metallic bar borders */}
      <rect x="50" y="246" width="400" height="7" rx="3.5" fill="url(#gold-metal)" />
      <rect x="50" y="315" width="400" height="7" rx="3.5" fill="url(#gold-metal)" />

      {/* "ESPARTANOS" Text with 3D beveled gold look */}
      <g id="espartanos-text">
        {/* Shadow base */}
        <text
          x="250"
          y="300"
          textAnchor="middle"
          fill="#2a1805"
          fontSize="48"
          fontWeight="900"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          letterSpacing="4"
          stroke="#3d2609"
          strokeWidth="8"
          strokeLinejoin="round"
        >
          ESPARTANOS
        </text>
        {/* Gold metal face */}
        <text
          x="250"
          y="298"
          textAnchor="middle"
          fill="url(#gold-metal)"
          fontSize="48"
          fontWeight="900"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          letterSpacing="4"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        >
          ESPARTANOS
        </text>
      </g>

      {/* 5. THREE ORANGE STARS */}
      <g id="stars" fill="#f57c00" stroke="#ffb74d" strokeWidth="1">
        {/* Left star */}
        <polygon points="200,332 203,340 212,340 205,345 207,353 200,348 193,353 195,345 188,340 197,340" />
        {/* Center star (slightly larger) */}
        <polygon points="250,336 253.5,345.5 264,345.5 255.5,351.5 258,361 250,355 242,361 244.5,351.5 236,345.5 246.5,345.5" />
        {/* Right star */}
        <polygon points="300,332 303,340 312,340 305,345 307,353 300,348 293,353 295,345 288,340 297,340" />
      </g>

      {/* 6. BOTTOM "PREMIUM" TEXT */}
      <path id="bottom-premium-arc" d="M 170 380 A 130 130 0 0 0 330 380" fill="none" />
      <text
        fill="#ffffff"
        fontSize="24"
        fontWeight="900"
        letterSpacing="8"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
      >
        <textPath href="#bottom-premium-arc" startOffset="18%">
          PREMIUM
        </textPath>
      </text>
    </svg>
  );
};
