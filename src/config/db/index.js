const mongoose = require('mongoose')

async function connect() {
    try {
        mongoose.set('strictQuery', false);

        await mongoose.connect('mongodb+srv://tubeocoffee:tubeocoffee@tbcoffee.iovvrey.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to the database successfully!');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}

module.exports = { connect }
