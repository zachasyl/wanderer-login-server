const providerDao = require("./provider-dao");

module.exports = (app) => {
  const findAllProviders = (req, res) =>
    providerDao.findAllProviders().then((providers) => res.json(providers));

  const findProviderById = (req, res) =>
    providerDao.findProviderById(req.params.id).then((user) => res.json(user));
  app.get("/api/providers/:id", findProviderById);

  const updateProvider = (req, res) =>
    providerDao
      .updateProvider(req.params.id, req.body)
      .then((status) => res.send(status));

  const login = (req, res) => {
    providerDao.findByUsernameAndPassword(req.body).then((provider) => {
      if (provider) {
        req.session["profile"] = provider;
        res.json(provider);
        return;
      }
      res.sendStatus(403);
    });
  };

  const register = (req, res) => {
    providerDao.findByUsername(req.body).then((provider) => {
      if (provider) {
        res.sendStatus(404);
        return;
      }
      providerDao.createProvider(req.body).then((user) => {
        req.session["profile"] = user;
        res.json(user);
      });
    });
  };

  const registration = (req, res) => {
    console.log(req.body);
    providerDao.createProvider(req.body).then((user) => {
      req.session["profile"] = user;
      res.json(user);
    });
  };

  const profile = (req, res) => res.json(req.session["profile"]);

  const logout = (req, res) => res.send(req.session.destroy());

  app.post("/api/registration", registration);
  app.post("/api/login", login);
  app.post("/api/register2", register);
  app.post("/api/profile", profile);
  app.post("/api/logout", logout);
  app.get("/api/providers", findAllProviders);
  app.get("/api/providers/:id", findProviderById);
  app.put("/api/providers/:id", updateProvider);
};
