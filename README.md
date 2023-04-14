# Chamada de corridas 

API usados

Express para fazer a chamada de rotas

Sequelize para fazer o mapeamento dos modelos que serão usados no banco de dados nesse caso o mySQL

Sequelize-cli para usar comandos que facilitam a interação com o Sequelize

mysql2 para fazer a conexão com banco de dados mySQL

## Programas usados no teste

+ VSCode
+ DBeaver
+ Insominia

## Preparação do ambiente

1. Instale os pacotes

```
npm i
```

2.  Crie o banco e migre os arquviso
```
npm run test:db
```

3. Inicie o servidor
```
npm dev
```

## Comandos

Realizar as migrações
```
npx run sequelize-cli db:migrate
```

Iniciar servidor
```
npm dev
```
