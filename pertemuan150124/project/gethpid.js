const {getById, dataQuestion} = require('./hp');
const get = async()=>{
    const id = await dataQuestion("Masukan id : ");
    getById(id);
};
get();