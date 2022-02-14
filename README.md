# CS649-AS2

In this assignment, your job will be to create a simple inventory management system using the technologies and skills that you’ve acquired in the first four modules. Although your project may closely resemble the Issue Tracker that you’re working through in the book, there will be other features built in this app that may require a bit of your own research.
Set Up
Before beginning this assignment, make sure that your project is set up correctly:
•	Create a repo in GitHub called “assignment2”.
•	Clone that repo locally and then open it within your code editor.
•	Perform all the same steps that you completed in assignment1 to get your project running under localhost:3000. You should have the same folder structure, same server.js file, etc. that you had in assignment1 as well.
Design
You should build the inventory management system so that the user interface looks like the design outlined below:


Component Hierarchy
The component hierarchy is defined below. How the data flows is a big part of this assignment!

Points to Consider
When building your application, keep these general points in mind:
•	Don’t worry about design here. In this assignment we’re simply focusing on project set up, React components, and React State. Design will come later when we discuss React Bootstrap. Just make sure that you have similar headings, text, horizontal rules, text fields, table, etc. It should look and feel similar to what’s shown above.
•	Begin with an empty array of items. Meaning, when the application loads, nothing will show in the grid initially. It won’t be until you add a new product that those items will begin to appear in the grid.
•	Your category menu should contain: Shirts, Jeans, Jackets, Sweaters, and Accessories.
•	Use the value attribute in the text box for Price Per Unit to pre-populate the $ symbol. However, strip this symbol out before storing the value in your products array. Make sure it’s displayed again within the grid.
•	The Image URL should be a simple reference to an absolute path. This path will be stored in the array as well and then appended to the View link in the grid. Use Google Images to find images of shirts, jeans, jackets, etc. to use when adding new products.
•	Don’t worry about validation for this assignment. When testing though, make sure to enter valid values in all of the fields.
•	Use React event handling techniques to add your product to an array when the user clicks the Add Product button. Remember, you’ll need to set state here.
•	If an item is present in the array, it should appear in the gird. The path to the image should be linked from the “View” link and when it’s clicked it should open the image in a new browser window/tab.
•	Don’t forget to account for the fact that each row in the grid will need its own unique key.
