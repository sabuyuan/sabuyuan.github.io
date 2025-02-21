# ShippingCalculator
Shipping calculator for Neotech Products

Project Goal: 
    Create an web interface where warehouse workers can input specific products and an amount of that product that will be shipped. The program will list out how many of
    each product will fit in a variable amount of cartons, along with how many pallets are needed.  

    Backend code will contain the dimensions of every product box, measure out how many product boxes can fit into a carton, 
    and measure how many cartons can fit onto a pallet.  



User Experience:
Input x amount of y product -> repeat for as many different products needed -> send input for code to run

-> Show how many products in each box for however many boxes and pallets 


Pseudocode:
    Main:
        1. Take an input to decide what product will be put into cartons 
        2. Declare new objects' specifications 
        4. Calculate how many of a product can fit into a carton 
        5. Calculate total weight 
        6. Output number of product, number of cartons, and total weight
    Web Interface:
        1. Set up basic UI with a drop down for each product and a submit button
        2. Send input to the main java file
        3. Receive output from java file
        4. Write the amount of product and total weight of the pallet



Qs for logistics:
    - Do we want to fit different products in one carton?
    - Do we want them to know what the remainder amount of space is going to be?


What I need to do next:
- Figure out how to connect code to a front end interface
- Figure out logic for adding several products 
    - Recursive formula to recall and add all the objects into a linked list 
- Think about how we can portray the orientation of the box to be put in
    - 3D model? 