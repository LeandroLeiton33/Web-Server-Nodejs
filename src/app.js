const {envs} = require('./config/env');
const {startServer} = require('./server/server');

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    });
};


//Esta es una funcion agnostica porq no tiene nombre y autoconvocada porq se llama sola
(async () => {
    main()
})();
