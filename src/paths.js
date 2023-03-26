export const auth = {
  login: "/login",
  signup: "/signup",
  forgot_password: "/forgot-password",
  before_start: "/before-start",
};

export const dashboard = {
  main: "/",
  jobs: "/jobs",
  job_details: "/jobs/:id",
  candidates: "/candidates",
  talent_pools: "/talent-pools",
  reports: "/reports",
  campaigns: "/campaigns",
  settings: "/settings",
  create_job: "/create-job",
};

export const paths = {
  ...auth,
  ...dashboard,
};
