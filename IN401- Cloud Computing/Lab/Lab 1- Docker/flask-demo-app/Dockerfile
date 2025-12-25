# 1. Base image: official lightweight Python image
FROM python:3.11-slim

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy requirement file and install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# 4. Copy the rest of the app
COPY app.py /app/

# 5. Expose the port the Flask app will listen on
EXPOSE 5000

# 6. Command to run the app
CMD ["python", "app.py"]
