const fs = require('fs');

const fetch = require("node-fetch");

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
}

async function writeResponse(){
    const data = await getData();
    const post = JSON.stringify(data, null, 2);
    fs.writeFile('result/posts.json', post, (err) => {
        if (err) throw err;
        console.log('Done')
    })
}
writeResponse()