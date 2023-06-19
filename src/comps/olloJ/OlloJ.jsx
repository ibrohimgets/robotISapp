import { React } from "react";
import "./olloj.scss";
import J1J2 from "../../images/olloJ/j1:j2.jpeg";
import J3J4 from "../../images/olloJ/j3:j4.jpeg";
import J5J6 from "../../images/olloJ/j5:j6.jpeg";
import J7J8 from "../../images/olloJ/j7:j8.jpeg";
import J9J10 from "../../images/olloJ/j9:j10.jpeg";
import J11J12 from "../../images/olloJ/j11:j12.jpeg";
import DOC from "../../images/olloJ/doc.png";
import Steam from "../../images/olloJ//steam.jpg";

const OlloJ = () => {
  const cardData = [
    {
      id: 1,
      profilePic: J1J2,
      title: "OLLO J1/J2",
      instructions:
        "此模块包含: \n OLLO J1教材\n OLLO J2教材\n OLLO J1测评表 \n OLLO J2测评表.",
      href: "taskThree ezyzip.zip",
      download: "ezyzip.zip",
    },

    {
      id: 2,
      profilePic: J3J4,
      title: "OLLO J3/J4",
      instructions:
        "此模块包含: \n OLLO J3教材 \n OLLO J4教材\n OLLO J3测评表 \n OLLO J4测评表.",
      href: "taskTwo ezyzip.zip",
      download: "ezyzip.zip",
    },
    {
      id: 3,
      profilePic: J5J6,
      title: "OLLO J5/J6",
      instructions:
        "此模块包含: \n OLLO J5教材 \n OLLO J6教材\n OLLO J5测评表 \n OLLO J6测评表.",
      href: "motion ezyzip.zip",
      download: "ezyzip.zip",
    },
    {
      id: 4,
      profilePic: J7J8,
      title: "OLLO J7/J8",
      instructions:
        "此模块包含: \n OLLO J7教材 \n OLLO J8教材\n OLLO J7测评表 \n OLLO J8测评表.",
      href: "scratch ezyzip.zip",
      download: "ezyzip.zip",
    },
    {
      id: 5,
      profilePic: J9J10,
      title: "OLLO J9/J10",
      instructions:
        "此模块包含: \n OLLO J9教材 \n OLLO J10教材\n OLLO J9测评表 \n OLLO J10测评表.",
      href: "wizard ezyzip.zip",
      download: "ezyzip.zip",
    },
    {
      id: 5,
      profilePic: J11J12,
      title: "OLLOJ11/J12",
      instructions:
        "此模块包含: \n OLLO J11教材 \n OLLO J12教材\n OLLO J11测评表 \n OLLO J12测评表.",
      href: "wizard ezyzip.zip",
      download: "ezyzip.zip",
    },
    {
      id: 5,
      profilePic: DOC,
      title: "Wizard 2.0",
      instructions:
        "此模块包含OLLO J讲师证书和学生毕业证书模版。该模版仅供参考,如需制作证,请联系ROBOTIS中国公司进行授权后执行.",
      href: "wizard ezyzip.zip",
      download: "ezyzip.zip",
    },
    {
      id: 5,
      profilePic: Steam,
      title: "Wizard 2.0",
      instructions:
        "此模块为OLLO J课程架构,包含48课时的授课指导架构,每一节课时的知识点汇总.",
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

export default OlloJ;
