import React from 'react';
// import { useAppSelector } from '@/redux/hooks/hooksW';
// import { RootState } from '@/redux/store';
// import Widgets from '../Widgets/WidgetsW';
import styles from './FooterW.module.scss';

export default function Footer() {
  // const { items } = useAppSelector((state: RootState) => state.weatherSlice);
  return (
    <footer>
      <div className={styles.footer_container}>
        {/* {items.map((obj) => {
          if (obj && obj.widgets) {
            return obj.widgets.map((widget) => (
              <Widgets
                key={widget.idWidgets}
                idWidgets={widget.idWidgets}
                time={widget.time}
                temperature={widget.temperature}
                imageClouds={widget.imageClouds}
              />
            ));
          }
          return null;
        })} */}
      </div>
    </footer>
  );
}
