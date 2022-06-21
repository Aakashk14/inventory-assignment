
const inv_db = require('./inventory_model')

function inv_new(item_c,name1,name2,price,ven_name,date){
    return new Promise(resolve=>{
        let tn = new inv_db({
            item_code:item_c,
            Name1:name1,
            Name2:name2,
            Price:price,
            vendor_Name:ven_name,
            Date:date
        })
        tn.save((err)=>{
            if(err) resolve(0)
            resolve(1)
        })
    })
}
function fetch(){
    return new Promise(resolve=>{
        inv_db.find({}).then((data)=>{
            if(data.length!=0){
                resolve(data)
            }else{
                resolve(0)
            }
        })
    })
}

module.exports={
    inv_new:inv_new,
    fetch:fetch
}