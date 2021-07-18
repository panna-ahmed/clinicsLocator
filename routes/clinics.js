const _ = require("lodash");
const Extraction = require("../providers/Extraction");
const handleFilters = require("./filters/clinicfilter");

const clinicsRoutes = (app) => {
  app.get("/api/clinics", async (req, res) => {
    let allClinics = await new Extraction().getClinics();

    allClinics = handleFilters(allClinics, req.query);
    res.send(allClinics);
  });
};

module.exports = clinicsRoutes;
