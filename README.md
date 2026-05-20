# Summers Ridge HOA Website

A simple static website for the Summers Ridge Homeowners Association. The site is built with HTML, CSS, JavaScript, and Bootstrap, with no package manager or build pipeline required.

It is ready to deploy from the repository root on Netlify.

## Features

- Responsive homepage with announcements, resources, community links, dues information, and contact details
- Dedicated annual HOA dues invoice page
- Dedicated Building Control Committee page for exterior change requests
- Dedicated FAQ page with common HOA questions and answers
- Building Control Committee links for the Google request form and committee email
- Invite-only Facebook group link
- Netlify-compatible contact form and thank-you page
- HOA logo and favicon assets

## Files

- `index.html` - Main website page
- `dues.html` - Annual HOA dues invoice and payment page
- `bcc.html` - Building Control Committee request page
- `faq.html` - Frequently asked questions page
- `minutes.html` - Meeting minutes and board records page
- `styles.css` - Custom site styling
- `script.js` - Small interactive behavior
- `thank-you.html` - Netlify form success page
- `favicon.svg` - Browser icon
- `assets/summers-ridge-hoa-logo.jpg` - HOA logo image
- `netlify.toml` - Netlify publish settings and basic headers

## Local Preview

Run a simple static server from the repository root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Netlify Deployment

1. Create a new site in Netlify from the GitHub repository.
2. Leave the build command blank.
3. Set the publish directory to `.`.
4. Deploy.

The contact form uses Netlify Forms and should be detected automatically after the first deploy.
