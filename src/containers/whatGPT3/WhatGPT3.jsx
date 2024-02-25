import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3 section__margin" id="wgpt3">
    <div className="gpt3-feature">
      <Feature
        title="What is GPT-3"
        text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art natural language processing model by OpenAI, boasting an immense scale of 175 billion parameters. It excels in understanding and generating human-like text across various applications, from chatbots to code generation, revolutionizing AI-powered solutions."
      />
    </div>
    <div className="gpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3-container">
      <Feature
        title="Chatbots"
        text="Using GPT-3, developers can build chatbots by integrating its natural language processing capabilities via API. GPT-3 understands user queries and generates responses, which can be fine-tuned for specific tasks and datasets, enabling the creation of highly interactive and intelligent chatbots."
      />
      <Feature
        title="Knowledgebase"
        text="GPT-3 can build a knowledge base by training it on relevant data. Through API integration, users can input questions, and GPT-3 retrieves information to provide accurate responses, forming a comprehensive knowledge base."
      />
      <Feature
        title="Education"
        text="GPT-3 enhances education by providing personalized learning experiences through natural language processing. It can generate educational content, answer student queries, and adapt to individual learning styles, fostering engagement and comprehension."
      />
    </div>
  </div>
);

export default WhatGPT3;
