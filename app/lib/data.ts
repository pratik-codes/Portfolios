interface PortfolioDataType {
  greeting: string;
  position: string;
  about: string[];
  contact: {
    email: string;
    discord: string;
    twitter: string;
    github: string;
  };
  links: {
    name: string;
    url: string;
  }[];
  PersonalProjects: {
    title: string;
    description: string[];
    stack: string[];
    link: string;
  }[];
  ProfessionalExperience: {
    title: string;
    description: string[];
    stack: string[];
    link: string;
  }[];
  Talks: {
    id: string;
    place: string;
    logoImage: string;
    link: string;
    title: string;
    content_des: string;
    images: string[];
    twitter_embeds: string[];
  }[];
  Blogs: {
    title: string;
    description: string;
    url: string;
    imageSrc: string;
    hastags: string[];
  }[];
}

export const PortfolioData: PortfolioDataType = {
  greeting: "Hello, I'm Pratik",
  position: "Fullstack Software Engineer",
  about: [
    "Welcome to my digital lair. I’m a fullstack developer with 4+ years of experience hacking the web, worked into the realms of edtech, AI, finance, and Web3. I specialize in Go, Rust, Next/React, Node, AWS, and Solidity, but my curiosity is infinite—always exploring new tools and tech.",
    "Here at my command center, I build with precision, from distributed systems to decentralized architectures. I'm passionate about performance, developer productivity, and the power of the terminal—whether it’s in Neovim, NixOS, or anywhere a terminal window shines.",
  ],
  contact: {
    email: "pratiktiwari1212@gmail.com",
    discord: "@pratik-codes",
    twitter: "x.com/pratikcodes_",
    github: "github.com/pratik-codes",
  },
  links: [
    {
      name: "twitter",
      url: "https://x.com/pratikcodes_",
    },
    {
      name: "gitHub",
      url: "https://github.com/pratik-codes",
    },
    {
      name: "linkedIn",
      url: "https://www.linkedin.com/in/pratiktiwari12/",
    },
  ],
  PersonalProjects: [
    {
      title: "Sifu Security",
      description: [
        "Our app protects Solana users from malicious transactions and smart contracts. It offers a Contract Address Checker, Smart Contract Auditing, and Simulated Transaction Validator to ensure secure interactions, providing detailed insights and safety before committing to any transaction.",
        "Won $3500+ in grants from solana foundation",
      ],
      stack: ["React", "TypeScript", "Solana", "Rust", "Web3"],
      link: "https://sifusecurity.com/",
    },
    {
      title: "Solpass",
      description: [
        "The Decentralized Password Manager It's secure, private, and easy to use. With SolPass, you can manage your passwords with unmatched security and privacy. Experience the future of password management today.",
        "Won $5000+ in grants from solana foundation",
      ],
      stack: ["React", "TypeScript", "Solana", "Rust", "Web3"],
      link: "https://solpass.byarclabs.com/",
    },
    {
      title: "Dashlit",
      description: [
        "An open source browser extension to boost your productivity and browser experience.",
      ],
      stack: ["React", "TypeScript", "GO"],
      link: "https://dashlit.byarclabs.com/",
    },
  ],
  ProfessionalExperience: [
    {
      title: "Securly",
      description: [
        "Currently building the core extension products to save kids' lives by providing web safety and online protection.",
        "Working on migrating the backend to Golang and addressing tech debts while developing new features.",
      ],
      stack: ["React", "Golang", "Web Security", "Typescript"],
      link: "https://securly.com/",
    },
    {
      title: "Velocity",
      description: [
        "Built Payments (an app used for making payments, vendor management, invoice management, etc.) from scratch.",
        "Developed Finance (loan management system) while focusing on frontend development using React, microfrontends, monorepos, and TypeScript.",
      ],
      stack: ["React", "Microfrontends", "Monorepos", "TypeScript"],
      link: "https://velocity.in/",
    },
    {
      title: "Webknot",
      description: [
        "Built Palette (a university management app) from scratch and worked on numerous other projects.",
        "Contributed to both the frontend and backend, with React, Node (Nest.js), and AWS. Managed service deployment and infrastructure.",
      ],
      stack: ["React", "Node.js", "Nest.js", "AWS"],
      link: "https://webknot.com/",
    },
  ],
  Talks: [
    {
      id: "1",
      place: "React Mumbai",
      logoImage:
        "https://pbs.twimg.com/profile_images/1671952285730238464/SJ9ev-00_400x400.jpg",
      link: "/talks/generics-in-typescript",
      title:
        "Mastering Generics in TypeScript: Building Powerful Abstractions and Saying Goodbye to 'Any'",
      content_des:
        "Delivered an in-depth talk at React Mumbai on leveraging Generics in TypeScript to create strong, reusable abstractions. Explored how TypeScript’s generics enable more precise typing, helping developers avoid the pitfalls of 'any' and write cleaner, more reliable code.",
      images: [
        "/assets/react_mumbai/REACT_MUMBAI_1.jpeg",
        "/assets/react_mumbai/REACT_MUMBAI_2.jpeg",
        "/assets/react_mumbai/REACT_MUMBAI_6.jpeg",
        "/assets/react_mumbai/REACT_MUMBAI_7.jpeg",
        "/assets/react_mumbai/REACT_MUMBAI_3.jpeg",
        "/assets/react_mumbai/REACT_MUMBAI_5.jpeg",
        "/assets/react_mumbai/REACT_MUMBAI_4.jpeg",
      ],
      twitter_embeds: [
        "1692788188887253248",
        "1692846506368225749",
        "1694573356467576944",
        "1692864425001365985",
      ],
    },
    {
      id: "2",
      place: "React Pune",
      link: "/talks/building-frameworky-things",
      logoImage:
        "https://pbs.twimg.com/profile_images/1628286577482018817/P2qjUGx5_400x400.jpg",
      title:
        "Building frameworky things in react from scratch. SSR, file-based routing and server-side data fetching like next.js",
      content_des:
        "Spoke at React Pune about Building Server side rendering, server side data fetching and file based routing. Did a live demo building all of that from scratch.",
      images: [
        "/assets/react_pune/IMG_3684.jpg",
        "/assets/react_pune/IMG_3685.jpg",
        "/assets/react_pune/IMG_3695.jpg",
      ],
      twitter_embeds: [
        "1682638222206316545",
        "1682796601025392640",
        "1682678900621492224",
      ],
    },
  ],
  Blogs: [
    {
      title: "Solidity 101: A Starter Guide",
      description:
        "Learn about solidity basics and start building smart contracts in solidity.",
      url: "https://pratik-codes.medium.com/solidity-101-a-starter-guide-39b2ff0346ee",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1683541190290/816b9865-d5a9-402c-8a66-39f132731355.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      hastags: ["react", "performance"],
    },
    {
      title:
        "Building frameworky things with vanilla react (SSR, file-based routing and server-side data fetching)",
      description:
        "Building Server side rendering, server side data fetching and file based routing like next.js from scratch in vanilla react.",
      url: "https://blogs.tiwaripratik.com/building-frameworky-things-with-vanilla-react-ssr-file-based-routing-and-server-side-data-fetching",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1690038913340/b09cd745-3103-42f6-9314-b2082c839868.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      hastags: [
        "server-side-rendering",
        "file-based-routing",
        "react",
        "nextjs",
      ],
    },
    {
      title: "Let's talk about react performance ⚛",
      description:
        "Some of the tips and tricks to improve your react app performance.",
      url: "https://blogs.tiwaripratik.com/lets-talk-about-react-performance",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1683541190290/816b9865-d5a9-402c-8a66-39f132731355.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      hastags: ["react", "performance"],
    },
    {
      title: "Mono Respositories in JS/TS. What? Why? and How? (with Nx)",
      description:
        "Sharing about monorepos and how to use them in your projects and thier pros and cons.",
      url: "https://blogs.tiwaripratik.com/mono-respositories-in-jsts-what-why-and-how-with-nx",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1674841183755/4f03691a-2140-4560-85c6-ce01c53096de.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      hastags: ["monorepos", "nx", "javascript", "typescript"],
    },
    {
      title:
        "Understanding React's UI Rendering Process (understanding virtual dom in depth)",
      description: "Sharing about how react works under the hood.",
      url: "https://blogs.tiwaripratik.com/understanding-reacts-ui-rendering-process-understanding-virtual-dom-in-depth",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1671198938640/WNU1O94w5.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      hastags: ["react", "virtual-dom", "javascript"],
    },
    {
      title:
        "Dive into NestJS and Amplication: A Powerful Framework for Node.js and an easy way to build your services.",
      description:
        "Undertanding nestjs framework and architecture. Also a open source low code tool called Amplification that lets us write nestjs services very easily.",
      url: "https://blogs.tiwaripratik.com/dive-into-nestjs-and-amplication-a-powerful-framework-for-nodejs-and-an-easy-way-to-build-your-services",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1687011196292/72738b0d-4778-449e-90b7-d6d2b6317a82.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      hastags: ["nestjs", "javascript", "typescript"],
    },
    {
      title:
        "Simplifying Google Authentication with MV3 and Firebase for Chrome Extensions (React/Typescript)",
      description:
        "understanding how google auth works with chrome extensions running with firebase on manifest json version 3.",
      url: "https://blogs.tiwaripratik.com/simplifying-google-authentication-with-mv3-and-firebase-for-chrome-extensions-reacttypescript",
      imageSrc:
        "https://i.pcmag.com/imagery/articles/027qzlp4GUvpopUjd4UTTRF-11.fit_lim.size_1600x900.v1664814287.jpg",
      hastags: ["chrome-extensions", "firebase", "react", "typescript"],
    },
    {
      title: "Why Golang",
      description:
        "How and why is golang a better choice for building services these days.",
      url: "https://dev.to/pratikcodes/why-go-31k4",
      imageSrc:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--EuqhvOYk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fc2rbv8tuan3k1bhoh8m.png",
      hastags: ["golang"],
    },
    {
      title: "How to write clean javascript Code",
      description:
        "Some pratices that you should follow to write better javascript code. A guide to be a better javascript developer",
      url: "https://pratik-codes.medium.com/how-to-write-clean-javascript-code-9c1ea003389b",
      imageSrc:
        "https://media.licdn.com/dms/image/D4D12AQEj5jjhop10Bw/article-cover_image-shrink_423_752/0/1672073941863?e=1698278400&v=beta&t=GOL7QAQtct1BwfjZKBKIbvNAerxme04n_4rgr79tovo",
      hastags: ["aws", "lambda", "ec2"],
    },
    {
      title: "How Javascript Works? ( Execution Context )",
      description:
        "Understand the internals of javascript and how code is executed in javascript",
      url: "https://pratik-codes.medium.com/how-javascript-works-execution-context-b8d30ead4666",
      imageSrc:
        "https://media.licdn.com/dms/image/D4D12AQEj5jjhop10Bw/article-cover_image-shrink_423_752/0/1672073941863?e=1698278400&v=beta&t=GOL7QAQtct1BwfjZKBKIbvNAerxme04n_4rgr79tovo",
      hastags: ["aws", "lambda", "ec2"],
    },
    {
      title: "Start/stop Upgrade/downgrade EC2 instances with lambda functions",
      description:
        "How can you upgrade/downgrade you EC2 instances with a lambda function. A particular use case I have to face in one of my projects.",
      url: "https://dev.to/pratikcodes/start-stop-upgrade-downgrade-ec2-instances-with-lambda-functions-5fn9",
      imageSrc:
        "https://media.licdn.com/dms/image/D4D12AQEj5jjhop10Bw/article-cover_image-shrink_423_752/0/1672073941863?e=1698278400&v=beta&t=GOL7QAQtct1BwfjZKBKIbvNAerxme04n_4rgr79tovo",
      hastags: ["aws", "lambda", "ec2"],
    },
    {
      title: "Javascript concept handbook for interviews",
      description: "A resource for learning about javascript for interviews.",
      url: "https://dev.to/pratikcodes/javascript-concept-handbook-for-interviews-b0j",
      imageSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*LyZcwuLWv2FArOumCxobpA.png",
      hastags: ["javascript", "interviews"],
    },
    {
      title: "Optimizers in Neural Networks (very brief and on point)",
      description:
        "Understanding and learning about different optimizers in neural networks",
      url: "https://pratik-codes.medium.com/optimizers-in-neural-networks-in-brief-ad4b339c6acc",
      imageSrc:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*LyZcwuLWv2FArOumCxobpA.png",
      hastags: ["javascript", "interviews"],
    },
  ],
};
