const express = require('express')
const router = express.Router()
const ToughtsController = require('../controllers/ToughtController')

const checkAuth = require('../helpers/auth').checkAuth

// adiciona no banco de dados pensamentos
router.get('/add', checkAuth, ToughtsController.createTought)

//editando pagina
router.get('/edit/:id', checkAuth, ToughtsController.updateTought)
router.post('/edit', checkAuth, ToughtsController.updateToughtSave)



router.post('/add', checkAuth,ToughtsController.createToughtSave)

// vai para dashboards
router.get('/dashboards', checkAuth, ToughtsController.dashboards)
router.post('/remove', checkAuth, ToughtsController.removeTought)

// abre pagina inicial //buscando todos os pensamentos no banco de dados
router.get('/', ToughtsController.showToughts)



module.exports = router