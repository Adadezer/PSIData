const uploadFileController = async (req, res) => {
  const dataFile = req.file;
  await res.status(200).json(dataFile);
};

module.exports = { uploadFileController };
