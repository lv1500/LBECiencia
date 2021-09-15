import styles from './homeStyles.module.css'


/* className={styles.dropdownStyle} */

const Home = () => {

    return (
    
        <div className={styles.container}>

            <div className={styles.banner}>
                <h2 className={styles.h2Banner}>SEJA BEM VINDO </h2>
                <img src="https://th.bing.com/th/id/OIP.T1N3BGr517mgOI12gpLdAAHaEK?pid=ImgDet&rs=1" />
            </div>

            <section className={styles.destaques}>
                <h2> Começe por aqui </h2>
                    <div className={styles.divDestaques}>
                        <h2> Artigos Mais Famosos</h2>
                        <div className={styles.articleBox}>
                            <div className={styles.art}>
                                <img src="#"/>
                                <h2> Titulo do Artigo </h2>
                                <p> Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo </p>
                                <a className={styles.a} href="#"> Quero Ler</a>
                            </div>
                            <div className={styles.art}>
                                <img src="#"/>
                                <h2> Titulo do Artigo </h2>
                                <p> Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo </p>
                                <a className={styles.a} href="#"> Quero Ler</a>
                            </div>
                            <div className={styles.art}>
                                <img src="#"/>
                                <h2> Titulo do Artigo </h2>
                                <p> Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo </p>
                                <a className={styles.a} href="#"> Quero Ler</a>
                            </div>
                            <div className={styles.art}>
                                <img src="#"/>
                                <h2> Titulo do Artigo </h2>
                                <p> Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo </p>
                                <a className={styles.a} href="#"> Quero Ler</a>
                            </div>
                        </div>
                        <div className={styles.articleBox}>
                            <div className={styles.art}>
                                <img src="#"/>
                                <h2> Titulo do Artigo </h2>
                                <p> Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo </p>
                                <a className={styles.a} href="#"> Quero Ler</a>
                            </div>
                            <div className={styles.art}>
                                <img src="#"/>
                                <h2> Titulo do Artigo </h2>
                                <p> Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo </p>
                                <a className={styles.a} href="#"> Quero Ler</a>
                            </div>
                            <div className={styles.art}>
                                <img src="#"/>
                                <h2> Titulo do Artigo </h2>
                                <p> Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo </p>
                                <a className={styles.a} href="#"> Quero Ler</a>
                            </div>
                            <div className={styles.art}>
                                <img src="#"/>
                                <h2> Titulo do Artigo </h2>
                                <p> Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo Descrição do Artigo </p>
                                <a className={styles.a} href="#"> Quero Ler</a>
                            </div>
                        </div>
                </div>
                <div>
                    <p> Produtos Mais Famosos</p>
                    <div>
                        <p> colocar uma foto com descrição e link do Site da Venda do produto </p>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Home; 