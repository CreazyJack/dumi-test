import { ChangeEvent } from 'react';
import { UploadFileProps, UploadProps } from '../';
declare const useUpload: (props: UploadProps) => {
    children: {};
    fileInputRef: import("react").RefObject<HTMLInputElement>;
    onClick: () => void | undefined;
    onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onRemove: (file: UploadFileProps) => void;
    fileList: UploadFileProps[];
};
export default useUpload;
