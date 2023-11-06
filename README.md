# REQUIREMENTS TO PASS CI

-   It will run only on merge requests and pushes to master or dev.
-   PHP code style [PSR12](https://github.com/squizlabs/PHP_CodeSniffer)
-

# SETUP

-   Copy .env.example to .env
-   Copy docker/.env.example to docker/.env and change it to your System User ID (usually 1000) and System User Group ID (usually 1000)
-   Everything else is in a makefile in root
-   Everything php related must be run from inside the `workspace` container, to ssh into container use `make to-workspace`
-   You can use a shortcut `make update-deps` to install composer and npm dependencies, and migrate dev database. It will ssh into container and run these commands for you.

# FRONTEND

-   (TODO) `npm run hot` - frontend. `npm run hot-admin` - backoffice. - webpack hot reload.
-   (TODO) `npm run prod` - production build frontend. `npm run prod-admin` - production build backoffice. - webpack hot reload.
