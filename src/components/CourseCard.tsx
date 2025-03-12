
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, ChevronRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  schedule: string;
  price: string;
  popular?: boolean;
  delay?: number;
}

const CourseCard = ({
  title,
  description,
  image,
  duration,
  schedule,
  price,
  popular = false,
  delay = 0
}: CourseCardProps) => {
  return (
    <div 
      className="relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg animate-scale-in opacity-0 bg-white border border-border"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="py-1 px-3 bg-primary text-white text-xs font-medium rounded-full">
            Popular
          </span>
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{schedule}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold">{price}</span>
            <span className="text-xs text-muted-foreground ml-1">/ session</span>
          </div>
          <Button className="rounded-full w-10 h-10 p-0">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
