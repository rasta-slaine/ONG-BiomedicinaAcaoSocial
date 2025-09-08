import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LanguageProvider } from "./contexts/LanguageContext";
import { TopHeader } from "./components/TopHeader";
import { SiteFooter } from "./components/site-footer";
import { HomePage } from "./pages/Home/index";
import { EventsPage } from "./pages/Eventos/index";
import { EventDetailsPage } from "./pages/Eventos/EventoDetails/event-details-page";
import { BlogPage } from "./pages/Blog/index";
import { BlogPostPage } from "./pages/Blog/PostDetails/blog-post-page";
import { ContactPage } from "./pages/Contato/index";
import { DonatePage } from "./pages/Doacao/index";
import { PaginaSobre } from "./pages/Sobre/index";
import { VolunteerPage } from "./pages/Voluntarios";
import { ImpactAwardsPage } from "./pages/Impacto";
import { BiomedicinePage } from "./pages/Sobre/Biomedicina";
import { DrDacioCamposPage } from "./pages/Premiacao/dr-dacio-campos-page";
//import { PremioDacioCamposInscricaoPage } from "./pages/Premiacao/premio-dacio-campos-inscricao-page";
import { SasusPage } from "./pages/SASUS/index";
import { SasusAgendamento } from "./pages/SASUS/Agendamento";
import { TransparencyPage } from "./pages/Transparencia/index";
import { FormularioInscricao } from "./pages/Premiacao/components/FormularioInscricao";
//import { Navbar } from "./components/Navbar";
import { ResponsiveNavbar } from "./components/responsive-nav-bar";
import { ProjetoBiomedicinaAcaoSocial } from "./pages/Projetos/1.ProjetoBiomedicinaAcaoSocial/Index";
import { ProjetoPsicologiaAcaoSocial } from "./pages/Projetos/3.ProjetoPsicologiaAcaoSocial/Index";
import { ProjetoEmfermagemAcaoSocial } from "./pages/Projetos/2.ProjetoEnfermagemAcaoSocial/Index";
import { ProjetoFarmaciaAcaoSocial } from "./pages/Projetos/4.ProjetoFarmaciaAcaoSocial/Index";
import { ProjetoFisioterapiaAcaoSocial } from "./pages/Projetos/5.ProjetoFisiterapiaAcaoSocial/Index";
import { ProjetoNutricaoAcaoSocial } from "./pages/Projetos/6.ProjetoNutricaoAcaoSocial/Index";
import { ProjetoVeterinariaAcaoSocial } from "./pages/Projetos/7.ProjetoVeterinariaAcaoSocial/Index";
import { ProjetoMedicinaAcaoSocial } from "./pages/Projetos/8.ProjetoMedicinaAcaoSocial/Index";
import { ProjetoAcupunturaAcaoSocial } from "./pages/Projetos/9.ProjetoAcupunturaAcaoSocial/Index";
import { ProjetoOdontologiaAcaoSocial } from "./pages/Projetos/10.ProjetoOdontologiaAcaoSocial/Index";
import { ProjetoTampinhas } from "./pages/Projetos/Tampinhas/Index";
import { ProjetoProgramaCuidar } from "./pages/Projetos/ProgramaCuidar/Index";
import { ProjetoDoarMedicamentos } from "./pages/Projetos/Medicamentos/DoacaoMedicamentos";
import { ProjetoDescarteConsciente } from "./pages/Projetos/Medicamentos/DescarteMedicamentos";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="">
          <TopHeader />
          <ResponsiveNavbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/eventos" element={<EventsPage />} />
            <Route path="/eventos/:eventId" element={<EventDetailsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/doacao" element={<DonatePage />} />
            <Route path="/sobre" element={<PaginaSobre />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/impact-awards" element={<ImpactAwardsPage />} />
            <Route path="/transparencia" element={<TransparencyPage />} />
            <Route path="/sasus" element={<SasusPage />} />
            <Route path="/sasus/agendamento" element={<SasusAgendamento />} />
            <Route path="/dr-dacio-campos" element={<DrDacioCamposPage />} />
            <Route
              path="/premio-dacio-campos/inscricao"
              element={<FormularioInscricao />}
            />
            <Route path="/inscricao" element={<FormularioInscricao />} />
            <Route path="/projetos/tampinhas" element={<ProjetoTampinhas />} />
            <Route
              path="/projetos/programa-cuidar"
              element={<ProjetoProgramaCuidar />}
            />
            <Route
              path="/programas/medicamentos-doacao"
              element={<ProjetoDoarMedicamentos />}
            />
            <Route
              path="/programas/medicamentos-descarte"
              element={<ProjetoDescarteConsciente />}
            />

            <Route
              path="/projetos/biomedicina"
              element={<ProjetoBiomedicinaAcaoSocial />}
            />
            <Route path="/biomedicine" element={<BiomedicinePage />} />
            <Route
              path="/projetos/enfermagem"
              element={<ProjetoEmfermagemAcaoSocial />}
            />
            <Route
              path="/projetos/psicologia"
              element={<ProjetoPsicologiaAcaoSocial />}
            />
            <Route
              path="/projetos/farmacia"
              element={<ProjetoFarmaciaAcaoSocial />}
            />
            <Route
              path="/projetos/fisioterapia"
              element={<ProjetoFisioterapiaAcaoSocial />}
            />
            <Route
              path="/projetos/nutricao"
              element={<ProjetoNutricaoAcaoSocial />}
            />
            <Route
              path="/projetos/veterinaria"
              element={<ProjetoVeterinariaAcaoSocial />}
            />
            <Route
              path="/projetos/medicina"
              element={<ProjetoMedicinaAcaoSocial />}
            />
            <Route
              path="/projetos/acupuntura"
              element={<ProjetoAcupunturaAcaoSocial />}
            />
            <Route
              path="/projetos/odontologia"
              element={<ProjetoOdontologiaAcaoSocial />}
            />
          </Routes>

          <SiteFooter />
        </div>
      </Router>
    </LanguageProvider>
  );
}
