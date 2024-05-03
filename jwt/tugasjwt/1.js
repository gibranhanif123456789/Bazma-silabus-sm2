const jwt = require('jsonwebtoken');
const secretKey = 'liburlebaran';



function createTokenLiburan(data) {
   
    const token = jwt.sign(data, secretKey, { expiresIn: '168h' }); // Bertahan 1 Minggu
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
        address: ' Jakarta',
        contact: '0810'
    },
    {
        id: 2,
        fullName: 'Udin',
        address: ' Jaktim.',
        contact: '082'
    },
    {
        id: 3,
        fullName: 'Lala',
        address: 'Bogor.',
        contact: '034'
    },
    {
        id: 4,
        fullName: 'KKa',
        address: 'sulsel',
        contact: '0856'
    },
    {
        id: 5,
        fullName: 'BMW',
        address: 'jawa',
        contact: '0878'
    }
]

const liburan = [
    {
      destinasi: 'Pulau Dewata (Bali)', // Updated destinasi
      waktu: '4 hari', // Updated waktu
      paket: 'Premium' // Updated paket
    },
    {
      destinasi: 'Taman Mini Indonesia Indah (TMII)', // Updated destinasi
      waktu: '3 hari', // Updated waktu
      paket: 'VIP' // Updated paket
    },
    {
      destinasi: 'Gunung Bromo', // Updated destinasi
      waktu: '2 hari', // Updated waktu
      paket: 'Ekonomi' // Updated paket
    },
    {
      destinasi: 'Pantai Kuta', // Updated destinasi
      waktu: '5 hari', // Updated waktu
      paket: 'Bisnis' // Updated paket
    },
    {
      destinasi: 'Candi Borobudur', // Updated destinasi
      waktu: '6 hari', // Updated waktu
      paket: 'Premium' // Updated paket
    }
  ];

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
    const token = createTokenLiburan(liburan)
    arrLiburan.push(token);
})

arrLiburan.forEach((token, index) => {
    console.log(`Liburan dengan id ${index + 1} menggunakan token: ${token} \n`);
})

arrLiburan.forEach((token, index) => {
    const decodedLiburan = verify(token);
    console.log('decodedLiburan: ', decodedLiburan);
})