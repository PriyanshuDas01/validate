const { MongoClient } = require('mongodb');

const result = document.getElementById('id01');

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const activeTab = tabs[0];
  const ur = activeTab.url;
  console.log(ur);
  const mainPageUrl = `${url.protocol}//${url.hostname}`;
  console.log(mainPageUrl);
});

// Connection URI for MongoDB Atlas
const url = 'mongodb+srv://validate01:validate321@cluster0.pl6gewi.mongodb.net/?retryWrites=true&w=majority';

// Connect to your Atlas cluster
const client = new MongoClient(url);

// The database to use
const dbName = "validate";
                      
async function run() {
   try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        // Use the collection "people"
        const col = db.collection("banking");
        // Find one document
        const myDoc = await col.findOne();

        const websites = myDoc.banks.map(bank => bank.website);

        Object.entries(websites).forEach(([key ,value]) => {
          
          const isMatch = (ur === value);

          console.log(`value: ${value}`);
        });
        if (isMatch) {
          result.textContent = 'OK';
        } else {
          result.textContent = 'Not OK';
        }
       } 
    catch (err) {
        console.log(err.stack);
    }

    finally {
       await client.close();
   }
}
run().catch(console.dir);



