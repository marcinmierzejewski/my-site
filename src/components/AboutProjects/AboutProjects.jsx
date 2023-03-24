import { StatisticBox, StatisticList, SwiperBox } from "./AboutProjects.styled";

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
      <SwiperBox>Swider place</SwiperBox>
    </StatisticBox>
  );
};
