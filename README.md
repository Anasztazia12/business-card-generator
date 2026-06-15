# Business Card Generator

## My Project Idea

This is the original project plan I submitted before starting development.

[View original PDF](assets/pdf/My Project Idea.pdf)

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
- PDF export named after the user's name

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
Step 1: Your Information
  → Name, Company, Title, Phone, Email
  → Click Next (validates required fields)

Step 2: Customize Your Card
  → Logo upload + position (Top-Left / Top-Right)
  → Background colour or image 
  → Download PDF  /  Back to Step 1

Live Preview panel (always visible on the right)
```

**Navigation model:**

```text
[Step 1] → Next → [Step 2] → Download PDF → [PDF saved]
              ←  Back (all data preserved)
```

**Key interaction details:**

- Every input triggers an instant preview update
- Background modal uses a draft state — preview updates live, but only commits on OK; Cancel restores the previous background
- Back button returns to Step 1 with all form data and Step 2 settings preserved

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

## Plane 5 — Surface

*What does it look like?*

**Colour palette:**

| Role | Value |
| --- | --- |
| Primary green | `#66be02` |
| Primary blue | `#0197c5` |
| Dark text | `rgba(1, 38, 47, 0.9)` |
| Teal accent | `rgba(8, 116, 122, 0.9)` |

**Typography:**

- Headings: Space Grotesk (600–700 weight)
- Body / labels: Manrope (400–700 weight)

**Visual decisions:**

- Gradient title (green → blue) to draw attention to the app name
- Fixed background image gives depth without interfering with card preview
- Rounded corners and subtle shadow on the carousel for a modern feel

---

## User Stories

| Role | Story | Accepted when |
| --- | --- | --- |
| Self-employed person | I want to generate a business card quickly | Card preview updates as I type |
| Self-employed person | I want to customise colours and style | Background and font controls change the preview instantly |
| Business professional | I want a clean, modern card | Default layout looks professional out of the box |
| Business professional | I want to download my card | PDF export saves a file named after the user |

---

## Deployment

The site is deployed via **GitHub Pages**.

**Steps to deploy:**

1. Push all files to the `main` branch on GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Click Save — GitHub Pages publishes the site automatically

**Live site:** *(add URL here once deployed)*
