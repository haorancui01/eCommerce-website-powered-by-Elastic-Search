# eCommerce Website Powered by Elastic Search 

> eCommerce website built with the MERN stack, Redux and Elastic Search


This eComemrce website project is for UC ITS Capstone Unit in 2022 Semester 2.
This project combined the MERN eCommerce website which is mainly based on  [MERN eCommerce From Scratch](https://www.udemy.com/course/mern-ecommerce) course and [Elastic Search Engine](https://www.elastic.co/elastic-stack/) to enhance the searching experince.

For Elastic Search Deployment guide, please refer to [ElasticSearch](./ElasticSearchSettingUp/ElasticSearch.md)

For App Search Deployment guide, please refer to [Search UI](./ElasticSearchSettingUp/SearchUI.md.md)


## eCommerce Functions

- Shopping cart
- Product reviews and ratings
- Product pagination
- Product search
- User profile with orders
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration

## Elastic Search Functions
- Product data set storing
- Product Search
- Relevance tuning
- Curation



## Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```


### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

## Sample User
```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```


## License (Proshop)

The MIT License

Copyright (c) 2020 Traversy Media https://traversymedia.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

```
eCommerce-website-powered-by-Elastic-Search
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-fdd92f639770324e0de232d0316209f73222bfd8.idx
│  │     └─ pack-fdd92f639770324e0de232d0316209f73222bfd8.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ backend
│  ├─ config
│  │  ├─ config-helper.js
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ orderController.js
│  │  ├─ productController.js
│  │  └─ userController.js
│  ├─ data
│  │  └─ users.js
│  ├─ middleware
│  │  ├─ authMiddleware.js
│  │  └─ errorMiddleware.js
│  ├─ models
│  │  ├─ orderModel.js
│  │  ├─ productModel.js
│  │  └─ userModel.js
│  ├─ routes
│  │  ├─ orderRoutes.js
│  │  ├─ productRoutes.js
│  │  ├─ uploadRoutes.js
│  │  └─ userRoutes.js
│  ├─ seeder.js
│  ├─ server.js
│  └─ utils
│     └─ generateToken.js
├─ ElasticSearchSettingUp
│  ├─ ElasticSearch.md
│  ├─ images
│  │  └─ elasticcloud.png
│  └─ SearchUI.md
├─ frontend
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ images
│  │  │  ├─ airpods.jpg
│  │  │  ├─ alexa.jpg
│  │  │  ├─ camera.jpg
│  │  │  ├─ mouse.jpg
│  │  │  ├─ phone.jpg
│  │  │  ├─ playstation.jpg
│  │  │  └─ sample.jpg
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  ├─ src
│  │  ├─ actions
│  │  │  ├─ cartActions.js
│  │  │  ├─ orderActions.js
│  │  │  ├─ productActions.js
│  │  │  └─ userActions.js
│  │  ├─ App.js
│  │  ├─ bootstrap.min.css
│  │  ├─ components
│  │  │  ├─ CheckoutSteps.js
│  │  │  ├─ Footer.js
│  │  │  ├─ FormContainer.js
│  │  │  ├─ Header.js
│  │  │  ├─ Loader.js
│  │  │  ├─ Message.js
│  │  │  ├─ Meta.js
│  │  │  ├─ Paginate.js
│  │  │  ├─ Product.js
│  │  │  ├─ ProductCarousel.js
│  │  │  ├─ Rating.js
│  │  │  └─ SearchBox.js
│  │  ├─ config-helper.js
│  │  ├─ config.js
│  │  ├─ constants
│  │  │  ├─ cartConstants.js
│  │  │  ├─ orderConstants.js
│  │  │  ├─ productConstants.js
│  │  │  └─ userConstants.js
│  │  ├─ engine.json
│  │  ├─ Homepage
│  │  │  ├─ config.js
│  │  │  ├─ HomeScreen.js
│  │  │  ├─ ProductCarousel
│  │  │  │  ├─ config.js
│  │  │  │  └─ index.js
│  │  │  └─ TestScreen.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ reducers
│  │  │  ├─ cartReducers.js
│  │  │  ├─ orderReducers.js
│  │  │  ├─ productReducers.js
│  │  │  └─ userReducers.js
│  │  ├─ screens
│  │  │  ├─ CartScreen.js
│  │  │  ├─ HomeScreen.js
│  │  │  ├─ LoginScreen.js
│  │  │  ├─ OrderListScreen.js
│  │  │  ├─ OrderScreen.js
│  │  │  ├─ PaymentScreen.js
│  │  │  ├─ PlaceOrderScreen.js
│  │  │  ├─ ProductEditScreen.js
│  │  │  ├─ ProductListScreen.js
│  │  │  ├─ ProductScreen.js
│  │  │  ├─ ProfileScreen.js
│  │  │  ├─ RegisterScreen.js
│  │  │  ├─ SearchScreen.js
│  │  │  ├─ ShippingScreen.js
│  │  │  ├─ UserEditScreen.js
│  │  │  └─ UserListScreen.js
│  │  ├─ serviceWorker.js
│  │  ├─ store.js
│  │  └─ style.css
│  └─ yarn.lock
├─ package-lock.json
├─ package.json
├─ Procfile
├─ README.md
└─ uploads
   ├─ file.txt
   └─ Screen Shot 2020-09-29 at 5.50.52 PM.png

```