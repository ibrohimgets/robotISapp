import { React } from "react";
import "./Home.scss";
//import Task3 from "../../images/task3.jpg";
//import Task2 from "../../images/Task2.png";
//import Motion2 from "../../images/Motion2.png";
//import Scratch from "../../images/Scratch.png";
//import Wizard from "../../images/Wizard.png";
const Home = () => {
  const cardData = [
    {
      id: 1,
      //profilePic: Task3,
      title: "Task 3.0",
      instructions:
        "Task3.0是集成了动作编程和任务代码编写的软件工具.\n此应用为Windows 版本, 苹果系统请到Apple商城下载.",
      href: "taskThree ezyzip.zip",
      download: "ezyzip.zip",
    },

    {
      id: 2,
      //profilePic: Task2,
      title: "Task 2.0",
      instructions:
        "Task2.0是一个帮助用户轻松编写任务代码的程序.任务代码文件在PC (或智能手机）中具有.tskx扩展名.\n此应用为Windows版本, 苹果系统请到Apple商城下载.",
      href: "taskTwo ezyzip.zip",
      download: "ezyzip.zip",
    },
    {
      id: 3,
      //profilePic: Motion2,
      title: "Motion 2.0",
      instructions:
        "Motion是电机必要的位置和速度数据集,最终成为机器人的有效\n运动.\n Motion项目文件具有.mtnx扩展名",
      href: "motion ezyzip.zip",
      download: "ezyzip.zip",
    },
    {
      id: 4,
      //profilePic: Scratch,
      title: "Scratch 2.0",
      instructions:
        "R+ Scratch允许ROBOTIS控制器连接到Scratch并在Scratch环境中编程机器人. \n此软件为ROBOTIS机器人与scratch🔗连接的中间桥梁作用. \n 此应用为Windows版本",
      href: "scratch ezyzip.zip",
      download: "ezyzip.zip",
    },
    {
      id: 5,
      // profilePic: Wizard,
      title: "Wizard 2.0",
      instructions:
        "DYNAMIXEL Wizard 2.0是从各种操作系统管理DYNAMIXEL的优化工具. DYNAMIXEL Wizard 2.0提供了以下功能. \nDYNAMIXEL固件更新; DYNAMIXEL诊断; DYNAMIXEL配置和测试; DYNAMIXEL数据实时绘图; 生成和监控DYNAMIXEL数据包",
      href: "wizard ezyzip.zip",
      download: "ezyzip.zip",
    },
  ];

  return (
    <div className="about">
      <div className="card-row">
        {cardData.map((card) => (
          <div className="card" key={card.id}>
            <div className="left_side">
              <img
                src={card.profilePic}
                alt="Profile"
                className="profile-pic"
              />
              <h1>{card.title}</h1>
            </div>

            <div className="card-content">
              <div className="card-details">
                <p style={{ whiteSpace: "pre-line" }}>{card.instructions}</p>
              </div>
              <button type="button" className="download-btn">
                <a href={card.href} download={card.download}>
                  Download
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
