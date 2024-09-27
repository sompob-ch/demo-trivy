const express = require('express');
const {
  createAccount,
  getAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
} = require('../controllers/accountController');

const router = express.Router();

router.post('/', createAccount);
router.get('/', getAccounts);
router.get('/:id', getAccountById);
router.put('/:id', updateAccount);
router.delete('/:id', deleteAccount);

module.exports = router;
