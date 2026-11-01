function errorHandler(error, req, res, next) {
  console.error(error);

  if (error.code === 11000) {
    const field = Object.keys(error.keyValue || {})[0] || "field";
    return res.status(400).json({
      success: false,
      message: `A student with this ${field} already exists`
    });
  }

  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map((item) => item.message);
    return res.status(400).json({ success: false, message: "Validation failed", errors: messages });
  }

  if (error.name === "CastError") {
    return res.status(400).json({ success: false, message: "Invalid value supplied" });
  }

  return res.status(500).json({
    success: false,
    message: "Internal server error"
  });
}

module.exports = errorHandler;
