const Status = require("../models/Status.model.js");
module.exports.statusController = {
  postStatus: async (req, res) => {
    try {
      const { status } = req.body;
      const data = await Status.create({
        status,
      });
      res.json(`Статус ${data.status} добавлен`);
    } catch (error) {
      res.json(error.toString());
    }
  },
  deleteStatus: async (req, res) => {
    try {
      const { statusId } = req.params;
      await Status.findByIdAndRemove(statusId);
      res.json("Статус удален!");
    } catch (error) {
      res.json(error.toString());
    }
  },
  patchStatus: async (req, res) => {
    try {
      const { statusId } = req.params;
      const { status } = req.body;
      await Status.findByIdAndUpdate(statusId, {
        status,
      });
      res.json("Статус изменен!");
    } catch (error) {
      res.json(error.toString());
    }
  },
  getStatus: async (req, res) => {
    try {
      res.json(Status.find({}));
    } catch (error) {
      res.json(error.toString());
    }
  },
  getStatusId: async (req, res) => {
    try {
      const { statusId } = req.params;
      res.json(Status.findById(statusId));
    } catch (error) {
      res.json(error.toString());
    }
  },
};
