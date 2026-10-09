import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Home } from "@/sections/Home";
import { About } from "@/sections/About";
import { Place } from "@/sections/Place";
import { Contact } from "@/sections/Contact";
import { New } from "@/sections/New";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="place">
          <Place />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="new">
          <New />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
