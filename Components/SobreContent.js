import styles from './sobreStyles.module.css'

const SobreContent = () => {

    return (
        <section className={styles.container}>
            <div className={styles.aboutUs}>
                <img src='https://th.bing.com/th/id/OIP.Hf0ZaY_J7Vlklow0ECb0-gHaD4?w=304&h=180&c=7&r=0&o=5&pid=1.7'/>
                <h2>Quem Somos</h2>
                <p>Subtitulo Subtitulo Subtitulo Subtitulo Subtitulo </p>
                <div>
                    <p className={styles.paboutUs}>Descrição da Esquerda Descrição da Esquerda Descrição da Esquerda Descrição da Esquerda Descrição da Esquerda Descrição da Esquerda Descrição da Esquerda</p>
                    <p className={styles.paboutUs}>Descrição da Direita v Descrição da Direita Descrição da Direita Descrição da Direita Descrição da Direita Descrição da Direita</p>                
                </div>
            </div>

            <div className={styles.quantidade}>
                <h2>20</h2>
                <p>Artigos</p>
            </div>
            <div className={styles.quantidade}>
                <h2>01</h2>
                <p>E-book</p>
            </div>
            <div className={styles.quantidade}>
                <h2>20</h2>
                <p>Artigos</p>
            </div>
            <div className={styles.quantidade}>
                <h2>1</h2>
                <p>E-book</p>
            </div>
        </section>
    );
}

export default SobreContent;