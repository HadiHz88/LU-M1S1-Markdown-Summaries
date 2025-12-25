# Docker Hub Deployment Workflow - Quick Reference

## Overview

Instead of building the Docker image on EC2, you build it locally, push it to Docker Hub, and pull it from EC2. This is simpler and faster.

## Step-by-Step Process

### On Your Local Machine

1. **Edit `index.php`** - Update hardcoded credentials:
   ```php
   $host = "your-rds-endpoint.amazonaws.com";
   $database = "labdb";
   $username = "admin";
   $password = "your-password";
   ```

2. **Build the image:**
   ```bash
   cd php-student-app
   docker build -t your-dockerhub-username/php-student-app:latest .
   ```

3. **Login to Docker Hub:**
   ```bash
   docker login
   ```

4. **Push to Docker Hub:**
   ```bash
   docker push your-dockerhub-username/php-student-app:latest
   ```

### On EC2 Instance

1. **Install Docker** (if not already installed):
   ```bash
   sudo yum update -y
   sudo yum install -y docker
   sudo systemctl start docker
   sudo usermod -a -G docker ec2-user
   newgrp docker
   ```

2. **Pull your image:**
   ```bash
   docker pull your-dockerhub-username/php-student-app:latest
   ```

3. **Run the container:**
   ```bash
   docker run -d --name student-app -p 8080:80 your-dockerhub-username/php-student-app:latest
   ```

4. **Verify it's running:**
   ```bash
   docker ps
   ```

5. **Access in browser:**
   ```
   http://your-ec2-public-ip:8080
   ```

## Benefits

✅ No file transfer needed  
✅ Build once, deploy anywhere  
✅ Faster deployment (no compilation on EC2)  
✅ Version control for images  
✅ Easy rollbacks (pull different tags)  

## Security Group Requirements

- **EC2 → RDS**: Allow outbound to RDS on port 3306
- **RDS**: Allow inbound from EC2 security group on port 3306
- **EC2**: Allow inbound HTTP on port 8080 from your IP (or 0.0.0.0/0 for testing)
