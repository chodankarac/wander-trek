import { NextResponse } from "next/server";

export async function GET() {
  const rules = [
    {
      id: 1,
      title: "Itinerary and Punctuality:",
      description:
        "Participants must read and understand the itinerary of the event and bring the necessary items listed. Arrive at the meeting point at least 15 minutes before the scheduled departure. Late arrivals or missed events due to the participant's own fault, negligence, or breach of rules will not be refunded. The amount will neither be carried forward nor adjusted in future events.",
    },
    {
      id: 2,
      title: "Physical Fitness and Medical Conditions:",
      description:
        "Participants should be physically fit before engaging in any adventurous activities organized by Mumbai Trekkers. Those with medical conditions must carry the necessary medicines, seek advice from their physician before attending, and inform Mumbai Trekkers before registering.",
    },
    {
      id: 3,
      title: "Liability Disclaimer:",
      description:
        "In the event of any injury, sickness, accident, death, road accident, or any other kind of casualty or loss/damage of valuables or luggage, Mumbai Trekkers, its leaders, co-leaders, organizers, volunteers, or any involved persons shall not be liable. No claims will be entertained from participants, their parents, guardians, relatives, friends, or third parties.",
    },
    {
      id: 4,
      title: "Prohibition of Substances:",
      description:
        "Consumption of alcohol, smoking, or chewing tobacco is strictly prohibited during the event. Participants found possessing or consuming such substances will be immediately expelled from the trek without a refund.",
    },
    {
      id: 5,
      title: "Environmental Responsibility:",
      description:
        "Participants must bring back waste such as wrappers and used water bottles to the city and dispose of them in dustbins. Littering forts/trails is prohibited.",
    },
    {
      id: 6,
      title: "Respect for Nature and Heritage:",
      description:
        "Do not disturb the flora and fauna, intimidate birds or animals, or destroy/damage archaeological or historical monuments.",
    },
    {
      id: 7,
      title: "Event Leader's Authority:",
      description:
        "The Event Leader’s decision is final and binding on all members.",
    },
    {
      id: 8,
      title: "Personal Responsibility:",
      description:
        "Each participant is responsible for their own safety and baggage.",
    },
    {
      id: 9,
      title: "Group Cohesion:",
      description:
        "Participants must stick together as a group. Any deviation without the Event Leader’s consent will result in the participant being considered independent and no longer part of the group, thus relieving the group of any responsibility towards them.",
    },
    {
      id: 10,
      title: "Minors:",
      description:
        "Participants below 18 years of age must be accompanied by their parents/guardian or have proper written permission from them.",
    },
    {
      id: 11,
      title: "Cancellation Due to Emergencies:",
      description:
        "Events are organized considering normal weather and conditions. In case of natural calamities, riots, political unrest, disease outbreaks, or other emergencies, the event may be cancelled without a refund.",
    },
    {
      id: 12,
      title: "Photo ID Proof:",
      description:
        "All participants must carry a photo ID proof (original or digital copy) during the event.",
    },
    {
      id: 13,
      title: "Violation of Rules:",
      description:
        "Any violation of the above rules or instructions given by the trek leader will be dealt with seriously and may involve expulsion from the event without a refund.",
    },
  ];
  return NextResponse.json({ rules });
}
