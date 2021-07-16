const { getDentalClinics, getVetClinics } = require("../utils/data");
const { contains } = require("../lib");

const clinicsRoutes = (app, fs) => {
  app.get("/api/clinics", async (req, res) => {
    const { name, state, date } = req.query;

    let allClinics = _.concat(await getDentalClinics(), await getVetClinics());

    if (name) {
      allClinics = allClinics.filter((r) => contains(r.name, name));
    }

    res.send(allClinics);
  });
};

module.exports = clinicsRoutes;
