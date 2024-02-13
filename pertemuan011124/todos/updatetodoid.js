const {updateBYId, todoQuestion} = require('./todos');

const update = async()=>{
    const id =await todoQuestion('masukan id todo : ');
    const title = await todoQuestion("Masukan judul Todo : ")
    const description =await todoQuestion("Masukan Deskripsi todo : ");
    const status = await todoQuestion("Masukan status todo : ");
updateBYId(id, {title, description, status});

}
update();