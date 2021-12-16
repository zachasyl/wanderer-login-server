const providerDao = require("./provider-dao");
const bcrypt = require("bcrypt");
const Provider = require("./provider-model")
const admin_dao = require("../providers/provider-dao");

module.exports = (app) => {
  const findAllProviders = (req, res) =>
      providerDao.findAllProviders()
          .then(providers => res.json(providers));

  const findProviderById = (req, res) =>
      providerDao.findProviderById(req.params.id)
          .then(user => res.json(user));
  app.get("/api/providers/:id", findProviderById);

    const updateProviderVerified = (req, res) => {
        admin_dao
            .updateProviderVerified(req.params.id)
            .then((status) => res.send(status));
    };
    app.put("/api/provider/:id", updateProviderVerified);

    const deleteProvider = (req, res) => {
        admin_dao.rejectProvider(req.params.id).then((status) => res.send(status));
    };
    app.delete("/api/provider/:id", deleteProvider);

    const findAllUnVerifiedProviders = (req, res) =>
        admin_dao.findAllUnVerifiedProviders()
            .then(providers => res.json(providers));
    app.get('/api/provider/unverified', findAllUnVerifiedProviders);

    const updateProvider = (req, res) =>
      providerDao.updateProvider(req.params.id, req.body)
          .then(status => res.send(status));

  const login = (req, res) => {
    providerDao.findByUsernameAndPassword(req.body)
        .then(provider => {
          if(provider) {
            req.session['profile'] = provider;
            res.json(provider);
            return;
          }
          res.sendStatus(403);
        })
  }

  const register = (req, res) => {
    const body = req.body;
    providerDao.findByUsername(req.body).then(async (provider) => {

      if (provider) {
        res.sendStatus(404);
        return;
      }
      providerDao.createProvider(req.body).then((user) => {
        req.session["profile"] = user;
        res.json(user);
      });
      const provide = new Provider(body);
      const salt = await bcrypt.genSalt(10);
      // now we set user password to hashed password
      provide.password = await bcrypt.hash(provide.password, salt);
      provide.save().then((doc) => res.status(201).send(doc));
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

  const providerRegistration = (req, res) =>
    providerDao.createProvider(req.body).then((r) => res.json(r));

  app.post("/api/registration", providerRegistration);

  app.post("/api/login", login);
  app.post("/api/register2", register);
  app.post("/api/profile", profile);
  app.post("/api/logout", logout);
  app.get("/api/providers", findAllProviders);
  app.get("/api/providers/:id", findProviderById);
  app.put("/api/providers/:id", updateProvider);

};

