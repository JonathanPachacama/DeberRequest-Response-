/**
 * Created by visitante on 26/06/2017.
 */
declare var module;
declare var sails;


module.exports = {
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

  optionsValuesWhere:(req,res,next)=>{
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
