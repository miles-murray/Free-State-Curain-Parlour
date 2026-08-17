from PIL import Image, ImageDraw, ImageFont, ImageOps


W, H = 1800, 1320

COLORS = {
    "black": "#111111",
    "off_white": "#F4F1EA",
    "paper": "#FBFAF5",
    "charcoal": "#272926",
    "smoke": "#3A3B36",
    "stone": "#77736A",
    "linen": "#D4C5B0",
    "walnut": "#774A2E",
    "bronze": "#8E7652",
}

PHOTO_PATHS = [
    "/Users/Miles/Downloads/IMG_6216.JPG",
    "/Users/Miles/Downloads/IMG_6179 2.JPG",
    "/Users/Miles/Downloads/IMG_6173 2.JPG",
]


def load_font(path, size, index=0):
    try:
        return ImageFont.truetype(path, size=size, index=index)
    except Exception:
        return ImageFont.load_default(size=size)


SANS_TTC = "/System/Library/Fonts/Avenir Next.ttc"
SANS_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
SANS_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"
SERIF = "/System/Library/Fonts/Supplemental/Georgia.ttf"

font_brand = load_font(SANS_BOLD, 30)
font_label = load_font(SANS_BOLD, 24)
font_title = load_font(SANS_TTC, 76)
font_title_small = load_font(SANS_TTC, 58)
font_body = load_font(SANS_REG, 30)
font_body_dark = load_font(SANS_REG, 29)
font_button = load_font(SANS_BOLD, 28)
font_small = load_font(SANS_REG, 24)
font_accent = load_font(SERIF, 38)


def text_size(draw, text, font):
    box = draw.textbbox((0, 0), text, font=font)
    return box[2] - box[0], box[3] - box[1]


def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        test = word if not current else f"{current} {word}"
        if text_size(draw, test, font)[0] <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(draw, xy, text, font, fill, max_width, line_height):
    x, y = xy
    for line in wrap_text(draw, text, font, max_width):
        draw.text((x, y), line, font=font, fill=fill)
        y += line_height
    return y


def crop_cover(path, size):
    img = Image.open(path)
    img = ImageOps.exif_transpose(img).convert("RGB")
    iw, ih = img.size
    tw, th = size
    scale = max(tw / iw, th / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    img = img.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return img.crop((left, top, left + tw, top + th))


canvas = Image.new("RGB", (W, H), COLORS["off_white"])
draw = ImageDraw.Draw(canvas)

# Top identity strip
draw.rectangle((0, 0, W, 110), fill=COLORS["black"])
draw.text((90, 40), "FREE STATE CURTAIN PARLOUR", font=font_brand, fill=COLORS["off_white"])
draw.text((1260, 42), "CHARCOAL SHOWROOM CLASSIC", font=font_label, fill=COLORS["linen"])

# Left dark hero panel
panel = (90, 170, 840, 880)
draw.rectangle(panel, fill=COLORS["charcoal"])
draw.line((145, 245, 290, 245), fill=COLORS["bronze"], width=5)
draw.text((145, 295), "EST. 1959 | WESTDENE, BLOEMFONTEIN", font=font_label, fill=COLORS["linen"])
draw.text((145, 375), "Curtains, Blinds", font=font_title, fill=COLORS["off_white"])
draw.text((145, 455), "& Decor Advice", font=font_title, fill=COLORS["off_white"])
draw.text((145, 535), "for Real Homes", font=font_title_small, fill=COLORS["off_white"])

body = (
    "A more grounded direction: black-and-white brand structure, smoky charcoal, "
    "linen fabric tones, walnut wood warmth, and bronze details kept quiet."
)
draw_wrapped(draw, (145, 630), body, font_body_dark, COLORS["linen"], 610, 44)

draw.rectangle((145, 765, 410, 830), fill=COLORS["off_white"])
draw.text((181, 785), "Visit Showroom", font=font_button, fill=COLORS["black"])
draw.rectangle((435, 765, 590, 830), outline=COLORS["linen"], width=2)
draw.text((480, 785), "Call Us", font=font_button, fill=COLORS["off_white"])

# Photo grid
photo1 = crop_cover(PHOTO_PATHS[0], (780, 430))
canvas.paste(photo1, (900, 170))
draw.rectangle((900, 170, 1680, 600), outline=COLORS["black"], width=7)

photo2 = crop_cover(PHOTO_PATHS[1], (375, 280))
photo3 = crop_cover(PHOTO_PATHS[2], (375, 280))
canvas.paste(photo2, (900, 625))
canvas.paste(photo3, (1305, 625))
draw.rectangle((900, 625, 1275, 905), outline=COLORS["black"], width=7)
draw.rectangle((1305, 625, 1680, 905), outline=COLORS["black"], width=7)

# Pattern note
draw.rectangle((90, 930, 840, 1165), fill=COLORS["paper"], outline=COLORS["linen"], width=2)
draw.text((135, 975), "Different From The Reference Site", font=font_label, fill=COLORS["black"])
diff = (
    "Less cream-and-gold editorial. More structured and monochrome: dark framing, "
    "tactile photos, fabric texture, wood, and practical local confidence."
)
draw_wrapped(draw, (135, 1020), diff, font_body, COLORS["stone"], 640, 40)

# Font and palette card
draw.rectangle((900, 930, 1680, 1165), fill=COLORS["paper"], outline=COLORS["linen"], width=2)
draw.text((945, 975), "TYPE", font=font_label, fill=COLORS["black"])
draw.text((1015, 969), "Clean premium sans for headings and body.", font=font_small, fill=COLORS["stone"])
draw.text((945, 1040), "Est. 1959", font=font_accent, fill=COLORS["bronze"])
draw.text((1125, 1048), "Serif only as a small heritage accent.", font=font_small, fill=COLORS["stone"])

swatches = [
    ("Black", "black"),
    ("Charcoal", "charcoal"),
    ("Stone", "stone"),
    ("Linen", "linen"),
    ("Walnut", "walnut"),
    ("Bronze", "bronze"),
]
sx, sy = 90, 1215
for label, key in swatches:
    draw.rectangle((sx, sy, sx + 62, sy + 42), fill=COLORS[key])
    draw.text((sx + 75, sy + 7), label, font=font_small, fill=COLORS["black"])
    sx += 270

canvas.save("design/charcoal-showroom-direction.png")
