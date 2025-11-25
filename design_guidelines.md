# Design Guidelines: Humane Certified AI

## Design Approach
**Selected System:** Material Design-inspired with trust-focused customization
**Rationale:** Certification platforms require credibility, clarity, and structured data presentation. Material's elevation system and clear typography hierarchy establish authority while maintaining accessibility.

## Core Design Principles
- **Trust Through Clarity:** Every element reinforces certification legitimacy
- **Data-First Hierarchy:** Scores and grades take visual priority
- **Scannable Structure:** Users quickly compare AI products across principles
- **Professional Authority:** Clean, confident design without unnecessary flourish

## Typography
- **Headings:** Inter or IBM Plex Sans (700 for H1/H2, 600 for H3/H4)
  - H1: 3xl-4xl, used for page titles
  - H2: 2xl-3xl, section headers and product names
  - H3: xl-2xl, principle categories
  - H4: lg-xl, subsection labels
- **Body:** Same family, weight 400 for body text, 500 for emphasis
- **Data/Scores:** Tabular figures, weight 600 for prominent display

## Layout System
**Spacing Units:** Tailwind 4, 6, 8, 12, 16, 24 for consistent rhythm
- Card padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Component gaps: gap-4 to gap-8
- Container: max-w-7xl with px-4 to px-8

## Component Library

### Certification Badges
- Three states: Certified (green checkmark), Recommended (blue star), Not Certified (gray icon)
- Size: 24-32px icons with accompanying text
- Placement: Top-right of product cards, next to product names on detail pages

### Principle Score Cards
- 8 principle categories displayed as individual cards or rows
- Grade display: Large letter (A/B/C/D) with icon representing category
- Visual treatment: Cards with subtle borders, icons use single accent color per grade tier
- Layout: 2-column on tablet, 4-column on desktop for principle grid

### Product Directory Cards
- Featured image or logo (square aspect ratio, 1:1)
- Product name (H3)
- Certification badge
- Quick score summary (average or key principles)
- "View Details" link or button
- Grid: 1-column mobile, 2-column tablet, 3-column desktop

### Filter & Search Bar
- Sticky top position on directory page
- Filter chips for certification levels
- Search input with icon
- Dropdown for principle-based filtering
- Clear, accessible toggle states

### Grade Visualization
- Letter grades (A-D) with corresponding semantic meaning
- Icon pairs: principle type + grade indicator
- Consistent sizing: grade letters 2xl-3xl, principle labels lg
- Color-coded tiers without relying solely on color (use icons + text)

### Navigation
- Clean header with logo, main navigation, and CTA button ("Get Certified" or "Submit Product")
- Sticky on scroll for directory pages
- Footer with principle overview, about links, contact

## Pages Structure

### Homepage
- Hero: Full-width section introducing certification mission
- Featured certified products (3-4 highlighted cards)
- Quick principle overview with icons
- Statistics section (products evaluated, principles tested)
- CTA section for product submission

### Product Directory
- Filter/search bar
- Product grid with certification badges prominent
- Pagination or infinite scroll
- "Coming Soon" section for future certifications

### Product Detail Page
- Hero section with product info and overall certification badge
- 8 principle scores in prominent grid layout
- Detailed grade breakdown per principle
- About the product section
- Link to full evaluation methodology

### About Certification
- 8 humane principles explained
- Evaluation methodology overview
- Partnership with Internet Archive mention
- Research findings teaser (Humanebench.ai link)

## Images
**Hero Images:** 
- Homepage: Conceptual illustration of human-AI interaction or diverse people using technology (1600x600px)
- Subtle overlay to ensure text legibility
- Product pages: Product screenshots or interface examples where available

**Product Images:**
- Logo or app icon (square, minimum 200x200px)
- Optional: Interface screenshots on detail pages

**Icons:**
- Use Material Icons or Heroicons for principle categories
- Custom certification badge icons (checkmark, star, x-mark)
- Consistent 24px base size, scalable to 32px for emphasis

## Accessibility & Interaction
- All certification states accessible via text, not color alone
- Focus states with visible outlines
- Interactive elements minimum 44px touch target
- Grade labels include semantic meaning (e.g., "Grade A: Excellent")
- Skip navigation for keyboard users

## Animation Guidelines
**Minimal & Purposeful:**
- Subtle fade-in on scroll for product cards (100-200ms)
- Smooth transitions on filter/sort actions (200ms)
- No parallax or decorative animations
- Hover states: slight elevation increase on cards (shadow depth change)

## Visual Hierarchy Priorities
1. Certification badges (most prominent visual cue)
2. Product names and grades
3. Principle scores
4. Supporting information and details
5. Navigation and meta-content

This design establishes authority and trust through clarity, structured data presentation, and consistent visual language—reflecting the seriousness of AI certification while remaining accessible and scannable.