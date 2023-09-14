const express = require("express");
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const nodemailer = require('nodemailer');
const path = require('path');

var routes = require('./routes/routes');

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080'
}));

// Connect Post to Database
const title = '5 Habits of Emotionally Stable People';
const description = '#2: They’re willing to be vulnerable............';
const image = 'https://cdn.powerofpositivity.com/wp-content/uploads/2017/10/emotionally-stable-1200x900.jpg';
const tag = 'Admin';
const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  tag: String,
  comment: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Comment'
    }
  ]
});
const Post = mongoose.model('Post', postSchema)

// const newPost = new post ({
//   title: title,
//   description: description,
//   image: image,
//   tag: tag
// });
// newPost.save();

const commentSchema = new mongoose.Schema({
  author: String,
  comment: String
});
const Comment = mongoose.model('Comment', commentSchema);

// Home Page
app.set('view engine', 'ejs');
app.set('views', 'C:/Coding/tekweb/final-project/expressServer/posting');

app.get('/home', function (req, res) {
  Post.find ({}, (err, posts) => {
    if(err) {
      console.log(err)
    } else {
      console.log(posts);
      res.render('home', {posts:posts});
    }
  })
});

//Post Page
app.get('/home/blogs', function (req, res) {
  Post.find ({}, (err, posts) => {
    if(err) {
      console.log(err)
    } else {
      console.log(posts);
      res.render('home', {posts:posts});
    }
  })
});

// Create New Post
app.get('/home/newpost', (req, res) => {
  res.render('new-post');
});

app.get('/home/blogs/:id', (req, res) => {
  Post.findById(req.params.id).populate('comment').exec(function(err, post) {
    if (err) {
      console.log(err);
    } else {
      // console.log(post);
      res.render('post', { post: post });
    }
  });
});

// Home Page After Login
app.post('/home', (req, res) => {
  const title = req.body.title;
  const image = req.body.image;
  const tag = req.body.tag;
  const description = req.body.description;

  const newPost = new Post({
    title: title,
    image: image,
    tag: tag,
    description: description
  });

  newPost.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/home');
    }
  });
});

app.get('/home/blogs/:id/edit', (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.render('editpost', { post: post });
    }
  });
});

app.put('/home/blogs/:id', (req, res)=>{
  Post.findByIdAndUpdate(req.params.id,
    {
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      tag: req.body.tag
    },
    (err, update)=> {
      if(err) {
        console.log(err);
      } else {
        res.redirect('/home/blogs/' + req.params.id);
      }
    }
 )
})

// Hapus post
app.delete('/home/blogs/:id',(req, res) => {
  Post.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      console.log(err);
    } else{
      res.redirect('/home');
    }
  });
});

// commentPost
app.post('/home/blogs/:id/comments', (req, res) => {
  const comment = new Comment({
    author: 'Admin',
    comment: req.body.comment
  });
  comment.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      Post.findById(req.params.id, (err, post) => {
        if (err) {
          console.log(err);
        } else {
          post.comment.push(result);
          post.save();

          console.log('=======comments====');
          console.log(post.comments);
          res.redirect('/home');
        }
      })
    }
  });
});


app.post('http://localhost:3000/submit-form', (req, res) => {
  const { name, email, comment } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      email: 'nullgilang@gmail.com',
      pass: 'oolreoxkyeenckuv',
    },
  });

  const mailOptions = {
    from: 'nullgilang@gmail.com',
    to: 'gilangraya336@gmail.com',
    subject: 'Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nComment: ${comment}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.status(500).send('Failed to send email.');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully.');
    }
  });
});

// Connect to Mongo DB
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/grk', { useNewUrlParser: true, useUnifiedTopology: true }, function checkDB(error) {
  if (error) {
    console.log('Failed Connecting to DB:', error);
  } else {
    console.log('Success Connecting To DB');
  }
});

app.listen(3000, function check(err) {
  if (err)
    console.log("Error");
  else
    console.log("Server is listening on port 3000");
});

app.use(routes);
