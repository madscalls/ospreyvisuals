import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import What from "./components/What/What";
import Impact from "./components/Impact/Impact";
import Why from "./components/Why/Why";
import Testimonials from "./components/Testimonials/Testimonials";
import Quote from "./components/Quote/Quote";
import QuoteForm from "./components/QuoteForm/QuoteForm";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <What />
      <Impact />
      <Quote />
      <Testimonials />
      <Why />
      <QuoteForm />
      <Footer />
    </div>
  );
}

export default App;
