---
name: byrachna.com
description: Personal portfolio for a Staff PM — restrained, evidence-first, accessibility-focused
colors:
  slate-teal: "#4a7389"
  slate-teal-deep: "#3a6175"
  slate-teal-subtle: "rgba(74, 115, 137, 0.07)"
  ink: "#1a1a1a"
  stone: "#555555"
  pewter: "#6e6e6e"
  paper: "#ffffff"
  parchment: "#fafafa"
  frost: "#f4f7f9"
  rule: "#e5e5e5"
  rule-hover: "#93b1c4"
typography:
  display:
    fontFamily: "'Atkinson Hyperlegible Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "'Atkinson Hyperlegible Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "'Atkinson Hyperlegible Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "'Atkinson Hyperlegible Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Atkinson Hyperlegible Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  pill: "100px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  card-case-study:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px 32px"
  card-case-study-hover:
    backgroundColor: "{colors.frost}"
  button-pill:
    backgroundColor: "transparent"
    textColor: "{colors.stone}"
    rounded: "{rounded.pill}"
    padding: "8px 24px"
  button-pill-hover:
    backgroundColor: "{colors.slate-teal-subtle}"
    textColor: "{colors.slate-teal}"
  button-theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.stone}"
    rounded: "{rounded.pill}"
    padding: "0"
    size: "32px"
---

# Design System: byrachna.com

## Overview

**Creative North Star: "The Honest Folio"**

The design system is an extension of the portfolio's editorial stance: transparency, directness, and evidence over ornamentation. The same voice that shows what didn't work in every case study shapes the visual language — open, unhurried, real. Nothing decorative competes with the content; nothing tries to impress beyond the work itself.

A single typeface (Atkinson Hyperlegible Next) serves every role, chosen for readability over aesthetic fashion. A single accent color (Slate Teal) marks interactive elements and key metrics without creating visual hierarchy by decoration. The system trusts whitespace and typography weight to organize information, reserving color and motion for functional purpose.

Light and dark themes are first-class citizens, adapting through CSS custom properties. The dark theme is not an inversion — it is a distinct tonal register of the same restrained palette, with the accent shifting warmer (#7ab3cc) to maintain legibility against dark backgrounds.

**Key Characteristics:**
- Single-accent, content-first palette with light/dark parity
- One typeface at multiple weights — hierarchy through size and weight, never through font variety
- Flat surfaces with tonal layering; shadows reserved for interaction states
- Restrained, precise interactions: subtle hover lifts, spring easing, gentle border color shifts
- Pill-shaped actions, rounded cards, circular markers — soft geometry throughout

## Colors

A deliberately narrow palette: one accent family, one neutral ramp, and functional tints derived from the accent. Restraint is the point — the fewer colors competing, the more the content leads.

### Primary
- **Slate Teal** (#4a7389): Links, active navigation, timeline markers, metric highlights, and all interactive affordances. In dark mode, shifts to #7ab3cc for contrast parity.
- **Slate Teal Deep** (#3a6175): Blockquote borders and emphasis states. The darker register of the accent, used where Slate Teal needs more authority.
- **Slate Teal Subtle** (rgba(74, 115, 137, 0.07)): Blockquote backgrounds, metric pill fills, and hover states on pill buttons. A whisper of the accent, not a color in its own right.

### Neutral
- **Ink** (#1a1a1a / dark: #e5e5e5): Primary text and headings. Near-black in light mode, warm grey in dark.
- **Stone** (#555555 / dark: #a8a8a8): Secondary text — body copy, timeline descriptions, about content. The workhorse color.
- **Pewter** (#6e6e6e / dark: #999999): Muted text — meta labels, date ranges, card descriptions. Recedes behind Stone.
- **Paper** (#ffffff / dark: #141414): Page background. Pure white in light, near-black in dark.
- **Parchment** (#fafafa / dark: #1e1e1e): Card surfaces at rest. One step off Paper.
- **Frost** (#f4f7f9 / dark: #262630): Card surfaces on hover. A cool-shifted tint that introduces the faintest blue.
- **Rule** (#e5e5e5 / dark: #2e2e2e): Borders, dividers, section separators.
- **Rule Hover** (#93b1c4 / dark: #5a8da6): Border color on interactive card hover. A desaturated echo of Slate Teal.

### Named Rules
**The One Accent Rule.** Slate Teal is the only chromatic color in the system. If something needs color emphasis, it uses Slate Teal or one of its derivatives (Deep, Subtle). No secondary or tertiary accent exists; introducing one would break the content-first hierarchy.

## Typography

**Display & Body Font:** Atkinson Hyperlegible Next (with system fallback stack)

**Character:** A single accessibility-focused typeface handles every role — from hero headlines to card meta labels. The pairing is weight and size, not font variety. The face was designed by the Braille Institute for maximum letterform distinction; choosing it signals that readability is a product value, not an afterthought.

### Hierarchy
- **Display** (700, 2rem, 1.2): Hero name. The largest type on any page.
- **Hero Title** (700, 2.75rem, 1.2): Available for page-level display use. Currently used on hero title variant.
- **Headline** (600, 1.5rem, 1.2): Section headings (About, Selected Work, Experience, Get in Touch). Semibold, not bold — authority without shouting.
- **Title** (600, 1.25rem, 1.2): Card titles, case study detail section headings. The mid-weight workhorse.
- **Body** (400, 1rem, 1.6): About text, case study prose, contact text. Generous line height (1.6) for sustained reading.
- **Label** (500/600, 0.875rem, 1.6): Meta text (company, date range), CTAs ("Read case study"), navigation links. Slightly elevated weight to compensate for small size.

### Named Rules
**The Single Voice Rule.** One typeface, always. Weight and size create hierarchy; font-family does not change. Introducing a second face (serif for display, mono for code) would fracture the system's coherence.

## Layout

The layout uses a single-column content well with a wider outer container:

- **App container:** 960px max-width with 24px horizontal padding. The outer boundary for all content.
- **Content well:** 720px max-width for hero, case study detail, and prose-heavy sections. Centered within the app container.
- **Case study grid:** 2-column grid at 24px gap. Collapses to single column below 768px.
- **Art gallery:** CSS multi-column (2 columns, 24px gap) with masonry-like break-inside avoidance. Collapses to single column below 600px.

Vertical rhythm follows the spacing scale: sections separated by 64px (--space-3xl), subsections by 48px (--space-2xl), elements within sections by 16-24px. Consecutive sections gain a top border (1px solid Rule) and 32px top padding.

**Breakpoint:** A single breakpoint at 768px handles the mobile adaptation. Navigation stacks vertically, case study grid collapses, hero photo shrinks from 130px to 100px, and contact links stack. No intermediate breakpoints — the layout is simple enough to flex without them.

## Elevation & Depth

The system is flat by default. One shadow token exists (`0 2px 12px rgba(0,0,0,0.06)` light / `rgba(0,0,0,0.3)` dark) and is reserved for art gallery hover state. All other depth is conveyed through:

- **Tonal layering:** Paper → Parchment → Frost creates a three-step surface hierarchy without shadows.
- **Borders:** 1px solid Rule separates sections and contains cards. On hover, borders shift to Rule Hover (a desaturated Slate Teal echo).
- **Left-border accents:** Blockquotes and case study summary panels use a 3px Slate Teal left border with Slate Teal Subtle fill — a structural depth cue rather than a shadow.

This is an area open to expansion. The current flatness wasn't a deliberate constraint — additional shadow vocabulary could serve the content if it maintains the restrained character.

### Shadow Vocabulary
- **Soft Ambient** (`0 2px 12px rgba(0,0,0,0.06)`): Art piece hover. A diffuse glow, not a directional cast shadow.

## Shapes

Soft geometry throughout, with increasing roundness as elements become more interactive:

- **Content containers** (cards, tables, blockquotes): Gently curved (8px radius). Enough to soften the box without calling attention to the shape.
- **Interactive cards** (case study cards): Generously rounded (16px radius). The extra curve signals interactivity before the cursor arrives.
- **Action elements** (contact links, back buttons, 404 link): Full pill shape (100px radius). The most rounded elements are the ones you click.
- **Circular elements** (theme toggle, timeline markers, hero photo, numbered list counters): True circles. Used for small, iconic interactive or decorative elements.
- **Borders:** Consistently 1px throughout, except blockquote and summary left borders (2-3px) which use thickness as emphasis.

### Named Rules
**The Roundness Ladder.** Containers < Cards < Actions < Icons. Roundness increases with interactivity. A flat-cornered element would feel alien in this system; a pill-shaped container would steal focus from its content.

## Components

### Cards (Case Study)
- **Shape:** Generously rounded (16px radius)
- **Background:** Parchment at rest, Frost on hover
- **Border:** 1px solid Rule, shifting to Rule Hover on hover
- **Hover:** 2px upward lift with spring easing (0.4s cubic-bezier(0.34, 1.56, 0.64, 1)), border color shift, background tint change. Active state returns to baseline (translateY(0)).
- **Internal padding:** 24px vertical, 32px horizontal (compact variant: 24px × 32px)
- **Metric pill:** Inline-block label with Slate Teal text, Slate Teal Subtle background, 4px radius. Highlights key numbers without breaking the flow.
- **CTA:** Label-weight text in Slate Teal, shifting to Ink on card hover. Arrow is decorative (`aria-hidden`).

### Pill Buttons (Contact, Back, 404)
- **Shape:** Full pill (100px radius)
- **Background:** Transparent at rest, Slate Teal Subtle on hover
- **Border:** 1px solid Rule, shifting to Slate Teal on hover
- **Text:** Stone at rest, Slate Teal on hover. Label weight (500).
- **Hover:** Upward lift (2px) with spring easing. Back button shifts left instead.
- **Download variant:** Same style, arrow character appended.

### Theme Toggle
- **Shape:** Circle (50% radius, 32px × 32px)
- **Border:** 1px solid Rule, shifting to Slate Teal on hover
- **Icon:** Sun/moon SVGs, 16px, shown/hidden via `data-theme` attribute
- **Behavior:** Toggles `data-theme` on `<html>`, persists to localStorage, respects system preference on first load

### Timeline
- **Line:** 2px vertical gradient from Slate Teal to Rule, positioned left
- **Markers:** 8px circles in Slate Teal, scaling to 1.3× on row hover with spring easing
- **Row hover:** 4px rightward shift. No background change — the marker animation carries the feedback.

### Blockquote (Hero Philosophy)
- **Left border:** 3px solid Slate Teal Deep
- **Background:** Slate Teal Subtle
- **Shape:** 0 left radius, 8px right radius (attached to the left edge)
- **Decorative quote mark:** 3rem, Slate Teal at 40% opacity, positioned top-left

### Case Study Summary
- **Left border:** 3px solid Slate Teal
- **Background:** Slate Teal Subtle
- **Shape:** 0 left radius, 8px right radius
- **Last item emphasis:** Ink color, medium weight (500)

### Navigation
- **Style:** Horizontal link row, right-aligned, with theme toggle
- **Typography:** Label size (0.875rem), Stone color
- **States:** Hover → Ink, Active → Slate Teal
- **Mobile:** Stacks vertically, left-aligned

## Do's and Don'ts

### Do:
- **Do** use Slate Teal exclusively for interactive and emphasis elements — links, CTAs, metric highlights, timeline markers.
- **Do** rely on typography weight (400 → 500 → 600 → 700) and the three text colors (Ink, Stone, Pewter) to create hierarchy.
- **Do** use the spring easing (cubic-bezier(0.34, 1.56, 0.64, 1)) for physical interactions (lift, scale, shift) and the standard easing for property transitions (color, background, border).
- **Do** test every color choice in both light and dark themes — the dark theme accent (#7ab3cc) is a different value, not a CSS inversion.
- **Do** prefer the content well (720px) for reading-heavy pages and the wide container (960px) for grid layouts.

### Don't:
- **Don't** introduce a second chromatic color. No warm accents, no status colors, no gradients. If it needs color, it's Slate Teal or it's neutral.
- **Don't** add a second typeface. Weight and size handle every hierarchy need.
- **Don't** use shadows for at-rest surfaces. The tonal layering (Paper → Parchment → Frost) and borders handle depth without shadows.
- **Don't** break the roundness ladder: containers (8px) < cards (16px) < actions (pill) < icons (circle).
- **Don't** use uppercase text except for the "How I Work" subheading pattern (0.02em letter-spacing, uppercase, 1rem, 600 weight).
