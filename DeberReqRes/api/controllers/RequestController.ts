/**
 * Created by visitante on 26/06/2017.
 */
declare var module;
declare var sails;


module.exports = {
  /* 1 Ejemplo Accept*/
  metodoaccepted:(req, res)=>{
    sails.log.info(req.accepted);
    if (req.accepted) {
      return res.json({saludo: "hola"})
    } else {
      return res.send("Error en metodo")
    }
  },

  /* 2 Ejemplo AcceptCharset*/
  metodoacceptcharset:(req, res)=>{
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
  metodoReqboddy: (req, res)=>{
    res.json(req.body);
    //sails.log.info(res.send(req.boddy));
  },

  /* 5 Ejemplo Cookies*/
  metodoCokies: (req, res)=>{
    res.cookie('Nombre', 'Lilian', {signed:false} );
    res.cookie('Edad',24,{signed:false});
    res.send(req.cookies);
  },

  /* 6 Ejemplo Fresh*/

  metodoReqFresh: (req,res)=> {
    res.send(req.fresh);
  },
  /*  7 Ejemplo Headers*/
  metodoReqheaders:(req,res)=>{
    sails.log.info(res.send(req.headers));

  },

  /* 8 Ejemplo Host*/
  metodoReqHost:(req,res)=>{
    sails.log.info(res.send(req.host));
  },

  /* 9 Ejemplo Ip*/
  metodoReqIp :(req,res)=>{
    res.send(req.ip);
  },

  /*10 Ejemplo Ips*/
  metodoReqIps :(req,res)=>{
    sails.log.info(res.send(req.ips));
  },

  /*11 Ejemplo isSocket*/
  metodoReqSocket:(req, res)=>{
    if (req.isSocket) {
      return res.send("Se utilizo un socket para esta solicitud");
    }
    else {
      return res.send("Es una peticion Http");
    }
  },

  /*12 Eejmplo Method*/
  metodoReqMethod:(req, res)=>{
    sails.log.info(req.method);
    if (req.method == "POST") {
      return res.json({ saludo: "hola" });
    }
    else {
      return res.send("Error en metodo");
    }
  },


  /* 13 Ejemplo Options*/

  metodoReqOptions :(req,res)=>{
    sails.log.info(res.send(req.options));
  },
  /* 14 Ejemplo optionsValues*/
  optionsValues:(req,res,next)=>{
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
  /* 14 Ejemplo optionsValuesWhere*/
  optionsValuesWhere:(req,res,next)=>{
    // req.options.values.where

    if (req.session.user) {
      // Use un existente req.options.where, o inicialicelo a un objeto vacio
      req.options.where = req.options.where || {};

      // Setear el default `userId` para "buscar" y "actualizar" planos
      req.options.where.userId = req.session.user.id;

    }
    return next();
  },

  /* 13 Ejemplo Options*/
  /* metodoOptions1: function filterByUser(req, res, next) {
   if (req.session.me) {
   req.options.where = {
   userId: req.session.me
   }
   return next();
   },
   /* 14 Params */
  metodoReqParams:(req, res , nombre)=>{
    //sails.log.info(res.send(req.params));
    res.send(req.params.nombre);

  },

  /* 15 Path*/
  metodoReqPath: (req,res)=>{
    res.send(req.path);
  },

  /* 16 Protocol*/
  metodoReqProtocol: (req,res)=> {
    if (req.protocol == 'http') {
      return res.send(" this is an HTTP request");
    } else if (req.protocol == 'https') {
      return res.send("this is a secure HTTPS request");
    }
  },
  /* 17 Query*/
//http://localhost:1337/Request/metodoReqQuery?q=tobi+ferret
  metodoReqQuery: (req, res, q,order,shoe,color,type)=> {
    sails.log.info(req.query);
    //http://localhost:1337/Request/metodoReqQuery?q=tobi+ferret&order=desc&shoe[color]=blue&shoe[type]=converse
    // return res.send(req.q );
    // return res.send(req.order );
    // return res.send(req.shoe.color );
    return res.send(req.shoe.type );

  },
  /* 18 Secure*/
  metodoReqSecure: (req,res) =>{
    return res.send(req.secure);
    //http://localhost:1337/Request/metodoReqSecure
    //imprime false porque solo es http no tiene seguridad esta ruta
  },
  /* 19 req.signedCookies*/
  metodoReqSignedCookies: (req,res)=> {

    res.cookie('Nombre', 'Lilian', {signed:false} );
    res.cookie('Edad',24,{signed:true});
    //res.send(req.cookies);
    return res.send(req.signedCookies.Edad);
  },
  /* 20 req.socket*/
  metodoReqSocket2:(req,res)=>{
    if (req.isSocket) {
      return res.send(' Low-level Socket.io methods and properties accessible on req.socket.');
    }
    else {
      return res.send(' This is not a request from a Socket.io client, so req.socket, may or may not exist.  If this is an HTTP request, req.socket is actually the underlying TCP socket.');
    }

  },

  /* 21 req.subdomains*/
  metodoReqsubdomains:(req,res) =>{
    return res.send(req.subdomains);
  },

  /* 22 req.subdomains*/

  metodoReqUrl: (req,res) =>{
    return res.send(req.url);
  },

  /* 23 req.wantsJason*/

  metodoReqwantsJson:(req,res)=>{

    return res.json(req.wantsJSON);
  },

  /* 24 req.subdomains*/
  metodoReqxhr:(req,res)=> {
    return res.send(req.xhr);
  }

};
