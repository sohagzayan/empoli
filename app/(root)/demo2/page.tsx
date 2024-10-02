'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowRight,
  Bell,
  Briefcase,
  Calendar,
  Clock,
  Plus,
  Send,
  Settings,
  Users,
} from 'lucide-react';
import { useState } from 'react';

type JobPosting = {
  id: number;
  title: string;
  department: string;
  location: string;
  applicants: number;
  status: 'Open' | 'Closed' | 'On Hold';
  postedDate: string;
};

type Candidate = {
  id: number;
  name: string;
  email: string;
  role: string;
  stage: 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Hired' | 'Rejected';
  appliedDate: string;
  avatar: string;
  resume: string;
  coverLetter: string;
};

type Message = {
  id: number;
  sender: string;
  recipient: string;
  content: string;
  timestamp: string;
  isRecruiter: boolean;
};

type Task = {
  id: number;
  title: string;
  completed: boolean;
  dueDate: string;
  assignedTo: string[];
  relatedTo: 'job' | 'candidate';
  jobId?: number;
  candidateId?: number;
};

export default function EnhancedRecruiterDashboard() {
  const [selectedJobPosting, setSelectedJobPosting] =
    useState<JobPosting | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<
    'overview' | 'candidates' | 'tasks' | 'messages'
  >('overview');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [newMessage, setNewMessage] = useState('');
  const [newTask, setNewTask] = useState('');
  const [newEmail, setNewEmail] = useState({ subject: '', body: '' });
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);

  const jobPostings: JobPosting[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      applicants: 45,
      status: 'Open',
      postedDate: '2023-09-15',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      applicants: 32,
      status: 'Open',
      postedDate: '2023-09-18',
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data',
      location: 'New York, NY',
      applicants: 28,
      status: 'Closed',
      postedDate: '2023-08-30',
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'Seattle, WA',
      applicants: 39,
      status: 'Open',
      postedDate: '2023-09-10',
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      applicants: 21,
      status: 'On Hold',
      postedDate: '2023-09-05',
    },
  ];

  const candidates: Candidate[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Senior Frontend Developer',
      stage: 'Interview',
      appliedDate: '2023-09-20',
      avatar: '/placeholder.svg?height=40&width=40',
      resume: 'alice_resume.pdf',
      coverLetter: 'alice_cover.pdf',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      role: 'UX/UI Designer',
      stage: 'Screening',
      appliedDate: '2023-09-22',
      avatar: '/placeholder.svg?height=40&width=40',
      resume: 'bob_resume.pdf',
      coverLetter: 'bob_cover.pdf',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      role: 'Data Scientist',
      stage: 'Offer',
      appliedDate: '2023-09-15',
      avatar: '/placeholder.svg?height=40&width=40',
      resume: 'charlie_resume.pdf',
      coverLetter: 'charlie_cover.pdf',
    },
    {
      id: 4,
      name: 'Diana Ross',
      email: 'diana@example.com',
      role: 'Product Manager',
      stage: 'Applied',
      appliedDate: '2023-09-25',
      avatar: '/placeholder.svg?height=40&width=40',
      resume: 'diana_resume.pdf',
      coverLetter: 'diana_cover.pdf',
    },
    {
      id: 5,
      name: 'Ethan Hunt',
      email: 'ethan@example.com',
      role: 'DevOps Engineer',
      stage: 'Hired',
      appliedDate: '2023-09-10',
      avatar: '/placeholder.svg?height=40&width=40',
      resume: 'ethan_resume.pdf',
      coverLetter: 'ethan_cover.pdf',
    },
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: 'Alice Johnson',
      recipient: 'Recruiter',
      content:
        'Thank you for considering my application. Im looking forward to the interview.',
      timestamp: '2023-09-22 10:30 AM',
      isRecruiter: false,
    },
    {
      id: 2,
      sender: 'Recruiter',
      recipient: 'Alice Johnson',
      content:
        'Hello Alice, were excited to meet you too. Ill send you the interview details shortly.',
      timestamp: '2023-09-22 11:15 AM',
      isRecruiter: true,
    },
    {
      id: 3,
      sender: 'Bob Smith',
      recipient: 'Recruiter',
      content:
        'I have a question about the UX/UI Designer role. Is it fully remote?',
      timestamp: '2023-09-23 09:45 AM',
      isRecruiter: false,
    },
    {
      id: 4,
      sender: 'Recruiter',
      recipient: 'Bob Smith',
      content:
        'Hi Bob, yes, the UX/UI Designer position is fully remote. Let me know if you have any other questions!',
      timestamp: '2023-09-23 10:30 AM',
      isRecruiter: true,
    },
  ];

  const tasks: Task[] = [
    {
      id: 1,
      title: 'Review applications for Senior Frontend Developer',
      completed: false,
      dueDate: '2023-09-25',
      assignedTo: ['Recruiter'],
      relatedTo: 'job',
      jobId: 1,
    },
    {
      id: 2,
      title: 'Schedule interview with Alice Johnson',
      completed: true,
      dueDate: '2023-09-24',
      assignedTo: ['Recruiter', 'Hiring Manager'],
      relatedTo: 'candidate',
      candidateId: 1,
    },
    {
      id: 3,
      title: 'Prepare offer letter for Charlie Brown',
      completed: false,
      dueDate: '2023-09-26',
      assignedTo: ['Recruiter', 'HR Manager'],
      relatedTo: 'candidate',
      candidateId: 3,
    },
    {
      id: 4,
      title: 'Follow up with Product Manager candidates',
      completed: false,
      dueDate: '2023-09-27',
      assignedTo: ['Recruiter'],
      relatedTo: 'job',
      jobId: 4,
    },
  ];

  const filteredJobPostings =
    filterStatus === 'all'
      ? jobPostings
      : jobPostings.filter((job) => job.status === filterStatus);

  const statusColors: Record<string, string> = {
    Open: 'bg-green-100 text-green-800',
    Closed: 'bg-red-100 text-red-800',
    'On Hold': 'bg-yellow-100 text-yellow-800',
  };

  const candidateStageColors: Record<string, string> = {
    Applied: 'bg-blue-100 text-blue-800',
    Screening: 'bg-yellow-100 text-yellow-800',
    Interview: 'bg-purple-100 text-purple-800',
    Offer: 'bg-green-100 text-green-800',
    Hired: 'bg-indigo-100 text-indigo-800',
    Rejected: 'bg-red-100 text-red-800',
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedCandidate) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: 'Recruiter',
        recipient: selectedCandidate.name,
        content: newMessage,
        timestamp: new Date().toLocaleString(),
        isRecruiter: true,
      };
      messages.push(newMsg);
      setNewMessage('');
    }
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskItem: Task = {
        id: tasks.length + 1,
        title: newTask,
        completed: false,
        dueDate: new Date().toISOString().split('T')[0],
        assignedTo: ['Recruiter'],
        relatedTo: selectedCandidate ? 'candidate' : 'job',
        jobId: selectedJobPosting?.id,
        candidateId: selectedCandidate?.id,
      };
      tasks.push(newTaskItem);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (taskId: number) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
    }
  };

  const handleSendEmail = () => {
    console.log('Sending email:', newEmail);
    // Implement email sending logic here
    setNewEmail({ subject: '', body: '' });
  };

  const toggleCandidateSelection = (candidateId: number) => {
    setSelectedCandidates((prev) =>
      prev.includes(candidateId)
        ? prev.filter((id) => id !== candidateId)
        : [...prev, candidateId],
    );
  };

  const renderJobPostingDetails = () => {
    if (!selectedJobPosting) return null;

    const jobCandidates = candidates.filter(
      (candidate) => candidate.role === selectedJobPosting.title,
    );

    return (
      <Tabs value={activeTab} onValueChange={setActiveTab as any}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Job Posting Overview</CardTitle>
              <CardDescription>
                {selectedJobPosting.department} - {selectedJobPosting.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-800">
                Posted on: {selectedJobPosting.postedDate}
              </p>
              <h4 className="mb-2 font-semibold">Applicant Statistics</h4>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Applicants
                    </CardTitle>
                    <Users className="text-muted-foreground h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {selectedJobPosting.applicants}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Time Open
                    </CardTitle>
                    <Clock className="text-muted-foreground h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {Math.floor(
                        (new Date().getTime() -
                          new Date(selectedJobPosting.postedDate).getTime()) /
                          (1000 * 3600 * 24),
                      )}{' '}
                      days
                    </div>
                  </CardContent>
                </Card>
              </div>
              <h4 className="mb-2 font-semibold">Next Steps</h4>
              <ul className="list-inside list-disc text-gray-700">
                <li>Review new applications</li>
                <li>Schedule interviews for shortlisted candidates</li>
                <li>Prepare offer letters for final candidates</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="candidates">
          <Card>
            <CardHeader>
              <CardTitle>Candidates</CardTitle>
              <CardDescription>
                Manage applicants for {selectedJobPosting.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {jobCandidates.map((candidate) => (
                    <div
                      key={candidate.id}
                      className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
                    >
                      <div className="flex items-center space-x-4">
                        <Checkbox
                          checked={selectedCandidates.includes(candidate.id)}
                          onCheckedChange={() =>
                            toggleCandidateSelection(candidate.id)
                          }
                        />
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={candidate.avatar}
                            alt={candidate.name}
                          />
                          <AvatarFallback>
                            {candidate.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{candidate.name}</h4>
                          <p className="text-sm text-gray-500">
                            Applied on {candidate.appliedDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={candidateStageColors[candidate.stage]}
                        >
                          {candidate.stage}
                        </Badge>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedCandidate(candidate)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              {selectedCandidates.length > 0 && (
                <div className="mt-4 flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => console.log('Schedule Interview')}
                  >
                    Schedule Interview
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => console.log('Send Task')}
                  >
                    Send Task
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Send Email</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>
                          Send Email to Selected Candidates
                        </DialogTitle>
                        <DialogDescription>
                          Compose your email below.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="subject" className="text-right">
                            Subject
                          </label>
                          <Input
                            id="subject"
                            value={newEmail.subject}
                            onChange={(e: any) =>
                              setNewEmail({
                                ...newEmail,
                                subject: e.target.value,
                              })
                            }
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="body" className="text-right">
                            Body
                          </label>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" onClick={handleSendEmail}>
                          Send Email
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
              <CardDescription>
                Manage tasks for {selectedJobPosting.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="mb-4 h-[300px] pr-4">
                <div className="space-y-4">
                  {tasks
                    .filter(
                      (task) =>
                        task.relatedTo === 'job' &&
                        task.jobId === selectedJobPosting.id,
                    )
                    .map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`task-${task.id}`}
                          checked={task.completed}
                          onCheckedChange={() => toggleTaskCompletion(task.id)}
                        />
                        <label
                          htmlFor={`task-${task.id}`}
                          className={`flex-grow ${task.completed ? 'text-gray-500 line-through' : ''}`}
                        >
                          {task.title}
                        </label>
                        <span className="text-sm text-gray-500">
                          Due: {task.dueDate}
                        </span>
                      </div>
                    ))}
                </div>
              </ScrollArea>
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  value={newTask}
                  onChange={(e: any) => setNewTask(e.target.value)}
                  placeholder="Add a new task..."
                  className="flex-grow"
                />
                <Button onClick={handleAddTask}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Task
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>
                Communication for {selectedJobPosting.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="mb-4 h-[300px] pr-4">
                <div className="space-y-4">
                  {messages
                    .filter((message) =>
                      jobCandidates.some(
                        (candidate) =>
                          candidate.name === message.sender ||
                          candidate.name === message.recipient,
                      ),
                    )
                    .map((message) => (
                      <div
                        key={message.id}
                        className={`rounded-lg p-3 ${message.isRecruiter ? 'ml-8 bg-blue-100' : 'mr-8 bg-gray-100'}`}
                      >
                        <div className="mb-1 flex items-center justify-between">
                          <span className="font-medium">{message.sender}</span>
                          <span className="text-xs text-gray-500">
                            {message.timestamp}
                          </span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    ))}
                </div>
              </ScrollArea>
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  value={newMessage}
                  onChange={(e: any) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow"
                />
                <Button onClick={handleSendMessage}>
                  <Send className="mr-2 h-4 w-4" />
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Recruiter Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Recruiter avatar"
                />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Hiring Pipeline</CardTitle>
              <CardDescription>
                Track your hiring progress across all open positions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-stretch justify-between gap-4">
                {['Applied', 'Screening', 'Interview', 'Offer', 'Hired'].map(
                  (stage, index) => (
                    <div key={stage} className="min-w-[150px] flex-1">
                      <div className="relative h-full overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-4 text-white">
                        <div className="absolute right-0 top-0 rounded-bl-lg bg-white bg-opacity-20 p-2">
                          <span className="text-2xl font-bold">
                            {
                              candidates.filter(
                                (candidate) => candidate.stage === stage,
                              ).length
                            }
                          </span>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">{stage}</h3>
                        <p className="text-sm opacity-80">
                          {index === 0 && 'New applicants'}
                          {index === 1 && 'In review'}
                          {index === 2 && 'Scheduled'}
                          {index === 3 && 'Decisions pending'}
                          {index === 4 && 'Onboarding'}
                        </p>
                        {index < 4 && (
                          <ArrowRight
                            className="absolute bottom-2 right-2 text-white opacity-50"
                            size={24}
                          />
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Open Positions
              </CardTitle>
              <Briefcase className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {jobPostings.filter((job) => job.status === 'Open').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Candidates
              </CardTitle>
              <Users className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{candidates.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Interviews This Week
              </CardTitle>
              <Calendar className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {
                  candidates.filter(
                    (candidate) => candidate.stage === 'Interview',
                  ).length
                }
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Job Postings</h2>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                  <SelectItem value="On Hold">On Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div className="space-y-4 pr-4">
                {filteredJobPostings.map((job) => (
                  <div
                    key={job.id}
                    className={`cursor-pointer rounded-lg bg-white p-4 shadow transition duration-150 ease-in-out ${
                      selectedJobPosting?.id === job.id
                        ? 'ring-2 ring-blue-500'
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedJobPosting(job)}
                  >
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.department}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <Badge className={statusColors[job.status]}>
                        {job.status}
                      </Badge>
                      <div className="flex items-center space-x-2">
                        <span className="flex items-center text-sm text-gray-500">
                          <Users size={16} className="mr-1" /> {job.applicants}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="lg:w-2/3">
            {selectedJobPosting ? (
              renderJobPostingDetails()
            ) : (
              <Card>
                <CardContent className="flex h-64 flex-col items-center justify-center">
                  <Briefcase size={48} className="mb-4 text-gray-400" />
                  <p className="text-xl text-gray-600">
                    Select a job posting to view details
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
