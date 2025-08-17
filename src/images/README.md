# Team Member Photos Directory

## Instructions
Place your team member photos in this directory following these guidelines:

### File Naming Convention
- Use lowercase letters
- Replace spaces with underscores or hyphens
- Use descriptive names based on the person's name
- Include file extension (.jpg, .png, etc.)

### Examples:
- `raksha_aravind.jpg`
- `sinchana_ss.png`
- `poornesha_g.jpg`
- `chithra_hp.jpg`

### Recommended Specifications:
- **Size**: 200x200px minimum (square format preferred)
- **Format**: JPG or PNG
- **Quality**: High resolution for crisp display
- **Background**: Professional headshot style works best

### Current Placeholder Structure:
When you add actual photos, replace the placeholder imports in `TeamSection.jsx` with:

```javascript
// Example imports to add at the top of TeamSection.jsx
import rakshaAravindPhoto from './images/raksha_aravind.jpg';
import sinchanaPhoto from './images/sinchana_ss.jpg';
import poorneshaPhoto from './images/poornesha_g.jpg';
// ... add more as needed
```

Then update the teamMembers array to use these imported images instead of `placeholderImage`.

### Adding New Photos:
1. Save photo file in this directory
2. Import it in TeamSection.jsx
3. Update the corresponding team member's image property
4. Save and refresh your application