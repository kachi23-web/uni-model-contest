import { Card, CardContent } from "@/components/ui/card";
import fashionImage from "@/assets/category-fashion.jpg";
import commercialImage from "@/assets/category-commercial.jpg";
import editorialImage from "@/assets/category-editorial.jpg";

const Categories = () => {
  const categories = [
    {
      title: "Fashion Runway",
      description: "High fashion, runway presence, and couture elegance",
      image: fashionImage,
    },
    {
      title: "Commercial",
      description: "Versatile looks for advertising and brand campaigns",
      image: commercialImage,
    },
    {
      title: "Editorial",
      description: "Creative expression and artistic photography",
      image: editorialImage,
    },
  ];

  return (
    <section id="categories" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contest Categories
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the category that best represents your unique style and strengths
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="text-2xl font-bold text-secondary-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-secondary-foreground/90">
                    {category.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
