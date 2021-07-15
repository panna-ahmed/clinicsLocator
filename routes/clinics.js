const clinicsRoutes = (app, fs) => {
  const dataPath = "./data/dental-clinics.json";

  // read file
  app.get("/clinics", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = clinicsRoutes;
