import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Job {
  title: string;
  rate: string;
  description: string;
}

const jobs: Job[] = [
  {
    title: 'Senior Ruby on Rails Engineer',
    rate: '$60/hr',
    description:
      'Lorem ipsum dolor sit amet, consect velit, vulputate eu pharetra nec.',
  },
  {
    title: 'Senior Product Designer',
    rate: '$45/hr',
    description:
      'Lorem ipsum dolor sit amet, consect velit, vulputate eu pharetra nec.',
  },
];

const Suggestion = () => {
  return (
    <section className="p-3">
      {/* Overview Section */}
      <div className="mx-auto w-full max-w-2xl space-y-6 rounded-lg">
        <JobSection title="TOP JOBS" jobs={jobs} />
        <JobSection title="MOST VIEWED THIS WEEK" jobs={jobs} />
      </div>
    </section>
  );
};

function JobSection({ title, jobs }: { title: string; jobs: Job[] }) {
  return (
    <Card className="border-none bg-transparent text-gray-400 shadow-none">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-sm font-semibold text-blue-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 pb-0 pt-2">
        <ul className="space-y-4">
          {jobs.map((job, index) => (
            <li
              className="mb-4 w-full cursor-pointer border border-black8 p-2 text-gray-400 shadow-2xl transition-all duration-100 hover:bg-black8"
              key={index}
            >
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-400">{job.rate}</p>
              <p className="mt-1 text-sm text-gray-400">{job.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Suggestion;
