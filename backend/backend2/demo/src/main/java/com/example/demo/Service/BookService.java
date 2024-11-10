// package com.example.demo.Service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.Model.Book;
// import com.example.demo.Repository.BookRepository;

// @Service
// public class BookService {

//     @Autowired
//     private BookRepository bookRepository;

//     public List<Book> getAllBooks() {
//         return bookRepository.findAll();
//     }

//     public Book addBook(Book book) {
//         return bookRepository.save(book);
//     }

//     public Book updateBook(Long id, Book bookDetails) {
//         Book book = bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));
//         book.setTitle(bookDetails.getTitle());
//         // book.setAuthor(bookDetails.getAuthor());
//         book.setCategory(bookDetails.getCategory());
//         return bookRepository.save(book);
//     }

//     public void deleteBook(Long id) {
//         bookRepository.deleteById(id);
//     }
// }

package com.example.demo.Service;

import com.example.demo.Model.Book;
import com.example.demo.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Book updateBook(Long id, Book book) {
        if (bookRepository.existsById(id)) {
            book.setId(id);
            return bookRepository.save(book);
        }
        return null;
    }

    public boolean deleteBook(Long id) {
        if (bookRepository.existsById(id)) {
            bookRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
