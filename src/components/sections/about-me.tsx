import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
    <Container className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-24" id="about">
      <div className="flex flex-col items-center text-center gap-8">
        {/* Section Tag */}
        <Tag label="About Me" />

        {/* About Content */}
        <div className="w-full flex flex-col gap-6 text-justify">
          <Typography variant="h3" className="text-center">
            Passionate Software Developer | Full Stack Engineer
          </Typography>

          <Typography>
            I am a highly motivated software developer with a strong passion for building scalable and efficient applications. With expertise in Java, Spring Boot, SQL, MySQL, React, Tailwind CSS, and Prisma, I specialize in developing full-stack solutions that seamlessly integrate frontend and backend technologies. Currently, I am working at Virtusa, gaining 1.2 years of professional experience in delivering high-quality software solutions. I hold a Bachelor's degree in Computer Science and Engineering from Sri Sairam Engineering College, Chennai.
          </Typography>

          <Typography>
            My approach to development is problem-solving-driven, ensuring that every solution is optimized, scalable, and efficient. I thrive on learning new technologies, continuously expanding my skill set, and adapting to evolving industry trends. Whether it’s crafting a robust backend with Spring Boot or designing an intuitive UI with React & Tailwind, I am committed to excellence in every project I undertake.
          </Typography>

          <Typography variant="h3" className="text-center">Key Strengths:</Typography>
          <ul className="list-inside list-disc flex flex-col gap-3 text-left">
            <Typography component="li">⚡ Quick Learner & Tech Enthusiast</Typography>
            <Typography component="li">🚀 Full Stack Development Expertise</Typography>
            <Typography component="li">🧠 Strong Problem-Solving & Analytical Thinking</Typography>
            <Typography component="li">🎯 Positive Mindset & Solution-Oriented Approach</Typography>
            <Typography component="li">⏳ Effective Time Management & Productivity</Typography>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;