export default function MissionSection() {
  return (
    <section className="w-full py-8 md:py-10 bg-accent/30" id="about">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-testid="text-mission-title"
          >
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-foreground">
            <p 
              className="leading-relaxed"
              data-testid="text-mission-intro"
            >
              Humans build tech—so why can't tech be good for humans?
            </p>
            <p 
              className="leading-relaxed text-muted-foreground"
              data-testid="text-mission-vision"
            >
              We're creating an alternative future where{" "}
              <a 
                href="https://humanetech.substack.com/p/benchmarking-humanity-building-the" 
                className="text-primary hover-elevate underline"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-spiraling-up"
              >
                we benchmark toward positive outcomes
              </a>{" "}
              instead of racing to the bottom. When you develop technology to push next-generation 
              wellbeing, you create a better technological and societal space for everyone.
            </p>
            <p 
              className="leading-relaxed font-medium"
              data-testid="text-mission-belief"
            >
              If you create a{" "}
              <a 
                href="https://humanebench.ai" 
                className="text-primary hover-elevate underline"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-humanebench"
              >
                benchmark
              </a>, people will build in that direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
