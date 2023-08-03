const express = require("express")

const router = express.Router()

const { getPeople , createPerson ,upadatePerson, deletePerson}= require('../controllers/people')

router.get("/", getPeople);
  
  
  
  
router.post('/', createPerson )
   
  
  // modify data
  
  
router.put('/:id', upadatePerson )
  
  
  
  
  
router.delete('/:id', deletePerson)
  
  
  module.exports = router
  
  