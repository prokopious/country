import Head from "next/head"
import ProductList from "../components/ProductList"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../assets/index.scss'
import Typography from 'typography'
import deYoungTheme from 'typography-theme-de-young'

const typography = new Typography(deYoungTheme)

const Index = (props) => {
  return (

    <div className="app">
      <Head>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT&family=Oswald:wght@200&display=swap');
</style>
        <title>The Glass Phial</title>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.0-beta.3/default/snipcart.css" />
        <meta name="description" content="Buy perfuming supplies natural and synthetic."/>
      </Head>
      <Header />
      <div className="promotional-message">The Glass Phial</div>
      <div className="other">A COLLECTION OF FINE PERFUMING SUPPLIES</div>
      <main className="main">
        <div id="new">New Items</div>

        <ProductList products={props.products} />
      </main>
      <Footer />
      <script src="https://cdn.snipcart.com/themes/v3.0.0-beta.4/default/snipcart.js"></script>
      <div hidden id="snipcart" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4"></div>
    
<style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Old Standard TT;
  }

  * {
    box-sizing: border-box;
  }
`}</style>
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      { id: "nextjs-seo_carpet1", name: "Turkish Rose Absolute", price: 25.0, image: "static/rose.jpg", description: "This is the rose of Byzantium." },
      { id: "nextjs-seo_carpet2", name: "Methyl Laitone", price: 25.00, image: "https://www.gardenia.net/storage/app/public/guides/detail/19587224_m.jpg", description: "Methyl laitone imparts milky tonalities that are important in gardenia and sandalwood accords." },
      { id: "nextjs-seo_carpet3", name: "α-irone", price: 25.00, image: "https://www.gardenia.net/storage/app/public/guides/detail/83847060_mOptimized.jpg", description: "This iris molecule is expensive, but even a tiny amount adds complexity and lift." },
      
    ]
  }
}

export default Index;


