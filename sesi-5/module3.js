function jumlahSks(sks, bill){
    console.log(`Jumlah SKS yang ditempuh (max = 24) : ${sks}`);

    let biaya = sks * bill; 
    console.log(`Biaya yang perlu dikeluarkan : ${biaya}`);
}

const sks = 24; 
const bill = 100000; 
jumlahSks(sks, bill);

module.exports = {jumlahSks};