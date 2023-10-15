#!/usr/bin/python3
'''
Square class with with and height
'''


class Square:
    """Square class"""
    def __init__(self, width=0, height=0):
        """
        __init__ - Initializer
        @self: Instance
        @width: Square width
        @height: Square height
        """
        self.width = width
        self.height = height

    def area_of_my_square(self):
        """
        area_of_my_square: Area of the square
        @self: Instance
        Return: Square area
        """
        return self.width * self.height

    def perimiter_of_my_square(self):
        """
        perimiter_of_my_square - permiter of the square
        @self: Instance
        Return: Perimeter
        """
        return (self.width * 4)

    def __str__(self):
        """
        __str__ - class string
        @self: Instance
        Return: Instance object rep
        """
        return f"{self.width} {self.height}"


if __name__ == "__main__":
    s = square(width=12, height=9)
    print(s)
    print(s.area_of_my_square())
    print(s.perimiter_of_my_square())
