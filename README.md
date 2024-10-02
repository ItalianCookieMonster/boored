# Prova Tècnica - Aplicació d’Activitats

Aquest projecte és una prova tècnica per generar activitats a partir d’una API, seleccionant filtres específics o mostrant activitats aleatòries.

## Índex

	1.	Descripció del Projecte
 	2. 	Com He Resolut la Prova Tècnica
	3.	Libreries Utilitzades
	4.	Instal·lació	
	5.	Ús
 	6.	Generar Activitats

Descripció del Projecte

Aquest projecte permet als usuaris seleccionar diferents filtres per generar activitats mitjançant una API externa. Si l’usuari no selecciona cap filtre, es genera una activitat aleatòria. El projecte utilitza una interfície moderna amb components de React i un estil personalitzat amb Tailwind CSS.

## Com He Resolut la Prova Tècnica

1. Selecció de filtres d’activitats:
He implementat un conjunt de “chips” que permet als usuaris seleccionar un filtre. Quan un filtre és seleccionat, es fa una petició a l’API amb el tipus d’activitat corresponent. Si no es selecciona cap filtre, es genera una activitat aleatòria.

2. Gestió de les respostes de l’API:
L’API pot retornar un sol objecte o una llista d’activitats, segons el tipus de petició. Per gestionar això, primer verifico si la resposta és un array o un objecte. Si és un array, selecciono una activitat aleatòria de la llista; si és un objecte, simplement mostro l’activitat directament.

3. Gestió del problema de CORS:
Vaig trobar un problema amb les peticions a l’API a causa de les restriccions de CORS. Per solucionar-ho, vaig configurar un proxy local utilitzant Vite, que reescriu les peticions fetes a l’API externa, permetent que les peticions funcionin correctament en un entorn de desenvolupament local.

## Libreries Utilitzades

	•	React: Per a la construcció de la interfície d’usuari.
	•	Vite: Com a bundler per al desenvolupament ràpid i lleuger.
	•	Tailwind CSS: Per al disseny estilitzat i responsiu.
	•	Fetch API: Per realitzar peticions a l’API externa.

## Instal·lació

Requisits previs

Abans de començar, assegura’t de tenir instal·lats els següents programes:

	•	Node.js: Descarregar Node.js
	•	Git: Descarregar Git

Clonar el repositori

	
 1.	Clona el repositori executant aquesta comanda al terminal:

	```
	git clone git@github.com:ItalianCookieMonster/boored.git
	
 	```


2.	Accedeix al directori del projecte:


	```
	cd boored
	
 	```



Instal·lar les dependències

Un cop dins del directori del projecte, executa aquesta comanda per instal·lar totes les dependències:

```
npm install
```


## Ús

Després d’haver instal·lat totes les dependències, pots executar el projecte localment amb la següent comanda:
```
npm run dev
```

Això obrirà el servidor de desenvolupament a la URL:

http://localhost:5173

## Generar Activitats

	•	Selecciona una de les “chips” per triar un tipus d’activitat.
	•	Fes clic al botó Generar per obtenir una activitat basada en el filtre seleccionat.
	•	Si no selecciones cap filtre, es generarà una activitat aleatòria.

