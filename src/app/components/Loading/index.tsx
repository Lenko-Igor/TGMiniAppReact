import { LoadingOutlined } from '@ant-design/icons';
import React from 'react'

interface Props {
  fit?: boolean;
  paddingTop?: number;
  paddingBottom?: number | string;
  fontSize?: number;
}

const Loading = ({ fit, paddingTop, paddingBottom, fontSize }: Props) => {
  return (
    <div
      style={{
        height: fit ? '100%' : '100vh',
        width: fit ? '100%' : '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        paddingTop,
        paddingBottom,
        maxWidth: '100%',
      }}
    >
      <LoadingOutlined style={{ fontSize: fontSize ?? 28, color: 'var(--primary)' }} />
    </div>
  )
}

export default Loading