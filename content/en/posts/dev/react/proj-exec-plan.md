---
title: "Project Execution Plan"
date: 2023-09-07T16:39:27+03:00
description: "FullStack Course Project Execution Plan"
---

# Entities

have a basic list of system entities:

For Example:

* user
* product
* order

have properties for each entity.

For Example:

* user: id, name, email,
* product: id, name, price.
* order: date, items list, customer;

# Node App

* DB init script

  create mongoDB init script:

    * config credentials to connect script to your atlas DB
    * create mongoose schemes for all entities (gpt)
    * write mock data for schemes (gpt)
    * implement init script
      * clearing data
      * inserting mock data (gpt)

* implement rest API for all entities

# React App:

* implement Client Side Routing

  create pages:

  * Home
  * About
  * Contact

use products array written manually in the app.

* catalog

  create catalog page and product page

* redux

  setup redux toolkit store + provider + cart slice.

* fake server

  create json-server with chosen entities.


* fetch API

  implement fetching catalog from json-server

* catalog controls

  implement catalog controls - sorting and filter capabilities

* cart

  * implement cart slice
  * implement incrementProductItem and decrementProductItem actions.
  * add them in pages:
    - product page
    - cart page
  * add clear action to slice
  * make cart save it's items in localStorage

* favourite products feature

  * implement fav slice
  * implement addProduct and removeProduct actions
  * add toggle favourite button in product page

* authentication feature

  * create firebase project
  * init firebase in your react app

authorization feature
