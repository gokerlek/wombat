export function addRandomJobs(numJobs, jobs) {
  for (let i = 0; i < numJobs; i++) {
    const newJob = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "New Job",
      priority: ["high", "medium", "low"][Math.floor(Math.random() * 3)],
      isFollowed: Math.random() < 0.5,
      status: ["published", "archived", "closed"][
        Math.floor(Math.random() * 3)
      ],
      working_time_model: ["full-time", "part-time"][
        Math.floor(Math.random() * 2)
      ],
      location: ["remote", "hybrid", "office"][Math.floor(Math.random() * 3)],
      salary: Math.floor(Math.random() * 5000) + 1000 + "$",
      closing_date: "2022-12-31",
      recruiter: "Jane Doe g sg  gfb g",
      candidate_details: {
        total: Math.floor(Math.random() * 20) + 1,
        news: Math.floor(Math.random() * 5) + 1,
        other: [
          {
            title: "New",
            count: Math.floor(Math.random() * 5) + 1,
          },
          {
            title: "Interview",
            count: Math.floor(Math.random() * 3),
          },
          {
            title: "Offer",
            count: Math.floor(Math.random() * 2),
          },
        ],
        hired: Math.floor(Math.random() * 3),
      },
    };

    jobs.push(newJob);
  }
}
