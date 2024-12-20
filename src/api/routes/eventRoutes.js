import express from "express"
import { createEventInDatabase, getEvent, getRSVPs, updateRSVP } from "../controllers/eventController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import multer from "multer"

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const eventRouter = express.Router()

eventRouter.post("/create", authMiddleware, upload.array("media"), createEventInDatabase)
eventRouter.get("/:id", getEvent)
eventRouter.post("/rsvp", authMiddleware, updateRSVP)
eventRouter.get("/:eventId/rsvps", getRSVPs)

export {
    eventRouter
}
