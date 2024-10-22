import taskManage from "../assets/taskManage.png";
import tictactoe from "../assets/tictactoe.png";

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
];

export default mywork_data;
