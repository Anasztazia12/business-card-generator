# Business Card Generator

**Live site:** [https://anasztazia12.github.io/business-card-generator/](https://anasztazia12.github.io/business-card-generator/)

## My Project Idea

This is the original project plan I submitted before starting development.

[View original PDF](assets/pdf/my-project-idea.pdf)

**Project description:**
A simple Digital Business Card Generator where the user types their details into a form and the card updates live on the screen. They can change background and styles, and the preview changes instantly using JavaScript.

**One feature I planned to build:**
A live preview that updates as the user types (name, job title).

**One thing I needed to research:**
How similar "business card generator" apps work, especially how they update the preview when the user changes the inputs.

**Planned features:**

1. **Live Card Preview** – the business card updates instantly as the user types.

2. **Style Customization** – users can change background and layout styles.
3. **Social Icons Toggle** – users can turn social icons on/off.

**Similar websites I looked at:**

1. **Canva Business Card Maker** – lets users design cards with live editing and style options.

2. **Adobe Express Card Creator** – simple online tool for creating personalized business cards.
**User groups + user stories from my plan:**

### Self-employed people

- As a self-employed person, I want to quickly generate a digital business card so that I can share my contact details with clients easily.
- As a self-employed person, I want to customise the colours and style of my card so that it matches my personal brand.

### Business professionals

- As a business professional, I want to generate a clean, modern digital business card so that I can share my contact details in a more elegant and professional way.
- As a business professional, I want to download or screenshot my digital card so that I can share it quickly during meetings or networking.

---

## Table of Contents

- [My Project Idea](#my-project-idea)
- [Plane 1 — Strategy](#plane-1--strategy)
- [Plane 2 — Scope](#plane-2--scope)
- [Plane 3 — Structure](#plane-3--structure)
- [Plane 4 — Skeleton](#plane-4--skeleton)
- [Plane 5 — Surface](#plane-5--surface)
- [User Stories](#user-stories)
- [Deployment](#deployment)

---

## Plane 1 — Strategy

*Why does this project exist? Who is it for?*

Existing tools like Canva or Adobe Express require sign-up, subscriptions, or are too complex for someone who just needs a quick business card. I wanted to build something that works immediately in the browser, for free, with no account needed.

**Target users:**

| User | Need |
| --- | --- |
| Freelancers | Update card details quickly between projects |
| Entrepreneurs | Professional look without a design budget |
| Remote workers | Digital card for email signatures or LinkedIn |

**Goals:**

- Create a card in under 5 minutes
- No sign-up, no install, works offline after first load
- Export to PDF in one click
- 100% client-side — no data is ever sent to a server

---

## Plane 2 — Scope

*What does the app do? What is left out?*

**Features built:**

- Name, Company, Title, Phone, Email fields (Name/Phone/Email required)
- Logo upload with Top-Left / Top-Right position options
- Background: solid colour picker + background gallery with modal
- Live preview updating in real time
- Step validation with specific error messages
- JPG export of the business card

**Not included:**

| Feature | Why |
| --- | --- |
| User accounts / login | No backend, keeps it simple |
| Cloud save | Privacy-first, no server |
| QR code generation | Planned for v2 |
| Multiple card templates | Single layout for v1 |
| Dark mode | Future enhancement |

---

## Plane 3 — Structure

*How is the app organised?*

```text
Single page form:
  → Name, Company, Title, Phone, Email
  → Logo upload + position (Top-Left / Top-Right)
  → Background colour or image
  → Download as JPG

Live Preview panel (always visible on the right)
```

**Key interaction details:**

- Every input triggers an instant preview update
- Background image is selected from a modal gallery and applied immediately

---

## Plane 4 — Skeleton

*What does the user see and interact with?*

**Desktop layout (two-column):**

```text
 --------------------------------------------------------------------
|  Digital Business Card Generator                                  |
|  Enter your basic information to get started.      Step 1/2       |
|-------------------------------------------------------------   - -|
|                                                                   |
|  [LEFT COLUMN – FORM]              |[RIGHT COLUMN – LIVE PREVIEW] |
|                                    |                              |
|  Label: Name                       |   -------------------------- |
|  [______________________________]  |   |         Live Preview     |
|                                    |   |--------------------------|
|  Label: Company (optional)         |   |   Name                   |
|  [______________________________]  |   |   email@example.com      |
|                                    |   |   +36 00 000 0000        |
|  Label: Title (optional)           |   |------------------------- |
|  [______________________________]  |   ---------------------------|
|                                    |                              |
|  Label: Phone                      |                              |
|  [______________________________]  |                              |
|                                    |                              |
|  Label: Email                      |                              |
|  [______________________________]  |                              |
|                                                                   |
|-------------------------------------------------------------------|
```

**Responsive behaviour:**

| Breakpoint | Layout |
| --- | --- |
| > 980px | Two-column (form left, preview right) |
| ≤ 980px | Single column, preview stacked above form |
| ≤ 480px | Tighter spacing, larger touch targets |

---

## Deployment

### GitHub Pages

1. Create a public GitHub repository
2. Push your code:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/business-card-generator.git
   git push -u origin main
   ```

3. Go to **Settings → Pages**, set source to `main` branch, click **Save**
4. My site will be live at `https://anasztazia12.github.io/business-card-generator/`
**Steps to deploy:**

## Plane 5 — Surface

*What does it look like?*

**Colour palette:**

| Token | Value | Usage |
| --- | --- | --- |
| `--accent` | `#00a832` | Buttons, highlights |
| `--ink` | `#012017` | Primary text |
| `--surface` | `rgba(236, 255, 246, 0.84)` | Panel backgrounds (frosted) |
| `--border` | `rgba(8, 79, 53, 0.18)` | Input and panel borders |

**Page background:** Fixed background image — gives depth and makes the card preview stand out.

**Typography:**

- App UI: Space Grotesk (headings), Manrope (labels and body)

**Buttons:** Lift-on-hover (`translateY(-2px) scale(1.01)`), minimum 44px height for touch targets.

**Card preview styling:** Rounded corners, box shadow.

**Accessibility decisions:**

| Decision | Implementation |
| --- | --- |
| Minimum touch target | 44px height on all buttons |
| High contrast | Green `#00a832` on white |
| Semantic HTML | `<form>`, `<label>`, `<input>`, `<button>` throughout |
| Custom validation | Error messages list exactly which fields are missing |
| Modal accessibility | `role="dialog"` and `aria-labelledby` on background modal |

---

## Technologies Used

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) — page structure and semantic markup
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) — custom styling and responsive layout
- [JavaScript (ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — interactivity, live preview, form validation
- [Bootstrap 5.3](https://getbootstrap.com/) — responsive grid, modal, carousel, and button components
- [jQuery 3.7](https://jquery.com/) — DOM manipulation helper
- [html2canvas 1.4](https://html2canvas.hertzen.com/) — client-side JPG export of the business card
- [Google Fonts](https://fonts.google.com/) — Space Grotesk and Manrope typefaces
- [GitHub Pages](https://pages.github.com/) — deployment and hosting

---

## User Stories

| # | As a... | I want to... | So that... | Status |
| --- | --- | --- | --- | --- |
| US-01 | Freelancer | Enter my name, email, and phone | Clients can contact me after a meeting | ✅ |
| US-02 | Freelancer | Update my job title at any time | I always hand out accurate information | ✅ |
| US-03 | Freelancer | Download my card as a JPG | I can attach it to emails and proposals | ✅ |
| US-04 | Entrepreneur | Upload my company logo | My card reinforces my brand | ✅ |
| US-05 | Entrepreneur | Choose where the logo appears | It fits my layout preference | ✅ |
| US-06 | Entrepreneur | Pick a background image from a gallery | My card stands out visually | ✅ |
| US-07 | Sales professional | Use the app without signing up | I can generate a card before a networking event | ✅ |
| US-08 | Sales professional | See the card update as I type | I can spot mistakes before downloading | ✅ |
| US-09 | HR admin | Control Name and Other Content fonts separately | I can maintain a clear visual hierarchy | ❌ |
| US-10 | HR admin | Be warned if a required field is missing | The card is never incomplete | ✅ |
| US-11 | Remote worker | Use the app on my phone | I can create a card on the go | ✅ |
| US-12 | Career changer | Go back and edit details after customising | I can try different options without losing my design | ❌ |

---
