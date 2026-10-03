# Demo en vivo: pruebas tempranas

Proyecto de demostración del principio 3 de las pruebas de software (pruebas tempranas) con **Cucumber**, **GitHub Actions** y **Jenkins**.

## Requisitos

- Node.js 22 o mayor
- Git
- Docker Desktop (solo para Jenkins)

## Cucumber

```powershell
npm install
npm test
```

El escenario "La búsqueda no distingue mayúsculas de minúsculas" falla a propósito.
Para corregirlo, en `src/buscador.js` cambia el `return` por la línea comentada debajo de él.

## GitHub Actions

El pipeline está en `.github/workflows/pruebas.yml`. Corre en cada `git push` y guarda el reporte HTML como artefacto.

## Jenkins

1. En `jenkins/docker-compose.yml` cambia `TU_USUARIO` por tu usuario de GitHub.
2. Levanta Jenkins:

   ```powershell
   cd jenkins
   docker compose up -d --build
   ```

3. Abre http://localhost:8080 (usuario `admin`, contraseña `admin123`) y entra al job **pruebas-tempranas**.

Jenkins revisa el repositorio cada minuto y corre el `Jenkinsfile` cuando hay cambios.
Para apagarlo: `docker compose down`.
