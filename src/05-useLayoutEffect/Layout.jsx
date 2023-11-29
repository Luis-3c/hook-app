import { useCounter,useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

    const url = 'https://api.breakingbadquotes.xyz/v1/quotes/';

    const {counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(url + counter);

    //const {author, quote} = !!data && data[0];

  return (
    <>
        <h2>Breaking Bad Quotes</h2>
        <hr />

        {
            isLoading 
            ? (
                <LoadingQuote/>
            )
            : data.map((element, index) => {
                return (
                    <Quote key={index} author={element.author} quote={element.quote} />
                );
            })
        }

        <button 
            onClick={() => increment(1)} 
            disabled={isLoading} 
            className="btn btn-primary">
                Load More
        </button>

    </>
  )
}
