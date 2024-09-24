import Footer from "@/components/AverageCalculator/footer";
import Navbar from "@/components/AverageCalculator/navbar";
import FAQSection from "@/components/AverageCalculator/faqsection";
import AverageCalculator from "@/components/AverageCalculator/averageCalculator";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<AverageCalculator/>
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

