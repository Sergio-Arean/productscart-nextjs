import { Logo } from "../ui/Logo";
import styles from "./Header.module.css";
import { Navbar } from "./Navbar";
import { LinkItem } from "../../types/types";
import { Cart } from "../cart/Cart";

export function Header() {
  const navbarItems: LinkItem[] = [
    { title: "Inicio", url: "" },
    { title: "Productos", url: "" },
    { title: "Sobre Nosotros", url: "" },
  ];
  return (
    <div className={styles.header}>
      <Logo title={"Tienda Online"} context="header"></Logo>
      <Navbar items={navbarItems} context="header" />
      <Cart />
    </div>
  );
}
