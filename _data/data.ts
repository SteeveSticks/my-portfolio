export type Pipeline = {
  title: string;
  url: string;
  description: string;
};

export type Project = {
  name: string;
  slug: string;
  show: string;
  desc: string;
  lang: string[];
  img: string;
  vid?: string;
  img2?: string;
  img3?: string;
  link?: string;
  git?: string;
  problem?: string;
  solution?: string;
  pipelines?: Pipeline[];
};

export const projects: Project[] = [
  {
    name: "Repomind",
    slug: "repomind",
    show: "RepoMind helps you open an unfamiliar GitHub repository or a pile of docs and ask questions in plain language.",
    desc: "RepoMind is an AI-powered tool that helps you index a GitHub repository or a pile of docs and ask questions in plain language. Answers come back with the exact source file and line, so you can check the claim.",
    lang: [
      "Next.js",
      "Python",
      "Docker",
      "PgVector",
      "Voyage",
      "Groq AI",
      "Trigger.dev",
      "PostgreSQL",
      "Supabase",
    ],
    img: "repomind-img.jpg",
    vid: "repomind-video.mp4",
    img2: "repomind_img1.png",
    img3: "repomind-img3.png",
    link: "https://repomind-sandy.vercel.app/",
    git: "https://github.com/SteeveSticks/Repomind",
  },
  {
    name: "RAG Pipelines",
    slug: "rag-pipelines",
    show: "Google Colab notebooks that retrieve, ground, and answer from your own documents.",
    desc: "A set of RAG pipelines I built in Google Colab. Each card is a notebook you can open, with a short note on what that pipeline does.",
    lang: ["Python", "LlamaIndex", "OpenAI", "Hugging Face", "Gemini", "Gradio", "BM25", "Llamaindex", "PyMuPDF", "LangChain", "OpenSource Model"],
    img: "rag-pipelines.png",
    pipelines: [
      {
        title: "Comparing-embedding-models",
        url: "https://colab.research.google.com/drive/1IJri_n2Jh-SuRZOdQKlQBfIyNSPIdnbh?usp=drive_link",
        description:
          "We compared three embedding models, MiniLM-L6-v2, BGE-small-en, and E5-small-v2. We generated statistical representations of their responses, ranked the model that gave the top response, and recorded each model's retrieval time.",
      },
      {
        title: "Build a Simple Chatbot with LlamaIndex",
        url: "https://colab.research.google.com/drive/1VVgh3RailWVT3lncM24JUjsU1Z6nwvEk",
        description:
          "We used Gemini to generate responses from user input, then tested our chatbot by asking it different questions.",
      },
      {
        title: "Query Processing & Retrieval Optimization",
        url: "https://colab.research.google.com/drive/1LQoIAj4A5uJ9ZSFLTL7hLYWLoFUcwc-w",
        description:
          "Implemented an industry-standard RAG optimization, including query expansion and rewriting with an integrated hybrid retriever (keyword + vector search) and additional ranking for accurate results. Every result is presented in a table to meet company standards.",
      },
      {
        title: "Route Queries With Large Contact PDF",
        url: "https://colab.research.google.com/drive/1oXfKvyj-jWM6ITxPpKjhQsVnWT62CR38",
        description:
          "I demonstrated how to effectively use a RAG pipeline with a large document. We employed an LLM to classify document types and boundaries. By using key-concept metadata, the LLM can remember the document and execute an efficient RAG pipeline.\n\nGroup pages into logical documents, chunk them, and assign metadata to each logical document. Then predict query routing and retrieve results with a metadata filter.",
      },
      {
        title: "Routing_PDF_Queries_Using_Metadata",
        url: "https://colab.research.google.com/drive/1VbkIBT18_kfpF00qs4vw4eOpCA75PkhC#scrollTo=p-rgstXvPSrM",
        description:
          "I used the LLM and a simple base rule to classify each PDF page, assign a type, and retrieve matching files. Then I created a temporary index from a matching document and queried it for the specific answers you need.",
      },
      {
        title: "RAG_Pipeline_For_Document_Retriveval",
        url: "https://colab.research.google.com/drive/1rCgCaLwyyvcdMbVQTIjg1BHG1b82fmdx",
        description:
          "Integrated PDFs with LlamaIndex, then implemented an LLM-based query expansion and a complete end-to-end pipeline. I demonstrated the steps for extracting the best data from a large document using BM25 retrival for keyword matching.",
      },
      {
        title: "My_ChatBot_Interface",
        url: "https://colab.research.google.com/drive/1W-Nr9YjCsb6O53pjog6t3A_JeHKSLbTp",
        description: "Implemented a new chatbot interface using Gradio.",
      },
      {
        title: "RAG_Configurations_and_Log_Output_Differences",
        url: "https://colab.research.google.com/drive/14ugvSu7TJsqk4WqhS25qeip3aLGEG8Gg",
        description:
          "This RAG configuration uses a retriever with top-k on the specified document vector database, applies a similarity threshold, combines these settings to log the difference, and then runs the RAG.",
      },
      {
        title: "Rag_Pipeline_on_contract_document",
        url: "https://colab.research.google.com/drive/1gkIRuaMAP7aJ_ks_u65aEWfnPOOu1LWP",
        description:
          "The RAG pipeline:\n\nExtracts text from the document with PyMUdf.\nGenerates embeddings.\nPerforms query expansion and writes the result.\nImplements HybridRetriever, a hybrid of keyword and vector search.\nInitializes the large language model (LLM) and embedding models.\nExecutes a rerank call to retrieve the top-k results.\n\nThis creates a practical live RAG pipeline for most use cases.",
      },
      {
        title: "OCR_on_mortage_image",
        url: "https://colab.research.google.com/drive/14HTqVv58q7AwvrklAjriPW0_8qPJZJ54#scrollTo=6HqMyrJBnzKp",
        description:
          "Performed OCR on a PDF to obtain the text's bounding box. Extracted the bounding box and used CVT color tools to determine the exact box and the text's location. Executed the OCR action.",
      },
    ],
  },
  {
    name: "Jude Solar",
    slug: "jude-solar",
    show: "Premium solar installations for homes & businesses. Cut your electricity costs by up to 80%.",
    desc: "Delivered premium solar solutions for homes and businesses. The company provides high‑quality solar installations that can reduce electricity costs by up to 80%, offering long‑term energy independence and sustainability.",
    lang: ["React", "TypeScript", "Cloudinary", "Docker", "Whatsapp Web"],
    img: "judesolar.png",
    vid: "jude-solar.mp4",
    img2: "judesolar-img2.jpg",
    img3: "judesolar-img3.jpg",
    link: "https://www.judesolar.com/",
    git: "https://github.com/ZENDSOLV-TECHNOLOGIES-LIMITED/jude-solar",
  },
  {
    name: "StartupFounder",
    slug: "startup-founder",
    show: "Startup Founder used sanity for dynamic sections. Animated with Framer, aligning with my goal to empower developers.",
    desc: "A well-designed startup platform for developers to showcase their startups for users to discover innovative tech projects. Built using modern frameworks for speed and scalability.",
    lang: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS 4",
      "Sanity",
      "Sentry",
      "Zod",
      "NextAuth",
    ],
    img: "startupFounderimg.png",
    vid: "startup-video.mp4",
    img2: "startup-img1.jpg",
    img3: "startup-img2.jpg",
    link: "https://startup-founders-app.vercel.app/",
    git: "https://github.com/SteeveSticks/STARTUP-FULLSTACK-APP",
  },
  {
    name: "Notion App Clone",
    slug: "Notion",
    show: "Implemented real-time collaboration with user-typing indicators, using OpenAI, Cloudflare for Language, chat integration, and live features with Liveblocks and Firebase.",
    desc: "A collaborative document editing app made similar to Notion, featuring real-time user presence, typing indicators, and AI-powered chat functionality.",
    lang: [
      "Next.js",
      "Clerk",
      "Tailwind CSS",
      "Shadcn",
      "Liveblocks",
      "Firebase",
      "Hono",
      "Cloudflare Workers",
      "OpenAI API",
      "Vercel",
    ],
    img: "notionclone.png",
    vid: "notion-video.mp4",
    img2: "notion-img1.png",
    img3: "notion-img2.png",
    link: "https://notion-clone-psi-gray.vercel.app/",
    git: "https://github.com/SteeveSticks/NOTION-CLONE",
    problem:
      "Many collaborative tools lack seamless real-time interaction and advanced AI assistance, making it hard for teams to work efficiently on documents. Users often face delays in seeing edits or lack smart suggestions, reducing productivity.",
    solution:
      "I built a Notion-like clone using React with TypeScript, integrating Liveblocks for real-time collaboration and typing indicators, allowing users to see each other's edits instantly. Clerk handles user authentication and Firebase handles document storage. I added an OpenAI-like chat feature using Cloudflare Workers for language processing, enabling smart document suggestions and conversations. This solution enhances teamwork and productivity, built with a focus on real-time performance and AI-driven assistance.",
  },
];
