export enum ErrorCode {
    fileType = '10000',
    fileSize = '10001',
}

export enum ErrorInfo {
    fileType = '文件类型不合法，请重新上传',
    fileSize = '文件大小超出限制',
}


export interface IUploadError {
    errorCode: string,
    errorInfo: any,
}
