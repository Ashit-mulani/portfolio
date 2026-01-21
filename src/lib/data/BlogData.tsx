import type { BlogItem } from "@/types";
import { PiMediumLogoFill } from "react-icons/pi";

export const BlogData: BlogItem[] = [
  {
    id: "architectural-deep-dive",
    name: "Architectural Deep Dive okiug ihgc oiiuhg oiuhg ioujg ",
    path: "/blogs/architectural-deep-dive",
    title:
      "Mitigating Eventual Consistency Lag in Event-Driven E-commerce Systems",
    description:
      "Designing a high-scale, multi-vendor marketplace using an Event-Driven Architecture (EDA) built upon a message broker like Kafka is a robust and highly recommended approach, favoring scalability, resilience, and decoupling. However, the intrinsic nature of asynchronous processing introduces eventual consistency, meaning the database state viewed by the user interface may lag behind the immediate command submission. This inherent latency must be mitigated to satisfy the requirement for “instant data” display following a synchronous action, such as a order creation.",
    links: [
      {
        name: "Read On medium",
        icon: <PiMediumLogoFill />,
        url: "https://medium.com/@mulaniashit/expert-architectural-report-mitigating-eventual-consistency-lag-for-synchronous-e-commerce-f2db7a789653",
      },
    ],
  },
];
