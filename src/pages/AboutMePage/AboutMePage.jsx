import { BoxSection } from "../../components/Section/Section";

const ThirdPage = () => {
  return (
    <>
      <BoxSection>
        <h1>My name Marcin Mierzejewski</h1>
      </BoxSection>
      <BoxSection>
        <h2>
          I'm beginner Fullstack Web Developer, specialized in Frontend using
          React - JavaScript library
        </h2>
        <p>
          I am a graduate of Front-End Developer course. Looking for my new job.
          I have 1 year experience gained while studying. Open to changes and
          learn innovative technologies. I am a very conscientious and
          responsible person for whom work is very important. Work like Front-
          End Developer will be an opportunity for me to expand my knowledge
        </p>
      </BoxSection>

      <BoxSection>
        <h3> WORK EXPERIENCE</h3>
        <ul>
          <li>
            <h4>Junior Project Manager</h4>
            <p>PKP Polskie linie Kolejowe S,A. | February 2020 - present</p>
            <p>
              Responsibilities: Participation in the development of
              comprehensive tender documentation. Implementation of contracts
              for the implementation of project documentation and obtaining the
              necessary administrative decisions. Implementation of contracts
              for construction works.
            </p>
          </li>
          <li>
            <h4>Surveyor</h4>
            <p>Geo-Pix | March 2011 - February 2020</p>
            <p>
              Responsibilities: Managing the measurement team during the
              implementation of construction processes. Analysis of construction
              projects and development of measurement results. Accurate analysis
              of calculations and results obtained from field measurements
            </p>
          </li>
        </ul>
      </BoxSection>

      <BoxSection>
        <h3>EDUCATION</h3>
        <ul>
          <li>
            <p>IT School GoIT | 2021 - 2022</p>
            <p>Full stack developer</p>
          </li>
          <li>
            <p>Military University of Technology | 2007 - 2014</p>
            <p>Master Engineer | Geodesy and Cartography</p>
          </li>
        </ul>
      </BoxSection>
    </>
  );
};

export default ThirdPage;
