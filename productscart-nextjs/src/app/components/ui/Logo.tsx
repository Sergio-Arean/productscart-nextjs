import Image from "next/image";
import styles from "./Logo.module.css"

type LogoProps = {
    context :"header" | "footer";
    title:string;


}

export function Logo({title}:LogoProps){
    return (
        <div className={styles.container}>
            <Image 
                src="../images/logo.svg"
                alt=""
                width={30}
                height={30}
            />
            {title}
        </div>
    )
}