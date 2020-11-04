# CRUD-Ang-PHP-MySql

This is a simple CRUD project using Angular, PHP and MySQL.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Back-end

Run `php -S 127.0.0.1:8000` inside backend/api folder for start php api. It's necessary to change the code in backend/api/database.php:

```php
define('DB_PASS', ''); // Insert the password to access the MySql server
define('DB_NAME', 'mydb'); // Change the 'mydb' to the database used
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
