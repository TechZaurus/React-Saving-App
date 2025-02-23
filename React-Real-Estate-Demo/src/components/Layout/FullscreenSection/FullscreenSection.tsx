import { PropsWithChildren, ReactNode } from 'react';
import styles from './FullscreenSection.module.css';

interface Props extends PropsWithChildren {
  backgroundSrc: string;
  blurBackground?: boolean;
  children?: ReactNode;
}

const FullscreenSection: React.FC<Props> = ({ backgroundSrc, blurBackground, children }) => {
  return (
    <div
      data-testid="fullscreen_div"
      id={styles['Fullscreen']}
      style={{ backgroundImage: 'url(' + backgroundSrc + ')' }}
    >
      {blurBackground != undefined && blurBackground ? (
        <div
          data-testid="blur_div"
          className={styles.Blur}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default FullscreenSection;
