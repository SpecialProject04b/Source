const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Reactions = require('./reactionSchema.js');
const cors = require('cors');  //  npm install cors

const app = express(); // Declare 'app' before using it.
const port = process.env.PORT || 3001;

// This will allow all CORS requests
app.use(cors());

const puppeteer = require('puppeteer');


app.get('/scrape', async (req, res) => {
    const url = "https://www.alexanderthomsonsociety.org.uk/?cat=54";

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForTimeout(5000); // wait 5 seconds

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
            let imageUrl = imageElement ? imageElement.src : null;

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

// app.use(express.static(path.join(__dirname, '../build')));

mongoose.connect("mongodb+srv://specialproject:specialproject123@cluster0.v0joqli.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error' ,err=>{ console.log(err)});
db.once('open' ,()=>{ 
  console.log("Connected to database!")
});


app.get('/resetDatabase', (req, res) => {
    var newReaction  = new Reactions({
        photoId: '123456',
        like: 10,
        comment: ['Great photo!', 'Amazing!', 'Beautiful shot']
      })

    var data = newReaction.save();
    
    res.json({
        message: "Worked",
        data
    });
});

app.get('/allFeedback', async (req, res) => {
    var data = await Reactions.find();
    console.log(data)
    res.json({
        message: "Worked" ,
        data
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
      })
      .catch(err => {
        console.error('Error finding or updating document:', err);
      }); 

    res.json({
        message: "Liked ."
    });
});

app.post('/unlike', (req, res) => {
    console.log('Liked this photo :', req.body.id);
    Reactions.findOneAndUpdate(
        { photoId: req.body.id }, // Filter to find the document by ID
        { $inc: { like: -1 } }, // Use $push to add the new comment to the "comment" array
        { new: true } // Set { new: true } to return the updated document in the response
      ).then(foundDocument => {
        console.log("succes " , foundDocument)
      })
      .catch(err => {
        console.error('Error finding or updating document:', err);
      }); 

    res.json({
        message: "Liked ."
    });
});

app.post('/comment', (req, res) => {
    const data = req.body; // Extract the data from the request body
    console.log('Comment is : ', data.comment);
    Reactions.findOneAndUpdate(
        { photoId:data.photoId }, // Filter to find the document by ID
        { $push: { comment: data.comment } }, // Use $push to add the new comment to the "comment" array
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