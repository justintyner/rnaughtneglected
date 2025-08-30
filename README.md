# Wounds Worms and Vectors - Podcast Website

A modern, responsive website for the "Wounds Worms and Vectors" podcast focused on neglected tropical diseases research and awareness.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Audio Player**: Built-in media player with show notes and reference materials
- **Contact Form**: Functional contact form with validation
- **About Page**: Comprehensive information about the podcast and mission
- **Episode Management**: Easy-to-update episode listings with detailed show notes
- **Modern UI/UX**: Clean, professional design with smooth animations

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This file
└── episodes/           # Directory for audio files (create this)
    ├── episode1.mp3    # Episode audio files
    ├── episode2.mp3
    └── episode3.mp3
```

## Setup Instructions

### 1. Basic Setup
1. Download or clone all files to your web server directory
2. Create an `episodes/` folder in the same directory
3. Add your podcast audio files to the `episodes/` folder

### 2. Audio Files
- Supported formats: MP3, WAV, OGG
- Recommended quality: 128kbps or higher
- File naming: Use descriptive names (e.g., `episode1-introduction.mp3`)

### 3. Customization

#### Update Episode Information
Edit the `episodes` object in `script.js` to add your actual episodes:

```javascript
const episodes = {
    1: {
        title: "Your Episode Title",
        audioSrc: "episodes/your-audio-file.mp3",
        showNotes: `
            <h5>Your Show Notes</h5>
            <p>Episode description...</p>
            <!-- Add more content as needed -->
        `
    }
    // Add more episodes...
};
```

#### Update Contact Information
Modify the contact details in `index.html`:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>harmony@rnaughtneglected.org</span>
</div>
```

#### Customize Colors and Branding
Edit the CSS variables in `styles.css` to match your brand colors:

```css
/* Primary brand color */
.nav-logo h2 {
    color: #your-color;
}
```

### 4. Deployment

#### Local Testing
1. Open `index.html` in a web browser
2. Test all functionality including audio player and contact form

#### Web Server Deployment
1. Upload all files to your web server
2. Ensure the `episodes/` folder is accessible
3. Test the website on different devices and browsers

#### Form Handling
The contact form currently shows a success message. To make it functional:

1. **Email Service**: Use services like Formspree, Netlify Forms, or your own backend
2. **Backend Integration**: Replace the form submission logic in `script.js` with actual API calls

Example with Formspree:
```javascript
// Replace the form submission in script.js
const form = document.getElementById('contactForm');
form.setAttribute('action', 'https://formspree.io/your-email@domain.com');
form.setAttribute('method', 'POST');
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color scheme
- Responsive text sizing

## Performance Optimization

- Optimized images and icons
- Minified CSS and JavaScript (for production)
- Lazy loading for audio content
- Efficient CSS animations

## Customization Options

### Adding New Episodes
1. Add audio file to `episodes/` folder
2. Update the `episodes` object in `script.js`
3. Add episode card to the HTML if needed

### Changing the Theme
Modify the color scheme in `styles.css`:
- Primary: `#2c5530` (dark green)
- Secondary: `#4a7c59` (medium green)
- Background: `#f8f9fa` (light gray)
- Text: `#333` (dark gray)

### Adding Social Media Links
Update the footer social links in `index.html`:
```html
<div class="social-links">
    <a href="your-spotify-link"><i class="fab fa-spotify"></i></a>
    <a href="your-apple-podcasts-link"><i class="fab fa-apple"></i></a>
    <!-- Add more as needed -->
</div>
```

## Troubleshooting

### Audio Not Playing
- Check file paths in `script.js`
- Ensure audio files are in the correct format
- Verify file permissions on the server

### Contact Form Issues
- Check browser console for JavaScript errors
- Verify form validation is working
- Test with different email formats

### Mobile Menu Not Working
- Ensure JavaScript is enabled
- Check for CSS conflicts
- Verify hamburger menu HTML structure

## Future Enhancements

- RSS feed generation for podcast platforms
- Analytics integration
- User authentication for admin panel
- Episode search and filtering
- Social sharing functionality
- Newsletter signup
- Donation/investment portal

## Support

For technical support or questions about the website:
- Email: harmony@rnaughtneglected.org
- Check the browser console for error messages
- Verify all files are properly uploaded

## License

This project is created for the Wounds Worms and Vectors podcast. All rights reserved.

---

**Note**: This website is designed to support your mission of raising awareness about neglected tropical diseases and supporting research efforts. The clean, professional design reflects the serious nature of your work while maintaining accessibility and ease of use. 

##  **Common Causes of Mixed Content**

### **1. External Resources (Most Likely)**
Check if these are loading over HTTP:
- **Google Fonts** (in your CSS)
- **Font Awesome icons** (in your HTML)
- **Any external scripts or images**

### **2. Your Current Code Issues**
Looking at your files, I can see potential problems:

**In `index.html`:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

**In `styles.css`:**
```css
background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
```

## ️ **Quick Fixes**

### **Fix 1: Force HTTPS for External Resources**
Update your `index.html` to ensure all external resources use HTTPS:

```html
<code_block_to_apply_changes_from>
```

### **Fix 2: Check for HTTP References**
Search your files for any `http://` references and change them to `https://`

### **Fix 3: Add Security Headers**
In your Vercel project, you can add security headers to force HTTPS:

Create a `vercel.json` file in your project root:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        },
        {
          "key": "Content-Security-Policy",
          "value": "upgrade-insecure-requests"
        }
      ]
    }
  ]
}
```

##  **How to Debug**

### **Browser Developer Tools:**
1. **Right-click → Inspect** on your site
2. **Go to Console tab** - look for mixed content warnings
3. **Go to Network tab** - look for any HTTP requests

### **Check for Mixed Content:**
Look for warnings like:
- "Mixed Content: The page was loaded over HTTPS, but requested an insecure resource"
- "Blocked loading mixed active content"

## 📱 **Test Your Fixes**

1. **Update your files** with the fixes above
2. **Push to GitHub** (if using GitHub deployment)
3. **Wait for Vercel to redeploy** (usually 1-2 minutes)
4. **Clear browser cache** and test again

## 🎯 **Most Likely Solution**

The issue is probably the external resources (Google Fonts, Font Awesome). Even though they're already HTTPS, sometimes browsers can be picky about mixed content.

Try the `vercel.json` approach first - it's the most comprehensive fix and will force all resources to load securely.

Let me know what you see in the browser console, and I can help you identify the specific resource causing the issue! 