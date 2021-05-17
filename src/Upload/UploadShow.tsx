/*
 * @Description: Upload display
 * @Date: 2021-05-15 14:21:35
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-17 16:31:57
 */

import React from 'react';
import Upload, { UploadFileProps } from '.';

const fileList: UploadFileProps[] = [
  {
    name: 'test-file1.xxx',
    uid: '19238479adsjkfhj123',
    size: 339,
    status: 'ready',
  },
  {
    name: 'test-file2.xxx',
    uid: '19238479adsjkfhj133',
    size: 339,
    status: 'uploading',
  },
  {
    name: 'test-file3asdlfjlasdf .xxx',
    uid: '19238479adsjkfhj14',
    size: 339,
    status: 'success',
  },
  {
    name: 'test-file3asdlfjlasdf331355 .xxx',
    uid: 'file3asdlfjlasdf331355',
    size: 339,
    status: 'failed',
  },
];

const UploadShow: React.FC = () => {
  return (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts"
      defaultFileList={fileList}
      onProgress={(percent) => {
        console.log(percent);
      }}
    >
      点击上传
    </Upload>
  );
};

export default UploadShow;
