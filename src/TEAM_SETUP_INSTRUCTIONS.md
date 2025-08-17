# Team Section Setup Instructions

## Overview
This guide explains how to add team member photos to the responsive Team Section component.

## File Structure
```
src/
├── images/                 # Team member photos go here
├── TeamSection.jsx         # Main team component
├── TeamDemo.jsx           # Demo usage example
└── TEAM_SETUP_INSTRUCTIONS.md
```

## Step-by-Step Guide

### Step 1: Prepare Team Photos
1. **Collect Photos**: Gather high-quality photos of team members
2. **Resize Images**: Recommended size is 200x200px or larger (square format works best)
3. **File Format**: Use JPG or PNG format
4. **File Naming**: Use descriptive names without spaces
   - ✅ Good: `john_doe.jpg`, `sarah-smith.png`, `alex_johnson.jpg`
   - ❌ Bad: `John Doe.jpg`, `Sarah Smith Photo.png`, `Alex's Picture.jpg`

### Step 2: Add Photos to Images Folder
1. Copy your renamed photo files to the `src/images/` folder
2. Your folder structure should look like:
   ```
   src/images/
   ├── raksha_aravind.jpg
   ├── sinchana_ss.jpg
   ├── poornesha_g.jpg
   └── ... (other team photos)
   ```

### Step 3: Import Photos in TeamSection.jsx
1. Open `src/TeamSection.jsx`
2. Find the import section at the top (around line 30)
3. Add import statements for each photo:
   ```javascript
   // Add these imports after the existing imports
   import rakshaAravindPhoto from './images/raksha_aravind.jpg';
   import sinchanaPhoto from './images/sinchana_ss.jpg';
   import poorneshaPhoto from './images/poornesha_g.jpg';
   // ... add more imports as needed
   ```

### Step 4: Update Team Member Data
1. In the same file, find the `teamMembers` array (around line 40)
2. Replace the placeholder images with your imported photos:
   ```javascript
   const teamMembers = [
     {
       name: 'Raksha Aravind',
       role: 'President',
       image: rakshaAravindPhoto, // Changed from placeholderImage
       description: 'Visionary leader driving innovation...'
     },
     // ... update other members
   ];
   ```

### Step 5: Add New Team Members
To add completely new team members:
1. Add their photo to `src/images/`
2. Import the photo at the top of the file
3. Add a new object to the `teamMembers` array:
   ```javascript
   {
     name: 'New Member Name',
     role: 'Their Role',
     image: newMemberPhoto,
     description: 'Brief description of their role and expertise'
   }
   ```

## Usage Examples

### Using in Existing Component
```javascript
import TeamSection from './TeamSection';

function App() {
  return (
    <div>
      {/* Your other content */}
      <TeamSection />
      {/* More content */}
    </div>
  );
}
```

### Standalone Demo
```javascript
// Use TeamDemo.jsx for a complete page example
import TeamDemo from './TeamDemo';
```

## Responsive Behavior
- **Mobile (< 768px)**: 1 column
- **Tablet (768px - 1024px)**: 2 columns  
- **Desktop (1024px - 1280px)**: 3 columns
- **Large Desktop (> 1280px)**: 4 columns

## Styling Features
- ✅ Rounded profile images with border
- ✅ Soft shadows and hover effects
- ✅ Modern card design
- ✅ Smooth animations
- ✅ Professional color scheme
- ✅ Fallback initials if image fails to load

## Troubleshooting

### Image Not Showing?
1. Check file path and name spelling
2. Ensure image is in `src/images/` folder
3. Verify import statement matches filename exactly
4. Check browser console for errors

### Layout Issues?
1. Ensure Tailwind CSS is properly configured
2. Check that framer-motion is installed: `npm install framer-motion`
3. Verify all required dependencies are installed

### Adding More Columns?
Modify the grid classes in TeamSection.jsx:
```javascript
// Current: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
// For 5 columns on large screens:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8"
```

## Support
If you encounter issues, check:
1. File paths and naming conventions
2. Import statements match filenames exactly
3. All dependencies are installed
4. Tailwind CSS is configured properly