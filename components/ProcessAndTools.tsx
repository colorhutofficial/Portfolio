import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProcessAndTools: React.FC = () => {
  const steps = [
    {
      title: "আপনার রিকোয়ারমেন্টস লিখুন",
      desc: "আপনার কি ধরনের লোগো চাচ্ছেন, কোম্পানির ধরন, আপনার গ্রাহক কে, লোগোটি কোথায় ব্যবহার হবে - এই তথ্যগুলো দিন।",
      img: "https://colorhutbd.xyz/image/Graphics-Design.png",
      link: "#requirment",
      btn: "ফর্ম পুরন করুন"
    },
    {
      title: "পছন্দের প্যাকেজ সিলেক্ট করুন",
      desc: "আপনার প্রয়োজন এবং বাজেট অনুযায়ী প্যাকেজ সিলেক্ট করুন। প্রতিটি প্যাকেজে কি কি পাচ্ছেন তা বিস্তারিত দেখে নিন।",
      img: "https://xtrecy.com/wp-content/uploads/2022/12/Graphics-Design-02-1.png",
      link: "#pricing",
      btn: "প্যাকেজ সিলেক্ট করুন"
    },
    {
      title: "ফাইনাল ফাইল রিসিভ করুন",
      desc: "আমাদের ডিজাইনার আপনার সাথে যোগাযোগ করে ফাইনাল ডিজাইন শেষ করে ইমেইল এ সোর্স ফাইল পাঠিয়ে দিবে।",
      img: "https://xtrecy.com/wp-content/uploads/2022/12/Graphics-Design-01.png",
      link: "#",
      btn: "প্রোগ্রেস দেখুন"
    }
  ];

  return (
    <section className="py-20 md:py-28 relative" id="audit">
      <div className="max-w-[1290px] mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader text="কিভাবে লোগো অর্ডার করবেন ?" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center group p-8 rounded-3xl bg-white border border-white/60 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="mb-8 relative w-full flex justify-center">
                <div className="absolute inset-0 bg-orange-100/30 rounded-full blur-3xl transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-auto h-[220px] object-contain transition-transform duration-500 group-hover:-translate-y-4 group-hover:scale-105 relative z-10 drop-shadow-lg"
                />
              </div>
              <h4 className="font-bengali text-[24px] font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h4>
              <p className="font-bengali text-gray-500 mb-8 leading-relaxed text-[16px]">
                {step.desc}
              </p>
              <a 
                href={step.link}
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-dark bg-gray-50 px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/30 group/btn"
              >
                {step.btn}
                <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-16 border-t border-gray-200/60"
        >
            <div className="text-center mb-10">
                <h3 className="font-bengali text-2xl font-bold text-gray-400 uppercase tracking-widest">আমরা যে টুলস ব্যবহার করি</h3>
            </div>
            <div className="flex justify-center items-center">
                <img 
                    src="https://xtrecy.com/wp-content/uploads/2024/10/programms-1024x90.webp" 
                    alt="Tools we use" 
                    className="max-w-full h-auto opacity-50 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0 transform hover:scale-105"
                />
            </div>
        </motion.div>
      </div>
    </section>
  );
};