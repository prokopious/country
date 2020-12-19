import Head from "next/head"
import ProductList from "../components/ProductList"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../assets/index.scss'

const Index = (props) => {
  return (

    <div className="app">
      <Head>
        <title>Beautiful, high quality carpets | CarpetCity</title>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.0-beta.3/default/snipcart.css" />
        <meta name="description" content="Buy beautiful, high quality carpets for your home."/>
      </Head>
      <Header />
      <main className="main">
        <ProductList products={props.products} />
      </main>
      <Footer />
      <script src="https://cdn.snipcart.com/themes/v3.0.0-beta.4/default/snipcart.js"></script>
      <div hidden id="snipcart" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4"></div>
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      { id: "nextjs-seo_carpet1", name: "Blackberry Jam", price: 25.0, image: "static/jam.jpg", description: "This delicious jam is based on my grammy's old recipe." },
      { id: "nextjs-seo_carpet2", name: "Rooster", price: 25.00, image: "static/rooster2.png", description: "Can't get your household under control? Well, they say that you need 2 roosters in the coop. This overbearing bird will display dominance right out of the box." },
      { id: "nextjs-seo_carpet3", name: "Squirrel Chow", price: 25.00, image: "static/corn.jpg", description: "This premium formula was developed by my relatives during the Great Depression. Place it outside and watch the squirrels come runnin'!" },
      
    ]
  }
}

export default Index;


