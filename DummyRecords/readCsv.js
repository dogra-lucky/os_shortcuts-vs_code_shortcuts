const fs = require('fs');
const fastCsv = require('fast-csv');
const User = require('./userModel');

const main = async () => {
    // read csv file
    const posts = [];
    fs.createReadStream('people.csv')
        .pipe(fastCsv.parse({ headers: true }))
        .on('error', error => console.error(error))
        .on('data', function(data) {
            const entry = {
                userId : data['User Id'],
                firstName : data['First Name'],
                lastName : data['Last Name'],
                sex : data['Sex'],
                email : data['Email'],
                phone : data['Phone'],
                dob : data['Date of birth'],
                jobTitle: data['Job Title']
            }
            posts.push(entry);
        })
        .on('end', rowCount =>{
            User.insertMany(posts, function(err, documents) {
                console.time('DbInsertTime');
                if (err) {
                    console.log(err);
                }
                console.timeEnd('DbInsertTime');
            });
            console.log(`${rowCount} posts have been successfully uploaded.`);
            return;
        });
}

main().catch((error) => {
    console.error(error);
    process.exit();
});