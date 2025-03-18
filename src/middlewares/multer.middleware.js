import multer from 'multer'
import fs from "fs"
import path from "path"

// Create the directory if it doesn't exist
const uploadDir = './public/temp'
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}
//This code checks if the specified directory exists, and if not, creates it along with any necessary parent directories. The recursive: true option ensures that all directories in the path are created as needed

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname)
  }
})

export const upload = multer({ storage: storage })