This is a React application, using Redux for state management.
Application shows a list of movies along with their name and thumbnail image.

**Key Features**

List of movies along with their thumbnail image.
Dynamic search facility at the top.
The search box remains fix, as user scrolls, i.e, search box is always visible.
If user types something in search box, the list updates as per the text.
If there's nothing in search box or user erases the characters, the original list with all the data is shown.
The design is made as mobile dynamic as possible.
As per the screen size of the mobile device, 1,2 or 3 tiles are shown per row.

**Coding Points**
Data is fetched from JSON mock-up.
Code is modularized for ease of read.
Added some comments for better code walk-through.
Tried to maintain a separate CSS file rather then inline, as much as possible.
Added basic test cases.


**TO-do**

Proper lazy-loading of data.
More dynamic styling as per screen size.
Use of some styling library.
More detailed test cases.
