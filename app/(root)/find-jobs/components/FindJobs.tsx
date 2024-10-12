import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Filters from './Filters';
import Jobs from './Jobs';
import Suggestion from './Suggestion';
const FindJobs = () => {
  return (
    <section className="w-full">
      {/* search field  */}
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex w-full max-w-[90%] items-center space-x-2">
          <Input
            className="flex-grow"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.14)',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(30px)',
              boxShadow: '0px 20px 50px rgba(1, 5, 43, 0.2)',
            }}
            placeholder="Search by keywords (PHP, NET, graphic design, etc.)"
            type="search"
          />
          <Button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            Search
          </Button>
        </div>
      </div>

      {/* filter section  */}
      <div className="my-10 grid grid-cols-12 gap-4">
        {/* First div - 30% width */}
        <div
          style={{
            borderColor: 'rgba(255, 255, 255, 0.14)',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(30px)',
            boxShadow: '0px 20px 50px rgba(1, 5, 43, 0.2)',
          }}
          className="scrollbar-hide col-span-3 h-screen w-full overflow-y-scroll rounded"
        >
          {/* Content for Filters Section */}
          <Filters />
        </div>

        {/* Center div - 40% width */}
        <div
          style={{
            borderColor: 'rgba(255, 255, 255, 0.14)',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(30px)',
            boxShadow: '0px 20px 50px rgba(1, 5, 43, 0.2)',
          }}
          className="col-span-6 h-full rounded"
        >
          {/* Content for Job Post */}
          <Jobs />
        </div>

        {/* Third div - 30% width */}
        <div
          style={{
            borderColor: 'rgba(255, 255, 255, 0.14)',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(30px)',
            boxShadow: '0px 20px 50px rgba(1, 5, 43, 0.2)',
          }}
          className="col-span-3 h-full rounded"
        >
          {/* Content for show suggestion*/}
          <Suggestion />
        </div>
      </div>
    </section>
  );
};

export default FindJobs;
