import React from 'react';
import { OnRemoveType, UploadFileProps } from '.';
export interface UploadListProps {
    fileList: UploadFileProps[];
    onRemove: OnRemoveType;
}
declare const UploadList: React.FC<UploadListProps>;
export default UploadList;
