const jwt = require('jsonwebtoken');
const seccretkey = 'smktibazma';

function createToken(namaSiswa, kelas, alamat, hobbies) {
    const data = { namaSiswa, kelas, alamat, hobbies };
    return jwt.sign(data, 'rahasia', { expiresIn: '1h' }); 
}
const siswa = [{
    id : 2,
    nama: 'Hanif Gibran',
    kelas: 'XI SIJA',
    alamat: 'Jalan  No. 3',
    hobbies: ['Membaca', 'Bermain Game', 'Olahraga']
  },
  {
    id : 3,
    nama: 'Gibran',
    kelas: 'XI SIJA',
    alamat: 'Jalan  No. 3',
    hobbies: ['Membaca', 'Bermain Game', 'Olahraga']
  }];

  const arrTokens = [];

arrsiswa.forEach(sis=>{
    const token = createToken(siswa.id,siswa.kelas,siswa.alamat,siswa.hobbies);
})
token.forEach(token,index=>{
    console.log(`siswa dengan id ${index + 1}: menggunakan token : ${token }\n`)
})

