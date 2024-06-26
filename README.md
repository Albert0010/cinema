# Laravel Project

This project is built using [Laravel](https://laravel.com/), a PHP framework for web artisans.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [PHP](https://www.php.net/downloads.php) and [Composer](https://getcomposer.org/download/).
- You have a Windows machine. (Also applicable to Linux and MacOS)

## Installing Laravel Project

To install Laravel Project, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/Albert0010/laravel-project.git
```

2. Navigate into the project directory:
```bash
cd laravel-project
```

3. Install the dependencies:
```bash
composer install
```

4. Copy the `.env.example` file and rename it to `.env`:
```bash
cp .env.example .env
```

5. Generate an app encryption key:
```bash
php artisan key:generate
```

6. Create an empty database for the application and configure your `.env` file to provide your database settings (DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD).

## Using Laravel Project

To use Laravel Project, follow these steps:

1. Run the database migrations (Laravel includes a simple command to run all of your outstanding migrations):
```bash
php artisan migrate
```

2. Start the development server:
```bash
php artisan serve
```

3. Open your web browser and navigate to [http://localhost:8000](http://localhost:8000).

## Contributing to Laravel Project

To contribute to Laravel Project, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.


## Reach out to cinema-frontend project go to /cinema-frontend/README.md

```bash
cd cinema-frontend
```

## Contact

If you want to contact me you can reach me at `<a.hovhannisyan.dev@gmail.com>`.
