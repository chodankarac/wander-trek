import { NextResponse } from "next/server";

export async function GET() {
  const faqs = [
    {
      question:
        "What shoes are ideal for trekking? Can I wear my sports shoes?",
      answer:
        "For trekking in Maharashtra, Coaster CTR Trekking shoes are highly recommended, costing around Rs1100-1600. [Check more details here](#). Sports shoes are not recommended due to inadequate grip on wet and rocky terrains. Avoid floaters, sandals, and crocs. Expensive trekking shoes from brands like Decathlon or Woodland are designed for Himalayan treks and are not suitable for Maharashtra's conditions.",
    },
    {
      question: "What basic trekking gear do I need?",
      answer:
        "For one-day treks, essential gear includes quick-dry outfits and trekking shoes. [See the complete list here](#).",
    },
    {
      question: "Are washrooms available on treks?",
      answer:
        "Most treks do not have washrooms. Some base villages may have limited facilities. For multi-day treks, carry tissue rolls, sanitizers, and be prepared for outdoor options.",
    },
    {
      question:
        "I am a first-time trekker, which type of trek should I choose?",
      answer:
        "Start with an easy-grade trek to test your fitness and see how your body reacts. Trekking requires good lower body strength and cardiovascular health. Consult us before registering to ensure the trek is suitable for beginners.",
    },
    {
      question: "What type of food is provided on treks?",
      answer:
        "Breakfast is usually Poha or Idli. On selected treks, we provide local veg thali for lunch/dinner, including bhakhri-sabzi, dal-rice, papad, and salad. Jain food is available on selected treks; please ask before registering.",
    },
    {
      question: "What is the typical batch size and leader ratio for treks?",
      answer:
        "We usually maintain a batch size of 20-25 people, with a maximum of 30. The leader-to-participant ratio is 1:10-12. For a batch of 30, we provide 3 trek leaders/volunteers.",
    },
    {
      question:
        "Do solo trekkers join your treks, or do people usually come in groups?",
      answer:
        "Over 40% of our trekkers come solo. Trekking is a social activity, and our trek leaders ensure everyone feels included.",
    },
    {
      question: "Is it safe for female solo trekkers to join the events?",
      answer:
        "Yes, we usually have 40% female participants, many of whom join solo. Safety is a top priority for us.",
    },
    {
      question: "What is the normal age group for participants?",
      answer:
        "The usual age group is 18-40 years. Fitness is more important than age. Participants below 18 must be accompanied by a guardian, who must fill out a disclaimer form.",
    },
    {
      question: "Are there any treks suitable for kids below 18?",
      answer:
        "Yes, kids above 10 can join easy-grade, short-duration treks initially. If they do well, they can participate in more challenging treks.",
    },
    {
      question: "Do you organize private or corporate treks?",
      answer:
        "Yes, we arrange private treks for groups of 15 or more, as well as corporate events. Please inform us at least 2 weeks in advance to organize accordingly.",
    },
    {
      question: "Do you organize treks on weekdays?",
      answer:
        "While most events are on weekends or public holidays, we can arrange private treks on weekdays upon request.",
    },
    {
      question: "Do you offer other adventure activities apart from trekking?",
      answer:
        "Yes, we also arrange waterfall tours, backpacking trips like Velas Turtle Festival and Kaas Plateau, waterfall rappelling in monsoon, and camping in winter months.",
    },
  ];
  return NextResponse.json({ faqs });
}
