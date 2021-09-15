'use strict'
// Use query Selector 

let logo = document.querySelector("#logo")
let image = logo.querySelector('img')
let body = document.getElementsByTagName("body")[0]
let nav = body.getElementsByTagName("nav")
let all = document.querySelectorAll("*")
let navClass = document.querySelector(".primary-nav")
let visitedLinks = document.querySelectorAll('p::first-line');
console.log(image.parentNode)