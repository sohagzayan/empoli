'use client';

import TextArea from '@/components/common/text-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import moment from 'moment';
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);

type Event = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  desc?: string;
  attendees?: { name: string; avatar: string }[];
};

const users = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '2',
    name: 'Bob Williams',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '4',
    name: 'Diana Smith',
    avatar: '/placeholder.svg?height=32&width=32',
  },
  {
    id: '5',
    name: 'Edward Davis',
    avatar: '/placeholder.svg?height=32&width=32',
  },
];

export default function EnhancedCalendar() {
  const [view, setView] = useState('week');
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Team Meeting',
      start: new Date(2023, 4, 22, 10, 0),
      end: new Date(2023, 4, 22, 11, 30),
      desc: 'Weekly team sync',
      attendees: [users[0], users[1], users[2]],
    },
    {
      id: '2',
      title: 'Project Review',
      start: new Date(2023, 4, 23, 14, 0),
      end: new Date(2023, 4, 23, 16, 0),
      desc: 'Quarterly project review',
      attendees: [users[1], users[3], users[4]],
    },
  ]);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New state to handle the current date for navigation
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to handle moving the calendar forward by a step (based on view)
  const handleNext = () => {
    const newDate = moment(currentDate)
      .add(1, view === 'month' ? 'month' : 'week')
      .toDate();
    setCurrentDate(newDate);
  };

  // Function to handle moving the calendar backward by a step (based on view)
  const handleBack = () => {
    const newDate = moment(currentDate)
      .subtract(1, view === 'month' ? 'month' : 'week')
      .toDate();
    setCurrentDate(newDate);
  };

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    setNewEvent({ start, end });
    setIsModalOpen(true);
  };

  const handleSelectEvent = (event: Event) => {
    setNewEvent(event);
    setIsModalOpen(true);
  };

  const handleSaveEvent = () => {
    if (newEvent.id) {
      setEvents(
        events.map((e) => (e.id === newEvent.id ? { ...e, ...newEvent } : e)),
      );
    } else {
      setEvents([
        ...events,
        { ...newEvent, id: Date.now().toString() } as Event,
      ]);
    }
    setIsModalOpen(false);
    setNewEvent({});
  };

  const eventStyleGetter = (event: Event) => {
    const style = {
      backgroundColor: '#3182ce',
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
    };
    return { style };
  };

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b p-4">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => setCurrentDate(new Date())}>
            Today
          </Button>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={handleBack}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <h2 className="text-xl font-semibold">Calendar</h2>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <motion.aside
          className="hidden w-16 border-r p-2 sm:block"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            {users.map((user) => (
              <Avatar key={user.id}>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </motion.aside>
        <main className="flex-1 overflow-auto">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%' }}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            selectable
            eventPropGetter={eventStyleGetter}
            view={view as any}
            onView={(newView) => setView(newView)}
            date={currentDate} // Pass the current date to the calendar
            onNavigate={(date) => setCurrentDate(date)} // Sync currentDate with calendar navigation
          />
        </main>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {newEvent.id ? 'Edit Event' : 'Add New Event'}
                </DialogTitle>
              </DialogHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <Input
                  placeholder="Event Title"
                  value={newEvent.title || ''}
                  onChange={(e: any) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
                <div className="flex space-x-2">
                  <Input
                    type="datetime-local"
                    value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e: any) =>
                      setNewEvent({
                        ...newEvent,
                        start: new Date(e.target.value),
                      })
                    }
                  />
                  <Input
                    type="datetime-local"
                    value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        end: new Date(e.target.value),
                      })
                    }
                  />
                </div>
                <TextArea
                  placeholder="Event Description"
                  value={newEvent.desc || ''}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setNewEvent({ ...newEvent, desc: e.target.value })
                  }
                />
                <Select
                  value={newEvent.attendees?.map((a: any) => a.id).join(',')}
                  onValueChange={(value) => {
                    const selectedUsers = users.filter((u) =>
                      value.split(',').includes(u.id),
                    );
                    setNewEvent({ ...newEvent, attendees: selectedUsers });
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select attendees" />
                  </SelectTrigger>
                  <SelectContent>
                    {users.map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleSaveEvent}>Save</Button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
