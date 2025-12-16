import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 my-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Cat Quest!</h1>
      <p className="text-left px-10">Every cat is unique. Find the one that is right for you. <br/>
      CatQuest is a web application designed to support future cat owners in finding a cat breed that truly matches their lifestyle and living conditions.
      <br/>
      Adopting a cat is a long-term responsibility, and choosing the right breed requires careful consideration of many factors such as personality traits, grooming needs, activity level, and compatibility with children or other pets. However, reliable information is often scattered across multiple websites, making the research process time-consuming and overwhelming. CatQuest addresses this problem by centralizing breed information and presenting it in a clear, structured, and user-friendly way.<br/><br/>
      The application allows users to filter cat breeds based on a wide range of parameters, including playfulness, shedding level, weight, lifespan, grooming effort, and social behavior. By applying these filters, users can quickly narrow down suitable options and explore detailed breed profiles enriched with images and key facts. This approach not only saves time but also reduces frustration during the decision-making process. Ultimately, CatQuest aims to promote responsible pet adoption by helping users make informed choices that benefit both the owner and the cat, ensuring a harmonious long-term relationship. </p>
    <Link
        className="border p-4 rounded hover:bg-gray-800 hover:text-white"
        to="/catquest"
      >
        Start the Cat Quest Wizard
      </Link>
    </div>
  );
}

export default Home;
