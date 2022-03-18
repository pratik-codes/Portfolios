import React from "react";
import scrollDown from "../Assets/Icons/scrollDown.png";
import Card from "./Card";

const blogData = [
  {
    title: "Understanding React's UI Rendering Process.",
    description: "Learn about how react rendering works internally.",
    githubLink: "github.com/pratik-codes/Productively",
    websiteLink: "productive-ly.netlify.app/",
    mediumLink:
      "https://dev.to/pratikcodes/understanding-reacts-ui-rendering-process-understanding-virtual-dom-in-depth-2842",
    tag1: "go",
    tag2: "backend",
    tag3: "golang",
    type: "blogs",
  },
  {
    title: "Why Golang ?",
    description: "Understanding why go? This article answers the question.",
    githubLink: "github.com/pratik-codes/Productively",
    websiteLink: "productive-ly.netlify.app/",
    mediumLink:
      "pratik-codes.medium.com/start-stop-upgrade-downgrade-ec2-instances-with-lambda-functions-c23d971f1566",
    tag1: "go",
    tag2: "backend",
    tag3: "golang",
    type: "blogs",
  },
  {
    title: "Start/stop Upgrade/downgrade EC2 instances with lambda functions",
    description:
      "One of the very useful applications is the automation of starting/stopping and upgrading ec2 instances.",
    githubLink: "github.com/pratik-codes/Productively",
    websiteLink: "productive-ly.netlify.app/",
    mediumLink:
      "pratik-codes.medium.com/start-stop-upgrade-downgrade-ec2-instances-with-lambda-functions-c23d971f1566",
    tag1: "AWS",
    tag2: "Lambda functions",
    tag3: "Boto3/Python",
    type: "blogs",
  },
  {
    title: "Javascript concept handbook for interviews",
    description:
      "This series of questions and answers is all you need for all the concept and theory-based questions for your javascript interviews.",
    githubLink: "github.com/pratik-codes/Productively",
    websiteLink: "productive-ly.netlify.app/",
    mediumLink:
      "pratik-codes.medium.com/javascript-concept-handbook-for-interviews-567f8640a49d",
    tag1: "Javascript",
    tag2: "Interviews",
    tag3: "Basics",
    type: "blogs",
  },
  {
    title: "How to write clean javascript Code",
    description:
      "My learning about clean code and good practice while writing javascript code and wanted to share some of my learnings with you guys",
    githubLink: "github.com/pratik-codes/Productively",
    websiteLink: "productive-ly.netlify.app/",
    mediumLink:
      "pratik-codes.medium.com/how-to-write-clean-javascript-code-9c1ea003389b",
    tag1: "Javascript",
    tag2: "CleanCode",
    tag3: "Basics",
    type: "blogs",
  },
  {
    title: "Optimizers in Neural Networks (very brief and on point)",
    description:
      "An Introduction to in depth explanation of optimizers in simple language.",
    githubLink: "github.com/pratik-codes/Productively",
    websiteLink: "productive-ly.netlify.app/",
    mediumLink:
      "pratik-codes.medium.com/optimizers-in-neural-networks-in-brief-ad4b339c6acc",
    tag1: "DataScience",
    tag2: "DeepLearning",
    tag3: "Optimizers",
    type: "blogs",
  },
  {
    title: "How Javascript Works? ( Execution Context )",
    description:
      "Simple explanation of how javascript code executes. Learning the basics of javscript",
    githubLink: "github.com/pratik-codes/Productively",
    websiteLink: "productive-ly.netlify.app/",
    mediumLink:
      "pratik-codes.medium.com/how-javascript-works-execution-context-b8d30ead4666",
    tag1: "Javascript",
    tag2: "Interviews",
    tag3: "Basics",
    type: "blogs",
  },
  {
    title: "Read unlimited medium articles without subscription(Free)",
    description:
      "So you want to read medium articles and don't want to pay for the subscription. Here’s a way you can do that very easily.",
    githubLink: "github.com/pratik-codes/Productively",
    websiteLink: "productive-ly.netlify.app/",
    mediumLink:
      "pratik-codes.medium.com/read-unlimited-medium-articles-without-subscription-free-53de2fe6e536",
    tag1: "Javascript",
    tag2: "Interviews",
    tag3: "Basics",
    type: "blogs",
  },
];

const Blogs = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center">
        <div className="2xl:w-4/6 xl:w-4/6 lg:w-5/6 md:w-5/6 w-5/6 ">
          <br />
          <br />
          <br />
          <h1 className="text-center font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2">
            "Blogs"
          </h1>
          <br />
          <br />
          <div className="container mx-auto flex justify-center grid 2xl:grid-cols-3 xl:grid-cols-3 l:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {blogData.map((blog) => {
              return (
                <Card
                  title={blog.title}
                  description={blog.description}
                  githubLink={blog.githubLink}
                  websiteLink={blog.websiteLink}
                  mediumLink={blog.mediumLink}
                  tag1={blog.tag1}
                  tag2={blog.tag2}
                  tag3={blog.tag3}
                  type="blogs"
                />
              );
            })}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Blogs;
