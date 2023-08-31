# scopelybattle

> [!NOTE]  
> Please read implementation notes in the file worknotes.txt

### Folder structure

```sh
  ---- App home 
     --- backend 
     --- frontend
```

### Database
Application uses knex query builder and Sqlite3 as the database.
To spin off the database, do the following

```sh
$ cd backend
$ npm run migrate
```

### Backend
The backend is a simple express server with only development script implemented. 
If no env file is supplied, the application runs on a hardcoded port values.
> [!NOTE]  
> it's a good practise to pass a .env file with app required entries (not needed for this test project)
To start do the following;

```sh
$ cd backend
$ npm run dev
```

```sh
$ curl http://localhost:6600/    "hello scopely"
$ curl http://localhost:6600/api/leaders    {"leadersFromBoard":[{"id":1,"player":2,"rank":1,"score":10000}]}%  
```
