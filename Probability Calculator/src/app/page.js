import Footer from "@/components/ProbabilityCalculator/footer";
import Navbar from "@/components/ProbabilityCalculator/navbar";
import FAQSection from "@/components/ProbabilityCalculator/faqsection";
import ProbabilityCalculator from "@/components/ProbabilityCalculator/probabilityCalculator";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
    <br/>    
<ProbabilityCalculator/>
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

