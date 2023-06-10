const express= require("express");
const { getUser , updateUser}= require("../controllers/user.js");

const router = express.Router()

router.get("/find/:userId", getUser)
router.put("/", updateUser)


export default router