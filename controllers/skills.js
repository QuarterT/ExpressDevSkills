const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/shows', {
     skillOne: Skill.getOne(req.params.id)  
    }); 
} 

function newSkill(req, res) {
    res.render('skills/new'); 
} 

function create(req, res) {
    Skill.create(req.body);
    res.redirect("/skills");
}
function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
  }
  
  function edit(req, res) {
    const skillChange = Skill.getOne(req.params.id);
    res.render('skills/edit', { skill });
  }
  
  function deleteSkill(req, res) {
    // Use the model to delete the to-do
    Skill.deleteOne(req.params.id);
    // Redirect because we changed data
    res.redirect('/skills');
  }