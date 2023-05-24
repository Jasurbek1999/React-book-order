import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    title: "Baking Yesteryear",
    author: "B. Dylan Hollis",
    img: "https://images-na.ssl-images-amazon.com/images/I/81o-PyNHxbL._AC_UL900_SR900,600_.jpg",
    id: 1,
  },
  {
    title: "Why a Son Needs a Mom",
    author: "Gregory E. Lang",
    img: "https://images-na.ssl-images-amazon.com/images/I/91mv453UIVL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const inputFormHandler = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("Handle the input form");
  };

  const buttonChangeHandler = () => {
    alert("Click button handler");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("FORM IS SUBMITTED");
  };
  return (
    <section>
      <form onSubmit={formSubmitHandler}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={inputFormHandler}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={buttonChangeHandler}>Click me!</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
