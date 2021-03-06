var Transaktion= require('../models/transaktions_models')

var getAllTransaksi = (req, res, next)=>{
  Transaktion.find({})
  .populate('booklist')
  .exec((err, documents)=>{
   if(err){
      res.send(err)
   }else{
      res.send(documents)
   }
  })
}

var getOneTransaksi = (req, res)=>{
 Transaktion.findOne({_id : req.params.id})
 .populate('booklist')
 .exec((err, result)=>{
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
 })
}

var insertTransaksi = (req, res, next)=>{
 var insertTransaksi = new Transaktion({
    memberid : req.body.memberid,
    days : req.body.days,
    out_date : new Date(),
    due_date : new Date(),
    in_date : new Date(),
    fine : req.body.fine,
    booklist : req.body.booklist
 })
 insertTransaksi.save((err, documents)=>{
    if(err){
      res.send(err)
    }else{
      res.send(documents)
    }
 })
}

var deleteTransakti = (req, res, next)=>{
  Transaktion.remove({_id : req.params.id}, (err, documents)=>{
   if(err){
      res.send(err)
   }else{
      res.send(documents)
   }
  })
}


var updateTransaksi = (req, res, next)=>{
  Transaktion.findById(req.params.id, (err, record) => {

   if (err) {
        res.send(err)
   } else {
        Transaktion.update({
           _id: query._id
        }, {
           $set: {
             memberid : req.body.name || record.memberid,
             days : req.body.memberid || record.days,
             out_date : new Date() || record.out_date,
             due_date : new Date() || record.due_date,
             in_date : new Date() || record.in_date,
             fine : req.body.fine || record.fine,
             booklist : req.body.booklist || record.booklist,
             createdAt : record.createdAt,
             updateAt : new Date().toISOString()
           }
     }, (err, documents) => {
           if (err) res.send(err)
           res.send(documents)
        })
   }

  })
}


var addBooklist = (req, res, next)=>{
  Transaktion.findById(req.params.id, (err, data) => {
   if (err){
      res.send(err)
   }
   else{
      var list = data.booklist
      list.push(req.body.booklist)
      Transaktion.updateOne({
        _id: data._id
      }, {
        $set: {
          booklist : list
        }
   }, (err, documents) => {
        if (err) res.send(err)
        res.send(documents)
      })
   }
  })
}


module.exports = {
     getAllTransaksi,
     getOneTransaksi,
     insertTransaksi,
     deleteTransakti,
     updateTransaksi,
     addBooklist
}
