import express from "express";
const router = express.Router();

//Controllers
import { createUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";

router.post("/register", createUser);
// .get(createUser)

router.post("/login", loginUser);
// router
//   .route("/login")
//   .get(users.renderLogin)
//   .post(
//     storeReturnTo,
//     passport.authenticate("local", {
//       failureFlash: true,
//       failureRedirect: "/login",
//     }),
//     users.login
//   );

// router.get("/logout", users.logout);

export default router;
