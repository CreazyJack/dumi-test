/*
 * @Description: 未添加描述
 * @Date: 2021-05-12 14:40:38
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-17 16:11:30
 */

import React from 'react';
import { OnRemoveType, UploadFileProps, UploadFileStatus } from '.';
import useUploadList from './hooks/useUploadList';
import { AiOutlineDelete, AiOutlineCheck, AiOutlineInfoCircle } from 'react-icons/ai';

import { VscLoading } from 'react-icons/vsc';

export interface UploadListProps {
  fileList: UploadFileProps[];
  onRemove: OnRemoveType;
}

const iconBaseClass = 'upload-list-status-icon';
const iconClass = (suffix: UploadFileStatus) => `${iconBaseClass} ${iconBaseClass}-${suffix}`;
const icons: Record<UploadFileStatus, React.ReactElement> = {
  success: <AiOutlineCheck className={iconClass('success')} />,
  uploading: <VscLoading className={iconClass('uploading')} />,
  failed: <AiOutlineInfoCircle className={iconClass('failed')} />,
  ready: <VscLoading className={iconClass('ready')} />,
};

const UploadList: React.FC<UploadListProps> = (props) => {
  const { onRemove, onCopy } = useUploadList(props);
  return (
    <ul className="simple-upload-list">
      {props.fileList.map((file) => {
        return (
          <li className="upload-list-item" key={file.uid}>
            {file.status ? icons[file.status] : null}
            <span className="upload-list-filename" onClick={onCopy(file)}>
              {file.name}
            </span>
            <AiOutlineDelete className="upload-list-delete-icon" onClick={onRemove(file)} />
          </li>
        );
      })}
    </ul>
  );
};

export default UploadList;
