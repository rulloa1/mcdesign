import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { designAlbums } from "@/data/design-albums";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NumberedGallery } from "@/components/gallery/NumberedGallery";
import { useState, useMemo } from "react";
import { SmelekLetterCard } from "@/components/gallery/SmelekLetterCard";
import { Settings2 } from "lucide-react";
import { useGalleryOrder } from "@/hooks/useGalleryOrder";
import CTASection from "@/components/home/CTASection";
import { motion, AnimatePresence } from "framer-motion";

const DesignDetail = () => {
    const { id } = useParams<{ id: string }>();
    const album = designAlbums.find((a) => a.id === id);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const defaultImages = useMemo(() => album?.images || [], [album?.images]);
    const {
        images: galleryImages,
        isLoading,
        isEditable,
        toggleEditMode,
        saveGalleryOrder
    } = useGalleryOrder(id || "design", defaultImages);

    if (!album) {
        return (
            <Layout>
                <div className="pt-32 pb-24 bg-cream min-h-screen">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl font-serif text-charcoal mb-4">Album Not Found</h1>
                        <Link to="/design">
                            <Button>Back to Design</Button>
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    const openLightbox = (index: number) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);
    const nextImage = () => {
        if (selectedImage !== null && selectedImage < album.images.length - 1) {
            setSelectedImage(selectedImage + 1);
        }
    };
    const prevImage = () => {
        if (selectedImage !== null && selectedImage > 0) {
            setSelectedImage(selectedImage - 1);
        }
    };

    const albumIndex = designAlbums.findIndex((a) => a.id === id);
    const nextAlbum = designAlbums[(albumIndex + 1) % designAlbums.length];
    const prevAlbum = designAlbums[(albumIndex - 1 + designAlbums.length) % designAlbums.length];

    return (
        <Layout>
            <section className="pt-32 pb-16 bg-cream">
                <div className="container mx-auto px-6">
                    <Link
                        to="/design"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Collections
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-4">{album.title}</h1>
                        <p className="text-xl text-muted-foreground">{album.description}</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    {isLoading ? (
                        <div className="text-center py-20 text-muted-foreground">Loading gallery...</div>
                    ) : (
                        <>
                            <NumberedGallery
                                images={galleryImages}
                                projectTitle={album.title}
                                onImageClick={openLightbox}
                                onOrderChange={saveGalleryOrder}
                                isEditable={isEditable}
                            />

                            <div className="mt-8 flex justify-end">
                                <Button
                                    variant="ghost"
                                    onClick={toggleEditMode}
                                    className="text-charcoal/40 hover:text-primary hover:bg-transparent text-xs flex items-center gap-2"
                                >
                                    <Settings2 className="w-3 h-3" />
                                    {isEditable ? "Disable Editing" : "Enable Editing"}
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-cream hover:text-primary transition-colors"
                            aria-label="Close lightbox"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            onClick={prevImage}
                            disabled={selectedImage === 0}
                            className="absolute left-6 text-cream hover:text-primary transition-colors disabled:opacity-30"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-12 h-12" />
                        </button>

                        {galleryImages[selectedImage] === "special://smelek-letter" ? (
                            <div className="max-w-[85vw] max-h-[85vh] bg-cream shadow-2xl overflow-y-auto w-full">
                                <SmelekLetterCard />
                            </div>
                        ) : galleryImages[selectedImage].match(/\.(mp4|webm|ogg)$/i) ? (
                            <video
                                src={galleryImages[selectedImage]}
                                controls
                                autoPlay
                                className="max-h-[85vh] max-w-[85vw] shadow-2xl"
                            />
                        ) : galleryImages[selectedImage].includes('youtube.com') || galleryImages[selectedImage].includes('youtu.be') ? (
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${galleryImages[selectedImage].includes('v=') ? galleryImages[selectedImage].split('v=')[1].split('&')[0] : galleryImages[selectedImage].split('/').pop()}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="max-h-[85vh] max-w-[85vw] w-full aspect-video shadow-2xl"
                            ></iframe>
                        ) : (
                            <motion.img
                                key={selectedImage}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                src={galleryImages[selectedImage]}
                                alt={`${album.title} - Item ${selectedImage + 1}`}
                                className="max-h-[85vh] max-w-[85vw] object-contain"
                            />
                        )}

                        <button
                            onClick={nextImage}
                            disabled={selectedImage === galleryImages.length - 1}
                            className="absolute right-6 text-cream hover:text-primary transition-colors disabled:opacity-30"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-12 h-12" />
                        </button>

                        <div className="absolute bottom-6 text-cream/60 text-sm">
                            {selectedImage + 1} / {galleryImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Navigation between albums */}
            <section className="py-24 border-t border-border bg-cream">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        <Link to={`/design/${prevAlbum.id}`} className="group flex items-center gap-6 text-left">
                            <div className="w-16 h-16 overflow-hidden relative border border-gold/20 flex-shrink-0">
                                <img src={prevAlbum.coverImage} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="" />
                            </div>
                            <div>
                                <p className="text-[10px] tracking-widest uppercase text-gold font-bold mb-1 flex items-center gap-2">
                                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Previous
                                </p>
                                <p className="font-serif text-xl text-charcoal group-hover:text-gold transition-colors">{prevAlbum.title}</p>
                            </div>
                        </Link>

                        <div className="h-[1px] w-12 bg-gold/20 hidden md:block" />

                        <Link to={`/design/${nextAlbum.id}`} className="group flex items-center gap-6 text-right">
                            <div>
                                <p className="text-[10px] tracking-widest uppercase text-gold font-bold mb-1 flex items-center gap-2 justify-end">
                                    Next <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </p>
                                <p className="font-serif text-xl text-charcoal group-hover:text-gold transition-colors">{nextAlbum.title}</p>
                            </div>
                            <div className="w-16 h-16 overflow-hidden relative border border-gold/20 flex-shrink-0">
                                <img src={nextAlbum.coverImage} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <CTASection />
        </Layout>
    );
};

export default DesignDetail;
