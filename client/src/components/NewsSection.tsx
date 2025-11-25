import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Newspaper, ExternalLink, Calendar } from "lucide-react";
import { format } from "date-fns";

interface NewsItem {
  title: string;
  publication: string;
  date: string;
  url: string;
  excerpt?: string;
}

const newsItems: NewsItem[] = [
  {
    title: "A new AI benchmark tests whether chatbots protect human well-being",
    publication: "TechCrunch",
    date: "2025-11-24",
    url: "https://techcrunch.com/2025/11/24/a-new-ai-benchmark-tests-whether-chatbots-protect-human-wellbeing/",
    excerpt: "AI chatbots have been linked to serious mental health harms in heavy users, but there have been few standards for measuring whether they safeguard human well-being or just maximize for engagement. A new benchmark dubbed HumaneBench seeks to fill that gap by evaluating whether chatbots prioritize user well-being and how easily those protections fail under pressure.",
  },
];

export default function NewsSection() {
  return (
    <section className="w-full py-8 md:py-10 bg-accent/10">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Newspaper className="h-6 w-6 text-primary" />
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold"
              data-testid="text-news-title"
            >
              In the News
            </h2>
          </div>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-news-description"
          >
            Media coverage and updates about HumaneBench and the Humane AI Certification program.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <Card 
              key={index} 
              className="hover-elevate group"
              data-testid={`card-news-${index}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-primary">
                        {item.publication}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <time dateTime={item.date}>
                          {format(new Date(item.date), "MMMM d, yyyy")}
                        </time>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
              </CardHeader>
              {item.excerpt && (
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
                    data-testid={`link-news-${index}`}
                  >
                    Read full article
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



