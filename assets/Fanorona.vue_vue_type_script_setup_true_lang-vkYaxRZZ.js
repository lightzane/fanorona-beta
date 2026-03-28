import{d as Me,o as ke,a as Be,c as De,u as Fe,r as P,P as Pe,K as le,x as Ze,e as Ie,V as Te,y as Ne,b as Re,l as Ae,W as Ce}from"./index-DHBRPtqQ.js";var b=(t=>(t[t.None=0]="None",t[t.White=1]="White",t[t.Black=2]="Black",t))(b||{}),re=(t=>(t[t.Approach=0]="Approach",t[t.Withdrawal=1]="Withdrawal",t))(re||{}),D=(t=>(t[t.Pause=0]="Pause",t[t.Pick=1]="Pick",t[t.Target=2]="Target",t[t.Moving=3]="Moving",t[t.Waiting=4]="Waiting",t[t.GameOver=5]="GameOver",t))(D||{});const We=`<!--\r
  WHY DOES THIS ARROW POINT EAST (RIGHT)?\r
\r
  In math, angles are measured starting from the East direction (pointing right).\r
  This is called the "standard position" or "mathematical convention":\r
\r
      North (-90°)\r
           ↑\r
  West ←  0°  → East (0°)  ← this is where angles START\r
           ↓\r
      South (90°)\r
\r
  Math.atan2 follows this same convention — it returns 0 when the direction is East,\r
  positive angles going clockwise (South = 90°), and negative going counter-clockwise (North = -90°).\r
\r
  So when we apply rotate(angle) from atan2 to this SVG, we're saying:\r
    "Start from East, then rotate by this many degrees."\r
\r
  If this arrow pointed North or any other direction by default, we'd have to add\r
  an offset to every angle to compensate. Pointing East means no offset needed —\r
  the math and the arrow are already in sync.\r
\r
  TL;DR: Point your default arrow East so that rotate(0°) = no rotation = correct.\r
-->\r
<svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg">\r
    <path\r
        d="M20 20 L80 50 L20 80 L30 50 Z"\r
        fill="currentColor"\r
    />\r
</svg>`,Ge=`<!-- See \`stoneGradientDefs\` in svg-assets.ts -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">\r
  <defs>\r
  <!-- ***** v1 ***** -->\r
    <!-- White stone: soft 3-D highlight -->\r
    <!-- <radialGradient id="ws" cx="38%" cy="32%" r="62%">\r
      <stop stop-color="#ffffff"/>\r
      <stop offset="1" stop-color="#e8ddd0"/>\r
    </radialGradient> -->\r
\r
    <!-- Black stone: dark with subtle warmth -->\r
    <!-- <radialGradient id="bs" cx="38%" cy="32%" r="62%">\r
      <stop stop-color="#3a2a1e"/>\r
      <stop offset="1" stop-color="#0d0604"/>\r
    </radialGradient> -->\r
\r
  <!-- ***** v2 ***** -->\r
    <!--\r
      White chip:\r
      - Flat ivory surface (no center bright spot)\r
      - Slightly darker toward edges = ambient occlusion / rim depth\r
      - NOT lighter in center — that's what causes the sphere illusion\r
    -->\r
    <radialGradient id="ws" cx="50%" cy="50%" r="50%">\r
      <stop offset="0%"   stop-color="#ede6d4"/>   <!-- flat surface, uniform -->\r
      <stop offset="68%"  stop-color="#e8e0cc"/>   <!-- same flat surface -->\r
      <stop offset="85%"  stop-color="#cfc5ae"/>   <!-- rim starts darkening -->\r
      <stop offset="100%" stop-color="#b8ac96"/>   <!-- outer edge (bevel shadow) -->\r
    </radialGradient>\r
\r
    <!--\r
      Black chip:\r
      - Same approach: flat dark surface, darker toward outer edge only\r
    -->\r
    <radialGradient id="bs" cx="50%" cy="50%" r="50%">\r
      <stop offset="0%"   stop-color="#2e1e14"/>   <!-- flat surface, uniform -->\r
      <stop offset="68%"  stop-color="#271810"/>   <!-- same flat surface -->\r
      <stop offset="85%"  stop-color="#160d06"/>   <!-- rim starts darkening -->\r
      <stop offset="100%" stop-color="#0a0502"/>   <!-- outer edge (bevel shadow) -->\r
    </radialGradient>\r
  </defs>\r
\r
  <!-- White Preview -->\r
  <g id="white">\r
    <circle cx="8" cy="8" r="7" fill="url(#ws)" stroke="black" stroke-width="0.5" />\r
    <circle cx="8" cy="8" r="6.25" fill="none" stroke="#b0a48c" stroke-width="0.3" />\r
  </g>\r
  \r
  <!-- Black Preview -->\r
  <g id="black">\r
    <circle cx="24" cy="24" r="7" fill="url(#bs)" stroke="black" stroke-width="0.5" />\r
    <circle cx="24" cy="24" r="6.25" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="0.7" />\r
  </g>\r
</svg>`,Oe=`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <!--
    x, y, width, height are NOT set here.
    They are dynamically set by marker-placer.ts
    based on the placeholder circle position and MARKER_SIZE.

    Class name is also NOT set here.
    It is injected by marker-placer.ts so styles stay decoupled from this asset.
  -->
  <circle cx="10" cy="10" r="9" />
</svg>
`,$e=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
    <circle cx="10" cy="10" r="9.75" fill="black" stroke="black" stroke-width="0.5"/>
    <circle cx="10" cy="10" r="8" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="0.7"/>
</g>
</svg>
`,qe=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
    <circle cx="10" cy="10" r="9.75" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="10" cy="10" r="8" fill="none" stroke="#b0a48c" stroke-width="0.3"/>
</g>
</svg>
`,Ue=`<svg width="100%" viewBox="0 0 270 150" fill="none" xmlns="http://www.w3.org/2000/svg">

<path id="board" d="M0 16C0 10.3995 0 7.59921 1.08993 5.46009C2.04867 3.57847 3.57847 2.04867 5.46009 1.08993C7.59921 0 10.3995 0 16 0H135H254C259.601 0 262.401 0 264.54 1.08993C266.422 2.04867 267.951 3.57847 268.91 5.46009C270 7.59921 270 10.3995 270 16V134C270 139.601 270 142.401 268.91 144.54C267.951 146.422 266.422 147.951 264.54 148.91C262.401 150 259.601 150 254 150H16C10.3995 150 7.59921 150 5.46009 148.91C3.57847 147.951 2.04867 146.422 1.08993 144.54C0 142.401 0 139.601 0 134V16Z" fill="#F5DEB3"/>

<path id="union-intersections" d="M255.518 14.5127L256.704 15.71L256 16.4082V135H255.518V136H195.907L195.713 136.197L195.513 136H15.0176V135.018L15 135H14V15H15L15.0176 14.9824V14H255.518V14.5127ZM17.4141 134H44V107.414L17.4141 134ZM46 134H72.5859L46 107.414V134ZM76.9316 134H104V107.377L76.9316 134ZM106 134H132.586L106 107.414V134ZM137.429 134H164V107.647L137.429 134ZM166 134H192.586L166 107.414V134ZM197.874 134H224V107.437L197.874 134ZM226 134H252.586L226 107.414V134ZM196 133.053L222.608 106H196V133.053ZM136 132.6L162.821 106H136V132.6ZM16 132.586L42.5859 106H16V132.586ZM74 132.586V106H47.4141L74 132.586ZM134 132.586V106H107.414L134 132.586ZM194 132.586V106H167.414L194 132.586ZM254 132.586V106H227.414L254 132.586ZM76 132.11L102.548 106H76V132.11ZM16 104H42.5859L16 77.4141V104ZM47.4141 104H74V77.4141L47.4141 104ZM76 104H102.586L76 77.4141V104ZM107.434 104H134V77.8701L107.434 104ZM136 104H162.586L136 77.4141V104ZM167.679 104H194V77.8955L167.679 104ZM196 104H222.586L196 77.4141V104ZM227.38 104H254V76.9336L227.38 104ZM166 102.848L193.071 76H166V102.848ZM106 102.604L133.05 76H106V102.604ZM44 102.586V76H17.4141L44 102.586ZM46 102.586L72.5859 76H46V102.586ZM104 102.586V76H77.4141L104 102.586ZM164 102.586V76H137.414L164 102.586ZM224 102.586V76H197.414L224 102.586ZM226 102.551L252.114 76H226V102.551ZM17.4141 74H44V47.4141L17.4141 74ZM46 74H72.5859L46 47.4141V74ZM77.4141 74H104V47.4141L77.4141 74ZM106 74H132.586L106 47.4141V74ZM137.936 74H164V48.3643L137.936 74ZM166 74H192.586L166 47.4141V74ZM197.929 74H224V48.1436L197.929 74ZM226 74H252.586L226 47.4141V74ZM136 73.0986L163.552 46H136V73.0986ZM196 73.0957L223.321 46H196V73.0957ZM16 72.5859L42.5859 46H16V72.5859ZM74 72.5859V46H47.4141L74 72.5859ZM76 72.5859L102.586 46H76V72.5859ZM134 72.5859V46H107.414L134 72.5859ZM194 72.5859V46H167.414L194 72.5859ZM254 72.5859V46H227.414L254 72.5859ZM16 44H42.5859L16 17.4141V44ZM47.4141 44H74V17.4141L47.4141 44ZM76 44H102.586L76 17.4141V44ZM107.414 44H134V17.4141L107.414 44ZM136 44H162.586L136 17.4141V44ZM168.438 44H194V18.8584L168.438 44ZM196 44H222.586L196 17.4141V44ZM228.179 44H254V18.3916L228.179 44ZM166 43.5918L194 16.0527V16H166V43.5918ZM226 43.3438L253.571 16H226V43.3438ZM44 42.5859V16H17.4141L44 42.5859ZM46 42.5859L72.5859 16H46V42.5859ZM104 42.5859V16H77.4141L104 42.5859ZM106 42.5859L132.586 16H106V42.5859ZM164 42.5859V16H137.414L164 42.5859ZM224 42.5859V16H197.414L224 42.5859Z" fill="#DFBC7A"/>

<g id="nodes">
    <circle id="c" cx="15" cy="15" r="5" fill="#DFBC7A"/>
    <circle id="c_2" cx="45" cy="15" r="5" fill="#DFBC7A"/>
    <circle id="c_3" cx="75" cy="15" r="5" fill="#DFBC7A"/>
    <circle id="c_4" cx="105" cy="15" r="5" fill="#DFBC7A"/>
    <circle id="c_5" cx="135" cy="15" r="5" fill="#DFBC7A"/>
    <circle id="c_6" cx="165" cy="15" r="5" fill="#DFBC7A"/>
    <circle id="c_7" cx="195" cy="15" r="5" fill="#DFBC7A"/>
    <circle id="c_8" cx="225" cy="15" r="5" fill="#DFBC7A"/>
    <circle id="c_9" cx="255" cy="15" r="5" fill="#DFBC7A"/>
    <circle id="c_10" cx="15" cy="45" r="5" fill="#DFBC7A"/>
    <circle id="c_11" cx="45" cy="45" r="5" fill="#DFBC7A"/>
    <circle id="c_12" cx="75" cy="45" r="5" fill="#DFBC7A"/>
    <circle id="c_13" cx="105" cy="45" r="5" fill="#DFBC7A"/>
    <circle id="c_14" cx="135" cy="45" r="5" fill="#DFBC7A"/>
    <circle id="c_15" cx="165" cy="45" r="5" fill="#DFBC7A"/>
    <circle id="c_16" cx="195" cy="45" r="5" fill="#DFBC7A"/>
    <circle id="c_17" cx="225" cy="45" r="5" fill="#DFBC7A"/>
    <circle id="c_18" cx="255" cy="45" r="5" fill="#DFBC7A"/>
    <circle id="c_19" cx="15" cy="75" r="5" fill="#DFBC7A"/>
    <circle id="c_20" cx="45" cy="75" r="5" fill="#DFBC7A"/>
    <circle id="c_21" cx="75" cy="75" r="5" fill="#DFBC7A"/>
    <circle id="c_22" cx="105" cy="75" r="5" fill="#DFBC7A"/>
    <circle id="c_23" cx="135" cy="75" r="5" fill="#DFBC7A"/>
    <circle id="c_24" cx="165" cy="75" r="5" fill="#DFBC7A"/>
    <circle id="c_25" cx="195" cy="75" r="5" fill="#DFBC7A"/>
    <circle id="c_26" cx="225" cy="75" r="5" fill="#DFBC7A"/>
    <circle id="c_27" cx="255" cy="75" r="5" fill="#DFBC7A"/>
    <circle id="c_28" cx="15" cy="105" r="5" fill="#DFBC7A"/>
    <circle id="c_29" cx="45" cy="105" r="5" fill="#DFBC7A"/>
    <circle id="c_30" cx="75" cy="105" r="5" fill="#DFBC7A"/>
    <circle id="c_31" cx="105" cy="105" r="5" fill="#DFBC7A"/>
    <circle id="c_32" cx="135" cy="105" r="5" fill="#DFBC7A"/>
    <circle id="c_33" cx="165" cy="105" r="5" fill="#DFBC7A"/>
    <circle id="c_34" cx="195" cy="105" r="5" fill="#DFBC7A"/>
    <circle id="c_35" cx="225" cy="105" r="5" fill="#DFBC7A"/>
    <circle id="c_36" cx="255" cy="105" r="5" fill="#DFBC7A"/>
    <circle id="c_37" cx="15" cy="135" r="5" fill="#DFBC7A"/>
    <circle id="c_38" cx="45" cy="135" r="5" fill="#DFBC7A"/>
    <circle id="c_39" cx="75" cy="135" r="5" fill="#DFBC7A"/>
    <circle id="c_40" cx="105" cy="135" r="5" fill="#DFBC7A"/>
    <circle id="c_41" cx="135" cy="135" r="5" fill="#DFBC7A"/>
    <circle id="c_42" cx="165" cy="135" r="5" fill="#DFBC7A"/>
    <circle id="c_43" cx="195" cy="135" r="5" fill="#DFBC7A"/>
    <circle id="c_44" cx="225" cy="135" r="5" fill="#DFBC7A"/>
    <circle id="c_45" cx="255" cy="135" r="5" fill="#DFBC7A"/>
</g>

<g id="stone-placeholders">
    <circle id="sp0" cx="15" cy="15" r="10" fill="#DFBC7A"/>
    <circle id="sp1" cx="45" cy="15" r="10" fill="#DFBC7A"/>
    <circle id="sp2" cx="75" cy="15" r="10" fill="#DFBC7A"/>
    <circle id="sp3" cx="105" cy="15" r="10" fill="#DFBC7A"/>
    <circle id="sp4" cx="135" cy="15" r="10" fill="#DFBC7A"/>
    <circle id="sp5" cx="165" cy="15" r="10" fill="#DFBC7A"/>
    <circle id="sp6" cx="195" cy="15" r="10" fill="#DFBC7A"/>
    <circle id="sp7" cx="225" cy="15" r="10" fill="#DFBC7A"/>
    <circle id="sp8" cx="255" cy="15" r="10" fill="#DFBC7A"/>
    <circle id="sp9" cx="15" cy="45" r="10" fill="#DFBC7A"/>
    <circle id="sp10" cx="45" cy="45" r="10" fill="#DFBC7A"/>
    <circle id="sp11" cx="75" cy="45" r="10" fill="#DFBC7A"/>
    <circle id="sp12" cx="105" cy="45" r="10" fill="#DFBC7A"/>
    <circle id="sp13" cx="135" cy="45" r="10" fill="#DFBC7A"/>
    <circle id="sp14" cx="165" cy="45" r="10" fill="#DFBC7A"/>
    <circle id="sp15" cx="195" cy="45" r="10" fill="#DFBC7A"/>
    <circle id="sp16" cx="225" cy="45" r="10" fill="#DFBC7A"/>
    <circle id="sp17" cx="255" cy="45" r="10" fill="#DFBC7A"/>
    <circle id="sp18" cx="15" cy="75" r="10" fill="#DFBC7A"/>
    <circle id="sp19" cx="45" cy="75" r="10" fill="#DFBC7A"/>
    <circle id="sp20" cx="75" cy="75" r="10" fill="#DFBC7A"/>
    <circle id="sp21" cx="105" cy="75" r="10" fill="#DFBC7A"/>
    <circle id="sp22" cx="135" cy="75" r="10" fill="#DFBC7A"/>
    <circle id="sp23" cx="165" cy="75" r="10" fill="#DFBC7A"/>
    <circle id="sp24" cx="195" cy="75" r="10" fill="#DFBC7A"/>
    <circle id="sp25" cx="225" cy="75" r="10" fill="#DFBC7A"/>
    <circle id="sp26" cx="255" cy="75" r="10" fill="#DFBC7A"/>
    <circle id="sp27" cx="15" cy="105" r="10" fill="#DFBC7A"/>
    <circle id="sp28" cx="45" cy="105" r="10" fill="#DFBC7A"/>
    <circle id="sp29" cx="75" cy="105" r="10" fill="#DFBC7A"/>
    <circle id="sp30" cx="105" cy="105" r="10" fill="#DFBC7A"/>
    <circle id="sp31" cx="135" cy="105" r="10" fill="#DFBC7A"/>
    <circle id="sp32" cx="165" cy="105" r="10" fill="#DFBC7A"/>
    <circle id="sp33" cx="195" cy="105" r="10" fill="#DFBC7A"/>
    <circle id="sp34" cx="225" cy="105" r="10" fill="#DFBC7A"/>
    <circle id="sp35" cx="255" cy="105" r="10" fill="#DFBC7A"/>
    <circle id="sp36" cx="15" cy="135" r="10" fill="#DFBC7A"/>
    <circle id="sp37" cx="45" cy="135" r="10" fill="#DFBC7A"/>
    <circle id="sp38" cx="75" cy="135" r="10" fill="#DFBC7A"/>
    <circle id="sp39" cx="105" cy="135" r="10" fill="#DFBC7A"/>
    <circle id="sp40" cx="135" cy="135" r="10" fill="#DFBC7A"/>
    <circle id="sp41" cx="165" cy="135" r="10" fill="#DFBC7A"/>
    <circle id="sp42" cx="195" cy="135" r="10" fill="#DFBC7A"/>
    <circle id="sp43" cx="225" cy="135" r="10" fill="#DFBC7A"/>
    <circle id="sp44" cx="255" cy="135" r="10" fill="#DFBC7A"/>
</g>

</svg>
`;function ae(t){return new DOMParser().parseFromString(t,"image/svg+xml")}const ue={stoneWhite:ae(qe).querySelector("svg"),stoneBlack:ae($e).querySelector("svg"),markerCircle:ae(Oe).querySelector("svg"),arrow:ae(We).querySelector("svg"),stoneGradientDefs:ae(Ge).querySelector("defs")},ze=["innerHTML"],Ye=Me({__name:"Board",setup(t,{expose:i}){const n=P(null),c=P(null),m=P(null),A=P(null),e=P(null),l=P(null);i({boardRef:c,stonePlaceholdersRef:m,gWhiteRef:A,gBlackRef:e,gMarkersRef:l}),ke(()=>{const S=n.value?.querySelector("svg");if(!S)throw new Error("Could not find SVG element in container");c.value=S;const p=S.querySelector("g#stone-placeholders");if(!p)throw new Error("Could not find '#stone-placeholders' group in SVG");const y=p.querySelectorAll("circle");if(!y)throw new Error("Could not find 'circle' elements in '#stone-placeholders' group in SVG");m.value=y,S.prepend(document.importNode(ue.stoneGradientDefs,!0));const g=d("stones");A.value=d("white",g),e.value=d("black",g),l.value=d("markers")});function d(S,p){const y=document.createElementNS(c.value.namespaceURI,"g");return y.setAttribute("id",S),(p??c.value).appendChild(y),y}return(S,p)=>(Be(),De("div",{ref_key:"containerRef",ref:n,class:"mx-auto w-full max-w-3xl",innerHTML:Fe(Ue)},null,8,ze))}}),Xe=Pe(Ye,[["__scopeId","data-v-a14a179c"]]);function j(t,i){const n=i[0]-t[0],c=i[1]-t[1];if(n<-1||n>1||c<-1||c>1)throw new Error(`Invalid move: from ${t} to ${i} is not a valid direction.`);return[n,c]}const Le={[b.White]:"w",[b.Black]:"b"},Ve={w:b.White,b:b.Black};function He(t,i={}){const{currentPlayer:n=b.White,visitedCoordinates:c=[]}=i,m=t.map(Ke).join("/"),A=Le[n],e=c.length?c.map(([l,d])=>`${l}${d}+`).join(""):"-";return`${m} ${A} ${e}`}function pe(t){const[i,n,c]=t.split(" "),m=i.split("/").map(je),A=Ve[n]??b.White,e=!c||c==="-"?[]:c.split("+").filter(Boolean).map(d=>[Number(d[0]),Number(d[1])]),l=e.length>=2?j(e[e.length-2],e[e.length-1]):null;return{boardState:m,currentPlayer:A,visitedCoordinates:e,lastDirection:l}}function Ke(t){let i="",n=0;const c=()=>{n>0&&(i+=n,n=0)};for(const m of t)m===b.None?n++:(c(),i+=Le[m]);return c(),i}function je(t){const i=[];for(const n of t){const c=Ve[n];c!==void 0?i.push(c):i.push(...Array(Number(n)).fill(b.None))}return i}const se=20,Je=.3,he=se*Je;function Qe(t){const i=new Map,n=rt(t,i),c=et(t,i);return{placeMarkerGreen:n("marker-green"),placeMarkerBlue:n("marker-blue"),placeMarkerHighlight:n("marker-highlight"),placeMarkerArrow:tt(t,i),removeMarkers:c}}function et(t,i){return n=>{t.gMarkers&&(n===void 0?(t.gMarkers.innerHTML="",i.clear()):(i.get(n)?.remove(),i.delete(n)))}}function tt(t,i){return(n,c)=>{const m=t.placeholders?.item(n);if(!t.gMarkers||!m)return!1;const A=+m.getAttribute("cx"),e=+m.getAttribute("cy"),l=Math.atan2(c[0],c[1])*(180/Math.PI),d=ue.arrow.cloneNode(!0);d.querySelector("path").setAttribute("class","marker-arrow");const p=se*.7;d.setAttribute("x",String(A-p/2)),d.setAttribute("y",String(e-p/2)),d.setAttribute("width",String(p)),d.setAttribute("height",String(p));const y=document.createElementNS(d.namespaceURI,"g");return y.setAttribute("transform",`rotate(${l}, ${A}, ${e})`),y.appendChild(d),t.gMarkers.appendChild(y),i.set(n,y),!0}}function rt(t,i){return n=>c=>{const m=t.placeholders?.item(c);if(!t.gMarkers||!m)return!1;const A=+m.getAttribute("cx"),e=+m.getAttribute("cy"),l=ue.markerCircle.cloneNode(!0),d=l.querySelector("circle");if(n!=="marker-blue"&&d.setAttribute("class",n),n==="marker-blue"){const S=document.createElementNS(l.namespaceURI,"circle");S.setAttribute("cx",String(se/2)),S.setAttribute("cy",String(se/2)),S.setAttribute("r",String(se*.7)),S.setAttribute("fill-opacity","0.3"),l.insertBefore(S,d),l.setAttribute("overflow","visible")}return l.setAttribute("x",String(A-he/2)),l.setAttribute("y",String(e-he/2)),l.setAttribute("width",String(he)),l.setAttribute("height",String(he)),t.gMarkers.appendChild(l),i.set(c,l),n==="marker-blue"&&requestAnimationFrame(()=>{d.setAttribute("class",n),l.querySelector("circle:first-child")?.setAttribute("class",`${n} marker-blue-glow`)}),!0}}function nt({gWhite:t,gBlack:i,placeholders:n,colSize:c,onStoneClick:m,onPlaceholderClick:A}){A&&n&&n.forEach((g,h)=>{const s=Math.floor(h/c),C=h%c;g.addEventListener("click",x=>{x.stopPropagation(),A({index:h,row:s,col:C,nativeEvent:x})})});const e=be({group:t,color:"white",placeholders:n,colSize:c,onStoneClick:m}),l=be({group:i,color:"black",placeholders:n,colSize:c,onStoneClick:m});return{placeWhite:e,placeBlack:l,removeStone:g=>{const h=n?.item(g);if(!h)return!1;const s=+h.getAttribute("r"),C=String(+h.getAttribute("cx")-s),x=String(+h.getAttribute("cy")-s),I=[t,i].filter(Boolean);for(const N of I)for(const T of Array.from(N.children))if(T.getAttribute("x")===C&&T.getAttribute("y")===x)return T.remove(),!0;return!1},captureStones:async g=>{const h=[];for(const s of g){const C=n?.item(s);if(!C)continue;const x=+C.getAttribute("r"),I=+C.getAttribute("cx"),N=+C.getAttribute("cy"),T=String(I-x),$=String(N-x),J=[t,i].filter(Boolean);for(const W of J)for(const G of Array.from(W.children))if(G.getAttribute("x")===T&&G.getAttribute("y")===$){h.push({stone:G,color:W===t?"white":"black"});break}}if(h.length!==0){await Promise.all(h.map(({stone:s,color:C},x)=>at(s,C,x*150)));for(const{stone:s}of h)s.remove()}},moveStoneVisually:async(g,h)=>{const s=n?.item(g),C=n?.item(h);if(!s||!C)return!1;const x=+s.getAttribute("cx"),I=+s.getAttribute("cy"),N=+s.getAttribute("r"),T=String(x-N),$=String(I-N),J=[t,i].filter(Boolean);let W=null,G="white";for(const V of J){for(const R of Array.from(V.children))if(R.getAttribute("x")===T&&R.getAttribute("y")===$){W=R,G=V===t?"white":"black";break}if(W)break}if(!W)return!1;const ne=+C.getAttribute("cx"),Q=+C.getAttribute("cy"),Y=+C.getAttribute("r");W.remove();const K=Math.floor(h/c),ie=h%c;(G==="white"?e:l)(K,ie);const X=String(ne-Y),ce=String(Q-Y),o=G==="white"?t:i;let a=null;for(const V of Array.from(o.children))if(V.getAttribute("x")===X&&V.getAttribute("y")===ce){a=V;break}if(!a)return!1;const f=x-N,u=I-N,B=ne-Y,F=Q-Y;return a.setAttribute("x",String(f)),a.setAttribute("y",String(u)),a.querySelector("g").classList.remove("spawn"),await ct(a,f,u,B,F,st),!0},removeStones:()=>{t&&(t.innerHTML=""),i&&(i.innerHTML="")}}}function be({group:t,color:i,placeholders:n,colSize:c,onStoneClick:m}){return(A,e)=>{const l=A*c+e,d=n?.item(l);if(!t||!d)return!1;const S=+d.getAttribute("cx"),p=+d.getAttribute("cy"),y=+d.getAttribute("r"),g=(i==="white"?ue.stoneWhite:ue.stoneBlack).cloneNode(!0);g.setAttribute("x",String(S-y)),g.setAttribute("y",String(p-y)),g.setAttribute("width",String(y*2)),g.setAttribute("height",String(y*2));const h=Math.random()*(ye/1e3);return g.style.setProperty("--delay",`${h}s`),g.querySelector("g").classList.add("spawn"),g.querySelector("circle").setAttribute("fill",i==="white"?"url(#ws)":"url(#bs)"),m&&g.addEventListener("click",x=>{x.stopPropagation(),m({index:l,row:A,col:e,color:i,nativeEvent:x})}),t.appendChild(g),!0}}function we(t,i,n){return new Promise(c=>{const m=t.animate(i,n),A=(n.delay||0)+(n.duration||0)+100,e=window.setTimeout(()=>m.finish(),A),l=()=>{clearTimeout(e),c()};m.finished.then(l).catch(l)})}function ct(t,i,n,c,m,A){return new Promise(e=>{const l=performance.now(),d=s=>s<.5?2*s*s:-1+(4-2*s)*s,S=c-i,p=m-n,y=()=>{clearTimeout(g),t.setAttribute("x",String(c)),t.setAttribute("y",String(m)),e()},g=window.setTimeout(y,A+100);function h(s){const C=Math.min((s-l)/A,1),x=d(C);t.setAttribute("x",String(i+S*x)),t.setAttribute("y",String(n+p*x)),C<1?requestAnimationFrame(h):y()}requestAnimationFrame(h)})}const it=[[[-.308,-.615],[-.513,-.923]],[[.41,-.718],[.718,-.923]],[[.821,.308]],[[.205,.718],[.103,1.026]],[[-.615,.615],[-.821,.923]]];function ot(t,i,n,c){const m=c.map(([A,e])=>`${t+A*n},${i+e*n}`).join(" L");return`M${t},${i} L${m}`}async function at(t,i,n=0){const c=i==="black"?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.65)",m=i==="black"?"white":"#111";n>0&&await new Promise(s=>setTimeout(s,n));const A=t.querySelector("circle"),e=A.namespaceURI,l=+A.getAttribute("cx"),d=+A.getAttribute("cy"),S=+A.getAttribute("r"),p=document.createElementNS(e,"circle");p.setAttribute("cx",String(l)),p.setAttribute("cy",String(d)),p.setAttribute("r",String(S)),p.setAttribute("fill",m),p.setAttribute("opacity","0"),t.appendChild(p),await we(p,[{opacity:"0"},{opacity:"0.55"},{opacity:"0"}],{duration:80,easing:"ease-out"}),p.remove();const y=Math.random()*72,g=document.createElementNS(e,"g");g.setAttribute("transform",`rotate(${y}, ${l}, ${d})`),t.appendChild(g);const h=it.map(s=>{const C=document.createElementNS(e,"path"),x=ot(l,d,S,s);return C.setAttribute("d",x),C.setAttribute("stroke",c),C.setAttribute("stroke-width","0.8"),C.setAttribute("fill","none"),C.setAttribute("stroke-linecap","round"),g.appendChild(C),C});await Promise.all(h.map((s,C)=>{const x=s.getTotalLength();return s.setAttribute("stroke-dasharray",String(x)),s.setAttribute("stroke-dashoffset",String(x)),we(s,[{strokeDashoffset:String(x)},{strokeDashoffset:"0"}],{duration:180,delay:C*25,easing:"ease-out",fill:"forwards"})})),await we(t,[{opacity:"1"},{opacity:"0"}],{duration:300,easing:"ease-in",fill:"forwards"})}function lt(t,i){return(t+i)%2===0}const Se={CARDINAL:[[-1,0],[1,0],[0,-1],[0,1]],DIAGONAL:[[-1,-1],[-1,1],[1,-1],[1,1]]},st=300,xe=300,ye=150,ut=[[2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2],[2,1,2,1,0,2,1,2,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],me=He(ut);function dt(t){const i=me,n=P(i),{boardState:c,currentPlayer:m,visitedCoordinates:A,lastDirection:e}=pe(i),l=P(structuredClone(c)),d=P(m),S=P(A.length>0?D.Target:D.Pick),p=P(A[A.length-1]??null),y=P(A.slice(0,-1)),g=P(e),h={rowSize:l.value.length,colSize:l.value[0]?.length??0},s=Ze(()=>{const o=[],a=[];return l.value.forEach((f,u)=>{f.forEach((B,F)=>{if(B!==d.value)return;const L=$(u,F);if(L.data.length!==0){if(L.hasCaptures){a.push([u,F]);return}o.push([u,F])}})}),a.length>0?a:o}),C=P({});le(S,o=>{o===D.Pick&&!y.value.length&&(p.value=null)});function x(o,a){return l.value[o]?.[a]??b.None}function I(o,a){const{rowSize:f,colSize:u}=h;if(o<0||o>=f||a<0||a>=u)throw new Error(`Invalid node coordinates: (${o}, ${a})`);return o*u+a}function N(o,a){const f=[...Se.CARDINAL];lt(o,a)&&f.push(...Se.DIAGONAL);const u=[];for(const[B,F]of f){const L=o+B,V=a+F,R=L>=0&&L<h.rowSize,q=V>=0&&V<h.colSize;R&&q&&u.push([L,V])}return u}function T(o,a){return N(o,a).filter(([f,u])=>x(f,u)===b.None)}function $(o,a){const f=T(o,a).filter(([F,L])=>!y.value.some(([R,q])=>R===F&&q===L)).filter(([F,L])=>{if(!g.value)return!0;const[V,R]=j([o,a],[F,L]);return V!==g.value[0]||R!==g.value[1]}),u=[o,a],B=f.filter(F=>{const L=Y(u,F);return L.approach?.length>0||L.withdrawal?.length>0});return B.length===0&&y.value.length>0?{hasCaptures:!1,data:[]}:B.length>0?{hasCaptures:!0,data:B}:{hasCaptures:!1,data:f}}function J(o,a){if(p.value){const[f,u]=p.value;return f===o&&u===a}return s.value.some(([f,u])=>f===o&&u===a)}function W(o,a){const[f,u]=o,[B,F]=a;if(S.value!==D.Target)return{success:!1};const L=(q,ee)=>q>=0&&q<h.rowSize&&ee>=0&&ee<h.colSize;if(!L(f,u)||!L(B,F))return{success:!1};if(f===B&&u===F)return{success:!1};const V=x(f,u);return V!==d.value?{success:!1}:$(f,u).data.some(([q,ee])=>q===B&&ee===F)?(S.value=D.Moving,l.value[f][u]=b.None,l.value[B][F]=V,p.value=a,g.value=j(o,a),Y(o,a)):{success:!1}}function G(){d.value=d.value===b.White?b.Black:b.White,S.value=D.Pick,y.value=[],C.value={},g.value=null,K()}function ne(o,a){const[f,u]=j(o,a),B=d.value===b.White?b.Black:b.White,F=[];let L=a[0]+f,V=a[1]+u;for(;x(L,V)===B;)F.push([L,V]),L+=f,V+=u;return F}function Q(o,a){const[f,u]=j(o,a),B=d.value===b.White?b.Black:b.White,F=[];let L=o[0]-f,V=o[1]-u;for(;x(L,V)===B;)F.push([L,V]),L-=f,V-=u;return F}function Y(o,a){const f=ne(o,a),u=Q(o,a),B=f.length>0||u.length>0;return f.length>0&&u.length>0?(C.value={approach:f,withdrawal:u},B&&ce(o),{success:!0,needsChoice:!0,approach:f,withdrawal:u}):f.length>0?{success:!0,approach:f}:u.length>0?{success:!0,withdrawal:u}:{success:!0}}function K(o=!1){const a=[...y.value];o&&p.value&&a.push([...p.value]),n.value=He(l.value,{currentPlayer:d.value,visitedCoordinates:a})}function ie(o,a){a.forEach(([f,u])=>{l.value[f][u]=b.None}),ce(o),y.value.length>1&&K(!0)}function de(){if(!p.value)throw new Error("No active stone to check for multiple captures");if(S.value!==D.Moving)throw new Error("Can only check for multiple captures during Moving phase");const[o,a]=p.value,f=$(o,a);return f.hasCaptures?(K(!0),f.data):[]}function X(o){const{boardState:a,currentPlayer:f,visitedCoordinates:u,lastDirection:B}=pe(o);n.value=o,l.value=structuredClone(a),d.value=f,S.value=u.length>0?D.Target:D.Pick,p.value=u[u.length-1]??null,y.value=u.slice(0,-1),g.value=B,C.value={}}function ce(o){const a=y.value.some(([u,B])=>u===o[0]&&B===o[1]);let f=!1;if(p.value){const[u,B]=p.value;f=u!==o[0]||B!==o[1]}!a&&f&&y.value.push(o)}return{activeStone:p,boardState:l,boardSize:h,currentFbs:n,currentPlayer:d,currentPhase:S,lastDirection:g,movableStones:s,visitedCoordinates:y,vulnerableStones:C,confirmCapture:ie,endTurn:G,getPlayerAtNode:x,getPlaceholderIndex:I,getEmptyNeighbors:T,getMultiCaptureCoordinates:de,getNeighbors:N,getValidDestinations:$,isStoneMovable:J,loadFbs:X,moveStone:W}}const ht=Me({__name:"Fanorona",props:Ae({player:{},preview:{type:Boolean},previewMoves:{},previewInterval:{}},{fbs:{},fbsModifiers:{}}),emits:Ae(["crowned","moved"],["update:fbs"]),setup(t,{expose:i,emit:n}){const c=t,m=n,A=Ie(t,"fbs");i({reset:J,receiveMove:L,receiveEndTurn:V,endTurnEarly:u,canEndTurnEarly:f});const e=dt(),l=()=>!c.preview&&(c.player===void 0||c.player===e.currentPlayer.value),d=P(null),S=P([]),p=P([]),y=P([]),g=P([]);let h,s,C=null,x={cancelled:!1},I=Promise.resolve(),N;const T=r=>new Promise(v=>setTimeout(v,r));ke(()=>{N=A.value,c.preview||(window.addEventListener("click",X),window.addEventListener("beforeunload",$)),h=nt({gWhite:d.value?.gWhiteRef,gBlack:d.value?.gBlackRef,placeholders:d.value?.stonePlaceholdersRef,colSize:e.boardSize.colSize,onStoneClick:ie,onPlaceholderClick:ce}),s=Qe({gMarkers:d.value?.gMarkersRef,placeholders:d.value?.stonePlaceholdersRef}),c.preview||W(N??me),c.preview&&Q()}),Te(()=>{x.cancelled=!0,c.preview||(window.removeEventListener("click",X),window.removeEventListener("beforeunload",$))});function $(r){r.preventDefault()}le(A,r=>{!c.preview&&r!==e.currentFbs.value&&W(r)}),le(e.currentFbs,r=>{A.value=r}),le(e.currentPhase,r=>{switch(r){case D.Pick:case D.Target:Y()}}),le(e.visitedCoordinates,()=>{e.currentPhase.value!==D.GameOver&&K()},{deep:!0});function J(){if(c.preview){Q();return}h.removeStones(),W(N??me)}function W(r){s.removeMarkers(),S.value=[],p.value=[],y.value=[],g.value=[],r&&(h.removeStones(),e.loadFbs(r)),G(),!ee(q())&&(Y(),K())}function G(){e.boardState.value.forEach((r,v)=>{r.forEach((M,w)=>{switch(M){case b.White:h.placeWhite(v,w);break;case b.Black:h.placeBlack(v,w);break}})})}function ne(r,v){const{boardState:M,currentPlayer:w}=pe(r),{boardState:E,currentPlayer:H}=pe(v);let k=null,_=null;const Z=[],oe=w===b.White?b.Black:b.White;for(let O=0;O<M.length;O++)for(let U=0;U<M[O].length;U++){const fe=M[O][U],z=E[O][U];fe===w&&z===b.None&&(k=[O,U]),fe===b.None&&z===w&&(_=[O,U]),fe===oe&&z===b.None&&Z.push([O,U])}if(!k||!_)return{from:null,to:null,captured:[],playerChanged:w!==H};if(Z.length>1){const[O,U]=j(k,_);Z.some(([z,te])=>(z-_[0])*O+(te-_[1])*U>0)?Z.sort((z,te)=>{const ve=Math.abs(z[0]-_[0])+Math.abs(z[1]-_[1]),ge=Math.abs(te[0]-_[0])+Math.abs(te[1]-_[1]);return ve-ge}):Z.sort((z,te)=>{const ve=Math.abs(z[0]-k[0])+Math.abs(z[1]-k[1]),ge=Math.abs(te[0]-k[0])+Math.abs(te[1]-k[1]);return ve-ge})}return{from:k,to:_,captured:Z,playerChanged:w!==H}}async function Q(){x.cancelled=!0,x={cancelled:!1};const r=x,v=c.previewMoves,M=c.previewInterval??400;for(h.removeStones(),e.loadFbs(v[0]),G(),await T(xe+ye);!r.cancelled;){for(let w=0;w<v.length-1;w++){if(r.cancelled)return;const{from:E,to:H,captured:k,playerChanged:_}=ne(v[w],v[w+1]);if(!E||!H){_&&s.removeMarkers(),await T(M);continue}const Z=e.getPlaceholderIndex(E[0],E[1]),oe=e.getPlaceholderIndex(H[0],H[1]);if(await h.moveStoneVisually(Z,oe),r.cancelled||(s.placeMarkerArrow(Z,j(E,H)),k.length&&(await h.captureStones(k.map(([O,U])=>e.getPlaceholderIndex(O,U))),r.cancelled)))return;await T(M),_&&s.removeMarkers()}if(r.cancelled||(s.removeMarkers(),await T(M),r.cancelled))return;h.removeStones(),e.loadFbs(v[0]),G(),await T(xe+ye)}}function Y(){if(!l()||(e.currentPhase.value===D.Pick&&(s.removeMarkers(),e.movableStones.value.forEach(([E,H])=>{const k=e.getPlaceholderIndex(E,H);s.placeMarkerGreen(k)})),!e.activeStone.value))return;const[r,v]=e.activeStone.value,M=e.getPlaceholderIndex(r,v);s.placeMarkerBlue(M),p.value.push(M),(e.currentPhase.value===D.Target||e.currentPhase.value===D.Moving)&&e.getValidDestinations(r,v).data.forEach(([E,H])=>{const k=e.getPlaceholderIndex(E,H);s.placeMarkerGreen(k),S.value.push(k)})}function K(){const r=e.visitedCoordinates.value,v=e.activeStone.value;if(!r.length||!v)return;const M=[...r,v];r.forEach(([w,E],H)=>{const k=e.getPlaceholderIndex(w,E);if(g.value.includes(k))return;const _=j(M[H],M[H+1]);s.placeMarkerArrow(k,_),g.value.push(k)})}function ie(r){if(l())switch(e.currentPhase.value){case D.Pick:case D.Target:de(r);break;case D.Moving:Ee(r);break}}function de(r){const{row:v,col:M}=r;if(!e.visitedCoordinates.value.length){if(e.activeStone.value&&v===e.activeStone.value[0]&&M===e.activeStone.value[1]){X(r.nativeEvent);return}if(!e.isStoneMovable(v,M)){X(r.nativeEvent);return}e.currentPhase.value=D.Target,e.activeStone.value=[v,M],s.removeMarkers()}}function X(r){l()&&e.currentPhase.value===D.Target&&(e.visitedCoordinates.value.length||(e.currentPhase.value=D.Pick))}function ce(r){if(!l()||e.currentPhase.value!==D.Target||!e.activeStone.value)return;const[v,M]=e.activeStone.value;if(!e.getValidDestinations(v,M).data.some(([H,k])=>H===r.row&&k===r.col)){X(r.nativeEvent);return}a(),B({from:[v,M],to:[r.row,r.col]})}function o(){g.value.forEach(s.removeMarkers),g.value=[]}function a(){const r=[...S.value,...p.value,...y.value];S.value=[],p.value=[],y.value=[],r.forEach(s.removeMarkers)}function f(){return!c.preview&&l()&&e.currentPhase.value===D.Target&&e.visitedCoordinates.value.length>0}function u(){if(c.preview)throw new Error("[Fanorona] `endTurnEarly` cannot be called in preview mode.");l()&&(e.currentPhase.value!==D.Target||!e.visitedCoordinates.value.length||(a(),o(),e.endTurn()))}async function B({from:r,to:v,captureType:M}){const[w,E]=r,[H,k]=v,_=e.moveStone([w,E],[H,k]);if(!_.success)throw new Error("Invalid move attempted. This should not happen if the UI is correctly marking valid moves.");const Z=e.getPlaceholderIndex(w,E);if(s.placeMarkerArrow(Z,e.lastDirection.value),g.value.push(Z),await h.moveStoneVisually(e.getPlaceholderIndex(w,E),e.getPlaceholderIndex(H,k)),_.needsChoice){M!==void 0?await R({trailCoord:r,result:_,captureType:M}):(C=r,_e());return}F(r),l()?(I=I.then(()=>R({trailCoord:r,result:_})),await I):await R({trailCoord:r,result:_})}function F(r,v){if(c.preview||!l())return;const M=Ce(e.activeStone.value);m("moved",{from:Ce(r),to:M,captureType:v})}async function L({from:r,to:v,captureType:M}){if(c.preview)throw new Error("[Fanorona] `receiveMove` cannot be called in preview mode.");I=I.then(async()=>{e.currentPhase.value=D.Target,e.activeStone.value=r,a(),await B({from:r,to:v,captureType:M})}),await I}function V(){if(c.preview)throw new Error("[Fanorona] `receiveEndTurn` cannot be called in preview mode.");a(),o(),e.endTurn()}async function R({trailCoord:r,result:v,captureType:M}){let w=[];switch(M){case re.Approach:w=v.approach??[];break;case re.Withdrawal:w=v.withdrawal??[];break;default:w=v.approach?.length?v.approach:v.withdrawal??[]}if(!w.length){o(),e.endTurn();return}if(y.value.forEach(s.removeMarkers),await h.captureStones(w.map(([H,k])=>e.getPlaceholderIndex(H,k))),e.confirmCapture(r,w),ee(q()))return;e.getMultiCaptureCoordinates().length?e.currentPhase.value=D.Target:(o(),e.endTurn())}function q(){const r=e.boardState.value.flat();return r.includes(b.White)?r.includes(b.Black)?b.None:b.White:b.Black}function ee(r){return r===b.None?!1:(e.currentPhase.value=D.GameOver,m("crowned",r),confettiCharm(),!0)}function _e(){const r=([v,M])=>{const w=e.getPlaceholderIndex(v,M);s.placeMarkerHighlight(w),y.value.push(w)};e.vulnerableStones.value.approach?.forEach(r),e.vulnerableStones.value.withdrawal?.forEach(r)}function Ee(r){if(e.currentPhase.value!==D.Moving)throw new Error('Invalid phase for choosing approach/withdrawal. Expected "Moving" phase.');const{row:v,col:M}=r;let w=null;const E=([Z,oe])=>Z===v&&oe===M,H=e.vulnerableStones.value.approach,k=e.vulnerableStones.value.withdrawal;for(const Z of H??[])if(E(Z)){w=re.Approach;break}if(w===null){for(const Z of k??[])if(E(Z)){w=re.Withdrawal;break}}if(w===null)return;F(C,w),C=null;const _=e.activeStone.value;I=I.then(()=>R({trailCoord:_,result:{approach:w===re.Approach?H:void 0,withdrawal:w===re.Withdrawal?k:void 0},captureType:w}))}return(r,v)=>(Be(),De("div",{class:Ne(["w-full",{"is-preview":t.preview,"rotate-180":t.player===Fe(b).Black}])},[Re(Xe,{ref_key:"fanoronaBoardRef",ref:d},null,512)],2))}});export{b as P,ht as _};
