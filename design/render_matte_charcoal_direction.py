from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageEnhance


W, H = 1800, 1380

COLORS = {
    "matte": "#171816",
    "charcoal": "#232520",
    "graphite": "#343630",
    "off_white": "#F4F1EA",
    "linen": "#D6C8B5",
    "stone": "#918A7F",
    "bronze": "#8E7652",
    "walnut": "#774A2E",
    "black": "#0D0D0C",
}

PHOTOS = [
    "/Users/Miles/Downloads/IMG_6173 2.JPG",
    "/Users/Miles/Downloads/IMG_6216.JPG",
    "/Users/Miles/Downloads/IMG_6179 2.JPG",
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
font_label = load_font(SANS_BOLD, 23)
font_head = load_font(SANS_TTC, 86)
font_head_small = load_font(SANS_TTC, 60)
font_body = load_font(SANS_REG, 32)
font_small = load_font(SANS_REG, 24)
font_button = load_font(SANS_BOLD, 28)
font_serif = load_font(SERIF, 42)


def text_size(draw, text, font):
    box = draw.textbbox((0, 0), text, font=font)
    return box[2] - box[0], box[3] - box[1]


def wrap_text(draw, text, font, max_width):
    lines, current = [], ""
    for word in text.split():
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
    img = img.resize((int(iw * scale), int(ih * scale)), Image.Resampling.LANCZOS)
    iw, ih = img.size
    left = (iw - tw) // 2
    top = (ih - th) // 2
    return img.crop((left, top, left + tw, top + th))


def mood_photo(path, size, brightness=0.82, contrast=1.12):
    img = crop_cover(path, size)
    img = ImageEnhance.Brightness(img).enhance(brightness)
    img = ImageEnhance.Contrast(img).enhance(contrast)
    return img


canvas = Image.new("RGB", (W, H), COLORS["matte"])
draw = ImageDraw.Draw(canvas)

# Soft structural panels
draw.rectangle((0, 0, W, 108), fill=COLORS["black"])
draw.rectangle((0, 108, W, H), fill=COLORS["matte"])
draw.rectangle((80, 170, 1720, 1145), outline=COLORS["graphite"], width=2)

# Top nav
draw.text((90, 39), "FREE STATE CURTAIN PARLOUR", font=font_brand, fill=COLORS["off_white"])
draw.text((1345, 41), "MATTE CHARCOAL SHOWROOM", font=font_label, fill=COLORS["linen"])

# Image composition
hero_photo = mood_photo(PHOTOS[0], (790, 790), brightness=0.72, contrast=1.18)
canvas.paste(hero_photo, (850, 210))
overlay = Image.new("RGBA", (790, 790), (0, 0, 0, 72))
canvas.paste(Image.alpha_composite(hero_photo.convert("RGBA"), overlay), (850, 210))
draw.rectangle((850, 210, 1640, 1000), outline=COLORS["black"], width=8)
draw.rectangle((850, 210, 1640, 1000), outline=COLORS["graphite"], width=2)

thumb1 = mood_photo(PHOTOS[1], (270, 210), brightness=0.78, contrast=1.12)
thumb2 = mood_photo(PHOTOS[2], (270, 210), brightness=0.82, contrast=1.12)
canvas.paste(thumb1, (138, 910))
canvas.paste(thumb2, (430, 910))
draw.rectangle((138, 910, 408, 1120), outline=COLORS["black"], width=6)
draw.rectangle((430, 910, 700, 1120), outline=COLORS["black"], width=6)

# Main copy
draw.line((138, 220, 300, 220), fill=COLORS["bronze"], width=5)
draw.text((138, 270), "EST. 1959 | 44 SECOND AVENUE, WESTDENE", font=font_label, fill=COLORS["bronze"])
draw.text((138, 350), "A Darker", font=font_head, fill=COLORS["off_white"])
draw.text((138, 440), "Showroom Feel", font=font_head, fill=COLORS["off_white"])
draw.text((138, 535), "for curtains, blinds and decor.", font=font_head_small, fill=COLORS["linen"])

body = (
    "Matte charcoal becomes the main atmosphere. Warmth comes through real showroom photos, "
    "curtain tones, walnut wood, and aged bronze details."
)
draw_wrapped(draw, (138, 635), body, font_body, COLORS["stone"], 610, 44)

draw.rectangle((138, 805, 395, 870), fill=COLORS["off_white"])
draw.text((175, 825), "Visit Showroom", font=font_button, fill=COLORS["black"])
draw.rectangle((420, 805, 575, 870), outline=COLORS["bronze"], width=2)
draw.text((465, 825), "Call Us", font=font_button, fill=COLORS["off_white"])

# Bottom cards
draw.rectangle((80, 1190, 860, 1305), fill=COLORS["charcoal"])
draw.text((120, 1224), "DIFFERENCE", font=font_label, fill=COLORS["bronze"])
draw.text((300, 1221), "Not cream editorial. Darker, tactile, showroom-led.", font=font_small, fill=COLORS["linen"])
draw.text((120, 1264), "Est. 1959", font=font_serif, fill=COLORS["bronze"])
draw.text((305, 1272), "Serif appears only as a heritage accent.", font=font_small, fill=COLORS["stone"])

draw.rectangle((910, 1190, 1720, 1305), fill=COLORS["charcoal"])
swatches = [
    ("Matte", "matte"),
    ("Charcoal", "charcoal"),
    ("Graphite", "graphite"),
    ("Linen", "linen"),
    ("Bronze", "bronze"),
    ("Walnut", "walnut"),
]
sx = 950
for label, key in swatches:
    draw.rectangle((sx, 1225, sx + 55, 1265), fill=COLORS[key], outline=COLORS["graphite"])
    draw.text((sx, 1272), label, font=font_small, fill=COLORS["linen"])
    sx += 125

canvas.save("design/matte-charcoal-showroom-direction.png")
