const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Reactions = require('./reactionSchema.js');
const cors = require('cors'); 
const puppeteer = require('puppeteer');
const Filter = require('bad-words');

const app = express(); 
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/scrape/:page', async (req, res) => {
    const pageToScrape = req.params.page;
    const url = `https://www.alexanderthomsonsociety.org.uk/?paged=${pageToScrape}&cat=54`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForTimeout(5000); 

    const data = await page.evaluate(() => {
        let newsItems = [];
        let elements = document.querySelectorAll('.post-item.template-standard');

        for (let element of elements){
            let titleElement = element.querySelector('.entry-header .post-title a');
            let summaryElement = element.querySelector('.post-excerpt p');
            let imageElement = element.querySelector('.post-thumbnail img');

            let title = titleElement ? titleElement.innerText : null;
            let link = titleElement ? titleElement.href : null;
            let summary = summaryElement ? summaryElement.innerText : null;
            let imageUrl = imageElement ? imageElement.dataset.src : null;

            newsItems.push({
                title: title,
                link: link,
                summary: summary,
                imageUrl: imageUrl
            });
        }

        return newsItems;
    });

    await browser.close();

    if (!data) {
        res.status(404).json({message: 'No data found'});
    } else {
        res.status(200).json(data);
    }
});


// Middleware to parse JSON and URL-encoded data in the request body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.use((req, res, next) => {
// console.log('Middleware is executed before the request handler.');
// next(); // Call next() to pass control to the next middleware in the chain
// });

// app.use(express.static(path.join(__dirname, './build')));

mongoose.connect("mongodb+srv://specialproject:specialproject123@cluster0.v0joqli.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error' ,err=>{ console.log(err)});
db.once('open' ,()=>{ 
  console.log("Connected to database!")
});


app.get('/resetDatabase', (req, res) => {
    var newReaction  = [
      {
        photoId: '/Images/898034.1.jpg',
        like: 0,
        comment: []
      },
            {
        photoId: '/Images/898034.2.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.3.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.4.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.5.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.10.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.17.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.19.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.22.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.23.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.24.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.27.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.28.ii.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.28.ix.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.28.v.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.28.vi.jpg',
        like: 0,
        comment: []
      },
      {
        photoId: '/Images/898034.28.vii.jpg',
        like: 0,
        comment: []
      },
    ]

    Reactions.create(newReaction)
      .then(savedReactions => {
        console.log('Saved reactions:', savedReactions);
        // Do something after successfully saving the users.
        res.json({
          message: "Worked",
        });
      })
      .catch(error => {
        console.error('Error saving reactions:', error);
        res.json({
          error
        });
      });
});

app.get('/getComment', async (req,res) => {
  const name =  req.query.name;
  const query = {"photoId": name}
  var data = await Reactions.findOne(query, "comment");
  if (data) {
    res.json(data.comment)
  }else{
    res.json({
      message: "Failed" 
    })
  }
});

app.get('/allFeedback', async (req, res) => {

    res.json({
        message: "Worked" 
    });
    // res.send('Hello, this is a GET request!');
});

app.post('/like', (req, res) => {
    Reactions.findOneAndUpdate(
      { photoId: req.body.photoId }, // Filter to find the document by ID
      { $inc: { like: 1 } }, // Use $push to add the new comment to the "comment" array
      { new: true } // Set { new: true } to return the updated document in the response
    ).then(foundDocument => {
      console.log("succes " , foundDocument)
      res.json({
        message: "Liked .",
        foundDocument
      });
    })
    .catch(err => {
      console.error('Error finding or updating document:', err);
      res.json({
        message: "Failed."
      });
    }); 
});

app.post('/unlike', (req, res) => {
    Reactions.findOneAndUpdate(
        { photoId: req.body.id }, // Filter to find the document by ID
        { $inc: { like: -1 } }, // Use $push to add the new comment to the "comment" array
        { new: true } // Set { new: true } to return the updated document in the response
      ).then(foundDocument => {
        res.json({
          message: "Unliked Succesfully.",
          foundDocument
        });
      })
      .catch(err => {
        console.error('Error finding or updating document:', err);
        res.json({
          message: "Failed."
        });
      }); 

    
});


app.post('/comment', (req, res) => {
    const data = req.body; // Extract the data from the request body
    var filter = new Filter(),
    commentText = filter.clean(data.comment.text)

    comment = {"top": data.comment.top, "left": data.comment.left, "text": commentText}
    
    console.log('Comment is : ', comment);
    Reactions.findOneAndUpdate(
        { photoId:data.photoId }, // Filter to find the document by ID
        { $push: { comment } }, // Use $push to add the new comment to the "comment" array
        { new: true } // Set { new: true } to return the updated document in the response
      ).then(foundDocument => {
        console.log("succes " , foundDocument)
      })
      .catch(err => {
        console.error('Error finding or updating document:', err);
      }); 
    res.json({
        message: "Commented ."
    });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});