const fs = require('fs');
const readline = require('readline');
const generateRandomId = require('./generaterandomid');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const directory = './db';
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}

const checkfile = './db/data.json';
if (!fs.existsSync(checkfile)) {
    fs.writeFileSync(checkfile, '[]', 'utf-8');
}

const dataQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}
  


const fungsi = () => {
    const fileFungsi = fs.readFileSync(checkfile, 'utf-8');
    const data = JSON.parse(fileFungsi);
    console.log(data);
    rl.close();
}

// add data
const add = (merek, model, chipset, baterai, ram, rom, kamera, resolusi, sistemoprasi) => {
    const id = generateRandomId(10);
    baterai = `${baterai} mAh`
    ram = `${ram} GB`;
    rom = `${rom} GB`;
    kamera=`${kamera} MP`
    resolusi = `${resolusi} Pixel`
    const obj = {id, merek, model, chipset, baterai, ram, rom, kamera, resolusi, sistemoprasi };
    const file = fs.readFileSync (checkfile, 'utf-8');

    const dataFungsi =JSON.parse(file)
    dataFungsi.push(obj);
    fs.writeFileSync(checkfile, JSON.stringify(dataFungsi,null,2));
    console.log('Data di tambahkan')
    rl.close();
}
// validation
const questionDataValidation = async (question) => {
    let answer = '';
    do {
        answer = await dataQuestion(question);
        if (!answer.trim()) {
            console.log('Error: Field harus diisi. Silakan coba lagi.');
        }
    } while (!answer.trim());

    return answer;
};

// get By Id

const getById = (id)=>{
    const file = fs.readFileSync(checkfile, 'utf-8');
    const data = JSON.parse(file);
    const findData = data.find(hp => hp.id === id);

    if(findData){
        console.log(findData);
    }else{
        console.log(`data dengan id ini ${id} tidak di temukan`);
    }
    rl.close();
}
// updatedatabyId
const updateByid = (id, updateData) => {
    const file = fs.readFileSync(checkfile, 'utf-8')
    const data = JSON.parse(file)
    const index = data.findIndex(item => item.id === id)

    if (index !== -1) {
        // Iterasi setiap properti dalam updateData
        for (const key in updateData) {
            // Periksa apakah nilai baru tidak kosong
            if (updateData[key] !== '') {
                // Perbarui nilai jika tidak kosong, sebaliknya, tetapkan nilai yang sudah ada
                JSONdata[index][key] = updateData[key];
            }
        }

        fs.writeFileSync(checkFile, JSON.stringify(JSONdata, null, 2))
        console.log('Successfully updated data: ' + id)
    } else {
        console.log(`Data with ID ${id} not found!!`)
    }
    rl.close()
}
const updateById = (id, updateData) => {
    const file = fs.readFileSync(checkfile, 'utf-8')
    const data = JSON.parse(file)
    const index = data.findIndex(hp => hp.id === id);
    if (index !== -1) {
        for (const key in updateData) {
            if (updateData[key] !== '') {
                data[index][key] = updateData[key];
            }
        }
        fs.writeFileSync(checkfile, JSON.stringify(data, null, 2));
        return true;
    } else {
        console.log(`Data dengan ID ${id} tidak ditemukan`);
        return false; 
    }   
}

// delet
const deleteByID=(id)=> {

    const file = fs.readFileSync(checkfile, 'utf-8');
    const data = JSON.parse(file);
    const filterDataId= data.filter(hp => hp.id !==id);

    if(filterDataId.length < data.length){
        fs.writeFileSync(checkfile,JSON.stringify(filterDataId,null,2));
        console.log(`Sukses menghapus data hp dengan id : ${id}`)
    }else {
        console.log('ID tidak ditemukan')
    }
    rl.close();
}



module.exports = {
    dataQuestion,
    fungsi,
    add,
    questionDataValidation,
    getById,
    updateById,
    deleteByID,
    rl

}
