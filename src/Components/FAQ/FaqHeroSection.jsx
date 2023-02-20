import React from "react";
import styles from "../../styles/FAQ/FaqHero.module.css";
import FaqQuestion from "./FaqQuestion";

const FaqHeroSection = () => {
    const questions = [
        {
            question: "What is InsightX and how does it work?",
            answer: "InsightX is a comprehensive data analysis platform that integrates What-If analysis, information extraction, text summarisation, and aspect-based sentiment analysis to extract valuable insights from complex climate data. It uses advanced deep learning techniques to convert fragmented data into intelligent, actionable information for making key decisions.",
        },
        {
            question: "How does InsightX help with climate data analysis?",
            answer: "InsightX provides a user-friendly interface that helps users analyse complex climate data, providing them with actionable insights and suggestions for making informed decisions about projects, methodologies, project developers and more. It converts data into visualizations and provides a degree of confidence in the estimates.",
        },
        {
            question: "Can I try InsightX before I purchase it?",
            answer: "Yes, InsightX offers a free trial for users to test and evaluate the platform before purchasing.",
        },
        {
            question: "What technical expertise do I need to use InsightX?",
            answer: "InsightX has been designed with a user-friendly interface to be accessible to users with a variety of technical backgrounds. However, some understanding of climate data analysis would be beneficial.",
        },
        {
            question: "Does InsightX integrate with other tools and systems?",
            answer: "nsightX can be integrated with other tools and systems to support your climate data analysis needs. The platform's API allows for seamless integration, providing you with a comprehensive solution for developers and analysts as well as web users.",
        },
        {
            question: "What is What-If analysis?",
            answer: 'What-If analysis is a type of predictive analysis used to explore the implications of different scenarios and answer "what if" questions such as "what if we increase the budget?"',
        },
        {
            question: "What is information extraction?",
            answer: "Information Extraction is the process of extracting structured information from unstructured data, such as text.",
        },
        {
            question: "What is text summarisation?",
            answer: "Text summarisation is the process of automatically creating a summary of a text document.",
        },
        {
            question: "What is aspect-based sentiment analysis?",
            answer: "Aspect-based sentiment analysis is the process of extracting sentiment related to specific aspects of a document, such as product features.",
        },
        {
            question: "What types of insights can InsightX generate?",
            answer: "InsightX can generate a variety of insights, such as the implications of different scenarios, information about specific topics, summaries of texts, and sentiment related to specific aspects.",
        },
        {
            question: "What benefits does InsightX provide?",
            answer: "InsightX provides the ability to quickly and accurately analyse complex climate data and extract valuable insights. This can save time and resources and give the user a better understanding of the data.",
        },
    ];

    return (
        <div className={styles.faq}>
            <div className={styles.faq_hero}>
                <h1>FAQ CENTER</h1>
            </div>
            <div className={styles.faq_questions_section}>
                {questions.map((item) => {
                    return (
                        <FaqQuestion
                            question={item.question}
                            answer={item.answer}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default FaqHeroSection;
