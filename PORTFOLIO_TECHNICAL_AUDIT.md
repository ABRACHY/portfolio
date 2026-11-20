# Portfolio Technical Audit

**Audit date:** 20 November 2026  
**Scope:** Source files and assets currently in the project folder. This is a code review, not a live-browser or performance test.

## Overview

This is a single-page, static portfolio for Abderrahim Rachidi. It is built with semantic HTML, a custom CSS design system, and vanilla JavaScript. There is no application framework, build pipeline, or runtime dependency declared in `package-lock.json`. The page presents an introduction, selected work, skills, process, and contact details, with local project imagery and external links.

## Technical structure

- `index.html` contains all page sections and form markup.
- `style.css` defines design tokens, layout, responsive breakpoints, hover states, and scroll reveal effects.
- `script.js` adds navigation behavior, language selection, scroll reveals, footer year, and WhatsApp form submission.
- Images are stored alongside the page and referenced by relative paths, so the site can be hosted as static files.
- Google Fonts are loaded externally: Syne, Plus Jakarta Sans, Space Mono, and Cairo.

## Current behavior

- A full-screen language chooser is shown at page load. English, French, and Arabic can be selected, and the header/mobile language controls switch the page language.
- Arabic selection sets the document direction to right-to-left and applies Arabic typography/layout rules.
- Navigation links scroll to page sections; the mobile menu can be opened and closed, including with Escape.
- Content sections use IntersectionObserver-driven reveal effects, and the header reacts to scrolling.
- The contact form validates required fields in the browser and opens a prefilled WhatsApp conversation. It does not submit to a server or store form data.

## Findings

### High priority

1. **Localization coverage is incomplete.** The translation dictionaries currently cover many navigation, hero, about, skills, process headings, and contact labels, but numerous project descriptions/titles, detailed process text, and form placeholders/options do not have translation keys. These remain in the original language after switching. The implementation only updates `[data-i18n]` and `[data-i18n-html]`; placeholder and option attributes are not handled.
2. **Language choice is not persisted.** The splash appears on every visit and a refresh resets the page to its initial English markup. This matches an always-ask entry flow, but users cannot retain their selection between page loads.
3. **Document metadata remains English.** The HTML `<title>` and meta description do not change when a visitor selects French or Arabic.

### Medium priority

4. **Accessibility for language selection needs follow-through.** The chooser has dialog semantics, but focus is not moved into it or trapped while open. After choosing a language, focus is not restored to a meaningful page control. The switcher buttons also do not expose selected state with `aria-pressed`.
5. **The contact form's select value is sent as an English service name.** Translating visible option text alone would not localize the WhatsApp message. Service values should be mapped to the selected language or kept as explicit language-neutral identifiers.
6. **The WhatsApp form uses a fixed greeting and English field labels.** Its generated message remains English even when the site is in French or Arabic.
7. **The page depends on JavaScript for the language chooser.** With JavaScript disabled, the overlay remains visible and blocks the portfolio. Consider a no-JavaScript fallback or hiding the chooser unless JavaScript is available.

### Low priority

8. **External font loading adds a network dependency.** If Google Fonts is unavailable, local fallback fonts are used, but page typography may differ.
9. **The project has no defined build, lint, or automated test commands.** `package-lock.json` has no installed packages; routine source changes currently lack a project-provided automated quality check.
10. **Some content and links need a manual accuracy check.** Verify project URLs, contact details, descriptive copy, and image alternatives before publishing updates.

## Strengths

- Simple static hosting model and small runtime surface.
- Responsive styles and mobile navigation are implemented without a framework.
- External LinkedIn/GitHub links opened in new tabs include `rel="noopener noreferrer"`.
- CSS custom properties make core colors, spacing, and radii straightforward to tune.
- Reduced-motion preferences are considered for animations.

## Recommended next steps

1. Complete translation coverage for every visible text node, placeholder, form option, and generated WhatsApp message.
2. Update the document title and description with the selected language; consider storing the visitor's choice if repeat selection is not desired.
3. Improve keyboard and screen-reader behavior for the initial language dialog and language switchers.
4. Add a clear no-JavaScript behavior for the language chooser.
5. Choose a lightweight validation approach (for example, HTML validation and a JavaScript syntax/lint check) and document how to run it.
6. Review real-device layout, loading performance, keyboard navigation, and contrast in a browser before release.

## Limitations

This audit is based on source inspection only. It does not measure Core Web Vitals, download sizes over the network, browser console errors, screen-reader output, or real-device behavior. Those require a live browser review.
