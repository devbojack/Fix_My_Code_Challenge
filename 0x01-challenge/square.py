#!/usr/bin/python3
'''
Square class with with and height
'''


class Square:
    """Square class"""
    def __init__(self, width=0, height=0):
        """
        Initializer
        @width: Square width
        @height: Square height
        """
        self.width = width
        self.height = height

    def area_of_my_square(self):
        """ Area of the square """
        return self.width * self.height

    def PermiterOfMySquare(self):
        """Permiter of the square"""
        return (self.width * 4)

    def __str__(self):
        """class string"""
        return f"{self.width} {self.height}"


if __name__ == "__main__":
    s = square(width=12, height=9)
    print(s)
    print(s.area_of_my_square())
    print(s.PermiterOfMySquare())
