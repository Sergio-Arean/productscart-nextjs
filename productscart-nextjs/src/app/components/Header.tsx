import { Logo } from "./Logo";
import styles from "./Header.module.css"

export function Header() {
  return (
    <div className={styles.header}>
      <Logo 
        title={"Tienda Online"}
        context="header"></Logo>
    </div>
  );
}
