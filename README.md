# Prova Tècnica - Aplicació d’Activitats

Aquest projecte és una prova tècnica on es mostra una aplicació que permet als usuaris seleccionar filtres i generar activitats a partir d’una API. Les activitats es poden mostrar de manera aleatòria o en funció d’un filtre seleccionat.

## Índex

	1.	Descripció del Projecte
	2.	Tecnologies Utilitzades
	3.	Funcionalitats
	4.	Instal·lació
	5.	Ús
	6.	Contribució
	7.	Licència

## Descripció del Projecte

L’aplicació permet als usuaris seleccionar diferents tipus de filtres per generar activitats mitjançant una API externa. Es poden seleccionar categories com Social, Educació, Cuinar, etc., i l’aplicació mostrarà activitats en funció del filtre escollit o una activitat aleatòria si no es selecciona cap filtre.

## Tecnologies Utilitzades

	•	React: Framework JavaScript per a la construcció de la interfície d’usuari.
	•	Vite: Bundler per a un desenvolupament ràpid.
	•	Fetch API: Per fer peticions a l’API externa.
	•	Tailwind CSS: Per al disseny responsiu de l’aplicació.

## Funcionalitats

	•	Selecció de filtres d’activitats.
	•	Generació d’activitats aleatòries o basades en el filtre seleccionat.
	•	Traducció d’activitats a català.
	•	Interfície d’usuari moderna i responsiva.

## Instal·lació

### Requisits previs

Abans de començar, assegura’t de tenir instal·lats els següents programes:

	•	Node.js: Descarregar Node.js
	•	Git: Descarregar Git

### Clonar el repositori

  1.	Obre un terminal i executa la comanda següent per clonar el repositori:

``git clone git@github.com:ItalianCookieMonster/boored.git``

  2.	Entra al directori del projecte:

`` cd el-teu-repositori ``



Instal·lar les dependències

Un cop estiguis dins del directori del projecte, executa la comanda següent per instal·lar totes les dependències necessàries:

``npm install``

## Ús

Per executar l’aplicació en un entorn de desenvolupament, executa la comanda següent:

``npm run dev``

Això obrirà el servidor de desenvolupament. Accedeix a l’aplicació mitjançant el navegador web a la URL:

http://localhost:5173

Generar Activitats

	1.	Selecciona un filtre d’activitat fent clic en una de les “chips” que apareixen a la interfície.
	2.	Fes clic al botó Generar per obtenir una activitat.
	3.	Si no selecciones cap filtre, es generarà una activitat aleatòria.

Contribució

Si vols contribuir a aquest projecte, segueix aquests passos:

	1.	Fes un fork del repositori.
	2.	Crea una nova branca (git checkout -b feature/nova-funcionalitat).
	3.	Fes els canvis necessaris i fes un commit (git commit -m 'Afegeix nova funcionalitat').
	4.	Envia els canvis a la teva branca (git push origin feature/nova-funcionalitat).
	5.	Crea una pull request.




