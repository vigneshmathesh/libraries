import unittest
from library_system import Library

class TestLibrary(unittest.TestCase):
    def test_add_book(self):
        lib = Library()
        lib.add_book("Python")
        self.assertIn("Python", lib.books)

    def test_issue_and_return(self):
        lib = Library()
        lib.add_book("DSA")
        lib.issue_book("DSA")
        self.assertNotIn("DSA", lib.books)
        self.assertIn("DSA", lib.issued_books)

        lib.return_book("DSA")
        self.assertIn("DSA", lib.books)
