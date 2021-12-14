const providerDao = require('./provider-dao');
const bcrypt = require("bcrypt");
const Provider = require("./provider-model")

module.exports = (app) => {
    const findAllProviders = (req, res) =>
        providerDao.findAllProviders()
            .then(providers => res.json(providers));

    const findProviderById = (req, res) =>
        providerDao.findProviderById(req.params.id)
            .then(user => res.json(user));
    app.get("/api/providers/:id", findProviderById);


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
        providerDao.findByUsername(req.body)
            .then(async provider => {
                if (provider) {
                    res.sendStatus(404);
                    return;
                }
                providerDao.createProvider(req.body)
                    .then(user => {
                        req.session['profile'] = user;
                        res.json(user)
                    });
                const provide = new Provider(body);
                const salt = await bcrypt.genSalt(10);
                // now we set user password to hashed password
                provide.password = await bcrypt.hash(provide.password, salt);
                provide.save().then((doc) => res.status(201).send(doc));
            })
    }
    const profile = (req, res) =>
        res.json(req.session['profile']);

    const logout = (req, res) =>
        res.send(req.session.destroy());

    app.post('/api/login', login);
    app.post('/api/register2', register);
    app.post('/api/profile', profile);
    app.post('/api/logout', logout);
    app.get('/api/providers', findAllProviders);
    app.get('/api/providers/:id', findProviderById);
    app.put('/api/providers/:id', updateProvider);

};