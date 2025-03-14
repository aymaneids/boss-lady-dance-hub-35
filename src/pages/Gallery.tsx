
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Image, Play } from 'lucide-react';

const Gallery: React.FC = () => {
  // Sample gallery items
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1545062156-c58a501f2461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      alt: "Dance performance on stage",
      caption: "Annual Dance Showcase 2023"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1528213049955-adbe6fe3dc40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      alt: "Team training session",
      caption: "Summer Intensive Program"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      alt: "Competition performance",
      caption: "National Championship 2023"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      alt: "Team photo",
      caption: "Boss Lady Elite Team"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      alt: "Dance workshop",
      caption: "Technique Workshop with Guest Choreographer"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      alt: "Stage performance",
      caption: "Community Showcase"
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      title: "Competition Highlight Reel",
      duration: "3:45"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      title: "Behind the Scenes: Championship Preparation",
      duration: "5:20"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      title: "Junior Team Final Performance",
      duration: "4:12"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-28 pb-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 mb-6 text-xs uppercase tracking-wider font-semibold bg-white text-purple-600 rounded-full">Our Moments</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">Gallery</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Capturing the passion, precision, and power of Boss Lady Dance Co.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="photos" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="photos" className="flex items-center gap-2">
                  <Image size={18} />
                  <span>Photos</span>
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center gap-2">
                  <Play size={18} />
                  <span>Videos</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="photos" className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {photos.map((photo) => (
                  <div key={photo.id} className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800">
                      <p className="text-sm text-gray-600 dark:text-gray-300">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-8 gradient-text">Featured Performances</h3>
                
                <Carousel className="max-w-5xl mx-auto">
                  <CarouselContent>
                    {photos.map((photo) => (
                      <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-0">
                              <img 
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </CardContent>
                          </Card>
                          <p className="text-center mt-3 text-sm text-gray-600 dark:text-gray-400">{photo.caption}</p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
                </Carousel>
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {videos.map((video) => (
                  <div key={video.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="relative h-48 overflow-hidden group">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <Play className="h-8 w-8 text-purple-600" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-white text-xs">
                          {video.duration}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-8 gradient-text">Showcase Reel</h3>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-xl max-w-5xl mx-auto">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-lg">
                    {/* This would typically be a video embed */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <Play className="h-20 w-20 mx-auto mb-4 opacity-50" />
                      <p>Dance Showcase Video</p>
                      <p className="text-sm mt-2">Currently displaying a placeholder. Videos would be embedded here.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 gradient-text">Share Your Moments</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Are you a part of our Boss Lady family? Tag your photos with #BossLadyDanceCo for a chance to be featured in our gallery.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn-primary">Upload Photos</a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-md font-medium transition-colors">
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
