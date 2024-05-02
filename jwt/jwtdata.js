const jwt = require('jsonwebtoken');
const seccretkey = 'smktibazma';

function createToken(namaSiswa, kelas, alamat, hobbies) {
    const data = { namaSiswa, kelas, alamat, hobbies };
    return jwt.sign(data, 'rahasia', { expiresIn: '1h' }); 
}

function verifyToken(token) {
    try {
      const decoded = jwt.verify(token, 'rahasia'); // Memverifikasi token dengan kunci rahasia
      return decoded;
    } catch (error) {
      return null; // Jika verifikasi gagal, kembalikan null
    }
  }

  const siswa = {
    nama: 'Hanif Gibran',
    kelas: 'XI SIJA',
    alamat: 'Jalan  No. 3',
    hobbies: ['Membaca', 'Bermain Game', 'Olahraga']
  };

  const token = createToken(siswa.nama, siswa.kelas, siswa.alamat, siswa.hobbies);
console.log('Token:', token);