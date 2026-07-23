const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item.controller");
 
/**
 * @swagger
 * /items:
 *   get:
 *     summary: Mengambil seluruh data item
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: Daftar item berhasil diambil
 */
router.get("/", itemController.getAllItems);
 
/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Mengambil satu item berdasarkan ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Data item ditemukan
 */
router.get("/:id", itemController.getItemById);
 
/**
 * @swagger
 * /items:
 *   post:
 *     summary: Membuat item baru
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item berhasil dibuat
 */
router.post("/", itemController.createItem);
 
router.put("/:id", itemController.updateItem);
router.delete("/:id", itemController.deleteItem);
 
module.exports = router;