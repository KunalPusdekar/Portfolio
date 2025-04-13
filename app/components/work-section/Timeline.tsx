"use client";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";


const TimelineData = [
  {
    companyImg: "/nullclass_logo.jpeg",
    jobTitle: "Full Stack Web Developer Intern",
    company: "Nullclass Technology Private Limited",
    jobType: "Internship",
    duration: "Jan 2025 – Present",
    stuffIDid: [
      "Developing full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Building secure authentication systems, API endpoints, and database integrations.",
      "Optimizing application performance and implementing best coding practices for scalability.",
      "Gaining hands-on experience with DevOps tools and cloud deployment strategies.",
    ],
  },
  {
    companyImg: "/aicte.jpeg",
    jobTitle: "AWS AI-ML Virtual Intern",
    company: "EduSkills Foundation — Supported by AWS Academy",
    jobType: "Internship",
    duration: "Jan 2024 – Mar 2024",
    stuffIDid: [
      "Gained hands-on experience in machine learning, data analysis, and AWS cloud computing through an 8-week internship.",
      "Developed and deployed AI models using Python, AWS SageMaker, and TensorFlow for predictive analytics.",
      "Worked on a capstone project, integrating machine learning pipelines and presenting findings to industry mentors.",
      "Earned an Internship Certificate and AWS Academy Course Completion Certificate, enhancing AI/ML expertise.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title>Experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
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