import { motion } from "framer-motion";
import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { github, link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Modal from "react-modal";
import { FaRegPlayCircle } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deploy_link,
  video_link
}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);


  const handleWatch = () => {
    // setSelectedVideo(video)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedVideo(null)
  }

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className="backdrop-blur-sm border border-white p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
            {deploy_link !== undefined && (
              <div
                onClick={() => window.open(deploy_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={link}
                  alt="link"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            )}
          </div>
          {video_link !== undefined && (
            <div className="absolute inset-20 flex justify-center m-3">
              <FaRegPlayCircle size={45} className="cursor-pointer rounded-full hover:bg-green-400" color="black" onClick={handleWatch}/>
            </div>
          )}
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex- flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Timetrail video"
        style={{
          overlay:{
            backgroundColor: 'rgba(55, 55, 55, 0.75)'
          },
          content: {
            width: "350px",
            overflow: 'hidden', 
            height: "80vh",
            margin: 'auto',
            padding:"0px",
            border: "none" 
          }
        }}
      >
        <ReactPlayer
          url="https://vimeo.com/879532818?share=copy"
          controls={true}
          muted
          height="100%"
          width="100%"
          className="justify-center"
        ></ReactPlayer>
      </Modal>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[28px]"
        >
          The following projects showcase my skills developing functional
          applications using different frameworks and libraries. Each project
          has a brief description, a link to the code repository and live demos.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
