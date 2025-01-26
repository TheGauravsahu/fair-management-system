import React from "react";
import { Calendar, Store, ClipboardList } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Event Creation & Management",
      description:
        "Effortlessly plan and organize fairs with intuitive tools and real-time updates.",
      icon: <Calendar className="w-8 h-8" />,
    },
    {
      title: "Vendor Registration & Allocation",
      description:
        "Streamline vendor applications and automatically assign spaces based on requirements.",
      icon: <Store className="w-8 h-8" />,
    },
    {
      title: "Record Management",
      description:
        "Maintain comprehensive records and resolve disputes efficiently with detailed documentation.",
      icon: <ClipboardList className="w-8 h-8" />,
    },
  ];

  return (
    <section className="h-[70vh] w-full  p-8 mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Powerful
        <span className="animate-text-gradient  bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
          {" "}
          features
        </span>{" "}
        to manage fair better.
      </h2>

      <div className="flex items-center flex-wrap justify-center gap-8  md:gap-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-baground/80 p-6 w-72 h-64 rounded-xl hover:transform cursor-pointer hover:scale-105 transition-all"
            style={{
              boxShadow:
                "0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 20px -5px rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-foreground/40">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
