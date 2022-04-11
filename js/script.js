// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: April 6 2022
// This file contains the JS functions for index.html

"use strict"

//This function calculates area of a trapezoid

function payClicked () {
  // get user input
  let side_a = parseFloat(document.getElementById('side-a').value)
  let side_b = parseFloat(document.getElementById('side-b').value)
  let height = parseFloat(document.getElementById('height').value)

  // calculate the area
  let area = (side_a + side_b) * height / 2 

  // display the results
  document.getElementById('display-results').innerHTML = "The area of the trapezoid would be " + area.toFixed(2) + ' cm² '
}
