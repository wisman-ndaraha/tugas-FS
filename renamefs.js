const fs = require('fs')

console.log('Start reading a file...')

fs.readFile('text.txt', 'utf-8', (err, content) =>{
    if(err){
        console.log('eror happened during reading the file')
        return console.log(err)
    }
    fs.rename('text.txt', 'terserah.txt', (err)=>{
        if(err) console.log("gagal rename!" +err);

        console.log("berhasil")
    })
})

console.log('end of teh file')