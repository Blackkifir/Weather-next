import styles from './LoaderW.module.scss';

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <span />
      </div>
    </div>
  );
}
