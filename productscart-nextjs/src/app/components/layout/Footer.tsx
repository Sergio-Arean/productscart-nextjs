import styles from "./Footer.module.css";
export function Footer() {
  return (
    <div className={styles.mainContainer}>
      {/* Footer Content : 3 boxes, the first one with flex:1 The entire footer
      should have the same margin-inline as the main Content */}
      <section className={styles.linksContainer}>
        <div className={styles.linkSection}>
          <div className={styles.title}>TiendaOnline</div>
          <div className={styles.description}>
            Encuentra los mejores productos con la mejor calidad y al mejor
            precio del mercado.
          </div>
        </div>
        <div className={styles.linkSection}>
          <div className={styles.title}>Enlaces Rápidos</div>
          <div className={styles.description}>
            Inicio | Productos | Sobre Nosotros
          </div>
        </div>
        <div className={styles.linkSection}>
          <div className={styles.title}>Contacto</div>
          <div className={styles.description}>Email | Telefono</div>
        </div>
      </section>
      <hr></hr>
      <div className={styles.socialMediaContainer}>
        <div>© 2025 Tienda Online. Todos los derechos reservados.</div>
        <div>Instagram | Twitter | Facebook</div>
      </div>
    </div>
  );
}
