const _ = require("lodash");
const { getDentalClinics, getVetClinics } = require("../utils/data");

const clinicsRoutes = (app, fs) => {
  app.get("/api/clinics", async (req, res) => {
    const { name, state, date } = req.query;

    let allClinics = _.concat(await getDentalClinics(), await getVetClinics());

    if (name) {
      allClinics = allClinics.filter((r) =>
        _.includes(_.toLower(_.trim(r.name)), _.toLower(_.trim(name)))
      );
    }

    res.send(allClinics);
  });
};

module.exports = clinicsRoutes;
