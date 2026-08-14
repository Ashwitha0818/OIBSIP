# ThermaSync - Temperature Converter

A minimalist, highly precise temperature conversion utility. Built with HTML5, CSS3, and Vanilla JavaScript.

## Features & Implementation
- **Precise Calculations:** Accurate conversion formulas without unnecessary rounding issues. Formats to 4 decimal places where necessary to maintain precision without overflowing the UI.
- **Robust Validation:**
  - Prevents non-numeric input.
  - Strict Absolute Zero enforcement (-273.15°C, -459.67°F, 0K).
- **Accessible Error Handling:** Errors are displayed inline within an `aria-live="polite"` region, avoiding inaccessible `alert()` popups. Inputs receive a clear red border error state.
- **Responsive Design:** Flexible layout adapts from mobile screens up to desktop monitors.
- **No Dependencies:** Completely standalone, utilizing pure Vanilla JavaScript for DOM manipulation and logic.

## Project Structure
- `index.html`: Contains semantic form elements and accessible ARIA attributes.
- `css/style.css`: Stylesheet using a modern, clean design system with subtle shadow elevations.
- `js/script.js`: Handles validation, conversion logic, and DOM updates in an isolated scope.

## Validation
- [x] Numeric input and unit selection (C, F, K)
- [x] Functional "Convert" button
- [x] Clear result display
- [x] Absolute-zero validation (-273.15°C)
- [x] No `alert()` used for validation
- [x] Responsive layout

*Developed by Ashwitha Gupta.*
