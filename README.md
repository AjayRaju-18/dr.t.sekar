# Sekar's Digital Blueprint

# Lovable Prompt — Dr. T. Sekar Portfolio Website

Copy everything below into Lovable's chat box to kick off the build.

---

Build a premium, professional academic portfolio website for a mechanical
engineering professor. This is not a generic template — it should feel like
a precision-engineered digital CV, blending an industrial/CAD aesthetic with
smooth, modern web animation.

## Visual Identity
- Theme: "Digital Engineering Blueprint" — dark graphite / steel-blue base
  (#0F1720, #1C2733) with a bright accent (#00B4D8 cyan or #FF7A00 safety
  orange — pick one as the primary CTA/accent color) and off-white text
  (#F4F6F8).
- Background texture: subtle blueprint grid lines, faint technical drawing
  linework, or a low-opacity engineering drawing/dimension-line pattern
  behind hero and section dividers.
- Typography: a clean geometric sans-serif for headings (e.g. Space Grotesk
  or Sora) paired with a highly readable body font (e.g. Inter). Use
  wide letter-spacing on section labels/eyebrows, like technical drawing
  callouts (e.g. "01 / EDUCATION").
- Iconography: line-art mechanical icons (gears, calipers, blueprints, CNC
  bits, molecule/composite structures) instead of generic flat icons.

## 3D & Animation Requirements
- Hero section: a subtly rotating 3D wireframe gear or turbine/rotor model
  (react-three-fiber / three.js) as a background centerpiece, slowly
  spinning, with parallax movement on mouse-move.
- Scroll-triggered reveal animations (fade + slight rise) on every section
  using Framer Motion.
- ALL interactive elements animate on hover:
  - Cards (education, publications, patents, memberships) lift slightly with
    a soft shadow and a thin glowing accent border on hover.
  - Buttons/links show a fill-sweep or underline-draw animation on hover.
  - Stat counters (see below) animate count-up when scrolled into view.
  - Publication list items shift right slightly and highlight on hover.
  - Nav links get an animated underline on hover.
  - The profile photo has a subtle 3D tilt-on-hover (perspective tilt
    following cursor) with a thin rotating dashed "measurement circle"
    ring around it, like a technical drawing annotation.
- Add 1–2 floating/rotating 3D or SVG mechanical elements (a small gear
  cluster, a bolt, a caliper icon) drifting gently in the background of
  secondary sections for depth — keep them subtle, not distracting.
- Smooth page-load intro animation (e.g. a brief "blueprint draw-in" line
  animation before content fades in).

## Site Structure & Content

### 1. Hero
- Name: **Dr. Sekar Tamilperuvalathan**
- Title: Associate Professor & Head, P.G. – Manufacturing Engineering,
  Department of Mechanical Engineering
- Institution: Government College of Technology (GCT), Coimbatore,
  Tamil Nadu, India
- Tagline: "27+ Years in Engineering Education, Research & Innovation"
- Profile photo (use the uploaded headshot) with the tilt/ring hover effect
  described above
- CTA buttons: "View Publications" / "Download CV" / "Contact"
- Quick links row (icon buttons): Google Scholar, Scopus, Web of Science,
  LinkedIn, Email

### 2. Animated Stats Bar (count-up on scroll)
- 27+ Years of Experience
- 90 International Journal Publications
- 100 International Conference Papers
- 10 Design Patents Granted
- 75 UG/PG Projects Guided
- 6 PhD Scholars Guided (5 currently guiding)

### 3. About
Short professional bio synthesized from: 27 years 9 months of teaching,
research, industry and administrative experience under Tamil Nadu
Educational Services (since 2001); Officer-in-charge of Examinations and
IPR Cell Coordinator at GCT; background spanning electrochemical machining,
biodegradable/PLA bio-composites, additive manufacturing, and sustainable
materials research.

### 4. Education Timeline (vertical animated timeline with gear-node markers)
- Ph.D., Mechanical Engineering — Anna University, Chennai (2009)
- M.E., Production Engineering (Gold Medalist) — Annamalai University,
  Chidambaram (1999)
- B.E., Mechanical Engineering — PSG College of Technology, Coimbatore (1997)
- Chartered Engineer — Institution of Mechanical Engineers (IMechE), UK
  (2019–2022)
- MBA, Human Resources — Periyar University, Salem (2014)
- NEBOSH — Industrial Safety (Certificate Level)
- 3D Printing & Design — trained by IIT Hyderabad

### 5. Professional Experience & Roles
Card grid or timeline covering:
- 27 years 3 months in Govt./self-financing engineering colleges
  (Tamil Nadu Educational Services since 2001)
- 6 months industry experience, Die-Casting Industry, Visakhapatnam
- Officer-in-charge of Examinations, GCT (2024–present)
- IPR Cell Coordinator, GCT
- TEQIP Phase II Officer (World Bank-aided program, ₹12.5 Cr sanctioned),
  GCE Salem
- Zonal Officer (Anna University Zone VII), GCE Dharmapuri
- NSS Program Officer, GCE Salem (2002–2010)
- Placement & Training Officer, GCE Salem (2009–2010)
- Head, M.E. Manufacturing Engineering, GCT — achieved 100% placement for
  the 2020–22 batch
- Board of Studies member (GCT, GCE Salem, and Anna University nominee
  roles at multiple affiliated colleges)
- Contribution to Govt. of Tamil Nadu's 7.5% reservation scheme
  implementation for Government School students, at DoTE Chennai

### 6. Research & Publications
- Summary counters as in the stats bar
- Filterable/tabbed list: International Journals / Conferences / Book
  Chapters / Books Authored
- Highlight 5–6 recent flagship publications (2024–2026) as featured cards
  with journal name and a "View" link icon, e.g.:
  - Performance enhancement of electrochemical discharge micromachining of
    borosilicate glass using nitrogen gas assistance — Scientific Reports
    (Springer Nature), 2026
  - A comprehensive evaluation of biodegradable polymer cardiovascular
    stents — International Journal of Biological Macromolecules (Elsevier,
    Q1), 2026
  - Enhancing electrochemical discharge drilling performance in mild steel
    using KMnO4 mixed electrolytes — Scientific Reports, 2025
  - Bio-functional evaluation of FDM 3D-printed PLA bio-composites for
    wound healing — International Journal of Biological Macromolecules
    (Elsevier, Q1), 2025
  - Polylactic acid/Ormocarpum cochinchinense bio-composites for
    sustainable 3D-printed biomedical devices — 3 Biotech (Springer), 2025
- Research focus tags/chips: Electrochemical Machining, Bio-Composites &
  3D Printing, Additive Manufacturing, Sustainable Materials, Biomedical
  Devices

### 7. Patents & Innovation
- 10 Design Patents granted by the Indian Patent Office (list patent
  numbers/dates in a compact expandable table)
- 1 Utility Patent filed
- Brief note on the funded R&D project: TEQIP-III sponsored project on
  "Experimental Investigations on Electrochemical Discharge Machining
  (ECDM) of Bio-Ceramics" as Principal Investigator (2020)

### 8. Books Authored & Chapters
List the 4 authored books and 2 book chapters as a simple card list with
publisher/ISBN.

### 9. Academic & Professional Achievements
Selectable highlight list (accordion or animated bullet list) covering
Board of Governing Council memberships, BoS roles, Academic Auditor role,
Editorial Advisory Board (Journal of Engineering Science and Technology,
Taylor's University), and reviewer role for Q1/Q2 journals (Elsevier,
Springer).

### 10. Memberships
Badge/chip row:
- Senior Member, INAE
- Fellow, Indian Institution of Engineers (FIE)
- Life Member, ISTE
- Life Member, Indian Institution of Production Engineers
- Life Member, Materials Research Society of India
- Former Chartered Member, IMechE (2016–2022)

### 11. Contact Section
- Email: drtsekar76@gct.ac.in / tsekargct@gmail.com
- Phone: +91-9092500393
- Address: Government College of Technology, Coimbatore–641013, Tamil Nadu
- Contact form + social/profile icon links (Scholar, Scopus, LinkedIn, WoS)

### 12. Footer
- Slim dark footer with quick nav links and profile links repeated small
- Centered small watermark line: **"Crafted by ARGUZ"** — style it subtly
  (small caps, letter-spaced, low-opacity accent color), acting as the
  site credit/watermark

## Technical Notes
- Fully responsive (mobile-first), with the 3D hero gracefully degrading to
  a static/lightweight animated SVG on smaller screens for performance.
- Keep animations smooth and GPU-friendly (transform/opacity based), avoid
  layout-shifting hover effects.
- Use a sticky/glassmorphism navbar that condenses on scroll.
- Include a dark-mode-first design (this theme is inherently dark); a
  light-mode toggle is optional/nice-to-have.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://engi-web-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9ca6178f-d883-47a9-8e14-fd50e1635e9a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
