'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    RadialLinearScale,
    Tooltip,
} from 'chart.js';
import {
    Activity,
    BarChart3,
    BookOpen,
    BriefcaseIcon,
    LineChart,
    Network,
    Star,
    TrendingUp,
    Users,
} from 'lucide-react';
import { Bar, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend,
);

export default function CandidateAnalytics() {
  const applicationData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Applications Sent',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(99, 102, 241, 0.6)',
        borderColor: 'rgb(99, 102, 241)',
        borderWidth: 1,
      },
    ],
  };

  const interviewPerformanceData = {
    labels: [
      'Technical Skills',
      'Communication',
      'Problem Solving',
      'Cultural Fit',
      'Leadership',
    ],
    datasets: [
      {
        label: 'Your Performance',
        data: [4.2, 3.8, 4.5, 4.0, 3.5],
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgb(99, 102, 241)',
        pointBackgroundColor: 'rgb(99, 102, 241)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(99, 102, 241)',
      },
      {
        label: 'Average Performance',
        data: [3.8, 3.5, 3.7, 3.9, 3.6],
        fill: true,
        backgroundColor: 'rgba(244, 63, 94, 0.2)',
        borderColor: 'rgb(244, 63, 94)',
        pointBackgroundColor: 'rgb(244, 63, 94)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(244, 63, 94)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        type: 'category' as const,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  return (
    <div className="container mx-auto min-h-screen bg-gray-50 p-4">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
        Candidate Analytics Dashboard
      </h1>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4 gap-4 rounded-lg bg-white p-1 shadow-md">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="market">Job Market</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Applications
                </CardTitle>
                <BriefcaseIcon className="h-4 w-4 text-indigo-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">44</div>
                <p className="text-green-500 text-xs">+10% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Interview Invites
                </CardTitle>
                <Users className="h-4 w-4 text-indigo-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-green-500 text-xs">+2 this week</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Profile Views
                </CardTitle>
                <Activity className="h-4 w-4 text-indigo-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">321</div>
                <p className="text-green-500 text-xs">+18% from last week</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Job Match Score
                </CardTitle>
                <Star className="h-4 w-4 text-indigo-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-gray-500">Based on your profile</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <Bar data={applicationData} options={chartOptions} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Application Funnel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-36 font-medium">Applied</div>
                  <Progress value={100} className="flex-1" />
                  <div className="w-12 text-right font-medium">44</div>
                </div>
                <div className="flex items-center">
                  <div className="w-36 font-medium">Reviewed</div>
                  <Progress value={75} className="flex-1" />
                  <div className="w-12 text-right font-medium">33</div>
                </div>
                <div className="flex items-center">
                  <div className="w-36 font-medium">Interview Invited</div>
                  <Progress value={25} className="flex-1" />
                  <div className="w-12 text-right font-medium">11</div>
                </div>
                <div className="flex items-center">
                  <div className="w-36 font-medium">Offer Received</div>
                  <Progress value={5} className="flex-1" />
                  <div className="w-12 text-right font-medium">2</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div>
                    <h3 className="font-semibold">Senior Frontend Developer</h3>
                    <p className="text-sm text-gray-600">TechCorp Inc.</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">
                    In Review
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div>
                    <h3 className="font-semibold">Full Stack Engineer</h3>
                    <p className="text-sm text-gray-600">InnovateSoft</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    Applied
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div>
                    <h3 className="font-semibold">UX/UI Designer</h3>
                    <p className="text-sm text-gray-600">DesignMasters</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800"
                  >
                    Interview Scheduled
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Skills Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-36 font-medium">React</div>
                  <Progress value={90} className="flex-1" />
                  <div className="w-20 text-right font-medium">Expert</div>
                </div>
                <div className="flex items-center">
                  <div className="w-36 font-medium">Node.js</div>
                  <Progress value={75} className="flex-1" />
                  <div className="w-20 text-right font-medium">Advanced</div>
                </div>
                <div className="flex items-center">
                  <div className="w-36 font-medium">Python</div>
                  <Progress value={60} className="flex-1" />
                  <div className="w-20 text-right font-medium">
                    Intermediate
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-36 font-medium">AWS</div>
                  <Progress value={40} className="flex-1" />
                  <div className="w-20 text-right font-medium">Beginner</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Interview Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <Radar
                  data={interviewPerformanceData}
                  options={{
                    ...chartOptions,
                    scales: {
                      r: {
                        beginAtZero: true,
                        max: 5,
                        ticks: {
                          stepSize: 1,
                        },
                      },
                    },
                  }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Recommended Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-indigo-300 bg-indigo-100 text-indigo-800"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-pink-100 text-pink-800 border-pink-300"
                >
                  GraphQL
                </Badge>
                <Badge
                  variant="outline"
                  className="border-blue-300 bg-blue-100 text-blue-800"
                >
                  Docker
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-800 border-green-300"
                >
                  Kubernetes
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-purple-100 text-purple-800 border-purple-300"
                >
                  Machine Learning
                </Badge>
              </div>
              <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                Start Learning
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="market" className="space-y-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Job Market Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="text-green-500 h-5 w-5" />
                    <span className="font-medium">Frontend Development</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 border-green-300"
                  >
                    High Demand
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="text-yellow-500 h-5 w-5" />
                    <span className="font-medium">Data Science</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-yellow-100 text-yellow-800 border-yellow-300"
                  >
                    Growing
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center space-x-2">
                    <LineChart className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">Cloud Engineering</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-blue-300 bg-blue-100 text-blue-800"
                  >
                    Stable
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Salary Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-600">
                  Based on your profile and market data:
                </p>
                <h3 className="text-3xl font-bold text-indigo-600">
                  $95,000 - $120,000
                </h3>
                <p className="text-sm text-gray-500">
                  Annual salary range for your skills and experience
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Networking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center space-x-2">
                    <Network className="h-5 w-5 text-indigo-500" />
                    <span className="font-medium">Connections</span>
                  </div>
                  <span className="font-semibold">287</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-indigo-500" />
                    <span className="font-medium">Profile Views</span>
                  </div>
                  <span className="font-semibold">56 this week</span>
                </div>
              </div>
              <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                Expand Your Network
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
