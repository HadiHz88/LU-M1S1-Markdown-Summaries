# PHP Student Application - AWS RDS Lab

A simple PHP application that connects to AWS RDS MySQL database and displays student records.

## Files

- **index.php** - Main PHP script with hardcoded database credentials
- **Dockerfile** - Docker configuration for Apache + PHP with MySQL support

## Setup Instructions

### 1. Update Database Credentials

Edit `index.php` and replace these values with your actual RDS details:
```php
$host = "your-rds-endpoint.region.rds.amazonaws.com";
$database = "your-database-name";
$username = "your-username";
$password = "your-password";
```

### 2. Build and Push to Docker Hub

```bash
# Login to Docker Hub
docker login

# Build the image (replace 'your-username' with your Docker Hub username)
docker build -t your-username/php-student-app:latest .

# Push to Docker Hub
docker push your-username/php-student-app:latest
```

### 3. Deploy on EC2

```bash
# Pull the image on EC2
docker pull your-username/php-student-app:latest

# Run the container
docker run -d --name student-app -p 8080:80 your-username/php-student-app:latest

# Check if it's running
docker ps
```

### 4. Access the Application

Open your browser: `http://your-ec2-public-ip:8080`

## Docker Commands

```bash
# View logs
docker logs student-app

# Stop container
docker stop student-app

# Start container
docker start student-app

# Remove container
docker rm -f student-app

# Remove image
docker rmi your-username/php-student-app:latest
```

## Advantages of Docker Hub Approach

- No need to transfer files to EC2
- Build once, deploy anywhere
- Easy to update (just push new version and pull on EC2)
- Version control for your Docker images
- Faster deployment on EC2 (no build time needed)
