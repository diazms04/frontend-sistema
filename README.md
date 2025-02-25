# 📌 Frontend - Sistema de Transacciones

Sistema de transacciones desarrollado con **Angular**, estructurado con componentes reutilizables

---

## 📁 Estructura del Proyecto

```
/frontend
│── /src
│   ├── /app
│   │   ├── /components    # Componentes reutilizables
│   │   ├── /services      # Servicios para consumir API
│   │   ├── app.module.ts  # Módulo principal de Angular
│   ├── index.html         # Página principal del proyecto
│── angular.json           # Configuración de Angular
│── package.json           # Dependencias del proyecto
│── README.md              # Documentación del frontend

```

El proyecto esta consumiendo la base de datos de producción
Si se desea correr con la base de datos local hay que hacer lo siguiente

En ```services/transactions.service.ts``` hay que descomentar la primera linea y comentar la segunda
```
1. // private apiUrl = 'http://localhost:5500/api/transactions'; // url api local
  
2. private apiUrl = 'https://backend-sistema.onrender.com/api/transactions'; // url api desplegada

```

Lo mismo se hace en ```services/users.service.ts``` descomentar la primera linea y comentar la segunda

```
 1. // private apiUrl = 'http://localhost:5500/api/users'; // url local

 2. private apiUrl = 'https://backend-sistema.onrender.com/api/users'; // url desplegada

```


Para correr el proyecto de deben iniciar los siguientes comando
```
npm install
ng serve
```

