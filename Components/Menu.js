import styles from './menuStyles.module.css'



const Menu = () => {

    return (
        <header className={styles.container}>
            <nav className={styles.nav}>
                <a className={styles.logo} href="/" >LBE Ciência</a>                    
                <ul className={styles.navList}>
                    <li><a className={styles.a} href="/">Home</a></li>
                    <li><a className={styles.a} href="/Sobre">Sobre</a></li>
                    <li><a className={styles.a} href="/Blog">Blog</a></li>
                    <li><a className={styles.a} href="/Produtos">Produtos</a></li>
                    <li><a className={styles.a} href="/MapaDoSite">Mapa do Site</a></li>
                    <li><a className={styles.a} href="/TermosDeUso">Termos de Uso</a></li>
                    <li><a className={styles.a} href="/PP">Políticas de Privacidade</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Menu;
    