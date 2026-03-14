import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play, Share2 } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const galleryImages = [
    {
        id: 1,
        src: "https://content.jdmagicbox.com/v2/comp/pune/d8/020pxx20.xx20.180922110026.e2d8/catalogue/bharat-security-services-pimpri-pune-security-services-for-godown-z7nyd9gnw4.jpg",
        title: "Warehouse Security Team",
        category: "Industrial"
    },
    {
        id: 2,
        src: "https://content.jdmagicbox.com/comp/pune/d8/020pxx20.xx20.180922110026.e2d8/catalogue/bharat-security-services-pimpri-pune-security-services-for-atm-i10o9gsen1.jpg",
        title: "ATM Security",
        category: "Banking"
    },
    {
        id: 3,
        src: "https://content.jdmagicbox.com/v2/comp/pune/d8/020pxx20.xx20.180922110026.e2d8/catalogue/bharat-security-services-pimpri-pune-security-services-for-godown-i0pe5n6n3c.jpg",
        title: "Corporate Security",
        category: "Commercial"
    },
    {
        id: 4,
        src: "https://content.jdmagicbox.com/v2/comp/pune/d8/020pxx20.xx20.180922110026.e2d8/catalogue/bharat-security-services-pimpri-pune-security-services-for-godown-4cq9fl95bv.jpg",
        title: "Event Security",
        category: "Events"
    },
    {
        id: 5,
        src: "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234810/IMG_5359_hizset.jpg",
        title: "Security Training",
        category: "Training"
    },
    {
        id: 6,
        src: "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234790/IMG-20230506-WA0020_1_z0s92z.jpg",
        title: "Emergency Response",
        category: "Emergency"
    },
    {
        id: 7,
        src: "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234807/IMG_20210211_135940_1_qkxals.jpg",
        title: "Patrol Services",
        category: "Patrol"
    },
    {
        id: 8,
        src: "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234797/20250424_175037_wpjn92.jpg",
        title: "Access Control",
        category: "Commercial"
    },
    {
        id: 9,
        src: "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234790/IMG_20220210_224501_po7tmk.jpg",
        title: "CCTV Monitoring",
        category: "Technology"
    },
    {
        id: 10,
        src: "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234789/IMG-20230527-WA0007_1_tlxp2p.jpg",
        title: "Security Assessment",
        category: "Consulting"
    },
    {
        id: 11,
        src: "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234789/IMG-20230527-WA0011_ohis8o.jpg",
        title: "Mobile Patrol",
        category: "Patrol"
    },
    {
        id: 12,
        src: "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234812/IMG_20210211_112643_qjvibg.jpg",
        title: "Response Drill",
        category: "Emergency"
    }
];

const galleryVideos = [
    {
        id: 1,
        publicId: "VID-20250126-WA0011_nflynb",
        title: "Emergency Response Drill",
        category: "Emergency",
        thumbnail: "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764235691/video3_j1ud2v.jpg"
    },
    {
        id: 2,
        publicId: "1705983883535927_rybm3u",
        title: "Event Security Management",
        category: "Events",
        thumbnail: "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764235863/video1_oxutea.jpg"
    },
    {
        id: 3,
        publicId: "1101_1_bhmxje",
        title: "Event Security Management",
        category: "Events",
        thumbnail: "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764235691/video1_cwju5z.jpg"
    }
];

const Gallery = () => {
    const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
    const [showFullGallery, setShowFullGallery] = useState(false);
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
    const [loadedImages, setLoadedImages] = useState(new Set<number>());
    const observerRef = useRef<IntersectionObserver | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const getCloudinaryVideoUrl = (publicId: string) => {
        return `https://res.cloudinary.com/dmqie3tyb/video/upload/${publicId}.mp4`;
    };

    const handleVideoPlay = (index: number) => {
        videoRefs.current.forEach((video, i) => {
            if (video && i !== index) {
                video.pause();
            }
        });
    };

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target as HTMLImageElement;
                        const src = img.getAttribute('data-src');
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                        }
                        observerRef.current?.unobserve(img);
                    }
                });
            },
            { rootMargin: '50px 0px', threshold: 0.1 }
        );

        const lazyImages = document.querySelectorAll('.lazy-image');
        lazyImages.forEach(img => observerRef.current?.observe(img));

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, [activeTab, showFullGallery]);

    const handleImageLoad = (imageId: number) => {
        setLoadedImages(prev => new Set(prev).add(imageId));
    };

    const navigateImage = (direction: 'next' | 'prev', e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedImage) return;

        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
        let newIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % galleryImages.length;
        } else {
            newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        }

        setSelectedImage(galleryImages[newIndex]);
    };

    const displayedImages = showFullGallery ? galleryImages : galleryImages;

    // Disable body scroll when full gallery or modal is open
    useEffect(() => {
        if (showFullGallery || selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showFullGallery, selectedImage]);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className={`flex-grow transition-all duration-300 ${showFullGallery ? 'blur-md pointer-events-none' : ''}`}>
                {/* Hero Section */}
                <section className="page-hero relative overflow-hidden text-center flex flex-col items-center justify-center">
                    <svg className="absolute bottom-0 left-0 w-full h-40 z-[1]" viewBox="0 0 1440 160" preserveAspectRatio="none">
                        <path className="animate-[wave_6s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.08)" d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,160 L0,160 Z" />
                        <path className="animate-[wave_8s_ease-in-out_infinite_reverse]" fill="hsl(var(--cyan) / 0.05)" d="M0,96 C240,32 480,128 720,96 C960,64 1200,128 1440,96 L1440,160 L0,160 Z" />
                        <path className="animate-[wave_10s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.03)" d="M0,128 C180,80 360,160 540,128 C720,96 900,160 1080,128 C1260,96 1380,128 1440,112 L1440,160 L0,160 Z" />
                    </svg>
                    <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-[hsl(var(--cyan)/0.1)] blur-2xl animate-[float_8s_ease-in-out_infinite]" />

                    <div className="container relative z-10 px-4">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <span className="section-tag mb-4">Our Portfolio</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase tracking-wider mb-4">OUR GALLERY</h1>
                            <p className="text-xl md:text-2xl font-body text-cyan-light font-medium tracking-wide">Security Operations in Action</p>
                        </motion.div>
                    </div>
                </section>

                {/* Gallery Tabs */}
                <section className="py-6 bg-muted/30 border-b border-border">
                    <div className="container px-4">
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                className={`px-8 py-3 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-300 ${activeTab === 'photos' ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105' : 'bg-transparent text-muted-foreground border border-border hover:border-primary/50'}`}
                                onClick={() => setActiveTab('photos')}
                            >
                                Photo Gallery
                            </button>
                            <button
                                className={`px-8 py-3 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-300 ${activeTab === 'videos' ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105' : 'bg-transparent text-muted-foreground border border-border hover:border-primary/50'}`}
                                onClick={() => setActiveTab('videos')}
                            >
                                Video Gallery
                            </button>
                        </div>
                    </div>
                </section>

                {/* Contents */}
                <div className="section-padding bg-background min-h-[50vh]">
                    <div className="container px-4">
                        <AnimatePresence mode="wait">
                            {activeTab === 'photos' && (
                                <motion.div
                                    key="photos"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-display text-foreground mb-3">Photo Gallery</h2>
                                        <p className="font-body text-muted-foreground">Browse through our security service portfolio</p>
                                        <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
                                    </div>

                                    <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 md:gap-6 space-y-4 md:space-y-6 mb-12">
                                        {displayedImages.map((image, i) => (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                                key={image.id}
                                                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-muted break-inside-avoid"
                                                onClick={() => setSelectedImage(image)}
                                            >
                                                <img
                                                    className={`lazy-image w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-110 ${loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'}`}
                                                    src={loadedImages.has(image.id) ? image.src : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3C/svg%3E"}
                                                    data-src={image.src}
                                                    alt={image.title}
                                                    onLoad={() => handleImageLoad(image.id)}
                                                    onContextMenu={(e) => e.preventDefault()}
                                                    draggable={false}
                                                />
                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                                    <h3 className="text-white font-display text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.title}</h3>
                                                    <span className="text-primary font-body text-sm uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75" style={{ color: "white" }}>{image.category}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                </motion.div>
                            )}

                            {activeTab === 'videos' && (
                                <motion.div
                                    key="videos"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-display text-foreground mb-3">Video Gallery</h2>
                                        <p className="font-body text-muted-foreground">Watch our security services in action</p>
                                        <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {galleryVideos.map((video, index) => (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                key={video.id}
                                                className="rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-lg transition-all"
                                            >
                                                <div className="relative aspect-video group">
                                                    {/* We use a custom play overlay to make it look premium since raw video elements can look disjointed */}
                                                    <video
                                                        controls
                                                        preload="metadata"
                                                        poster={video.thumbnail}
                                                        ref={(el) => (videoRefs.current[index] = el)}
                                                        onPlay={() => handleVideoPlay(index)}
                                                        className="w-full h-full object-cover"
                                                    >
                                                        <source src={getCloudinaryVideoUrl(video.publicId)} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </div>
                                                <div className="p-5">
                                                    <h3 className="font-display text-lg text-foreground mb-1">{video.title}</h3>
                                                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold uppercase">{video.category}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            {!showFullGallery && <Footer />}

            {/* Full Gallery view (Phone Grid Style) */}
            <AnimatePresence>
                {showFullGallery && (
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-50 bg-background overflow-y-auto"
                    >
                        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border px-4 py-4 flex items-center justify-between">
                            <button
                                onClick={() => setShowFullGallery(false)}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium font-body transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" /> Back
                            </button>
                            <h2 className="font-display text-2xl text-foreground">Gallery Preview</h2>
                            <span className="font-body text-muted-foreground text-sm font-medium">{galleryImages.length} Items</span>
                        </div>

                        <div className="container px-4 py-8 mx-auto">
                            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 md:gap-4 space-y-3 md:space-y-4">
                                {galleryImages.map((image, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.03, duration: 0.3 }}
                                        key={image.id}
                                        onClick={() => setSelectedImage(image)}
                                        className="relative rounded-xl overflow-hidden cursor-pointer group shadow-sm bg-muted break-inside-avoid"
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                            onContextMenu={(e) => e.preventDefault()}
                                            draggable={false}
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-white font-display text-sm tracking-wide text-center px-2">{image.category}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image Modal Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close */}
                        <button
                            className="absolute top-6 right-6 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Prev/Next */}
                        <button
                            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-colors border border-white/10"
                            onClick={(e) => navigateImage('prev', e)}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-colors border border-white/10"
                            onClick={(e) => navigateImage('next', e)}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="w-full max-w-5xl mx-4 bg-card rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative flex-grow min-h-0 bg-black flex items-center justify-center p-4">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="w-auto h-auto max-w-full max-h-[70vh] object-contain select-none"
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable={false}
                                />
                            </div>

                            <div className="p-6 bg-background flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-border shrink-0">
                                <div>
                                    <h3 className="text-2xl font-display text-foreground mb-1">{selectedImage.title || "Gallery Image"}</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-bold uppercase tracking-wider">{selectedImage.category}</span>
                                        <span className="text-muted-foreground text-sm font-body font-medium">
                                            {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} of {galleryImages.length}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
