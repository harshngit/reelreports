# CTA Components Documentation

This folder contains Call-to-Action (CTA) components for the ReelReport application.

## Components

### 1. CTAButtons

Reusable button component with multiple variants for Book Demo and Get Started actions.

#### Usage

```jsx
import CTAButtons from './components/cta/CTAButtons';

// Default variant (horizontal layout)
<CTAButtons 
  onBookDemo={() => navigate('/book-demo')}
  onGetStarted={() => navigate('/get-started')}
  variant="default"
/>

// Stacked variant (vertical layout)
<CTAButtons variant="stacked" />

// Large variant (bigger buttons)
<CTAButtons variant="large" />
```

#### Props

- `onBookDemo`: Function - Handler for Book Demo button click
- `onGetStarted`: Function - Handler for Get Started button click
- `variant`: String - Button layout variant ('default', 'stacked', 'large')

---

### 2. HeroCTA

Full-featured hero section with CTA buttons and multiple display variants.

#### Usage

```jsx
import HeroCTA from './components/cta/HeroCTA';

// Full hero section (for landing page)
<HeroCTA variant="hero" />

// Banner CTA (for middle of page)
<HeroCTA variant="banner" />

// Minimal buttons only
<HeroCTA />
```

#### Variants

- **hero**: Complete hero section with title, description, features list, visual element, and CTA buttons
- **banner**: Simplified banner with gradient background and CTA buttons
- **default**: Just the CTA buttons

---

## Features

### Animations

All components use **Framer Motion** for smooth animations:
- Fade in on mount
- Scale on hover/tap
- Continuous arrow animation on Get Started button
- Floating elements in hero variant

### Responsive Design

- Mobile-first approach
- Stacks buttons vertically on mobile
- Horizontal layout on desktop
- Adapts font sizes and spacing

### Styling

- Tailwind CSS utility classes
- Gradient backgrounds (blue to purple)
- Shadow effects on hover
- Rounded corners for modern look

---

## Examples

### In Header/Navbar

```jsx
import { HeroCTA } from './components/cta';

<nav>
  {/* ...other nav items */}
  <HeroCTA />
</nav>
```

### In Landing Page

```jsx
import { HeroCTA } from './components/cta';

<main>
  <HeroCTA variant="hero" />
  {/* ...other sections */}
</main>
```

### In Pricing Page

```jsx
import { HeroCTA } from './components/cta';

<section>
  <h2>Ready to get started?</h2>
  <HeroCTA variant="banner" />
</section>
```

---

## Routes

The CTA buttons navigate to:
- `/book-demo` - Book Demo page with form
- `/get-started` - Get Started onboarding flow

Make sure these routes are defined in your routing configuration.

