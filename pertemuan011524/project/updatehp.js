const {updateById, dataQuestion, rl} = require('./hp');


const update = async ()=>{
        let idValid = false;
        let id;
      
        while (!idValid) {
          id = await dataQuestion("Masukkan ID yang ingin diupdate: ");
          idValid = updateById(id, {});
      
          if (!idValid) {
            console.log(`ID ${id} tidak ditemukan. Silakan coba lagi.`);
          }
        }
    const merek = await  dataQuestion ("Masukan merek Hp anda : ");
    const model = await  dataQuestion  ("Masukan model Hp anda : ")
    const chipset = await  dataQuestion  ("Masukan jenis Chipset Hp anda : ")
    const baterai = await  dataQuestion  ("Masukan  baterai Hp anda (dengan satuan mAh) : ")
    const ram = await  dataQuestion  ("Masukan  ram Hp anda : ");
    const rom = await  dataQuestion  ("Masukan  rom Hp anda : ");
    const kamera = await  dataQuestion  ("Masukan kualitas kamera Hp anda : ");
    const resolusi = await  dataQuestion  ("masukan  kualitas resolusi Hp anda : " );
    const sistemoprasi = await  dataQuestion  ("Masukan jenis sistem Oprasi Hp anda : ")
    updateById(id, {merek, model, chipset, baterai, ram, rom, kamera, resolusi, sistemoprasi});
    console.log('Proses update selesai.');
    rl.close();
}
update();