import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { HomePage } from "./pages/Home/index";
import { EventsPage } from "./pages/Eventos/index";
import { EventDetailsPage } from "./pages/Eventos/EventoDetails/event-details-page";
import { BlogPage } from "./pages/Blog/index";
import { BlogPostPage } from "./pages/Blog/PostDetails/blog-post-page";
import { ContactPage } from "./pages/Contato/index";
import { DonatePage } from "./pages/Doacao/index";
import { AboutPage } from "./pages/Sobre/index";
import { VolunteerPage } from "./pages/Voluntarios";
import { ImpactAwardsPage } from "./pages/Impacto";
import { BiomedicinePage } from "./pages/Sobre/Biomedicina";
import { DrDacioCamposPage } from "./pages/Premiacao/dr-dacio-campos-page";
import { PremioDacioCamposInscricaoPage } from "./pages/Premiacao/premio-dacio-campos-inscricao-page";
import { Sasus } from "./pages/SASUS/Sasus";

export default function App() {
  return (
    <Router>
      <div className="">
        <SiteHeader />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventId" element={<EventDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/impact-awards" element={<ImpactAwardsPage />} />
          <Route path="/biomedicine" element={<BiomedicinePage />} />
          <Route path="/dr-dacio-campos" element={<DrDacioCamposPage />} />
          <Route
            path="/premio-dacio-campos/inscricao"
            element={<PremioDacioCamposInscricaoPage />}
          />
          <Route path="/sasus" element={<Sasus />} />
        </Routes>

        <SiteFooter />
      </div>
    </Router>
  );
}
