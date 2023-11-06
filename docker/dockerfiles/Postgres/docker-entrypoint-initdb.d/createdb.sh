psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER prominada WITH PASSWORD 'default_secret';
    CREATE DATABASE prominada_db;
    GRANT ALL PRIVILEGES ON DATABASE prominada_db TO default;
EOSQL
