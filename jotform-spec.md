# Dean's Petals & Produce — Jotform Build Specification

**Form Title:** Dean's Petals & Produce – Order & Request Form
**Platform:** JotForm (jotform.com)
**Layout Type:** Classic Form (single-column, mobile-optimized)
**Est. Completion Time for Customer:** 1–2 minutes

---

## Part 1: Jotform Setup & Theme Configuration

### 1.1 Create the Form
1. Log in at **jotform.com** → click **Create Form**
2. Choose **Start from Scratch** → select **Classic Form**
3. Name the form: `Dean's Petals & Produce – Order & Request Form`

### 1.2 Theme / Visual Settings
Navigate to **Form Designer** (paint roller icon in the left sidebar):

| Setting | Value |
|---|---|
| Background Color | `#F2EDE2` (cream) |
| Form Background | `#FFFFFF` (white) |
| Input Background | `#F9F6F0` (soft cream) |
| Input Border Color | `#D9D0C6` |
| Input Focus Color | `#9CB89E` (sage light) |
| Label Color | `#2C2520` (dark text) |
| Button Background | `#AA7878` (rose) |
| Button Text Color | `#FFFFFF` |
| Button Border Radius | `50px` (pill shape) |
| Font — Headings | **Playfair Display** (available in Jotform font list) |
| Font — Body/Labels | **Raleway** or **Lato** (if Raleway unavailable) |
| Form Width | `680px` (desktop) |
| Layout | Single column |

### 1.3 Form Header
- **Title text:** `Dean's Petals & Produce – Order & Request Form`
- **Title font size:** 28px, Playfair Display, color `#2C2520`
- **Subheader / Description text:**
  > Reserve items, request custom creations, or send us a message!
  > We'll make sure everything is fresh and ready for you 💐
- **Subheader font:** Raleway, 15px, color `#7A6E68`
- **Optional:** Add logo image at top (upload `logo.png`)

---

## Part 2: Section-by-Section Field Specifications

> **How to add a section header in Jotform:** Click **Add Element** → **Form Elements** → **Header** (or **Section Break**)

---

### SECTION 1 — Contact Information
**Section Header Text:** `Your Information`
**Header Style:** Small divider line, sage green (`#6B8770`), Playfair Display italic

| # | Field Label | Field Type | Required | Notes / Helper Text |
|---|---|---|---|---|
| 1 | Full Name | **Full Name** widget (or Short Text) | Yes | Placeholder: `First & Last Name` |
| 2 | Phone Number | **Phone** field | Yes | Format: US, placeholder `(555) 000-0000` |
| 3 | Email Address | **Email** field | Yes | Placeholder: `you@email.com` |
| 4 | Preferred Contact Method | **Dropdown** | Yes | Options: `Text`, `Call`, `Email` |

**Helper text for section (add as a Paragraph element above fields):**
> "We only use your info to confirm your request — no spam, ever! 🌿"

---

### SECTION 2 — What Can We Help You With?
**Section Header Text:** `What brings you here today?`

| # | Field Label | Field Type | Required | Notes |
|---|---|---|---|---|
| 5 | What can we help you with? | **Checkbox Group** | Yes (at least 1) | See options below |

**Checkbox options (exact text):**
- `Pre-Reserve Items` — *Set aside fresh items before they sell out*
- `Custom Request` — *Bouquets, gifts, or something unique*
- `Event or Large Order` — *Weddings, showers, parties & more*
- `General Question / Message` — *Just want to say hi or ask something?*

**Helper text below checkboxes:**
> "You can select more than one — we'll show you only the relevant questions!"

> **IMPORTANT NOTE:** This field (#5) is the trigger for ALL conditional logic in Sections 3–6. Configure conditional logic AFTER adding all sections.

---

### SECTION 3 — Pre-Reserve Items
**Section Header Text:** `Pre-Reserve Items`
**Visibility:** Hidden by default — shown only via conditional logic (see Part 3)

| # | Field Label | Field Type | Required | Notes / Helper Text |
|---|---|---|---|---|
| 6 | What items would you like us to set aside? | **Long Text** | Yes | Placeholder: `e.g. 2 sunflower bouquets, 1 lavender bundle, 3 peonies` / Helper: "Be as specific as you'd like — we'll do our best!" |
| 7 | Preferred Pickup Date | **Date Picker** | Yes | Set minimum date = today. Helper: "We post daily so check Instagram the morning of!" |
| 8 | Preferred Pickup Time | **Dropdown** | Yes | Options: `Morning (8am–11am)`, `Midday (11am–2pm)`, `Afternoon (2pm–5pm)`, `Evening (5pm–7pm)`, `Flexible / Surprise me!` |
| 9 | Pickup Method | **Radio Button** | Yes | Options: `Farm Stand Pickup`, `Porch Pickup (weather-safe)` |
| 10 | Special Notes or Substitutions | **Long Text** | No | Placeholder: `Any allergies, color preferences, substitutions welcome!` / Helper: "Totally optional — but we love the details! 🌸" |

**Section helper text (Paragraph element at top of section):**
> "We'll have everything fresh and bundled up at your selected time! Orders are first-come, first-served — reserving guarantees your spot."

---

### SECTION 4 — Custom Request
**Section Header Text:** `Custom Request`
**Visibility:** Hidden by default — shown only via conditional logic (see Part 3)

| # | Field Label | Field Type | Required | Notes / Helper Text |
|---|---|---|---|---|
| 11 | What type of custom item? | **Checkbox Group** | Yes | Options: `Bouquet`, `Handmade Flower Art or Gift`, `Plants / Produce`, `Other` |
| 12 | Tell us what you're envisioning | **Long Text** | Yes | Placeholder: `Describe colors, style, occasion, or anything that inspires you!` / Helper: "There are no wrong answers — the more detail, the better we can create for you." |
| 13 | Budget Range | **Dropdown** | Yes | Options: `Under $10`, `$10–$25`, `$25–$50`, `$50–$100`, `$100+`, `Not sure yet` |
| 14 | Preferred colors, flowers, or style | **Short Text** | No | Placeholder: `e.g. dusty rose, wildflower vibe, rustic / cottagecore` / Helper: "Optional but helpful!" |
| 15 | Needed by date | **Date Picker** | Yes | Set minimum date = today + 2 days (allow preparation time). Helper: "We ask for at least 48 hours for custom work 🌿" |

**Section helper text (Paragraph element at top):**
> "Love bringing custom visions to life! From birthday bouquets to handcrafted gifts — share your idea and we'll make it beautiful."

---

### SECTION 5 — Event or Large Order
**Section Header Text:** `Event or Large Order`
**Visibility:** Hidden by default — shown only via conditional logic (see Part 3)

| # | Field Label | Field Type | Required | Notes / Helper Text |
|---|---|---|---|---|
| 16 | Event Type | **Dropdown** | Yes | Options: `Wedding`, `Baby Shower`, `Birthday`, `Anniversary`, `Holiday Party`, `Corporate / Other` |
| 17 | Event Date | **Date Picker** | Yes | Set minimum date = today. Helper: "The sooner you reach out, the better we can plan!" |
| 18 | Approximate Quantity Needed | **Short Text** | Yes | Placeholder: `e.g. 15 centerpiece bouquets, 50 stems` |
| 19 | Description of Items Needed | **Long Text** | Yes | Placeholder: `Tell us what you're envisioning — arrangements, colors, style, etc.` / Helper: "The more detail the better. Inspiration photos? Share them in the next field!" |
| 20 | Inspiration Photos | **File Upload** | No | Accepted types: JPG, PNG, PDF. Max size: 10MB. Helper: "Upload a mood board, Pinterest screenshot, or anything that captures the vibe!" |
| 21 | Budget Range | **Dropdown** | Yes | Options: `Under $50`, `$50–$150`, `$150–$300`, `$300–$500`, `$500+`, `Let's discuss` |
| 22 | Delivery or Pickup? | **Radio Button** | Yes | Options: `Farm Stand / Self Pickup`, `Porch Delivery (local area)`, `Not sure yet — let's chat` |

**Section helper text (Paragraph element at top):**
> "We'd love to be part of your special day! Large orders are accepted based on availability. We'll reach out within 24–48 hours to confirm details and timeline."

---

### SECTION 6 — General Question / Message
**Section Header Text:** `Your Message`
**Visibility:** Hidden by default — shown only via conditional logic (see Part 3)

| # | Field Label | Field Type | Required | Notes / Helper Text |
|---|---|---|---|---|
| 23 | What's on your mind? | **Long Text** | Yes | Placeholder: `Ask us anything — about availability, pricing, the stand, Dean the dog... 🐾` |

**Section helper text (Paragraph element at top):**
> "No question too small! We love hearing from our neighbors and customers."

---

### SECTION 7 — Final Details
**Section Header Text:** `Almost Done!`
**Visibility:** Always visible (no conditional logic)

| # | Field Label | Field Type | Required | Notes / Helper Text |
|---|---|---|---|---|
| 24 | How did you hear about us? | **Dropdown** | No | Options: `Instagram`, `Facebook`, `Drove by the stand`, `Word of mouth / Friend`, `Nextdoor`, `Google`, `Other` |
| 25 | Agreement | **Terms & Conditions** or **Single Checkbox** | Yes | Label: `I understand this is a request form and all orders are subject to availability. Dean's Petals & Produce will reach out to confirm.` / Must check to submit |

**Section helper text (Paragraph element above checkbox):**
> "Almost there — just one last thing before we get your request!"

---

## Part 3: Conditional Logic Rules (Step-by-Step)

> **How to access Conditional Logic in Jotform:**
> Settings (gear icon) → Conditions → Add Condition

Configure the following 4 rules. Each rule shows/hides an entire section.

---

### Rule 1 — Show Section 3 (Pre-Reserve Items)

```
IF   Field: "What can we help you with?"   [Checkbox Group, Field #5]
     Contains  "Pre-Reserve Items"
THEN Show   Section 3 header + Fields #6, #7, #8, #9, #10
```

> **Tip:** In Jotform's condition builder, select the checkbox field, operator = **"Is Checked"** or **"Contains"**, value = `Pre-Reserve Items`.
> Select each field in Section 3 in the "SHOW" action. Repeat for each field individually, or group them under a named section/page.

---

### Rule 2 — Show Section 4 (Custom Request)

```
IF   Field: "What can we help you with?"   [Field #5]
     Contains  "Custom Request"
THEN Show   Section 4 header + Fields #11, #12, #13, #14, #15
```

---

### Rule 3 — Show Section 5 (Event or Large Order)

```
IF   Field: "What can we help you with?"   [Field #5]
     Contains  "Event or Large Order"
THEN Show   Section 5 header + Fields #16, #17, #18, #19, #20, #21, #22
```

---

### Rule 4 — Show Section 6 (General Question / Message)

```
IF   Field: "What can we help you with?"   [Field #5]
     Contains  "General Question / Message"
THEN Show   Section 6 header + Field #23
```

---

### Multi-Section Behavior
All 4 rules operate **independently**. If a customer checks all 4 checkboxes, all 4 sections will appear simultaneously. This is correct behavior — no conflict.

> **Pro tip:** Use Jotform's **Section** or **Page Break** elements to visually group fields. Each conditional section should start with a styled section header for clear separation.

---

## Part 4: Design & Branding Details

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| Cream | `#F2EDE2` | Page background |
| White | `#FFFFFF` | Form card background |
| Soft Cream | `#F9F6F0` | Input field background |
| Sage | `#6B8770` | Section headers, accents |
| Sage Light | `#9CB89E` | Focus states, helper text icons |
| Rose | `#AA7878` | Submit button, required asterisks |
| Rose Dark | `#956060` | Button hover state |
| Warm Text | `#2C2520` | Labels and body text |
| Muted Text | `#7A6E68` | Helper text, placeholders |
| Border | `#D9D0C6` | Input borders |

### Typography

| Element | Font | Size | Weight | Style |
|---|---|---|---|---|
| Form Title | Playfair Display | 28px | 600 | Normal |
| Section Headers | Playfair Display | 18px | 400 | Italic |
| Field Labels | Raleway / Lato | 14px | 600 | Normal |
| Helper Text | Raleway / Lato | 12px | 400 | Italic |
| Input Text | Raleway / Lato | 14px | 400 | Normal |
| Submit Button | Raleway / Lato | 13px | 700 | Uppercase |

### Submit Button
- **Label text:** `Send My Request 🌸`
- **Background:** `#AA7878` (rose)
- **Text color:** `#FFFFFF`
- **Border radius:** `50px` (pill)
- **Width:** Full width on mobile, `280px` centered on desktop

### Form Card
- Background: white
- Border radius: `16px`
- Box shadow: `0 8px 32px rgba(44,37,32,0.12)`
- Max width: `680px`, centered

### Spacing
- Padding between fields: `20px`
- Section header top margin: `32px`
- Section header bottom margin: `12px`

---

## Part 5: Confirmation Message (Thank You Page)

In **Settings → Thank You Page**, set type to **Message** and enter:

---

**Heading:**
```
Thank you so much for supporting Dean's Petals & Produce! 🌸
```

**Body:**
```
We've received your request and will reach out shortly to confirm details.
We can't wait to create something beautiful for you 💐

In the meantime, follow us on Instagram and Facebook for daily updates
on what's fresh at the stand!

📍 1934 Burlington Road, Akron, OH
```

**Optional button:** Add a link button → Label: `Follow on Instagram` → URL: your Instagram profile

---

## Part 6: Email Notifications & Automations

### 6.1 Admin Notification (You Receive This)

Navigate to **Settings → Emails → Add Email → Notification Email**

| Setting | Value |
|---|---|
| Send To | Your business email address |
| Subject | `New Request from {fullName} – Dean's Petals & Produce` |
| Reply-To | `{email}` (customer's email, so you can reply directly) |

**Email body (customize in template):**
```
New Order/Request Submitted!

Name: {fullName}
Phone: {phoneNumber}
Email: {email}
Preferred Contact: {preferredContactMethod}

Request Type(s): {whatCanWeHelpYouWith}

--- Details ---
{allFields}

Submitted: {submissionDate}
```

### 6.2 Auto-Response (Customer Receives This)

Navigate to **Settings → Emails → Add Email → Autoresponder Email**

| Setting | Value |
|---|---|
| Send To | `{email}` (customer's email field) |
| From Name | `Dean's Petals & Produce` |
| Subject | `We got your request, {fullName}! 🌸` |

**Email body:**
```
Hi {fullName}!

Thank you for reaching out to Dean's Petals & Produce — we're so excited 
to help you!

We've received your request and will get back to you soon via your 
preferred contact method: {preferredContactMethod}

While you wait, check out what's fresh today on our social media:
• Instagram: @deanspetalsandproduce
• Facebook: @deanspetalsandproduce

📍 1934 Burlington Road, Akron, OH
💵 Cash & Venmo accepted

With warmth,
Nikki, Tiffany & Dean 🐾
Dean's Petals & Produce
```

---

## Part 7: Optional Enhancements

### 7.1 File Upload Field (Inspiration Photos)
Already included in Section 5 (Event/Large Order, Field #20). To add to Custom Request section as well:
- Add a **File Upload** field after Field #14 in Section 4
- Label: `Got inspiration photos? Share them! (optional)`
- Accepted: JPG, PNG, PDF — max 10MB

### 7.2 Spam Protection
- Enable **CAPTCHA** (Settings → Form Settings → Anti-Spam → Invisible reCAPTCHA)
- This is automatic and invisible to customers

### 7.3 Google Sheets Integration
- Settings → Integrations → Google Sheets
- Auto-logs every submission to a spreadsheet — great for tracking orders

### 7.4 QR Code for Farm Stand Signage
After publishing your form:
1. Go to **Publish → QR Code** in Jotform
2. Download the QR code PNG
3. Print and laminate for stand signage
4. Suggested sign copy:
   > **Want to reserve items or place a custom order?**
   > Scan the QR code or visit:
   > `jotform.com/deanspetalsandproduce`
   > *(customize your form URL in Jotform → Publish → Short URL)*

### 7.5 Custom Short URL
In Jotform → Publish → Settings → Short URL:
- Set a custom URL like: `jotform.com/deanspetals`

---

## Part 8: Website Embed Code

After publishing your form, embed it on the website by replacing the placeholder in `index.html`.

### Step 1: Get your Jotform Form ID
- Open your published form
- The URL will look like: `https://form.jotform.com/251234567890`
- Your Form ID is the number: `251234567890`

### Step 2: Get the iframe embed code
- In Jotform: Publish → Embed → iFrame
- Copy the iframe snippet

### Step 3: Paste into index.html
In `index.html`, find the comment block that reads:
```
<!-- JOTFORM EMBED: Replace src with your published Jotform URL -->
```
Replace `YOUR_JOTFORM_FORM_ID` with your actual Form ID, then uncomment the iframe block.

### Sample embed code:
```html
<iframe
  id="JotFormIFrame"
  title="Dean's Petals & Produce – Order & Request Form"
  src="https://form.jotform.com/YOUR_JOTFORM_FORM_ID"
  allow="geolocation; microphone; camera"
  allowfullscreen
  scrolling="yes"
  frameborder="0"
  style="width:100%; min-height:600px; border:none;"
></iframe>
```

---

## Part 9: Pre-Launch Checklist

Before going live, verify each item:

- [ ] All 7 sections present with correct field labels
- [ ] Section 3–6 are **hidden by default** (not shown until triggered)
- [ ] Conditional logic tested: check each checkbox option and confirm correct section appears
- [ ] Multi-select tested: check 2+ boxes and confirm multiple sections show simultaneously
- [ ] Required fields validated: try submitting without filling them out
- [ ] Date pickers have correct minimum dates set
- [ ] Admin notification email arrives correctly
- [ ] Autoresponder email arrives in customer inbox (check spam folder)
- [ ] Thank You page displays correctly after submission
- [ ] Form looks correct on mobile (test on iPhone + Android screen sizes)
- [ ] Jotform branding removed (Settings → Form Settings → Form Branding → Hide "Powered by Jotform") — requires paid plan
- [ ] QR code downloaded and tested
- [ ] Form URL / embed added to website

---

*Specification prepared for Dean's Petals & Produce — Akron, OH*
*"Grown with Love" 🌸*
