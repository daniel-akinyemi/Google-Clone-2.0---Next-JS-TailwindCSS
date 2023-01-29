import Header from "components/Header"
import Head from "next/head"
import { API_KEY, CONTEXT_KEY } from "keys"
const Search = ({results}) => {
  console.log(results)
  return (
    <div>
        <Head>
            <title>Search Results</title>
        </Head>
        {/* header  */}
        <Header/>
        {/* search results */}
    </div>
  )
}

export default Search

export async function getServerSideProps(context){
  const useDummyData = false;

  const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).then(response => response.json());

  //After the SERVER has rendered... Pass teh results to the client...
  return{
    props:{
      results: data,
    }
  }
}