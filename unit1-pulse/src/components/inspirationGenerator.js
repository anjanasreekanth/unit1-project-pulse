const resources = [
  {
    activity: "Walking",
    type: "Video",
    title: "Walking for Better Health",
    description: "watch tips for making walking your part",
    link: "https://www.youtube.com/results?search_query=NHS+walking+for+health",
  },
  {
    activity: "Walking",
    type: "Guide",
    title: "Walking for Better Health",
    description: "watch tips for making walking your part",
    link: "https://www.nhs.uk/live-well/exercise/walking-for-health/",
  },
  {
    activity: "Walking",
    type: "Tips",
    title: "Walking for Better Health",
    description: "watch tips for making walking your part",
    link: "https://www.cdc.gov/physical-activity/php/about/walking.html",
  },
  //running
  {
    activity: "Running",
    type: "Video",
    title: "Running for Better Health",
    description: "watch tips for making walking your part",
    link: "https://www.youtube.com/results?search_query=NHS+walking+for+health",
  },
  {
    activity: "Running",
    type: "Guide",
    title: "Running for Better Health",
    description: "watch tips for making walking your part",
    link: "https://www.youtube.com/results?search_query=NHS+walking+for+health",
  },
  {
    activity: "Running",
    type: "Tips",
    title: "Running for Better Health",
    description: "watch tips for making walking your part",
    link: "https://www.youtube.com/results?search_query=NHS+walking+for+health",
  },
  //meditation
  {
    activity: "Meditation",
    type: "Video",
    title: "Meditation for Better Health",
    description: "watch tips for making walking your part",
    link: "https://www.youtube.com/results?search_query=NHS+walking+for+health",
  },
  {
    activity: "Meditation",
    type: "Guide",
    title: "Meditation for Better Health",
    description: "watch tips for making walking your part",
    link: "https://www.youtube.com/results?search_query=NHS+walking+for+health",
  },
  {
    activity: "Meditation",
    type: "Tips",
    title: "Meditation for Better Health",
    description: "watch tips for making walking your part",
    link: "https://www.youtube.com/results?search_query=NHS+walking+for+health",
  },
];

export const getInspirationResources = (activity) => {
    console.log(activity)
  return resources.filter((resource) => resource.activity === activity);
};
