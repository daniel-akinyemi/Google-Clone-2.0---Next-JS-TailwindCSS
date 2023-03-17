import Header from "components/Header"
import Head from "next/head"
import Response from "Response"
import Router, { useRouter } from "next/router"
import SearchResults from "components/SearchResults"



const Search = ({results}) => {

const router = useRouter();


  console.log(results) 
  return (
    <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
        </Head>
        {/* header  */}
        <Header/>
        {/* search results */}
        <SearchResults results={results}/>
    </div>
  )
}

export default Search

export async function getServerSideProps(context){
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());

  //After the SERVER has rendered... Pass the results to the client...
  return{
    props:{
      results: data,
    }
  }
}