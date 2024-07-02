const {Router} = require("express");
const { getToDo,saveToDo, deleteToDo, updateToDo } = require("../controller/ToDoController");

const router = Router()
router.get("/get",getToDo);
 
router.post("/save",saveToDo);
router.put("/update/:id",updateToDo);
router.delete("/delete/:id",deleteToDo);
module.exports =router