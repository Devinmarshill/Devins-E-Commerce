const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const productData=await Category.findAll({
      include:[{model:Product}]
    })
    res.status(200).json(productData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const id=req.params.id
    const productData=await Category.findByPk(id , {
      include:[{model:Product}]
    })
    res.status(200).json(productData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const id=req.params.id
    const productData=await Product.create(req.body)
    res.status(200).json(productData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const id=req.params.id
    const productData=await Product.update(req.body,{
      where:{
        id: req.params.id
      }
    })
    res.status(200).json(productData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const id=req.params.id
    const productData=await Product.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(200).json(productData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;
