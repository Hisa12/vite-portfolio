import comingSoon from "../assets/comingSoon.png";
import taskManage from "../assets/taskManage.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";

const mywork_data = [
  {
    w_no: 1,
    w_name: "Task Management",
    w_img: taskManage,
    w_detail: [
      {
        w_links: [
          {
            link: "https://github.com/Hisa12/swift-todolist",
            icon: faGithub,
            alt: "github",
          },
          {
            link: null,
            icon: faHome,
            alt: "website",
          },
          {
            link: "aaa",
            icon: faVideo,
            alt: "video",
          },
        ],
        w_skills: ["Swift", "Firebase", "XCode"],
        w_description:
          "This app helps you to manage tasks. So your life gonna be easier!",
      },
    ],
  },
  {
    w_no: 2,
    w_name: "Task Management",
    w_img: comingSoon,
    w_detail: [
      {
        w_links: [
          {
            link: "https://github.com/Hisa12/swift-todolist",
            icon: "faGithub",
            alt: "github",
          },
          {
            link: null,
            icon: "faHome",
            alt: "website",
          },
          {
            link: null,
            icon: "faVideo",
            alt: "video",
          },
        ],
        w_skills: ["Swift", "Firebase", "XCode"],
        w_description:
          "This app helps you to manage tasks. So your life gonna be easier!",
      },
    ],
  },
  {
    w_no: 3,
    w_name: "Task Management",
    w_img: taskManage,
    w_detail: [
      {
        w_links: [
          {
            link: "https://github.com/Hisa12/swift-todolist",
            icon: "faGithub",
            alt: "github",
          },
          {
            link: null,
            icon: "faHome",
            alt: "website",
          },
          {
            link: null,
            icon: "faVideo",
            alt: "video",
          },
        ],
        w_skills: ["Swift", "Firebase", "XCode"],
        w_description:
          "This app helps you to manage tasks. So your life gonna be easier!",
      },
    ],
  },
];

export default mywork_data;
