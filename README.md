# SAE_CONTACTT

## Installation

#### Télecharger le projet

Pour télécharger le projet, clonez le dépôt Git en utilisant la commande suivante dans votre terminal (naviguez vers un dossier où vous voulez cloner le projet au préalable):

```bash
git clone <URL_DU_DEPOT>
```

Le projet est composé de deux dossiers, front et back. Il faudra set up l'environnement pour chaque afin que le projet puisse fonctionner sans problème en local

### Backend (Symfony avec Doctrine)

Le backend de cette application est développé avec le framework Symfony et utilise Doctrine ORM pour la gestion de la base de données.

#### Prérequis

Avant de démarrer, vous aurez besoin de PHP 7.4 ou plus récent et de Composer installés sur votre machine. Vous aurez également besoin d'un serveur de base de données MySQL ou MariaDB pour exécuter le script SQL fourni.

#### Backend - Installation

Une fois le projet cloné, naviguez dans le dossier du backend en exécutant :

```bash
cd chemin/vers/le/dossier/back
```

Exécutez la commande suivante pour installer les dépendances PHP nécessaires, définies dans votre composer.json :

```bash
composer install
```

#### Configuration de la Base de Données

Avant de lancer l'application, vous devez créer une base de données vide dans votre système de gestion de base de données. Utilisez le script database.sql fourni pour initialiser la structure de la base de données et insérer les données de test.

Pour exécuter le script, connectez-vous à votre serveur de base de données et exécutez :

```sql
source chemin/vers/le/fichier/database.sql;
```

Configurez l'accès à votre base de données en modifiant le fichier .env (ou .env.local pour une configuration spécifique à l'environnement) situé à la racine du projet Symfony. Recherchez la ligne débutant par DATABASE_URL et ajustez les paramètres de connexion à votre base de données.

```php
DATABASE_URL="mysql://utilisateur:motdepasse@hote:port/nomdelabase"
```

Remplacez utilisateur, motdepasse, hote, port, et nomdelabase par vos propres paramètres de connexion.

#### Lancement du Projet

Après avoir configuré l'accès à la base de données, lancez le serveur de développement Symfony en exécutant :

```bash
symfony server:start
```

Si vous n'avez pas Symfony CLI, vous pouvez utiliser le serveur web intégré de PHP :

```bash
php -S localhost:8000 -t public
```

Votre API backend est maintenant accessible à l'adresse http://localhost:8000.



### Front End

#### Prérequis

Avant de commencer, assurez-vous que vous avez installé Node.js sur votre machine. Node.js 12.x ou une version plus récente est nécessaire pour exécuter ce projet. Vous pouvez télécharger Node.js depuis https://nodejs.org/.

#### Front End - Installation

Une fois le projet cloné, naviguez dans le dossier du frontend en exécutant :

```bash
cd chemin/vers/le/dossier/front
```

Dans le dossier du frontend, exécutez la commande suivante pour installer les dépendances nécessaires :

```bash
npm install
```

#### Front End - Lancer l'application

Après l'installation des dépendances, vous pouvez lancer l'application en mode développement en exécutant :

```bash
npm run dev
```

Vous pouvez maintenant tester l'application. 

**Voici deux comptes avec plusieurs contacts pour faciliter la navigation:**
Compte 1 : 
- Utilisateur : Ayoub
- Mdp : Test

Compte 2 : 
- Utilisateur : Nicolas
- Mdp : Test2
