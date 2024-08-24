import styles from "./AppHeader.module.css"
import HeaderDescription from "./HeaderDescription/HeaderDescription"
import Logo from "../Logo/Logo"
import User from "../User/User"

const AppHeader = () => {

    return (
        <header className={styles.appHeader}>
            <Logo />
            <HeaderDescription />
            <User />
        </header>
    )
}

export default AppHeader