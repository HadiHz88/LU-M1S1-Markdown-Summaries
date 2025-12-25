@echo off
echo Serving built files with Python...
echo.
echo Open your browser to: http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
cd dist
python -m http.server 8000
pause


