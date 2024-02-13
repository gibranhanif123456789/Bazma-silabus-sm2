const { rejects } = require('assert');
const fs = require ( 'fs');
const { resolve } = require('path');
const readline = require ('readline');

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout,


});
// cek folder ada atau tidak
const directory = '.db';
if(!fs.existsSync(directory)){
    fs.mkdirSync(directory);
}
// cek file ada / tidak maka bautkan 
const cehckFile = '.db/data.json';
if(!fs.existsSync(cehckFile)){
    fs.writeFileSync(cehckFile,'[]','utf8');
}

const questionExampel = (pertanyaan) =>{
    return new Promise((resolve, rejects)=>{
        rl.question(pertanyaan ,(jawaban)=> {
            resolve(jawaban);
        });
    });
};

const addData = async()=>{
    const nama = await questionExampel("Masukan anma anda : ");
    const umur = await questionExampel('Masukan umur anda : ');
    const hobi = await questionExampel('masukan 1 hobi : ');
    const data = {nama, umur, hobi};
    const fileDb = fs.readFileSync('./db/data.json','utf8');
    const datadiri= JSON.parse(fileDb);

    datadiri.push(data);
    fs.writeFileSync('./db/data.json',JSON.stringify(datadiri));
    console.log("terimakasih sudah memperkenalkan dirinya😁🙏")
    rl.close();
  
}
addData();



