const {Router} = require('express');
const AlunoController = require('./controller/StudentController');

const router = Router();

router.post('/students', AlunoController.createAluno);
router.put('/students/:id', AlunoController.updateAluno);
router.get('/students', AlunoController.listAlunos);
router.get('/students/:id', AlunoController.getIdAluno);
router.delete('/students/:id', AlunoController.deleteAluno);

module.exports = router;