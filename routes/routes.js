const clinicsRoutes = require("./clinics");

const appRouter = (app) => {
  app.get("/", (req, res) => {
    res.send("Clinics Locator");
  });

  clinicsRoutes(app);
};

module.exports = appRouter;
