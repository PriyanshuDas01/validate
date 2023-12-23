// const result = document.getElementById('id01');

// let currentUrl = 'https://example.com';
// if (typeof browser !== 'undefined') {
//   // Firefox
//   browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const currentTab = tabs[0];
//     currentUrl = currentTab.url;
//     console.log('Current tab URL:', currentUrl);
//     // result.textContent = currentUrl;
//   });
// } else if (typeof chrome !== 'undefined') {
//   // Chrome
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const currentTab = tabs[0];
//     currentUrl = currentTab.url;
//     console.log('Current tab URL:', currentUrl);
//     // result.textContent = currentUrl;
    
//   });
// } else {
//   console.error('Browser not supported.');
// }
// document.getElementById('checkButton').addEventListener('click', () => {
//   // Your code to check the current URL against the database
//   // Connect to SQLite database
//   result.textContent = currentUrl;
//   const sqlite3 = require('sqlite3').verbose();
//   const db = new sqlite3.Database('mydatabase.db', (err) => {
//     if (err) {
//       console.error('Error connecting to the database:', err.message);
//       return;
//     }

//     // Fetch URLs from the table
//     db.all('SELECT url FROM banks', (queryError, results) => {
//       if (queryError) {
//         console.error('Error querying the database:', queryError.message);
//         return;
//       }

//       // Extract URLs from the result
//       const storedUrls = results.map((row) => row.url);

//       // Compare the current URL with stored URLs
//       if (storedUrls.includes(currentUrl)) {
//         document.getElementById('result').textContent = 'Current URL is in the database.';
//       } else {
//         document.getElementById('result').textContent = 'Current URL is not in the database.';
//       }
//       // Close the database connection
//       db.close();
//     });
//   });
// });

const result = document.getElementById('result');
const checkButton = document.getElementById('checkButton');

let currentUrl = 'https://example.com';

function checkUrlAgainstDatabase() {
  // Assuming you have a database file named 'mydatabase.db' in the same folder as your extension
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'mydatabase.db', true);
  xhr.responseType = 'arraybuffer';

  xhr.onload = () => {
    const uInt8Array = new Uint8Array(xhr.response);
    const db = new SQL.Database(uInt8Array);

    // Fetch URLs from the table
    const stmt = db.prepare('SELECT url FROM banks');
    const results = [];
    while (stmt.step()) {
      results.push(stmt.get());
    }

    // Extract URLs from the result
    const storedUrls = results.map((row) => row.url);

    // Compare the current URL with stored URLs
    if (storedUrls.includes(currentUrl)) {
      result.textContent = 'Current URL is in the database.';
    } else {
      result.textContent = 'Current URL is not in the database.';
    }
  };

  xhr.send();
}

if (typeof browser !== 'undefined') {
  // Firefox
  browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    currentUrl = currentTab.url;
    console.log('Current tab URL:', currentUrl);
  });
} else if (typeof chrome !== 'undefined') {
  // Chrome
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    currentUrl = currentTab.url;
    console.log('Current tab URL:', currentUrl);
  });
} else {
  console.error('Browser not supported.');
}

checkButton.addEventListener('click', checkUrlAgainstDatabase);





