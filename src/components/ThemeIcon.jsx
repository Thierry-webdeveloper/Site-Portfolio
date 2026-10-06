// Icône d'un thème de filtre, décorative : le nom du thème est écrit à côté.
import { iconesThemes } from "../data/themes";

export default function ThemeIcon({ theme }) {
  const icone = iconesThemes[theme];
  if (!icone) return null; // thème sans icône : on n'affiche rien

  if (icone.marque) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"
        aria-hidden="true" focusable="false">
        <path d={icone.marque} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false"
      dangerouslySetInnerHTML={{ __html: icone.trait }}
    />
  );
}