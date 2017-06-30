<<<<<<< HEAD
/**
 * Created by visitante on 26/06/2017.
 */
/*Deber */
/* 1 Ejemplo Accept*/
accept: function (req, res) {
  sails.log.info(req.accepted);
  if (req.accepted) {
    return res.json({saludo: "hola"})
  } else {
    return res.send("Error en metodo")
  }
},

/* 2 Ejemplo AcceptCharset*/
acceptcharset: function (req, res) {
  sails.log.info(req.acceptsCharsets);
  req.acceptsCharsets;
  return res.send("Aceptado");
},

/* createRequest: function  (charset) {
 return {
 headers: {
 'accept-charset': charset
 }
 }
 },

 acce: function () {

 var req = createRequest('utf-8, iso-8859-1;q=0.2, utf-7;q=0.5');
 var accept = accepts(req);
 assert.deepEqual(accept.charsets(), ['utf-8', 'utf-7', 'iso-8859-1'])

 }*/

/* 3 Ejemplo AcceptedLanguages*/

/* 4 Ejemplo Boddy*/
metodoReqboddy: function (req, res) {
  sails.log.info(res.send(req.boddy));
},

/* 5 Ejemplo Cookies*/
metodoCokies: function (req, res){
  res.cookie('Nombre', 'Lilian', {signed:false} );
  res.cookie('Edad',24,{signed:false});
  res.send(req.cookies);
},

/* 6 Ejemplo Fresh*/


/*  7 Ejemplo Headers*/
metodoReqheaders: function (req,res) {
  sails.log.info(res.send(req.headers));

},

/* 8 Ejemplo Host*/
metodoReqHost: function (req,res) {
  sails.log.info(res.send(req.host));
},

/* 9 Ejemplo Ip*/
metodoReqIp : function (req,res) {
  sails.log.info(res.send(req.IPv4));
},

/*10 Ejemplo Ips*/
metodoReqIps : function (req,res) {
  sails.log.info(res.send(req.ips));
},

/*11 Ejemplo isSocket*/
metodoReqSocket: function (req, res) {
  if (req.isSocket) {
    return res.send("Se utilizo un socket para esta solicitud");
  }
  else {
    return res.send("Es una peticion Http");
  }
},

/*12 Eejmplo Method*/
metodoReqMethod: function (req, res) {
  sails.log.info(req.method);
  if (req.method == "POST") {
    return res.json({ saludo: "hola" });
  }
  else {
    return res.send("Error en metodo");
  }
},


/* 13 Ejemplo Options*/



/* 14 Params */
metodoReqParams: function (req, res) {
  sails.log.info(res.send(req.params));
},

/* 15 Path*/
metodoReqPath: function (req,res) {
  res.send(req.path);
},

/* 16 Protocol*/
metodoReqProtocol: function (req,res) {
  switch (req.protocol) {
    case 'http':
      return res.send(" this is an HTTP request");
      break;
    case 'https':
      return res.send("this is a secure HTTPS request");
      break;
  }
}
}


=======
module.exports = {
    optionsValues: function (req, res, next) {
        //req.options.values
        //Los valores por defecto para los planos createy updateacciones.
        sails.log.info(req.method);
        if (req.session.user) {
            // Use un existente req.options.values, o inicialicelo a un objeto vacio
            req.options.values = req.options.values || {};
            // Setear el default `name` para "crear" y "actualizar" planos
            req.options.values.name = req.session.user.name;
        }
        return next();
    },
    optionsValuesWhere: function (req, res, next) {
        // req.options.values.where
        if (req.session.user) {
            // Use un existente req.options.where, o inicialicelo a un objeto vacio
            req.options.where = req.options.where || {};
            // Setear el default `userId` para "buscar" y "actualizar" planos
            req.options.where.userId = req.session.user.id;
        }
        return next();
    }
};
>>>>>>> origin/master
