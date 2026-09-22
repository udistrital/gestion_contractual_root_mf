# gestion_contractual_compras_root_mf

El Root contiene la lógica de Single-SPA del sistema de gestion contractual (Argo) y gestiona todos los microfrontends dentro de la página web, ayuda a gestionar la comunicación entre
ellos y contiene el consumo de los assets, paleta de colores y favicon del sistema.

## Especificaciones Técnicas

### Tecnologías Implementadas y Versiones

- [Single-SPA](https://single-spa.js.org/) 6.0
- [TypeScript](https://www.typescriptlang.org/) 5.6
- [Webpack](https://webpack.js.org/) 5.94
- [Node](https://nodejs.org/es/) 24.x
- [pnpm](https://pnpm.io/) 12.x

### Variables de Entorno

```bash
export const environment = {
    production: [Booleano que indica si está habilitado],
    entorno: [Entorno de ejecucion],
    autenticacion: [Booleano que indica si está habilitada],
    notificaciones: [Booleano que indica si están habilitadas],
    menuApps: [Booleano que indica si está habilitado],
    appname: [Nombre del sistema para los estilos],
    appMenu: [Nombre del sistema para los estilos],
    TOKEN: {
      AUTORIZATION_URL: [URL de Autorización - login],
      CLIENTE_ID: [Token de acceso],
      RESPONSE_TYPE: [Tipo de Respuesta del token],
      SCOPE: [Alcance de la solicitud],
      REDIRECT_URL: [URL de redirección],
      SIGN_OUT_URL: [URL de Cerrar Sesión - logout],
      SIGN_OUT_REDIRECT_URL: [URL de redirección despues de cerrar sesion],
      AUTENTICACION_MID: [URL de API MID Autenticación],
    },
    parcels: {
      "@udistrital/root-config": [URL del bundle del root-config],
      "@udistrital/core-mf": [URL del microfrontend core],
      "@udistrital/argo-gestion-contractual-mf": [URL del microfrontend de gestión contractual],
      "@udistrital/argo-actas-inicio-mf": [URL del microfrontend de actas de inicio],
      "@udistrital/argo-poliza-mf": [URL del microfrontend de pólizas],
    },
};
```

### Ejecución del Proyecto

1. clonar el repositorio:
   ```shell
   git clone https://github.com/udistrital/gestion_contractual_compras_root_mf.git
   ```
2. Acceder al directorio del repositorio clonado:
   ```bash
   cd gestion_contractual_compras_root_mf
   ```
3. Instalar las dependencias:

   ```bash
   pnpm install
   ```

4. Iniciar el Root:
   ```bash
   pnpm start
   ```

### Ejecución Dockerfile

```shell
# Does not apply
```

### Ejecución docker-compose

```shell
# Does not apply
```

### Ejecución Pruebas

Pruebas unitarias

```shell
# Developing
```

## Estado CI

```bash
# Developing
```

## Licencia

This file is part of gestion_contractual_compras_root_mf.

gestion_contractual_compras_root_mf is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

gestion_contractual_compras_root_mf is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with gestion_contractual_compras_root_mf. If not, see https://www.gnu.org/licenses/.
