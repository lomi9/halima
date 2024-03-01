// components/Tarteaucitron.js
import { useEffect } from 'react';

const TarteAuCitron = () => {
  useEffect(() => {
    // Vérifie si tarteaucitron est déjà initialisé pour éviter de le charger plusieurs fois
    if (window.tarteaucitron) return;

    // Créez une balise script pour Tarteaucitron.js
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://cdn.jsdelivr.net/npm/tarteaucitronjs@latest/tarteaucitron.js';
    scriptElement.async = true;
    scriptElement.type = 'text/javascript';

    // Ajoutez le script à votre document
    document.body.appendChild(scriptElement);

    scriptElement.onload = () => {
      // Initialisation de Tarteaucitron une fois le script chargé
      tarteaucitron.init({
        "privacyUrl": "", /* L'URL de votre politique de confidentialité */
        // Autres options d'initialisation...
      });

      // Ici, vous pouvez ajouter d'autres services, par exemple Google Analytics
      // tarteaucitron.user.analyticsUa = 'UA-XXXXXXXX-X';
      // (tarteaucitron.job = tarteaucitron.job || []).push('analytics');
    };

    return () => {
      // Nettoyage : Supprimez le script si le composant est démonté
      document.body.removeChild(scriptElement);
    };
  }, []);

  return null; // Ce composant n'affiche rien lui-même
};

export default TarteAuCitron;
