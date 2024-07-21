import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer'
import { v4 } from 'uuid';

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void


export const fileStorage = multer.diskStorage({
    destination: (
        request: Request,
        file: Express.Multer.File,
        callback: DestinationCallback
    ): void => {
        callback(null, 'uploads/')
    },

    filename: (
        req: Request,
        file: Express.Multer.File,
        callback: FileNameCallback
    ): void => {
        const s = v4();
        callback(null, `${s}-${file.originalname}`);
    }
});


export const filterImg = (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
): void => {
    // callback(null, true);
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        callback(null, true)
    } else {
        callback(null, false)
    }
}


export const allFilesUpload = (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
): void => {
    callback(null, true);
}

export const useMulterImage = multer({ storage: fileStorage, fileFilter: filterImg, });
export const useMulter = multer({ storage: fileStorage, fileFilter: allFilesUpload, });