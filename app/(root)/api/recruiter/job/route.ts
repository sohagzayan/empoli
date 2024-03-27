import { prisma } from "@/lib/database";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {}) {
  const searchParams = new URLSearchParams(
    request.nextUrl.searchParams.toString()
  ); // -> has to use this form

  let searchParamsObj = {} as any;
  searchParams.forEach((value, key) => {
    searchParamsObj[key] = value;
  });
  console.log("searchParamsObj", searchParamsObj);

  const {
    location,
    job_facilities,
    salary_range_min,
    salary_range_max,
    job_duration,
    job_type,
    skills,
    perks,
    office_location,
    page,
  } = searchParamsObj;

  let pageLimit = 10;
  let offset;

  if (page) {
    offset = (parseInt(page) - 1) * pageLimit;
  }

  try {
    const filters = {
      // location: location || undefined,
      // OR: [],
      // employee_type: employee_type || undefined,
      // job_duration: parseInt(job_duration) || undefined,
      // applicationDeadline: applicationDeadline || undefined,
    } as any;

    if (skills) {
      const skillList = skills.split(",");
      filters.required_skills = {
        hasSome: skillList,
      };
    }
    if (job_duration) {
      filters.job_duration = parseInt(job_duration);
    }
    if (location) {
      const locationList = location.split(",");
      filters.location = {
        in: locationList,
      };
    }
    if (perks) {
      const perksList = perks.split(",");
      filters.perks = {
        hasSome: perksList,
      };
    }
    if (job_type) {
      const skillList = job_type.split(",");
      filters.job_type = {
        in: skillList,
      };
    }
    if (office_location) {
      filters.office_location = office_location;
    }
    if (salary_range_min) {
      filters.salary_range_min = { gte: parseInt(salary_range_min) };
    }
    if (salary_range_max) {
      filters.salary_range_max = { lte: parseInt(salary_range_max) };
    }
    if (job_facilities) {
      filters.job_facilities = { has: job_facilities };
    }

    console.log("get jobs filter obj >", filters);

    console.log("pagination >>", offset, pageLimit);

    // Fetch jobs based on filters
    const jobs = await prisma.job.findMany({
      where: {
        ...filters,
      },
      skip: offset,
      take: pageLimit,
      include: {
        recruiter: true, // Include the user object associated with each job
      },
    });

    const totalCount = await prisma.job.count({
      where: {
        ...filters,
      },
    });

    console.log("job list form get >> >", jobs);
    return NextResponse.json({ jobs, totalCount });
  } catch (error: any) {
    console.log("error form jobs geting >>>>>", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
