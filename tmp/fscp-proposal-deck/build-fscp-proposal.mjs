import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const ROOT = "/Users/Miles/Documents/Free State Curtain Parlour";
const TMP = path.join(ROOT, "tmp/fscp-proposal-deck");
const OUT = path.join(ROOT, "output/Free State Curtain Parlour Website Proposal.pptx");
const W = 1280;
const H = 720;
const C = {
  ink: "#121312",
  charcoal: "#171918",
  paper: "#f4f1ea",
  warm: "#dfd8cd",
  muted: "#6a655f",
  gold: "#d7bd92",
  gold2: "#f0d8ab",
  line: "#a98a60",
  white: "#fbfaf6",
};
const FONT_DISPLAY = "Georgia";
const FONT_BODY = "Aptos";
const img = {
  hero: path.join(ROOT, "public/showroom/hero-interior.jpeg"),
  whole: path.join(ROOT, "public/showroom/whole-room-approach-desktop.jpeg"),
  wholeMobile: path.join(ROOT, "public/showroom/whole-room-approach.jpeg"),
  curtains: path.join(ROOT, "public/showroom/service-curtains-fabrics.jpeg"),
  blinds: path.join(ROOT, "public/showroom/service-blinds.jpeg"),
  wallpaper: path.join(ROOT, "public/showroom/service-wallpaper-decor.jpeg"),
  furniture: path.join(ROOT, "public/showroom/service-furniture-room-settings.jpeg"),
  entry: path.join(ROOT, "public/showroom/showroom-entry.jpg"),
  lounge: path.join(ROOT, "public/showroom/curtain-lounge.jpg"),
  bedroom: path.join(ROOT, "public/showroom/bedroom-setting.jpg"),
  decor: path.join(ROOT, "public/showroom/decor-display.jpg"),
  logo: path.join(ROOT, "public/fscp-logo-transparent.png"),
  cheetah: "/Users/Miles/Documents/Cheetah Kids Rugby/output/case-study-screenshots/case-study-homepage-hero-desktop.png",
};

async function bytes(file) {
  return new Uint8Array(await fs.readFile(file));
}

function contentType(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  return "image/jpeg";
}

function addText(slide, text, position, options = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontSize: options.size ?? 24,
    color: options.color ?? C.ink,
    bold: options.bold ?? false,
    typeface: options.font ?? FONT_BODY,
    alignment: options.align ?? "left",
    verticalAlignment: options.valign ?? "top",
    lineSpacing: options.leading ?? 1.08,
    wrap: "square",
    insets: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  return shape;
}

function addEyebrow(slide, text, x = 72, y = 58, color = C.line) {
  slide.shapes.add({
    geometry: "line",
    position: { left: x, top: y + 8, width: 48, height: 0 },
    fill: "none",
    line: { style: "solid", fill: color, width: 1 },
  });
  return addText(slide, text.toUpperCase(), { left: x + 64, top: y, width: 390, height: 24 }, {
    size: 12,
    color,
    bold: true,
    font: FONT_BODY,
    leading: 1,
  });
}

function addFooter(slide, index, dark = false) {
  addText(slide, "Free State Curtain Parlour website proposal", { left: 72, top: 674, width: 420, height: 18 }, {
    size: 11,
    color: dark ? "#c8c0b4" : C.muted,
    bold: true,
  });
  addText(slide, String(index).padStart(2, "0"), { left: 1168, top: 664, width: 40, height: 28 }, {
    size: 16,
    color: dark ? C.gold2 : C.line,
    font: FONT_DISPLAY,
    align: "right",
  });
}

async function addImage(slide, file, position, alt, opts = {}) {
  const image = slide.images.add({
    blob: await bytes(file),
    contentType: contentType(file),
    alt,
    fit: opts.fit ?? "cover",
    crop: opts.crop,
    geometry: opts.geometry ?? "rect",
    borderRadius: opts.borderRadius,
    position,
  });
  return image;
}

function addRect(slide, position, fill, lineFill = "none", width = 0) {
  return slide.shapes.add({
    geometry: "rect",
    position,
    fill,
    line: { style: "solid", fill: lineFill, width },
  });
}

function addRule(slide, x, y, w, color = C.line, weight = 1) {
  slide.shapes.add({
    geometry: "line",
    position: { left: x, top: y, width: w, height: 0 },
    fill: "none",
    line: { style: "solid", fill: color, width: weight },
  });
}

function addBullets(slide, items, position, opts = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text.set(items.map((item) => ({
    bulletCharacter: opts.bullet ?? "•",
    marginLeft: 22,
    indent: -12,
    runs: [item],
    spaceAfter: opts.spaceAfter ?? 7,
  })));
  shape.text.style = {
    fontSize: opts.size ?? 20,
    color: opts.color ?? C.muted,
    typeface: opts.font ?? FONT_BODY,
    lineSpacing: opts.leading ?? 1.15,
    insets: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  return shape;
}

function note(slide, lines, sources) {
  slide.speakerNotes.textFrame.setText([
    ...lines,
    "",
    "[Sources]",
    ...sources,
  ]);
  slide.speakerNotes.setVisible(true);
}

async function titleSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  await addImage(s, img.hero, { left: 500, top: 0, width: 780, height: 720 }, "Free State Curtain Parlour showroom interior");
  addRect(s, { left: 500, top: 0, width: 780, height: 720 }, "#000000/44");
  addRect(s, { left: 0, top: 0, width: 600, height: 720 }, C.charcoal);
  await addImage(s, img.logo, { left: 70, top: 56, width: 240, height: 92 }, "Free State Curtain Parlour logo", { fit: "contain" });
  addEyebrow(s, "Website concept proposal", 72, 190, C.gold2);
  addText(s, "Translating the showroom experience online.", { left: 72, top: 236, width: 520, height: 250 }, {
    size: 56,
    color: C.white,
    bold: true,
    leading: 0.96,
  });
  addText(s, "Homepage direction, digital strategy and production plan", { left: 74, top: 522, width: 420, height: 58 }, {
    size: 22,
    color: "#d9d3ca",
    leading: 1.25,
  });
  addRule(s, 72, 620, 170, C.gold2, 1);
  addText(s, "Prepared for Free State Curtain Parlour", { left: 72, top: 638, width: 420, height: 24 }, {
    size: 14,
    color: C.gold2,
    bold: true,
  });
  note(s, ["Open with the idea that this is a strategic concept and proposal, not a final website handover."], [
    "User-provided presentation brief in this Codex thread.",
    "Local asset: public/showroom/hero-interior.jpeg.",
    "Local asset: public/fscp-logo-transparent.png.",
  ]);
}

function openingSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  addEyebrow(s, "What this presentation covers");
  addText(s, "A homepage concept, built to show direction before the full website is produced.", { left: 72, top: 128, width: 810, height: 170 }, {
    size: 42,
    bold: true,
    leading: 1.03,
  });
  addText(s, "This is not the finished website. It is a working design direction based on the first meeting, the showroom experience and the images supplied. If the project proceeds, the concept becomes a complete, optimized production website.", { left: 74, top: 330, width: 650, height: 120 }, {
    size: 21,
    color: C.muted,
    leading: 1.35,
  });
  const rows = [
    ["01", "Business understanding"],
    ["02", "Website strategy"],
    ["03", "Design direction"],
    ["04", "Technical execution"],
  ];
  rows.forEach(([n, t], i) => {
    const y = 156 + i * 94;
    addRule(s, 820, y - 18, 300, "#b5aa9d", 1);
    addText(s, n, { left: 820, top: y, width: 76, height: 42 }, { size: 36, font: FONT_DISPLAY, color: C.line });
    addText(s, t, { left: 910, top: y + 8, width: 300, height: 34 }, { size: 22, bold: true, color: C.ink });
  });
  addFooter(s, 2);
  note(s, ["Make clear that you are not just presenting pages; you are presenting the thinking behind the digital direction."], [
    "User-provided presentation brief in this Codex thread.",
  ]);
}

async function understandingSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  await addImage(s, img.entry, { left: 0, top: 0, width: 500, height: 720 }, "Showroom entrance and interior view");
  addRect(s, { left: 0, top: 0, width: 500, height: 720 }, "#000000/20");
  addEyebrow(s, "What I understood", 570, 58);
  addText(s, "The business sells complete room confidence, not isolated products.", { left: 570, top: 116, width: 600, height: 145 }, {
    size: 42,
    bold: true,
    leading: 1.02,
  });
  addBullets(s, [
    "Furniture, fabrics, curtains, blinds, wallpaper and decor work together.",
    "The physical showroom is a major part of the trust and buying experience.",
    "Word of mouth already carries the business; the website should support that reputation.",
    "Visitors need to understand the quality, style and next step quickly.",
  ], { left: 585, top: 304, width: 560, height: 230 }, { size: 20, leading: 1.25, spaceAfter: 12 });
  addText(s, "Central idea", { left: 570, top: 586, width: 180, height: 22 }, { size: 13, bold: true, color: C.line });
  addText(s, "Translate the physical showroom experience into a digital one.", { left: 570, top: 612, width: 540, height: 56 }, {
    size: 24,
    bold: true,
    color: C.ink,
    leading: 1.15,
  });
  addFooter(s, 3);
  note(s, ["This slide proves listening. Anchor the meeting in their business before discussing visuals or technology."], [
    "User-provided presentation brief in this Codex thread.",
    "Local asset: public/showroom/showroom-entry.jpg.",
  ]);
}

function objectiveSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  addEyebrow(s, "Website objective", 72, 58, C.gold2);
  addText(s, "The homepage has a job to do.", { left: 72, top: 122, width: 580, height: 92 }, {
    size: 48,
    bold: true,
    color: C.white,
  });
  addText(s, "It should guide a visitor from first impression to a clear next action: visit the showroom, call, or enquire.", { left: 74, top: 232, width: 560, height: 78 }, {
    size: 21,
    color: "#d6d1c8",
    leading: 1.25,
  });
  const steps = [
    ["Capture attention", "Large imagery and confident type"],
    ["Clarify the offer", "Curtains, blinds, wallpaper, furniture and decor"],
    ["Build trust", "Showroom, history, reviews and real materials"],
    ["Create action", "Visit, call or enquire"],
  ];
  steps.forEach(([title, body], i) => {
    const x = 86 + i * 292;
    addText(s, String(i + 1).padStart(2, "0"), { left: x, top: 398, width: 76, height: 48 }, {
      size: 38,
      font: FONT_DISPLAY,
      color: C.gold2,
    });
    addText(s, title, { left: x, top: 468, width: 210, height: 42 }, { size: 23, bold: true, color: C.white });
    addText(s, body, { left: x, top: 526, width: 220, height: 70 }, { size: 16, color: "#c6c0b8", leading: 1.22 });
    if (i < 3) {
      addRule(s, x + 210, 422, 58, C.gold2, 1);
    }
  });
  addFooter(s, 4, true);
  note(s, ["Use this as the simple commercial journey. The website is judged by how well it moves visitors through these jobs."], [
    "User-provided presentation brief in this Codex thread.",
  ]);
}

async function visualDirectionSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  await addImage(s, img.decor, { left: 800, top: 0, width: 480, height: 720 }, "Decor display in showroom");
  addRect(s, { left: 800, top: 0, width: 480, height: 720 }, "#000000/22");
  addEyebrow(s, "Visual direction");
  addText(s, "Premium, tactile and editorial.", { left: 72, top: 116, width: 660, height: 96 }, {
    size: 49,
    bold: true,
    leading: 1.02,
  });
  const items = [
    ["Large photography", "Lets the products and rooms sell the experience."],
    ["Large typography", "Gives the brand more presence and confidence."],
    ["Dark + warm neutrals", "Matches the showroom mood and interior aesthetic."],
    ["Whitespace", "Lets each message and product category breathe."],
    ["Asymmetry", "Makes the site feel custom, not template-driven."],
  ];
  items.forEach(([title, body], i) => {
    const y = 260 + i * 70;
    addRule(s, 72, y - 14, 600, "#c8bdae", 1);
    addText(s, title, { left: 72, top: y, width: 230, height: 26 }, { size: 22, bold: true, color: C.ink });
    addText(s, body, { left: 330, top: y + 2, width: 360, height: 42 }, { size: 18, color: C.muted, leading: 1.15 });
  });
  addFooter(s, 5);
  note(s, ["Connect every visual decision to a business reason. Do not frame it as personal taste."], [
    "User-provided presentation brief in this Codex thread.",
    "Local asset: public/showroom/decor-display.jpg.",
  ]);
}

async function heroWalkthroughSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  await addImage(s, img.hero, { left: 0, top: 0, width: 1280, height: 720 }, "Homepage hero showroom photograph");
  addRect(s, { left: 0, top: 0, width: 1280, height: 720 }, "#000000/56");
  await addImage(s, img.logo, { left: 72, top: 48, width: 200, height: 76 }, "Free State Curtain Parlour logo", { fit: "contain" });
  addText(s, "Where fabric, furniture and finishing touches meet.", { left: 76, top: 184, width: 570, height: 245 }, {
    size: 50,
    color: C.white,
    bold: true,
    leading: 0.98,
  });
  addText(s, "The hero should answer three questions in seconds: who they are, what kind of business this is, and why someone should keep looking.", { left: 80, top: 464, width: 530, height: 84 }, {
    size: 20,
    color: "#e3ded5",
    leading: 1.25,
  });
  addRect(s, { left: 772, top: 150, width: 360, height: 390 }, "#171918/76", C.gold2, 1);
  addText(s, "Why it works", { left: 810, top: 190, width: 220, height: 34 }, { size: 26, bold: true, color: C.gold2 });
  addBullets(s, [
    "Real showroom imagery gives immediate credibility.",
    "The headline is confident without becoming busy.",
    "Short copy respects how quickly visitors scan.",
    "Clear calls to action move people toward a visit or call.",
  ], { left: 812, top: 252, width: 270, height: 210 }, { size: 17, color: "#ece5da", leading: 1.18, spaceAfter: 10 });
  addFooter(s, 6, true);
  note(s, ["This is the first detailed walkthrough slide. Explain the hero as a conversion surface, not as decoration."], [
    "User-provided presentation brief in this Codex thread.",
    "Local asset: public/showroom/hero-interior.jpeg.",
    "Local asset: public/fscp-logo-transparent.png.",
  ]);
}

async function offeringSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.warm;
  addEyebrow(s, "Offer structure");
  addText(s, "The service categories make the range easy to understand.", { left: 72, top: 112, width: 720, height: 95 }, {
    size: 42,
    bold: true,
    leading: 1.02,
  });
  const cards = [
    ["Curtains & fabrics", img.curtains],
    ["Blinds", img.blinds],
    ["Wallpaper & decor", img.wallpaper],
    ["Furniture & room settings", img.furniture],
  ];
  for (let i = 0; i < cards.length; i++) {
    const [title, file] = cards[i];
    const x = 72 + (i % 4) * 286;
    await addImage(s, file, { left: x, top: 282, width: 252, height: 240 }, title);
    addRect(s, { left: x, top: 282, width: 252, height: 240 }, "#000000/36");
    addText(s, String(i + 1).padStart(2, "0"), { left: x + 22, top: 306, width: 66, height: 44 }, {
      size: 34,
      font: FONT_DISPLAY,
      color: C.gold2,
    });
    addText(s, title, { left: x + 22, top: 420, width: 196, height: 64 }, {
      size: 25,
      bold: true,
      color: C.white,
      leading: 1.02,
    });
  }
  addText(s, "The goal is not to overload the visitor. It is to quickly show the breadth of the showroom and give each category a clear doorway.", { left: 72, top: 570, width: 770, height: 55 }, {
    size: 20,
    color: C.muted,
    leading: 1.25,
  });
  addFooter(s, 7);
  note(s, ["Present this as hierarchy: photographs first, simple category language second, concise copy third."], [
    "User-provided presentation brief in this Codex thread.",
    "Local assets: service-curtains-fabrics.jpeg, service-blinds.jpeg, service-wallpaper-decor.jpeg, service-furniture-room-settings.jpeg.",
  ]);
}

async function showroomSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  await addImage(s, img.whole, { left: 650, top: 0, width: 630, height: 720 }, "Showroom interior details");
  addRect(s, { left: 650, top: 0, width: 630, height: 720 }, "#000000/22");
  addEyebrow(s, "Showroom emphasis");
  addText(s, "The physical location is an asset, not a footnote.", { left: 72, top: 116, width: 560, height: 145 }, {
    size: 44,
    bold: true,
    leading: 1.03,
  });
  addText(s, "The website does not need to force the entire buying journey online. For a showroom-led interiors business, convincing someone to come and see the materials in person is already a meaningful conversion.", { left: 74, top: 292, width: 500, height: 120 }, {
    size: 21,
    color: C.muted,
    leading: 1.3,
  });
  addRule(s, 74, 470, 430, C.line, 1);
  addText(s, "Desired visitor reaction", { left: 74, top: 500, width: 240, height: 24 }, { size: 13, bold: true, color: C.line });
  addText(s, "I want to go see this place.", { left: 74, top: 532, width: 500, height: 56 }, {
    size: 32,
    bold: true,
    color: C.ink,
  });
  addFooter(s, 8);
  note(s, ["This slide positions a showroom visit as the main commercial action, not a weakness in the online journey."], [
    "User-provided presentation brief in this Codex thread.",
    "Local asset: public/showroom/whole-room-approach-desktop.jpeg.",
  ]);
}

function processSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  addEyebrow(s, "Customer experience", 72, 58, C.gold2);
  addText(s, "A simpler process makes the first enquiry feel easier.", { left: 72, top: 120, width: 680, height: 120 }, {
    size: 44,
    bold: true,
    color: C.white,
    leading: 1.05,
  });
  const steps = [
    ["01", "Start with your room", "Bring photos, measurements, ideas or problem areas."],
    ["02", "Compare in person", "See colour, texture, scale and finish in the showroom."],
    ["03", "Bring it together", "Choose curtains, blinds, wallpaper, furniture and decor with one direction."],
  ];
  steps.forEach(([n, title, body], i) => {
    const x = 92 + i * 380;
    addText(s, n, { left: x, top: 334, width: 100, height: 74 }, { size: 56, font: FONT_DISPLAY, color: C.gold2 });
    addRule(s, x, 426, 260, "#60594f", 1);
    addText(s, title, { left: x, top: 456, width: 260, height: 34 }, { size: 25, bold: true, color: C.white });
    addText(s, body, { left: x, top: 506, width: 270, height: 74 }, { size: 18, color: "#d6d1c8", leading: 1.23 });
  });
  addFooter(s, 9, true);
  note(s, ["Explain that this reduces uncertainty for someone who has never worked with the showroom before."], [
    "User-provided presentation brief in this Codex thread.",
  ]);
}

async function mobileSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  addEyebrow(s, "Mobile design");
  addText(s, "The mobile site should be adapted, not simply squeezed.", { left: 72, top: 114, width: 560, height: 136 }, {
    size: 43,
    bold: true,
    leading: 1.02,
  });
  addText(s, "Many customers will discover or check the business on their phones. Mobile needs its own hierarchy, crops, spacing, navigation and calls to action.", { left: 74, top: 286, width: 470, height: 115 }, {
    size: 20,
    color: C.muted,
    leading: 1.28,
  });
  addBullets(s, [
    "Readable headings",
    "Tighter, intentional sections",
    "Photography cropped for small screens",
    "Clear contact and visit actions",
  ], { left: 78, top: 444, width: 400, height: 130 }, { size: 19, leading: 1.18, spaceAfter: 7 });
  addRect(s, { left: 682, top: 70, width: 252, height: 565 }, C.ink, C.ink, 1);
  await addImage(s, img.wholeMobile, { left: 694, top: 88, width: 228, height: 526 }, "Mobile-oriented showroom image", { borderRadius: "rounded-xl" });
  addRect(s, { left: 694, top: 88, width: 228, height: 526 }, "#000000/20");
  addText(s, "Mobile", { left: 722, top: 534, width: 170, height: 36 }, { size: 25, bold: true, color: C.white, align: "center" });
  addRect(s, { left: 968, top: 126, width: 210, height: 370 }, C.charcoal, C.gold, 1);
  addText(s, "Desktop", { left: 998, top: 168, width: 150, height: 32 }, { size: 25, bold: true, color: C.white, align: "center" });
  addText(s, "Larger canvas\nMore editorial space\nBigger visual rhythm", { left: 1002, top: 242, width: 140, height: 130 }, {
    size: 20,
    color: "#ddd5ca",
    align: "center",
    leading: 1.3,
  });
  addFooter(s, 10);
  note(s, ["Show that you are thinking commercially about phone users, not only designing a pretty desktop homepage."], [
    "User-provided presentation brief in this Codex thread.",
    "Local asset: public/showroom/whole-room-approach.jpeg.",
  ]);
}

function technicalSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  addEyebrow(s, "Production build", 72, 58, C.gold2);
  addText(s, "If approved, the concept becomes a production website.", { left: 72, top: 116, width: 780, height: 120 }, {
    size: 45,
    bold: true,
    color: C.white,
    leading: 1.05,
  });
  const columns = [
    ["Performance", ["Compressed imagery", "Responsive image sizes", "Efficient loading"]],
    ["SEO foundation", ["Titles and metadata", "Heading structure", "Sitemap and indexing"]],
    ["Responsive build", ["Mobile, tablet, laptop", "Desktop breakpoints", "Real device testing"]],
    ["Launch setup", ["Hosting and deployment", "Domain connection", "SSL/HTTPS"]],
  ];
  columns.forEach(([title, bullets], i) => {
    const x = 72 + i * 292;
    addText(s, title, { left: x, top: 318, width: 230, height: 32 }, { size: 24, bold: true, color: C.gold2 });
    addBullets(s, bullets, { left: x, top: 372, width: 220, height: 116 }, { size: 17, color: "#d6d1c8", leading: 1.15, spaceAfter: 6 });
    addRule(s, x, 530, 230, "#5a554e", 1);
  });
  addText(s, "The client does not need to understand the technical details. They need to know the site will be fast, findable, usable and ready to launch properly.", { left: 72, top: 585, width: 930, height: 48 }, {
    size: 20,
    color: "#d6d1c8",
    leading: 1.22,
  });
  addFooter(s, 11, true);
  note(s, ["Translate technical terms into business outcomes. Avoid overexplaining code."], [
    "User-provided presentation brief in this Codex thread.",
  ]);
}

async function proofSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  addEyebrow(s, "Technical proof");
  addText(s, "Quality can be tested, not just judged by eye.", { left: 72, top: 118, width: 600, height: 114 }, {
    size: 45,
    bold: true,
    leading: 1.05,
  });
  addText(s, "Lighthouse gives an objective way to check whether a website meets modern technical standards across performance, accessibility, best practices and SEO.", { left: 74, top: 270, width: 520, height: 98 }, {
    size: 20,
    color: C.muted,
    leading: 1.28,
  });
  addRect(s, { left: 700, top: 86, width: 500, height: 322 }, "#fbfaf6", C.line, 1);
  addText(s, "Insert your Lighthouse results screenshot here", { left: 752, top: 202, width: 396, height: 72 }, {
    size: 28,
    bold: true,
    color: C.line,
    align: "center",
    leading: 1.12,
  });
  addText(s, "Use the actual Cheetah Kids Lighthouse screenshot in this space during the meeting.", { left: 762, top: 296, width: 374, height: 44 }, {
    size: 17,
    color: C.muted,
    align: "center",
    leading: 1.2,
  });
  const metrics = ["Performance", "Accessibility", "Best Practices", "SEO"];
  metrics.forEach((m, i) => {
    const x = 94 + i * 147;
    addRule(s, x - 4, 510, 98, "#c4b8a7", 1);
    addText(s, m, { left: x - 12, top: 534, width: 116, height: 38 }, { size: 16, color: C.muted, bold: true, align: "center" });
  });
  addText(s, "The numbers should come from the real test result you choose to show.", { left: 702, top: 446, width: 440, height: 42 }, {
    size: 18,
    color: C.muted,
    leading: 1.2,
  });
  addFooter(s, 12);
  note(s, ["If you have the Lighthouse screenshot, replace the proof area before the meeting. Do not overclaim rankings; frame this as standards testing."], [
    "User-provided presentation brief in this Codex thread.",
    "Optional local Cheetah Kids screenshot used if available: output/case-study-screenshots/case-study-homepage-hero-desktop.png.",
  ]);
}

function analyticsSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  addEyebrow(s, "Measurement");
  addText(s, "Analytics turns the website into something the business can learn from.", { left: 72, top: 116, width: 740, height: 118 }, {
    size: 43,
    bold: true,
    leading: 1.05,
  });
  const questions = [
    "How many people visit?",
    "Where do visitors come from?",
    "Which pages do they view?",
    "What devices are they using?",
    "Are they clicking contact buttons?",
    "Which channels drive enquiries?",
  ];
  questions.forEach((q, i) => {
    const x = i % 2 === 0 ? 96 : 660;
    const y = 306 + Math.floor(i / 2) * 86;
    addText(s, q, { left: x, top: y, width: 450, height: 32 }, { size: 23, bold: true, color: C.ink });
    addRule(s, x, y + 48, 410, "#c0b5a7", 1);
  });
  addText(s, "The point is not just to put a website online. It is to measure whether visitors are taking the actions the business wants.", { left: 160, top: 594, width: 800, height: 50 }, {
    size: 21,
    color: C.muted,
    align: "center",
    leading: 1.25,
  });
  addFooter(s, 13);
  note(s, ["This is a strong business slide. It changes the offer from a design project into a measurable business asset."], [
    "User-provided presentation brief in this Codex thread.",
  ]);
}

function architectureSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  addEyebrow(s, "Full website architecture", 72, 58, C.gold2);
  addText(s, "The homepage concept becomes a complete site structure.", { left: 72, top: 118, width: 680, height: 112 }, {
    size: 44,
    bold: true,
    color: C.white,
    leading: 1.05,
  });
  const pages = ["Home", "About", "Curtains & fabrics", "Blinds", "Wallpaper & decor", "Furniture", "Gallery / projects", "Contact / visit"];
  pages.forEach((page, i) => {
    const x = 92 + (i % 4) * 285;
    const y = 330 + Math.floor(i / 4) * 118;
    addRule(s, x, y - 22, 210, "#5e584f", 1);
    addText(s, String(i + 1).padStart(2, "0"), { left: x, top: y, width: 54, height: 34 }, { size: 25, font: FONT_DISPLAY, color: C.gold2 });
    addText(s, page, { left: x + 58, top: y + 4, width: 190, height: 40 }, { size: 22, bold: true, color: C.white });
  });
  addText(s, "Final structure can be adjusted after scope is confirmed.", { left: 72, top: 624, width: 520, height: 28 }, {
    size: 18,
    color: "#d6d1c8",
  });
  addFooter(s, 14, true);
  note(s, ["Use this to show the client that the homepage is only the first visible concept, not the full extent of the work."], [
    "User-provided presentation brief in this Codex thread.",
  ]);
}

function deliverablesTimelineSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  addEyebrow(s, "What they receive");
  addText(s, "A complete website process, from approval to launch.", { left: 72, top: 116, width: 660, height: 108 }, {
    size: 44,
    bold: true,
    leading: 1.04,
  });
  const deliverables = [
    "Custom website design",
    "Responsive development",
    "Full website build",
    "Performance optimization",
    "Technical SEO foundation",
    "Analytics integration",
    "Contact functionality",
    "Deployment setup",
    "Testing and launch",
  ];
  addBullets(s, deliverables, { left: 76, top: 286, width: 430, height: 300 }, { size: 18, leading: 1.12, spaceAfter: 5 });
  const steps = [
    "Discovery",
    "Design direction",
    "Approval",
    "Development",
    "Optimization",
    "Testing",
    "Launch",
  ];
  steps.forEach((step, i) => {
    const y = 240 + i * 58;
    addText(s, String(i + 1).padStart(2, "0"), { left: 640, top: y, width: 54, height: 28 }, { size: 22, font: FONT_DISPLAY, color: C.line });
    addText(s, step, { left: 704, top: y + 2, width: 280, height: 30 }, { size: 22, bold: true, color: C.ink });
    addRule(s, 640, y + 42, 470, "#c5baab", 1);
  });
  addFooter(s, 15);
  note(s, ["This slide gives the proposal concrete shape. Only mention maintenance if it is part of the actual scope."], [
    "User-provided presentation brief in this Codex thread.",
  ]);
}

function investmentSlide(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  addEyebrow(s, "Investment and next steps", 72, 58, C.gold2);
  addText(s, "Website design & development", { left: 72, top: 136, width: 560, height: 50 }, {
    size: 28,
    bold: true,
    color: C.white,
  });
  addText(s, "R10,000", { left: 72, top: 202, width: 490, height: 122 }, {
    size: 82,
    font: FONT_DISPLAY,
    color: C.gold2,
    leading: 0.95,
  });
  addText(s, "Includes the agreed website design, build, responsive layouts, technical SEO foundation, performance optimization, analytics setup, testing and launch support.", { left: 74, top: 348, width: 510, height: 92 }, {
    size: 20,
    color: "#d8d1c8",
    leading: 1.28,
  });
  addRule(s, 690, 128, 420, "#5e584f", 1);
  addText(s, "Next steps", { left: 690, top: 160, width: 240, height: 40 }, { size: 32, bold: true, color: C.white });
  const steps = [
    "Approve the direction",
    "Confirm the final scope",
    "Agree payment arrangement",
    "Complete development",
    "Review and refine",
    "Launch the website",
  ];
  steps.forEach((step, i) => {
    const y = 236 + i * 56;
    addText(s, String(i + 1).padStart(2, "0"), { left: 690, top: y, width: 44, height: 28 }, { size: 20, font: FONT_DISPLAY, color: C.gold2 });
    addText(s, step, { left: 748, top: y + 2, width: 330, height: 28 }, { size: 22, bold: true, color: C.white });
  });
  addText(s, "The decision today is whether this is the right direction to develop into the complete website.", { left: 690, top: 606, width: 420, height: 54 }, {
    size: 18,
    color: "#d8d1c8",
    leading: 1.25,
  });
  addFooter(s, 16, true);
  note(s, ["Do not apologize for the investment. Keep the scope clear and move directly to the next action."], [
    "User-provided presentation brief in this Codex thread.",
  ]);
}

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function writeBlob(file, blob) {
  await fs.writeFile(file, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  await fs.mkdir(TMP, { recursive: true });
  await fs.mkdir(path.dirname(OUT), { recursive: true });
  const p = Presentation.create({ slideSize: { width: W, height: H } });
  await titleSlide(p);
  openingSlide(p);
  await understandingSlide(p);
  objectiveSlide(p);
  await visualDirectionSlide(p);
  await heroWalkthroughSlide(p);
  await offeringSlide(p);
  await showroomSlide(p);
  processSlide(p);
  await mobileSlide(p);
  technicalSlide(p);
  await proofSlide(p);
  analyticsSlide(p);
  architectureSlide(p);
  deliverablesTimelineSlide(p);
  investmentSlide(p);

  const renders = path.join(TMP, "renders");
  await fs.mkdir(renders, { recursive: true });
  for (const [index, slide] of p.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(path.join(renders, `${stem}.png`), await p.export({ slide, format: "png", scale: 1 }));
    await fs.writeFile(path.join(renders, `${stem}.layout.json`), await (await slide.export({ format: "layout" })).text());
  }
  await writeBlob(path.join(TMP, "deck-montage.webp"), await p.export({ format: "webp", montage: true, scale: 1 }));
  await fs.writeFile(path.join(TMP, "inspection.ndjson"), (await p.inspect({ kind: "slide,textbox,shape,image,notes", maxChars: 40000 })).ndjson);
  await fs.writeFile(path.join(TMP, "source-notes.txt"), [
    "Free State Curtain Parlour proposal deck sources:",
    "- User-provided presentation brief and conversation direction in this Codex thread.",
    "- Local project images from /Users/Miles/Documents/Free State Curtain Parlour/public/showroom.",
    "- Local logo from /Users/Miles/Documents/Free State Curtain Parlour/public/fscp-logo-transparent.png.",
    "- Optional proof screenshot from Cheetah Kids local project, if present.",
  ].join("\n"));
  const pptx = await PresentationFile.exportPptx(p);
  await pptx.save(OUT);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
