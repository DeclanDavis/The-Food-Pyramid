# **TheFoodPyramid**
## **Overview**

The Food Pyramid is an app I developed as part of my module, **Web Information Processing**, in Maynooth University, National University of Ireland Maynooth.

This readme will provide an overview of the app. 

## **Brief**

Create an interactive food diary that allows users to record the different food shelf details for today and to record today's date.
Do not need to create a database, just work on the "front end", i.e. The Food Pyramid and interactive elements.

Requirements:
* Use HTML elements to create the pyramid, may not use images to create the structure.
* Colour and style settings must be achieved using *CSS*.
* Use "pure" *JavaScript* only. May not use any frameworks e.g. *React*, *jQuery*.
* Provide an indicator showing the number of items consumed on a particular shelf.
* Include buttons to increment or decrement the number of items on the shelf i.e. +/-.
* The shelf numbers should always be displayed, though the +/- buttons should only appear when you hover over a particular shelf.
* Have an interactive method for inputting the date.
* Include a gap between the level 1 and level 2, and level 2 and level 3.

Additionally:
*   Adjust the height of the individual Food Pyramid Shelves depending on the number of items on the shelf.
*   Update the colour of the circle containing the number of items depending on whether the number is greater, within or below the recommended guidelines.
*   Preserve the overall pyramid shape regardless of the height of individual shelves.
*   Include a method to switch between the two different food pyramid recommendations.
*   Provide some sort of date validation.

## **The Food Pyramid**
Initally set for `Children 1 - 4`. Gap between level 1 and 2, and level 2 and 3. Values visible on each shelf.

![Pyramid1 Display](https://github.com/DeclanDavis/TheFoodPyramid/blob/main/code/images/foodPyramid1.png?raw=true)

Each level grows as the number of items increases. The pyramid maintains it's shape. The value containers change colour to reflect if the number of items is in range for a healthy diet depending on the usertype.

![Pyramid2 Display](https://github.com/DeclanDavis/TheFoodPyramid/blob/main/code/images/foodPyramid2.png?raw=true)

When the user hovers over shelves the `-` / `+` buttons appear. Below the mouse is hovered over shelf two, therefore the `-` / `+` buttons appear.

![Pyramid3 Display](https://github.com/DeclanDavis/TheFoodPyramid/blob/main/code/images/foodPyramid3.png?raw=true)

The user can set the date here by clicking on the dropdown calendar and clicking a day, clicking the `Today` in the bottom right of the dropdown, or the `Clear` on the bottom left of the dropdown.

Note the table below has the `Children 1 - 4` section in white, and the `Adult, Teens and Children 5+` section greyed out, indicating the Food Pyramid is currently set for a child's diet.

![Pyramid4 Display](https://github.com/DeclanDavis/TheFoodPyramid/blob/main/code/images/foodPyramid4.png?raw=true)

Alternatively the user can click the `"Autoset to now"` button which will print the current date and time.
Now we have set the Food Pyramid to an Adult's diet by clicking the `Adult, Teens and Children 5+` button. Notice the Children's column in the table gets greyed out and the Adult's column goes white. 

![Pyramid5 Display](https://github.com/DeclanDavis/TheFoodPyramid/blob/main/code/images/foodPyramid5.png?raw=true)

The Food Pyramid resets to it's original height with values of 0 on each shelf.

![Pyramid6 Display](https://github.com/DeclanDavis/TheFoodPyramid/blob/main/code/images/foodPyramid6.png?raw=true)

Here we see the value containers for the number of items consumed for an Adult's diet.

![Pyramid7 Display](https://github.com/DeclanDavis/TheFoodPyramid/blob/main/code/images/foodPyramid7.png?raw=true)

![Pyramid8 Display](https://github.com/DeclanDavis/TheFoodPyramid/blob/main/code/images/foodPyramid8.png?raw=true)

When we click the `Children 1 - 4` button we see the table has been reset again.

![Pyramid9 Display](https://github.com/DeclanDavis/TheFoodPyramid/blob/main/code/images/foodPyramid9.png?raw=true)
