import { Router } from 'express';

import { success } from '../network/response';
import Remote from '../store/remote-mysql';

const router = Router();

router.get('/:tabla', list);
router.get('/:tabla/:id', get);
router.post('/:tabla', insert);
router.put('/:tabla', update);

async function list (req, res, next) {
  Remote.list(req.params.tabla).then((result) => {
    success(req, res, result, 200);
  }).catch(next);
}
async function get (req, res, next) {
  Remote.get(req.params.tabla, req.params.id).then((result) => {
    success(req, res, result, 200);
  }).catch(next);
}
async function insert (req, res, next) {
  Remote.insert(req.params.tabla, req.body).then((result) => {
    success(req, res, result, 200);
  }).catch(next);
}
async function update (req, res, next) {
  Remote.update(req.params.tabla, req.body).then((result) => {
    success(req, res, result, 200);
  }).catch(next);
}

export default router;
