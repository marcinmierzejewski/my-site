import {
  StatisticBox,
  StatisticList,
  SwiperBox,
  ButtonSlider,
} from "./AboutProjects.styled";
import { SlideProjects } from "../SlideProjects/SlideProjects";
import { Link } from "react-router-dom";
import { HiOutlinePresentationChartBar } from "react-icons/hi";


export const AboutProjects = () => {
  return (
    <StatisticBox>
      <StatisticList>
        <li>
          <p>repository</p>
          <p>40 +</p>
        </li>
        <li>
          {" "}
          <p>approve pull requests</p>
          <p>100 + </p>
        </li>
        <li>
          <p>personal projects</p>
          <p>12 +</p>{" "}
        </li>
      </StatisticList>
      <SwiperBox>
        <SlideProjects />
        <Link to="/projects">
          <ButtonSlider>
            Go to Projects <HiOutlinePresentationChartBar />
          </ButtonSlider>
        </Link>
      </SwiperBox>
    </StatisticBox>
  );
};
