# Design QA

## Comparison target

- Source visual truth: `/Users/itsrocky/.codex/attachments/39ed196c-f365-4fca-a1eb-49132ce6bd74/image-1.png`
- Motion reference captures: `/Users/itsrocky/Projects/forum/.source-capture/desktop/00-top.png`, `/Users/itsrocky/Projects/forum/.source-capture/mobile/00-top.png`, and `/Users/itsrocky/Projects/forum/.source-capture/mobile/menu-open.png`
- Desktop implementation: `/Users/itsrocky/Projects/forum/.qa/desktop-top-final.png`
- Mobile implementation: `/Users/itsrocky/Projects/forum/.qa/mobile-theme-v2.png`
- Full-view comparison: `/Users/itsrocky/Projects/forum/.qa/comparison-overview-v1.png`
- Focused comparison: `/Users/itsrocky/Projects/forum/.qa/comparison-green-v2.png`
- Official graphical mark: `/Users/itsrocky/Downloads/aiyl.svg`
- Official full lockup: `/Users/itsrocky/Downloads/aiyltext.svg`
- Updated desktop lockup evidence: `/Users/itsrocky/Projects/forum/.qa/text-logo-desktop.png`
- Updated mobile lockup evidence: `/Users/itsrocky/Projects/forum/.qa/text-logo-updated.png`
- Updated footer evidence: `/Users/itsrocky/Projects/forum/.qa/text-logo-footer.png`
- Viewports: 1280 x 720 desktop browser surface and 390 x 844 mobile
- State: settled hero, settled green session, mobile menu open, and programme row expanded

## Findings

- No remaining P0, P1, or P2 findings.
- [P3] The reference is a set of square promotional cards while the implementation is a responsive long-form event site. The four-color palette, Funnel Sans typography, strong brand lockup, image treatment, oversized translucent lettering, compact metadata, and dense editorial hierarchy are preserved while adapting the composition to scrolling web sections.
- [P3] The site uses the live event's actual portrait crops. Minor crop differences from the example posters are intentional to keep all thirteen portraits consistent across desktop cards and mobile rails.

## Required fidelity surfaces

- Fonts and typography: Funnel Sans Variable is loaded locally through `@fontsource-variable/funnel-sans`. Display scale, dense letter spacing, compact metadata, and high-contrast weights match the supplied poster language.
- Spacing and layout rhythm: full-viewport hero, large editorial pauses, compact section rules, poster-like speaker cards, sticky-feeling section transitions, and responsive horizontal rails are consistent and have no horizontal overflow at 390px.
- Colors and visual tokens: blue, green, lavender/cobalt, and orange are mapped one-to-one to the four programme sections and reused in the programme interaction states.
- Image quality and asset fidelity: all thirteen current speaker portraits and both supporter logos were copied from the live content source and render locally. The supplied official `aiyl.svg` is used for graphical marks and `aiyltext.svg` for every combined mark-and-name lockup. No portrait, logo, or decorative image placeholder remains.
- Copy and content: speaker names, roles, session names, times, programme copy, venue, and supporter links were checked against `https://aiforyounglawyers.com`.
- Icons: minimalist line icons are consistent across navigation, menu, accordions, supporter links, and CTAs.
- Accessibility: semantic headings and regions, labelled navigation/buttons, visible hover and expanded states, reduced-motion support, alt text, and mobile tap targets are present.

## Interaction and browser checks

- Hero entrance animation settles correctly after the four color panels reveal.
- Smooth hash navigation and scroll-linked hero motion work.
- Mobile menu opens and closes with a clipped reveal transition.
- Mobile speaker rails scroll horizontally without page-level horizontal overflow.
- Programme rows expand/collapse and inherit their session color.
- The final registration CTA links directly to `https://luma.com/3attxu5x`, opens in a new tab, and remains fully visible without horizontal overflow at 390px.
- Desktop and mobile browser console: no runtime errors. The hero asset is explicitly eager-loaded; Next.js development mode still emits a contradictory LCP advisory even though the rendered image reports `loading="eager"`.
- Production build: passed.

## Comparison history

### Pass 1

- [P2] On mobile, the oversized background word was cropped too aggressively, leaving an ambiguous fragment rather than the recognizable poster-style `aiyl` motif.
- Fix: repositioned the motif from the far right to the left edge and reduced it from `82vw` to `69vw`.
- Post-fix evidence: `/Users/itsrocky/Projects/forum/.qa/mobile-theme-v2.png` and `/Users/itsrocky/Projects/forum/.qa/comparison-green-v2.png` show the wider wordform behind the session content without reducing readability.

### Pass 2

- Replaced all typographic approximations of the AIYL mark with the supplied official graphical SVG.
- Replaced every combined graphical-mark-and-forum-name treatment in the header and footer with the corrected supplied `aiyltext.svg` lockup.
- Removed the ordinal number pills from all speaker portraits.
- Post-fix browser checks at 1280 x 720 and 390 x 844 confirm the corrected lockup, official decorative marks, zero speaker number badges, and no mobile horizontal overflow.

### Pass 3

- Added a dedicated end-of-page registration section between the supporters and footer.
- The CTA uses the four programme colors as an animated edge treatment, a large editorial headline, the event date and location, and a prominent external registration button.
- Desktop and 390 x 844 mobile browser checks confirm the registration link, responsive button sizing, clean section-to-footer transition, and zero runtime errors.

### Pass 4

- Removed a subpixel edge gap visible beneath Chandy Ye's portrait at reduced browser zoom by adding a minimal default image bleed inside every clipped speaker frame.
- Preserved the portrait hover treatment by carrying the same one-percent bleed into its enlarged scale value.
- Clipped the oversized hero mark to the hero boundary so its scroll-linked motion cannot bleed into the following introduction section on wide, zoomed-out layouts.

### Pass 5

- Reduced mobile card width to leave a visible preview of the next speaker as the carousel affordance.
- Removed mandatory scroll snapping from mobile speaker rails so manual swiping remains direct and predictable.
- Replaced programme accordions with static schedule rows and moved the shared venue information into the programme heading, eliminating repeated disclosure content.
- Lowered the mobile hero headline for better separation from the header, removed the decorative hero watermark at phone widths, and increased the date/time size while keeping the venue text secondary.
- Updated the introduction statement to the supplied future-careers wording and checked its mobile wrap.
- Locked mobile speaker rails to horizontal overflow only, while retaining vertical touch gestures for normal page scrolling.
- Shortened the second panel title to `Legal AI in Education` across the session and programme views.
- Moved the registration CTA before supporting organisations so conversion follows the programme directly.
- Positioned the mobile headline so `practice.` ends above the quadrant divider while the programme link begins below it, and enlarged the stacked event information block.
- Moved mobile programme type labels to the upper-right of each row, opposite the time, with titles spanning below.
- Added persistent blue, green, cobalt, and orange accents to the four core programme sessions while rendering session changeover and tea break as smaller, lighter utility rows.
- Removed the supporting-organisations marketing headline, leaving the section label and organisation cards.
- Added the HKU Faculty of Law logo as the first supporting organisation and expanded the desktop logo grid to three columns.
- Reworked hero event details into a high-contrast bottom-left card at every viewport, enlarged date and time, and moved desktop hero copy upward to prevent overlap.
- Removed theme-specific programme padding so every time, type, and title remains on one shared desktop and mobile grid while color bars sit independently.
- Replaced both AIYL assets with the final supplied SVGs and updated intrinsic image dimensions to match their source view boxes.
- Simplified the programme header to a left-aligned title followed by date and location, removing the descriptive sentence.
- Added a sponsorship enquiry and direct email link beneath the supporting-organisation logos.
- Promoted `Supporting organisations` to a proper section headline and reduced the sponsorship enquiry to secondary utility copy.
- Stacked the sponsorship email directly below its question at every viewport.
- Added a one-pixel overlap between hero color panels to prevent dark subpixel seams at reduced browser zoom.
- Updated the sponsorship contact address to `aiyl@aiforyounglawyers.com` in both visible copy and its mail link.
- Increased the sponsorship question and email sizes while keeping them subordinate to the organisation headline.
- Replaced the full AIYL lockup with the supplied logo-and-tagline SVG and updated its intrinsic and rendered dimensions.
- Relaxed display-headline tracking by roughly one to two percent across hero, session, programme, schedule, supporter, CTA, and footer headings.
- Replaced Wilfred Kwong's 200 x 200 portrait with the supplied 400 x 400 source image for a sharper card crop.

### Pass 6 — LinkedIn social poster

- Source visual truth: `/var/folders/3f/j7t2kccs44x_jp2f281fwfsw0000gp/T/codex-clipboard-9555218f-d751-49f9-8d73-9d1a1e6b5a80.png`
- Browser-rendered implementation: `/Users/itsrocky/Projects/forum/.qa/poster-1200x627-v1.png`
- Full-view comparison evidence: `/Users/itsrocky/Projects/forum/.qa/poster-comparison.png`
- Export artifact: `/Users/itsrocky/Projects/forum/aiyl-linkedin-poster.png`
- Viewport and state: 1200 x 627, `/poster`, static fully loaded state.
- Focused comparison was not needed because the side-by-side full-view evidence keeps the 75px headline, 25px date/time, logo, and venue copy legible at native scale.
- Fonts and typography: Funnel Sans Variable is preserved from the site. The headline keeps the hero's weight, tight tracking, and line-height while rewrapping cleanly for the shorter social canvas.
- Spacing and layout rhythm: the four equal columns, 30px outer inset, larger top-left lockup, centered headline block, and enlarged bottom-left event card retain the hero's hierarchy without the removed eyebrow, navigation, or programme link.
- Colors and visual tokens: the existing blue, green, lilac, and orange tokens are reused exactly, including the one-pixel panel overlap that prevents subpixel seams.
- Image quality and asset fidelity: both visible marks use the supplied vector `aiyltext.svg` and `aiyl.svg` assets; the exported PNG is the requested native 1200 x 627 resolution.
- Copy and content: the poster contains only the forum logo, hero headline, date, time, and venue. `Hong Kong · 2026`, `Explore the programme`, and all upper-right navigation are absent as requested.
- Primary interactions tested: none applicable; the deliverable is intentionally static.
- Console errors checked: no warnings or errors were reported on the poster route.
- Findings: no actionable P0, P1, or P2 mismatches. The altered aspect ratio and larger information hierarchy are intentional adaptations for LinkedIn rather than source drift.
- Comparison history: the first browser-rendered pass met the stated requirements, so no visual-fix iteration was required.

## Follow-up polish

- P3 only: final production capture will not show the small Next.js development indicator visible in local development screenshots.

final result: passed
