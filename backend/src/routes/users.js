import { Router } from "express";
const router = Router();
router.get("/", function (req, res) {
  res.send("Fetched all users");
});
router.post("/", function (req, res) {
  res.send("Created a user");
});
router.patch("/", function (req, res) {
  res.send("Updated a user");
});
router.delete("/", function (req, res) {
  res.send("Deleted a user");
});
export default router;
