import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Github, Linkedin, ExternalLink, Download, Phone, Send, Menu, BotMessageSquare } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Index = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xldnwpva");
  const headerRef = useRef<HTMLElement>(null);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  // Show success message when form is submitted successfully
  React.useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
    }
  }, [state.succeeded, toast]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    "Programming": ["Python", "SQL"],
    "AI/ML": ["Deep Learning", "NLP", "Computer Vision", "Generative AI", "Predictive Analytics"],
    "Frameworks": ["PyTorch", "TensorFlow", "OpenCV", "YOLOv5", "React", "Node.js", "Next.js"],
    "Cloud/DevOps": ["AWS (S3, EC2, Lambda)", "Docker", "CI/CD Pipelines"],
    "Databases": ["MySQL", "Firebase"]
  };

  const projects = [
    
    {
      title: "S.P.A.R.K",
      description: "An AI-driven system digitizes police service records using Azure AI for image detection, bounding boxes, signatures, and stamp mapping, and OpenAI API for text extraction, translation, and classification.It supports dual-pane review, QR-based mobile uploads, and outputs searchable JSON stored in Supabase DB.Successfully live-demoed with real data to top police officials, PRISM, 4Sight.ai, and academic/tech panels. Runner up for this Event and even won the prize money as well.",
      links: [
        { label: "Live Demo", url: "https://spark4apv1.netlify.app/" }
        { label: "Linkedin Post", url: "https://www.linkedin.com/posts/k-sricharan01_ai-hackathon-ocr-activity-7345734993286963200-Th1V?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkD7PUBkQ6iV5iv35-fezpEtbROzvDB94Y/" }
      ],
      tags: ["Documents", "Azure AI", "Image detection", "Text mapping", "Open AI"]
    },
    {
      title: "UPSC AI Coach",
      description: "Comprehensive AI-powered coaching platform for UPSC aspirants. Features intelligent chat assistance, MCQ generation, paper analysis, and personalized study recommendations to enhance exam preparation.",
      links: [
        { label: "Live Demo", url: "https://astram.netlify.app/" }
      ],
      tags: ["AI Coaching", "UPSC", "MCQ Generation", "Paper Analysis", "Chat Bot"]
    },
    {
      title: "DeepChartify – AI-Powered Research Summarization",
      description: "Finalist at 100x Engineers Hackathon. Built with Llama 3.1 for multi-document summarization. Improved researcher efficiency by 40%",
      links: [
        { label: "Live Demo", url: "https://deepchartify.netlify.app/" },
        { label: "GitHub", url: "#" }
      ],
      tags: ["Llama 3.1", "NLP", "Research", "Hackathon"]
    },
    {
      title: "Drone Detection and Tracking (DRDO Research)",
      description: "AI-based drone detection with YOLOv5. Published in Atlantis Press. +15% accuracy, +30% inference speed",
      links: [
        { label: "Research Paper", url: "https://www.atlantis-press.com/proceedings/icete-23/125994143" },
        { label: "GitHub", url: "https://github.com/Sricharan01" }
      ],
      tags: ["YOLOv5", "Computer Vision", "Research", "DRDO"]
    },
    {
      title: "Fine-Tuning LLMs & SLMs",
      description: "Models: CodeT5, T5, GPT-Neo, Phi-2. Used LoRA and PEFT fine-tuning on A100 GPU. Task: Code generation, summarization",
      links: [
        { label: "HuggingFace", url: "https://huggingface.co/renish1" }
      ],
      tags: ["LLM", "Fine-tuning", "LoRA", "PEFT"]
    },
    {
      title: "Brain Tumor Detection",
      description: "U-Net (99.58%), ResNet50 (94.4%), InceptionV3 (95.25%). Used for medical image segmentation and classification. Early detection rate improved by 20%",
      links: [
        { label: "GitHub", url: "https://github.com/Sricharan01" }
      ],
      tags: ["Medical AI", "U-Net", "ResNet50", "Classification"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHeaderScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Sricharan Kandagatla</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <nav className="grid gap-6 text-lg font-medium mt-8">
                    <SheetClose asChild>
                      <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-600 hover:text-blue-600 transition-colors">Contact Me</a>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <img 
              src="/lovable-uploads/cde82bec-1cb8-476b-a396-87a2f9c008ab.png" 
              alt="Sricharan Kandagatla"
              className="w-64 h-64 sm:w-72 sm:h-72 mx-auto mb-6 rounded-md"
            />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight pb-2">
              AI Engineer & Creative Technologist
            </h2>
            <p className="mt-4 sm:mt-6 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600">
              Building intelligent systems that drive data-driven decisions through computer vision, NLP, and generative AI.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://drive.google.com/file/d/1Y1Rg7aE3MNbDe2ekg2PXapPBu6cDbXwn/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="h-full">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50 h-full">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-gray-800">Sricharan Kandagatla</CardTitle>
                  <CardDescription className="text-base sm:text-lg text-gray-600">AI Engineer & ML Engineer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">Hyderabad, Telangana, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                    <a href="mailto:renish1419@gmail.com" className="text-sm sm:text-base text-blue-600 hover:text-blue-800 break-all">
                      renish1419@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                    <a href="https://www.linkedin.com/in/k-sricharan01/" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-blue-600 hover:text-blue-800">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                    <a href="https://github.com/Sricharan01" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-blue-600 hover:text-blue-800">
                      GitHub Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="h-full">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50 h-full">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-gray-800">Education & Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">Education</h3>
                    <p className="text-sm sm:text-base text-gray-700">B.Tech in Computer Science</p>
                    <p className="text-sm sm:text-base text-gray-600">BML Munjal University (2023)</p>
                    <p className="text-sm sm:text-base text-gray-600">CGPA: 7.9</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-3">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Time Management", "Teamwork", "Communication", "Problem Solving", "Accountability"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50 flex flex-col h-full">
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg sm:text-xl text-gray-800 leading-tight">{project.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-blue-200 text-blue-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full sm:w-auto border-blue-200 text-blue-700 hover:bg-blue-50 text-xs sm:text-sm"
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50 h-full">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-gray-800">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs sm:text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50 h-full">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-gray-800">Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">DRDO Research Intern</h3>
                  <p className="text-sm sm:text-base text-gray-600">Jan – May 2023</p>
                  <p className="text-sm sm:text-base text-gray-700">Developed drone detection model with advanced AI techniques</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">Web Developer (UI/UX)</h3>
                  <p className="text-sm sm:text-base text-gray-600">Areksoft Technologies | May – July 2021</p>
                  <p className="text-sm sm:text-base text-gray-700">Focused on user interface design and user experience optimization</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-yellow-50 h-full">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-gray-800">Awards & Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex-shrink-0">🏆</Badge>
                  <span className="text-sm sm:text-base text-gray-700">Finalist – 100x Engineers Hackathon</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white flex-shrink-0">🤖</Badge>
                  <span className="text-sm sm:text-base text-gray-700">Organizer – Robotics Club Events</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white flex-shrink-0">🎓</Badge>
                  <span className="text-sm sm:text-base text-gray-700">DRDO – Certified Research Intern</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <footer id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto px-4">
              Interested in collaborating or discussing AI research? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white">Send Message</CardTitle>
                <CardDescription className="text-sm sm:text-base text-blue-100">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-sm sm:text-base">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white text-sm sm:text-base"
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="text-red-300 text-xs sm:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white text-sm sm:text-base">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white text-sm sm:text-base"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-red-300 text-xs sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white text-sm sm:text-base">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white text-sm sm:text-base"
                    />
                    <ValidationError 
                      prefix="Subject" 
                      field="subject"
                      errors={state.errors}
                      className="text-red-300 text-xs sm:text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white text-sm sm:text-base">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, collaboration ideas, or any questions you have..."
                      rows={4}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white resize-none text-sm sm:text-base"
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-red-300 text-xs sm:text-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
                  >
                    {state.submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Get in Touch</h3>
                <p className="text-blue-100 text-sm sm:text-lg leading-relaxed">
                  Whether you're looking to collaborate on AI research, discuss machine learning projects, 
                  or explore opportunities in deep learning and computer vision, I'm always excited to connect 
                  with like-minded professionals and researchers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm sm:text-base">Email</p>
                    <a href="mailto:renish1419@gmail.com" className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base break-all">
                      renish1419@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/k-sricharan01/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Github className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">GitHub</p>
                    <a href="https://github.com/Sricharan01" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base">
                      View Projects
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 sm:pt-8">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Areas of Interest</h4>
                <div className="flex flex-wrap gap-2">
                  {["AI Research", "Deep Learning", "Computer Vision", "NLP", "LLM Fine-tuning", "Medical AI"].map((interest) => (
                    <Badge key={interest} variant="outline" className="border-white/30 text-white hover:bg-white/20 text-xs sm:text-sm">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20">
            <p className="text-blue-200 text-sm sm:text-base">&copy; 2024 Sricharan Kandagatla. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
