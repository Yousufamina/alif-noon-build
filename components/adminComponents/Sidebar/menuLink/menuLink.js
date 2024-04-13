import styles from "./menuLink.module.css"
import Link from "next/link"


function menuLink({item}) {
  return (
    <Link href={item.path} className={styles.container}>
        { item.icon }
        { item.title }
    </Link>
  )
}

export default menuLink