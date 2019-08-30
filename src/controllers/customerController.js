const controller ={};

controller.list=(req, res) => {
    req.getConnection((err,conn)=>{
        conn.query('SELECT *FROM CUSTOMER', (err,customers)=>{
            if(err){
                res.json(err);
            }
            console.log(customers);
            res.render('customers',{
                data: customers
            });
        });
    });
};
controller.save = (req,res) => {
    const data= req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer set ?',[data],(err,customer)=>{
            console.log(customer);
            res.redirect('/');//redirecciona a la misma tabla
        });
    })
};

controller.delete = (req,res) => {
    const { id }=req.params;
  req.getConnection((err, conn)=>{//tiene que recibir la conexion
      conn.query('DELETE FROM customer WHERE id=?',[id],(err,rows)=>{
        res.redirect('/');
      });
  })

};

controller.edit=(req,res)=>{
    const { id }=req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT *FROM customer WHERE id=?', [id],(err,customer)=>{
            console.log(customer);
            res.render('customer_edit', {
                
               data: customer[0]
            });
        });
    });
};

controller.update=(req,res)=>{
    const { id }=req.params; 
    const newCustomer=req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE customer SET ? WHERE id=?',[newCustomer,id],(err,rows)=>{
            res.redirect('/');
        });

    });
};



module.exports = controller;