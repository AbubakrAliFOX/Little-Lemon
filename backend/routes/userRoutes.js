import express from "express";
const router = express.Router();

//Controllers
import createUser from "../controllers/userController.js";

router
  .route("/register")
  .get(createUser)
//   .post(catchAsync(users.register));

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
