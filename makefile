start:
	cd docker && docker-compose up -d
stop:
	cd docker && docker-compose stop
down:
	cd docker && docker-compose down
open-code:
	code .
to-workspace:
	cd docker && docker-compose exec --user fakel workspace bash
to-root-workspace:
	cd docker && docker-compose exec --user root workspace bash
composer-install:
	cd docker && docker-compose run --user fakel workspace composer install
migrate-and-seed:
	cd docker && docker-compose run --user fakel workspace php artisan migrate:fresh --seed
update-deps:
	cd docker && docker-compose run --user fakel workspace composer install && docker-compose run --user fakel workspace php artisan migrate:fresh --seed && yarn
rebuild:
	cd docker && docker-compose up --build -d
