//Response('res')
module.exports = {
    //1 es.attachment()
    attachment: function (req, res) {
        res.attachment('path/to/logo.png');
        return res.send('Cookie seteada');
    },
    //2 res.badRequest()
    badRequest: function (req, res) {
        if (req.param('amount') < 500)
            return res.badRequest('Superado el límite de transacciones. Inténtalo de nuevo con una cantidad inferior a $ 500.');
    },
    //3 res.cookie()
    cookie: function (req, res) {
        res.cookie('pachacama', 24, { maxAge: 900000, httpOnly: true }); //con limite de tiempo
        res.cookie('cart', { items: [1, 2, 3] }, { maxAge: 900000 }); //pasando un objeto
        res.cookie('nombre', 'pool', { signed: true }); //firmada
        res.cookie('name', 'tobi', {
            domain: '.example.com',
            path: '/',
            secure: true
        });
        res.cookie('rememberme', '1', {
            expires: new Date(Date.now() + 900000),
            httpOnly: true
        });
        return res.send('Cookie seteada');
    },
    //4 res.clearCookie()
    clearCookie: function (req, res) {
        res.clearCookie('pachacama', { path: '/' });
        res.clearCookie('cart', { path: '/' });
        res.clearCookie('nombre', { path: '/' });
        res.clearCookie('name', { path: '/' });
        res.clearCookie('rememberme', { path: '/' });
        return res.send('Cookies eliminadas');
    },
    //5 res.created()
    created: function (req, res) {
        // Este método se utiliza para enviar un 201 respuesta ( "Creado") de vuelta al cliente que indica que uno o más recursos se han creado con éxito.
        return res.created('Nuevo widget creado.');
    },
    //6 res.forbidden ()
    forbidden: function (req, res) {
        //Este método se utiliza para enviar un 403 respuesta ( "Prohibido") de vuelta al cliente indicando que la solicitud no está permitido.
        if (!req.session.canEditSalesforceLeads) {
            return res.forbidden('Se requiere acceso de escritura');
        }
    },
    //7 res.set()
    set: function (req, res) {
        res.set({ 'cabecera': 'hola',
            'Cabecera2': '12345',
            'Cabecera3': 1234567 });
        return res.send('Cabecera añadida');
    },
    //8 res.get ()
    get: function (req, res) {
        // Devuelve el valor actual de la cabecera de respuesta especificado ( header).
        res.set('cabecera', 'hola');
        return res.send(res.get('cabecera'));
    },
    //9 res.json ()
    json: function (req, res) {
        // Envía una respuesta JSON
        //return res.json(null);
        //return res.json({ usuario: 'Jonathan' });
        return res.json(500, { error: 'message' });
    },
    //10 res.jsonp ()
    jsonp: function (req, res) {
        return res.jsonp({
            users: [{
                    nombre: 'Jonathan',
                    id: 1
                }, {
                    nombre: 'Paul',
                    id: 2
                }]
        });
    },
    //11 res.location()
    location: function (req, res) {
        res.location('http://ejemplo9.com');
        return res.json('Locacion establecida');
    },
    //12 res.negotiate()
    negotiate: function (req, res) {
        // Añadir cumplaños de Spuncher a una base de datos:
        Mascota.update({ nombre: 'Spuncher' })
            .set({ birthday: new Date('01/01/2010') })
            .exec(function (err, Spuncher) {
            if (err)
                return res.negotiate(err);
            return res.ok(Spuncher);
        });
    },
    //13 res.notFound()
    notFound: function (req, res) {
        // Añadir cumplaños de Spuncher a una base de datos:
        Mascota.findOne()
            .where({ nombre: 'Rocky' })
            .exec(function (err, Rocky) {
            if (err)
                return res.serverError(err);
            if (!Rocky)
                return res.notFound(undefined, 'Mascota/la-mascota-ha-sido-movida');
            // ...
        });
    },
    //14 res.ok()
    ok: function (req, res) {
        //Enviar una respuesta 200 ( "OK") de vuelta al cliente.
        return res.ok({
            nombre: 'Jonathan',
            occupation: 'desarrollador'
        });
    },
    //15 res.redirect()
    redirect: function (req, res) {
        //Redirigir al usuario-agente solicitante a la dirección URL absoluta o relativa dada.
        return res.redirect('http://google.com');
    },
    //16 res.send()
    send: function (req, res) {
        //Enviar una respuesta sencilla. statusCodepor defecto es 200 ( "OK").
        //return res.send({ usuario: 'jonathan' });
        //return res.send([1,2,3]);
        //return res.send('some html');
        //return res.send(200);
        // return res.send(500, { error: 'Algo salio mal' });
        return res.send(404, 'Lo siento, No lo pudimos encontarr!');
    },
    //17 res.serverError()
    serverError: function (req, res) {
        //Envía un 500 respuesta ( "Error del servidor") de vuelta al cliente que indica que algún tipo de error del servidor se produjo (es decir, el error no es culpa del agente de usuario que solicita).
        // return res.serverError(
        //   'No se pudo contactar con la Pagina',
        //   'Response/serverError/editar' //poner la ruta de una pagina personalizada
        // );
        return res.serverError('No se pudo contactar con la Pagina');
    },
    //18 res.status()
    status: function (req, res) {
        //Ajuste el código de estado de esta respuesta.
        res.status(404);
        return res.send('oops');
    },
    //19 res.type()
    type: function (req, res) {
        //Establece la cabecera de respuesta "Content-Type" a la especificada type.
        res.set('Cabecera', 'hola');
        res.type('json');
        return res.send('Cobecera  cambiada a json');
    },
    //20 res.view()
    view: function (req, res) {
        //Responder con una página HTML.
        return res.view('/Response/view');
    },
};
