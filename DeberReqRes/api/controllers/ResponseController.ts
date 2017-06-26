/**
 * Created by visitante on 26/06/2017.
 */
declare var module;
declare var sails;
declare var Mascota;
//Response('res')
module.exports = {
  cookie:(req,res)=>{
    //res.cookie()
    res.cookie('pachacama', 24, { maxAge: 900000, httpOnly: true });//con limite de tiempo
    res.cookie('cart', { items: [1,2,3] }, { maxAge: 900000 }); //pasando un objeto
    res.cookie('nombre', 'pool', { signed: true });//firmada
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
  clearCookie:(req,res)=>{
    //res.clearCookie()
    res.clearCookie('pachacama', { path: '/' });
    res.clearCookie('cart', { path: '/' });
    res.clearCookie('nombre', { path: '/' });
    res.clearCookie('name', {path: '/'});
    res.clearCookie('rememberme', { path: '/' });
    return res.send('Cookies eliminadas');
  },
  created:(req,res)=>{
    //res.created()
    // Este método se utiliza para enviar un 201 respuesta ( "Creado") de vuelta al cliente que indica que uno o más recursos se han creado con éxito.
    return res.created('Nuevo widget creado.');
  },
  forbidden:(req,res)=>{
    // res.forbidden ()
    //Este método se utiliza para enviar un 403 respuesta ( "Prohibido") de vuelta al cliente indicando que la solicitud no está permitido.
    if ( !req.session.canEditSalesforceLeads ) {
      return res.forbidden('Se requiere acceso de escritura');
    }
  },
  set:(req,res)=>{
    // res.set()
    res.set({'cabecera':'hola',
      'Cabecera2': '12345',
      'Cabecera3': 1234567});
    return res.send('Cabecera añadida');
  },
  get:(req,res)=>{
    // res.get ()
    // Devuelve el valor actual de la cabecera de respuesta especificado ( header).
    res.set('cabecera', 'hola');
    return res.send(res.get('cabecera'))
  },
  json:(req,res)=>{
    // res.json ()
    // Envía una respuesta JSON
    //return res.json(null);
    //return res.json({ usuario: 'Jonathan' });
    return res.json(500, { error: 'message' })
  },
  jsonp:(req,res)=>{
    // res.jsonp ()
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
  location:(req,res)=>{
    //res.location()
    res.location('http://ejemplo9.com');
    return res.json('Locacion establecida');
  },
  negotiate:(req,res)=>{
    //res.negotiate()
    // Añadir cumplaños de Spuncher a una base de datos:
    Mascota.update({nombre: 'Spuncher'})
      .set({birthday: new Date('01/01/2010')})
      .exec(function (err, Spuncher) {
        if (err) return res.negotiate(err);
        return res.ok(Spuncher);
      });
  },
  notFound:(req, res)=>{
    //res.notFound()
    // Añadir cumplaños de Spuncher a una base de datos:
    Mascota.findOne()
      .where({nombre: 'Rocky'})
      .exec(function(err, Rocky) {
      if (err) return res.serverError(err);
      if (!Rocky) return res.notFound(undefined,'Mascota/la-mascota-ha-sido-movida');
      // ...
    })
  },
  ok:(req,res)=>{
    // res.ok()
    //Enviar una respuesta 200 ( "OK") de vuelta al cliente.
    return res.ok({
      nombre: 'Jonathan',
      occupation: 'desarrollador'
    });
  },
  redirect:(req,res)=>{
    // res.redirect()
    //Redirigir al usuario-agente solicitante a la dirección URL absoluta o relativa dada.
    return res.redirect('http://google.com');
  },
  send:(req,res)=>{
    // res.send()
    //Enviar una respuesta sencilla. statusCodepor defecto es 200 ( "OK").
    //return res.send({ usuario: 'jonathan' });
    //return res.send([1,2,3]);
    //return res.send('some html');
    //return res.send(200);
    // return res.send(500, { error: 'Algo salio mal' });
    return res.send(404, 'Lo siento, No lo pudimos encontarr!');
  },
  serverError:(req,res)=>{
    // res.serverError()
    //Envía un 500 respuesta ( "Error del servidor") de vuelta al cliente que indica que algún tipo de error del servidor se produjo (es decir, el error no es culpa del agente de usuario que solicita).
    // return res.serverError(
    //   'No se pudo contactar con la Pagina',
    //   'Response/serverError/editar' //poner la ruta de una pagina personalizada
    // );
    return res.serverError('No se pudo contactar con la Pagina');
  },

};
