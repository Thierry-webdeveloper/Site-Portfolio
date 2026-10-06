// Galerie des projets : rendue en HTML au build (aucun JavaScript pour l'instant).
// Le filtre sera ajouté à l'étape 18e.
import styles from "./ProjectGallery.module.scss";

export default function ProjectGallery({ projets }) {
  return (
    <ol className={styles.list} role="list">
      {projets.map((projet, index) => (
        <li key={projet.id} className={styles.card}>
          <div className={styles.body}>
            <p className={styles.meta}>
              Projet {projet.projet}
              {projet.complement && " · en complément"}
            </p>
            <h3 className={styles.title}>{projet.titre}</h3>
            <p className={styles.accroche}>{projet.accroche}</p>

            <ul className={styles.tags} role="list">
              {projet.filtres.map((filtre) => (
                <li key={filtre}>{filtre}</li>
              ))}
            </ul>

            <div className={styles.actions}>
              <a className={styles.primary} href={`/projets/${projet.id}`}>
                Détails du projet
                <span className="visually-hidden"> {projet.nom}</span>
              </a>
              {projet.site && (
                <a
                  className={styles.secondary}
                  href={projet.site}
                  target="_blank"
                  rel="noopener"
                >
                  Voir le site
                  <span className="visually-hidden"> {projet.nom} (nouvel onglet)</span>
                </a>
              )}
            </div>
          </div>

          {/* Emplacement provisoire de la capture (tâche 9) : purement décoratif */}
          <div className={styles.media} aria-hidden="true">
            <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}