import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactUs = () => {
  return (
    <div className="my-10 rounded-md bg-white p-8">
      <div>
        <h3 className="text-[18px] font-medium text-purple">Contact Us</h3>
        <form action="">
          <div className="mt-4 flex flex-col gap-5">
            <Input
              className="bg-primary-50 text-primary"
              type="text"
              placeholder="Your Name"
            />
            <Input
              className="bg-primary-50 text-primary"
              type="text"
              placeholder="Email Address"
            />
            {/* <Textarea
              className="bg-primary-50 text-primary"
              placeholder="Message"
            /> */}
            <Button>Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
