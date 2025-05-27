import { Modal } from 'antd';

interface Props {
  title?: string;
  content?: string;
}

export default function showAlertDialog({ title, content }: Props) {
  Modal.destroyAll();

  Modal.warn({
    title: title ?? 'Attention',
    content: <div style={{ whiteSpace: 'pre-line' }}>{content}</div>,
  });
}
