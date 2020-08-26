const skills = [
    {id: 456134, skill: 'Javascript', have: false},
    {id: 452158, skill: 'Express', have: false},
    {id: 348961, skill: 'Windows', have: true},
    {id: 987522, skill: 'Socialization', have: false},
    {id: 486783, skill: 'Trying again', have: true}
  ];
  
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function getOne(id) {
  return skills.find(skillOne => skills.id === parseInt(id));
}

function getAll() {
  return skills;
}

function create(skillin) {
  skills.id = Date.now() % 10000000;
  skills.have = false;
  skills.push(skill);
}

function update(id, updatedSkill) {
  const skillUp = skill.find(t => t.id === parseInt(id));
  // Object.assign(targetObj, mergeObj1, mergeObj2, etc.)
  Object.assign(skill, updatedSkill);
}

function deleteOne(skillId) {
  const idx = todos.findIndex(skill => skill.id === parseInt(skillId));
  skill.splice(idx, 1);
}