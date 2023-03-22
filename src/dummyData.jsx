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

export const job_list = [
  {
    id: 412,
    title: "New Job",
    priority: "medium",
    isFollowed: true,
    status: "published",
    working_time_model: "full-time",
    location: "office",
    salary: "5801$",
    closing_date: "2022-12-31",
    recruiter: "Jane Doe g sg  gfb g",
    candidate_details: {
      total: 16,
      news: 2,
      other: [
        {
          title: "New",
          count: 3,
        },
        {
          title: "Interview",
          count: 1,
        },
        {
          title: "Offer",
          count: 0,
        },
      ],
      hired: 1,
    },
  },
  {
    id: 526,
    title: "New Job",
    priority: "low",
    isFollowed: true,
    status: "archived",
    working_time_model: "part-time",
    location: "hybrid",
    salary: "2167$",
    closing_date: "2022-12-31",
    recruiter: "Jane Doe g sg  gfb g",
    candidate_details: {
      total: 4,
      news: 2,
      other: [
        {
          title: "New",
          count: 2,
        },
        {
          title: "Interview",
          count: 0,
        },
        {
          title: "Offer",
          count: 0,
        },
      ],
      hired: 2,
    },
  },
  {
    id: 775,
    title: "New Job",
    priority: "low",
    isFollowed: true,
    status: "closed",
    working_time_model: "part-time",
    location: "office",
    salary: "2475$",
    closing_date: "2022-12-31",
    recruiter: "Jane Doe g sg  gfb g",
    candidate_details: {
      total: 14,
      news: 4,
      other: [
        {
          title: "New",
          count: 5,
        },
        {
          title: "Interview",
          count: 2,
        },
        {
          title: "Offer",
          count: 1,
        },
      ],
      hired: 2,
    },
  },
  {
    id: 971,
    title: "New Job",
    priority: "low",
    isFollowed: true,
    status: "archived",
    working_time_model: "part-time",
    location: "hybrid",
    salary: "2452$",
    closing_date: "2022-12-31",
    recruiter: "Jane Doe g sg  gfb g",
    candidate_details: {
      total: 11,
      news: 3,
      other: [
        {
          title: "New",
          count: 2,
        },
        {
          title: "Interview",
          count: 0,
        },
        {
          title: "Offer",
          count: 1,
        },
      ],
      hired: 2,
    },
  },
  {
    id: 586,
    title: "New Job",
    priority: "medium",
    isFollowed: true,
    status: "published",
    working_time_model: "full-time",
    location: "office",
    salary: "3165$",
    closing_date: "2022-12-31",
    recruiter: "Jane Doe g sg  gfb g",
    candidate_details: {
      total: 9,
      news: 5,
      other: [
        {
          title: "New",
          count: 3,
        },
        {
          title: "Interview",
          count: 1,
        },
        {
          title: "Offer",
          count: 1,
        },
      ],
      hired: 2,
    },
  },
  {
    id: 577,
    title: "New Job",
    priority: "high",
    isFollowed: true,
    status: "archived",
    working_time_model: "part-time",
    location: "hybrid",
    salary: "4283$",
    closing_date: "2022-12-31",
    recruiter: "Jane Doe g sg  gfb g",
    candidate_details: {
      total: 15,
      news: 3,
      other: [
        {
          title: "New",
          count: 5,
        },
        {
          title: "Interview",
          count: 0,
        },
        {
          title: "Offer",
          count: 0,
        },
      ],
      hired: 1,
    },
  },
  {
    id: 94,
    title: "New Job",
    priority: "high",
    isFollowed: false,
    status: "closed",
    working_time_model: "part-time",
    location: "office",
    salary: "5795$",
    closing_date: "2022-12-31",
    recruiter: "Jane Doe g sg  gfb g",
    candidate_details: {
      total: 3,
      news: 3,
      other: [
        {
          title: "New",
          count: 5,
        },
        {
          title: "Interview",
          count: 0,
        },
        {
          title: "Offer",
          count: 0,
        },
      ],
      hired: 0,
    },
  },
  {
    id: 187,
    title: "New Job",
    priority: "low",
    isFollowed: true,
    status: "archived",
    working_time_model: "part-time",
    location: "remote",
    salary: "3699$",
    closing_date: "2022-12-31",
    recruiter: "Jane Doe g sg  gfb g",
    candidate_details: {
      total: 15,
      news: 1,
      other: [
        {
          title: "New",
          count: 1,
        },
        {
          title: "Interview",
          count: 1,
        },
        {
          title: "Offer",
          count: 0,
        },
      ],
      hired: 0,
    },
  },
  {
    id: 868,
    title: "New Job",
    priority: "medium",
    isFollowed: false,
    status: "published",
    working_time_model: "full-time",
    location: "hybrid",
    salary: "2538$",
    closing_date: "2022-12-31",
    recruiter: "Jane Doe g sg  gfb g",
    candidate_details: {
      total: 7,
      news: 1,
      other: [
        {
          title: "New",
          count: 4,
        },
        {
          title: "Interview",
          count: 2,
        },
        {
          title: "Offer",
          count: 1,
        },
      ],
      hired: 1,
    },
  },
  {
    id: 475,
    title: "New Job",
    priority: "medium",
    isFollowed: false,
    status: "archived",
    working_time_model: "full-time",
    location: "remote",
    salary: "4420$",
    closing_date: "2022-12-31",
    recruiter: "Jane Doe g sg  gfb g",
    candidate_details: {
      total: 18,
      news: 5,
      other: [
        {
          title: "New",
          count: 2,
        },
        {
          title: "Interview",
          count: 1,
        },
        {
          title: "Offer",
          count: 1,
        },
      ],
      hired: 0,
    },
  },
];
export const initial_data = {
  jobs: {
    "job-1": {
      id: "task-1",
      content: job_list[0],
    },
    "job-2": {
      id: "task-2",
      content: job_list[1],
    },
    "job-3": {
      id: "job-3",
      content: job_list[2],
    },
    "job-4": {
      id: "job-4",
      content: job_list[3],
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      jobIds: ["job-1", "job-2", "job-3", "job-4"],
    },
  },
};
