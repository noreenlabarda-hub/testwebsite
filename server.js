const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname));
app.use(express.json());

// In-memory database (shared across all users/browsers)
let sharedData = {
    forumPosts: [],
    studyGroups: [],
    materials: []
};

// ========== FORUM POSTS API ==========
app.get('/api/posts', (req, res) => {
    res.json(sharedData.forumPosts);
});

app.post('/api/posts', (req, res) => {
    const post = {
        id: Date.now(),
        name: req.body.name,
        userId: req.body.userId,
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
        date: new Date().toLocaleDateString(),
        replies: 0,
        likes: 0,
        replies_list: []
    };
    sharedData.forumPosts.unshift(post);
    res.json(post);
});

app.put('/api/posts/:id/like', (req, res) => {
    const post = sharedData.forumPosts.find(p => p.id == req.params.id);
    if (post) {
        post.likes++;
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

app.delete('/api/posts/:id', (req, res) => {
    const index = sharedData.forumPosts.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        const deletedPost = sharedData.forumPosts.splice(index, 1);
        res.json(deletedPost[0]);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

app.post('/api/posts/:id/reply', (req, res) => {
    const post = sharedData.forumPosts.find(p => p.id == req.params.id);
    if (post) {
        if (!post.replies_list) {
            post.replies_list = [];
        }
        const reply = {
            id: Date.now(),
            author: req.body.author,
            content: req.body.content,
            date: new Date().toLocaleDateString()
        };
        post.replies_list.push(reply);
        post.replies = post.replies_list.length;
        res.json(reply);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

// ========== STUDY GROUPS API ==========
app.get('/api/groups', (req, res) => {
    res.json(sharedData.studyGroups);
});

app.post('/api/groups', (req, res) => {
    const group = {
        id: Date.now(),
        creatorId: req.body.creatorId,
        name: req.body.name,
        focusArea: req.body.focusArea,
        frequency: req.body.frequency,
        description: req.body.description,
        members: 1,
        createdDate: new Date().toLocaleDateString(),
        messages: []
    };
    sharedData.studyGroups.unshift(group);
    res.json(group);
});

app.post('/api/groups/:id/message', (req, res) => {
    const group = sharedData.studyGroups.find(g => g.id == req.params.id);
    if (group) {
        const message = {
            id: Date.now(),
            author: req.body.author,
            content: req.body.content,
            timestamp: new Date().toISOString()
        };
        group.messages.push(message);
        res.json(message);
    } else {
        res.status(404).json({ error: 'Group not found' });
    }
});

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`CollegePrep website is running at http://localhost:${PORT}`);
    console.log(`To make it public, you can use services like:`);
    console.log(`  - Vercel: https://vercel.com`);
    console.log(`  - Netlify: https://netlify.com`);
    console.log(`  - GitHub Pages: https://pages.github.com`);
    console.log(`  - Replit: https://replit.com`);
});
