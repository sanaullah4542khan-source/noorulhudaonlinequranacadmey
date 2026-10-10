const fs = require('fs');
const { execSync } = require('child_process');

function generateLogoSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <defs>
    <!-- Background Gradient (Pure White with ultra-subtle vignette) -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>

    <!-- Metallic Gold Gradients -->
    <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d8b153"/>
      <stop offset="25%" stop-color="#f5dc8a"/>
      <stop offset="50%" stop-color="#caa14b"/>
      <stop offset="75%" stop-color="#e8c76b"/>
      <stop offset="100%" stop-color="#a77d24"/>
    </linearGradient>

    <linearGradient id="goldArch" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#cca855"/>
      <stop offset="50%" stop-color="#e5c572"/>
      <stop offset="100%" stop-color="#b6892e"/>
    </linearGradient>

    <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#b68828"/>
      <stop offset="50%" stop-color="#d4ad4e"/>
      <stop offset="100%" stop-color="#b18323"/>
    </linearGradient>

    <linearGradient id="crescentGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e8c566"/>
      <stop offset="40%" stop-color="#d4ab47"/>
      <stop offset="100%" stop-color="#9a6e19"/>
    </linearGradient>

    <!-- Emerald Wood Gradients for Rehal -->
    <linearGradient id="rehalDeepGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a523e"/>
      <stop offset="40%" stop-color="#06382a"/>
      <stop offset="100%" stop-color="#032219"/>
    </linearGradient>

    <linearGradient id="rehalHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0f6b52"/>
      <stop offset="50%" stop-color="#147d60"/>
      <stop offset="100%" stop-color="#0a523e"/>
    </linearGradient>

    <linearGradient id="rehalShading" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#04261c"/>
      <stop offset="100%" stop-color="#02140e"/>
    </linearGradient>

    <!-- Quran Cover Deep Green -->
    <linearGradient id="quranCover" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e5a44"/>
      <stop offset="50%" stop-color="#084232"/>
      <stop offset="100%" stop-color="#04241b"/>
    </linearGradient>

    <!-- Quran Page Ivory Gradients -->
    <linearGradient id="pageIvoryLeft" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f4eee1"/>
      <stop offset="25%" stop-color="#fdfbf7"/>
      <stop offset="85%" stop-color="#f7f3e8"/>
      <stop offset="100%" stop-color="#eee5d3"/>
    </linearGradient>

    <linearGradient id="pageIvoryRight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f4eee1"/>
      <stop offset="25%" stop-color="#fdfbf7"/>
      <stop offset="85%" stop-color="#f7f3e8"/>
      <stop offset="100%" stop-color="#eee5d3"/>
    </linearGradient>

    <!-- Page Layers Edges -->
    <linearGradient id="pageGilding" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#caa14b"/>
      <stop offset="50%" stop-color="#e8c76b"/>
      <stop offset="100%" stop-color="#b6892e"/>
    </linearGradient>

    <!-- Soft Drop Shadows -->
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#05261d" stop-opacity="0.32"/>
      <stop offset="45%" stop-color="#05261d" stop-opacity="0.15"/>
      <stop offset="75%" stop-color="#05261d" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#05261d" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Pure White Background -->
  <rect width="1000" height="1000" fill="url(#bgGrad)"/>

  <!-- ======================================================== -->
  <!-- 1. ORNAMENTAL ISLAMIC ARCH BACKGROUND                    -->
  <!-- ======================================================== -->
  <g id="ornamental-arch" opacity="0.95">
    <!-- Subtle Inner Geometric Tracery Mesh -->
    <g stroke="#d5b364" stroke-width="0.8" opacity="0.32" fill="none">
      <!-- Radial & Geometric Grid Lines -->
      <path d="M 500,60 L 500,450"/>
      <path d="M 350,150 L 650,150"/>
      <path d="M 280,240 L 720,240"/>
      <path d="M 240,330 L 760,330"/>
      <path d="M 200,420 L 800,420"/>
      <path d="M 500,200 L 260,440"/>
      <path d="M 500,200 L 740,440"/>
      <path d="M 500,100 L 300,500"/>
      <path d="M 500,100 L 700,500"/>
      <path d="M 400,120 L 600,460"/>
      <path d="M 600,120 L 400,460"/>
      <!-- Faint Islamic 8-Point Stars in background tracery -->
      <g transform="translate(500, 150) scale(0.65)">
        <rect x="-40" y="-40" width="80" height="80"/>
        <rect x="-40" y="-40" width="80" height="80" transform="rotate(45)"/>
      </g>
      <g transform="translate(380, 240) scale(0.5)">
        <rect x="-40" y="-40" width="80" height="80"/>
        <rect x="-40" y="-40" width="80" height="80" transform="rotate(45)"/>
      </g>
      <g transform="translate(620, 240) scale(0.5)">
        <rect x="-40" y="-40" width="80" height="80"/>
        <rect x="-40" y="-40" width="80" height="80" transform="rotate(45)"/>
      </g>
      <g transform="translate(300, 360) scale(0.55)">
        <rect x="-40" y="-40" width="80" height="80"/>
        <rect x="-40" y="-40" width="80" height="80" transform="rotate(45)"/>
      </g>
      <g transform="translate(700, 360) scale(0.55)">
        <rect x="-40" y="-40" width="80" height="80"/>
        <rect x="-40" y="-40" width="80" height="80" transform="rotate(45)"/>
      </g>
    </g>

    <!-- Outer Decorative Arch Contour -->
    <path d="
      M 500,58
      C 507,68 522,95 540,118
      C 555,138 578,162 602,175
      C 625,188 655,190 682,198
      C 715,208 745,225 760,255
      C 772,280 770,312 760,338
      C 752,360 740,380 735,402
      C 730,422 735,445 745,462
      C 760,488 788,510 802,538
      C 818,570 812,610 788,638
      C 765,662 730,672 700,672
      L 300,672
      C 270,672 235,662 212,638
      C 188,610 182,570 198,538
      C 212,510 240,488 255,462
      C 265,445 270,422 265,402
      C 260,380 248,360 240,338
      C 230,312 228,280 240,255
      C 255,225 285,208 318,198
      C 345,190 375,188 398,175
      C 422,162 445,138 460,118
      C 478,95 493,68 500,58 Z
    " fill="none" stroke="url(#goldArch)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>

    <!-- Inner Decorative Arch Contour -->
    <path d="
      M 500,76
      C 506,85 519,109 534,130
      C 548,148 568,170 590,181
      C 611,192 638,195 662,202
      C 692,211 720,226 734,253
      C 745,275 743,303 734,326
      C 727,346 716,364 712,384
      C 707,402 711,422 720,437
      C 733,460 758,480 770,505
      C 784,534 779,569 758,594
      C 737,615 706,624 680,624
      L 320,624
      C 294,624 263,615 242,594
      C 221,569 216,534 230,505
      C 242,480 267,460 280,437
      C 289,422 293,402 288,384
      C 284,364 273,346 266,326
      C 257,303 255,275 266,253
      C 280,226 308,211 338,202
      C 362,195 389,192 410,181
      C 432,170 452,148 466,130
      C 481,109 494,85 500,76 Z
    " fill="none" stroke="url(#goldArch)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" opacity="0.85"/>
  </g>

  <!-- ======================================================== -->
  <!-- 2. GOLDEN CRESCENT MOON & 5-POINTED STAR (TOP CENTER)    -->
  <!-- ======================================================== -->
  <g id="crescent-and-star">
    <!-- Golden Crescent Moon -->
    <!-- Center ~ (495, 205), outer radius ~52, inner radius ~44 with slight tilt -->
    <path d="
      M 488,150
      C 525,153 555,182 555,220
      C 555,258 524,288 485,288
      C 460,288 438,275 425,256
      C 445,268 470,272 494,264
      C 524,254 542,226 538,195
      C 535,174 518,156 488,150 Z
    " fill="url(#crescentGold)"/>

    <!-- 5-Pointed Golden Star nestled inside the opening of the crescent -->
    <polygon points="
      534,192
      537,201
      546,201
      539,207
      541,216
      534,210
      527,216
      529,207
      522,201
      531,201
    " fill="url(#crescentGold)"/>
  </g>

  <!-- ======================================================== -->
  <!-- 3. FLOOR SHADOW UNDER THE REHAL STAND                    -->
  <!-- ======================================================== -->
  <ellipse cx="500" cy="655" rx="260" ry="15" fill="url(#floorShadow)"/>

  <!-- ======================================================== -->
  <!-- 4. REHAL (WOODEN QURAN STAND) - REAR PLANKS & BASE       -->
  <!-- ======================================================== -->
  <g id="rehal-stand">
    <!-- REHAL LEFT LEG (Runs from top-right support down to bottom-left foot) -->
    <path d="
      M 735,410
      L 500,526
      L 330,625
      C 320,632 308,642 302,656
      L 345,656
      C 358,642 378,638 395,645
      L 450,656
      L 475,656
      C 468,640 455,622 445,610
      L 535,550
      L 745,435
      Z
    " fill="url(#rehalDeepGreen)"/>

    <!-- REHAL RIGHT LEG (Crosses in front: from top-left support down to bottom-right foot) -->
    <path d="
      M 265,410
      L 500,526
      L 670,625
      C 680,632 692,642 698,656
      L 655,656
      C 642,642 622,638 605,645
      L 550,656
      L 525,656
      C 532,640 545,622 555,610
      L 465,550
      L 255,435
      Z
    " fill="url(#rehalDeepGreen)"/>

    <!-- FRONT LEG PROFILE - Left Foot Solid Shape with Curved Arched Cutout -->
    <path d="
      M 315,580
      L 478,515
      L 435,550
      L 320,620
      C 305,630 300,642 302,656
      L 350,656
      C 362,642 382,640 398,646
      C 410,650 422,656 438,656
      L 465,656
      C 455,638 440,618 425,605
      L 360,560
      Z
    " fill="url(#rehalHighlight)"/>

    <!-- FRONT LEG PROFILE - Right Foot Solid Shape with Curved Arched Cutout -->
    <path d="
      M 685,580
      L 522,515
      L 565,550
      L 680,620
      C 695,630 700,642 698,656
      L 650,656
      C 638,642 618,640 602,646
      C 590,650 578,656 562,656
      L 535,656
      C 545,638 560,618 575,605
      L 640,560
      Z
    " fill="url(#rehalHighlight)"/>

    <!-- Front Left Leg Decorative Inset Panel -->
    <path d="
      M 345,595
      L 418,558
      L 438,590
      L 380,626
      C 365,634 352,642 342,650
      L 322,650
      C 324,635 332,615 345,595 Z
    " fill="#04271d" stroke="#d5b364" stroke-width="1.2" stroke-linejoin="round"/>

    <!-- Front Right Leg Decorative Inset Panel -->
    <path d="
      M 655,595
      L 582,558
      L 562,590
      L 620,626
      C 635,634 648,642 658,650
      L 678,650
      C 676,635 668,615 655,595 Z
    " fill="#04271d" stroke="#d5b364" stroke-width="1.2" stroke-linejoin="round"/>

    <!-- GOLDEN ISLAMIC 8-POINT STAR MEDALLION ON LEFT REHAL LEG -->
    <g transform="translate(378, 608) scale(0.38)">
      <!-- Outer gold star -->
      <rect x="-32" y="-32" width="64" height="64" fill="url(#goldMetallic)" rx="2"/>
      <rect x="-32" y="-32" width="64" height="64" fill="url(#goldMetallic)" rx="2" transform="rotate(45)"/>
      <!-- Inner dark green star -->
      <rect x="-24" y="-24" width="48" height="48" fill="#06382a" rx="1"/>
      <rect x="-24" y="-24" width="48" height="48" fill="#06382a" rx="1" transform="rotate(45)"/>
      <!-- Core gold rosette dot -->
      <circle cx="0" cy="0" r="10" fill="url(#goldMetallic)"/>
      <circle cx="0" cy="0" r="4" fill="#06382a"/>
    </g>

    <!-- GOLDEN ISLAMIC 8-POINT STAR MEDALLION ON RIGHT REHAL LEG -->
    <g transform="translate(622, 608) scale(0.38)">
      <!-- Outer gold star -->
      <rect x="-32" y="-32" width="64" height="64" fill="url(#goldMetallic)" rx="2"/>
      <rect x="-32" y="-32" width="64" height="64" fill="url(#goldMetallic)" rx="2" transform="rotate(45)"/>
      <!-- Inner dark green star -->
      <rect x="-24" y="-24" width="48" height="48" fill="#06382a" rx="1"/>
      <rect x="-24" y="-24" width="48" height="48" fill="#06382a" rx="1" transform="rotate(45)"/>
      <!-- Core gold rosette dot -->
      <circle cx="0" cy="0" r="10" fill="url(#goldMetallic)"/>
      <circle cx="0" cy="0" r="4" fill="#06382a"/>
    </g>

    <!-- Center Intersecting Joint & Rosette Clasp -->
    <circle cx="500" cy="522" r="14" fill="#064232" stroke="url(#goldMetallic)" stroke-width="2.5"/>
    <circle cx="500" cy="522" r="6" fill="url(#goldMetallic)"/>
  </g>

  <!-- ======================================================== -->
  <!-- 5. THE HOLY QURAN (OPEN MUSHAF ON REHAL)                 -->
  <!-- ======================================================== -->
  <g id="open-quran">
    <!-- A. GREEN HARDCOVER UNDERLAY WITH GOLD BEVELED EDGES -->
    <!-- Left Cover -->
    <path d="
      M 500,488
      L 500,345
      L 260,285
      C 255,286 250,292 248,300
      L 250,422
      C 252,430 258,435 266,438
      L 500,505
      Z
    " fill="url(#quranCover)" stroke="url(#goldMetallic)" stroke-width="2.5"/>

    <!-- Right Cover -->
    <path d="
      M 500,488
      L 500,345
      L 740,285
      C 745,286 750,292 752,300
      L 750,422
      C 748,430 742,435 734,438
      L 500,505
      Z
    " fill="url(#quranCover)" stroke="url(#goldMetallic)" stroke-width="2.5"/>

    <!-- B. STACKED GOLD GILDED PAGE EDGES (SIDES OF PAGES) -->
    <!-- Left Page Stack -->
    <path d="
      M 260,288
      L 278,284
      L 272,408
      L 254,412
      Z
    " fill="url(#pageGilding)" stroke="#caa14b" stroke-width="1"/>
    <!-- Page lines on left block -->
    <path d="M 264,290 L 258,411 M 268,288 L 262,410 M 272,286 L 266,409" stroke="#9e731b" stroke-width="0.75"/>

    <!-- Right Page Stack -->
    <path d="
      M 740,288
      L 722,284
      L 728,408
      L 746,412
      Z
    " fill="url(#pageGilding)" stroke="#caa14b" stroke-width="1"/>
    <!-- Page lines on right block -->
    <path d="M 736,290 L 742,411 M 732,288 L 738,410 M 728,286 L 734,409" stroke="#9e731b" stroke-width="0.75"/>

    <!-- C. TOP OPEN PAGES - IVORY / CREAM SURFACE -->
    <!-- Left Open Page Surface with graceful curved droop -->
    <path d="
      M 500,348
      C 420,336 340,314 278,288
      C 274,290 270,295 270,302
      C 270,336 270,370 270,404
      C 340,428 420,458 500,480
      Z
    " fill="url(#pageIvoryLeft)" stroke="#e0d5be" stroke-width="1"/>

    <!-- Right Open Page Surface with graceful curved droop -->
    <path d="
      M 500,348
      C 580,336 660,314 722,288
      C 726,290 730,295 730,302
      C 730,336 730,370 730,404
      C 660,428 580,458 500,480
      Z
    " fill="url(#pageIvoryRight)" stroke="#e0d5be" stroke-width="1"/>

    <!-- Spine Shadow / Crease down the middle -->
    <path d="M 500,348 L 500,480" stroke="#b09b75" stroke-width="3" stroke-linecap="round"/>
    <path d="M 498,348 L 498,480" stroke="#4a3b22" stroke-width="1" opacity="0.45"/>

    <!-- D. ORNATE GOLD BORDERS ON LEFT PAGE (MUSHAF ILLUMINATION) -->
    <!-- Outer Gold Border -->
    <path d="
      M 488,356
      C 420,346 352,328 296,306
      L 294,394
      C 352,414 420,442 488,464
      Z
    " fill="none" stroke="url(#goldMetallic)" stroke-width="2.2" stroke-linejoin="round"/>

    <!-- Inner Gold Border -->
    <path d="
      M 482,362
      C 420,352 358,335 306,315
      L 304,386
      C 358,406 420,434 482,456
      Z
    " fill="none" stroke="url(#goldMetallic)" stroke-width="1" stroke-linejoin="round"/>

    <!-- E. ORNATE GOLD BORDERS ON RIGHT PAGE (MUSHAF ILLUMINATION) -->
    <!-- Outer Gold Border -->
    <path d="
      M 512,356
      C 580,346 648,328 704,306
      L 706,394
      C 648,414 580,442 512,464
      Z
    " fill="none" stroke="url(#goldMetallic)" stroke-width="2.2" stroke-linejoin="round"/>

    <!-- Inner Gold Border -->
    <path d="
      M 518,362
      C 580,352 642,335 694,315
      L 696,386
      C 642,406 580,434 518,456
      Z
    " fill="none" stroke="url(#goldMetallic)" stroke-width="1" stroke-linejoin="round"/>

    <!-- F. QURANIC VERSES / CALLIGRAPHIC SCRIPT LINES -->
    <!-- Left Page Verses (Dark Charcoal & Warm Gold Ink) -->
    <g stroke="#263830" stroke-width="1.8" stroke-linecap="round" opacity="0.82">
      <!-- Bismillah header decorative cartouche line -->
      <path d="M 330,328 C 380,342 430,356 465,370" stroke="#caa14b" stroke-width="2.5"/>
      <!-- Text lines -->
      <path d="M 314,337 C 365,352 420,368 474,380"/>
      <path d="M 313,346 C 365,361 420,377 474,389"/>
      <path d="M 312,355 C 365,370 420,386 474,398"/>
      <path d="M 311,364 C 365,379 420,395 474,407"/>
      <path d="M 310,373 C 365,388 420,404 474,416"/>
      <path d="M 309,382 C 365,397 420,413 474,425"/>
      <path d="M 308,391 C 365,406 420,422 474,434"/>
      <path d="M 312,400 C 365,415 420,431 474,443"/>
      <path d="M 330,409 C 375,423 420,438 468,450"/>
    </g>

    <!-- Right Page Verses (Dark Charcoal & Warm Gold Ink) -->
    <g stroke="#263830" stroke-width="1.8" stroke-linecap="round" opacity="0.82">
      <!-- Bismillah header decorative cartouche line -->
      <path d="M 535,370 C 570,356 620,342 670,328" stroke="#caa14b" stroke-width="2.5"/>
      <!-- Text lines -->
      <path d="M 526,380 C 580,368 635,352 686,337"/>
      <path d="M 526,389 C 580,377 635,361 687,346"/>
      <path d="M 526,398 C 580,386 635,370 688,355"/>
      <path d="M 526,407 C 580,395 635,379 689,364"/>
      <path d="M 526,416 C 580,404 635,388 690,373"/>
      <path d="M 526,425 C 580,413 635,397 691,382"/>
      <path d="M 526,434 C 580,422 635,406 692,391"/>
      <path d="M 526,443 C 580,431 635,415 688,400"/>
      <path d="M 532,450 C 580,438 625,423 670,409"/>
    </g>

    <!-- Bottom Center Spine Medallion Clasp -->
    <path d="
      M 500,476
      C 493,480 488,487 490,496
      C 492,504 500,512 500,512
      C 500,512 508,504 510,496
      C 512,487 507,480 500,476 Z
    " fill="url(#goldMetallic)" stroke="#9a6e19" stroke-width="1"/>
  </g>

  <!-- ======================================================== -->
  <!-- 6. BRAND TYPOGRAPHY: "NOOR UL HUDA"                      -->
  <!-- ======================================================== -->
  <g id="brand-title">
    <text
      x="500"
      y="776"
      text-anchor="middle"
      fill="#0c4a37"
      font-family="'Montserrat', 'Poppins', 'Inter', 'Cairo', 'Segoe UI', sans-serif"
      font-size="75"
      font-weight="900"
      letter-spacing="9"
      style="text-transform: uppercase;"
    >NOOR UL HUDA</text>
  </g>

  <!-- ======================================================== -->
  <!-- 7. ORNAMENTAL DIVIDER WITH ISLAMIC 8-POINT STAR          -->
  <!-- ======================================================== -->
  <g id="ornamental-divider">
    <!-- Left Thin Gold Horizontal Line -->
    <line x1="162" y1="823" x2="456" y2="823" stroke="url(#goldMetallic)" stroke-width="1.8" stroke-linecap="round"/>

    <!-- Central 8-Pointed Star (Rub el Hizb) Emblem -->
    <g transform="translate(500, 823)">
      <!-- Outer intersecting squares -->
      <rect x="-18" y="-18" width="36" height="36" fill="none" stroke="url(#goldMetallic)" stroke-width="2.2" rx="1"/>
      <rect x="-18" y="-18" width="36" height="36" fill="none" stroke="url(#goldMetallic)" stroke-width="2.2" rx="1" transform="rotate(45)"/>
      <!-- Inner central gold dot -->
      <circle cx="0" cy="0" r="2.8" fill="url(#goldMetallic)"/>
    </g>

    <!-- Right Thin Gold Horizontal Line -->
    <line x1="544" y1="823" x2="838" y2="823" stroke="url(#goldMetallic)" stroke-width="1.8" stroke-linecap="round"/>
  </g>

  <!-- ======================================================== -->
  <!-- 8. SUBTITLE: "ONLINE QURAN ACADEMY"                      -->
  <!-- ======================================================== -->
  <g id="brand-subtitle">
    <text
      x="500"
      y="880"
      text-anchor="middle"
      fill="url(#goldText)"
      font-family="'Montserrat', 'Poppins', 'Inter', 'Cairo', 'Segoe UI', sans-serif"
      font-size="31"
      font-weight="700"
      letter-spacing="13"
      style="text-transform: uppercase;"
    >ONLINE QURAN ACADEMY</text>
  </g>
</svg>`;
}

const svgContent = generateLogoSvg();

// 1. Write SVG files
fs.writeFileSync('public/noor-ul-huda-logo.svg', svgContent);
fs.writeFileSync('public/noor-ul-huda-official-logo.svg', svgContent);
fs.writeFileSync('dist/noor-ul-huda-logo.svg', svgContent);
fs.writeFileSync('dist/noor-ul-huda-official-logo.svg', svgContent);

console.log('SVG files generated successfully');

// 2. Render high-res PNG and JPG using ImageMagick
try {
  execSync('convert -background white -density 300 public/noor-ul-huda-logo.svg -resize 1024x1024 public/noor-ul-huda-logo.png');
  execSync('convert -background white -density 300 public/noor-ul-huda-logo.svg -resize 1024x1024 -quality 95 public/noor-ul-huda-logo.jpg');
  execSync('cp public/noor-ul-huda-logo.png dist/noor-ul-huda-logo.png');
  execSync('cp public/noor-ul-huda-logo.jpg dist/noor-ul-huda-logo.jpg');
  console.log('PNG and JPG generated successfully');
} catch (e) {
  console.error('Error generating raster images:', e.message);
}
