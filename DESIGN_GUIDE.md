# GlimmerAtlas Design & Style Guide

> A comprehensive guide to the visual identity, design system, and component specifications for GlimmerAtlas.

This guide ensures consistency across all contributions and maintains the calm, polished aesthetic that defines GlimmerAtlas.

---

## Table of Contents

1. [Visual Identity](#visual-identity)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Animation Guidelines](#animation-guidelines)
7. [Accessibility](#accessibility)
8. [Do's and Don'ts](#dos-and-donts)

---

## Visual Identity

### Brand

**Name**: GlimmerAtlas
**Tagline**: Navigate the Linux universe.

**Philosophy**: Calm, thoughtful, and intentional design inspired by:
- **Catppuccin** color palette
- **charm.land** tools (Glow, Gum, VHS, Crush)
- **Glass morphism** (mica/acrylic effects)
- **Editorial** layouts with breathing room

### Design Principles

1. **Calm, not loud** - Muted colors, subtle transitions
2. **Glass morphism over flat** - Translucent layered cards with backdrop blur
3. **Subtle glows on interaction** - Focus and hover states glow softly
4. **Smooth, purposeful animations** - 200-300ms transitions maximum
5. **Monospace for metadata** - Technical information uses monospace fonts
6. **Hierarchy through spacing** - Not font size or weight overload

---

## Color Palette

### Catppuccin Mocha

GlimmerAtlas uses the **Catppuccin Mocha** color palette exclusively.

#### Base Colors

```css
--base:    #1e1e2e  /* Primary background */
--mantle:  #181825  /* Darker background */
--crust:   #11111b  /* Darkest background */
```

**Usage**:
- `base`: Main background color for pages
- `mantle`: Header/footer backgrounds
- `crust`: Button text when using colored backgrounds

#### Surface Colors

```css
--surface-0: #313244
--surface-1: #45475a
--surface-2: #585b70
```

**Usage**:
- `surface-0`: Card backgrounds (with transparency: `bg-surface-0/50`)
- `surface-1`: Borders, dividers
- `surface-2`: Hover states on cards

#### Text Colors

```css
--text:      #cdd6f4  /* Primary text */
--subtext-1: #bac2de  /* Secondary text */
--subtext-0: #a6adc8  /* Tertiary/muted text */
```

**Usage**:
- `text`: Body text, headings
- `text-muted` (subtext-0): Descriptions, helper text
- `text-subtle` (subtext-1): Less important content

#### Accent Colors

```css
--lavender:  #b4befe  /* Primary accent */
--blue:      #89b4fa  /* Secondary accent */
--sapphire:  #74c7ec
--sky:       #89dceb
--teal:      #94e2d5
--green:     #a6e3a1  /* Success, pros */
--yellow:    #f9e2af  /* Warning */
--peach:     #fab387
--red:       #f38ba8  /* Error, cons */
--mauve:     #cba6f7
```

**Usage**:
- `lavender`: Focus rings, primary CTA
- `blue`: Secondary buttons, links
- `green`: Pros, checkmarks, success states
- `red`: Cons, errors, destructive actions
- `yellow`: Warnings, highlights

### Color Usage Rules

✅ **Do**:
- Use semi-transparency for glass effect (`bg-surface-0/50`)
- Stick to the Catppuccin palette
- Use accent colors sparingly for emphasis
- Maintain WCAG AA contrast ratios (minimum 4.5:1)

❌ **Don't**:
- Add gradients except for text-gradient on headings
- Use neon or saturated colors
- Use colors outside the Catppuccin palette
- Create loud, high-contrast combinations

---

## Typography

### Font Families

```css
font-sans: 'Inter', system-ui, -apple-system, sans-serif
font-mono: 'JetBrains Mono', 'Consolas', 'Monaco', monospace
```

### Font Usage

**Sans-serif (Inter)**:
- Body text
- Headings
- UI labels
- Navigation

**Monospace (JetBrains Mono)**:
- Tags/badges (base distro, desktop environments)
- Technical specifications
- Version numbers
- File paths and commands

### Type Scale

```css
text-xs:    0.75rem   (12px)  /* Fine print */
text-sm:    0.875rem  (14px)  /* Descriptions */
text-base:  1rem      (16px)  /* Body */
text-lg:    1.125rem  (18px)  /* Lead paragraph */
text-xl:    1.25rem   (20px)  /* Subheading */
text-2xl:   1.5rem    (24px)  /* Section heading */
text-3xl:   1.875rem  (30px)
text-4xl:   2.25rem   (36px)  /* Page title */
text-5xl:   3rem      (48px)
```

### Font Weights

- `font-normal`: 400 (body text)
- `font-medium`: 500 (labels, emphasis)
- `font-semibold`: 600 (subheadings)
- `font-bold`: 700 (headings)

### Line Height

- **Headings**: `leading-tight` (1.25)
- **Body text**: `leading-relaxed` (1.625)
- **UI elements**: `leading-normal` (1.5)

---

## Spacing & Layout

### Spacing Scale

GlimmerAtlas uses Tailwind's default spacing scale (4px base):

```
1  = 0.25rem (4px)
2  = 0.5rem  (8px)
3  = 0.75rem (12px)
4  = 1rem    (16px)
6  = 1.5rem  (24px)
8  = 2rem    (32px)
12 = 3rem    (48px)
16 = 4rem    (64px)
```

### Layout Principles

**Container**:
- Max-width: `max-w-7xl` (80rem / 1280px)
- Horizontal padding: `px-4` on mobile, `px-6` on tablet, `px-8` on desktop

**Vertical Rhythm**:
- Section spacing: `space-y-8` (2rem)
- Component spacing: `space-y-4` (1rem)
- Tight spacing: `space-y-2` (0.5rem)

**Grid Layouts**:
- Browse sidebar: 4-column grid (1 sidebar + 3 content)
- Feature cards: 3-column grid on desktop, 1-column on mobile
- Comparison table: Horizontal scroll on mobile

---

## Components

### Glass Card

The core component providing the glass morphism aesthetic.

**Variants**:

```tsx
// Default - semi-transparent with backdrop blur
<GlassCard className="p-6">
  {children}
</GlassCard>

// Light - more transparent
<GlassCard variant="light" className="p-4">
  {children}
</GlassCard>
```

**CSS**:
```css
.glass-card {
  background-color: rgb(49 50 68 / 0.5);
  backdrop-filter: blur(16px);
  border: 1px solid rgb(69 71 90 / 0.5);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3);
}
```

**Usage**:
- Question cards
- Result cards
- Filter panels
- Detail page sections

---

### Buttons

**Primary**:
```tsx
<button className="btn-primary">
  Start Questionnaire
</button>
```

```css
.btn-primary {
  background-color: #89b4fa;
  color: #11111b;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-primary:hover {
  background-color: rgb(137 180 250 / 0.9);
  box-shadow: 0 0 10px rgb(180 190 254 / 0.3);
}
```

**Secondary**:
```tsx
<button className="btn-secondary">
  Browse Distros
</button>
```

**Ghost**:
```tsx
<button className="btn-ghost">
  Cancel
</button>
```

**Usage Rules**:
- Primary: Main CTAs, form submissions
- Secondary: Alternative actions
- Ghost: Tertiary actions, cancel buttons

---

### Badges / Tags

```tsx
<Badge variant="secondary" className="font-mono">
  arch
</Badge>
```

**Styling**:
- Always use `font-mono`
- Small text size (`text-xs`)
- Padding: `px-2 py-1`
- Rounded: `rounded-md`
- Background: `bg-surface-1/50`

**Usage**:
- Base distribution tags
- Desktop environment tags
- Release model indicators
- Category labels

---

### Progress Indicator

```tsx
<div className="h-1 bg-surface-0 rounded-full overflow-hidden">
  <motion.div
    className="h-full bg-gradient-to-r from-lavender to-blue"
    style={{ width: `${progress}%` }}
  />
</div>
```

**Features**:
- Gradient fill (lavender → blue)
- Smooth animation with Framer Motion
- Percentage label above bar

---

### Result Cards

**Structure**:
- Rank badge (top performers get colored badges)
- Distro name and tagline
- Match score (large, prominent)
- Match reasons (3 max, with checkmarks)
- Technical tags (base, DE, release model)
- Action buttons (View Details, Official Site)

**Hover State**:
- Scale: `1.01`
- Glow shadow: `shadow-glow-md`
- Smooth transition: `200ms`

---

### Comparison Table

**Features**:
- Sticky left column for attribute labels
- Horizontal scroll on mobile
- Alternating row backgrounds (`surface-0/10` and transparent)
- Monospace for technical values
- Pros marked with green checkmarks
- Cons marked with red crosses

**Responsive Behavior**:
- Desktop: Full table visible
- Tablet: Horizontal scroll
- Mobile: Horizontal scroll with touch gestures

---

## Animation Guidelines

### When to Use Motion

✅ **Appropriate uses**:
- Page transitions (200-300ms)
- Card hover effects (scale, glow)
- Filter panel slide-ins
- Progress indicator fills
- Stagger animations for lists (50ms delay per item)

❌ **Avoid**:
- Excessive bounce effects
- Long animations (>500ms)
- Animations on every element
- Parallax or 3D transforms

### Framer Motion Variants

**Page Transition**:
```tsx
const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.2, ease: 'easeOut' },
};
```

**Card Hover**:
```tsx
const cardHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    boxShadow: '0 0 20px rgba(180, 190, 254, 0.3)',
  },
};
```

**Stagger Container**:
```tsx
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
```

### Easing Functions

- **Ease out**: For entrances (`easeOut`)
- **Ease in**: For exits (`easeIn`)
- **Ease in-out**: For hovers and interactions

### Duration Guidelines

- **Micro-interactions**: 150-200ms (hover, focus)
- **Page transitions**: 200-300ms
- **Content reveals**: 300ms maximum
- **Never exceed**: 500ms

---

## Accessibility

### Focus Indicators

All interactive elements must have visible focus states:

```css
.glow-focus {
  outline: none;
  ring: 2px solid rgb(180 190 254 / 0.5);
  box-shadow: 0 0 10px rgb(180 190 254 / 0.3);
}
```

### Color Contrast

Maintain WCAG AA standards (4.5:1 for normal text, 3:1 for large text):

✅ **Good contrast**:
- `text` on `base`: 13.7:1
- `text-muted` on `base`: 8.1:1
- `lavender` on `base`: 9.2:1

❌ **Poor contrast**:
- Don't use `overlay-0` for body text
- Don't use low-opacity text on glass cards

### Keyboard Navigation

All features must be fully keyboard accessible:

- **Tab**: Navigate forward
- **Shift+Tab**: Navigate backward
- **Enter/Space**: Activate
- **Arrow keys**: Navigate options
- **Escape**: Close modals, go back

### Screen Readers

- Use semantic HTML (`<nav>`, `<main>`, `<article>`)
- Add ARIA labels where needed
- Include skip links
- Provide alt text for all images
- Announce dynamic content changes

---

## Do's and Don'ts

### ✅ Do

- **Use glass cards** for all major content containers
- **Add subtle glow** on hover and focus
- **Use monospace** for all technical metadata
- **Keep animations under 300ms**
- **Maintain vertical rhythm** with consistent spacing
- **Use Catppuccin colors** exclusively
- **Test keyboard navigation** for all features
- **Check color contrast** with a11y tools

### ❌ Don't

- **Don't use gradients** (except text-gradient on headings)
- **Don't add neon colors** or high saturation
- **Don't over-animate** - motion should be subtle
- **Don't skip focus indicators** - always visible
- **Don't use custom fonts** - stick to Inter and JetBrains Mono
- **Don't create flat cards** - always use glass effect
- **Don't ignore mobile** - test on small screens
- **Don't add emoji** unless explicitly requested

---

## Component Specifications

### Question Card

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="glass-card p-8"
>
  <h2 className="text-2xl font-semibold">{question}</h2>
  <p className="text-text-muted">{subtitle}</p>
  {/* Options */}
</motion.div>
```

**Dimensions**:
- Max width: `max-w-2xl`
- Padding: `p-8`
- Spacing: `space-y-6`

### Filter Panel

```tsx
<GlassCard className="p-6 space-y-6">
  <h2 className="text-lg font-semibold">Filters</h2>
  {/* Filter groups */}
</GlassCard>
```

**Dimensions**:
- Sticky position: `sticky top-20`
- Max height: `max-h-screen`
- Overflow: `overflow-y-auto`

### Result Card

**Layout**:
- Flexbox with rank badge + content
- Rank badge: `w-12 h-12`
- Score: `text-2xl font-bold text-lavender`
- Match reasons: max 3, with green checkmarks
- Tags: `flex flex-wrap gap-2`

---

## Future Considerations

As GlimmerAtlas grows, maintain these principles:

1. **Consistency over novelty** - Stick to established patterns
2. **Performance matters** - Measure bundle size, optimize images
3. **Accessibility first** - Test with screen readers and keyboard
4. **Mobile experience** - Design for touch, test on devices
5. **Dark mode only** - No light theme planned (Catppuccin Mocha is dark)

---

## Questions?

For design questions or clarifications, open an issue on GitHub or refer to:
- **Catppuccin docs**: https://github.com/catppuccin/catppuccin
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion

**Navigate the Linux universe.** 🌌
