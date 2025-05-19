
import mysql from 'mysql2';


const connection =  mysql.createConnection("mysql://ukp3lpvcl4irvftq:GRsaOHvrBNeFCR9byMIJ@b88afic6i5hd2bhkyczw-mysql.services.clever-cloud.com:3306/b88afic6i5hd2bhkyczw");

connection.connect((err) => {
    if(err){
        console.log(err);
        
    }else{
        console.log("Connected to the database");
        
    }
})


export default connection;