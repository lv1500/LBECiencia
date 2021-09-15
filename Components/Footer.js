import styles from './footerStyles.module.css'


/* className={styles.dropdownStyle} */

const Home = () => {

    return (
    
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.empresa}>
                    <img src="#"/>
                    <h2 className={styles.escrito}>LBE Ciência</h2>
                    <p className={styles.escrito}>Apredendo cada dia mais com você</p>
                </div>

                <div className={styles.artigo}>
                    <h2> Artigos Recentes </h2>
                    <ul className={styles.ulArtigo}>
                        <li>
                            <a className={styles.aArtigo} href="#">Artigo 1</a>
                            <span> data de postagem </span>
                        </li>
                        <li>
                            <a className={styles.aArtigo} href="#">Artigo 2</a>
                            <span> data de postagem </span>
                        </li>
                        <li>
                            <a className={styles.aArtigo} href="#">Artigo 2</a>
                            <span> data de postagem </span>
                        </li>
                    </ul>
                </div>

                <div className={styles.redeSocial}>
                    <h2> Redes Sociais </h2>
                    <ul className={styles.ulRedeSocial}>
                        <li>
                            <a className={styles.aRedeSocial} href="#">
                                <i src="#"></i>
                                <span> Youtube </span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.aRedeSocial} href="#">
                                <i src="#"></i>
                                <span> Instagram </span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.aRedeSocial} href="#">
                                <i src="#"></i>
                                <span> Facebook </span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.aRedeSocial} href="#">
                                <i src="#"></i>
                                <span> GitHub </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                    <p className={styles.escrito}>LBE Ciência - 2021</p>
                </div>
        </div>

    );
}

export default Home; 