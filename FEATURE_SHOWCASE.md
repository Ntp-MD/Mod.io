# Feature Showcase Section

## Overview

The Feature Showcase section provides interactive popup demos for all the MOD.io store components. Users can click on any feature card to open a modal with a live demonstration.

## Features Included

### 1. Cursor Ripple Effect (ModCursorRipple)
- **File**: `ModCursorRipple.js`
- **Description**: WebGL-based water ripple effect that follows mouse movement and clicks
- **Demo**: Interactive background with ripple effects on mouse interaction

### 2. Advanced Text Resizing (ModFillTest)
- **File**: `ModFillTest.js`
- **Description**: Smart text resizing with grouping support and min/max constraints
- **Demo**: Multiple text groups with different sizing constraints

### 3. Simple Text Resizing (ModFillText)
- **File**: `ModFillText.js`
- **Description**: Basic text resizing to fit container width
- **Demo**: Text elements that resize based on container width percentage

### 4. Animated Number Counting (ModRunCount)
- **File**: `ModRunCount.js`
- **Description**: Smooth number counting animation when scrolled into view
- **Demo**: Multiple counters with different formats (whole numbers, decimals)

### 5. Scroll Reveal Animations (ModTrickContent)
- **File**: `ModTrickContent.js`
- **Description**: Content that animates in as you scroll
- **Demo**: Scrollable content area with reveal animations

## Usage

The showcase is automatically integrated into the main page between the Hero and Features sections. To use:

1. Navigate to the homepage
2. Scroll down to the "Interactive Feature Showcase" section
3. Click on any feature card to open a live demo
4. Interact with the demo in the popup modal
5. Click outside or close button to exit

## Technical Implementation

### Component Structure
- **Main Component**: `components/FeatureShowcase.vue`
- **Integration**: Added to `pages/index.vue`
- **Dependencies**: jQuery (loaded via CDN)

### Script Loading
All store scripts are dynamically loaded from `/public/js/` directory:
- `ModCursorRipple.js`
- `ModFillTest.js`
- `ModFillText.js`
- `ModRunCount.js`
- `ModTrickContent.js`

### Demo Initialization
Each feature includes:
- HTML template for the demo
- Initialization script
- Styling and interaction logic

### Modal System
- Fixed positioning with overlay
- Responsive design
- Click-outside-to-close functionality
- Smooth animations and transitions

## Customization

### Adding New Features
To add a new feature to the showcase:

1. Add the feature object to the `features` array in `FeatureShowcase.vue`
2. Copy the store script to `/public/js/`
3. Define the demo HTML and initialization logic
4. Update the script loading list

### Styling
The showcase uses CSS variables from `assets/styles/variables.css`:
- Colors: `--main-color-*`, `--accent-*`
- Spacing: `--gap-*`
- Typography: `--font-*`
- Transitions: `--transition-*`

### Responsive Design
- Desktop: Grid layout with multiple columns
- Tablet: 2-column layout
- Mobile: Single column layout
- Modal: Responsive sizing with scroll

## Dependencies

- **jQuery 3.7.1**: Required for store components
- **Vue 3**: Component framework
- **Nuxt 3**: Application framework
- **CSS Variables**: Theming system

## Browser Compatibility

The showcase supports all modern browsers. Individual features may have additional requirements:
- **Cursor Ripple**: Requires WebGL support
- **Other Features**: Work in all modern browsers

## Performance

- Scripts are loaded on-demand when the component mounts
- Demo content is rendered only when modal is opened
- Cleanup happens when modal is closed
- Responsive images use placeholder URLs

## Future Enhancements

Potential improvements:
- Code snippets for each feature
- Copy-to-clipboard functionality
- Full-screen demo mode
- Feature comparison tool
- Downloadable examples
