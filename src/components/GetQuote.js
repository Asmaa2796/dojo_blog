import { useEffect, useState } from "react";

const GetQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  let url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  const getQuote = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);

  const handleClick = () => {
    getQuote();
  };
  return (
    <div className="get-quote py-5">
      <div className="container">
        <p>{quote}</p>
        <b>
          <span></span> {author}
        </b>
        <div>
          <button onClick={handleClick} className="new-quote shadow-sm">
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
