# Testing

## Manual Testing

| Feature | Test | Result |
| --- | --- | --- |
| Welcome page title | Gradient text displays correctly (green to blue) | Pass |
| Logo | Appears in top-right corner of the welcome section | Pass |
| Navigation buttons | Home and Create Card buttons visible and clickable | Pass |
| Body background | Background image covers full page and stays fixed on scroll | Pass |
| Footer | Green gradient footer visible at the bottom of the page | Pass |
| Carousel (index.html) | Images slide automatically and with prev/next buttons | Pass — was broken due to missing Bootstrap JS link, now fixed |
| Carousel arrows | Prev/next icons appear as white circles, turn teal on hover | Pass |

---

---

## Manual Testing – form.html (Business Card Generator)

### Live Preview

| Feature | Test | Result |
| --- | --- | --- |
| Name field | Type a name → preview name updates instantly | |
| Name field empty | Clear the name → preview shows "Name" placeholder | |
| Title field | Type a title → preview title appears | |
| Title field empty | Clear the title → preview title disappears | |
| Company field | Type a company → preview company appears | |
| Company field empty | Clear the company → preview company disappears | |
| Email field | Type an email → preview email updates instantly | |
| Email field empty | Clear the email → preview shows "email\@example.com" placeholder | |
| Phone field | Type a phone number → preview phone updates instantly | |
| Phone field empty | Clear the phone → preview shows "+44 1234 567890" placeholder | |

### Logo

| Feature | Test | Result |
| --- | --- | --- |
| Logo upload | Upload an image → logo appears on the card preview | |
| Logo upload – no file | Remove the file / reload → logo is hidden | |
| Logo position – right | Select "Right" → logo appears in top-right corner | |
| Logo position – left | Select "Left" → logo moves to top-left corner | |
| Logo position change | Upload logo, then change position → logo moves without re-uploading | |

### Colors & Background

| Feature | Test | Result |
| --- | --- | --- |
| Font color | Pick a color → all card text changes to that color | |
| Background color | Pick a color → card background changes to that color | |
| Background image | Open modal, click an image → card shows that background | |
| Background image – none | Click "None" in modal → card background image is removed | |

### Create Card & Download

| Feature | Test | Result |
| --- | --- | --- |
| Create card – valid | Fill all required fields, click "Create Card" → "Card created successfully!" message | Fail – button has no click handler |
| Create card – missing name | Leave name empty, click "Create Card" → name field turns red, error message shown | Fail – button has no click handler |
| Create card – invalid email | Enter email without @, click "Create Card" → email field turns red, error message shown | Fail – button has no click handler |
| Create card – missing phone | Leave phone empty, click "Create Card" → phone field turns red, error message shown | Fail – button has no click handler |
| Download – valid | Fill all required fields, click "Download as JPG" → JPG file downloads | Fail – button has no click handler |
| Download – missing fields | Leave required fields empty, click "Download" → error message, no download | Fail – button has no click handler |

---

## Bugs Found (Console Errors)

| Error | File & Line | Fix |
| --- | --- | --- |
| `Uncaught ReferenceError: myVariable is not defined` | script.js:141 | Removed debug `console.log(myVariable)` and `console.log("Itt járok")` — left in by accident |

---

## Validator Testing

| Tool | File | Result |
| --- | --- | --- |
