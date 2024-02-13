const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface( {
    input : process .stdin,
    output: process.stdout,
});

rl.question('masukan nama lengkap : ',(nama)=>{
    rl.question('masukan umur anda : ', (umur)=>{
        rl.question('masukan nama sekolah : ',(sekolah)=>{
            // console.log('-- Data saya --');
            // console.log(`Nama Lengkap saya Adalah : ${nama} dan umur saya adalah ${umur}, saat ini sekolah di ${sekolah}`);
            const data ={nama, umur, sekolah };
            const fileDb = fs.readFileSync('./db/data.json','utf8');
            const datadiri= JSON.parse(fileDb);

            datadiri.push(data);
            fs.writeFileSync('./db/data.json',JSON.stringify(datadiri));
            console.log("terimakasih sudah memperkenalkan dirinya😁🙏")
            rl.close();
        });
    });
});