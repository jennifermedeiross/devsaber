import styles from './Banner.module.css';
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.png"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    DevSaber
                </h1>
                <p>
                    Olá! Eu sou Jennifer Medeiros, graduanda em Engenharia de Computação, e aqui compartilho vários conhecimentos que acredito serem úteis :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto da Jennifer Medeiros"/>
            </div>
        </div>
    )
}