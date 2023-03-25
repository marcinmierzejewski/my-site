import { StatisticBox, StatisticList, SwiperBox } from "./AboutProjects.styled";
import { SlideProjects } from "../SlideProjects/SlideProjects";

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
          <p>contributors</p>
          <p>880 + </p>
        </li>
        <li>
          <p>personal projects</p>
          <p>12 +</p>{" "}
        </li>
      </StatisticList>
      <SwiperBox>
        <SlideProjects />
      </SwiperBox>
    </StatisticBox>
  );
};
