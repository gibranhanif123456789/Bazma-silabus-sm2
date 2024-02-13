const { add,  questionDataValidation  } = require("./hp");

const adddata = async () => {
    const merek = await  questionDataValidation ("Masukan merek Hp anda : ");
    const model = await  questionDataValidation  ("Masukan model Hp anda : ")
    const chipset = await  questionDataValidation  ("Masukan jenis Chipset Hp anda : ")
    const baterai = await  questionDataValidation  ("Masukan  baterai Hp anda (dengan satuan mAh) : ")
    const ram = await  questionDataValidation  ("Masukan  ram Hp anda : ");
    const rom = await  questionDataValidation  ("Masukan  rom Hp anda : ");
    const kamera = await  questionDataValidation  ("Masukan kualitas kamera Hp anda : ");
    const resolusi = await  questionDataValidation  ("masukan  kualitas resolusi Hp anda : " );
    const sistemoprasi = await  questionDataValidation  ("Masukan jenis sistem Oprasi Hp anda : ")

    add(merek, model, chipset, baterai, ram, rom, kamera, resolusi, sistemoprasi);
}

adddata();
