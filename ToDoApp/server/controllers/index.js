// Purpose:
// Crud for LISTS
// Crud for ITEMS
// Optional: Crud for USERS

const { response } = require("express");

// index.js is the collection point for all controllers
// index.js is the outlet point for all controllers

// Current Goal: Test Controller

const TestController = require("./TestController");

module.exports = {
    test: TestController,
};