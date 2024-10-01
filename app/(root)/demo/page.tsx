'use client';
import {
  ArrowRight,
  Bell,
  Briefcase,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  FileText,
  MessageSquare,
  Send,
  Settings,
  XCircle,
} from 'lucide-react';
import React, { useState } from 'react';

type Job = {
  id: number;
  title: string;
  company: string;
  status: 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Rejected';
  messages: Message[];
  assignments: number;
  dueDate?: string;
  salary?: string;
  location: string;
};

type Message = {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
};

export default function EnhancedJobSeekerDashboard() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [activeTab, setActiveTab] = useState<
    'overview' | 'messages' | 'assignments' | 'documents'
  >('overview');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [newMessage, setNewMessage] = useState('');
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      status: 'Interview',
      messages: [
        {
          id: 1,
          sender: 'HR Manager',
          content:
            'Thank you for your application. We would like to schedule an interview.',
          timestamp: '2 days ago',
        },
        {
          id: 2,
          sender: 'You',
          content:
            'Thank you for considering my application. Im available for an interview next week.',
          timestamp: '1 day ago',
        },
      ],
      assignments: 1,
      location: 'San Francisco, CA',
      salary: '$120,000 - $150,000',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'DesignHub',
      status: 'Applied',
      messages: [],
      assignments: 0,
      location: 'Remote',
      salary: '$90,000 - $110,000',
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'DataWise',
      status: 'Offer',
      messages: [
        {
          id: 1,
          sender: 'Hiring Manager',
          content:
            'Were pleased to offer you the position of Data Scientist at DataWise.',
          timestamp: '3 days ago',
        },
      ],
      assignments: 2,
      location: 'New York, NY',
      salary: '$130,000 - $160,000',
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'InnovateCo',
      status: 'Screening',
      messages: [],
      assignments: 0,
      location: 'Seattle, WA',
      salary: '$110,000 - $140,000',
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech',
      status: 'Applied',
      messages: [],
      assignments: 1,
      location: 'Austin, TX',
      salary: '$100,000 - $130,000',
    },
  ];

  const filteredJobs =
    filterStatus === 'all'
      ? jobs
      : jobs.filter((job) => job.status === filterStatus);

  const statusColors: Record<string, string> = {
    Applied: 'bg-blue-100 text-blue-800',
    Screening: 'bg-yellow-100 text-yellow-800',
    Interview: 'bg-purple-100 text-purple-800',
    Offer: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800',
  };

  const handleSendMessage = () => {
    if (selectedJob && newMessage.trim()) {
      const updatedJobs = jobs.map((job) => {
        if (job.id === selectedJob.id) {
          return {
            ...job,
            messages: [
              ...job.messages,
              {
                id: job.messages.length + 1,
                sender: 'You',
                content: newMessage,
                timestamp: 'Just now',
              },
            ],
          };
        }
        return job;
      });
      setSelectedJob(
        updatedJobs.find((job) => job.id === selectedJob.id) || null,
      );
      setNewMessage('');
    }
  };

  const renderJobDetails = () => {
    if (!selectedJob) return null;

    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h3 className="mb-2 text-lg font-semibold">Job Overview</h3>
            <p className="mb-4 text-gray-600">
              {selectedJob.company} - {selectedJob.location}
            </p>
            <p className="mb-4 text-gray-800">{selectedJob.salary}</p>
            <h4 className="mb-2 font-semibold">Application Timeline</h4>
            <div className="mb-6 flex items-center space-x-4">
              {['Applied', 'Screening', 'Interview', 'Offer'].map(
                (stage, index) => (
                  <React.Fragment key={stage}>
                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                        selectedJob.status === stage
                          ? 'bg-indigo-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index < 3 && (
                      <div
                        className={`h-0.5 flex-grow ${
                          ['Applied', 'Screening', 'Interview'].indexOf(
                            selectedJob.status,
                          ) > index
                            ? 'bg-indigo-500'
                            : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </React.Fragment>
                ),
              )}
            </div>
            <h4 className="mb-2 font-semibold">Next Steps</h4>
            <ul className="list-inside list-disc text-gray-700">
              <li>Prepare for technical interview</li>
              <li>Research company culture</li>
              <li>Update portfolio with recent projects</li>
            </ul>
          </div>
        );
      case 'messages':
        return (
          <div>
            <h3 className="mb-4 text-lg font-semibold">Messages</h3>
            <div className="mb-4 max-h-64 space-y-4 overflow-y-auto">
              {selectedJob.messages.map((message) => (
                <div
                  key={message.id}
                  className={`rounded-lg p-3 ${message.sender === 'You' ? 'ml-8 bg-indigo-100' : 'mr-8 bg-gray-100'}`}
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
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow rounded-md border p-2"
              />
              <button
                onClick={handleSendMessage}
                className="rounded-md bg-indigo-500 p-2 text-white hover:bg-indigo-600"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        );
      case 'assignments':
        return (
          <div>
            <h3 className="mb-4 text-lg font-semibold">Assignments</h3>
            <div className="space-y-4">
              {[...Array(selectedJob.assignments)].map((_, index) => (
                <div key={index} className="rounded-lg bg-white p-4 shadow">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">
                      Technical Assessment {index + 1}
                    </span>
                    <span className="text-sm text-gray-500">
                      Due in {3 - index} days
                    </span>
                  </div>
                  <p className="mb-2 text-gray-700">
                    Complete the coding challenge and submit your solution.
                  </p>
                  <button className="rounded-md bg-indigo-600 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-indigo-700">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'documents':
        return (
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Application Documents
            </h3>
            <div className="space-y-4">
              {['Resume', 'Cover Letter', 'Portfolio'].map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
                >
                  <div className="flex items-center">
                    <FileText className="mr-2 text-indigo-500" />
                    <span>{doc}</span>
                  </div>
                  <div>
                    <button className="mr-2 text-indigo-600 hover:text-indigo-800">
                      View
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-800">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Job Application Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <button className="rounded-full bg-gray-200 p-2 text-gray-600 hover:bg-gray-300">
                <Bell size={20} />
              </button>
              <button className="rounded-full bg-gray-200 p-2 text-gray-600 hover:bg-gray-300">
                <Settings size={20} />
              </button>
              <div className="relative">
                <img
                  className="h-10 w-10 rounded-full"
                  src="/placeholder.svg?height=40&width=40"
                  alt="User avatar"
                />
                <span className="bg-green-400 absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="p-6">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Application Journey
              </h2>
              <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                {['Applied', 'Screening', 'Interview', 'Offer'].map(
                  (stage, index) => (
                    <div key={stage} className="w-full flex-1 md:w-auto">
                      <div className="to-purple-600 relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 p-4 text-white">
                        <div className="absolute right-0 top-0 rounded-bl-lg bg-white bg-opacity-20 p-2">
                          <span className="text-2xl font-bold">
                            {jobs.filter((job) => job.status === stage).length}
                          </span>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">{stage}</h3>
                        <p className="text-sm opacity-80">
                          {index === 0 && 'Your journey begins'}
                          {index === 1 && 'Making progress'}
                          {index === 2 && 'Almost there'}
                          {index === 3 && 'Success awaits'}
                        </p>
                        {index < 3 && (
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
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={20} />
                    <span className="text-sm font-medium text-gray-600">
                      2 Completed
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-yellow-500 mr-2" size={20} />
                    <span className="text-sm font-medium text-gray-600">
                      3 In Progress
                    </span>
                  </div>
                  <div className="flex items-center">
                    <XCircle className="text-red-500 mr-2" size={20} />
                    <span className="text-sm font-medium text-gray-600">
                      1 Rejected
                    </span>
                  </div>
                </div>
                <button className="rounded-md bg-indigo-600 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-indigo-700">
                  View All Applications
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                Upcoming Interviews
              </h3>
              <Calendar className="text-indigo-500" size={24} />
            </div>
            <ul className="space-y-3">
              {jobs
                .filter((job) => job.status === 'Interview')
                .map((job) => (
                  <li
                    key={job.id}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-600">{job.title}</span>
                    <span className="text-sm text-gray-500">
                      Tomorrow, 2:00 PM
                    </span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                Pending Tasks
              </h3>
              <Briefcase className="text-indigo-500" size={24} />
            </div>
            <ul className="space-y-3">
              {jobs
                .filter((job) => job.assignments > 0)
                .map((job) => (
                  <li
                    key={job.id}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-600">
                      {job.title} - Assessment
                    </span>
                    <span className="text-sm text-gray-500">Due in 3 days</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                Recent Activity
              </h3>
              <MessageSquare className="text-indigo-500" size={24} />
            </div>
            <ul className="space-y-3">
              {jobs
                .filter((job) => job.messages.length > 0)
                .map((job) => (
                  <li
                    key={job.id}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-600">
                      New message from {job.company}
                    </span>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Applied Jobs</h2>
              <div className="relative">
                <select
                  className="appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-8 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="Applied">Applied</option>
                  <option value="Screening">Screening</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <ChevronDown
                  className="absolute right-2 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div className="max-h-[calc(100vh-300px)] space-y-4 overflow-y-auto">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className={`cursor-pointer rounded-lg bg-white p-4 shadow transition duration-150 ease-in-out ${
                    selectedJob?.id === job.id
                      ? 'ring-2 ring-indigo-500'
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedJob(job)}
                >
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[job.status]}`}
                    >
                      {job.status}
                    </span>
                    <div className="flex items-center space-x-2">
                      {job.messages.length > 0 && (
                        <span className="flex items-center text-sm text-gray-500">
                          <MessageSquare size={16} className="mr-1" />{' '}
                          {job.messages.length}
                        </span>
                      )}
                      {job.assignments > 0 && (
                        <span className="flex items-center text-sm text-gray-500">
                          <Briefcase size={16} className="mr-1" />{' '}
                          {job.assignments}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            {selectedJob ? (
              <div className="rounded-lg bg-white p-6 shadow">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">
                    {selectedJob.title}
                  </h2>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${statusColors[selectedJob.status]}`}
                  >
                    {selectedJob.status}
                  </span>
                </div>
                <div className="mb-6 flex space-x-4">
                  <button
                    className={`rounded-md px-4 py-2 ${activeTab === 'overview' ? 'bg-indigo-100 text-indigo-800' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button
                    className={`rounded-md px-4 py-2 ${activeTab === 'messages' ? 'bg-indigo-100 text-indigo-800' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('messages')}
                  >
                    Messages
                  </button>
                  <button
                    className={`rounded-md px-4 py-2 ${activeTab === 'assignments' ? 'bg-indigo-100 text-indigo-800' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('assignments')}
                  >
                    Assignments
                  </button>
                  <button
                    className={`rounded-md px-4 py-2 ${activeTab === 'documents' ? 'bg-indigo-100 text-indigo-800' : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('documents')}
                  >
                    Documents
                  </button>
                </div>
                {renderJobDetails()}
              </div>
            ) : (
              <div className="rounded-lg bg-white p-6 text-center shadow">
                <Briefcase size={48} className="mx-auto mb-4 text-gray-400" />
                <p className="text-xl text-gray-600">
                  Select a job to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* AI Assistant */}
      <div
        className={`fixed bottom-4 right-4 transition-all duration-300 ${showAIAssistant ? 'w-80' : 'w-12'}`}
      >
        <button
          onClick={() => setShowAIAssistant(!showAIAssistant)}
          className="absolute bottom-0 right-0 rounded-full bg-indigo-600 p-3 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700"
        >
          {showAIAssistant ? (
            <XCircle size={24} />
          ) : (
            <MessageSquare size={24} />
          )}
        </button>
        {showAIAssistant && (
          <div className="mb-16 rounded-lg bg-white p-4 shadow-xl">
            <h3 className="mb-2 text-lg font-semibold">AI Assistant</h3>
            <div className="mb-4 h-48 overflow-y-auto rounded bg-gray-50 p-2">
              <p className="text-sm text-gray-600">
                Hello! I&#39;m your AI assistant. How can I help you with your
                job search today?
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your question..."
                className="flex-grow rounded-l-md border p-2"
              />
              <button className="rounded-r-md bg-indigo-500 p-2 text-white hover:bg-indigo-600">
                <Send size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
