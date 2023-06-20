import './styles/reset.css';
import './styles/style.css';
import './modules/animations';

fetch(
  'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
