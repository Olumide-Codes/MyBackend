const product=[
  {
    'id':'1',
    'name':'rice',
    'cat':'food',
    'cost':'N500',
  },
  {
    'id':'2',
    'name':'axe',
    'cat':'tools',
    'cost':'N1250',
  },
  {
    'id':'3',
    'name':'infinix',
    'cat':'phones',
    'cost':'N1100',
  },
];

const myProducts=(req, res)=>{
  const  productId = req.params.id;
  const data = product.find ((val)=>(
    val.id === productId
  ));
  if (data){
    res.json(data);
  } else{
    res.send('invalid input')
  }
};

module.exports={
  myProducts,
};