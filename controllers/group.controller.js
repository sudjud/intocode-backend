const Group = require('../models/Group.model');
const Student = require('../models/Student.model')

module.exports.groupController = {
  getGroups: async (req, res) => {
    try {
      res.json(await Group.find({}));
    } catch (e) {
      res.json(e);
    }
  },
  addGroups: async (req, res) => {
    try {
      const groups = await Group.find({});
      await Group.create({
        grade: groups.length + 1,
        finished: req.body.finished,
        currentWeek: req.body.currentWeek
      })
      res.json(`Добавлена ${groups.length + 1}-ая группа`)
    } catch (e) {
      res.json(e);
    }
  },
  groupByWeek: async (req, res) => {
    try {
      res.json(await Group.find({
        currentWeek: req.params.week
      }))
    } catch (e) {
      res.json(e)
    }
  },
  getFinishedGroups: async (req, res) => {
    try {
      res.json(await Group.find({
        finished: true
      }))
    } catch (e) {
      res.json(e);
    }
  },
  haveOfferPercent: async (req, res) => {
    try {
      const recievedOffer = await Student.find(
        { grade: req.params.id },
        { status: '62b44e74a23eaa4c0a1b6785' }
        ).length;
      const allStudents = await (await Student.find({})).length;
      res.json((recievedOffer / allStudents) * 100 )
    } catch (e) {
      res.json(e);
    }
  },
  getGroup: async (req, res) => {
    try {
      res.json(await Group.findById(req.params.id))
    } catch (e) {
      res.json(e)
    }
  },
  updateGroup: async (req, res) => {
    try {
      await Group.findByIdAndUpdate(req.params.id, {...req.body})
      res.json('Группа изменена')
    } catch (e) {
      res.json(e)
    }
  }
};