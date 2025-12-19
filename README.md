# Durand-Auto.com

This is where the Cloudflare hosted durand-auto website is edited and stored.

## 🚗 Website Overview

Professional auto service website for Durand Auto with a modern design featuring orange, green, and white color scheme.

## 🔐 Password Protection

The website is protected with a site-wide password:
- **Password**: `auto`
- Users only need to enter it once per browser session

## 🎨 Color Scheme

- **Primary Orange**: #FF6B35 - Used for buttons, accents, and borders
- **Primary Green**: #2D8659 - Used for headers, navigation, and footer
- **Dark Green**: #1F5F3F - Used for hover states
- **Light Orange**: #FFA06B - Used for gradients
- **White**: #FFFFFF - Used for backgrounds and text

## 📁 Files

- `index.html` - Main website structure
- `styles.css` - All styling with orange/green/white theme
- `script.js` - Password protection and smooth scrolling functionality
- `wrangler.json` - Cloudflare Pages configuration

## 🚀 Local Development

To run the website locally:

```bash
# Start a simple HTTP server
python3 -m http.server 8080

# Or use Node.js
npx http-server -p 8080

# Then visit http://localhost:8080
```

## 🌐 Deployment

This website is configured for deployment to durand-auto.com via Cloudflare Pages.

### Deployment Steps:
1. Connect this GitHub repository to Cloudflare Pages
2. Set the build output directory to `.` (root directory)
3. Configure the custom domain `durand-auto.com`
4. Deploy!

## ✨ Features

- **Responsive Design**: Works on all devices (mobile, tablet, desktop)
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Password Protection**: Site-wide password protection
- **Modern UI**: Clean, professional design with orange/green/white color scheme
- **Service Sections**: Oil changes, brake service, engine diagnostics, battery service, tire service, and AC service

## 📝 Customization

To update contact information, edit the Contact Us section in `index.html`:
- Phone number
- Address
- Business hours
