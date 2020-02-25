# Drawing Editor - Object Oriented Drawing Editor with Typescript

- This program is written with vue + typescript. It uses classes to represent objects.

## Requirements

- There shall be four shapes in this program: Circle, rectangle, line.
- There shall be a class Shape that has
  - name of the shape - string
  - draw() method that draws the shape into canvas.
- There shall be a Point class that consists of
  - x coordinate - real number
  - y coordinate - real number
- All Shapes shall have a parent class Shape.
- Line class shall extend Shape class and shall have 
  - A - Point
  - B - Point
- Rectangle class shall extend Shape class and shall have
  - A - Point
  - B - Point
  - C - Point
  - D - Point
- There shall be a Circle class that has 
  - the center - Point
  - radius - real number  
- Canvas class shall have
  - width - integer
  - height - integer
  - backgroundColor - html hls color value as string
- A point shall be able to be draggable
- A shape shall be able to be draggable, dragging a shape moves all its points at the same time
- A shape shall be able to be deletable.
