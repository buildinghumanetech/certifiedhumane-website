export default function BuildersSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-accent/20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center">
          <h3 
            className="text-2xl font-semibold mb-6"
            data-testid="text-builders-title"
          >
            About the Builders
          </h3>
          <p 
            className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            data-testid="text-builders-description"
          >
            <a 
              href="https://buildinghumanetech.com/" 
              className="text-primary hover-elevate underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-building-humane-tech"
            >
              Building Humane Technology
            </a>{" "}
            brings together builders, designers, and researchers 
            who believe no one wants to harm their users. Through{" "}
            <a 
              href="https://github.com/buildinghumanetech/humane-tech-framework" 
              className="text-primary hover-elevate underline"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
            >
              open-source frameworks
            </a>, hackathons, and trainings for organizations like the UN, OpenAI, and IDEO, 
            we're making it easy, scalable, and profitable to build tech humanely.
          </p>
        </div>
      </div>
    </section>
  );
}
