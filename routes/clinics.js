const _ = require("lodash");
const Extraction = require("../providers/Extraction");

const { contains } = require("../lib");

const clinicsRoutes = (app, fs) => {
  app.get("/api/clinics", async (req, res) => {
    const { name, state, date } = req.query;

    let extraction = new Extraction();
    let allClinics = await extraction.getClinics();

    if (name) {
      allClinics = allClinics.filter((r) => contains(r.name, name));
    }

    res.send(allClinics);
  });
};

module.exports = clinicsRoutes;
