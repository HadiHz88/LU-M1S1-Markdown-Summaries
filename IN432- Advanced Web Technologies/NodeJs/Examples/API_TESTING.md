# 🧪 Testing the API

Simple ways to test your API - no Postman needed!

---

## Option 1: VS Code REST Client (Easiest!)

1. Install **REST Client** extension in VS Code
2. Open `test-api.http` file
3. Click **"Send Request"** above any request

---

## Option 2: PowerShell Commands

```powershell
# GET all products
Invoke-RestMethod -Uri http://localhost:3000/api/products

# POST create product (Method 1: Single quotes - simplest)
Invoke-RestMethod -Uri http://localhost:3000/api/products -Method Post -ContentType "application/json" -Body '{"name": "Laptop", "price": 999}'

# POST create product (Method 2: Using ConvertTo-Json - recommended)
$body = @{name="Laptop"; price=999} | ConvertTo-Json
Invoke-RestMethod -Uri http://localhost:3000/api/products -Method Post -ContentType "application/json" -Body $body

# PUT update product
Invoke-RestMethod -Uri http://localhost:3000/api/products/ID_HERE -Method Put -ContentType "application/json" -Body '{"price": 899}'

# DELETE product
Invoke-RestMethod -Uri http://localhost:3000/api/products/ID_HERE -Method Delete
```

### 💡 Tips for POST Requests in PowerShell:

**Method 1: Single Quotes (Simplest)**
```powershell
Invoke-RestMethod -Uri http://localhost:3000/api/products -Method Post -ContentType "application/json" -Body '{"name": "Laptop", "price": 999}'
```
✅ Use single quotes `'...'` around the JSON string to avoid escaping quotes

**Method 2: ConvertTo-Json (Recommended for Complex Data)**
```powershell
$body = @{name="Laptop"; price=999} | ConvertTo-Json
Invoke-RestMethod -Uri http://localhost:3000/api/products -Method Post -ContentType "application/json" -Body $body
```
✅ PowerShell automatically converts the hashtable to proper JSON format

**Method 3: Double Quotes (Need to Escape)**
```powershell
Invoke-RestMethod -Uri http://localhost:3000/api/products -Method Post -ContentType "application/json" -Body "{`"name`":`"Laptop`",`"price`":999}"
```
⚠️ Use backtick `` ` `` to escape double quotes inside double-quoted strings

---

## Option 3: Browser

For GET requests, just visit the URL:

- http://localhost:3000/
- http://localhost:3000/api/products

---

That's it! 🎉
