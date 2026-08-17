from PIL import Image, ImageDraw, ImageFont


W, H = 1800, 1250

COLORS = {
    "black": "#151515",
    "off_white": "#F7F4EC",
    "paper": "#FFFDF8",
    "charcoal": "#2F302D",
    "warm_grey": "#777066",
    "linen": "#D8C7AE",
    "gold": "#B9965B",
    "brown": "#8A5A35",
}


def load_font(path, size, index=0):
    try:
        return ImageFont.truetype(path, size=size, index=index)
    except Exception:
        return ImageFont.load_default(size=size)


SERIF = "/System/Library/Fonts/Supplemental/Georgia.ttf"
SERIF_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
SANS = "/System/Library/Fonts/Avenir Next.ttc"
SANS_FALLBACK = "/System/Library/Fonts/Supplemental/Arial.ttf"
SANS_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def text_size(draw, text, font):
    box = draw.textbbox((0, 0), text, font=font)
    return box[2] - box[0], box[3] - box[1]


def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        test = word if not current else current + " " + word
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


img = Image.new("RGB", (W, H), COLORS["off_white"])
draw = ImageDraw.Draw(img)

font_label = load_font(SANS_BOLD, 28)
font_small = load_font(SANS_FALLBACK, 28)
font_palette = load_font(SANS_FALLBACK, 24)
font_body = load_font(SANS_FALLBACK, 32)
font_body_bold = load_font(SANS_BOLD, 34)
font_title = load_font(SERIF, 84)
font_hero = load_font(SERIF_BOLD, 78)
font_serif_sample = load_font(SERIF, 58)
font_sans_sample = load_font(SANS_BOLD, 44)
font_button = load_font(SANS_BOLD, 30)

# Page heading
draw.text((90, 70), "FREE STATE CURTAIN PARLOUR", font=font_label, fill=COLORS["black"])
draw.text((90, 125), "Recommended Text And Font Direction", font=font_title, fill=COLORS["black"])
draw.text(
    (90, 225),
    "Classic black-and-white typography, softened with warm showroom neutrals.",
    font=font_small,
    fill=COLORS["warm_grey"],
)

# Hero text sample
hero_x, hero_y, hero_w, hero_h = 90, 315, 990, 820
draw.rectangle((hero_x, hero_y, hero_x + hero_w, hero_y + hero_h), fill=COLORS["paper"], outline=COLORS["linen"], width=3)
draw.line((hero_x + 70, hero_y + 85, hero_x + 200, hero_y + 85), fill=COLORS["gold"], width=5)
draw.text((hero_x + 70, hero_y + 140), "EST. 1959 | WESTDENE SHOWROOM", font=font_label, fill=COLORS["gold"])

headline_lines = ["Curtains, Blinds,", "Wallpaper & Decor", "in Bloemfontein"]
y = hero_y + 225
for line in headline_lines:
    draw.text((hero_x + 70, y), line, font=font_hero, fill=COLORS["black"])
    y += 84

body = (
    "Established in 1959, Free State Curtain Parlour helps you choose curtains, "
    "blinds, wallpaper, furniture and decor finishes from our Westdene showroom."
)
y = draw_wrapped(draw, (hero_x + 70, hero_y + 525), body, font_body, COLORS["warm_grey"], 820, 45)

button_y = hero_y + 725
draw.rectangle((hero_x + 70, button_y, hero_x + 315, button_y + 66), fill=COLORS["black"])
draw.text((hero_x + 105, button_y + 17), "Visit Showroom", font=font_button, fill=COLORS["off_white"])
draw.rectangle((hero_x + 350, button_y, hero_x + 520, button_y + 66), fill=COLORS["gold"])
draw.text((hero_x + 400, button_y + 17), "Call Us", font=font_button, fill=COLORS["black"])

# Font pairing card
side_x, side_y = 1130, 315
draw.rectangle((side_x, side_y, side_x + 580, side_y + 335), fill=COLORS["charcoal"])
draw.text((side_x + 45, side_y + 50), "FONT PAIRING", font=font_label, fill=COLORS["gold"])
draw.text((side_x + 45, side_y + 105), "Refined Serif", font=font_serif_sample, fill=COLORS["off_white"])
draw.text((side_x + 45, side_y + 180), "For hero headings and section titles.", font=font_small, fill=COLORS["linen"])
draw.text((side_x + 45, side_y + 245), "Clean Modern Sans", font=font_sans_sample, fill=COLORS["off_white"])
draw.text((side_x + 45, side_y + 295), "For body copy, buttons and navigation.", font=font_small, fill=COLORS["linen"])

# Palette card
palette_y = 700
draw.text((side_x, palette_y), "COLOUR USE", font=font_label, fill=COLORS["black"])
swatches = [
    ("Black", "black"),
    ("Off-white", "off_white"),
    ("Grey", "warm_grey"),
    ("Linen", "linen"),
    ("Gold", "gold"),
]
sx = side_x
for label, key in swatches:
    outline = COLORS["linen"] if key == "off_white" else None
    draw.rectangle((sx, palette_y + 45, sx + 86, palette_y + 131), fill=COLORS[key], outline=outline, width=2)
    draw.text((sx, palette_y + 150), label, font=font_palette, fill=COLORS["black"])
    sx += 120

palette_note = (
    "Use gold sparingly for detail, not as a main background. Let the photos carry "
    "the wood brown and richer showroom warmth."
)
draw_wrapped(draw, (side_x, palette_y + 235), palette_note, font_body, COLORS["warm_grey"], 560, 45)

img.save("design/homepage-type-direction.png")
