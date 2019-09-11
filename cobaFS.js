//proses pemanggilan library fs
const fs= require('fs')

console.log('start reading a file...')

//proses readfile text.txt menggunakan library fs
fs.readFile('Terserah.txt', 'uf-8', (err, content)=>{
    //untuk handle error
    if(err){
        console.log('error happened during reading the file')
        return console.log(err)
    }
    //lakukan sesuatu disini kalau berhasil

    //console.log("yeay, berhasil Datanya bro: " +content)
    
})