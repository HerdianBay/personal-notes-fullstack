# Personal Notes

A simple personal notes application built with **React** as the frontend, **Laravel** as the backend API, and **PostgreSQL** as the database.

## Overview

Personal Notes allows users to create, view, archive, unarchive, and delete notes through a web interface.

The application consists of two main parts:

- **Frontend** — React
- **Backend** — Laravel REST API
- **Database** — PostgreSQL

## Features

- Create a note
- View active notes
- View archived notes
- View a single note
- Archive a note
- Unarchive a note
- Delete a note

## Tech Stack

### Frontend

- React
- JavaScript
- Tailwind CSS
- Vite

### Backend

- Laravel
- PHP
- Laravel Eloquent ORM

### Database

- PostgreSQL

## Architecture

The application follows a client-server architecture:

```text
┌──────────────┐
│    React     │
│   Frontend   │
└──────┬───────┘
       │
       │ HTTP / JSON
       ▼
┌──────────────┐
│    Laravel   │
│   REST API   │
└──────┬───────┘
       │
       │ Eloquent ORM
       ▼
┌──────────────┐
│  PostgreSQL  │
│   Database   │
└──────────────┘
```

The React application communicates with the Laravel API through HTTP requests. Laravel handles the application logic and database operations through Eloquent ORM.

## Project Structure

```text
personal-notes/
├── backend/
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── public/
│   ├── resources/
│   ├── routes/
│   ├── storage/
│   ├── tests/
│   ├── artisan
│   ├── composer.json
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

## Requirements

Make sure the following are installed:

- Node.js
- npm
- PHP
- Composer
- PostgreSQL

## Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd personal-notes
```

### 2. Backend Setup

Navigate to the Laravel backend:

```bash
cd backend
```

Install PHP dependencies:

```bash
composer install
```

Create the environment file:

```bash
cp .env.example .env
```

Generate the Laravel application key:

```bash
php artisan key:generate
```

### 3. Configure PostgreSQL

Create a PostgreSQL database for the application.

The backend `.env` should contain the corresponding database configuration:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=personal_notes
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

Run the database migrations:

```bash
php artisan migrate
```

### 4. Start the Laravel API

From the `backend` directory:

```bash
php artisan serve
```

The API will be available at:

```text
http://127.0.0.1:8000
```

The API endpoints use the `/api` prefix:

```text
http://127.0.0.1:8000/api
```

### 5. Frontend Setup

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install JavaScript dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will typically be available at:

```text
http://localhost:5173
```

Make sure the Laravel API is running before using the frontend.

## API Endpoints

Base URL:

```text
http://127.0.0.1:8000/api
```

| Method   | Endpoint                | Description        |
| -------- | ----------------------- | ------------------ |
| `GET`    | `/notes`                | Get active notes   |
| `GET`    | `/notes/archived`       | Get archived notes |
| `GET`    | `/notes/{id}`           | Get a single note  |
| `POST`   | `/notes`                | Create a note      |
| `PATCH`  | `/notes/{id}/archive`   | Archive a note     |
| `PATCH`  | `/notes/{id}/unarchive` | Unarchive a note   |
| `DELETE` | `/notes/{id}`           | Delete a note      |

### Create Note

```http
POST /api/notes
Content-Type: application/json
```

Request body:

```json
{
  "title": "Example Note",
  "body": "This is an example note."
}
```

### Archive Note

```http
PATCH /api/notes/{id}/archive
```

No request body is required.

### Unarchive Note

```http
PATCH /api/notes/{id}/unarchive
```

No request body is required.

## Database

The application currently uses a `notes` table with the following fields:

| Column       | Type      | Description                            |
| ------------ | --------- | -------------------------------------- |
| `id`         | bigint    | Primary key                            |
| `title`      | varchar   | Note title                             |
| `body`       | text      | Note content                           |
| `archived`   | boolean   | Indicates whether the note is archived |
| `created_at` | timestamp | Creation timestamp                     |
| `updated_at` | timestamp | Last update timestamp                  |

The `archived` column defaults to `false`.

## Development

Run the backend and frontend in separate terminals.

### Terminal 1 — Backend

```bash
cd backend
php artisan serve
```

### Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

The frontend communicates with the Laravel API running on the backend server.

## Notes

Authentication and authorization are not currently implemented. The API is intended for local development and demonstration purposes.
