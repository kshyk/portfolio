import * as icons from '../data/icon-exports';

interface Props {
  icon: string;
  size: number;
  color?: string;
  styles?: string;
}

export const SimpleIcon = (props: Props): JSX.Element => {
  const { icon, size, color, styles } = props;
  const iconName = icon?.charAt(0).toUpperCase() + icon?.slice(1);
  const iconNameSi = `si${iconName}` as keyof typeof icons;
  const iconElement = icons[iconNameSi];
  
  if (!iconElement) {
    return <></>;
  }

  const { title, path, hex } = iconElement;

  return (
    <svg
      className={styles}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color || `#${hex}`}
      viewBox='0 0 24 24'
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
};
