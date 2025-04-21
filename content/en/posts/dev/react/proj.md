---
title: "Project"
date: 2023-08-24T17:23:08+03:00
tags: [react, node]
description: "Full Stack Course Final Project"
---

* Client - React app with vite bundler
* Server - REST API in Node (express)
* DB - MongoDB
* Authentication service - firebase

# Deployment

* Client - Firebase hosting service
* Server - Cyclic service
* DB - Atlas service

# Data Base

## Entities

* User
* Product
* Order
* Cart

# Server - Rest API

* express
* ORM - `mongoose`
* nodemon
* Environment Variables in `.env` file with `dotenv` package
* validation - `express-validator` pacakge
* cors
* authorization - `firebase-admin` package

# Client

### Pages

* Home
* About
* Contact
* Catalog
* Product Page
* Cart
* Login
* Register
* Profile
* Admin

## Features

### Easy Pages Pages

* Home
    * Hero
    * Featured Products
    * Latest Products
* About
    * Google Maps iframe
* Contact
    * Contact Form

### Catalog

* Product Card
* Products Board
* Pagination
* Controls
    * Sorting
    * Filtering

### Cart

* Add to cart
* Remove from cart
* Update cart
* Checkout
* Payment

## State Management

Redux Toolkit

packages:

* `@reduxjs/toolkit`
* `react-redux`

## Client Side Routing

package: `react-router-dom`

## UI Styling Strategy

Options:

Classes Utilities:

* Tailwind CSS
* Bootstrap

Components Libraries:

* Material UI
* React Bootstrap
* Mantine

## Authentication

init firebase client app

packages:

* `firebase-tools` (install globally)
* `firebase`
* `react-firebase-hooks`
