"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I am <span className="font-medium">Sujoy P T</span>, an{" "}
        <span className="font-medium">M.Sc Data Science graduate</span> from the
        University of Kerala and a{" "}
        <span className="font-medium">UGC NET Qualified</span> candidate in
        Computer Science & Applications.
      </p>

      <p className="mb-3">
        My interests include{" "}
        <span className="font-medium">
          Artificial Intelligence, Machine Learning, Deep Learning, Natural
          Language Processing, Computer Vision, and Generative AI
        </span>
        . During my postgraduate studies, I worked on several AI and Data
        Science projects including Underwater Waste Detection using YOLOv11,
        Hate Speech Detection using BERT, AI Tutor Chatbot with RAG, Customer
        Segmentation using Machine Learning, and Sales Forecasting using Time
        Series Analysis.
      </p>

      <p className="mb-3">
        I have hands-on experience with{" "}
        <span className="font-medium">
          Python, SQL, TensorFlow, PyTorch, Scikit-Learn, Transformers,
          LangChain, Power BI, Git, GitHub, Machine Learning, Deep Learning,
          NLP, Computer Vision, and Large Language Models (LLMs)
        </span>
        . I enjoy solving real-world problems through data-driven approaches and
        continuously exploring emerging technologies in AI and Data Science.
      </p>

      <p>
        I am currently seeking opportunities in{" "}
        <span className="font-medium">
          AI/ML, Data Science, Research, and Teaching
        </span>
        , where I can apply my technical skills, contribute to innovative
        projects, and continue growing professionally.
      </p>
    </motion.section>
  );
}