import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Filter, X } from 'lucide-react';

export function FilterDrawer() {
  return (
    <Drawer>
      {/* Drawer Trigger - Filter Icon */}
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.14)',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(30px)',
            boxShadow: '0px 20px 50px rgba(1, 5, 43, 0.2)',
          }}
          className="flex items-center space-x-2"
        >
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </Button>
      </DrawerTrigger>

      {/* Full-screen Drawer from Bottom to Top */}
      <DrawerContent className="animate-slideUp fixed inset-0 h-full rounded-t-lg bg-white">
        <div className="flex justify-end p-4">
          {/* Close Button */}
          <DrawerClose asChild>
            <Button variant="ghost" className="text-gray-600">
              <X className="h-6 w-6" />
            </Button>
          </DrawerClose>
        </div>

        {/* Drawer Content */}
        <div className="p-6 text-center">
          <p className="text-xl font-semibold">This is my drawer</p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default FilterDrawer;
