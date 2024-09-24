import Footer from "@/components/SalesTaxCalculator/footer";
import Navbar from "@/components/SalesTaxCalculator/navbar";
import FAQSection from "@/components/SalesTaxCalculator/faqsection";
import SalesTaxCalculator from "@/components/SalesTaxCalculator/salesTaxCalculator";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
    <br/>    
<SalesTaxCalculator/>
<br></br>
        <FAQSection/>
      </main>
      <footer style={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: '1',
    padding: '20px',
  },
  footer: {
    marginTop: 'auto',
  },
};

