import { useEffect } from 'react';

const AxeptioCookies = () => {
  useEffect(() => {
    window.axeptioSettings = {
      clientId: "65e83e8df3a6552cdae305c6",
    };

    const script = document.createElement('script');
    script.src = "//static.axept.io/sdk.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Suppression du script lors du démontage du composant
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default AxeptioCookies;
