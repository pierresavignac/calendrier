# Calendrier

Application de gestion de calendrier et de tâches développée avec React et TypeScript pour le frontend, et Django pour le backend.

## Fonctionnalités

- Affichage des semaines avec vue détaillée des jours
- Gestion des tâches par jour
- Distinction entre jours de semaine et weekend
- Interface utilisateur intuitive et responsive
- Gestion des installations et des tâches associées
- API REST complète pour la gestion des données
- Authentification et autorisations utilisateurs

## Technologies utilisées

### Frontend
- React
- TypeScript
- Redux Toolkit pour la gestion d'état
- date-fns pour la manipulation des dates
- Axios pour les requêtes HTTP

### Backend
- Django
- Django REST Framework
- PostgreSQL
- Python

## Installation

### Frontend

1. Installer les dépendances :
```bash
cd frontend/calendrier-frontend
npm install
```

2. Lancer l'application en développement :
```bash
npm start
```

### Backend

1. Créer un environnement virtuel Python :
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Sur Windows : venv\Scripts\activate
```

2. Installer les dépendances :
```bash
pip install -r requirements.txt
```

3. Configurer les variables d'environnement :
Créer un fichier `.env` dans le dossier backend avec :
```
DJANGO_SECRET_KEY=your-secret-key
DJANGO_DEBUG=True
DB_NAME=calendrier
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_HOST=localhost
DB_PORT=5432
```

4. Appliquer les migrations :
```bash
python manage.py migrate
```

5. Créer un superutilisateur :
```bash
python manage.py createsuperuser
```

6. Lancer le serveur de développement :
```bash
python manage.py runserver
```

## Structure du projet

### Frontend
- `frontend/` : Code source de l'application React
  - `src/`
    - `components/` : Composants React
    - `store/` : Configuration Redux et slices
    - `services/` : Services API
    - `styles/` : Fichiers CSS

### Backend
- `backend/` : Code source du serveur Django
  - `config/` : Configuration Django
  - `tasks/` : Application principale
    - `api/` : Vues et endpoints API
    - `models.py` : Modèles de données
    - `serializers.py` : Sérialiseurs pour l'API
    - `admin.py` : Configuration de l'interface d'administration

## API Endpoints

- `GET /api/weeks/` : Liste des semaines
- `GET /api/weeks/{id}/` : Détails d'une semaine
- `GET /api/weeks/{id}/days/` : Jours d'une semaine
- `GET /api/days/{id}/tasks/` : Tâches d'un jour
- `POST /api/tasks/` : Créer une nouvelle tâche
- `GET /api/tasks/{id}/` : Détails d'une tâche
- `PUT /api/tasks/{id}/` : Modifier une tâche
- `DELETE /api/tasks/{id}/` : Supprimer une tâche

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.