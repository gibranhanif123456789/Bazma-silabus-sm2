const { storeTodo, todoQuestion} = require("./todos");

const addTodo = async() => {
    const title = await todoQuestion("Masukan judul Todo : ")
    const description =await todoQuestion("Masukan Deskripsi todo");
    const status = await todoQuestion("Masukan status todo");
    storeTodo(title, description, status);
}

addTodo();