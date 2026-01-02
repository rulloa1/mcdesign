// Design page - Under Construction
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Hammer } from "lucide-react";

const Design = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-charcoal pt-24 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-8"
            >
              <div className="w-24 h-24 rounded-full bg-cream/10 flex items-center justify-center">
                <Hammer className="w-12 h-12 text-cream" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-[0.3em] text-cream mb-6 uppercase"
            >
              Under Construction
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-cream/70 mb-8 font-light"
            >
              We're curating something special for you.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="w-32 h-px bg-cream/30 mx-auto mb-8"
            />

            {/* Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-cream/60 max-w-2xl mx-auto leading-relaxed"
            >
              Our design gallery is currently being refined to showcase our portfolio
              in the most elegant way possible. Please check back soon or explore our
              portfolio to see our completed projects.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-12"
            >
              <a
                href="/portfolio"
                className="inline-block px-8 py-3 border border-cream/30 text-cream hover:bg-cream hover:text-charcoal transition-all duration-300 tracking-wider text-sm uppercase"
              >
                View Portfolio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Design;
