# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Broad professional audience: hiring managers evaluating for PM roles, recruiters screening candidates, peers and collaborators. Most visitors arrive via a shared link (resume, LinkedIn, referral) already knowing Rachna's name; the site must reward a closer look, not introduce from scratch.

## Product Purpose

A personal portfolio for Rachna Ravi, Staff Product Manager. The site exists to convey what a resume cannot: depth of product thinking (how she reasons through tradeoffs, what went wrong, what she'd change) alongside breadth and impact (range across e-commerce, food tech, grocery, and supply chain, with real business metrics). Success means a visitor leaves understanding both dimensions and wanting to continue the conversation.

## Positioning

Case studies that show the reasoning, not just the result. Every study includes what didn't work. The portfolio covers 9+ years across HelloFresh, Loblaw Digital, Tecsys, and earlier roles — from zero-to-market builds to platforms serving millions — with specific, auditable metrics.

## Operating Context

Three content surfaces: Work (case studies, experience timeline, about section), Photography (gallery), and Art (gallery). Work is the primary surface. Photography and Art are personal creative work that rounds out the portrait.

Six case studies span referrals, weight-loss programs, rapid experimentation, personalized defaults, grocery delivery, and store platform modernization.

## Capabilities and Constraints

- Static HTML/CSS/JS, no build step or framework
- Deployed to GitHub Pages via `pages` remote; must remain deployable there
- Light/dark theme with system preference detection and localStorage persistence
- Obfuscated email address (anti-scraping)
- Vercel config also present (cleanUrls, security headers, redirect)
- Resume available as downloadable PDF

## Brand Commitments

- Name: Rachna Ravi
- Font: Atkinson Hyperlegible Next (accessibility-focused choice)
- Tagline: "Professional problem finder. Photographer. Maker of things."
- Philosophy: "Rigour and speed aren't tradeoffs; they're how you avoid building the wrong thing really well."
- `noai, noimageai` robots meta — content must not be used for AI training
- Real photography and art assets, not stock

## Evidence on Hand

- Headshot: `/assets/rachna-photo.jpg`
- Resume: `/assets/rachna-ravi-resume.pdf`
- Photography gallery: 16 original photographs in `/assets/photography/`
- Art gallery: 5 original pieces in `/assets/art/`
- Case studies with real metrics (€115M programme, $202 AOV, $16M+ cumulative value, $30M+ CLV, CAD $40M revenue, 6-month MVP)
- No fabricated testimonials, endorsements, or third-party claims

## Product Principles

1. **Show the thinking, not just the outcome.** The portfolio's value is in how decisions were made, including what went wrong.
2. **Real numbers, real work.** Every metric is from actual shipped products. No inflated claims or unverifiable benchmarks.
3. **Respect the visitor's time.** The site should be fast, scannable, and direct. Visitors are busy professionals evaluating a candidate.
4. **The creative work belongs here.** Photography and art are not filler — they show range and a perspective that informs product thinking.
5. **Accessibility is non-negotiable.** The font choice (Atkinson Hyperlegible) is deliberate. The site should score 85+ on accessibility audits.

## Accessibility & Inclusion

Target: 85+ overall accessibility score. Atkinson Hyperlegible Next chosen specifically for readability. Semantic HTML with ARIA labels already in place. Light/dark theme respects system preference.
