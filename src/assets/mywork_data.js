import taskManage from "../assets/taskManage.png";
import tictactoe from "../assets/tictactoe.png";
import libraryManage from "../assets/libraryManage.png";
import weatherApp from "../assets/weatherApp.png";

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
            name: "GitHub",
          },
        ],
        w_skills: ["Swift", "Firebase", "XCode"],
        w_description:
          "This To-Do Task App is designed to help users efficiently manage their tasks and boost productivity.",
      },
    ],
  },
  {
    w_no: 2,
    w_name: "Wild Tic Tac Toe",
    w_img: tictactoe,
    w_detail: [
      {
        w_links: [
          {
            link: "https://github.com/Hisa12/TicTacToe",
            name: "GitHub",
          },
          {
            link: "https://replit.com/@HisanoSato/WildTicTacToe?v=1",
            name: "Replit",
          },
        ],
        w_skills: ["C#", ".NET"],
        w_description:
          "Wild Tic Tac Toe is a console-based game developed using C# and the .NET framework, showcasing object-oriented programming principles and modular design.",
      },
    ],
  },
  {
    w_no: 3,
    w_name: "Library Management",
    w_img: libraryManage,
    w_detail: [
      {
        w_links: [
          {
            link: "https://github.com/Hisa12/Community-Library-System",
            name: "GitHub",
          },
          {
            link: "https://replit.com/@HisanoSato/Community-Library-System?v=1",
            name: "Replit",
          },
        ],
        w_skills: ["C#", ".NET"],
        w_description:
          "The Community Library DVD Management App is a console application built in C# designed to manage a community library's DVD collection and member information.",
      },
    ],
  },
  {
    w_no: 4,
    w_name: "Weather Forecast App",
    w_img: weatherApp,
    w_detail: [
      {
        w_links: [
          {
            link: "https://github.com/Hisa12/weather-app",
            name: "GitHub",
          },
          {
            link: "https://check-weather123.netlify.app/",
            name: "Website",
          },
        ],
        w_skills: ["JavaScript", "React", "Node", "ChakraUI", "API"],
        w_description:
          "The Weather Forecast App is a user-friendly application that allows users to search for a city and view the current weather, hourly forecast, and a 3-day weather outlook.",
      },
    ],
  },
];

export default mywork_data;
