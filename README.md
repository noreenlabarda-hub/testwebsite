# CollegePrep - Your Path to Higher Education

A comprehensive web platform designed for students in Dasmarinas and nearby areas to prepare for college entrance exams, explore universities, and connect with other students.

## Features

- **📅 Exam Calendar** - Important dates for UPCAT, USTE, and other entrance exams
- **🏫 University Directory** - Browse and filter universities in the Cavite region
- **📚 Study Materials** - Upload and download study resources (files and links)
- **💬 Community Forum** - Create posts, reply, and like discussions
- **👥 Study Groups** - Create or join study groups with messaging
- **⭐ Reviews & Ratings** - Share your college experience

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Local Development

1. Clone or download the repository
```bash
cd testwebsite
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
npm start
```

4. Open your browser and go to `http://localhost:3000`

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to https://vercel.com and connect your GitHub repo
3. Deploy with one click - your site will be live instantly

### Option 2: Netlify
1. Push your code to GitHub
2. Go to https://netlify.com and connect your GitHub repo
3. Deploy automatically

### Option 3: GitHub Pages (Static)
1. Remove `server.js` and `package.json`
2. Push to GitHub
3. Enable GitHub Pages in repository settings

### Option 4: Replit
1. Create a Replit account
2. Import from GitHub or upload files
3. Click "Run" - your site is instantly public with a shareable link

## Data Storage

This application uses browser **localStorage** to store all data locally:
- Forum posts and replies
- Study groups and messages
- Uploaded materials and links
- User interactions (likes, downloads)

**Note:** Data is stored per browser/device. For multi-user production use, consider adding a backend database (MongoDB, Firebase, etc.)

## Features Overview

### Forum
- Create discussion posts
- Reply to posts
- Like posts
- Delete your posts

### Study Groups
- Create study groups
- Join groups
- Send group messages
- Delete groups

### Study Materials
- Upload files (up to 5MB: PDF, Word, Excel, PowerPoint, TXT)
- Share links to external resources
- Download/access materials
- Track downloads
- Delete materials

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Express.js (Node.js backend)
- Local Storage API

## Future Enhancements

- User authentication system
- Database integration (MongoDB/Firebase)
- Direct messaging between users
- Advanced search and filtering
- Mobile app version
- Video tutorials
- Live webinars

## Contributing

Feel free to contribute by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## License

ISC

## Support

For issues or questions, please create an issue in the repository.

---

**CollegePrep** - Empowering Students' College Journey
