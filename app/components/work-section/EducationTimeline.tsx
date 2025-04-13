"use client";

import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const EducationData = [
  {
    companyImg: "/btech.jpeg", // Replace with your college logo
    jobTitle: "Bachelor of Technology",
    company: "Shri Ramdeobaba College of Engineering and Management, Nagpur, Maharashtra, India",
    jobType: "",
    duration: "Nov 2022 – Present",
    stuffIDid: [
      "Specialized in Artificial Intelligence and Machine Learning with a CGPA of 9.40/10.",
      
    ],
  },
  {
    companyImg: "/12th.jpeg", // Replace with your junior college logo
    jobTitle: "Higher Secondary School",
    company: "G.B.M.M. Jr College, Hinganghat, Maharashtra, India",
    jobType: "",
    duration: "2021 – 2022",
    stuffIDid: [
      "Completed Higher Secondary Education with 84%.",
      
    ],
  },
  {
    companyImg: "/10th-logo.jpg", // Replace with your junior college logo
    jobTitle: "Senior Secondary School",
    company: "Bharat School, Hinganghat, Maharashtra, India",
    jobType: "",
    duration: "2019 – 2020",
    stuffIDid: [
      "Completed Senior Secondary School with 89%.",
      
    ],
  },
];

export default function Education() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title>Education</Title>

      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {EducationData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}