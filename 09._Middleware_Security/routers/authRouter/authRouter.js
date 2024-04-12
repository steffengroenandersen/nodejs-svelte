import { Router } from "express";
const router = Router();

function isAdmin(req, res, next){
  // TODO: Simulate database call

  // assuming they are admin
  req.isAdmin = true;
  req.user = {
    name: "Owner of the house"
  }
  next();
}

router.get("/auth/lockedRoom", isAdmin, (req, res) => {
  res.send({data: "test"});
});

export default router;