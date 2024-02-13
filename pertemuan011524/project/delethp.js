const {deleteByID, dataQuestion} = require('./hp');
const delet = async()=>{
    const id = await dataQuestion('Masukan Id hp : ');

    deleteByID(id);
}
delet();