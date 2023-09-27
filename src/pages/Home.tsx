import Section from '../components/Section';

const Home = () => {
  return (
    <Section>
      <div className="min-h-screen">
        <h1 className="text-4xl mb-3">PropertEase</h1>
        <div className="grid md:grid-cols-12 gap-2">
          <div className="md:col-span-5">
            <p className="text-lg">
              Effektiv fastighetsadministration för professionella fastighetsskötare och ägare är vår specialitet. Vi
              erbjuder en användarvänlig plattform som är skräddarsydd för att effektivt hantera alla aspekter av
              fastighetsförvaltning.
              <br />
              <br />
              Med vår lösning kan du smidigt administrera fastigheter, hantera hyresgäster, skapa och hantera fakturor,
              hantera betalningar och hantera avtal - allt på en och samma plats. Vår prisstruktur börjar från 499 kr
              per månad och är utformad för att möta behoven hos professionella fastighetsaktörer som du. Med
              PropertEase kan du rationalisera din fastighetsförvaltning och öka effektiviteten i ditt arbete.
            </p>
          </div>
          <div className="md:col-span-7"></div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
