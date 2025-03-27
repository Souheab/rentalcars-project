'use client';

import Image from 'next/image';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { DatePicker } from '@/components/ui/date-picker';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

// Generate all 30-minute interval times
const timeOptions = Array.from({ length: 48 }, (_, i) => {
  const hours24 = Math.floor(i / 2);
  const minutes = (i % 2) * 30;
  const period = hours24 < 12 ? 'a.m.' : 'p.m.';
  const hour12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const minuteStr = minutes.toString().padStart(2, '0');
  return `${hour12}:${minuteStr} ${period}`;
});

export default function HomePage() {
  return (
    <div className="relative h-screen bg-[url('/hero.png')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute top-6 right-6">
        <Button className="px-6">Sign Up</Button>
      </div>
      {/* Content */}
      <div className="relative max-w-5xl mx-auto pt-24 px-6">
        <h1 className="text-5xl font-bold text-white mb-3">Car Rental – Search, Compare & Save</h1>
        <p className="text-lg text-white mb-8">
          Free cancellations on most bookings · 60,000+ locations · Customer support in 30+ languages
        </p>

        {/* Search Card */}
        <Card className="bg-white border-2 border-yellow-400 rounded-xl shadow-lg">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex gap-4">
              <div>
                <Label htmlFor="pickup" className="mb-1">Pick‑up location</Label>
                <div className="relative">
                  <MapPinIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="pickup" placeholder="Airport, city or station" className="pl-8" />
                </div>
              </div>
              <div>
                <Label htmlFor="pickup-date" className="mb-1">Pick‑up date</Label>
                <DatePicker />
              </div>
              <div>
                <Label htmlFor="pickup-time" className="mb-1">Pick-up time</Label>
                <Select>
                  <SelectTrigger id="pickup-time">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeOptions.map(time => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dropoff-date" className="mb-1">Drop‑off date</Label>
                <DatePicker />
              </div>
              <div>
                <Label htmlFor="dropoff-time" className="mb-1">Drop-off time</Label>
                <Select>
                  <SelectTrigger id="dropoff-time">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeOptions.map(time => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full">Search</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
