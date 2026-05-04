import{a3 as Se,aD as Pt,d as kt,p as Ae,f as pt,h as ft,i as st,u as He,n as Xe,O as _t,k as Q,o as wt,_ as $t,aE as Tt,L as Rt,a1 as gt,Q as Vt,af as Nt,Z as at,a7 as pe,j as Ot,Y as lt,aF as ct}from"./index-BXOpYEjI.js";const le=30,te=15,Dt=5,Ht=10,_e=10;function dt(t,o){return{width:(o-1)*le+te*2,height:(t-1)*le+te*2}}function vt(t,o){const s=(o-1)*le+te*2,r=(t-1)*le+te*2;return[`<svg width="100%" viewBox="0 0 ${s} ${r}" fill="none" xmlns="http://www.w3.org/2000/svg">`,Ft(s,r),Wt(s,r),Lt(t,o,s,r),Ut(t,o),zt(t,o),"</svg>"].join(`

`)}function Ft(t,o){return`<rect id="board" width="${t}" height="${o}" rx="${_e}" ry="${_e}" fill="#F5DEB3"/>`}function Wt(t,o){const s=Se();return[`
    <defs>
      <clipPath id="board-clip-${s}">
        <rect width="${t}" height="${o}" rx="${_e}" ry="${_e}" />
      </clipPath>
    </defs>`,`<rect
      class="texture-board"
      width="${t}" height="${o}"
      clip-path="url(#board-clip-${s})"
      fill="var(--ft-board-fill, #F5DEB3)" 
      filter="url(#wood)" 
      style="pointer-events: none; mix-blend-mode: overlay;"
    />`].join(`

`)}function Lt(t,o,s,r){const a=[];for(let l=0;l<t;l++){const n=l*le+te;a.push(`  <line x1="${te}" y1="${n}" x2="${s-te}" y2="${n}" stroke="#DFBC7A"/>`)}for(let l=0;l<o;l++){const n=l*le+te;a.push(`  <line x1="${n}" y1="${te}" x2="${n}" y2="${r-te}" stroke="#DFBC7A"/>`)}for(let l=0;l<t-1;l++)for(let n=0;n<o;n++){if((l+n)%2!==0)continue;const h=n*le+te,d=l*le+te;if(n+1<o){const u=(n+1)*le+te,f=(l+1)*le+te;a.push(`  <line x1="${h}" y1="${d}" x2="${u}" y2="${f}" stroke="#DFBC7A"/>`)}if(n-1>=0){const u=(n-1)*le+te,f=(l+1)*le+te;a.push(`  <line x1="${h}" y1="${d}" x2="${u}" y2="${f}" stroke="#DFBC7A"/>`)}}return`<g id="union-intersections">
${a.join(`
`)}
</g>`}function Ut(t,o){const s=[];let r=0;for(let a=0;a<t;a++)for(let l=0;l<o;l++){const n=l*le+te,h=a*le+te,d=r===0?"c":`c_${r+1}`;s.push(`  <circle id="${d}" cx="${n}" cy="${h}" r="${Dt}" fill="#DFBC7A"/>`),r++}return`<g id="nodes">
${s.join(`
`)}
</g>`}function zt(t,o){const s=[];for(let r=0;r<t;r++)for(let a=0;a<o;a++){const l=r*o+a,n=a*le+te,h=r*le+te;s.push(`  <circle id="sp${l}" cx="${n}" cy="${h}" r="${Ht}" fill="transparent"/>`)}return`<g id="stone-placeholders">
${s.join(`
`)}
</g>`}const Gt=`
<svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M20 20 L80 50 L20 80 L38 50 Z"
        fill="currentColor"
    />
</svg>`,bt=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <defs>
    
    <radialGradient id="ws" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="var(--ft-w-stop-base, #e5dcc5)"/>   
      <stop offset="68%"  stop-color="var(--ft-w-stop-mid, #f3ece0)"/>   
      <stop offset="85%"  stop-color="var(--ft-w-stop-rim, #c4b9a3)"/>   
      <stop offset="100%" stop-color="var(--ft-w-stop-edge, #ffffff)"/>   
    </radialGradient>

    
    <radialGradient id="bs" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="var(--ft-b-stop-base, #4a3b30)"/>   
      <stop offset="68%"  stop-color="var(--ft-b-stop-mid, #2c241d)"/>   
      <stop offset="85%"  stop-color="var(--ft-b-stop-rim, #050302)"/>   
      <stop offset="100%" stop-color="var(--ft-b-stop-edge, #7a7065)"/>   
    </radialGradient>

    
    <linearGradient id="wss" x1="0" y1="0" x2="1" y2="1" style="--shine: var(--ft-w-inner-stroke-shine, var(--ft-w-inner-stroke, rgba(255, 255, 255, 0.9)))">
      <stop offset="0%" stop-color="var(--shine)" /> 
      <stop offset="15%" stop-color="var(--shine)" /> 
      <stop offset="25%" stop-color="var(--ft-w-inner-stroke, rgba(255, 255, 255, 0.9))" /> 
      <stop offset="75%" stop-color="var(--ft-w-inner-stroke, rgba(255, 255, 255, 0.9))" /> 
      <stop offset="85%" stop-color="var(--shine)" /> 
      <stop offset="100%" stop-color="var(--shine)" /> 
    </linearGradient>

    
    <linearGradient id="bss" x1="0" y1="0" x2="1" y2="1" style="--shine: var(--ft-b-inner-stroke-shine, var(--ft-b-inner-stroke, rgba(255, 255, 255, 0.25)))">
      <stop offset="0%" stop-color="var(--shine)" /> 
      <stop offset="15%" stop-color="var(--shine)" /> 
      <stop offset="25%" stop-color="var(--ft-b-inner-stroke, rgba(255, 255, 255, 0.25))" /> 
      <stop offset="75%" stop-color="var(--ft-b-inner-stroke, rgba(255, 255, 255, 0.25))" /> 
      <stop offset="85%" stop-color="var(--shine)" /> 
      <stop offset="100%" stop-color="var(--shine)" /> 
    </linearGradient>

    
    <filter id="shadow">
      <feDropShadow dx="0" dy="0" stdDeviation="1" flood-color="rgba(12, 10, 9, 0.65)" />
    </filter>
  </defs>

  
  <g id="white" filter="url(#shadow)">
    <circle cx="8" cy="8" r="7" fill="url(#ws)" stroke="var(--ft-w-outer-stroke, #8a7d65)" stroke-width="0.5" />
    <circle cx="8" cy="8" r="5.25" fill="none" stroke="url(#wss)" stroke-width="0.3" />
  </g>
  
  
  <g id="black" filter="url(#shadow)">
    <circle cx="24" cy="24" r="7" fill="url(#bs)" stroke="var(--ft-b-outer-stroke, black)" stroke-width="0.5" />
    <circle cx="24" cy="24" r="5.25" fill="none" stroke="url(#bss)" stroke-width="0.7" />
  </g>
</svg>`,qt=`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="10" cy="10" r="9" />
</svg>
`,et=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#shadow)">
    <circle cx="10" cy="10" r="9.75" fill="black" stroke="var(--ft-b-outer-stroke, black)" stroke-width="0.5"/>
    <circle cx="10" cy="10" r="8" fill="none" stroke="url(#bss)" stroke-width="0.7"/>
    
    <circle 
        class="texture-stone" 
        cx="10" cy="10" r="9" 
        filter="url(#stone-marble)" 
        clip-path="url(#stone-clip)" 
        style="mix-blend-mode: overlay; opacity: 0.7; pointer-events: none;" 
    />
</g>
</svg>
`,tt=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#shadow)">
    <circle cx="10" cy="10" r="9.75" fill="white" stroke="var(--ft-w-outer-stroke, #8a7d65)" stroke-width="0.5"/>
    <circle cx="10" cy="10" r="8" fill="none" stroke="url(#wss)" stroke-width="0.3"/>
    
    <circle 
        class="texture-stone" 
        cx="10" cy="10" r="9" 
        filter="url(#stone-marble)" 
        clip-path="url(#stone-clip)" 
        style="mix-blend-mode: overlay; opacity: 0.7; pointer-events: none;" 
    />
</g>
</svg>
`;function Ie(t){return new DOMParser().parseFromString(t,"image/svg+xml")}const xe={stoneWhite:Ie(tt).querySelector("svg"),stoneBlack:Ie(et).querySelector("svg"),markerCircle:Ie(qt).querySelector("svg"),arrow:Ie(Gt).querySelector("svg"),stoneGradientDefs:Ie(bt).querySelector("defs"),stoneTextureDefs:Ie(Pt).querySelector("defs")},jt=`
<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#1878B8"/>
      <stop offset="75%"  stop-color="#2AAADE"/>
      <stop offset="100%" stop-color="#3CBFF0"/>
    </linearGradient>
    <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#8A6030"/>
      <stop offset="20%"  stop-color="#B89050"/>
      <stop offset="100%" stop-color="#D4B46A"/>
    </linearGradient>
  </defs>

  
  <rect width="270" height="78" fill="url(#ocean)"/>

  
  <rect y="72" width="270" height="78" fill="url(#sand)"/>

  
  <line x1="0" y1="15" x2="270" y2="15" stroke="#5AC8E8" stroke-width="1.5" opacity="0.15"/>
  <line x1="0" y1="30" x2="270" y2="30" stroke="#5AC8E8" stroke-width="2"   opacity="0.12"/>
  <line x1="0" y1="48" x2="270" y2="48" stroke="#7AD8F0" stroke-width="1"   opacity="0.10"/>

  
  <path d="M0 72 Q17 67 34 72 Q51 77 68 72 Q85 67 102 72 Q119 77 136 72 Q153 67 170 72 Q187 77 204 72 Q221 67 238 72 Q255 77 270 72"
        fill="none" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
  <path d="M0 76 Q20 72 40 76 Q60 80 80 76 Q100 72 120 76 Q140 80 160 76 Q180 72 200 76 Q220 80 240 76 Q255 73 270 76"
        fill="none" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.25"/>

  
  <rect y="72" width="270" height="14" fill="#7A5020" opacity="0.2"/>

  
  <path d="M0 100 Q67  95 135 100 Q202 105 270 100" fill="none" stroke="#C09048" stroke-width="1" opacity="0.30"/>
  <path d="M0 118 Q67 113 135 118 Q202 123 270 118" fill="none" stroke="#C49850" stroke-width="1" opacity="0.25"/>
  <path d="M0 136 Q67 131 135 136 Q202 141 270 136" fill="none" stroke="#C8A058" stroke-width="1" opacity="0.20"/>
</svg>
`,Qt=`<svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" font-family="monospace">

  
  <rect width="150" height="150" fill="#111111"/>

  
  <rect width="150" height="15" fill="#3d1010" opacity="0.9"/>
  <rect y="135" width="150" height="15" fill="#3d1010" opacity="0.9"/>
  <rect width="15" height="150" fill="#3d1010" opacity="0.9"/>
  <rect x="135" width="15" height="150" fill="#3d1010" opacity="0.9"/>

  
  <rect x="15" y="15" width="120" height="120" fill="#162018"/>

  
  <rect x="15" y="15" width="120" height="120" fill="none" stroke="#ff4444" stroke-width="0.8" stroke-dasharray="4,3"/>

  
  <g stroke="#2a2a2a" stroke-width="0.5">
    <line x1="15" y1="15"  x2="135" y2="15"/>
    <line x1="15" y1="45"  x2="135" y2="45"/>
    <line x1="15" y1="75"  x2="135" y2="75"/>
    <line x1="15" y1="105" x2="135" y2="105"/>
    <line x1="15" y1="135" x2="135" y2="135"/>
  </g>

  
  <g stroke="#2a2a2a" stroke-width="0.5">
    <line x1="15"  y1="15" x2="15"  y2="135"/>
    <line x1="45"  y1="15" x2="45"  y2="135"/>
    <line x1="75"  y1="15" x2="75"  y2="135"/>
    <line x1="105" y1="15" x2="105" y2="135"/>
    <line x1="135" y1="15" x2="135" y2="135"/>
  </g>

  
  <g stroke="#404040" stroke-width="0.6">
    <line x1="15"  y1="15"  x2="45"  y2="45"/>
    <line x1="75"  y1="15"  x2="45"  y2="45"/>
    <line x1="75"  y1="15"  x2="105" y2="45"/>
    <line x1="135" y1="15"  x2="105" y2="45"/>
    <line x1="45"  y1="45"  x2="15"  y2="75"/>
    <line x1="45"  y1="45"  x2="75"  y2="75"/>
    <line x1="105" y1="45"  x2="75"  y2="75"/>
    <line x1="105" y1="45"  x2="135" y2="75"/>
    <line x1="15"  y1="75"  x2="45"  y2="105"/>
    <line x1="75"  y1="75"  x2="45"  y2="105"/>
    <line x1="75"  y1="75"  x2="105" y2="105"/>
    <line x1="135" y1="75"  x2="105" y2="105"/>
    <line x1="45"  y1="105" x2="15"  y2="135"/>
    <line x1="45"  y1="105" x2="75"  y2="135"/>
    <line x1="105" y1="105" x2="75"  y2="135"/>
    <line x1="105" y1="105" x2="135" y2="135"/>
  </g>

  
  <g fill="none" stroke="#ff8800" stroke-width="0.8" stroke-dasharray="3,2">
    <polygon points="75,15  105,45 75,75  45,45"/>
    <polygon points="45,45  75,75  45,105 15,75"/>
    <polygon points="105,45 135,75 105,105 75,75"/>
    <polygon points="75,75  105,105 75,135 45,105"/>
  </g>

  
  <g fill="#22cc55" fill-opacity="0.18" stroke="#22cc55" stroke-width="0.7">
    <polygon points="75,18  102,45 75,72  48,45"/>
    <polygon points="45,48  72,75  45,102 18,75"/>
    <polygon points="105,48 132,75 105,102 78,75"/>
    <polygon points="75,78  102,105 75,132 48,105"/>
  </g>

  
  <g fill="#4488ff">
    <circle cx="15"  cy="15"  r="2.5"/>
    <circle cx="75"  cy="15"  r="2.5"/>
    <circle cx="135" cy="15"  r="2.5"/>
    <circle cx="45"  cy="45"  r="2.5"/>
    <circle cx="105" cy="45"  r="2.5"/>
    <circle cx="15"  cy="75"  r="2.5"/>
    <circle cx="75"  cy="75"  r="2.5"/>
    <circle cx="135" cy="75"  r="2.5"/>
    <circle cx="45"  cy="105" r="2.5"/>
    <circle cx="105" cy="105" r="2.5"/>
    <circle cx="15"  cy="135" r="2.5"/>
    <circle cx="75"  cy="135" r="2.5"/>
    <circle cx="135" cy="135" r="2.5"/>
  </g>

  
  <g fill="#ff8800">
    <circle cx="75"  cy="45"  r="2"/>
    <circle cx="45"  cy="75"  r="2"/>
    <circle cx="105" cy="75"  r="2"/>
    <circle cx="75"  cy="105" r="2"/>
  </g>

  
  <g fill="#555555">
    <circle cx="45"  cy="15"  r="1.5"/>
    <circle cx="105" cy="15"  r="1.5"/>
    <circle cx="15"  cy="45"  r="1.5"/>
    <circle cx="135" cy="45"  r="1.5"/>
    <circle cx="15"  cy="105" r="1.5"/>
    <circle cx="135" cy="105" r="1.5"/>
    <circle cx="45"  cy="135" r="1.5"/>
    <circle cx="105" cy="135" r="1.5"/>
  </g>

  
  <g font-size="5" fill="#ff5555" text-anchor="middle">
    <text x="15"  y="9">15</text>
    <text x="135" y="9">135</text>
    <text x="7"   y="18">15</text>
    <text x="7"   y="137">135</text>
  </g>
  <g font-size="4.5" fill="#555555" text-anchor="middle">
    <text x="7"   y="7">0</text>
    <text x="143" y="9">150</text>
    <text x="7"   y="148">150</text>
  </g>

  
  <text x="8" y="9" fill="#ff6666" font-size="4.5" text-anchor="start" opacity="0.7">BORDER 15px</text>
  <text x="75" y="75" fill="#22cc55" font-size="8" text-anchor="middle" dominant-baseline="middle" opacity="0.12">5×5 DIMY</text>

  
  <g font-size="4" fill="#888888">
    <circle cx="18"  cy="139" r="2"   fill="#4488ff"/>
    <text   x="22"   y="140.5">strong node</text>
    <circle cx="18"  cy="144" r="2"   fill="#ff8800"/>
    <text   x="22"   y="145.5">cell center (weak)</text>
    <circle cx="18"  cy="149" r="1.5" fill="#555555"/>
    <text   x="22"   y="150">edge weak node</text>
  </g>

</svg>
`,Yt=`<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" font-family="monospace">

  
  <rect width="90" height="90" fill="#111111"/>

  
  <rect width="90" height="15" fill="#3d1010" opacity="0.9"/>
  <rect y="75" width="90" height="15" fill="#3d1010" opacity="0.9"/>
  <rect width="15" height="90" fill="#3d1010" opacity="0.9"/>
  <rect x="75" width="15" height="90" fill="#3d1010" opacity="0.9"/>

  
  <rect x="15" y="15" width="60" height="60" fill="#162018"/>

  
  <rect x="15" y="15" width="60" height="60" fill="none" stroke="#ff4444" stroke-width="0.8" stroke-dasharray="4,3"/>

  
  <g stroke="#2a2a2a" stroke-width="0.5">
    <line x1="15" y1="15" x2="75" y2="15"/>
    <line x1="15" y1="45" x2="75" y2="45"/>
    <line x1="15" y1="75" x2="75" y2="75"/>
  </g>

  
  <g stroke="#2a2a2a" stroke-width="0.5">
    <line x1="15" y1="15" x2="15" y2="75"/>
    <line x1="45" y1="15" x2="45" y2="75"/>
    <line x1="75" y1="15" x2="75" y2="75"/>
  </g>

  
  <g stroke="#404040" stroke-width="0.6">
    <line x1="15" y1="15" x2="45" y2="45"/>
    <line x1="75" y1="15" x2="45" y2="45"/>
    <line x1="45" y1="45" x2="15" y2="75"/>
    <line x1="45" y1="45" x2="75" y2="75"/>
  </g>

  

  
  <g fill="#4488ff">
    <circle cx="15" cy="15" r="2.5"/>
    <circle cx="75" cy="15" r="2.5"/>
    <circle cx="45" cy="45" r="2.5"/>
    <circle cx="15" cy="75" r="2.5"/>
    <circle cx="75" cy="75" r="2.5"/>
  </g>

  
  <g fill="#555555">
    <circle cx="45" cy="15" r="1.5"/>
    <circle cx="15" cy="45" r="1.5"/>
    <circle cx="75" cy="45" r="1.5"/>
    <circle cx="45" cy="75" r="1.5"/>
  </g>

  
  <g font-size="5" fill="#ff5555" text-anchor="middle">
    <text x="15" y="9">15</text>
    <text x="75" y="9">75</text>
    <text x="7"  y="18">15</text>
    <text x="7"  y="77">75</text>
  </g>
  <g font-size="4.5" fill="#555555" text-anchor="middle">
    <text x="7"  y="7">0</text>
    <text x="83" y="9">90</text>
    <text x="7"  y="88">90</text>
  </g>

  
  <text x="8" y="9" fill="#ff6666" font-size="4.5" text-anchor="start" opacity="0.7">BORDER 15px</text>
  <text x="45" y="45" fill="#22cc55" font-size="7" text-anchor="middle" dominant-baseline="middle" opacity="0.15">3×3 TELO</text>

  
  <text x="45" y="60" fill="#888888" font-size="4" text-anchor="middle" opacity="0.7">no diamond cells</text>

  
  <g font-size="4" fill="#888888">
    <circle cx="18" cy="80" r="2"   fill="#4488ff"/>
    <text   x="22"  y="81.5">strong node</text>
    <circle cx="18" cy="86" r="1.5" fill="#555555"/>
    <text   x="22"  y="87.5">edge weak node</text>
  </g>

</svg>
`,Xt=`<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg" font-family="monospace">

  
  <rect width="270" height="150" fill="#111111"/>

  
  <rect width="270" height="15" fill="#3d1010" opacity="0.9"/>
  <rect y="135" width="270" height="15" fill="#3d1010" opacity="0.9"/>
  <rect width="15" height="150" fill="#3d1010" opacity="0.9"/>
  <rect x="255" width="15" height="150" fill="#3d1010" opacity="0.9"/>

  
  <rect x="15" y="15" width="240" height="120" fill="#162018"/>

  
  <rect x="15" y="15" width="240" height="120" fill="none" stroke="#ff4444" stroke-width="0.8" stroke-dasharray="4,3"/>

  
  <g stroke="#2a2a2a" stroke-width="0.5">
    <line x1="15" y1="15" x2="255" y2="15"/>
    <line x1="15" y1="45" x2="255" y2="45"/>
    <line x1="15" y1="75" x2="255" y2="75"/>
    <line x1="15" y1="105" x2="255" y2="105"/>
    <line x1="15" y1="135" x2="255" y2="135"/>
  </g>

  
  <g stroke="#2a2a2a" stroke-width="0.5">
    <line x1="15"  y1="15" x2="15"  y2="135"/>
    <line x1="45"  y1="15" x2="45"  y2="135"/>
    <line x1="75"  y1="15" x2="75"  y2="135"/>
    <line x1="105" y1="15" x2="105" y2="135"/>
    <line x1="135" y1="15" x2="135" y2="135"/>
    <line x1="165" y1="15" x2="165" y2="135"/>
    <line x1="195" y1="15" x2="195" y2="135"/>
    <line x1="225" y1="15" x2="225" y2="135"/>
    <line x1="255" y1="15" x2="255" y2="135"/>
  </g>

  
  <g stroke="#404040" stroke-width="0.6">
    <line x1="15"  y1="15"  x2="45"  y2="45"/>
    <line x1="75"  y1="15"  x2="45"  y2="45"/>
    <line x1="75"  y1="15"  x2="105" y2="45"/>
    <line x1="135" y1="15"  x2="105" y2="45"/>
    <line x1="135" y1="15"  x2="165" y2="45"/>
    <line x1="195" y1="15"  x2="165" y2="45"/>
    <line x1="195" y1="15"  x2="225" y2="45"/>
    <line x1="255" y1="15"  x2="225" y2="45"/>
    <line x1="45"  y1="45"  x2="15"  y2="75"/>
    <line x1="45"  y1="45"  x2="75"  y2="75"/>
    <line x1="105" y1="45"  x2="75"  y2="75"/>
    <line x1="105" y1="45"  x2="135" y2="75"/>
    <line x1="165" y1="45"  x2="135" y2="75"/>
    <line x1="165" y1="45"  x2="195" y2="75"/>
    <line x1="225" y1="45"  x2="195" y2="75"/>
    <line x1="225" y1="45"  x2="255" y2="75"/>
    <line x1="15"  y1="75"  x2="45"  y2="105"/>
    <line x1="75"  y1="75"  x2="45"  y2="105"/>
    <line x1="75"  y1="75"  x2="105" y2="105"/>
    <line x1="135" y1="75"  x2="105" y2="105"/>
    <line x1="135" y1="75"  x2="165" y2="105"/>
    <line x1="195" y1="75"  x2="165" y2="105"/>
    <line x1="195" y1="75"  x2="225" y2="105"/>
    <line x1="255" y1="75"  x2="225" y2="105"/>
    <line x1="45"  y1="105" x2="15"  y2="135"/>
    <line x1="45"  y1="105" x2="75"  y2="135"/>
    <line x1="105" y1="105" x2="75"  y2="135"/>
    <line x1="105" y1="105" x2="135" y2="135"/>
    <line x1="165" y1="105" x2="135" y2="135"/>
    <line x1="165" y1="105" x2="195" y2="135"/>
    <line x1="225" y1="105" x2="195" y2="135"/>
    <line x1="225" y1="105" x2="255" y2="135"/>
  </g>

  
  <g fill="none" stroke="#ff8800" stroke-width="0.8" stroke-dasharray="3,2">
    <polygon points="75,15  105,45 75,75  45,45"/>
    <polygon points="135,15 165,45 135,75 105,45"/>
    <polygon points="195,15 225,45 195,75 165,45"/>
    <polygon points="45,45  75,75  45,105 15,75"/>
    <polygon points="105,45 135,75 105,105 75,75"/>
    <polygon points="165,45 195,75 165,105 135,75"/>
    <polygon points="225,45 255,75 225,105 195,75"/>
    <polygon points="75,75  105,105 75,135 45,105"/>
    <polygon points="135,75 165,105 135,135 105,105"/>
    <polygon points="195,75 225,105 195,135 165,105"/>
  </g>

  
  <g fill="#22cc55" fill-opacity="0.18" stroke="#22cc55" stroke-width="0.7">
    <polygon points="75,18  102,45 75,72  48,45"/>
    <polygon points="135,18 162,45 135,72 108,45"/>
    <polygon points="195,18 222,45 195,72 168,45"/>
    <polygon points="45,48  72,75  45,102 18,75"/>
    <polygon points="105,48 132,75 105,102 78,75"/>
    <polygon points="165,48 192,75 165,102 138,75"/>
    <polygon points="225,48 252,75 225,102 198,75"/>
    <polygon points="75,78  102,105 75,132 48,105"/>
    <polygon points="135,78 162,105 135,132 108,105"/>
    <polygon points="195,78 222,105 195,132 168,105"/>
  </g>

  
  <g fill="#4488ff">
    <circle cx="15"  cy="15"  r="2.5"/>
    <circle cx="75"  cy="15"  r="2.5"/>
    <circle cx="135" cy="15"  r="2.5"/>
    <circle cx="195" cy="15"  r="2.5"/>
    <circle cx="255" cy="15"  r="2.5"/>
    <circle cx="45"  cy="45"  r="2.5"/>
    <circle cx="105" cy="45"  r="2.5"/>
    <circle cx="165" cy="45"  r="2.5"/>
    <circle cx="225" cy="45"  r="2.5"/>
    <circle cx="15"  cy="75"  r="2.5"/>
    <circle cx="75"  cy="75"  r="2.5"/>
    <circle cx="135" cy="75"  r="2.5"/>
    <circle cx="195" cy="75"  r="2.5"/>
    <circle cx="255" cy="75"  r="2.5"/>
    <circle cx="45"  cy="105" r="2.5"/>
    <circle cx="105" cy="105" r="2.5"/>
    <circle cx="165" cy="105" r="2.5"/>
    <circle cx="225" cy="105" r="2.5"/>
    <circle cx="15"  cy="135" r="2.5"/>
    <circle cx="75"  cy="135" r="2.5"/>
    <circle cx="135" cy="135" r="2.5"/>
    <circle cx="195" cy="135" r="2.5"/>
    <circle cx="255" cy="135" r="2.5"/>
  </g>

  
  <g fill="#ff8800">
    <circle cx="75"  cy="45"  r="2"/>
    <circle cx="135" cy="45"  r="2"/>
    <circle cx="195" cy="45"  r="2"/>
    <circle cx="45"  cy="75"  r="2"/>
    <circle cx="105" cy="75"  r="2"/>
    <circle cx="165" cy="75"  r="2"/>
    <circle cx="225" cy="75"  r="2"/>
    <circle cx="75"  cy="105" r="2"/>
    <circle cx="135" cy="105" r="2"/>
    <circle cx="195" cy="105" r="2"/>
  </g>

  
  <g fill="#555555">
    <circle cx="45"  cy="15"  r="1.5"/>
    <circle cx="105" cy="15"  r="1.5"/>
    <circle cx="165" cy="15"  r="1.5"/>
    <circle cx="225" cy="15"  r="1.5"/>
    <circle cx="15"  cy="45"  r="1.5"/>
    <circle cx="255" cy="45"  r="1.5"/>
    <circle cx="15"  cy="105" r="1.5"/>
    <circle cx="255" cy="105" r="1.5"/>
    <circle cx="45"  cy="135" r="1.5"/>
    <circle cx="105" cy="135" r="1.5"/>
    <circle cx="165" cy="135" r="1.5"/>
    <circle cx="225" cy="135" r="1.5"/>
  </g>

  
  <g font-size="5" fill="#ff5555" text-anchor="middle">
    <text x="15"  y="9">15</text>
    <text x="255" y="9">255</text>
    <text x="7"   y="18">15</text>
    <text x="7"   y="137">135</text>
  </g>
  <g font-size="4.5" fill="#555555" text-anchor="middle">
    <text x="7"   y="7">0</text>
    <text x="263" y="9">270</text>
    <text x="7"   y="148">150</text>
  </g>

  
  <text x="8" y="9" fill="#ff6666" font-size="5" text-anchor="start" opacity="0.7">BORDER 15px</text>
  <text x="135" y="75" fill="#22cc55" font-size="7" text-anchor="middle" dominant-baseline="middle" opacity="0.12">INNER GAME AREA</text>

  
  <g font-size="4.5" fill="#888888">
    <circle cx="18"  cy="138" r="2"   fill="#4488ff"/>
    <text   x="22"   y="139.5">strong node  (r+c even, has diagonals)</text>
    <circle cx="18"  cy="143" r="2"   fill="#ff8800"/>
    <text   x="22"   y="144.5">cell center  (weak node, diamond target)</text>
    <circle cx="18"  cy="148" r="1.5" fill="#555555"/>
    <text   x="22"   y="149.5">edge weak node  (no full cell)</text>
    <line   x1="142" y1="138.5" x2="155" y2="138.5" stroke="#ff8800" stroke-width="0.8" stroke-dasharray="2,1"/>
    <text   x="157"  y="139.5">path boundary  (half-diag=30)</text>
    <line   x1="142" y1="143.5" x2="155" y2="143.5" stroke="#22cc55" stroke-width="0.7"/>
    <text   x="157"  y="144.5">safe fit  (half-diag 27, 3px gap)</text>
    <rect   x="142"  y="146.5" width="13" height="3" fill="#3d1010" opacity="0.9"/>
    <text   x="157"  y="149.5">border zone  (x&lt;15, x&gt;255, y&lt;15, y&gt;135)</text>
  </g>

</svg>
`,Zt=`
<svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hw-top" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
    <pattern id="hw-bot" x="0" y="137" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
    <pattern id="hw-lft" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
    <pattern id="hw-rgt" x="137" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
  </defs>

  
  <rect x="0"   y="0"   width="150" height="13"  fill="#7a1010"/>
  <rect x="0"   y="137" width="150" height="13"  fill="#7a1010"/>
  <rect x="0"   y="13"  width="13"  height="124" fill="#7a1010"/>
  <rect x="137" y="13"  width="13"  height="124" fill="#7a1010"/>

  
  <rect x="0"   y="0"   width="150" height="13"  fill="url(#hw-top)"/>
  <rect x="0"   y="137" width="150" height="13"  fill="url(#hw-bot)"/>
  <rect x="0"   y="13"  width="13"  height="124" fill="url(#hw-lft)"/>
  <rect x="137" y="13"  width="13"  height="124" fill="url(#hw-rgt)"/>

  
  <rect x="0"   y="0"   width="16" height="16" rx="2" fill="#7a1010"/>
  <rect x="134" y="0"   width="16" height="16" rx="2" fill="#7a1010"/>
  <rect x="0"   y="134" width="16" height="16" rx="2" fill="#7a1010"/>
  <rect x="134" y="134" width="16" height="16" rx="2" fill="#7a1010"/>

  
  <g transform="rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <g transform="translate(134,0) rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <g transform="translate(0,134) rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <g transform="translate(134,134) rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <rect x="13" y="13" width="124" height="124" fill="none"
        stroke="#d4a017" stroke-width="1" rx="2" opacity="0.7"/>

</svg>
`,Kt=`
<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hw-top" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
    <pattern id="hw-bot" x="0" y="77" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
    <pattern id="hw-lft" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
    <pattern id="hw-rgt" x="77" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
  </defs>

  
  <rect x="0"  y="0"  width="90" height="13" fill="#7a1010"/>
  <rect x="0"  y="77" width="90" height="13" fill="#7a1010"/>
  <rect x="0"  y="13" width="13" height="64" fill="#7a1010"/>
  <rect x="77" y="13" width="13" height="64" fill="#7a1010"/>

  
  <rect x="0"  y="0"  width="90" height="13" fill="url(#hw-top)"/>
  <rect x="0"  y="77" width="90" height="13" fill="url(#hw-bot)"/>
  <rect x="0"  y="13" width="13" height="64" fill="url(#hw-lft)"/>
  <rect x="77" y="13" width="13" height="64" fill="url(#hw-rgt)"/>

  
  <rect x="0"  y="0"  width="16" height="16" rx="2" fill="#7a1010"/>
  <rect x="74" y="0"  width="16" height="16" rx="2" fill="#7a1010"/>
  <rect x="0"  y="74" width="16" height="16" rx="2" fill="#7a1010"/>
  <rect x="74" y="74" width="16" height="16" rx="2" fill="#7a1010"/>

  
  <g transform="rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <g transform="translate(74,0) rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <g transform="translate(0,74) rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <g transform="translate(74,74) rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <rect x="13" y="13" width="64" height="64" fill="none"
        stroke="#d4a017" stroke-width="1" rx="2" opacity="0.7"/>

</svg>
`,Jt=`
<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hw-top" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
    <pattern id="hw-bot" x="0" y="137" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
    <pattern id="hw-lft" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
    <pattern id="hw-rgt" x="257" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
      <path d="M 1.5,11.5 V 1.5 H 11.5 V 11.5 H 3.5 V 3.5 H 9.5 V 9.5 H 5.5 V 5.5 H 7.5 V 7.5"
            fill="none" stroke="#d4a017" stroke-width="1.0" stroke-linecap="square" stroke-linejoin="miter"/>
    </pattern>
  </defs>

  
  <rect x="0"   y="0"   width="270" height="13"  fill="#7a1010"/>
  <rect x="0"   y="137" width="270" height="13"  fill="#7a1010"/>
  <rect x="0"   y="13"  width="13"  height="124" fill="#7a1010"/>
  <rect x="257" y="13"  width="13"  height="124" fill="#7a1010"/>

  
  <rect x="0"   y="0"   width="270" height="13"  fill="url(#hw-top)"/>
  <rect x="0"   y="137" width="270" height="13"  fill="url(#hw-bot)"/>
  <rect x="0"   y="13"  width="13"  height="124" fill="url(#hw-lft)"/>
  <rect x="257" y="13"  width="13"  height="124" fill="url(#hw-rgt)"/>

  
  <rect x="0"   y="0"   width="16" height="16" rx="2" fill="#7a1010"/>
  <rect x="254" y="0"   width="16" height="16" rx="2" fill="#7a1010"/>
  <rect x="0"   y="134" width="16" height="16" rx="2" fill="#7a1010"/>
  <rect x="254" y="134" width="16" height="16" rx="2" fill="#7a1010"/>

  
  <g transform="rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <g transform="translate(254,0) rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <g transform="translate(0,134) rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <g transform="translate(254,134) rotate(45,8,8)">
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#7a1010" stroke-width="2.0" stroke-linecap="round"/>
    <line x1="5" y1="3"  x2="5"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="8" y1="3"  x2="8"  y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="11" y1="3" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="5" x2="13" y2="5"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3"  y1="8" x2="13" y2="8"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="3" y1="11" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <line x1="5" y1="3"  x2="11" y2="3"  stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="11" y2="13" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="3" y1="5"  x2="3"  y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="13" y1="5" x2="13" y2="11" stroke="#d4a017" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="4.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="4.1" x2="5" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="4.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="5" y1="10.1" x2="5" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="7.1" y="7.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="8" y1="7.1" x2="8" y2="8.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="4.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="4.1" x2="11" y2="5.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
    <rect x="10.1" y="10.1" width="1.8" height="1.8" fill="#7a1010"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#7a1010" stroke-width="2.0" stroke-linecap="butt"/>
    <line x1="11" y1="10.1" x2="11" y2="11.9" stroke="#d4a017" stroke-width="1.2" stroke-linecap="butt"/>
  </g>

  
  <rect x="13" y="13" width="244" height="124" fill="none"
        stroke="#d4a017" stroke-width="1" rx="2" opacity="0.7"/>

</svg>
`,en=`
<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="vl" width="33" height="33"
             patternUnits="userSpaceOnUse" patternTransform="rotate(45 135 75)">
      <line x1="16.5" y1="0" x2="16.5" y2="33" stroke="#8B1A1A" stroke-width="1.05" opacity="0.45"/>
      <line x1="0" y1="16.5" x2="33" y2="16.5" stroke="#8B1A1A" stroke-width="1.05" opacity="0.45"/>
    </pattern>
  </defs>

  
  <rect width="270" height="150" fill="#C9A227"/>
  <rect width="270" height="150" fill="url(#vl)"/>

  
  <rect x="4.5" y="4.5" width="261" height="141" fill="none" stroke="#8B1A1A" stroke-width="9"/>
  <rect x="13.5" y="13.5" width="243" height="123" fill="none" stroke="#F5EDD6" stroke-width="1.95"/>
  <rect x="16.8" y="16.8" width="236.4" height="116.4" fill="none" stroke="#8B1A1A" stroke-width="4.05"/>

  
  <circle cx="35" cy="35" r="13.5" fill="#8B1A1A"/>
  <circle cx="35" cy="35" r="8.25" fill="#C9A227"/>
  <circle cx="35" cy="35" r="4.05" fill="#8B1A1A"/>

  <circle cx="235" cy="35" r="13.5" fill="#8B1A1A"/>
  <circle cx="235" cy="35" r="8.25" fill="#C9A227"/>
  <circle cx="235" cy="35" r="4.05" fill="#8B1A1A"/>

  <circle cx="35" cy="115" r="13.5" fill="#8B1A1A"/>
  <circle cx="35" cy="115" r="8.25" fill="#C9A227"/>
  <circle cx="35" cy="115" r="4.05" fill="#8B1A1A"/>

  <circle cx="235" cy="115" r="13.5" fill="#8B1A1A"/>
  <circle cx="235" cy="115" r="8.25" fill="#C9A227"/>
  <circle cx="235" cy="115" r="4.05" fill="#8B1A1A"/>

  
  <circle cx="135" cy="35" r="9.75" fill="#8B1A1A"/>
  <circle cx="135" cy="35" r="6" fill="#C9A227"/>
  <circle cx="135" cy="35" r="2.4" fill="#8B1A1A"/>

  <circle cx="135" cy="115" r="9.75" fill="#8B1A1A"/>
  <circle cx="135" cy="115" r="6" fill="#C9A227"/>
  <circle cx="135" cy="115" r="2.4" fill="#8B1A1A"/>

  <circle cx="35" cy="75" r="9.75" fill="#8B1A1A"/>
  <circle cx="35" cy="75" r="6" fill="#C9A227"/>
  <circle cx="35" cy="75" r="2.4" fill="#8B1A1A"/>

  <circle cx="235" cy="75" r="9.75" fill="#8B1A1A"/>
  <circle cx="235" cy="75" r="6" fill="#C9A227"/>
  <circle cx="235" cy="75" r="2.4" fill="#8B1A1A"/>

  
  <line x1="35" y1="35" x2="235" y2="35" stroke="#8B1A1A" stroke-width="1.2" opacity="0.3"/>
  <line x1="35" y1="115" x2="235" y2="115" stroke="#8B1A1A" stroke-width="1.2" opacity="0.3"/>
  <line x1="35" y1="35" x2="35" y2="115" stroke="#8B1A1A" stroke-width="1.2" opacity="0.3"/>
  <line x1="235" y1="35" x2="235" y2="115" stroke="#8B1A1A" stroke-width="1.2" opacity="0.3"/>

  
  <circle cx="135" cy="75" r="67.5" fill="#8B1A1A"/>
  <circle cx="135" cy="75" r="67.5" fill="none" stroke="#C9A227" stroke-width="4.05"/>
  <circle cx="135" cy="75" r="62.8" fill="none" stroke="#F5EDD6" stroke-width="1.35"/>

  
  <g stroke="#C9A227" stroke-width="2.55" stroke-linecap="round">
    <line x1="135" y1="75" x2="135" y2="10.9"/>
    <line x1="135" y1="75" x2="199.1" y2="75"/>
    <line x1="135" y1="75" x2="135" y2="139.1"/>
    <line x1="135" y1="75" x2="70.9" y2="75"/>
    <line x1="135" y1="75" x2="180.3" y2="29.7"/>
    <line x1="135" y1="75" x2="180.3" y2="120.3"/>
    <line x1="135" y1="75" x2="89.7" y2="120.3"/>
    <line x1="135" y1="75" x2="89.7" y2="29.7"/>
  </g>

  
  <g transform="translate(135,75)">
    <ellipse cx="0" cy="-46.6" rx="8.8" ry="12.2" fill="#C9A227"/>
    <ellipse cx="0" cy="-46.6" rx="8.8" ry="12.2" fill="#C9A227" transform="rotate(45)"/>
    <ellipse cx="0" cy="-46.6" rx="8.8" ry="12.2" fill="#C9A227" transform="rotate(90)"/>
    <ellipse cx="0" cy="-46.6" rx="8.8" ry="12.2" fill="#C9A227" transform="rotate(135)"/>
    <ellipse cx="0" cy="-46.6" rx="8.8" ry="12.2" fill="#C9A227" transform="rotate(180)"/>
    <ellipse cx="0" cy="-46.6" rx="8.8" ry="12.2" fill="#C9A227" transform="rotate(225)"/>
    <ellipse cx="0" cy="-46.6" rx="8.8" ry="12.2" fill="#C9A227" transform="rotate(270)"/>
    <ellipse cx="0" cy="-46.6" rx="8.8" ry="12.2" fill="#C9A227" transform="rotate(315)"/>
  </g>

  
  <circle cx="135" cy="75" r="39.2" fill="none" stroke="#C9A227" stroke-width="2.35"/>

  
  <circle cx="135" cy="75" r="27" fill="#F5EDD6"/>

  
  <rect x="132.1" y="54.9" width="5.8" height="40.2" rx="1.2" fill="#C9A227"/>
  <rect x="114.9" y="72.1" width="40.2" height="5.8" rx="1.2" fill="#C9A227"/>
  <rect x="132.1" y="54.9" width="5.8" height="40.2" rx="1.2" fill="#C9A227" transform="rotate(45 135 75)"/>
  <rect x="132.1" y="54.9" width="5.8" height="40.2" rx="1.2" fill="#C9A227" transform="rotate(-45 135 75)"/>

  
  <circle cx="135" cy="75" r="10.8" fill="#8B1A1A"/>
  <circle cx="135" cy="75" r="7.4" fill="#C9A227"/>
  <circle cx="135" cy="75" r="4.05" fill="#F5EDD6"/>
  <circle cx="135" cy="75" r="1.9" fill="#C9A227"/>
</svg>
`,tn=`<svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="150" height="150" fill="rgb(50, 32, 54)"/>
  
  <polygon points="15,15 75,15 45,45 15,75"    fill="#8b4820"/>
  <polygon points="75,15 135,15 135,75 105,45"  fill="#8b4820"/>
  <polygon points="15,75 15,135 75,135 45,105"  fill="#8b4820"/>
  <polygon points="135,75 105,105 75,135 135,135" fill="#8b4820"/>
  
  <polygon points="75,18  102,45 75,72  48,45"  fill="#a87038"/>
  <polygon points="75,78  102,105 75,132 48,105" fill="#a87038"/>
  
  <polygon points="45,48  72,75  45,102 18,75"  fill="#d4a060"/>
  <polygon points="105,48 132,75 105,102 78,75"  fill="#d4a060"/>
</svg>
`,nn=`<svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="90" height="90" fill="rgb(50, 32, 54)"/>
  
  <polygon points="15,15 75,15 45,45" fill="#a87038"/>
  <polygon points="75,15 75,75 45,45" fill="#d4a060"/>
  <polygon points="75,75 15,75 45,45" fill="#a87038"/>
  <polygon points="15,75 15,15 45,45" fill="#d4a060"/>
</svg>
`,rn=`<svg viewBox="0 0 270 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="270" height="150" fill="rgb(50, 32, 54)"/>
  <polygon points="15,15 75,15 48,45 18,75 48,105 75,135 15,135" fill="#8b4820"/>
  <polygon points="255,15 195,15 222,45 252,75 222,105 195,135 255,135" fill="#8b4820"/>
  <polygon points="75,15 195,15 168,45 102,45" fill="#c88040"/>
  <polygon points="75,135 195,135 168,105 102,105" fill="#c88040"/>
  <polygon points="75,18 102,45 75,72 48,45" fill="#a87038"/>
  <polygon points="135,18 162,45 135,72 108,45" fill="#a87038"/>
  <polygon points="195,18 222,45 195,72 168,45" fill="#a87038"/>
  <polygon points="45,48 72,75 45,102 18,75" fill="#d4a060"/>
  <polygon points="105,48 132,75 105,102 78,75" fill="#d4a060"/>
  <polygon points="165,48 192,75 165,102 138,75" fill="#d4a060"/>
  <polygon points="225,48 252,75 225,102 198,75" fill="#d4a060"/>
  <polygon points="75,78 102,105 75,132 48,105" fill="#a87038"/>
  <polygon points="135,78 162,105 135,132 108,105" fill="#a87038"/>
  <polygon points="195,78 222,105 195,132 168,105" fill="#a87038"/>
</svg>
`,on=Object.assign({"/src/assets/fanorona/skins/beach.svg":jt,"/src/assets/fanorona/skins/board-skin-guidelines--dimy.svg":Qt,"/src/assets/fanorona/skins/board-skin-guidelines--telo.svg":Yt,"/src/assets/fanorona/skins/board-skin-guidelines.svg":Xt,"/src/assets/fanorona/skins/leiwen-panchang--dimy.svg":Zt,"/src/assets/fanorona/skins/leiwen-panchang--telo.svg":Kt,"/src/assets/fanorona/skins/leiwen-panchang.svg":Jt,"/src/assets/fanorona/skins/versailles.svg":en,"/src/assets/fanorona/skins/wood-inlay--dimy.svg":tn,"/src/assets/fanorona/skins/wood-inlay--telo.svg":nn,"/src/assets/fanorona/skins/wood-inlay.svg":rn}),sn={sivy:"5x9",dimy:"5x5",telo:"3x3"},Pe={};for(const[t,o]of Object.entries(on)){const s=t.split("/").pop().replace(".svg","");if(s.startsWith("board-skin-"))continue;const r=s.indexOf("--"),a=r===-1?s:s.slice(0,r),l=r===-1?void 0:s.slice(r+2);if(Pe[a]??={resolver:""},!l)Pe[a].resolver=o;else{const n=sn[l];n&&(Pe[a].variants??={},Pe[a].variants[n]=o)}}function mt(t){const o=t.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/);return o?{w:parseFloat(o[1]),h:parseFloat(o[2])}:{w:270,h:150}}function Un(t){const{skinName:o,boardWidth:s,boardHeight:r,boardSize:a,opacity:l}=t,n=Pe[o];if(!n)return"";const h=n.variants?.[a]??n.resolver,{w:d,h:u}=mt(h),f=new TextEncoder().encode(h),C=`data:image/svg+xml;base64,${btoa(Array.from(f,k=>String.fromCharCode(k)).join(""))}`,P=Math.round((s-d)/2),g=Math.round((r-u)/2);return`<g pointer-events="none" ${l!==void 0?`opacity="${l}"`:""}><image href="${C}" x="${P}" y="${g}" width="${d}" height="${u}" preserveAspectRatio="none"/></g>`}function an(t,o){const{skinName:s,boardWidth:r,boardHeight:a,boardSize:l}=o,n=Pe[s];if(!n)return null;const h=(l&&n.variants?.[l])??n.resolver,{w:d,h:u}=mt(h),f=t.namespaceURI??"http://www.w3.org/2000/svg",y=new TextEncoder().encode(h),P=`data:image/svg+xml;base64,${btoa(Array.from(y,J=>String.fromCharCode(J)).join(""))}`,g=Math.round((r-d)/2),v=Math.round((a-u)/2),k=document.createElementNS(f,"image");k.setAttribute("href",P),k.setAttribute("x",String(g)),k.setAttribute("y",String(v)),k.setAttribute("width",String(d)),k.setAttribute("height",String(u)),k.setAttribute("preserveAspectRatio","none");const $=document.createElementNS(f,"g");$.id="board-skin",$.style.pointerEvents="none",$.style.opacity="var(--ft-board-skin-opacity, 1)",$.appendChild(k);const ie=`skin-clip-${Se()}`,X=document.createElementNS(f,"defs");X.innerHTML=`<clipPath id="${ie}"><rect width="${r}" height="${a}" rx="${_e}" ry="${_e}"/></clipPath>`,t.prepend(X),$.setAttribute("clip-path",`url(#${ie})`);const K=t.querySelector("#board");return K?.nextSibling?t.insertBefore($,K.nextSibling):t.appendChild($),{group:$,defs:X}}function ln(t){t&&(t.group.remove(),t.defs.remove())}const cn=["innerHTML"],dn=kt({__name:"Board",props:{rotate:{type:Boolean},theme:{default:"classic"},rows:{default:5},cols:{default:9}},setup(t,{expose:o}){const s=t,r=vt(s.rows,s.cols),{width:a,height:l}=dt(s.rows,s.cols),n=`${s.rows}x${s.cols}`,h=a/l,d=dt(5,9),u=d.width/d.height,f=768/u,y=`${Math.round(f*h)}px`,C=`${Math.round(950/u*h)}px`,P=`${Math.round(1300/u*h)}px`,g=Q(null),v=Q(null),k=Q(null),$=Q(null),ie=Q(null),X=Q(null),K=Q(null);let J=null;o({boardRef:v,placeholdersRef:k,markerContainerRef:$,gWhiteRef:ie,gBlackRef:X,gMarkersRef:K});function oe(){ln(J),J=null;const U=v.value,ee=g.value?.parentElement;if(!U||!ee)return;const z=getComputedStyle(ee),W=z.getPropertyValue("--ft-board-skin").trim();W&&(z.getPropertyValue("--ft-board-skin-opacity").trim(),J=an(U,{skinName:W,boardWidth:a,boardHeight:l,boardSize:n}))}Ae(()=>s.theme,oe,{flush:"post"}),pt(()=>{const U=g.value?.querySelector("svg");if(!U)throw new Error("Could not find SVG element in container");v.value=U;const ee=U.querySelector("g#stone-placeholders");if(!ee)throw new Error("Could not find '#stone-placeholders' group in SVG");const z=ee.querySelectorAll("circle");if(!z)throw new Error("Could not find 'circle' elements in '#stone-placeholders' group in SVG");k.value=z,U.prepend(document.importNode(xe.stoneGradientDefs,!0));const W=Z("stones");ie.value=Z("white",W),X.value=Z("black",W),K.value=Z("markers"),oe()});function Z(U,ee){const z=document.createElementNS(v.value.namespaceURI,"g");return z.setAttribute("id",U),(ee??v.value).appendChild(z),z}return(U,ee)=>(wt(),ft("div",{class:Xe(`theme--${s.theme} relative`),style:_t({"--aspect-ratio":h,"--container-max-width":y,"--container-max-width-xl":C,"--container-max-width-2xl":P})},[st("div",{ref_key:"containerRef",ref:g,class:Xe(["board-container mx-auto w-full",{"rotate-180":s.rotate}]),innerHTML:He(r)},null,10,cn),st("div",{ref_key:"markerContainerRef",ref:$,class:"pointer-events-none absolute inset-0"},null,512)],6))}}),hn=$t(dn,[["__scopeId","data-v-164d4e10"]]);var I=(t=>(t[t.None=0]="None",t[t.White=1]="White",t[t.Black=2]="Black",t))(I||{}),Me=(t=>(t[t.Approach=0]="Approach",t[t.Withdrawal=1]="Withdrawal",t))(Me||{}),O=(t=>(t[t.Pause=0]="Pause",t[t.Pick=1]="Pick",t[t.Target=2]="Target",t[t.Moving=3]="Moving",t[t.Waiting=4]="Waiting",t[t.GameOver=5]="GameOver",t))(O||{});function ve(t,o){const s=o[0]-t[0],r=o[1]-t[1];if(s<-1||s>1||r<-1||r>1)throw new Error(`Invalid move: from ${t} to ${o} is not a valid direction.`);return[s,r]}const At={[I.White]:"w",[I.Black]:"b"},St={w:I.White,b:I.Black},nt="*",rt="#";function yn(t){const o=t.split(" ")[2]??"";return o.endsWith(nt)||o.endsWith(rt)}function Le(t,o={}){const{currentPlayer:s=I.White,visitedCoordinates:r=[],gameOver:a=!1}=o,l=t.map(un).join("/"),n=At[s]??"w",h=t.flat(),d=!h.includes(I.White)||!h.includes(I.Black)?rt:nt,u=r.length?r.map(([C,P])=>`${C}${P}+`).join(""):"",f=u?u.slice(0,-1):"",y=a?`${f}${d}`:u||"-";return`${l} ${n} ${y}`}function Ce(t){const[o,s,r]=t.split(" "),a=o.split("/").map(xn),l=(r??"").endsWith(nt)||(r??"").endsWith(rt),n=l?I.None:St[s]??I.White,h=l?(r??"").slice(0,-1):r??"",d=!h||h==="-"?[]:h.split("+").filter(Boolean).map(f=>[Number(f[0]),Number(f[1])]),u=d.length>=2?ve(d[d.length-2],d[d.length-1]):null;return{boardState:a,currentPlayer:n,visitedCoordinates:d,lastDirection:u,gameOver:l}}function un(t){let o="",s=0;const r=()=>{s>0&&(o+=s,s=0)};for(const a of t)a===I.None?s++:(r(),o+=At[a]);return r(),o}function xn(t){const o=[];for(const s of t){const r=St[s];r!==void 0?o.push(r):o.push(...Array(Number(s)).fill(I.None))}return o}function Fe(t,o){const{boardState:s,currentPlayer:r,gameOver:a}=Ce(t),{boardState:l,currentPlayer:n}=Ce(o);if(a)return{from:null,to:null,captured:[],playerChanged:!1};let h=null,d=null;const u=[],f=r===I.White?I.Black:I.White;for(let y=0;y<s.length;y++)for(let C=0;C<s[y].length;C++){const P=s[y][C],g=l[y][C];P===r&&g===I.None&&(h=[y,C]),P===I.None&&g===r&&(d=[y,C]),P===f&&g===I.None&&u.push([y,C])}if(!h||!d)return{from:null,to:null,captured:[],playerChanged:r!==n};if(u.length>1){const[y,C]=ve(h,d);u.some(([g,v])=>(g-d[0])*y+(v-d[1])*C>0)?u.sort((g,v)=>{const k=Math.abs(g[0]-d[0])+Math.abs(g[1]-d[1]),$=Math.abs(v[0]-d[0])+Math.abs(v[1]-d[1]);return k-$}):u.sort((g,v)=>{const k=Math.abs(g[0]-h[0])+Math.abs(g[1]-h[1]),$=Math.abs(v[0]-h[0])+Math.abs(v[1]-h[1]);return k-$})}return{from:h,to:d,captured:u,playerChanged:r!==n}}const ht={CARDINAL:[[-1,0],[1,0],[0,-1],[0,1]],DIAGONAL:[[-1,-1],[-1,1],[1,-1],[1,1]]},Mt=300,Ct=300,it=150,kn=660,Ze=150,pn=[[2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2],[2,1,2,1,0,2,1,2,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],fn=[[2,2,2,2,2],[2,2,2,2,2],[2,1,0,2,1],[1,1,1,1,1],[1,1,1,1,1]],wn=[[2,2,2],[2,0,1],[1,1,1]],gn=Le(pn),zn=Le(fn),Gn=Le(wn),Ke=gn;function vn(t,o){return(t+o)%2===0}function bn(t){const o=t?.fbs??Ke,s=Q(o),{boardState:r,currentPlayer:a,visitedCoordinates:l,lastDirection:n}=Ce(o),h=Q(structuredClone(r)),d=Q(t?.currentPlayer??a),u=Q(t?.currentPhase??(l.length>0?O.Target:O.Pick)),f=Q(l[l.length-1]??null),y=Q(l.slice(0,-1)),C=Q(n),P=Tt({rowSize:h.value.length,colSize:h.value[0]?.length??0}),g=Rt(()=>{const w=[],b=[];return h.value.forEach((m,A)=>{m.forEach((i,e)=>{if(i!==d.value)return;const x=K(A,e);if(x.data.length!==0){if(x.hasCaptures){b.push([A,e]);return}w.push([A,e])}})}),b.length>0?b:w}),v=Q({});Ae(u,w=>{w===O.Pick&&!y.value.length?f.value=null:w===O.GameOver&&(W(!0),d.value=I.None)});function k(w,b){return h.value[w]?.[b]??I.None}function $(w,b){const{rowSize:m,colSize:A}=P;if(w<0||w>=m||b<0||b>=A)throw new Error(`Invalid node coordinates: (${w}, ${b})`);return w*A+b}function ie(w,b){const m=[...ht.CARDINAL];vn(w,b)&&m.push(...ht.DIAGONAL);const A=[];for(const[i,e]of m){const x=w+i,p=b+e,S=x>=0&&x<P.rowSize,M=p>=0&&p<P.colSize;S&&M&&A.push([x,p])}return A}function X(w,b){return ie(w,b).filter(([m,A])=>k(m,A)===I.None)}function K(w,b){const m=X(w,b).filter(([e,x])=>!y.value.some(([S,M])=>S===e&&M===x)).filter(([e,x])=>{if(!C.value)return!0;const[p,S]=ve([w,b],[e,x]);return p!==C.value[0]||S!==C.value[1]}),A=[w,b],i=m.filter(e=>{const x=z(A,e);return x.approach?.length>0||x.withdrawal?.length>0});return i.length===0&&y.value.length>0?{hasCaptures:!1,data:[]}:i.length>0?{hasCaptures:!0,data:i}:{hasCaptures:!1,data:m}}function J(w,b){if(f.value){const[m,A]=f.value;return m===w&&A===b}return g.value.some(([m,A])=>m===w&&A===b)}function oe(w,b){const[m,A]=w,[i,e]=b;if(u.value!==O.Target)return{success:!1};const x=(M,T)=>M>=0&&M<P.rowSize&&T>=0&&T<P.colSize;if(!x(m,A)||!x(i,e))return{success:!1};if(m===i&&A===e)return{success:!1};const p=k(m,A);return p!==d.value?{success:!1}:K(m,A).data.some(([M,T])=>M===i&&T===e)?(u.value=O.Moving,h.value[m][A]=I.None,h.value[i][e]=p,f.value=b,C.value=ve(w,b),z(w,b)):{success:!1}}function Z(){d.value=d.value===I.White?I.Black:I.White,u.value=O.Pick,y.value=[],v.value={},C.value=null,f.value=null,W()}function U(w,b){const[m,A]=ve(w,b),i=d.value===I.White?I.Black:I.White,e=[];let x=b[0]+m,p=b[1]+A;for(;k(x,p)===i;)e.push([x,p]),x+=m,p+=A;return e}function ee(w,b){const[m,A]=ve(w,b),i=d.value===I.White?I.Black:I.White,e=[];let x=w[0]-m,p=w[1]-A;for(;k(x,p)===i;)e.push([x,p]),x-=m,p-=A;return e}function z(w,b){const m=U(w,b),A=ee(w,b),i=m.length>0||A.length>0;return m.length>0&&A.length>0?(v.value={approach:m,withdrawal:A},i&&se(w),{success:!0,needsChoice:!0,approach:m,withdrawal:A}):m.length>0?{success:!0,approach:m}:A.length>0?{success:!0,withdrawal:A}:{success:!0}}function W(w=!1){const b=[...y.value];w&&f.value&&b.push([...f.value]),s.value=Le(h.value,{currentPlayer:d.value,visitedCoordinates:b,gameOver:u.value===O.GameOver})}function H(w,b){b.forEach(([m,A])=>{h.value[m][A]=I.None}),se(w),y.value.length>1&&W(!0)}function fe(){if(!f.value||u.value!==O.Moving)return null;const[w,b]=f.value,m=K(w,b);return m.hasCaptures?(W(!0),m.data):[]}function ke(w){const{boardState:b,currentPlayer:m,visitedCoordinates:A,lastDirection:i,gameOver:e}=Ce(w);s.value=w,h.value=structuredClone(b),P.rowSize=b.length,P.colSize=b[0]?.length??0,d.value=m,u.value=e?O.GameOver:A.length>0?O.Target:O.Pick,f.value=A[A.length-1]??null,y.value=A.slice(0,-1),C.value=i,v.value={}}function se(w){const b=y.value.some(([A,i])=>A===w[0]&&i===w[1]);let m=!1;if(f.value){const[A,i]=f.value;m=A!==w[0]||i!==w[1]}!b&&m&&y.value.push(w)}return{activeStone:f,boardState:h,boardSize:P,currentFbs:s,currentPlayer:d,currentPhase:u,lastDirection:C,movableStones:g,visitedCoordinates:y,vulnerableStones:v,confirmCapture:H,endTurn:Z,getPlayerAtNode:k,getPlaceholderIndex:$,getEmptyNeighbors:X,getMultiCaptureCoordinates:fe,getNeighbors:ie,getValidDestinations:K,isStoneMovable:J,loadFbs:ke,moveStone:oe}}var ot={};(function t(o,s,r,a){var l=!!(o.Worker&&o.Blob&&o.Promise&&o.OffscreenCanvas&&o.OffscreenCanvasRenderingContext2D&&o.HTMLCanvasElement&&o.HTMLCanvasElement.prototype.transferControlToOffscreen&&o.URL&&o.URL.createObjectURL),n=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!o.OffscreenCanvas)return!1;try{var i=new OffscreenCanvas(1,1),e=i.getContext("2d");e.fillRect(0,0,1,1);var x=i.transferToImageBitmap();e.createPattern(x,"no-repeat")}catch{return!1}return!0})();function d(){}function u(i){var e=s.exports.Promise,x=e!==void 0?e:o.Promise;return typeof x=="function"?new x(i):(i(d,d),null)}var f=(function(i,e){return{transform:function(x){if(i)return x;if(e.has(x))return e.get(x);var p=new OffscreenCanvas(x.width,x.height),S=p.getContext("2d");return S.drawImage(x,0,0),e.set(x,p),p},clear:function(){e.clear()}}})(h,new Map),y=(function(){var i=Math.floor(16.666666666666668),e,x,p={},S=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(M){var T=Math.random();return p[T]=requestAnimationFrame(function B(N){S===N||S+i-1<N?(S=N,delete p[T],M()):p[T]=requestAnimationFrame(B)}),T},x=function(M){p[M]&&cancelAnimationFrame(p[M])}):(e=function(M){return setTimeout(M,i)},x=function(M){return clearTimeout(M)}),{frame:e,cancel:x}})(),C=(function(){var i,e,x={};function p(S){function M(T,B){S.postMessage({options:T||{},callback:B})}S.init=function(B){var N=B.transferControlToOffscreen();S.postMessage({canvas:N},[N])},S.fire=function(B,N,G){if(e)return M(B,null),e;var q=Math.random().toString(36).slice(2);return e=u(function(j){function Y(ne){ne.data.callback===q&&(delete x[q],S.removeEventListener("message",Y),e=null,f.clear(),G(),j())}S.addEventListener("message",Y),M(B,q),x[q]=Y.bind(null,{data:{callback:q}})}),e},S.reset=function(){S.postMessage({reset:!0});for(var B in x)x[B](),delete x[B]}}return function(){if(i)return i;if(!r&&l){var S=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{i=new Worker(URL.createObjectURL(new Blob([S])))}catch(M){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",M),null}p(i)}return i}})(),P={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(i,e){return e?e(i):i}function v(i){return i!=null}function k(i,e,x){return g(i&&v(i[e])?i[e]:P[e],x)}function $(i){return i<0?0:Math.floor(i)}function ie(i,e){return Math.floor(Math.random()*(e-i))+i}function X(i){return parseInt(i,16)}function K(i){return i.map(J)}function J(i){var e=String(i).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:X(e.substring(0,2)),g:X(e.substring(2,4)),b:X(e.substring(4,6))}}function oe(i){var e=k(i,"origin",Object);return e.x=k(e,"x",Number),e.y=k(e,"y",Number),e}function Z(i){i.width=document.documentElement.clientWidth,i.height=document.documentElement.clientHeight}function U(i){var e=i.getBoundingClientRect();i.width=e.width,i.height=e.height}function ee(i){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=i,e}function z(i,e,x,p,S,M,T,B,N){i.save(),i.translate(e,x),i.rotate(M),i.scale(p,S),i.arc(0,0,1,T,B,N),i.restore()}function W(i){var e=i.angle*(Math.PI/180),x=i.spread*(Math.PI/180);return{x:i.x,y:i.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:i.startVelocity*.5+Math.random()*i.startVelocity,angle2D:-e+(.5*x-Math.random()*x),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:i.color,shape:i.shape,tick:0,totalTicks:i.ticks,decay:i.decay,drift:i.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:i.gravity*3,ovalScalar:.6,scalar:i.scalar,flat:i.flat}}function H(i,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var x=e.tick++/e.totalTicks,p=e.x+e.random*e.tiltCos,S=e.y+e.random*e.tiltSin,M=e.wobbleX+e.random*e.tiltCos,T=e.wobbleY+e.random*e.tiltSin;if(i.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-x)+")",i.beginPath(),n&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))i.fill(b(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(M-p)*.1,Math.abs(T-S)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var B=Math.PI/10*e.wobble,N=Math.abs(M-p)*.1,G=Math.abs(T-S)*.1,q=e.shape.bitmap.width*e.scalar,j=e.shape.bitmap.height*e.scalar,Y=new DOMMatrix([Math.cos(B)*N,Math.sin(B)*N,-Math.sin(B)*G,Math.cos(B)*G,e.x,e.y]);Y.multiplySelf(new DOMMatrix(e.shape.matrix));var ne=i.createPattern(f.transform(e.shape.bitmap),"no-repeat");ne.setTransform(Y),i.globalAlpha=1-x,i.fillStyle=ne,i.fillRect(e.x-q/2,e.y-j/2,q,j),i.globalAlpha=1}else if(e.shape==="circle")i.ellipse?i.ellipse(e.x,e.y,Math.abs(M-p)*e.ovalScalar,Math.abs(T-S)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):z(i,e.x,e.y,Math.abs(M-p)*e.ovalScalar,Math.abs(T-S)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var D=Math.PI/2*3,he=4*e.scalar,ce=8*e.scalar,ue=e.x,de=e.y,we=5,ae=Math.PI/we;we--;)ue=e.x+Math.cos(D)*ce,de=e.y+Math.sin(D)*ce,i.lineTo(ue,de),D+=ae,ue=e.x+Math.cos(D)*he,de=e.y+Math.sin(D)*he,i.lineTo(ue,de),D+=ae;else i.moveTo(Math.floor(e.x),Math.floor(e.y)),i.lineTo(Math.floor(e.wobbleX),Math.floor(S)),i.lineTo(Math.floor(M),Math.floor(T)),i.lineTo(Math.floor(p),Math.floor(e.wobbleY));return i.closePath(),i.fill(),e.tick<e.totalTicks}function fe(i,e,x,p,S){var M=e.slice(),T=i.getContext("2d"),B,N,G=u(function(q){function j(){B=N=null,T.clearRect(0,0,p.width,p.height),f.clear(),S(),q()}function Y(){r&&!(p.width===a.width&&p.height===a.height)&&(p.width=i.width=a.width,p.height=i.height=a.height),!p.width&&!p.height&&(x(i),p.width=i.width,p.height=i.height),T.clearRect(0,0,p.width,p.height),M=M.filter(function(ne){return H(T,ne)}),M.length?B=y.frame(Y):j()}B=y.frame(Y),N=j});return{addFettis:function(q){return M=M.concat(q),G},canvas:i,promise:G,reset:function(){B&&y.cancel(B),N&&N()}}}function ke(i,e){var x=!i,p=!!k(e||{},"resize"),S=!1,M=k(e,"disableForReducedMotion",Boolean),T=l&&!!k(e||{},"useWorker"),B=T?C():null,N=x?Z:U,G=i&&B?!!i.__confetti_initialized:!1,q=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,j;function Y(D,he,ce){for(var ue=k(D,"particleCount",$),de=k(D,"angle",Number),we=k(D,"spread",Number),ae=k(D,"startVelocity",Number),Ue=k(D,"decay",Number),ze=k(D,"gravity",Number),Oe=k(D,"drift",Number),$e=k(D,"colors",K),Ge=k(D,"ticks",Number),De=k(D,"shapes"),Ee=k(D,"scalar"),qe=!!k(D,"flat"),Te=oe(D),Re=ue,Ve=[],je=i.width*Te.x,c=i.height*Te.y;Re--;)Ve.push(W({x:je,y:c,angle:de,spread:we,startVelocity:ae,color:$e[Re%$e.length],shape:De[ie(0,De.length)],ticks:Ge,decay:Ue,gravity:ze,drift:Oe,scalar:Ee,flat:qe}));return j?j.addFettis(Ve):(j=fe(i,Ve,N,he,ce),j.promise)}function ne(D){var he=M||k(D,"disableForReducedMotion",Boolean),ce=k(D,"zIndex",Number);if(he&&q)return u(function(ae){ae()});x&&j?i=j.canvas:x&&!i&&(i=ee(ce),document.body.appendChild(i)),p&&!G&&N(i);var ue={width:i.width,height:i.height};B&&!G&&B.init(i),G=!0,B&&(i.__confetti_initialized=!0);function de(){if(B){var ae={getBoundingClientRect:function(){if(!x)return i.getBoundingClientRect()}};N(ae),B.postMessage({resize:{width:ae.width,height:ae.height}});return}ue.width=ue.height=null}function we(){j=null,p&&(S=!1,o.removeEventListener("resize",de)),x&&i&&(document.body.contains(i)&&document.body.removeChild(i),i=null,G=!1)}return p&&!S&&(S=!0,o.addEventListener("resize",de,!1)),B?B.fire(D,ue,we):Y(D,ue,we)}return ne.reset=function(){B&&B.reset(),j&&j.reset()},ne}var se;function w(){return se||(se=ke(null,{useWorker:!0,resize:!0})),se}function b(i,e,x,p,S,M,T){var B=new Path2D(i),N=new Path2D;N.addPath(B,new DOMMatrix(e));var G=new Path2D;return G.addPath(N,new DOMMatrix([Math.cos(T)*S,Math.sin(T)*S,-Math.sin(T)*M,Math.cos(T)*M,x,p])),G}function m(i){if(!n)throw new Error("path confetti are not supported in this browser");var e,x;typeof i=="string"?e=i:(e=i.path,x=i.matrix);var p=new Path2D(e),S=document.createElement("canvas"),M=S.getContext("2d");if(!x){for(var T=1e3,B=T,N=T,G=0,q=0,j,Y,ne=0;ne<T;ne+=2)for(var D=0;D<T;D+=2)M.isPointInPath(p,ne,D,"nonzero")&&(B=Math.min(B,ne),N=Math.min(N,D),G=Math.max(G,ne),q=Math.max(q,D));j=G-B,Y=q-N;var he=10,ce=Math.min(he/j,he/Y);x=[ce,0,0,ce,-Math.round(j/2+B)*ce,-Math.round(Y/2+N)*ce]}return{type:"path",path:e,matrix:x}}function A(i){var e,x=1,p="#000000",S='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof i=="string"?e=i:(e=i.text,x="scalar"in i?i.scalar:x,S="fontFamily"in i?i.fontFamily:S,p="color"in i?i.color:p);var M=10*x,T=""+M+"px "+S,B=new OffscreenCanvas(M,M),N=B.getContext("2d");N.font=T;var G=N.measureText(e),q=Math.ceil(G.actualBoundingBoxRight+G.actualBoundingBoxLeft),j=Math.ceil(G.actualBoundingBoxAscent+G.actualBoundingBoxDescent),Y=2,ne=G.actualBoundingBoxLeft+Y,D=G.actualBoundingBoxAscent+Y;q+=Y+Y,j+=Y+Y,B=new OffscreenCanvas(q,j),N=B.getContext("2d"),N.font=T,N.fillStyle=p,N.fillText(e,ne,D);var he=1/x;return{type:"bitmap",bitmap:B.transferToImageBitmap(),matrix:[he,0,0,he,-q*he/2,-j*he/2]}}s.exports=function(){return w().apply(this,arguments)},s.exports.reset=function(){w().reset()},s.exports.create=ke,s.exports.shapeFromPath=m,s.exports.shapeFromText=A})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),ot,!1);const We=ot.exports;ot.exports.create;function mn(){return{charm:yt(),realisticLook:yt(),schoolPride:(...t)=>An(...t)}}function yt(){const o={origin:{y:.7}},s=(a,l)=>{We({...o,...l,particleCount:200*a})};function r(){s(.25,{spread:26,startVelocity:55}),s(.2,{spread:60}),s(.35,{spread:100,decay:.91,scalar:.8}),s(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),s(.1,{spread:120,startVelocity:45})}return r}function An(...t){(!t||t.length===0)&&(t=["#bb0000","#ffffff","#0000bb"]);const o=Date.now()+15*1e3;let s=!1;return(function a(){return We({particleCount:2,angle:60,spread:55,origin:{x:0},colors:t}),We({particleCount:2,angle:120,spread:55,origin:{x:1},colors:t}),Date.now()<o&&!s&&requestAnimationFrame(a),()=>s=!0})()}const Sn=20;function Mn(t){const o=new Map,s=new Map,r=Bn(t,o,s),a=Cn(t,o,s);function l(){if(!t.divMarkers)return;const h=t.divMarkers.getBoundingClientRect();for(const[d,u]of o.entries()){if(!(u instanceof HTMLElement))continue;const f=t.placeholders?.item(d);if(!f)continue;const y=f.getBoundingClientRect(),C=s.get(d);u.style.top=`${y.top+y.height/2-h.top}px`,u.style.left=`${y.left+y.width/2-h.left}px`,C==="marker-active-white"||C==="marker-active-black"?(u.style.width=`${y.width+5}px`,u.style.height=`${y.height+5}px`):(u.style.width=`${y.width*.2}px`,u.style.height=`${y.height*.2}px`)}}const n=new ResizeObserver(l);return t.divMarkers&&n.observe(t.divMarkers),{placeMarkerAvailableWhite:r("marker-available-white"),placeMarkerAvailableBlack:r("marker-available-black"),placeMarkerActiveWhite:r("marker-active-white"),placeMarkerActiveBlack:r("marker-active-black"),placeMarkerAmbiguousWhite:r("marker-ambiguous-white"),placeMarkerAmbiguousBlack:r("marker-ambiguous-black"),placeMarkerArrow:En(t,o),removeMarkers:a,dispose:()=>n.disconnect()}}function Cn(t,o,s){return r=>{t.svgMarkers&&(r===void 0?(t.svgMarkers.innerHTML="",t.divMarkers&&(t.divMarkers.innerHTML=""),o.clear(),s.clear()):(o.get(r)?.remove(),o.delete(r),s.delete(r)))}}function En(t,o){return(s,r)=>{const a=t.placeholders?.item(s);if(!t.svgMarkers||!a)return!1;const l=+a.getAttribute("cx"),n=+a.getAttribute("cy"),h=Math.atan2(r[0],r[1])*(180/Math.PI),d=xe.arrow.cloneNode(!0);d.querySelector("path").setAttribute("class","marker-arrow");const f=Sn*.65;d.setAttribute("x",String(l-f/2)),d.setAttribute("y",String(n-f/2)),d.setAttribute("width",String(f)),d.setAttribute("height",String(f));const y=document.createElementNS(d.namespaceURI,"g");return y.setAttribute("transform",`rotate(${h}, ${l}, ${n})`),y.appendChild(d),t.svgMarkers.appendChild(y),o.set(s,y),!0}}function Bn(t,o,s){return r=>a=>{const l=t.placeholders?.item(a);if(!t.svgMarkers||!l||!t.divMarkers)return!1;const n=t.divMarkers.getBoundingClientRect(),h=l.getBoundingClientRect(),d=r==="marker-active-white"||r==="marker-active-black"?.3:.2,u=document.createElement("div");return u.setAttribute("class",r),u.style.top=`${h.top+h.height/2-n.top}px`,u.style.left=`${h.left+h.width/2-n.left}px`,u.style.width=`${h.width*d}px`,u.style.height=`${h.height*d}px`,t.divMarkers.appendChild(u),o.set(a,u),s.set(a,r),(r==="marker-active-white"||r==="marker-active-black")&&(u.style.width=`${h.width+5}px`,u.style.height=`${h.height+5}px`),!0}}function Et(t){const o=[];let s=[];for(const r of t)r===null||r===""?s.length>0&&(o.push(s),s=[]):s.push(r);return s.length>0&&o.push(s),o}function In(t){return t===0?0:(t-1)*Ze+kn}function qn(t,o=400){const s=Et(t);let r=0;for(const a of s){r+=Ct+it;for(let l=0;l<a.length-1;l++){const{from:n,to:h,captured:d}=Fe(a[l],a[l+1]);n&&h&&(r+=Mt,r+=In(d.length)),r+=o}r+=o}return r}const Pn=bt.match(/<defs>[\s\S]*?<\/defs>/)[0],ut=10,Je=8;let _n=0;const $n=(()=>{const t=[],o=xe.stoneTextureDefs.querySelector("#stone-marble"),s=xe.stoneWhite.querySelector(".texture-stone"),r=xe.stoneWhite.getAttribute("viewBox"),a=xe.stoneWhite.namespaceURI,l=crypto.getRandomValues(new Uint32Array(Je));for(let n=0;n<Je;n++){const h=`smp-${n}`,d=o.cloneNode(!0);d.setAttribute("id",h),d.querySelector("feTurbulence").setAttribute("seed",l[n].toString());const u=s.cloneNode(!0);u.setAttribute("filter",`url(#${h})`);const f=document.createElementNS(a,"defs");f.appendChild(d);const y=document.createElementNS(a,"svg");y.setAttribute("viewBox",r),y.setAttribute("xmlns",a),y.appendChild(f),y.appendChild(u),t.push(`data:image/svg+xml;base64,${btoa(y.outerHTML)}`)}return t})();function jn(t){const o=Se(),s=t==="white"?tt:et,r=`${t==="white"?"ws":"bs"}-${o}`,a=`${t==="white"?"wss":"bss"}-${o}`,l=`shadow-${o}`,n=Bt(o);return s.replace(/width="\d+"/,'width="100%"').replace(/height="\d+"/,'height="100%"').replace(/(<svg[^>]*>)/,`$1${n}`).replace(t==="white"?'fill="white"':'fill="black"',`fill="url(#${r})"`).replace(t==="white"?'stroke="url(#wss)"':'stroke="url(#bss)"',`stroke="url(#${a})"`).replace(/filter="url\(#shadow\)"/g,`filter="url(#${l})"`)}function Tn(t){const o=(t==="white"?xe.stoneWhite:xe.stoneBlack).cloneNode(!0),s=t==="white"?"ws":"bs",r=t==="white"?"wss":"bss",a=`${s}-${Se()}`,l=`${r}-${Se()}`,n=`shadow-${Se()}`,h=xe.stoneGradientDefs.querySelector(`#${s}`).cloneNode(!0),d=xe.stoneGradientDefs.querySelector(`#${r}`).cloneNode(!0),u=xe.stoneGradientDefs.querySelector("#shadow").cloneNode(!0),f=Vn(o);h.setAttribute("id",a),d.setAttribute("id",l),u.setAttribute("id",n);const y=document.createElementNS(o.namespaceURI,"defs");return y.appendChild(h),y.appendChild(d),y.appendChild(u),y.appendChild(f),o.prepend(y),o.querySelector("g[filter]").setAttribute("filter",`url(#${n})`),o.querySelector("circle").setAttribute("fill",`url(#${a})`),o.querySelector("circle:nth-child(2)").setAttribute("stroke",`url(#${l})`),o}function Qn(t){const o=typeof t=="string"?Ce(t).boardState:t,s=o.length,r=o[0]?.length??0,a=Se(),l=Bt(a),n=Rn(o,r,a),h=[l,n].filter(Boolean).join(`

`),d=vt(s,r);return h?d.replace("</svg>",`

${h}
</svg>`):d}function Bt(t){return Pn.replace(/id="ws"/g,`id="ws-${t}"`).replace(/id="bs"/g,`id="bs-${t}"`).replace(/id="wss"/g,`id="wss-${t}"`).replace(/id="bss"/g,`id="bss-${t}"`).replace(/id="shadow"/g,`id="shadow-${t}"`)}function Rn(t,o,s){const r=[];for(let a=0;a<t.length;a++)for(let l=0;l<o;l++){const n=t[a][l];if(n===I.None)continue;const h=l*le+te,d=a*le+te,u=n===I.White;r.push((u?tt:et).replace("<svg",`<svg x="${h-ut}" y="${d-ut}"`).replace(u?'fill="white"':'fill="black"',`fill="url(#${u?"ws":"bs"}-${s})"`).replace(u?'stroke="url(#wss)"':'stroke="url(#bss)"',`stroke="url(#${u?"wss":"bss"}-${s})"`).replace(/filter="url\(#shadow\)"/g,`filter="url(#shadow-${s})"`))}return r.length?`<g id="stones">
${r.join(`
`)}
</g>`:""}function Vn(t){const o=t.querySelector(".texture-stone"),s=$n[_n++%Je],r=`stone-texture-${Se()}`,a=document.createElementNS(t.namespaceURI,"image");a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("href",s);const l=document.createElementNS(t.namespaceURI,"pattern");return l.setAttribute("id",r),l.setAttribute("patternUnits","userSpaceOnUse"),l.setAttribute("width","100%"),l.setAttribute("height","100%"),l.appendChild(a),o.setAttribute("filter","none"),o.setAttribute("fill",`url(#${r})`),o.style.mixBlendMode="soft-light",gt||(o.style.opacity="0.35"),l}function Nn({gWhite:t,gBlack:o,placeholders:s,colSize:r,onStoneClick:a,onPlaceholderClick:l,skipDust:n=!1}){It(),l&&s&&s.forEach((P,g)=>{const v=Math.floor(g/r),k=g%r;P.addEventListener("click",$=>{$.stopPropagation(),l({index:g,row:v,col:k,nativeEvent:$})})});const h=xt({group:t,color:"white",placeholders:s,colSize:r,onStoneClick:a}),d=xt({group:o,color:"black",placeholders:s,colSize:r,onStoneClick:a});return{placeWhite:h,placeBlack:d,removeStone:P=>{const g=s?.item(P);if(!g)return!1;const v=+g.getAttribute("r"),k=String(+g.getAttribute("cx")-v),$=String(+g.getAttribute("cy")-v),ie=[t,o].filter(Boolean);for(const X of ie)for(const K of Array.from(X.children))if(K.getAttribute("x")===k&&K.getAttribute("y")===$)return K.remove(),!0;return!1},captureStones:async P=>{const g=[];for(const v of P){const k=s?.item(v);if(!k)continue;const $=+k.getAttribute("r"),ie=+k.getAttribute("cx"),X=+k.getAttribute("cy"),K=String(ie-$),J=String(X-$),oe=[t,o].filter(Boolean);for(const Z of oe)for(const U of Array.from(Z.children))if(U.getAttribute("x")===K&&U.getAttribute("y")===J){g.push({stone:U,color:Z===t?"white":"black"});break}}if(g.length!==0){await Promise.all(g.map(({stone:v,color:k},$)=>Wn(v,k,$*150,n)));for(const{stone:v}of g)v.remove()}},moveStoneVisually:async(P,g)=>{const v=s?.item(P),k=s?.item(g);if(!v||!k)return!1;const $=+v.getAttribute("cx"),ie=+v.getAttribute("cy"),X=+v.getAttribute("r"),K=String($-X),J=String(ie-X),oe=[t,o].filter(Boolean);let Z=null,U="white";for(const S of oe){for(const M of Array.from(S.children))if(M.getAttribute("x")===K&&M.getAttribute("y")===J){Z=M,U=S===t?"white":"black";break}if(Z)break}if(!Z)return!1;const ee=+k.getAttribute("cx"),z=+k.getAttribute("cy"),W=+k.getAttribute("r");Z.remove();const H=Math.floor(g/r),fe=g%r;(U==="white"?h:d)(H,fe);const se=String(ee-W),w=String(z-W),b=U==="white"?t:o;let m=null;for(const S of Array.from(b.children))if(S.getAttribute("x")===se&&S.getAttribute("y")===w){m=S;break}if(!m)return!1;const A=$-X,i=ie-X,e=ee-W,x=z-W;return m.setAttribute("x",String(A)),m.setAttribute("y",String(i)),m.querySelector("g").classList.remove("spawn"),await On(m,A,i,e,x,Mt),!0},removeStones:()=>{t&&(t.innerHTML=""),o&&(o.innerHTML="")}}}function xt({group:t,color:o,placeholders:s,colSize:r,onStoneClick:a}){return(l,n)=>{const h=l*r+n,d=s?.item(h);if(!t||!d)return!1;const u=+d.getAttribute("cx"),f=+d.getAttribute("cy"),y=+d.getAttribute("r"),C=Tn(o);C.setAttribute("x",String(u-y)),C.setAttribute("y",String(f-y)),C.setAttribute("width",String(y*2)),C.setAttribute("height",String(y*2));const P=Math.random()*(it/1e3);return C.style.setProperty("--delay",`${P}s`),C.querySelector("g").classList.add("spawn"),a&&C.addEventListener("click",v=>{v.stopPropagation(),a({index:h,row:l,col:n,color:o,nativeEvent:v})}),t.appendChild(C),!0}}function Qe(t,o,s){return new Promise(r=>{const a=t.animate(o,s),l=(s.delay||0)+(s.duration||0)+100,n=window.setTimeout(()=>a.finish(),l),h=()=>{clearTimeout(n),r()};a.finished.then(h).catch(h)})}function On(t,o,s,r,a,l){return new Promise(n=>{const h=performance.now(),d=g=>g<.5?2*g*g:-1+(4-2*g)*g,u=r-o,f=a-s,y=()=>{clearTimeout(C),t.setAttribute("x",String(r)),t.setAttribute("y",String(a)),n()},C=window.setTimeout(y,l+100);function P(g){const v=Math.min((g-h)/l,1),k=d(v);t.setAttribute("x",String(o+u*k)),t.setAttribute("y",String(s+f*k)),v<1?requestAnimationFrame(P):y()}requestAnimationFrame(P)})}function me(t,o){const s=document.createElement("div");s.style.cssText=`position:absolute;visibility:hidden;color:var(${t})`,o.appendChild(s);const r=getComputedStyle(s).color;s.remove();const a=r.match(/\d+/g);return!a||a.length<3?"#808080":"#"+a.slice(0,3).map(l=>(+l).toString(16).padStart(2,"0")).join("")}let Ye;function It(){if(!Ye){const t=document.createElement("canvas");t.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:51",document.body.appendChild(t),Ye=We.create(t,{resize:!0,useWorker:!1})}return Ye}function Dn(t,o){const s=t.getBoundingClientRect();let r=t;for(;r.parentElement&&!(r.parentElement instanceof HTMLElement);)r=r.parentElement;const a=r.parentElement??document.body,l=o==="white"?"--ft-w":"--ft-b",n=o==="white"?"--ft-crack-white":"--ft-crack-black",h=[me(`${l}-stop-base`,a),me(`${l}-stop-mid`,a),me(`${l}-stop-rim`,a),me(`${l}-stop-edge`,a),me(`${l}-inner-stroke-shine`,a),me(`${l}-inner-stroke`,a),me(`${n}-stroke`,a),me(`${n}-flash`,a)],d=s.width/45;It()({origin:{x:(s.left+s.width/2)/window.innerWidth,y:(s.top+s.height/2)/window.innerHeight},particleCount:Math.round(Math.max(50,22*d)),spread:360,startVelocity:d*5,scalar:Math.min(2.5,.7*d),ticks:55,gravity:.1,shapes:["square","star"],colors:h})}const Hn=[[[-.308,-.615],[-.513,-.923]],[[.41,-.718],[.718,-.923]],[[.821,.308]],[[.205,.718],[.103,1.026]],[[-.615,.615],[-.821,.923]]];function Fn(t,o,s,r){const a=r.map(([l,n])=>`${t+l*s},${o+n*s}`).join(" L");return`M${t},${o} L${a}`}async function Wn(t,o,s=0,r=!1){const a=o==="black"?"var(--ft-crack-black-stroke, rgba(255,255,255,0.9))":"var(--ft-crack-white-stroke, rgba(0,0,0,0.65))",l=o==="black"?"var(--ft-crack-black-flash, white)":"var(--ft-crack-white-flash, #111)";s>0&&await new Promise(v=>setTimeout(v,s));const n=t.querySelector("circle"),h=n.namespaceURI,d=+n.getAttribute("cx"),u=+n.getAttribute("cy"),f=+n.getAttribute("r");r||Dn(t,o);const y=document.createElementNS(h,"circle");y.setAttribute("cx",String(d)),y.setAttribute("cy",String(u)),y.setAttribute("r",String(f)),y.setAttribute("fill",l),y.setAttribute("opacity","0"),t.appendChild(y),await Qe(y,[{opacity:"0"},{opacity:"0.55"},{opacity:"0"}],{duration:80,easing:"ease-out"}),y.remove();const C=Math.random()*72,P=document.createElementNS(h,"g");P.setAttribute("transform",`rotate(${C}, ${d}, ${u})`),t.appendChild(P);const g=Hn.map(v=>{const k=document.createElementNS(h,"path"),$=Fn(d,u,f,v);return k.setAttribute("d",$),k.setAttribute("stroke",a),k.setAttribute("stroke-width","0.8"),k.setAttribute("fill","none"),k.setAttribute("stroke-linecap","round"),P.appendChild(k),k});await Promise.all(g.map((v,k)=>{const $=v.getTotalLength();return v.setAttribute("stroke-dasharray",String($)),v.setAttribute("stroke-dashoffset",String($)),Qe(v,[{strokeDashoffset:String($)},{strokeDashoffset:"0"}],{duration:180,delay:k*25,easing:"ease-out",fill:"forwards"})})),await Qe(t,[{opacity:"1"},{opacity:"0"}],{duration:300,easing:"ease-in",fill:"forwards"})}const Yn=kt({__name:"Fanorona",props:lt({player:{},mode:{},moves:{},previewInterval:{},rotate:{type:Boolean},theme:{}},{fbs:{},fbsModifiers:{}}),emits:lt(["crowned","moved"],["update:fbs"]),setup(t,{expose:o,emit:s}){const r=t,a=s,l=Vt(t,"fbs"),n=bn({fbs:l.value}),h=Q(0),d=Q(0),u=Q(0),f=Q(!1);let y={cancelled:!1},C=null,P=!1;function g(){const c=r.moves??[],E=c.findIndex(R=>!R);return E===-1?c:c.slice(0,E)}const v=Q([]),k=Q([]);let $=!1;function ie(c){$||v.value.push(c)}function X(){$||at(()=>{$||k.value.push(v.value.length-1)})}function K(c){v.value=c?[c]:[],k.value=[]}o({reset:i,loadBoard:e,receiveMove:Ge,receiveEndTurn:De,endTurnEarly:ze,canEndTurnEarly:Ue,forfeit:qe,currentPlayer:n.currentPlayer,currentPhase:n.currentPhase,multiHopTrigger:h,replayStep:d,replayTotal:u,replayIsPlaying:f,replayNext:S,replayPrev:T,replayRestart:B,replayJumpToEnd:N,replayPlay:G,replayPause:q,historyMoves:v,historyBoundaries:k,historyReset:K});const J=()=>!r.mode&&(r.player===void 0||r.player===n.currentPlayer.value),oe=Q(null),Z=Q([]),U=Q([]),ee=Q([]),z=Q([]);let W,H,fe=null,ke={cancelled:!1},se=Promise.resolve(),w;const b=c=>new Promise(E=>setTimeout(E,c)),m=mn();pt(()=>{if(w=l.value,r.mode||(window.addEventListener("click",ce),window.addEventListener("beforeunload",A)),W=Nn({gWhite:oe.value?.gWhiteRef,gBlack:oe.value?.gBlackRef,placeholders:oe.value?.placeholdersRef,colSize:n.boardSize.colSize,onStoneClick:D,onPlaceholderClick:ue,skipDust:r.mode==="preview"&&gt}),H=Mn({svgMarkers:oe.value?.gMarkersRef,divMarkers:oe.value?.markerContainerRef,placeholders:oe.value?.placeholdersRef}),r.mode||e(w??Ke),r.mode==="preview"&&p(),r.mode==="replay"){const c=g();u.value=c.length,d.value=0,c.length&&e(c[0])}}),Nt(()=>{ke.cancelled=!0,y.cancelled=!0,C!==null&&(clearTimeout(C),C=null),H.dispose(),r.mode||(window.removeEventListener("click",ce),window.removeEventListener("beforeunload",A))});function A(c){c.preventDefault()}Ae(l,c=>{!r.mode&&c!==n.currentFbs.value&&!yn(n.currentFbs.value)&&e(c)}),Ae(n.currentFbs,c=>{l.value=c,r.mode||ie(c)},{immediate:!0}),Ae(n.currentPlayer,()=>{r.mode||X()}),Ae(n.currentPhase,c=>{switch(c){case O.Pick:case O.Target:Y()}}),Ae(n.visitedCoordinates,()=>{n.currentPhase.value!==O.GameOver&&ne()},{deep:!0});function i(){if(r.mode==="preview"){p();return}if(r.mode==="replay"){B();return}const c=w??Ke;K(c),e(c)}function e(c){r.mode||($=!0,at(()=>{$=!1})),se=Promise.resolve(),H.removeMarkers(),Z.value=[],U.value=[],ee.value=[],z.value=[],W.removeStones(),c&&n.loadFbs(c),x(),n.currentPhase.value!==O.GameOver&&(Re(Te())||(Y(),ne()))}function x(){n.boardState.value.forEach((c,E)=>{c.forEach((R,_)=>{switch(R){case I.White:W.placeWhite(E,_);break;case I.Black:W.placeBlack(E,_);break}})})}async function p(){ke.cancelled=!0,ke={cancelled:!1};const c=ke,E=Et(r.moves),R=r.previewInterval??400;for(;!c.cancelled;)for(const _ of E){if(c.cancelled)return;W.removeStones(),n.loadFbs(_[0]),x(),await b(Ct+it);for(let L=0;L<_.length-1;L++){if(c.cancelled)return;const{from:F,to:V,captured:re,playerChanged:ye}=Fe(_[L],_[L+1]);if(!F||!V){ye&&H.removeMarkers(),await b(R);continue}const be=n.getPlaceholderIndex(F[0],F[1]),Be=n.getPlaceholderIndex(V[0],V[1]);if(await W.moveStoneVisually(be,Be),c.cancelled||(H.placeMarkerArrow(be,ve(F,V)),re.length&&(await W.captureStones(re.map(([ge,Ne])=>n.getPlaceholderIndex(ge,Ne))),c.cancelled)))return;await b(R),ye&&H.removeMarkers()}H.removeMarkers(),await b(R)}}Ae(()=>r.moves,()=>{if(r.mode!=="replay")return;y.cancelled=!0,y={cancelled:!1};const c=g();u.value=c.length,q(),d.value=0,H.removeMarkers(),z.value=[],c.length&&e(c[0])});async function S(){if(!f.value)return M()}async function M(){const c=g();if(d.value>=c.length-1){q();return}if(P)return;P=!0;const E=y;try{const R=d.value;d.value=R+1;const _=c[R+1],{from:L,to:F,captured:V,playerChanged:re}=Fe(c[R],_);if(re&&ae(),L&&F){const ye=n.getPlaceholderIndex(L[0],L[1]),be=n.getPlaceholderIndex(F[0],F[1]);if(re||(de(),we(_)),pe("move"),await W.moveStoneVisually(ye,be),E.cancelled||V.length&&(V.forEach((Be,ge)=>setTimeout(()=>{E.cancelled||pe("capture")},ge*Ze)),await W.captureStones(V.map(([Be,ge])=>n.getPlaceholderIndex(Be,ge))),E.cancelled))return}re&&de(),n.loadFbs(_)}finally{P=!1}}async function T(){if(f.value||d.value<=0||P)return;P=!0;const c=y,E=g(),R=E[d.value-1],_=E[d.value],{from:L,to:F,captured:V,playerChanged:re}=Fe(R,_);try{if(re&&ae(),L&&F){const ye=n.getPlaceholderIndex(L[0],L[1]),be=n.getPlaceholderIndex(F[0],F[1]);if(pe("move"),await W.moveStoneVisually(be,ye),c.cancelled)return;if(V.length){const Be=Ce(R);for(const[ge,Ne]of V)Be.boardState[ge][Ne]===I.White?W.placeWhite(ge,Ne):W.placeBlack(ge,Ne)}}if(c.cancelled)return;de(),n.loadFbs(R),d.value--}finally{P=!1}}function B(){q(),y.cancelled=!0,y={cancelled:!1};const c=g();d.value=0,H.removeMarkers(),z.value=[],c.length&&e(c[0])}function N(){q(),y.cancelled=!0,y={cancelled:!1};const c=g();d.value=c.length-1,H.removeMarkers(),z.value=[],c.length&&e(c[d.value])}function G(){f.value||(f.value=!0,j())}function q(){f.value=!1,C!==null&&(clearTimeout(C),C=null)}function j(){if(!f.value)return;const c=r.previewInterval??400;C=setTimeout(async()=>{C=null,f.value&&(await M(),j())},c)}function Y(){if(!J()||(n.currentPhase.value===O.Pick&&(H.removeMarkers(),n.movableStones.value.forEach(([L,F])=>{const V=n.getPlaceholderIndex(L,F);n.currentPlayer.value===I.White?H.placeMarkerAvailableWhite(V):H.placeMarkerAvailableBlack(V),Z.value.push(V)})),!n.activeStone.value))return;U.value.forEach(H.removeMarkers),U.value=[],Z.value.forEach(H.removeMarkers),Z.value=[];const[c,E]=n.activeStone.value,R=n.getPlaceholderIndex(c,E);n.currentPlayer.value===I.White?H.placeMarkerActiveWhite(R):H.placeMarkerActiveBlack(R),U.value.push(R),(n.currentPhase.value===O.Target||n.currentPhase.value===O.Moving)&&n.getValidDestinations(c,E).data.forEach(([L,F])=>{const V=n.getPlaceholderIndex(L,F);n.currentPlayer.value===I.White?H.placeMarkerAvailableWhite(V):H.placeMarkerAvailableBlack(V),Z.value.push(V)})}function ne(){const c=n.visitedCoordinates.value,E=n.activeStone.value;if(!c.length||!E)return;const R=[...c,E];c.forEach(([_,L],F)=>{const V=n.getPlaceholderIndex(_,L);if(z.value.includes(V))return;const re=ve(R[F],R[F+1]);H.placeMarkerArrow(V,re),z.value.push(V)})}function D(c){if(J())switch(n.currentPhase.value){case O.Pick:case O.Target:he(c);break;case O.Moving:je(c);break}}function he(c){const{row:E,col:R}=c;if(n.visitedCoordinates.value.length)return;if(n.activeStone.value&&E===n.activeStone.value[0]&&R===n.activeStone.value[1]){ce(c.nativeEvent);return}if(!n.isStoneMovable(E,R)){ce(c.nativeEvent);return}n.currentPhase.value=O.Target,n.activeStone.value=[E,R],pe("pick-stone"),H.removeMarkers()}function ce(c){J()&&n.currentPhase.value===O.Target&&(n.visitedCoordinates.value.length||(n.currentPhase.value=O.Pick,pe("unpick-stone")))}function ue(c){if(!J()||n.currentPhase.value!==O.Target||!n.activeStone.value)return;const[E,R]=n.activeStone.value;if(!n.getValidDestinations(E,R).data.some(([F,V])=>F===c.row&&V===c.col)){ce(c.nativeEvent);return}ae(),Oe({from:[E,R],to:[c.row,c.col]})}function de(){z.value.forEach(H.removeMarkers),z.value=[]}function we(c){const{visitedCoordinates:E}=Ce(c);if(E.length<2)return;E.slice(0,-1).forEach(([_,L],F)=>{const V=n.getPlaceholderIndex(_,L);if(z.value.includes(V))return;const re=ve(E[F],E[F+1]);H.placeMarkerArrow(V,re),z.value.push(V)})}function ae(){const c=[...Z.value,...U.value,...ee.value];Z.value=[],U.value=[],ee.value=[],c.forEach(H.removeMarkers)}function Ue(){return!r.mode&&J()&&n.currentPhase.value===O.Target&&n.visitedCoordinates.value.length>0}function ze(){if(r.mode)throw new Error("[Fanorona] `endTurnEarly` cannot be called in preview/replay mode.");J()&&(n.currentPhase.value!==O.Target||!n.visitedCoordinates.value.length||(ae(),de(),n.endTurn()))}async function Oe({from:c,to:E,captureType:R}){const[_,L]=c,[F,V]=E,re=n.moveStone([_,L],[F,V]);if(!re.success)throw new Error("Invalid move attempted. This should not happen if the UI is correctly marking valid moves.");const ye=n.getPlaceholderIndex(_,L);if(H.placeMarkerArrow(ye,n.lastDirection.value),z.value.push(ye),pe("move"),await W.moveStoneVisually(n.getPlaceholderIndex(_,L),n.getPlaceholderIndex(F,V)),n.currentPhase.value!==O.GameOver){if(re.needsChoice){R!==void 0?await Ee({trailCoord:c,result:re,captureType:R}):(fe=c,Ve(),pe("ambiguous-move"));return}$e(c),J()?(se=se.then(()=>Ee({trailCoord:c,result:re})),await se):await Ee({trailCoord:c,result:re})}}function $e(c,E){if(r.mode||!J())return;const R=ct(n.activeStone.value);a("moved",{from:ct(c),to:R,captureType:E})}async function Ge({from:c,to:E,captureType:R}){if(r.mode)throw new Error("[Fanorona] `receiveMove` cannot be called in preview/replay mode.");return se=se.then(async()=>{n.currentPhase.value=O.Target,n.activeStone.value=c,ae(),await Oe({from:c,to:E,captureType:R})}),await se,n.currentPlayer.value}function De(){if(r.mode)throw new Error("[Fanorona] `receiveEndTurn` cannot be called in preview/replay mode.");ae(),de(),n.endTurn()}async function Ee({trailCoord:c,result:E,captureType:R}){let _=[];switch(R){case Me.Approach:_=E.approach??[];break;case Me.Withdrawal:_=E.withdrawal??[];break;default:_=E.approach?.length?E.approach:E.withdrawal??[]}if(!_.length){de(),n.endTurn();return}if(ee.value.forEach(H.removeMarkers),ee.value=[],_.forEach((F,V)=>setTimeout(()=>pe("capture"),V*Ze)),await W.captureStones(_.map(([F,V])=>n.getPlaceholderIndex(F,V))),n.currentPhase.value===O.GameOver||(n.confirmCapture(c,_),Re(Te())))return;const L=n.getMultiCaptureCoordinates();L!==null&&(L.length?(n.currentPhase.value=O.Target,J()&&(pe("multi-hop"),h.value++)):(de(),n.endTurn()))}function qe(){ae(),n.currentPhase.value=O.GameOver}function Te(){const c=n.boardState.value.flat();return c.includes(I.White)?c.includes(I.Black)?I.None:I.White:I.Black}function Re(c){return c===I.None?!1:(n.currentPhase.value===O.GameOver||(n.currentPhase.value=O.GameOver,a("crowned",c),(!r.player||c===r.player)&&(pe("win"),m.charm())),!0)}function Ve(){const c=([E,R])=>{const _=n.getPlaceholderIndex(E,R);n.currentPlayer.value===I.White?H.placeMarkerAmbiguousBlack(_):H.placeMarkerAmbiguousWhite(_),ee.value.push(_)};n.vulnerableStones.value.approach?.forEach(c),n.vulnerableStones.value.withdrawal?.forEach(c)}function je(c){if(n.currentPhase.value!==O.Moving)throw new Error('Invalid phase for choosing approach/withdrawal. Expected "Moving" phase.');const{row:E,col:R}=c;let _=null;const L=([ye,be])=>ye===E&&be===R,F=n.vulnerableStones.value.approach,V=n.vulnerableStones.value.withdrawal;for(const ye of F??[])if(L(ye)){_=Me.Approach;break}if(_===null){for(const ye of V??[])if(L(ye)){_=Me.Withdrawal;break}}if(_===null)return;$e(fe,_),fe=null;const re=n.activeStone.value;se=se.then(()=>Ee({trailCoord:re,result:{approach:_===Me.Approach?F:void 0,withdrawal:_===Me.Withdrawal?V:void 0},captureType:_}))}return(c,E)=>(wt(),ft("div",{class:Xe(["w-full",{"is-preview":!!t.mode}])},[Ot(hn,{ref_key:"fanoronaBoardRef",ref:oe,rotate:r.rotate||r.player===He(I).Black,theme:r.theme,rows:He(n).boardSize.rowSize,cols:He(n).boardSize.colSize},null,8,["rotate","theme","rows","cols"])],2))}});export{Pe as B,Me as C,gn as I,I as P,Yn as _,zn as a,Gn as b,mn as c,dt as d,qn as e,Ce as f,jn as g,vt as h,yn as i,Qn as j,Un as k,pn as l,fn as m,wn as n,hn as o,te as p,le as q,Le as r,Xt as s,Qt as t,Yt as u};
