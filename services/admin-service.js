const admin_dao = require("../data/provider-dao");

module.exports = (app) => {
  const updateProvider = (req, res) => {
    admin_dao
      .updateProviderVerified(req.params.id)
      .then((status) => res.send(status));
  };

  const getAllProviders = (req, res) => {
    admin_dao.getAllProviders().then((providers) => res.json(providers));
  };

  const deleteProvider = (req, res) => {
    admin_dao.rejectProvider(req.params.id).then((status) => res.send(status));
  };

  app.get("/api/provider", getAllProviders);
  app.put("/api/provider/:id", updateProvider);
  app.delete("/api/provider/:id", deleteProvider);
};

// Need to decide what to return to the client side
