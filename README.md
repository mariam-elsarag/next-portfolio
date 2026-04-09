# Design System Document: High-End Developer Portfolio

## 1. Overview & Creative North Star

**Creative North Star: "The Ethereal Architect"**

This design system is built to move away from the "standard" developer portfolio—the flat, grid-locked templates that dominate the industry. Instead, we aim for a "High-End Editorial" experience. The goal is to present technical skill through the lens of a digital artisan.

By leveraging **intentional asymmetry**, **overlapping glass surfaces**, and **tonal depth**, we create an environment that feels like a premium dark-mode IDE meets a luxury fashion editorial. We reject the rigid 1px border and the flat grey box in favor of a UI that feels "grown" and "illuminated" from within.

---

## 2. Colors & Atmospheric Depth

Our palette is rooted in the deep space between `#0b1326` (Surface) and `#c0c1ff` (Primary). It mimics the glow of a high-end monitor in a dimly lit studio.

### The Palette (Material 3 Convention)

- **Primary (`#c0c1ff`):** Use for high-intent actions and "neon" accents.
- **Surface (`#0b1326`):** The foundation. Never use pure black (#000); we use deep midnight to maintain "inkiness."
- **Tertiary (`#dbb8ff`):** Soft lavender accents for code snippets or secondary tags.

### The "No-Line" Rule

**Explicit Instruction:** Traditional 1px solid borders for sectioning are strictly prohibited.
Structure must be defined by:

1.  **Tonal Shifts:** Placing a `surface-container-high` (`#222a3d`) card on a `surface` (`#0b1326`) background.
2.  **Negative Space:** Using the spacing scale to create groupings.
3.  **Shadow casting:** Only for floating elements.

### The "Glass & Gradient" Rule

To achieve "visual soul," use **Glassmorphism** for all secondary containers.

- **Recipe:** `surface-variant` (`#2d3449`) at 40% opacity + `backdrop-filter: blur(12px)`.
- **Gradients:** Hero sections should utilize a subtle radial gradient: `primary` (`#c0c1ff`) at 5% opacity fading into `surface`.

---

## 3. Typography: Technical Authority

We use **Inter** for its neutral, high-legibility "tech" feel, paired with **Space Grotesk** for labels to inject a subtle "monospace" engineering soul.

- **Display-LG (3.5rem):** Set with `-0.04em` letter-spacing. This is your "Statement" font. Use it for hero titles where the text overlaps background elements.
- **Headline-MD (1.75rem):** Used for project titles. Always in `on-surface` (`#dae2fd`).
- **Label-MD (0.75rem):** (Space Grotesk) All-caps for "Technical Stack" badges or metadata. This provides the "pro" aesthetic.

**Editorial Tip:** Don't align everything to the left. Use a 12-column grid but allow your "Display" type to break the margin, creating an asymmetric, high-end magazine feel.

---

## 4. Elevation & Depth: Tonal Layering

In this system, depth is a physical property. We "stack" rather than "draw."

### The Layering Principle

Hierarchy is achieved by nesting surface tokens:

- **Level 0 (Background):** `surface` (`#0b1326`)
- **Level 1 (Sections):** `surface-container-low` (`#131b2e`)
- **Level 2 (Cards):** `surface-container-high` (`#222a3d`)
- **Level 3 (Popovers/Tooltips):** `surface-bright` (`#31394d`)

### Ambient Shadows

Shadows must be "Environmental."

- **Formula:** `box-shadow: 0 20px 40px rgba(6, 14, 32, 0.5);`
- Avoid dark grey shadows. Use a tinted version of the background (`surface-container-lowest`) to ensure the shadow feels like a natural obstruction of light.

### The "Ghost Border" Fallback

If a border is required for accessibility on a button or card, use a **Ghost Border**:

- `outline-variant` (`#464554`) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons: High-Contrast Interaction

- **Primary:** `primary` (`#c0c1ff`) background with `on-primary` (`#1000a9`) text.
  - _Effect:_ Hovering should trigger a `primary_container` (`#8083ff`) outer glow.
- **Secondary (Glass):** Transparent background, `surface-variant` blur, with a 1px `Ghost Border`.

### Cards: The Portfolio Workhorse

- **Styling:** No solid background. Use `surface-container-highest` at 60% opacity with `backdrop-blur`.
- **Interaction:** On hover, the card should lift using a `0.5rem` translation (Y-axis) and the border opacity should increase from 15% to 40%.
- **Spacing:** Use `xl` (1.5rem) padding. Never use dividers; use 24px of vertical space to separate the header from the body.

### Animated-Ready Badges (Chips)

- Used for "Languages" or "Status."
- **Style:** `secondary-container` (`#3e495d`) with a pulse animation on the `on-secondary-container` dot to indicate "Live" or "Active" projects.

### Input Fields

- **Resting:** `surface-container-lowest` background. No border.
- **Focus:** A "Glow" transition where the `outline` token creates a 2px soft outer shadow in `primary`.

---

## 6. Do's and Don'ts

### Do:

- **Do** use `primary` and `tertiary` gradients for text-masking on large Display-LG headers to create a "shimmer" effect.
- **Do** use `xl` (1.5rem) roundedness for large containers to soften the "technical" edge.
- **Do** allow images to "bleed" out of their containers slightly to break the "boxed-in" look.

### Don't:

- **Don't** use 100% opaque white for body text. Use `on-surface-variant` (`#c7c4d7`) to reduce eye strain and increase the premium feel.
- **Don't** use standard "Drop Shadows." If an element needs to pop, use a background color shift or a blur.
- **Don't** use dividers. If you feel the need for a line, increase the `gap` in your flexbox/grid instead.
