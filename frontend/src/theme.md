# HackTrack Color System (Tailwind CSS v4) - HackerRank Dark Theme

This document outlines the custom dark color palette for the HackTrack project using Tailwind CSS v4's @theme directive, inspired by HackerRank's dark interface.

## Color System Implementation

The colors are defined using Tailwind v4's modern @theme directive with OKLCH color space for better color accuracy and consistency in dark mode environments:

css
@theme {
  --color-dark-primary: oklch(0.15 0.005 240);     /* #0E141E - Main dark background */
  --color-dark-secondary: oklch(0.18 0.008 235);   /* #1A1F2E - Card backgrounds */
  --color-green-primary: oklch(0.88 0.25 130);     /* #39FF14 - HackerRank green */
  --color-green-secondary: oklch(0.75 0.22 135);   /* #2ECC40 - Secondary green */
}


## Color Palette

### Dark Backgrounds
- *Dark Primary*: Main application background (#0E141E)
- *Dark Secondary*: Card and panel backgrounds (#1A1F2E)
- *Dark Tertiary*: Input and form backgrounds (#242B3D)
- *Dark Accent*: Border and divider color (#2A3441)

### HackerRank Green System

#### Primary Green (oklch(0.88 0.25 130) - #39FF14)
- Used for: Primary actions, success states, active elements
- Variations: green-50 to green-900
- Access: bg-green-primary, text-green-primary, etc.

#### Secondary Green (oklch(0.75 0.22 135) - #2ECC40)
- Used for: Hover states, secondary actions
- Variations: green-secondary-50 to green-secondary-900
- Access: bg-green-secondary, text-green-secondary, etc.

### Status Colors

#### Success (oklch(0.88 0.25 130))
- Primary success color matching HackerRank green
- Used for: Completed tasks, positive feedback
- Variations: success-50 to success-900

#### Warning (oklch(0.82 0.18 75))
- Orange/amber for caution states
- Used for: Pending tasks, warnings, blockers
- Variations: warning-50 to warning-900

#### Error (oklch(0.68 0.20 15))
- Red tones for negative states
- Used for: Failed tasks, errors, critical issues
- Variations: error-50 to error-900

#### Info (oklch(0.65 0.15 240))
- Blue tones for information states
- Used for: Information, neutral states
- Variations: info-50 to info-900

### Text Colors

#### Primary Text Colors
- *Text Primary*: oklch(0.98 0.002 0) - Pure white for main content
- *Text Secondary*: oklch(0.65 0.008 240) - Light gray for secondary content
- *Text Muted*: oklch(0.52 0.012 240) - Muted gray for disabled/meta content
- *Text Accent*: oklch(0.88 0.25 130) - Green for links and highlights

### Brand Colors

HackTrack brand variations:
- brand-primary: Main HackerRank-style green
- brand-secondary: Darker variation for backgrounds
- brand-accent: Bright green for highlights

### Semantic Variants

Quick access to main colors:
- accent-green: Primary green accent (#39FF14)
- accent-orange: Warning orange (#FFB347)
- accent-red: Error red (#FF4757)
- accent-blue: Info blue (#3742FA)

## Usage Examples

### Tailwind v4 Dark Theme Utility Classes
jsx
// Dark backgrounds
<div className="bg-dark-primary">Main app background</div>
<div className="bg-dark-secondary">Card background</div>
<div className="bg-dark-tertiary">Form background</div>

// HackerRank green elements
<button className="bg-green-primary text-dark-primary">Primary Action</button>
<div className="border border-green-primary">Green accent border</div>
<p className="text-green-primary">Green accent text</p>

// Text colors on dark backgrounds
<h1 className="text-primary">Main heading (white)</h1>
<p className="text-secondary">Secondary text (light gray)</p>
<span className="text-muted">Muted text (dark gray)</span>

// Status indicators
<div className="bg-success-600 text-white">Success state</div>
<div className="bg-warning-600 text-dark-primary">Warning state</div>
<div className="bg-error-600 text-white">Error state</div>


### Button Examples (HackerRank Style)
jsx
// Primary green button with glow
<button className="bg-green-primary text-dark-primary px-6 py-3 rounded-lg font-semibold hover:bg-green-secondary hover:shadow-green-glow transition-all duration-200">
  Primary Action
</button>

// Secondary button with green outline
<button className="bg-transparent border-2 border-green-primary text-green-primary px-6 py-3 rounded-lg font-semibold hover:bg-green-primary hover:text-dark-primary transition-all duration-200">
  Secondary Action
</button>

// Danger button
<button className="bg-error-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-error-700 transition-all duration-200">
  Delete
</button>


### Card Examples (Dark Theme)
jsx
// Main content card
<div className="bg-dark-secondary border border-dark-accent rounded-xl p-6 hover:border-green-primary/30 transition-all duration-200">
  <h3 className="text-primary font-semibold text-lg mb-2">Task Title</h3>
  <p className="text-secondary mb-4">Task description content</p>
  <div className="flex items-center justify-between">
    <span className="text-muted text-sm">2 hours ago</span>
    <span className="bg-success-600 text-white px-3 py-1 rounded-full text-sm">Done</span>
  </div>
</div>

// Dashboard stat card
<div className="bg-dark-secondary border border-dark-accent rounded-xl p-6 hover:shadow-green-glow/10 transition-all duration-200">
  <div className="flex items-center justify-between mb-4">
    <h4 className="text-secondary font-medium">Completed Tasks</h4>
    <div className="w-8 h-8 bg-green-primary/20 rounded-lg flex items-center justify-center">
      <CheckIcon className="w-5 h-5 text-green-primary" />
    </div>
  </div>
  <p className="text-3xl font-bold text-primary mb-1">24</p>
  <p className="text-green-primary text-sm">↗ +12% from yesterday</p>
</div>


### Form Examples (Dark Theme)
jsx
// Input field
<div className="mb-4">
  <label className="block text-secondary font-medium mb-2">Task Title</label>
  <input 
    type="text" 
    className="w-full bg-dark-tertiary border border-dark-accent rounded-lg px-4 py-3 text-primary focus:border-green-primary focus:ring-2 focus:ring-green-primary/20 transition-all duration-200"
    placeholder="Enter task title..."
  />
</div>

// Select dropdown
<select className="bg-dark-tertiary border border-dark-accent rounded-lg px-4 py-3 text-primary focus:border-green-primary">
  <option value="">Select Priority</option>
  <option value="high" className="text-error-500">High Priority</option>
  <option value="medium" className="text-warning-500">Medium Priority</option>
  <option value="low" className="text-success-500">Low Priority</option>
</select>


## Color Combinations

### Recommended Dark Theme Combinations
1. *Primary Action*: bg-green-primary with text-dark-primary
2. *Secondary Action*: border-green-primary with text-green-primary
3. *Success States*: bg-success-600 with text-white
4. *Warning States*: bg-warning-600 with text-dark-primary
5. *Error States*: bg-error-600 with text-white
6. *Card Backgrounds*: bg-dark-secondary with border-dark-accent

### Accessibility in Dark Mode
All color combinations maintain proper contrast ratios for dark interfaces:
- Light text on dark backgrounds: Minimum 7:1 contrast ratio
- Green accents: High contrast against dark backgrounds
- Status colors: Clearly distinguishable in dark mode
- Focus states: Visible green glow effects

## Special Effects

### Glow Effects
css
/* Green glow for interactive elements */
.shadow-green-glow {
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.3);
}

.hover:shadow-green-glow:hover {
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.5);
}

/* Pulse animation for real-time indicators */
.pulse-green {
  animation: pulse-green 2s infinite;
}

@keyframes pulse-green {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}


## Advantages of HackerRank Dark Theme

1. *Developer-Friendly*: Familiar dark interface reduces eye strain
2. *High Contrast*: Excellent readability with bright green accents
3. *Professional Aesthetic*: Modern, sleek appearance
4. *Brand Recognition*: Instantly recognizable HackerRank-style interface
5. *Performance Focus*: Dark backgrounds reduce screen glare during long coding sessions

## Migration Notes

When implementing this dark theme:
- Ensure all text has sufficient contrast against dark backgrounds
- Use green accents sparingly for maximum impact
- Implement smooth transitions for hover states
- Consider adding glow effects for premium feel
- Test accessibility with screen readers
- Provide light/dark mode toggle if needed

## Component-Specific Guidelines

### Navigation
- Use bg-dark-primary for main navigation
- Active states with text-green-primary and green accent border
- Hover effects with subtle green glow

### Tables
- Alternate row colors using bg-dark-secondary and bg-dark-tertiary
- Green sortable column indicators
- Dark borders with border-dark-accent

### Modals
- Dark backdrop with bg-black/80
- Modal content with bg-dark-secondary
- Green primary action buttons

### Charts
- Dark chart backgrounds
- Green primary data series
- Muted grid lines in dark-accent
- Colorful data points for different categories