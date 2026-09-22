export const environment = {
  production: false,
  entorno: "test",
  autenticacion: true,
  notificaciones: false,
  menuApps: false,
  appname: "argo",
  appMenu: "ARGO_MF",
  TOKEN: {
    AUTORIZATION_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
    CLIENTE_ID: "KICitYwk2svyi4f7hNrzUoel46sa",
    RESPONSE_TYPE: "id_token token",
    SCOPE: "openid email role documento",
    REDIRECT_URL: "https://pruebasargomicroclientes.portaloas.udistrital.edu.co",
    SIGN_OUT_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
    SIGN_OUT_REDIRECT_URL: "https://pruebasargomicroclientes.portaloas.udistrital.edu.co",
    AUTENTICACION_MID:
      "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
  },
  parcels: {
    "@udistrital/root-config": "https://pruebasargomicroclientes.portaloas.udistrital.edu.co/udistrital-root-config.js",
    "@udistrital/core-mf": "https://pruebascoreclientes.portaloas.udistrital.edu.co/main.js",
    "@udistrital/argo-gestion-contractual-mf": "https://pruebasargogestioncontractual.portaloas.udistrital.edu.co/main.js",
  },
};
