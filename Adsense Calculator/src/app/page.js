import Footer from "@/components/AdSenseCalculator/footer";
import Navbar from "@/components/AdSenseCalculator/navbar";
import FAQSection from "@/components/AdSenseCalculator/faqsection";
import AdSenseCal from "@/components/AdSenseCalculator/adsensecal";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
    <br/>    
<AdSenseCal/>
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

