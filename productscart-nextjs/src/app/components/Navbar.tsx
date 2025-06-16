import Link from "next/link";
import { LinkItem } from "../types/types";
import styles from "./Navbar.module.css";

type NavbarProps = {
    context :"header" | "footer";
    items:LinkItem[];
}
export function Navbar({context, items} : NavbarProps){
    return (
            <ul className={styles.container}>
            {items.map((item)=>{
                return (
                    <li >
                        <Link href={item.url} className={styles.linkItem}>{item.title}</Link>
                    </li>
                )
            })}
            </ul>
    )
}