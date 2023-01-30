import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@windmill/react-ui";
import { HashLink } from "react-router-hash-link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../components/FAQ/style.css";
import {
  PricingCardSale,
  PricingCardRent,
} from "../components/Cards/PricingCardLanding";
import trustpilot from "../assets/img/trustpilot_breit.svg";
import Explainer from "../assets/img/explainer.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactPlayer from "react-player";
import { AuthContext } from "../context/AuthContext";
import { FlowFactContext } from "../context/FlowFactContext";
import { DesktopNavbar } from "../components/HeaderLanding";
import { MobileNavbar } from "../components/HeaderLanding";
import { FooterLanding } from "../components/FooterLanding";
import { Button, Card, CardBody } from "@windmill/react-ui";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledSwiper = styled.div`
  position: relative;
  pointer-events: all;
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  .btn {
    font-size: 28px;
    border-radius: 10px;
    margin: 5px;
    padding: 0px 10px 0px 5px;
    transition: 0.3s;
  }
  .btn:hover {
    transform: scale(1.2);
  }
  .btn.prev {
    padding: 0px 5px 0px 10px;
  }
  .buttons-swiper {
    display: flex;
    justify-content: space-between;
  }
`;
SwiperCore.use([Navigation]);
function SetTitleTag() {
  return (
    <Helmet>
      <title>Home - 123provisionsfrei</title>
    </Helmet>
  );
}

function SectionTwoBlocks({ children }) {
  return (
    <section className="flex justify-center pt-16 md:pt-8">
      <div className="w-full md:w-11/12 lg:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">{children}</div>
      </div>
    </section>
  );
}

function SectionCenteredHeader({ children }) {
  return (
    <section className="flex justify-center py-12 md:py-16 bg-green-600">
      <div className="flex flex-col text-center items-center w-11/12 lg:w-2/3 text-white">
        {children}
      </div>
    </section>
  );
}

function ListingsDisplay({ recentImmobilien }) {
  const [mySwiper, setMySwiper] = useState({});
  return (
    <section className="py-8 md:py-32 bg-gray-50">
      <div className="max-w-4xl text-center justify-content-center mx-auto">
        <p className="mt-8 text-3xl md:text-4xl font-bold text-gray-700">
          Zuletzt veröffentlicht
        </p>
        <p className="mt-4 text-xl text-center text-gray-600">
          Immobilien auf 123provisionsfrei:
        </p>
      </div>
      {recentImmobilien.length !== 0 && (
        <>
          <StyledSwiper className="listingslider gap-4 py-12 max-w-4xl text-center justify-content-center mx-auto">
            <div className="buttons-swiper">
              <button
                onClick={() => mySwiper.slidePrev()}
                title={"prev"}
                className="btn prev text-gray-500"
                type="button"
              >
                {"<-"}
              </button>
              <button
                onClick={() => mySwiper.slideNext()}
                title={"next"}
                className="btn prev text-gray-500"
                type="button"
              >
                {"->"}
              </button>
            </div>
            <>
              <Card>
                <Swiper
                  spaceBetween={0}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  onInit={(ev) => {
                    setMySwiper(ev);
                  }}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    900: {
                      slidesPerView: 3,
                    },
                    600: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  {recentImmobilien.map((immo) => (
                    <SwiperSlide key={immo.uniqId}>
                      <CardBody className="">
                        <div className="listing">
                          <div className="text-left mx-auto">
                            <div style={{ height: "200px" }}>
                              <img
                                className="w-full h-full object-fit: cover;"
                                src={
                                  immo.images.length === 0
                                    ? "data:image/png;base64,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AAACEegAABCIQAcAgEAEOgAABCLQAQAgEIEOAACBCHQAAAhEoAMAQCACHQAAAhHoAAAQiEAHAIBABDoAAAQi0AEAIBCBDgAAgQh0AAAIRKADAEAgAh0AAAIR6AAAEIhABwCAQAQ6AAAEItABACAQgQ4AAIEIdAAACESgAwBAIAIdAAACEegAABCIQAcAgEAEOgAABCLQAQAgEIEOAACBCHQAAAhEoAMAQCACHQAAAhHoAAAQiEAHAIBABDoAAAQi0AEAIBCBDgAAgQh0AAAIRKADAEAgAh0AAAIR6AAAEIhABwCAQAQ6AAAEItABACAQgQ4AAIEIdAAACESgAwBAIAIdAAACEegAABCIQAcAgEAEOgAABCLQAQAgEIEOAACBCHQAAAhEoAMAQCACHQAAAhHoAAAQiEAHAIBABDoAAAQi0AEAIBCBDgAAgQh0AAAIRKADAEAgAh0AAAIR6AAAEIhABwCAQAQ6AAAEItABACAQgQ4AAIEIdAAACESgAwBAIAIdAAACEegAABCIQAcAgEAEOgAABCLQAQAgEIEOAACBCHQAAAhEoAMAQCACHQAAAhHoAAAQiEAHAIBABDoAAAQi0AEAIBCBDgAAgQh0AAAIRKADAEAgAh0AAAIR6AAAEIhABwCAQAQ6AAAEItABACAQgQ4AAIEIdAAACESgAwBAIAIdAAACEegAABCIQAcAgEAEOgAABCLQAQAgEIEOAACBCHQAAAhEoAMAQCACHQAAAhHoAAAQiEAHAIBABDoAAAQi0AEAIIyU/g8I3rkHYhpY9QAAAABJRU5ErkJggg=="
                                    : immo.images[immo.images.length - 1]
                                }
                                alt={immo.title}
                              />
                            </div>
                            <p title={immo.title} className="py-4 text-lg">
                              {immo.title.slice(0, 25)}...
                            </p>
                            <p className="text-sm">
                              Objektnummer: {immo.uniqId}
                            </p>
                            <p className="text-sm">Postleitzahl: {immo.zip}</p>
                            <p className="text-sm">Stadt: {immo.city}</p>
                            <p className="text-sm">Preis: {immo.price} €</p>
                            <p className="link pt-4 text-sm font-medium">
                              <Link
                                className="flex"
                                to={`/immobilien/id/${immo.uniqId}`}
                              >
                                Mehr erfahren -&gt;
                              </Link>
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Card>
            </>
          </StyledSwiper>
          <div className="text-center">
            <Link to="/immobilien/1">
              <Button layout="outline" size="larger">
                Immobilien ansehen -&gt;
              </Button>
            </Link>
          </div>
        </>
      )}
      {recentImmobilien.length === 0 && (
        <div className="listingslider gap-4 py-12 max-w-4xl text-center justify-content-center mx-auto">
          Loading...
        </div>
      )}
    </section>
  );
}

function SectionFeaturesGrid({ children }) {
  return (
    <section
      id="Funktionen"
      className="flex justify-center py-12 md:py-16 bg-gray-50"
    >
      <div className="text-center w-11/12 lg:w-3/4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
          Was bieten wir?
        </h2>
        <p className="my-4 text-xl text-gray-600">
          Funktionen die du für den Verkauf brauchst.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-16">
          {children}
        </div>
        <div className="flex my-5 justify-center mx-auto">
          <Link to="/auth/create-account">
            <Button size="larger" className="w-full">
              Immobilie inserieren
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, body }) {
  return (
    <Card colored className="bg-white shadow-lg">
      <CardBody className="p-6">
        <p className="mb-4 text-lg text-gray-600 font-semibold">{title}</p>
        <p className="text-gray-500">{body}</p>
      </CardBody>
    </Card>
  );
}

function Landing() {
  const { user } = useContext(AuthContext);
  const { recentImmobilien } = useContext(FlowFactContext);
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />

      <main>
        <SetTitleTag />
        <div className="lg:pt-12 pt-0">
          <SectionTwoBlocks className="flex items-start">
            <div className="flex flex-col px-4 lg:px-0">
              <p className="mb-4 leading-36 text-3xl md:text-3xl font-bold text-gray-800">
                1 Immobilienanzeige für alle großen Portale.
              </p>
              <p className="mt-2 mb-8 lg:w-5/6 text-md text-gray-600">
                Klicke auf den Button {"&"} inseriere deine Immobilie ohne
                Makler. Jetzt bis zu 50% sparen.
              </p>
              <div className="flex flex-wrap md:flex-nowrap gap-4 justify-start items-end">
                {!user && (
                  <Link to="/auth/create-account">
                    <Button size="larger">Immobilie inserieren</Button>
                  </Link>
                )}
                {user && (
                  <Link to="/app">
                    <Button size="larger">Zum Dashboard</Button>
                  </Link>
                )}
                <HashLink smooth to="/landing/#Preise">
                  <Button className="bg-gray-100 mt-2 md:mt-0" layout="link" size="regular">
                    Preise ansehen
                  </Button>
                </HashLink>
              </div>
              <a
                href="https://de.trustpilot.com/review/123provisionsfrei.de"
                target="_blank"
                and
                rel="noopener noreferrer"
                className="mt-8"
              >
                <img
                  xmlns="http://www.w3.org/2000/svg"
                  src={trustpilot}
                  className="md:w-2/3 w-full -ml-4 my-4"
                ></img>
              </a>
            </div>
            <div className="flex justify-center md:h-auto md:px-0">
              <div className="hidden md:block">
                <ReactPlayer
                  controls={true}
                  width="500px"
                  height="280px"
                  url="https://info-at-123provisionsfrei.wistia.com/medias/cplog1zr82"
                />
              </div>
              <div className="block md:hidden">
                <ReactPlayer
                  controls={true}
                  width="360px"
                  height="200px"
                  url="https://info-at-123provisionsfrei.wistia.com/medias/cplog1zr82"
                  playsinline={true}
                />
              </div>
            </div>
          </SectionTwoBlocks>
          <div className="lg:-mt-20">
            <svg
              height="100%"
              width="100%"
              id="svg"
              viewBox="0 0 1440 400"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300 ease-in-out delay-150"
            >
              <path
                d="M 0,400 C 0,400 0,133 0,133 C 76.10526315789471,146.33014354066984 152.21052631578942,159.6602870813397 241,145 C 329.7894736842106,130.3397129186603 431.263157894737,87.68899521531101 541,92 C 650.736842105263,96.31100478468899 768.736842105263,147.58373205741628 868,157 C 967.263157894737,166.41626794258372 1047.7894736842106,133.97607655502392 1140,123 C 1232.2105263157894,112.02392344497608 1336.1052631578946,122.51196172248804 1440,133 C 1440,133 1440,400 1440,400 Z"
                stroke="none"
                strokeWidth="0"
                fill="#BBF7D0"
                className="transition-all duration-300 ease-in-out delay-150"
              ></path>
              <path
                d="M 0,400 C 0,400 0,266 0,266 C 108.19138755980859,285.9521531100479 216.38277511961718,305.90430622009575 322,312 C 427.6172248803828,318.09569377990425 530.6602870813399,310.334928229665 608,290 C 685.3397129186601,269.665071770335 736.9760765550238,236.75598086124404 825,238 C 913.0239234449762,239.24401913875596 1037.4354066985647,274.6411483253588 1146,285 C 1254.5645933014353,295.3588516746412 1347.2822966507176,280.6794258373206 1440,266 C 1440,266 1440,400 1440,400 Z"
                stroke="none"
                strokeWidth="0"
                fill="#86EFAC"
                className="transition-all duration-300 ease-in-out delay-150"
              ></path>
            </svg>
          </div>
        </div>
        <h2
          id="Ablauf"
          className="mt-24 text-3xl text-center md:text-4xl font-bold text-gray-700"
        >
          Wie funktioniert 123provisionsfrei?
        </h2>
        <p className="mt-4 -mb-4 text-xl text-center text-gray-600">
          In 3 Schritten vermarktet.
        </p>
        <SectionTwoBlocks>
          <div className="h-auto">
            <img
              aria-hidden="true"
              className="object-cover w-11/12 h-11/12 rounded-sm"
              src={Explainer}
              alt="explainer"
            />
          </div>
          <div className="flex flex-col justify-center px-12 pb-12">
            <h1 className="mb-4 text-2xl font-semibold text-gray-700">
              Nachdem du dich gratis registriert hast
            </h1>
            <p className="mb-4 text-lg text-gray-500">
              trägst du die erforderlichen Daten zu deiner Immobilie ein {"&"}{" "}
              lädst Fotos, sowie Grundrisse hoch.
            </p>
            <p className="mb-8 text-lg text-gray-500">
              Nach dem Auswählen des Anzeigenpakets geht die Immobilienanzeige
              auf den gewünschten Portalen online.
            </p>
            <Link to="/auth/create-account">
              <Button size="larger">Immobilie inserieren</Button>
            </Link>
          </div>
        </SectionTwoBlocks>

        <section id="Rezensionen" className="py-8 md:py-16 bg-gray-50">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-700">
            Was sagen bisherige Kunden?
          </h2>
          <p className="my-4 text-xl text-center text-gray-600">
            Kunden berichten:
          </p>

          <div className="w-full md:w-2/3 mx-auto">
            <Testimonials />
          </div>
        </section>
        <section id="Preise" className="py-8 md:py-16 bg-gray-50">
          <div className="max-w-4xl text-center justify-content-center mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
              Unsere Preise
            </h1>
            <p className="my-4 text-xl text-gray-600">
              Alle Anzeigen sind jederzeit kündbar.
            </p>
            <Tabs className="w-full mb-12">
              <TabList className="flex justify-center gap-0 mb-16">
                <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-5 py-2 rounded-l-lg text-sm font-normal">
                  Verkauf
                </Tab>
                <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-2 rounded-r-lg text-sm font-normal">
                  Vermietung
                </Tab>
              </TabList>

              <TabPanel>
                <PricingCardSale />
              </TabPanel>
              <TabPanel>
                <PricingCardRent />
              </TabPanel>
            </Tabs>
            <Accordion
              id="FAQ"
              className="text-md text-left font-regular w-full md:w-3/4 mx-auto mb-12"
              allowZeroExpanded="true"
            >
              {/*<AccordionItem id="sparen">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Wie viel spare ich gegenüber den Portalen?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    Wir reichen unsere Sonderkonditionen an dich als Kunden
                    weiter.
                  </p>
                  <img
                    xmlns="http://www.w3.org/2000/svg"
                    src={sparen}
                    className="w-full md:w-3/4"
                  ></img>
                </AccordionItemPanel>
              </AccordionItem>*/}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Wie lange dauert es, bis die Immobilie veröffentlicht wird?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    Nachdem du deine Immobilienanzeige im Konto veröffentlicht
                    hast, wird sie von uns geprüft. In der Regel dauert es
                    maximal eine Stunde, bis die Immobilie auf den gewünschten
                    Plattformen erscheint.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Mit wie vielen Anfragen kann ich rechnen?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Das hängt vor allem von der Lage und dem Preis ab. Unsere
                    Anzeigen bieten eine hohe Sichtbarkeit, schon ab dem Basic
                    Paket.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Wie erhalte ich die Kontaktdaten der Interessenten?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    Bei der Veröffentlichung gibst du deine Kontaktdaten an. Auf
                    die angegebene E-Mail Adresse erhältst du die Daten der
                    Interessenten.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Welche Zahlungsmethoden stehen zur Verfügung?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="font-light">
                    Als Zahlungsmethoden stehen dir Paypal, Kreditkarte und SEPA
                    Lastschrift zur Verfügung.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Link to="/auth/create-account">
              <Button size="larger">Immobilie inserieren</Button>
            </Link>
          </div>
        </section>
        {/*<ListingsDisplay recentImmobilien={recentImmobilien} />*/}
        <SectionFeaturesGrid>
          <FeatureCard
            title="Anzeige erstellen"
            body="Unser Formular führt dich durch alle nötigen Angaben zu der Immobilie."
          />
          <FeatureCard
            title="Automatische Übertragung"
            body="Die Immobilie wird automatisch auf ImmoScout24 und Co. veröffentlicht."
          />
          <FeatureCard
            title="Anfragen erhalten"
            body="Interessenten kontaktieren dich wie gewohnt und wir leiten die Anfragen per E-Mail weiter."
          />
          <FeatureCard
            title="Optimiertes Formular"
            body="Die passenden Daten werden für eine optimale Vermarktung abgefragt."
          />
          <FeatureCard
            title="Automatische Rechnung"
            body="Nach Veröffentlichung kommt die Rechnung mit ausgewiesener MwSt. per E-Mail."
          />
          <FeatureCard
            title="Sicherer Datenverkehr"
            body="Wir legen großen Wert auf Datenschutz und geben keine Daten weiter."
          />
        </SectionFeaturesGrid>

        <SectionCenteredHeader>
          <h2 className="text-3xl md:text-4xl font-semibold mt-8 mb-2">
            Worauf wartest du noch?
          </h2>
          <p className="text-gray-50 text-center text-md">
            Klicke auf den Button und erhalte mehr Anfragen für deine Immobilie.
          </p>
          <div className="mt-8">
            <Link to="/auth/create-account">
              <Button size="larger">Immobilie inserieren {"->"}</Button>
            </Link>
          </div>
        </SectionCenteredHeader>
      </main>
      <FooterLanding />
    </>
  );
}

export default Landing;
