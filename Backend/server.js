const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const offersRoutes = express.Router();
const PORT = 4000;

let Offer = require('./models/offers.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/student_drive', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Get all the offers
offersRoutes.route('/get_offers').get(function(req, res) {
    Offer.find(function(err, offers) {
        if (err) {
            console.log(err);
        } else {
            res.json(offers);
        }
    });
});

// Get a single offer
offersRoutes.route('/offers/:id').get(function(req, res) {
    let id = req.params.id;
    Offer.findById(id, function(err, offer) {
        res.json(offer);
    });
});

// Add a new offer
offersRoutes.route('/add_offer').post(function(req, res) {
    let offer = new Offer(req.body);
    offer.save()
        .then(offer => {
            res.status(200).json({'offer': 'Offer added successfully'});
        })
        .catch(err => {
            res.status(400).send('Adding new offer failed');
        });
});

// Update an offer
offersRoutes.route('/offer/update/:id').post(function(req, res) {
    Offer.findById(req.params.id, function(err, offer) {
        if (!offer)
            res.status(404).send('Data is not found');
        else
            offer.offers_from = req.body.offers_from;
            offer.offers_to = req.body.offers_to;
            offer.offers_date = req.body.offers_date;
            offer.offers_positions = req.body.offers_positions;
            offer.offers_cost = req.body.offers_cost;
            offer.offers_comments = req.body.offers_comments;
            offer.save()
                .then(offer => {
                    res.json('Offer updated successfully');
                })
                .catch(err => {
                    res.status(400).send("Update failed");
                });
    });
});

// Delete an offer
offersRoutes.route('/offer/delete/:id').get(function(req, res) {
    Offer.findByIdAndRemove({_id: req.params.id}, function(err, offer) {
        if (err)
            res.json(err);
        else
            res.json('Offer removed successfully');
    }
    );
});


app.use('/student_drive', offersRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});