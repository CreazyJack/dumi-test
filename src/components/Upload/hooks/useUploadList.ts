/*
 * @Description: UploadList hook
 * @Date: 2021-05-12 14:43:50
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-05-17 15:23:19
 */

import { UploadFileProps } from '..';
import { UploadListProps } from '../UploadList';

const useUploadList = (props: UploadListProps) => {
  const onRemove = (file: UploadFileProps) => () => {
    props.onRemove && props.onRemove(file);
  };

  const onCopy = (file: UploadFileProps) => () => {
    // 清除之前的选中结果
    window?.getSelection()?.removeAllRanges();
    // 创建一个 input，设置 value 并选中这个 input
    const copyElement = document.createElement('input');
    copyElement.setAttribute('value', file.name);
    document.body.appendChild(copyElement);
    copyElement.select();
    document.execCommand('copy');
    document.body.removeChild(copyElement);
    window?.getSelection()?.removeAllRanges();
  };

  return { onRemove, onCopy };
};

export default useUploadList;
