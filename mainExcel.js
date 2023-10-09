const xml2js = require('xml2js');
const fs = require('fs');

fs.readFile(__dirname + '/xml.xml', function(err,data){
    if(err) throw new Error(err);

    const parse = new xml2js.Parser();
    parse.parseStringPromise(data)
    .then((res)=>{
        const conso = res.eSocial.retornoProcessamentoDownload;
        console.log(conso)
    })
    .catch((err)=>{
        console.log(err)
    });
});