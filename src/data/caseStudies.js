export const caseStudies = {
  zypha: {
    id: "zypha",
    title: "Zypha",
    subtitle: "When Health Can't Wait.",
    exhibition: "CASE STUDY",
    description:
      "A medicine delivery platform designed to make accessing healthcare essentials simpler, faster and more convenient.",

    tags: [
      "Healthcare app",
      "Mobile application",
      "UX research + UI design",
    ],

    heroImage: "/case-studies/zypha/zypha_hero.png",
    figmaUrl: "https://www.figma.com/design/wouweJgLNqtjMlKgjapMbA/Untitled?node-id=0-1&t=plQG4DIEXL0H5Uko-1",

    problem: {
      heading: "Sometimes, getting your medicine isn't as simple as going to the store.",
      cards: [
        {
          icon: "↗",
          title: "Difficult access",
          description:
            "Getting medicines isn't always easy, especially for people who cannot step out.",
        },
        {
          icon: "◷",
          title: "Forgotten refills",
          description:
            "People forget to reorder their regular medication and miss thier daily dosage.",
        },
        {
          icon: "⌕",
          title: "Too many steps",
          description:
            "Finding, selecting and adding medicines takes unnecessary effort.",
        },
        {
          icon: "♡",
          title: "Unclear emergency access",
          description:
            "People may not know whom to contact when they need medical help.",
        },
      ],
    },

    goals: {
      heading: "Making medicine access easier for everyone.",
      description:
        "My vision was to make medicines easily accessible, with a doorstep delivery experience designed around speed and convenience.",
      items: [
        "Quick and convenient medicine access",
        "Effortless prescription uploads and refills",
        "Fewer steps between needing medicine and ordering it",
        "Accessible medical and emergency assistance",
      ],
    },

    research: {
      heading: "Understanding the people behind the problem.",
      description:
        "I explored user needs through interviews, surveys, competitor analysis and informal observations.",
      image: "/case-studies/zypha/research_board.png",
      interviewees: [
        {
          name: "Priya, 62",
          role: "Retired Bank Officer",
          avatar: "/personas/persona_priya.png",
          desc: "Forgets refills, struggles with small text.",
          tag: "Accessibility",
        },
        {
          name: "Ramesh, 32",
          role: "Sales Manager",
          avatar: "/personas/persona_ramesh.png",
          desc: "Busy professional, needs fast delivery and accurate orders.",
          tag: "Speed & Accuracy",
        },
        {
          name: "Aarav, 21",
          role: "College Student",
          avatar: "/personas/persona_aarav.png",
          desc: "Prefers digital convenience and clear instructions.",
          tag: "Digital Native",
        },
        {
          name: "Meera, 38",
          role: "Single Mother",
          avatar: "/personas/persona_meera.png",
          desc: "Manages child's medication, needs reliable alerts.",
          tag: "Caregiver",
        },
        {
          name: "Sandeep, 45",
          role: "IT Consultant",
          avatar: "/personas/persona_sandeep.png",
          desc: "Needs predictable delivery for insulin and diabetic supplies.",
          tag: "Chronic Care",
        },
      ],
      surveyStats: [
        {
          stat: "50%",
          label: "Medicine Access Delays",
          sub: "Difficulty finding prescribed medicines on time in local pharmacies.",
          color: "#E0533C",
        },
        {
          stat: "65.6%",
          label: "Emergency SOS Demand",
          sub: "Requested under-30-minute doorstep delivery for acute health needs.",
          color: "#239C94",
        },
        {
          stat: "82%",
          label: "Automated Refill Need",
          sub: "Strong preference for smart alerts to prevent running out of regular doses.",
          color: "#E6C66C",
        },
      ],
      personas: [
        {
          title: "Regular Medication User",
          description: "Convenient access to recurring medicines and refills.",
        },
        {
          title: "Busy Professional",
          description: "Quick ordering with fewer steps.",
        },
        {
          title: "Family Caregiver",
          description: "Managing prescriptions and medicines for family.",
        },
        {
          title: "Urgent-Need User",
          description: "Quick access to medicines and assistance.",
        },
      ],
    },

    approach: {
      heading: "Three ways to make medicine access easier.",
      paths: [
        {
          number: "01",
          title: "Search & Order",
          description:
            "Browse medicines individually, with prescription checks for medicines that require them.",
          image: "/images/zypha/browse.png",
        },
        {
          number: "02",
          title: "Prescription Upload",
          description:
            "Upload a prescription through the camera, gallery or PDF. The scanner identifies the medicines.",
          image: "/images/zypha/upload.png",
        },
        {
          number: "03",
          title: "Smart Refills",
          description:
            "Individual reminders help users remember when their regular medicines are running low.",
          image: "/images/zypha/refill.png",
        },
      ],
      emergency: {
        title: "Help when it matters.",
        description:
          "Direct access to emergency contacts, doctors and pharmacists, alongside a chatbot for basic medicine information and guidance.",
        image: "/images/zypha/emergency.png",
      },
    },

    process: {
      heading: "From rough ideas to structured screens.",
      steps: [
        {
          number: "01",
          title: "Paper sketches",
          image: "/images/zypha/sketches.png",
        },
        {
          number: "02",
          title: "Wireframes",
          image: "/images/zypha/wireframes.png",
        },
        {
          number: "03",
          title: "High-fidelity mockups",
          image: "/images/zypha/mockups.png",
        },
      ],
    },

    finalDesign: {
      heading: "A clean interface for everyday healthcare.",
      description:
        "A consistent visual language with clear actions, accessible layouts and distinct visual cues for everyday and urgent interactions.",
      palette: [
        "#239C94",
        "#147C78",
        "#FFFFFF",
        "#B81419",
        "#123F3D",
      ],
      screens: [
        {
          title: "Home & browsing",
          image: "/images/zypha/home-browse.png",
          description: "Medicine discovery and quick access to core actions.",
        },
        {
          title: "Prescription & tracking",
          image: "/images/zypha/prescription-tracking.png",
          description: "Prescription uploads, detected medicines and order tracking.",
        },
      ],
      emergency: {
        title: "Emergency assistance",
        image: "/images/zypha/emergency.png",
        description:
          "The chatbot sits below the immediate assistance options, so basic guidance is available without delaying direct emergency help.",
      },
    },

    reflection: {
      heading: "Good design isn't about adding more.",
      quote:
        "Just because a feature is useful doesn't mean it needs to be included. I had to prioritise what users actually needed and balance functionality with simplicity, so the app wouldn't feel overwhelming.",
      takeaway:
        "Good design is about making the right features work well together.",
    },
  },
};

