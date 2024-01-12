const manage404 = (req, res) => {
    res.status(404).json({
      msj: "404 not found",
    });
  };
  
  module.exports = manage404;