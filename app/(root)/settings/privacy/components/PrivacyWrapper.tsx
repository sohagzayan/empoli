import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MapPin } from 'lucide-react';

export default function PrivacyWrapper() {
  return (
    <div
      style={{
        borderColor: 'rgba(255, 255, 255, 0.14)',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(30px)',
        boxShadow: '0px 20px 50px rgba(1, 5, 43, 0.2)',
      }}
      className="rounded-md border p-4 text-white"
    >
      <h1 className="text-primary mb-5 text-2xl font-bold">Profile visits</h1>
      <p className="mb-3 text-text6">
        Choose what others see when you visit their profile
      </p>

      <RadioGroup defaultValue="public" className="space-y-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="public" id="public" />
            <Label htmlFor="public" className="font-semibold">
              Public mode
            </Label>
            <span className="text-sm text-text6">(Recommended)</span>
          </div>
          <p className="ml-6 text-sm text-text6">
            You can see who visited your profile, and people & companies can see
            when youve visited their profiles or jobs.
          </p>
          <Card className="ml-6 border-[rgba(255,255,255,0.14)]">
            <CardContent className="flex items-center space-x-4 p-4">
              <Avatar className="rounded-lg">
                <AvatarImage src="/assets/images/profile.webp" alt="A" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">s sohag</p>
                <div className="text-muted-foreground flex items-center text-sm">
                  <MapPin className="mr-1 h-4 w-4" />
                  Dublin
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="private" id="private" />
            <Label htmlFor="private" className="font-semibold">
              Private mode
            </Label>
          </div>
          <p className="ml-6 text-sm text-text6">
            You cant see who visited your profile. Whenever you turn on private
            mode, your visitor history is erased.
          </p>
          <Card className="ml-6 border-[rgba(255,255,255,0.14)]">
            <CardContent className="flex items-center space-x-4 p-4">
              <Avatar className="rounded-lg">
                <AvatarImage src="/assets/images/profile.webp" alt="A" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Anonymous Wellfound user</p>
                <p className="text-muted-foreground text-sm">
                  Visited your profile in Private mode
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </RadioGroup>

      <Button className="mt-8 w-full bg-theme1 text-white sm:w-auto">
        Save
      </Button>
    </div>
  );
}
