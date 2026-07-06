import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import underwaterWasteImg from "@/public/underwater-waste.png";
import aiRagChatbotImg from "@/public/ai-tutor-chatbot.png";
import hateSpeechImg from "@/public/hate-speech-bert.png";
import salesForecastImg from "@/public/sales-forecasting.png";
import customerSegmentationImg from "@/public/customer-segmentation.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
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
    title: "Underwater Waste Detection using YOLOv11",
    description:
      "Developed a deep learning-based marine debris detection system using YOLOv11 for underwater object detection and classification. Performed image preprocessing, augmentation, model training, and evaluation using Precision, Recall, F1-Score, and mAP metrics.",
    tags: [
      "Python",
      "YOLOv11",
      "OpenCV",
      "Roboflow",
      "Computer Vision",
    ],
    imageUrl: underwaterWasteImg,
    githubUrl:
      "https://github.com/Sujo04/Under-Water-Waste-Detection-Using-YOLO-V8-",
    demoUrl: "",
  },

  {
    title: "AI RAG Chatbot",
    description:
      "Built a Retrieval-Augmented Generation (RAG) chatbot that enables users to upload PDF documents and ask natural language questions. Implemented semantic search using ChromaDB, local embeddings with Ollama, and a Streamlit interface. Dockerized the application for fully offline document question answering.",
    tags: [
      "Python",
      "Streamlit",
      "LangChain",
      "Ollama",
      "ChromaDB",
      "Docker",
      "RAG",
    ],
    imageUrl: aiRagChatbotImg,
    githubUrl: "https://github.com/Sujo04/AI-RAG-Chatbot",
    demoUrl: "",
  },

  {
    title: "Hate Speech Detection using BERT",
    description:
      "Fine-tuned a BERT model for hate speech and toxic content classification. Implemented text preprocessing, tokenization, and contextual embeddings using Hugging Face Transformers and PyTorch.",
    tags: [
      "Python",
      "BERT",
      "PyTorch",
      "Transformers",
      "NLP",
    ],
    imageUrl: hateSpeechImg,
    githubUrl: "",
    demoUrl: "",
  },

  {
    title: "Customer Segmentation using Machine Learning",
    description:
      "Applied K-Means clustering to segment customers based on purchasing behavior and annual income. Performed exploratory data analysis and optimized clusters using the Elbow Method.",
    tags: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "Machine Learning",
      "K-Means",
    ],
    imageUrl: customerSegmentationImg,
    githubUrl:
      "https://github.com/Sujo04/Customer-segmentation---ML",
    demoUrl: "",
  },

  {
    title: "Sales Forecasting using Time Series Analysis",
    description:
      "Developed a sales forecasting model using Facebook Prophet to predict future retail sales trends. Performed preprocessing, trend analysis, seasonality modeling, and evaluated forecasting performance using RMSE and MAE.",
    tags: [
      "Python",
      "Prophet",
      "Pandas",
      "Time Series",
      "Forecasting",
    ],
    imageUrl: salesForecastImg,
    githubUrl:
      "https://github.com/Sujo04/SALES-FORECASTING-USING-TIME-SERIES",
    demoUrl: "",
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
  "Ollama",
  "ChromaDB",
  "Docker",
  "Streamlit",
  "Power BI",
  "Git",
  "GitHub",
  "MySQL",
  "Data Analytics",
  "Data Visualization",
] as const;