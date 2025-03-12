
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Calendar, Certificate, Headphones, MessageSquare, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Features for IELTS Success
            </h2>
            <p className="text-muted-foreground text-lg">
              Our platform is designed to help you achieve your target IELTS score through personalized tutoring and comprehensive resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<BookOpen size={24} />}
              title="Personalized Learning"
              description="Customized lesson plans based on your strengths, weaknesses, and target score."
              delay={100}
            />
            <FeatureCard
              icon={<Video size={24} />}
              title="Live & Recorded Lessons"
              description="Interactive video lessons with expert tutors, plus recordings to review at your pace."
              delay={200}
            />
            <FeatureCard
              icon={<MessageSquare size={24} />}
              title="Immediate Feedback"
              description="Get detailed feedback on your speaking and writing tasks to improve quickly."
              delay={300}
            />
            <FeatureCard
              icon={<Calendar size={24} />}
              title="Flexible Scheduling"
              description="Book lessons at times that work for you, with options for different time zones."
              delay={400}
            />
            <FeatureCard
              icon={<Certificate size={24} />}
              title="Expert Tutors"
              description="Learn from certified instructors with extensive experience in IELTS preparation."
              delay={500}
            />
            <FeatureCard
              icon={<Headphones size={24} />}
              title="Practice Materials"
              description="Access a wide range of practice tests, exercises, and study resources."
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Courses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your IELTS Preparation Path
            </h2>
            <p className="text-muted-foreground text-lg">
              Select from our range of specialized courses designed to meet your specific needs and learning style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="Fast-Track IELTS Preparation"
              description="Intensive course designed for quick improvement with daily practice and feedback."
              image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              duration="4 Weeks"
              schedule="Daily Sessions"
              price="$249"
              popular={true}
              delay={100}
            />
            <CourseCard
              title="Complete IELTS Mastery"
              description="Comprehensive preparation covering all four IELTS sections in depth."
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              duration="8 Weeks"
              schedule="3 Sessions/Week"
              price="$399"
              delay={200}
            />
            <CourseCard
              title="IELTS Speaking & Writing Focus"
              description="Specialized course focusing on improving speaking fluency and writing skills."
              image="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              duration="6 Weeks"
              schedule="2 Sessions/Week"
              price="$299"
              delay={300}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="group">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Read about the experiences of students who achieved their target IELTS scores with our tutoring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                score: "8.5",
                text: "The personalized approach and detailed feedback on my writing tasks helped me improve from band 6.5 to 8.5 in just two months!",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                delay: 100
              },
              {
                name: "Michael Chen",
                score: "7.5",
                text: "My speaking skills were my biggest challenge. The targeted practice and tips from my tutor made a huge difference in my confidence and score.",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                delay: 200
              },
              {
                name: "Aisha Patel",
                score: "8.0",
                text: "The flexible scheduling was perfect for my busy work life. I could practice at my own pace while still getting expert guidance when needed.",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                delay: 300
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-border shadow-sm relative animate-scale-in opacity-0"
                style={{ animationDelay: `${testimonial.delay}ms`, animationFillMode: 'forwards' }}
              >
                <div className="mb-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
                <div className="flex items-center mt-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-medium">IELTS Band {testimonial.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your IELTS Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start today with a personalized assessment and a customized study plan to achieve your target score.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="group min-w-[180px]">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/find-tutor">
                <Button size="lg" variant="outline" className="min-w-[180px]">
                  Find a Tutor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center mb-4">
                <span className="text-primary font-bold text-xl">IELTS Tutoria</span>
              </Link>
              <p className="text-muted-foreground mb-4">
                Personalized one-on-one IELTS tutoring to help you achieve your target score.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Courses', 'Tutors', 'Resources', 'About Us', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">IELTS Resources</h4>
              <ul className="space-y-2">
                {['Practice Tests', 'Writing Samples', 'Speaking Tips', 'Reading Strategies', 'Listening Practice', 'Grammar Tips'].map((item) => (
                  <li key={item}>
                    <Link to={`/resources/${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: contact@ieltstutoria.com</li>
                <li>Phone: +1 (234) 567-8900</li>
                <li>Address: 123 Education St, Learning City</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} IELTS Tutoria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
