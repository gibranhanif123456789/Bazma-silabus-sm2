const {deletByID, todoQuestion} = require('./todos');
const delet = async()=>{
    const id =await todoQuestion('masukan id todo : ');
   
deletByID(id);

}
delet();