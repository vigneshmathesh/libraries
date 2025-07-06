class Library:
    def __init__(self):
        self.books = []
        self.issued_books = []

    def add_book(self, book_name):
        self.books.append(book_name)

    def display_books(self):
        return self.books

    def issue_book(self, book_name):
        if book_name in self.books:
            self.books.remove(book_name)
            self.issued_books.append(book_name)

    def return_book(self, book_name):
        if book_name in self.issued_books:
            self.issued_books.remove(book_name)
            self.books.append(book_name)
