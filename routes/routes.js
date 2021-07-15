const clinicsRoutes = require("./clinics");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("Clinics Locator");
  });

  clinicsRoutes(app, fs);
};

module.exports = appRouter;
