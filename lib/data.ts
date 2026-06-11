import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import underwaterWasteImg from "@/public/underwater-waste.jpg";
import aiTutorImg from "@/public/ai-tutor-chatbot.png";
import hateSpeechImg from "@/public/hate-speech-bert.png";
import salesForecastImg from "@/public/sales-forecasting.png";
import customerSegmentationImg from "@/public/customer-segmentation.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Sc Mathematics",
    location: "St. Joseph's College Devagiri",
    description:
      "Completed Bachelor of Science in Mathematics and developed strong analytical and problem-solving skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "M.Sc Data Science",
    location: "University of Kerala",
    description:
      "Specialized in Machine Learning, Deep Learning, NLP, Computer Vision, and Data Analytics. Worked on multiple AI-based projects and research activities.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "UGC NET Qualified",
    location: "Computer Science & Applications",
    description:
      "Qualified UGC NET and pursuing opportunities in Data Science, AI/ML, Research and Teaching.",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "AI Tutor Chatbot",
    description:
      "Developed an AI Tutor Chatbot with voice and text interaction using FastAPI and React. Implemented STT, TTS and RAG-based retrieval for context-aware responses.",
    tags: ["Python", "FastAPI", "React", "LangChain", "RAG", "LLM"],
    imageUrl:aiTutorImg,
  },
  {
    title: "Underwater Waste Detection using YOLOv11",
    description:
      "Built a deep learning-based marine debris detection system using YOLOv11 for underwater object detection and classification.",
    tags: ["Python", "YOLOv11", "OpenCV", "Computer Vision"],
    imageUrl: underwaterWasteImg,
  },
  {
    title: "Hate Speech Detection using BERT",
    description:
      "Fine-tuned a BERT model for hate speech and toxic content classification using Hugging Face Transformers and PyTorch.",
    tags: ["Python", "BERT", "PyTorch", "Transformers", "NLP"],
    imageUrl: hateSpeechImg,
  },
  {
    title: "Customer Segmentation using Machine Learning",
    description:
      "Applied K-Means clustering to segment customers based on spending behavior and annual income for marketing insights.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Machine Learning"],
    imageUrl: customerSegmentationImg,
  },
  {
    title: "Sales Forecasting using Time Series Analysis",
    description:
      "Built a sales forecasting model using Facebook Prophet to predict future sales trends and analyze seasonality.",
    tags: ["Python", "Prophet", "Pandas", "Time Series"],
    imageUrl: salesForecastImg,
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "R",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "Scikit-Learn",
  "Transformers",
  "LangChain",
  "Computer Vision",
  "NLP",
  "RAG",
  "LLMs",
  "Power BI",
  "Git",
  "GitHub",
  "MySQL",
  "Data Analytics",
  "Data Visualization",
] as const;