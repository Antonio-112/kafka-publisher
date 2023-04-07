 
<h1 align="center" >Repositorio de la API de Kafka con NestJS</h1>

<p>Este repositorio contiene una API hecha con el framework de NestJS que publica datos a un tópico de Kafka. También incluye un archivo <code>docker-compose.yml</code> para iniciar un Kafka dockerizado. La API todavía está en progreso, pero es funcional.</p>

<h2>Configuración</h2>
<p>Antes de comenzar, asegúrese de tener <strong>Node.js</strong> y <strong>Docker</strong> instalados en su sistema.</p>
<p>Para configurar el repositorio, clone el repositorio en su máquina local y ejecute el siguiente comando en la terminal para instalar las dependencias necesarias:</p>
<pre><code>npm install</code></pre>
<p>Además, es necesario poblar las variables de entorno del archivo de ejemplo <code>.env.example</code> antes de continuar.</p>
<h2>Iniciar el Kafka dockerizado</h2>

<p>Para iniciar el Kafka dockerizado, ejecute el siguiente comando en la terminal:</p>

<pre><code>npm run docker:start</code></pre>

<p>Esto iniciará un contenedor de Docker con un servidor de Kafka en su máquina local.</p>

<h2>Iniciar la API con Node.js</h2>

<p>Para iniciar la API con Node.js, ejecute el siguiente comando en la terminal:</p>

<pre><code>npm run start</code></pre>

<p>Esto iniciará la API en su máquina local. Si esto es exitoso</p>

<p>La API ahora está en ejecución y puede enviar datos al tópico de Kafka utilizando la ruta <code>POST /producer</code>.</p>

<h2>Detener el Kafka dockerizado</h2>

<p>Para detener el Kafka dockerizado, ejecute el siguiente comando en la terminal:</p>

<pre><code>npm run docker:stop</code></pre>

<p>Esto detendrá y eliminará los contenedores de Docker que se iniciaron anteriormente.</p>

<h2>Contribución</h2>

<p>Si desea contribuir a este repositorio, asegúrese de seguir las pautas de contribución descritas en el archivo <code>CONTRIBUTING.md</code>. Si tiene alguna pregunta o
