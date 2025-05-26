import type { CSSProperties, FC } from "react";

interface IIconSVG {
  src: string;
  color?: string;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
  scale?: string;
  iconSize?: string;
  /** @description Icon as image without anything */
  isDefault?: boolean;
}

const IconSVG: FC<IIconSVG> = ({
  color,
  src,
  className,
  isDefault,
  onClick,
  scale,
  style,
  type,
  ...props
}) => {
  const getBackgroundColor = () => {
    if (color) {
      return color;
    }
    if (type) {
      return type === 'primary' ? 'var(--primary)' : 'var(--secondary)';
    }
    return 'var(--black)';
  };

  if (isDefault) {
    return (
        <img
            alt={src} 
            src={src}
            style={{
                height: props.iconSize ?? 24,
                width: props.iconSize ?? 24,
                color: getBackgroundColor(),
            }}
        />
    );
  }
  return (
    <div
      {...props}
      onClick={onClick}
      style={{ transform: `scale(${scale ?? 1})`, ...(style || {}) }}
    >
      <div
        className='iconSVG_wrapper'
        style={{
          height: props.iconSize ?? 24,
          width: props.iconSize ?? 24,
          backgroundColor: getBackgroundColor(),
          WebkitMask: `url(${src}) no-repeat center`,
          mask: `url(${src}) no-repeat center`,
          maskSize: props.iconSize ?? '',
        }}
      />
    </div>
  );
};

export default IconSVG;