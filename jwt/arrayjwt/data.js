const jwt = require ('jsonwebtoken');
const arr = [
    {
        "id": 1,
        "nama": "Rani",
        "kelas": "X MIPA 1",
        "alamat": "Jalan Merdeka No. 5",
        "liburan": "gunung"
      },{
        "id": 3,
        "nama": "Citra",
        "kelas": "XII IPA 3",
        "alamat": "Jalan Cempaka No. 9",
        "liburan": "pantai"
      },{
        "id": 2,
        "nama": "Budi",
        "kelas": "XI IPS 2",
        "alamat": "Jalan Pelita No. 7",
        "liburan": "kota"
      },{
        "id": 4,
        "nama": "Doni",
        "kelas": "X IPS 1",
        "alamat": "Jalan Melati No. 11",
        "liburan": "pedesaan"
      },{
        "id": 5,
        "nama": "Eka",
        "kelas": "XI MIPA 2",
        "alamat": "Jalan Mawar No. 13",
        "liburan": "gunung"
      }
      
      
      
      
      

]
const seccretkey = 'liburan';

function createToken (arr){
  return jwt.sign(arr, 'liburan', { expiresIn: '1h' }); 
}

function verify (token){
  const valid = jwt.sign(data,token);
  if(!valid) return 'invalid';
  else  return data[valid];
}

const arrray = [];
data.forEach(value =>{
const values  = createToken(value);
arrray.push({value , token});
})

token.forEach(token,index =>{
  console.log(verify(token[index]));
})