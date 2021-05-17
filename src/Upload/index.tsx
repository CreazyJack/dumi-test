/*
 * @Description: upload
 * @Date: 2021-05-11 14:05:14
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-15 14:44:26
 */

import React, { FC, ReactNode } from 'react';
import Button from '../Button';
import useUpload from './hooks/useUpload';
import UploadList from './UploadList';
import './styles/index.less';

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'failed';

export type OnRemoveType = (file: UploadFileProps) => void;

export interface UploadFileProps {
  uid: string;
  name: string;
  size: number;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: unknown;
  error?: unknown;
}

export interface UploadProps {
  children?: ReactNode;
  action?: string;
  defaultFileList?: UploadFileProps[];
  onChange?: (file: UploadFileProps) => void; // 文件上传成功后调用
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percent: number, file: UploadFileProps) => void;
  onSuccess?: (data: unknown, file: UploadFileProps) => void; // 文件上传成功后调用
  onError?: (error: unknown, file: UploadFileProps) => void;
  onRemove?: OnRemoveType;
}

const Upload: FC<UploadProps> = (props) => {
  const { children, fileInputRef, onClick, onFileChange, onRemove, fileList } = useUpload(props);
  return (
    <div>
      <Button onClick={onClick}>{children}</Button>
      <input style={{ display: 'none' }} type="file" ref={fileInputRef} onChange={onFileChange} />
      <UploadList fileList={fileList} onRemove={onRemove} />
    </div>
  );
};

export default Upload;
