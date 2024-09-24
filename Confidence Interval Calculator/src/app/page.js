import Footer from "@/components/ConfidenceIntervalCalculator/footer";
import Navbar from "@/components/ConfidenceIntervalCalculator/navbar";
import FAQSection from "@/components/ConfidenceIntervalCalculator/faqsection";
import ConfidenceInterval from "@/components/ConfidenceIntervalCalculator/confidenceInterval";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<ConfidenceInterval/>
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

