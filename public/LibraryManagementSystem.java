class Book {
    private String bookTitle;
    private String author;
    private boolean availability;

    public Book(String bookTitle, String author) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.availability = true;
    }

    public synchronized boolean borrow() {
        if (availability) {
            availability = false;
            System.out.println(Thread.currentThread().getName() + " borrowed the book: " + bookTitle + " by " + author);
            return true;
        } else {
            System.out.println(Thread.currentThread().getName() + " tried to borrow the book: " + bookTitle + " by " + author + " but it is already borrowed.");
            return false;
        }
    }

    public synchronized void returnBook() {
        availability = true;
        System.out.println(Thread.currentThread().getName() + " returned the book: " + bookTitle + " by " + author);
    }
}

class User implements Runnable {
    private Book book;

    public User(Book book) {
        this.book = book;
    }

    @Override
    public void run() {
        try {
            if (book.borrow()) {
                Thread.sleep((long) (Math.random() * 5000));
                book.returnBook();
            }
        } catch (InterruptedException e) {
            System.out.println(Thread.currentThread().getName() + " was interrupted.");
        }
    }
}

public class LibraryManagementSystem {
    public static void main(String[] args) {
        Book book = new Book("The Great Gatsby", "F. Scott Fitzgerald");
        Thread user1 = new Thread(new User(book), "User1");
        Thread user2 = new Thread(new User(book), "User2");
        Thread user3 = new Thread(new User(book), "User3");

        user1.start();
        user2.start();
        user3.start();

        try {
            user1.join();
            user2.join();
            user3.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread was interrupted.");
        }

        System.out.println("All users have finished borrowing and returning the book.");
    }
}
