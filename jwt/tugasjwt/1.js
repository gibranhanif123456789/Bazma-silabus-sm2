const jwt = require('jsonwebtoken');
const secretKey = 'liburlebaran';



function createToken(data) {
   
    const token = jwt.sign(data, secretKey, { expiresIn: '72h' }); 
    return token;
}


function verify(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        delete decoded.iat;
        return decoded;
    } catch (err) {
        return null;
    }
}

const peserta = [
    {
        id: 1,
        fullName: 'Jamal',
        destinasi: 'Pulau Dewata (Bali)',
        address: ' Jakarta',
        contact: '0810'
    },
    {
        id: 2,
        fullName: 'Udin',
        destinasi: 'Kepulauan',
        address: ' Jaktim.',
        contact: '082'
    },
    {
        id: 3,
        fullName: 'Lala',
        destinasi: 'Gunung Api',
        address: 'Bogor.',
        contact: '034'
    },
    {
        id: 4,
        fullName: 'KKa',
        destinasi: 'Tegal',
        address: 'sulsel',
        contact: '0856'
    },
    {
        id: 5,
        fullName: 'BMW',
        destinasi: 'Solo',
        address: 'jawa',
        contact: '0878'
    }
]

const arrToken = [];
const arrLiburan = [];


peserta.forEach(peserta => {
    const token = createToken(
        peserta.id, peserta.fullName, peserta.address, peserta.contact
    )
    arrToken.push(token);
})

arrToken.forEach((token, index) => {
    console.log(`Peserta dengan id ${index + 1} menggunakan token: ${token} \n`);
})


arrToken.forEach((token, index) => {
    const decodedPeserta = verify(token);
    console.log('decodedPeserta: ', decodedPeserta);
})


liburan.forEach(liburan => {
    const token = createToken(liburan)
    arrLiburan.push(token);
})

arrLiburan.forEach((token, index) => {
    console.log(`Liburan dengan id ${index + 1} menggunakan token: ${token} \n`);
})

arrLiburan.forEach((token, index) => {
    const decodedLiburan = verify(token);
    console.log('decodedLiburan: ', decodedLiburan);
})