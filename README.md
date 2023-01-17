# Adminlte3Template
Este proyecto contiene una plantilla de angular con Adminlte3

## Instalación
1. Instalar anagular
npm install

2. Instalar la librería de adminlte
npm install admin-lte@^3.0 --save

## Estructura de la plantilla
- Auth: Todo lo relacionado con login y registro
- Pages: Todas las páginas de la web
- Shared: Los elementos que comparten las páginas: Navbar, footer, sidebar...
- Services: Servicios de Angular: Conexión a BBDD, API Rest..
- nopage-found: Cuando se introduzca una URL incoherente

# Como recrear esta estructura
1. Crear las carpetas auth, pages, services y shared dentro de la carpeta "app"
2. Crear los siguientes elementos

- ng g m auth/auth-roouting --flat
- ng g m pages/pages-routing --flat
- ng g c auth/login
- ng g c auth/register
- ng g m auth/auth --flat

- ng g c pages/pages --flat
- ng g c pages/dashboard 
- DENTRO DE PAGES CREAR TODAS TUS PÁGINAS
- ng g m pages/pages --flat

- ng g m shared/shared --flat
- ng g c shared/header
- ng g c shared/sidebar
- ng g c shared/breadcrumbs
- ng g c shared/footer

- ng g c nopage-found 

# Configurar los routing a tu gusto (Ver ficheros)
  page-routing
  auth-routing
  ...
  
#Configurar el HTML para usar rutas
Borrar el contenido de app.component.html e introducir: <router-outlet></router-outlet>
 
-----Pendiente de configurar HTML para próxima versión
https://www.youtube.com/watch?v=UFVPuPI6blE 33:10



# Referencias:
- Estructura básica de componentes:
https://www.youtube.com/watch?v=UFVPuPI6blE
- Usar la librería de Adminlte:
https://www.youtube.com/watch?v=dlBb1Z_8FiI



#Instrucciones

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
