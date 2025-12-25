# IN432 - Project 2: E-Commerce Fashion Store

## 🎯 Project Overview

**Duration:** 2 weeks  
**Difficulty:** Advanced  
**Technologies:** HTML5, CSS3 Only (No JavaScript Required)  
**Project Type:** Individual Assignment  
**Business Domain:** Fashion Retail

### Learning Objectives

By completing this project, students will:

- Master complex multi-page website architecture using pure CSS
- Implement advanced CSS Grid and Flexbox layouts for product catalogs
- Create interactive shopping experiences with CSS-only solutions
- Build responsive e-commerce interfaces across multiple device types
- Develop CSS-only user account management and checkout flow interfaces
- Use advanced CSS selectors and pseudo-classes for state management
- Implement CSS custom properties for consistent design systems
- Understand e-commerce user experience and conversion optimization
- Create realistic e-commerce simulations without JavaScript

### Project Description

Build a complete e-commerce website for "StyleHub" - a modern fashion retailer using only HTML5 and CSS3. This project will showcase advanced CSS techniques including complex layouts, CSS-only interactive product browsing, simulated shopping cart functionality, and comprehensive user account management interfaces. Students will create a professional-grade e-commerce experience that demonstrates mastery of pure CSS development techniques without requiring any JavaScript.

### Business Requirements

- **Target Audience:** Fashion-conscious consumers aged 18-35
- **Product Categories:** Men's clothing, Women's clothing, Accessories, Footwear
- **Core Functionality:** Product browsing, cart management, user accounts, checkout process
- **Design Style:** Modern, clean, mobile-first, conversion-optimized

---

## 📋 Detailed Page Specifications

### Page 1: Homepage (index.html)

#### Content Requirements

**Hero Section with Rotating Banner:**

- 4 promotional banners with auto-rotation (CSS-only animation)
- Banner content:
  1. "New Fall Collection 2024 - Up to 50% Off"
  2. "Free Shipping on Orders Over $75"
  3. "Trending Now: Sustainable Fashion"
  4. "Member Exclusive: Early Access to Sales"
- Each banner includes:
  - High-quality lifestyle image (1920x800px minimum)
  - Compelling headline and subtext
  - Call-to-action button ("Shop Now", "Learn More")
  - Banner navigation dots

**Category Navigation Section:**

- 6 main categories with visual tiles:
  - **Women's Clothing** (Dresses, Tops, Pants, Outerwear)
  - **Men's Clothing** (Shirts, Pants, Jackets, Suits)
  - **Footwear** (Sneakers, Boots, Formal, Sandals)
  - **Accessories** (Bags, Jewelry, Watches, Belts)
  - **Sale Items** (Discounted products across all categories)
  - **New Arrivals** (Latest additions to inventory)
- Each tile includes:
  - Category image (400x400px)
  - Category name and item count
  - Hover effect revealing subcategories

**Featured Products Section:**

- "Trending This Week" - 8 products in responsive grid
- "New Arrivals" - 6 most recent products
- "Staff Picks" - 4 curated selections
- Each product card displays:
  - Primary product image with hover effect showing secondary image
  - Product name and brand
  - Current price and original price (if on sale)
  - Quick view button
  - Add to wishlist heart icon
  - "New", "Sale", or "Bestseller" badges

**Social Proof Section:**

- Customer testimonials with star ratings
- Instagram feed mockup (6-9 images in grid)
- "As seen in" media mentions
- Customer photos using products

**Newsletter Signup:**

- Email capture with 10% discount incentive
- Privacy policy link
- Social media follow buttons

#### Design Requirements

**Homepage Layout Structure:**

```plain
Header (Logo, Navigation, Search, Cart, Account)
Hero Banner Section (Full-width rotating carousel)
Category Grid (3 columns desktop, 2 tablet, 1 mobile)
Featured Products (4 columns desktop, 2 tablet, 1 mobile)
Social Proof (2 columns desktop, 1 mobile)
Newsletter Signup (Centered, full-width background)
Footer (Multi-column links, social media, contact)
```

**CSS Implementation Examples:**

**Rotating Hero Banner:**

```css
.hero-banner {
    position: relative;
    height: 70vh;
    overflow: hidden;
}

.banner-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    animation: bannerRotate 20s infinite;
}

.banner-slide:nth-child(1) { animation-delay: 0s; }
.banner-slide:nth-child(2) { animation-delay: 5s; }
.banner-slide:nth-child(3) { animation-delay: 10s; }
.banner-slide:nth-child(4) { animation-delay: 15s; }

@keyframes bannerRotate {
    0%, 20% { opacity: 1; }
    25%, 95% { opacity: 0; }
    100% { opacity: 0; }
}

.banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 2;
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
}
```

**Product Grid Layout:**

```css
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
}

.product-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    position: relative;
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.product-image-container {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1 / 1.2;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover .product-image {
    transform: scale(1.05);
}

.product-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: #ef4444;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.product-badge.new { background: #10b981; }
.product-badge.bestseller { background: #f59e0b; }
```

---

### Page 2: Product Categories (categories.html)

#### Content Requirements

**Breadcrumb Navigation:**

- Home > Women's Clothing > Dresses
- Each level clickable with arrow separators
- Current page highlighted and non-clickable

**Filter Sidebar (Desktop) / Filter Modal (Mobile):**

- **Category Filters:**
  - Main categories with expand/collapse
  - Subcategory checkboxes
  - Category-specific filters

- **Price Range Filter:**
  - Dual-range slider ($0 - $500)
  - Quick price buttons ($25-50, $50-100, $100-200, $200+)
  - Currency formatting

- **Size Filter:**
  - Clothing sizes: XS, S, M, L, XL, XXL, 3XL
  - Shoe sizes: 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12
  - Size availability indicators

- **Color Filter:**
  - Color swatches in grid layout
  - Color names on hover
  - Popular colors prominently displayed

- **Brand Filter:**
  - Alphabetical brand list with checkboxes
  - Search functionality for brands
  - Popular brands section

- **Rating Filter:**
  - 4+ stars, 3+ stars, 2+ stars, 1+ stars
  - Review count for each rating level

- **Additional Filters:**
  - On Sale toggle
  - New Arrivals toggle
  - In Stock only toggle
  - Free Shipping toggle

**Product Display Area:**

- **Sort Options Dropdown:**
  - Featured (default)
  - Price: Low to High
  - Price: High to Low
  - Newest First
  - Customer Rating
  - Bestselling

- **View Toggle:**
  - Grid view (3-4 columns)
  - List view (detailed horizontal cards)

- **Results Information:**
  - "Showing 1-24 of 156 results for 'Women's Dresses'"
  - Active filter tags with remove option
  - Clear all filters option

**Product Grid (24+ products minimum):**

- Each product includes all homepage card features plus:
  - Multiple color options (color dots)
  - Size availability indicator
  - Customer rating stars
  - Number of reviews
  - "Quick View" overlay on hover
  - Compare checkbox (compare up to 3 items)

**Pagination:**

- Page numbers with previous/next arrows
- "Load More" button option
- Jump to first/last page
- Results per page selector (12, 24, 48)

#### Advanced Filter Implementation

**CSS-Only Price Range Slider:**

```css
.price-range {
    position: relative;
    margin: 2rem 0;
}

.price-slider {
    position: relative;
    height: 6px;
    background: #e2e8f0;
    border-radius: 3px;
}

.price-slider::before {
    content: '';
    position: absolute;
    left: 25%;
    right: 25%;
    height: 100%;
    background: var(--primary-color);
    border-radius: 3px;
}

.price-input {
    position: absolute;
    top: -3px;
    width: 20px;
    height: 20px;
    background: white;
    border: 3px solid var(--primary-color);
    border-radius: 50%;
    cursor: pointer;
}

.price-input:first-child { left: 25%; }
.price-input:last-child { right: 25%; }

.price-values {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    font-weight: 600;
}
```

**Filter Toggle System:**

```css
/* Hidden checkbox pattern for filters */
.filter-checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.filter-label {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    cursor: pointer;
    transition: color 0.2s ease;
}

.filter-checkbox:checked + .filter-label {
    color: var(--primary-color);
    font-weight: 600;
}

.custom-checkbox {
    width: 18px;
    height: 18px;
    border: 2px solid #d1d5db;
    border-radius: 3px;
    margin-right: 0.75rem;
    position: relative;
    transition: all 0.2s ease;
}

.filter-checkbox:checked + .filter-label .custom-checkbox {
    background: var(--primary-color);
    border-color: var(--primary-color);
}

.filter-checkbox:checked + .filter-label .custom-checkbox::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
}
```

---

### Page 3: Product Detail (product.html)

#### Content Requirements

**Product Image Gallery:**

- Main product image (800x1000px minimum)
- 5-8 additional product images showing:
  - Different angles (front, back, side, detail shots)
  - Model wearing the product (if clothing)
  - Lifestyle/context shots
  - Color variations
- Thumbnail navigation strip
- Zoom functionality on hover/click
- 360-degree view option (bonus)

**Product Information Panel:**

- **Basic Information:**
  - Product title and subtitle
  - Brand name with link to brand page
  - SKU and product ID
  - Availability status (In Stock, Low Stock, Out of Stock)
  - Product rating (stars) with review count link

- **Pricing Information:**
  - Current price (large, prominent)
  - Original price (crossed out if on sale)
  - Discount percentage badge
  - Payment options (PayPal, Afterpay, etc.)
  - Price comparison ("You save $X")

- **Product Options:**
  - Size selector with size guide link
  - Color options with swatches and names
  - Quantity selector with min/max limits
  - Personalization options (if applicable)

- **Action Buttons:**
  - Add to Cart (primary button)
  - Add to Wishlist (secondary button)
  - Share product (social icons)
  - Compare product (checkbox)

**Product Description Tabs:**

- **Description Tab:**
  - Detailed product description (200-300 words)
  - Key features and benefits
  - Materials and care instructions
  - Origin/manufacturing information

- **Size & Fit Tab:**
  - Size chart table
  - Fit guide with measurements
  - Model information (height, size worn)
  - Size conversion chart (US/UK/EU)

- **Shipping & Returns Tab:**
  - Shipping options and costs
  - Estimated delivery times
  - Return policy and process
  - Exchange information

- **Reviews Tab:**
  - Overall rating breakdown
  - Individual customer reviews (10+ reviews)
  - Review filtering (by rating, verified purchase)
  - Review helpfulness voting
  - Photo reviews from customers

**Related Products Section:**

- "You Might Also Like" - 4 similar products
- "Complete the Look" - accessories/complementary items
- "Recently Viewed" - browser history items
- "Customers Also Bought" - purchase history data

#### Advanced Product Features

**Image Gallery with Zoom:**

```css
.product-gallery {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
}

.thumbnail-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.thumbnail {
    width: 80px;
    height: 80px;
    border: 2px solid transparent;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.3s ease;
}

.thumbnail.active {
    border-color: var(--primary-color);
}

.main-image-container {
    position: relative;
    aspect-ratio: 1 / 1.25;
    overflow: hidden;
    border-radius: 12px;
    background: #f8fafc;
}

.main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    cursor: zoom-in;
}

.main-image:hover {
    transform: scale(1.2);
}

/* Zoom overlay */
.zoom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.zoom-overlay.active {
    display: flex;
}

.zoom-image {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
}
```

**Size Selector with Availability:**

```css
.size-selector {
    margin: 1.5rem 0;
}

.size-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 0.5rem;
    margin-top: 1rem;
}

.size-option {
    position: relative;
}

.size-radio {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.size-label {
    display: block;
    padding: 0.75rem;
    text-align: center;
    border: 2px solid #d1d5db;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: white;
}

.size-radio:checked + .size-label {
    border-color: var(--primary-color);
    background: var(--primary-color);
    color: white;
}

.size-label.unavailable {
    background: #f1f5f9;
    color: #94a3b8;
    cursor: not-allowed;
    position: relative;
}

.size-label.unavailable::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    height: 2px;
    background: #94a3b8;
    transform: translateY(-50%) rotate(-45deg);
}
```

**Product Reviews Section:**

```css
.reviews-section {
    margin-top: 3rem;
    border-top: 1px solid #e2e8f0;
    padding-top: 2rem;
}

.review-summary {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

.rating-overview {
    text-align: center;
}

.average-rating {
    font-size: 3rem;
    font-weight: bold;
    color: var(--primary-color);
}

.rating-breakdown {
    margin: 1rem 0;
}

.rating-bar {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    gap: 1rem;
}

.rating-progress {
    flex: 1;
    height: 8px;
    background: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
}

.rating-fill {
    height: 100%;
    background: #fbbf24;
    transition: width 0.3s ease;
}

.individual-review {
    border-bottom: 1px solid #e2e8f0;
    padding: 1.5rem 0;
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.reviewer-name {
    font-weight: 600;
}

.review-date {
    color: #64748b;
    font-size: 0.875rem;
}

.review-content {
    line-height: 1.6;
    margin: 1rem 0;
}

.review-photos {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
}

.review-photo {
    width: 80px;
    height: 80px;
    border-radius: 6px;
    object-fit: cover;
    cursor: pointer;
}
```

---

### Page 4: Shopping Cart (cart.html)

#### Content Requirements

**Cart Header:**

- "Shopping Cart" title with item count
- "Continue Shopping" link
- Cart breadcrumb: Home > Cart
- Security badges (SSL, secure checkout)

**Cart Items Section:**

- **Item Display (Table format on desktop, card format on mobile):**
  - Product image (150x150px)
  - Product name and brand
  - Size and color selected
  - SKU or item number
  - Individual price and any discounts
  - Quantity selector (+/- buttons)
  - Subtotal for each item
  - Remove item button (trash icon)
  - Move to wishlist option

- **Quantity Controls:**
  - Decrease button (disabled at quantity 1)
  - Quantity input field (editable)
  - Increase button (max quantity limits)
  - Update cart automatically on change

- **Item Actions:**
  - Edit item (change size/color)
  - Save for later
  - Remove from cart
  - Move to wishlist

**Cart Summary Sidebar:**

- **Order Summary:**
  - Subtotal (before taxes and shipping)
  - Shipping cost (with options)
  - Tax calculation
  - Total amount (prominent display)

- **Promotional Codes:**
  - Promo code input field
  - Apply button
  - List of applied discounts
  - Remove discount option

- **Shipping Options:**
  - Standard shipping (5-7 days) - Free over $75
  - Express shipping (2-3 days) - $9.99
  - Overnight shipping (1 day) - $19.99
  - Store pickup option

- **Action Buttons:**
  - Proceed to Checkout (primary)
  - Update Cart
  - Continue Shopping (secondary)

**Recommended Products:**

- "Complete Your Look" section
- "Frequently Bought Together" bundles
- Cross-sell accessories
- Recently viewed items

**Empty Cart State:**

- Friendly empty cart message
- Suggested product categories
- "Start Shopping" call-to-action
- Recently viewed items

#### Cart Functionality Implementation

**Responsive Cart Layout:**

```css
.cart-container {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

@media (max-width: 768px) {
    .cart-container {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 1rem;
    }
}

.cart-items {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.cart-item {
    display: grid;
    grid-template-columns: 150px 1fr auto auto auto;
    gap: 1.5rem;
    align-items: center;
    padding: 1.5rem 0;
    border-bottom: 1px solid #e2e8f0;
}

@media (max-width: 768px) {
    .cart-item {
        grid-template-columns: 100px 1fr;
        gap: 1rem;
    }
    
    .cart-item-details {
        grid-column: 1 / -1;
    }
}

.cart-item-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
}

.quantity-selector {
    display: flex;
    align-items: center;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    overflow: hidden;
}

.quantity-btn {
    width: 40px;
    height: 40px;
    border: none;
    background: #f8fafc;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;
}

.quantity-btn:hover:not(:disabled) {
    background: #e2e8f0;
}

.quantity-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.quantity-input {
    width: 60px;
    height: 40px;
    border: none;
    text-align: center;
    font-weight: 600;
}
```

**Cart Summary Styling:**

```css
.cart-summary {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 2rem;
    height: fit-content;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.summary-row.total {
    border-top: 2px solid #e2e8f0;
    border-bottom: none;
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 1rem;
    padding-top: 1rem;
}

.promo-code {
    margin: 1.5rem 0;
    padding: 1.5rem;
    background: #f8fafc;
    border-radius: 8px;
}

.promo-input {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.promo-field {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
}

.promo-btn {
    padding: 0.75rem 1.5rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s ease;
}

.promo-btn:hover {
    background: var(--primary-hover);
}
```

---

### Page 5: Checkout Process (checkout.html)

#### Content Requirements

**Checkout Progress Indicator:**

- Step 1: Shipping Information
- Step 2: Payment Method
- Step 3: Order Review
- Step 4: Order Confirmation
- Visual progress bar with completed, current, and pending states

**Step 1: Shipping Information**

- **Customer Type Selection:**
  - Guest checkout option
  - Returning customer login
  - Create new account checkbox

- **Shipping Address Form:**
  - First name and last name (required)
  - Email address (required, with confirmation)
  - Phone number (required)
  - Address line 1 (required)
  - Address line 2 (optional)
  - City (required)
  - State/Province dropdown (required)
  - ZIP/Postal code (required)
  - Country dropdown (required)

- **Shipping Options:**
  - Standard shipping (5-7 business days) - Free over $75
  - Express shipping (2-3 business days) - $9.99
  - Overnight shipping (next business day) - $19.99
  - Store pickup locations with map

- **Special Instructions:**
  - Delivery instructions textarea
  - Gift message option
  - Signature required checkbox

**Step 2: Payment Method**

- **Payment Options:**
  - Credit/Debit card (Visa, MasterCard, American Express, Discover)
  - PayPal integration mockup
  - Apple Pay/Google Pay mockups
  - Buy now, pay later options (Afterpay, Klarna mockups)

- **Credit Card Form:**
  - Card number (with real-time formatting)
  - Cardholder name
  - Expiration date (MM/YY dropdowns)
  - CVV code with help tooltip
  - Billing address same as shipping checkbox

- **Security Features:**
  - SSL certificate indicators
  - Security badges (Norton, McAfee)
  - Encryption notice
  - PCI compliance information

**Step 3: Order Review**

- **Order Summary:**
  - Complete list of items with images
  - Quantities and prices
  - Applied discounts and promotions
  - Shipping method and cost
  - Tax breakdown by location
  - Final total amount

- **Shipping & Billing Information Review:**
  - Shipping address with edit link
  - Billing address with edit link
  - Selected shipping method
  - Payment method (last 4 digits)

- **Terms and Conditions:**
  - Terms of service agreement checkbox
  - Privacy policy agreement checkbox
  - Marketing communications opt-in
  - Return policy acknowledgment

- **Final Actions:**
  - Place Order button (prominent)
  - Back to payment button
  - Order total display
  - Estimated delivery date

#### Advanced Checkout Features

**Multi-Step Form Navigation:**

```css
.checkout-progress {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    position: relative;
}

.checkout-progress::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    height: 2px;
    background: #e2e8f0;
    z-index: 1;
}

.progress-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    background: white;
    padding: 0 1rem;
}

.step-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e2e8f0;
    color: #64748b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
}

.progress-step.completed .step-number {
    background: #10b981;
    color: white;
}

.progress-step.current .step-number {
    background: var(--primary-color);
    color: white;
}

.step-title {
    font-size: 0.875rem;
    font-weight: 600;
    text-align: center;
}

.progress-step.completed .step-title {
    color: #10b981;
}

.progress-step.current .step-title {
    color: var(--primary-color);
}
```

**Form Validation Styling:**

```css
.form-group {
    margin-bottom: 1.5rem;
    position: relative;
}

.form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-dark);
}

.form-input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input:valid {
    border-color: #10b981;
}

.form-input:invalid:not(:focus):not(:placeholder-shown) {
    border-color: #ef4444;
}

.validation-message {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #ef4444;
    display: none;
}

.form-input:invalid:not(:focus):not(:placeholder-shown) + .validation-message {
    display: block;
}

.success-message {
    color: #10b981;
    display: none;
}

.form-input:valid + .validation-message + .success-message {
    display: block;
}

/* Credit card number formatting */
.card-input {
    font-family: 'Courier New', monospace;
    letter-spacing: 2px;
}

.payment-icons {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.payment-icon {
    width: 40px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}

.payment-icon.visa { background-image: url('icons/visa.svg'); }
.payment-icon.mastercard { background-image: url('icons/mastercard.svg'); }
.payment-icon.amex { background-image: url('icons/amex.svg'); }

.payment-icon.active {
    opacity: 1;
}
```

---

### Page 6: User Account Dashboard (account.html)

#### Content Requirements

**Account Navigation Sidebar:**

- **Profile Management:**
  - Personal information
  - Password & security
  - Communication preferences
  - Account settings

- **Order Management:**
  - Order history
  - Track orders
  - Return requests
  - Reorder items

- **Shopping Preferences:**
  - Wishlist
  - Recently viewed
  - Saved for later
  - Size preferences

- **Address & Payment:**
  - Address book
  - Payment methods
  - Billing preferences
  - Default settings

**Dashboard Overview (Main Content):**

- Welcome message with user name
- Quick stats: Total orders, Saved items, Reward points
- Recent order status cards (3-4 most recent)
- Personalized product recommendations
- Account completion prompts

**Profile Information Section:**

- **Personal Details Form:**
  - First name and last name
  - Email address (with verification status)
  - Phone number
  - Date of birth (optional)
  - Gender (optional)
  - Profile photo upload

- **Communication Preferences:**
  - Email newsletter subscription
  - SMS notifications for orders
  - Promotional emails
  - New arrivals notifications
  - Sale and discount alerts

- **Size Preferences:**
  - Clothing size settings
  - Shoe size settings
  - Preferred brands
  - Style preferences

**Order History Section:**

- **Order List Display:**
  - Order number and date
  - Order status with progress indicators
  - Total amount paid
  - Number of items
  - Estimated/actual delivery date
  - Order actions (track, reorder, return)

- **Order Status Types:**
  - Processing (preparing for shipment)
  - Shipped (in transit with tracking)
  - Delivered (completed orders)
  - Cancelled (cancelled orders)
  - Returned (returned items)

- **Order Details Modal/Page:**
  - Complete item list with images
  - Shipping address used
  - Payment method used
  - Order timeline with updates
  - Tracking information
  - Return/exchange options

**Wishlist Section:**

- Grid layout of saved items
- Product availability status
- Price change notifications
- Move to cart functionality
- Remove from wishlist option
- Share wishlist feature
- Create multiple wishlists

**Address Book:**

- Default shipping address (highlighted)
- Default billing address (highlighted)
- Additional saved addresses
- Add new address form
- Edit/delete existing addresses
- Set as default options

#### Dashboard Implementation

**Responsive Dashboard Layout:**

```css
.account-dashboard {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

@media (max-width: 768px) {
    .account-dashboard {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
    }
}

.account-sidebar {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    height: fit-content;
    position: sticky;
    top: 2rem;
}

@media (max-width: 768px) {
    .account-sidebar {
        position: static;
        order: 2;
    }
}

.sidebar-nav {
    list-style: none;
}

.nav-section {
    margin-bottom: 2rem;
}

.section-title {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #64748b;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
}

.nav-link {
    display: block;
    padding: 0.75rem 1rem;
    color: var(--text-dark);
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.3s ease;
    margin-bottom: 0.25rem;
}

.nav-link:hover,
.nav-link.active {
    background: var(--primary-color);
    color: white;
}

.main-content {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
    .main-content {
        order: 1;
    }
}
```

**Order History Cards:**

```css
.order-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.order-card {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1.5rem;
    transition: box-shadow 0.3s ease;
}

.order-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.order-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.order-number {
    font-weight: 600;
    color: var(--primary-color);
}

.order-date {
    color: #64748b;
    font-size: 0.875rem;
}

.order-status {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.status-processing {
    background: #fef3c7;
    color: #d97706;
}

.status-shipped {
    background: #dbeafe;
    color: #2563eb;
}

.status-delivered {
    background: #d1fae5;
    color: #059669;
}

.order-items {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    overflow-x: auto;
    padding-bottom: 0.5rem;
}

.order-item-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
    flex-shrink: 0;
}

.order-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid #f1f5f9;
}

.order-total {
    font-weight: 600;
    font-size: 1.125rem;
}

.order-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    background: white;
    border-radius: 4px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.action-btn:hover {
    background: #f8fafc;
}

.action-btn.primary {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: white;
}

.action-btn.primary:hover {
    background: var(--primary-hover);
}
```

---

### Page 7: About Us (about.html)

#### Content Requirements

**Brand Story Section:**

- Company founding story and mission
- Vision statement and core values
- Timeline of major company milestones
- Founder profiles with photos and backgrounds
- Company culture and working philosophy

**Sustainability & Ethics:**

- Environmental responsibility initiatives
- Ethical sourcing and manufacturing practices
- Fair trade partnerships
- Sustainability certifications
- Carbon footprint reduction efforts
- Recycling and waste reduction programs

**Team Section:**

- Leadership team profiles
- Department heads and key personnel
- Employee diversity and inclusion stats
- Company culture photos
- Employee testimonials

**Awards & Recognition:**

- Industry awards and certifications
- Press mentions and media coverage
- Customer satisfaction ratings
- Partnership recognitions
- Community involvement awards

**Store Locations:**

- Interactive store locator map
- Individual store information:
  - Address and contact details
  - Store hours and special services
  - Store photos and layout
  - Manager contact information
  - Parking and accessibility information

#### About Page Design Features

**Timeline Visualization:**

```css
.company-timeline {
    position: relative;
    margin: 3rem 0;
    padding: 2rem 0;
}

.timeline-track {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
    transform: translateX(-50%);
}

.timeline-event {
    position: relative;
    margin: 3rem 0;
    display: flex;
    align-items: center;
}

.timeline-event:nth-child(odd) {
    justify-content: flex-end;
}

.timeline-event:nth-child(even) {
    justify-content: flex-start;
}

.event-content {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    position: relative;
}

.timeline-event:nth-child(odd) .event-content {
    margin-right: 3rem;
}

.timeline-event:nth-child(even) .event-content {
    margin-left: 3rem;
}

.event-content::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 15px solid transparent;
}

.timeline-event:nth-child(odd) .event-content::before {
    right: -30px;
    border-left-color: white;
    transform: translateY(-50%);
}

.timeline-event:nth-child(even) .event-content::before {
    left: -30px;
    border-right-color: white;
    transform: translateY(-50%);
}

.event-marker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border: 4px solid white;
    border-radius: 50%;
    box-shadow: 0 0 0 4px var(--primary-color);
}

.event-year {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.event-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.event-description {
    line-height: 1.6;
    color: #64748b;
}
```

---

### Page 8: Customer Service (support.html)

#### Content Requirements

**FAQ Section:**

- **Shipping & Delivery:**
  - Shipping costs and delivery times
  - International shipping options
  - Order tracking information
  - Delivery issues and solutions

- **Returns & Exchanges:**
  - Return policy (30-day window)
  - Return process step-by-step
  - Exchange procedures
  - Refund processing times
  - Return shipping costs

- **Size & Fit:**
  - Size guide for clothing and shoes
  - Fit recommendations
  - Size exchange policy
  - Virtual fit tools

- **Payment & Billing:**
  - Accepted payment methods
  - Billing address requirements
  - Payment security measures
  - Promotional code usage

- **Account & Orders:**
  - Account creation and management
  - Order modification and cancellation
  - Password reset procedures
  - Email communication preferences

**Contact Options:**

- **Live Chat Widget (Mockup):**
  - Available hours display
  - Quick response time promise
  - Common question suggestions
  - File attachment capability

- **Contact Form:**
  - Customer service inquiry form
  - Priority level selection
  - Category dropdown (shipping, returns, product, account)
  - Attachment upload for photos/documents
  - Expected response time display

- **Phone Support:**
  - Customer service phone number
  - Hours of operation
  - International phone options
  - Average wait time display

- **Email Support:**
  - General inquiries email
  - Specific department emails
  - Response time expectations
  - Email format guidelines

**Self-Service Tools:**

- Order lookup tool (by order number and email)
- Return/exchange request form
- Size guide with measurements
- Product care instructions
- Shipping calculator
- Store locator

#### Interactive Help Features

**Accordion FAQ System:**

```css
.faq-section {
    margin: 2rem 0;
}

.faq-category {
    margin-bottom: 2rem;
}

.category-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.faq-item {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    overflow: hidden;
}

.faq-question {
    width: 100%;
    padding: 1.5rem;
    background: white;
    border: none;
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.3s ease;
}

.faq-question:hover {
    background: #f8fafc;
}

.faq-question.active {
    background: var(--primary-color);
    color: white;
}

.faq-icon {
    font-size: 1.25rem;
    transition: transform 0.3s ease;
}

.faq-question.active .faq-icon {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background: #f8fafc;
}

.faq-answer.active {
    max-height: 500px;
}

.faq-answer-content {
    padding: 1.5rem;
    line-height: 1.6;
    color: #374151;
}
```

---

## 🛒 CSS-Only E-Commerce Features

### CSS-Only Shopping Cart Simulation

**Simulated Cart Counter:**

```css
/* CSS counter for cart items */
.cart-icon {
    position: relative;
}

.cart-icon::after {
    content: "3"; /* Simulated item count */
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ef4444;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
}

/* CSS-only cart dropdown */
.cart-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    width: 350px;
    background: white;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 1rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 1000;
}

.cart-icon:hover .cart-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
```

**CSS-Only Add to Cart Animation:**

```css
.add-to-cart-btn {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.add-to-cart-btn::before {
    content: 'Add to Cart';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
}

.add-to-cart-btn:hover::before {
    content: '✓ Added!';
    color: #10b981;
}

.add-to-cart-btn:hover {
    background: #f0fdf4;
    border-color: #10b981;
    transform: scale(1.05);
}
```

### CSS-Only Product Filtering

**Advanced Filter System:**

```css
/* Multi-level CSS-only filtering */
.product-filters {
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
}

/* Price filter checkboxes */
.price-filter {
    display: none;
}

.price-filter + label {
    display: block;
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.price-filter:checked + label {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

/* Hide products by default when filters are active */
.filter-active .product-card {
    display: none;
}

/* Show products matching price filters */
#price-under-50:checked ~ .products-grid .product-card[data-price="under-50"],
#price-50-100:checked ~ .products-grid .product-card[data-price="50-100"],
#price-over-100:checked ~ .products-grid .product-card[data-price="over-100"] {
    display: block;
}

/* Size filter system */
.size-filter:checked ~ .products-grid .product-card[data-size*="S"],
.size-filter[value="M"]:checked ~ .products-grid .product-card[data-size*="M"],
.size-filter[value="L"]:checked ~ .products-grid .product-card[data-size*="L"] {
    display: block;
}

/* Color filter system */
.color-swatch {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid transparent;
    cursor: pointer;
    transition: all 0.3s ease;
}

.color-filter:checked + .color-swatch {
    border-color: var(--primary-color);
    transform: scale(1.2);
}
```

### CSS-Only User Account System

**Account Dashboard Tabs:**

```css
/* CSS-only tabbed interface */
.account-nav {
    display: flex;
    border-bottom: 2px solid #e2e8f0;
    margin-bottom: 2rem;
}

.tab-input {
    display: none;
}

.tab-label {
    padding: 1rem 2rem;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;
    position: relative;
}

.tab-input:checked + .tab-label {
    border-bottom-color: var(--primary-color);
    color: var(--primary-color);
    font-weight: 600;
}

.tab-content {
    display: none;
    padding: 2rem 0;
}

.tab-input:checked + .tab-label + .tab-content {
    display: block;
}
```

**Order Status Indicators:**

```css
/* CSS-only order status timeline */
.order-status {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    position: relative;
}

.order-status::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    height: 2px;
    background: #e2e8f0;
    z-index: 1;
}

.status-step {
    background: white;
    padding: 0 1rem;
    position: relative;
    z-index: 2;
}

.status-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 0.5rem;
    transition: all 0.3s ease;
}

.status-step.completed .status-circle {
    background: #10b981;
    color: white;
}

.status-step.current .status-circle {
    background: var(--primary-color);
    color: white;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}
```

### CSS-Only Checkout Process

**Multi-Step Checkout:**

```css
/* Step-by-step checkout using radio buttons */
.checkout-steps {
    counter-reset: step-counter;
}

.checkout-step {
    counter-increment: step-counter;
    display: none;
    padding: 2rem;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    margin: 1rem 0;
}

.step-input:checked + .checkout-step {
    display: block;
}

.step-header::before {
    content: "Step " counter(step-counter) ": ";
    font-weight: bold;
    color: var(--primary-color);
}

/* Progress indicator */
.checkout-progress {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
}

.progress-step {
    flex: 1;
    text-align: center;
    position: relative;
}

.progress-step::before {
    content: counter(step-counter);
    counter-increment: step-counter;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #e2e8f0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
}

.step-input:checked ~ .checkout-progress .progress-step:nth-child(-n+1)::before {
    background: var(--primary-color);
    color: white;
}
```

### CSS-Only Product Gallery

**Interactive Image Gallery:**

```css
/* CSS-only image gallery with thumbnails */
.product-gallery {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 1rem;
}

.thumbnail-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.thumbnail-input {
    display: none;
}

.thumbnail-label {
    display: block;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.thumbnail-input:checked + .thumbnail-label {
    border-color: var(--primary-color);
}

.main-image-container {
    position: relative;
    aspect-ratio: 1 / 1.2;
    overflow: hidden;
    border-radius: 12px;
}

.main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
}

.thumbnail-input:checked ~ .main-image-container .main-image[data-image="1"] {
    display: block;
}

/* CSS-only zoom effect */
.main-image {
    transition: transform 0.3s ease;
    cursor: zoom-in;
}

.main-image:hover {
    transform: scale(1.2);
}
```

---

## 🚀 Technical Implementation Guidelines

### Project Architecture

**File Structure (CSS-Only Project):**

```
stylehub-ecommerce/
├── index.html
├── categories.html
├── product.html
├── cart.html
├── checkout.html
├── account.html
├── about.html
├── support.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   ├── ecommerce-features.css
│   └── pages/
│       ├── home.css
│       ├── product.css
│       ├── cart.css
│       └── checkout.css
├── images/
│   ├── products/
│   ├── banners/
│   ├── team/
│   └── icons/
├── data/ (Static content for simulation)
│   ├── product-content.html
│   └── sample-data.html
└── docs/
    ├── wireframes/
    ├── css-techniques-guide.md
    └── implementation-guide.md
```

**Key Points for CSS-Only Implementation:**

- ✅ **No JavaScript files** - Pure HTML/CSS solution
- ✅ **Static data simulation** - Use HTML includes and CSS content generation
- ✅ **CSS-only interactions** - Leverage :hover, :focus, :checked, :target pseudo-classes
- ✅ **Simulated functionality** - Visual and interactive but no dynamic behavior

### CSS Architecture

**CSS Custom Properties System:**

```css
:root {
    /* Brand Colors */
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --primary-200: #bfdbfe;
    --primary-300: #93c5fd;
    --primary-400: #60a5fa;
    --primary-500: #3b82f6;
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    --primary-800: #1e40af;
    --primary-900: #1e3a8a;
    
    /* Semantic Colors */
    --primary-color: var(--primary-600);
    --primary-hover: var(--primary-700);
    --secondary-color: #64748b;
    --accent-color: #f59e0b;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --error-color: #ef4444;
    
    /* Typography */
    --font-primary: 'Inter', system-ui, sans-serif;
    --font-secondary: 'Playfair Display', serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    
    /* Spacing */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;
    
    /* Layout */
    --container-max-width: 1200px;
    --container-padding: 1rem;
    --header-height: 80px;
    --sidebar-width: 280px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
    
    /* Borders */
    --border-radius-sm: 4px;
    --border-radius-md: 6px;
    --border-radius-lg: 8px;
    --border-radius-xl: 12px;
    --border-width: 1px;
    --border-color: #e2e8f0;
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

### Component Library

**Button Components:**

```css
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-md) var(--space-lg);
    border: var(--border-width) solid transparent;
    border-radius: var(--border-radius-md);
    font-size: var(--font-size-base);
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all var(--transition-normal);
    min-height: 44px; /* Accessibility: minimum touch target */
}

.btn-primary {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

.btn-primary:hover {
    background: var(--primary-hover);
    border-color: var(--primary-hover);
}

.btn-secondary {
    background: transparent;
    color: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: white;
}

.btn-lg {
    padding: var(--space-lg) var(--space-xl);
    font-size: var(--font-size-lg);
}

.btn-sm {
    padding: var(--space-sm) var(--space-md);
    font-size: var(--font-size-sm);
}

.btn-icon {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
}

.btn-full {
    width: 100%;
}
```

### Responsive Design Strategy

**Breakpoint System:**

```css
/* Mobile First Approach */
.container {
    width: 100%;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
}

/* Small devices (phones) */
@media (min-width: 480px) {
    :root {
        --container-padding: 1.5rem;
    }
}

/* Medium devices (tablets) */
@media (min-width: 768px) {
    :root {
        --container-padding: 2rem;
    }
    
    .grid-md-2 {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .grid-md-3 {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Large devices (desktops) */
@media (min-width: 1024px) {
    .grid-lg-4 {
        grid-template-columns: repeat(4, 1fr);
    }
    
    .grid-lg-5 {
        grid-template-columns: repeat(5, 1fr);
    }
}

/* Extra large devices */
@media (min-width: 1280px) {
    :root {
        --container-max-width: 1280px;
    }
}
```

### Performance Optimization

**Image Optimization Strategy:**

```css
/* Responsive Images */
.responsive-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

/* Lazy Loading */
.lazy-image {
    opacity: 0;
    transition: opacity 0.3s ease;
}

.lazy-image.loaded {
    opacity: 1;
}

/* Progressive Enhancement */
.webp .hero-banner {
    background-image: url('hero.webp');
}

.no-webp .hero-banner {
    background-image: url('hero.jpg');
}

/* Critical CSS Loading */
.above-fold {
    /* Critical styles for immediate rendering */
}

.below-fold {
    /* Non-critical styles loaded asynchronously */
}
```

### Accessibility Implementation

**Focus Management:**

```css
/* Focus Styles */
.focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

/* Skip Links */
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    transition: top 0.3s ease;
}

.skip-link:focus {
    top: 6px;
}

/* Screen Reader Only Content */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
    :root {
        --primary-color: #000080;
        --border-color: #000000;
        --text-color: #000000;
        --background-color: #ffffff;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 📊 Project Evaluation

### Evaluation Criteria

#### Technical Implementation

**HTML Structure & Semantics**

- Proper HTML5 semantic elements
- Accessibility compliance (WCAG 2.1 AA)
- Valid markup and proper document structure

**CSS Architecture & Quality**

- Advanced layout techniques (Grid, Flexbox)
- Responsive design implementation
- CSS organization and maintainability
- Modern CSS features usage

**Interactive Components**

- Functional form validations
- CSS-only interactive elements
- Smooth animations and transitions

#### Design & User Experience

**Visual Design**

- Professional appearance and consistency
- Typography and color scheme
- Brand identity and cohesiveness

**User Experience**

- Intuitive navigation and usability
- Mobile experience optimization
- Loading performance and feedback

#### Content & Functionality

**Content Quality**

- Complete and realistic product information
- Professional copywriting and descriptions

**E-commerce Functionality**

- Shopping cart simulation
- Product filtering and search
- User account interface

### Development Milestones

#### Week 1: Project Foundation

- **Deliverable:** Complete wireframes and style guide
- **Focus:** Design planning and documentation

#### Week 2: Structure & Content

- **Deliverable:** HTML structure for all 8 pages with placeholder content
- **Focus:** HTML quality and semantic structure

### Optional Enhancements

- **Performance Optimization:** PageSpeed Insights score 90+ on mobile and desktop
- **Advanced Accessibility:** Screen reader testing and WCAG AAA compliance
- **CSS Framework Integration:** Additional version using Tailwind CSS or Bootstrap
- **Dark Mode Implementation:** Complete dark/light theme toggle
- **Progressive Web App Features:** Service worker and offline functionality
- **Advanced Animations:** Complex CSS animations and microinteractions
- **Multi-language Support:** Internationalization implementation

### Submission Requirements

**Required Deliverables:**

1. **Complete Website Files:** All HTML, CSS, images, and assets
2. **Live Deployment:** Hosted on GitHub Pages, Netlify, or Vercel
3. **Source Code Repository:** GitHub with clean commit history and README
4. **Documentation Package:**
   - Design system and style guide
   - Technical implementation notes
   - Browser compatibility testing results
   - Accessibility testing report
5. **Project Presentation:** Demo covering design decisions, technical challenges, and lessons learned

**Submission Format:**

- Complete project files
- GitHub repository URL
- Live website URL
- Documentation
- Presentation materials

This comprehensive e-commerce project will challenge students to apply advanced web development skills while creating a portfolio-worthy website that demonstrates professional-level implementation of modern e-commerce user experiences.

### Additional Resources

**E-commerce Design Inspiration:**

- [E-commerce Gallery](https://ecomm.design/)
- [Shopify Partner Directory](https://partners.shopify.com/)
- [Fashion E-commerce Sites](https://www.awwwards.com/websites/fashion/)

**Technical Resources:**

- [E-commerce UX Guidelines](https://baymard.com/blog)
- [Accessibility in E-commerce](https://www.w3.org/WAI/WCAG21/Understanding/)
- [Performance Best Practices](https://web.dev/fast/)

**Tools for Development:**

- [Figma for Design](https://www.figma.com/)
- [Unsplash for Images](https://unsplash.com/)
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
- [Color Palette Tools](https://coolors.co/)
- [Typography Pairing](https://fontjoy.com/)
