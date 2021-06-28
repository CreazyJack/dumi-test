import { UploadFileProps } from '..';
import { UploadListProps } from '../UploadList';
declare const useUploadList: (props: UploadListProps) => {
    onRemove: (file: UploadFileProps) => () => void;
    onCopy: (file: UploadFileProps) => () => void;
};
export default useUploadList;
