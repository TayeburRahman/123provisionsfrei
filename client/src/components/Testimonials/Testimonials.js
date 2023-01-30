import React from "react";
import { CardBody, Avatar } from "@windmill/react-ui";
import { StarIcon } from "../../icons";

function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      <CardBody className="m-5 p-8 shadow-md">
        <div className="flex">
          <div className="rounded-full capitalize h-6 hover:cursor-default w-6 p-5 flex items-center justify-center font-bold bg-gray-300 dark:text-green-600 focus:shadow-outline-purple focus:outline-none mr-3">
            DR
          </div>
          <div className="ml-2">
            <p className="font-semibold">Daria R.</p>
            <small className="font-light uppercase text-xs text-green-600">
              verifizierte bewertung | 03.01.2023
            </small>
          </div>
        </div>
        <p className="mt-4 text-md font-semibold text-gray-600">
          Haus in Mönchengladbach verkauft
        </p>
        <p className="mt-2 text-sm">
        Haus in Mönchengladbach verkauft. Ich bin sehr zufrieden mit dem Service und der schnellen Abwicklung. Absolut empfehlenswert und ein frohes neues Jahr
        </p>
        <div className="mt-3 block md:flex items-end justify-between">
          <div className="flex">
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
          </div>
          <div className="flex text-green-600 font-medium hover:underline items-end pr-8 mt-4 md:mt-3">
            <a
              target="_blank"
              href="https://www.trustpilot.com/review/123provisionsfrei.de"
            >
              <small>Auf Trustpilot ansehen </small>
            </a>
          </div>
        </div>
      </CardBody>
      <CardBody className="m-5 p-8 shadow-md">
        <div className="flex">
          <div className="rounded-full capitalize h-6 hover:cursor-default w-6 p-5 flex items-center justify-center font-bold bg-gray-300 dark:text-green-600 focus:shadow-outline-purple focus:outline-none mr-3">
            FG
          </div>
          <div className="ml-2">
            <p className="font-semibold">Felizia G.</p>
            <small className="font-light uppercase text-xs text-green-600">
              verifizierte bewertung | 24.12.2022
            </small>
          </div>
        </div>
        <p className="mt-4 text-md font-semibold text-gray-600">
          sehr gut
        </p>
        <p className="mt-2 text-sm">
        sehr guter Aufbau der Seite. Danke für die gute Hilfestellung per Mail bei Rückfragen durch Frau Weidemann.
        </p>
        <div className="mt-3 block md:flex items-end justify-between">
          <div className="flex">
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
          </div>
          <div className="flex text-green-600 font-medium hover:underline items-end pr-8 mt-4 md:mt-3">
            <a
              target="_blank"
              href="https://www.trustpilot.com/review/123provisionsfrei.de"
            >
              <small>Auf Trustpilot ansehen </small>
            </a>
          </div>
        </div>
      </CardBody>
      <CardBody className="m-5 p-8 shadow-md">
        <div className="flex">
          <div className="rounded-full capitalize h-6 hover:cursor-default w-6 p-5 flex items-center justify-center font-bold bg-gray-300 dark:text-green-600 focus:shadow-outline-purple focus:outline-none mr-3">
            MW
          </div>
          <div className="ml-2">
            <p className="font-semibold">Marco W.</p>
            <small className="font-light uppercase text-xs text-green-600">
              verifizierte bewertung | 17.07.2022
            </small>
          </div>
        </div>
        <p className="mt-4 text-md font-semibold text-gray-600">
        Top Preis-Leistungsverhältnis
        </p>
        <p className="mt-2 text-sm">Top Preis-Leistungsverhältnis. Spart Zeit weil die Benutzung sehr einfach ist. Alles gut erklärt was ich gut finde. Support antwortet bei Problemen auch schnell.</p>
        <div className="mt-3 block md:flex items-end justify-between">
          <div className="flex">
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
          </div>
          <div className="flex text-green-600 font-medium hover:underline items-end pr-8 mt-4 md:mt-3">
            <a
              target="_blank"
              href="https://www.trustpilot.com/review/123provisionsfrei.de"
            >
              <small>Auf Trustpilot ansehen </small>
            </a>
          </div>
        </div>
      </CardBody>
      
      <CardBody className="m-5 p-8 shadow-md">
        <div className="flex">
          <div className="rounded-full capitalize h-6 hover:cursor-default w-6 p-5 flex items-center justify-center font-bold bg-gray-300 dark:text-green-600 focus:shadow-outline-purple focus:outline-none mr-3">
            AM
          </div>
          <div className="ml-2">
            <p className="font-semibold">Adrian M.</p>
            <small className="font-light uppercase text-xs text-green-600">
              verifizierte bewertung | 03.03.2022
            </small>
          </div>
        </div>
        <p className="mt-4 text-md font-semibold text-gray-600">
          Mit nur einer Anzeige ist mein Objekt…
        </p>
        <p className="mt-2 text-sm">
          Mit nur einer Anzeige ist mein Objekt auf mehreren Plattformen zu
          sehen. In Sachen Preis/Leistung ist die Plattform unschlagbar. Gerne
          immer wieder!
        </p>
        <div className="mt-3 block md:flex items-end justify-between">
          <div className="flex">
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
          </div>
          <div className="flex text-green-600 font-medium hover:underline items-end pr-8 mt-4 md:mt-3">
            <a
              target="_blank"
              href="https://www.trustpilot.com/review/123provisionsfrei.de"
            >
              <small>Auf Trustpilot ansehen </small>
            </a>
          </div>
        </div>
      </CardBody>
      <CardBody className="m-5 p-8 shadow-md">
        <div className="flex">
          <div className="rounded-full capitalize h-6 hover:cursor-default w-6 p-5 flex items-center justify-center font-bold bg-gray-300 dark:text-green-600 focus:shadow-outline-purple focus:outline-none mr-3">
            CS
          </div>
          <div className="ml-2">
            <p className="font-semibold">Christina S.</p>
            <small className="font-light uppercase text-xs text-green-600">
              verifizierte bewertung | 01.03.2022
            </small>
          </div>
        </div>
        <p className="mt-4 text-md font-semibold text-gray-600">
          Zügige und unkomplizierte Abwicklung.
        </p>
        <p className="mt-2 text-sm">
          Zügige und unkomplizierte Abwicklung. Ich bin sehr zufrieden mit dem
          Service. Also immer wieder gern! Bei der nächsten Vermietung auf jeden
          Fall wieder.
        </p>
        <div className="mt-3 block md:flex items-end justify-between">
          <div className="flex">
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
          </div>
          <div className="flex text-green-600 font-medium hover:underline items-end pr-8 mt-4 md:mt-3">
            <a
              target="_blank"
              href="https://www.trustpilot.com/review/123provisionsfrei.de"
            >
              <small>Auf Trustpilot ansehen </small>
            </a>
          </div>
        </div>
      </CardBody>
      <CardBody className="m-5 p-8 shadow-md">
        <div className="flex">
          <div className="rounded-full capitalize h-6 hover:cursor-default w-6 p-5 flex items-center justify-center font-bold bg-gray-300 dark:text-green-600 focus:shadow-outline-purple focus:outline-none mr-3">
            NR
          </div>
          <div className="ml-2">
            <p className="font-semibold">Nick R.</p>
            <small className="font-light uppercase text-xs text-green-600">
              verifizierte bewertung | 01.03.2022
            </small>
          </div>
        </div>
        <p className="mt-4 text-md font-semibold text-gray-600">
          Einfach {"&"} unkompliziert
        </p>
        <p className="mt-2 text-sm">
          Sehr einfache und unkomplizierte Plattform, Sie ist übersichtlich und
          gut mit verschiedenen anderen Immobilienplattformen vernetzt. Ich habe
          mehr Anfragen erhalten als wenn ich meine Immoilie nur in einem Portal
          platziert hätte.
        </p>
        <div className="mt-3 block md:flex items-end justify-between">
          <div className="flex">
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
            <StarIcon className="fill-current text-green-600 w-4 h-4" />
          </div>
          <div className="flex text-green-600 font-medium hover:underline items-end pr-8 mt-4 md:mt-3">
            <a
              target="_blank"
              href="https://www.trustpilot.com/review/123provisionsfrei.de"
            >
              <small>Auf Trustpilot ansehen </small>
            </a>
          </div>
        </div>
      </CardBody>
    </div>
  );
}

export { Testimonials };
