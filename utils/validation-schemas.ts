import * as Yup from "yup";

export const registerValidationAsCandidateSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full Name is required")
    .test(
      "is-full-name",
      "Name isn't a full name, please provide a first and last name",
      (value) => {
        const words = value.trim().split(" ");
        return words.length >= 2;
      }
    ),
  email: Yup.string()
    .email("The e-mail address is not valid.")
    .required("Email field is required"),
  password: Yup.string()
    .required("Password field is required.")
    .min(6, "The password is too short: it must be at least 6 characters."),
});

export const registerSurveyValidationSchema = Yup.object().shape({
  company_approach: Yup.string(),
  flexible_jobs_6months: Yup.string(),
  desired_job_sample: Yup.string(),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("The e-mail address is not valid.")
    .required("Email field is required"),
  password: Yup.string()
    .required("Password field is required.")
    .min(6, "The password is too short: it must be at least 6 characters."),
});

export const signUpValidationAsRecruiterSchema = Yup.object().shape({
  first_name: Yup.string().required("FirstName field is required"),
  last_name: Yup.string().required("LastName field is required"),
  company_name: Yup.string().required("company name field is required"),
  company_website: Yup.string()
    .url()
    .required("company website field is required"),
  job_title: Yup.string().required("job title field is required"),
  how_did_you_hear_about_us: Yup.string().required(
    "how did you here us field is required"
  ),

  email: Yup.string()
    .email("The e-mail address is not valid.")
    .required("Email field is required"),
  password: Yup.string()
    .required("Password field is required.")
    .min(6, "The password is too short: it must be at least 6 characters."),
});

export const loginValidationAsRecruiterSchema = Yup.object().shape({
  email: Yup.string()
    .email("The e-mail address is not valid.")
    .required("Email field is required"),
  password: Yup.string()
    .required("Password field is required.")
    .min(6, "The password is too short: it must be at least 6 characters."),
});

export const surveyValidationForRecruiterSchema = Yup.object().shape({
  company_based: Yup.string().required("company base field is required"),
  remote_work_policy: Yup.string().required(
    "remote work policy field is required"
  ),
  flexible_job_openings_projection: Yup.string().required(
    "flexible_job_openings_projection field is required"
  ),
  sample_job_posting: Yup.string()
    .url()
    .required("sample_job_posting field is required"),
  flexible_job_types_offered: Yup.string().required(
    "flexible_job_types_offered field is required"
  ),
  job_posting_rules_agreement: Yup.string().required(
    "job_posting_rules_agreement field is required"
  ),
});

export const registerValidationAsRecruiterSchema = Yup.object().shape({
  firstName: Yup.string().required("firstName field is required"),
  lastName: Yup.string().required("lastName field is required"),
  email: Yup.string()
    .email("The e-mail address is not valid.")
    .required("Email field is required"),
  password: Yup.string()
    .required("Password field is required.")
    .min(6, "The password is too short: it must be at least 6 characters."),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "The specified passwords do not match.")
    .required("Confirm Password field is required."),
  // phone: Yup.string().required("Phone field is requireds"),
});

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("The e-mail address is not valid.")
    .required("Email field is required"),
  password: Yup.string()
    .required("Password field is required.")
    .min(6, "The password is too short"),
});

export const postNewJobValidationSchema = Yup.object().shape({
  job_type: Yup.string().required("Job type is required"),
  salary_range_min: Yup.number().required("Minimum salary is required"),
  salary_range_max: Yup.number().required("Maximum salary is required"),
  qualifications: Yup.string(),
  experience: Yup.string().required("Experience is required").max(30),
  applicationDeadline: Yup.string(),
  // company_logo: Yup.mixed().required("Company logo is required"),
  job_duration: Yup.string().required("Job Duration are required"),
  numberOfOpenings: Yup.string().required("Number Of Openings are required"),
  assessment_question1: Yup.string(),
  assessment_question2: Yup.string(),
  location: Yup.string().required("location is required"),
  company: Yup.string().required("Company  is required"),
  office_location: Yup.string().required("country  is required"),
});

export const job_facilities = [
  { id: 1, name: "Internships with job offer" },
  { id: 2, name: "Fast response" },
  { id: 3, name: "Early applicant" },
  { id: 4, name: "Internships for women" },
];
