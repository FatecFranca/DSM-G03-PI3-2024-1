import { Router } from "express";
const router = Router();
router.get("/", function (req, res) {
  res.send("Projeto P.I 3º Semestre!");
});
export default router;


