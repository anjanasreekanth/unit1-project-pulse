const inspirationResources = [
  {
    activity: "Walking",
    type: "Video",
    title: "Walking for Better Health",
    description: "Watch simple tips for making walking part of your day.",
    link: "https://www.youtube.com/results?search_query=NHS+walking+for+health",
  },
  {
    activity: "Walking",
    type: "Guide",
    title: "Walking for Health",
    description: "Read beginner advice about the benefits of regular walking.",
    link: "https://www.nhs.uk/live-well/exercise/walking-for-health/",
  },
  {
    activity: "Walking",
    type: "Tips",
    title: "Start a walking routine",
    description: "Learn how to start slowly and build a regular routine.",
    link: "https://www.cdc.gov/physical-activity/php/about/walking.html",
  },
  {
    activity: "Running",
    type: "Video",
    title: "Running for beginners",
    description: "Find beginner videos about pace, warm-ups, and safe running.",
    link: "https://www.youtube.com/results?search_query=NHS+couch+to+5k+beginner",
  },
  {
    activity: "Running",
    type: "Plan",
    title: "Couch to 5k",
    description: "Follow a simple running plan for beginners.",
    link: "https://www.nhs.uk/better-health/get-active/get-running-with-couch-to-5k/",
  },
  {
    activity: "Running",
    type: "Guide",
    title: "Activity Basics",
    description: "Review useful guidace for building an active lifestyle.",
    link: "https://www.cdc.gov/physical-activity/php/about/index.html",
  },
  {
    activity: "Meditation",
    type: "Audio",
    title: "Guided meditations",
    description: "Choose a short guided mindfulness practice from UCLA.",
    link: "https://www.uclahealth.org/uclamindful/guided-meditations",
  },
  {
    activity: "Meditation",
    type: "Video",
    title: "Couch to 5k",
    description: "Find a short guided meditation for a calm daily reset.",
    link: "https://www.youtube.com/results?search_query=ucla+mindful+10+minute+meditation",
  },
  {
    activity: "Meditation",
    type: "Guide",
    title: "Activity Basics",
    description: "Learn what mindfulness is and how to begin practicing.",
    link: "https://www.nhs.uk/mental-health/self-help/tips-and-support/mindfulness/",
  },
];

export const getInspirationReources = (activity) => {
  return inspirationResources.filter(
    (resource) => resource.activity === activity,
  );
};
