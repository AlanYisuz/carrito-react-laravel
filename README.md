# carrito-react-laravel

dentro del proyecto nos encontraremos con dos carpetas, la de laravel y la de react, donde la primera funciona como el fronted y la segunda como el backend

por lo que descargamos el proyecto en nuesto htdocs, arrastramos esa carpeta a nuestro visual studio code
y accedemos con la terminal de visual a nuestra api
```
cd api
composer install
```
y en otra terminal dentro del mismo proyecto accedemos a react
> cd zapatos-frontes

Tambien necesitamos de vite para react, por lo que si hay algun problema solo usamos
> npm install

ahora comenzamos nuestro xampp con mysql y apache, y enviamos las migraciones en la terminal de laravel y ejecutamos el comando serve y en la terminal de
react la de run
```
php artisan migrate
php artisan serve
npm run dev
```
Podemos crear nuestra base de datos por nuestra cuenta verificando el nombre en nuestro archivo env, o cuando realicemos la migracion.
En el link que nos deja react con vite accedemos a nuestra app, donde podremos usar nuestro proyecto con imagenes con urls estaticas

# Algunas imagenes
```
https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/calzado-blazer-mid-77-vintage-CBDjT0.png

https://static.nike.com/a/images/t_default/fae76b88-93ac-4eb7-813c-ac247e8161cf/calzado-air-max-90-futura-cVb8PP.png

https://www.reebok.mx/on/demandware.static/-/Sites-reebok-catalog/default/dw5aecc9b2/images/CN2126_01.jpg
```
