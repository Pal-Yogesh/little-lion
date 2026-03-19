"use client";
import { motion } from 'motion/react';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search, 
  Tag,
  Clock,
  ChevronRight
} from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "The Importance of Sensory Play in Early Development",
      category: "Learning",
      date: "March 10, 2024",
      author: "Sarah Johnson",
      readTime: "5 min read",
      image: "https://picsum.photos/seed/sensory/800/500",
      excerpt: "Discover how sensory activities help build nerve connections in the brain's pathways, leading to a child's ability to complete more complex learning tasks."
    },
    {
      id: 2,
      title: "Transitioning Your Child to Preschool: A Parent's Guide",
      category: "Parenting",
      date: "March 05, 2024",
      author: "Michael Chen",
      readTime: "8 min read",
      image: "https://picsum.photos/seed/preschool/800/500",
      excerpt: "Tips and tricks to make the first week at Little Lion a smooth and happy experience for everyone. From preparation at home to the first drop-off."
    },
    {
      id: 3,
      title: "Healthy Lunchbox Ideas Your Kids Will Actually Love",
      category: "Nutrition",
      date: "February 28, 2024",
      author: "Emma Wilson",
      readTime: "6 min read",
      image: "https://picsum.photos/seed/lunch/800/500",
      excerpt: "Nutritious, easy-to-prep meals that satisfy even the pickiest eaters while fueling their day with the energy they need for active play."
    },
    {
      id: 4,
      title: "Outdoor Play: Why Nature is the Best Classroom",
      category: "Environment",
      date: "February 15, 2024",
      author: "David Brown",
      readTime: "4 min read",
      image: "https://picsum.photos/seed/nature/800/500",
      excerpt: "Exploring the physical, cognitive, and emotional benefits of spending time in our natural garden spaces and the local Wahroonga community."
    },
    {
      id: 5,
      title: "Developing Early Literacy Skills Through Storytelling",
      category: "Literacy",
      date: "February 10, 2024",
      author: "Sarah Johnson",
      readTime: "7 min read",
      image: "https://picsum.photos/seed/stories/800/500",
      excerpt: "How we use interactive storytelling and reading sessions to spark imagination and build foundational language skills in our preschool program."
    },
    {
      id: 6,
      title: "The Role of Music and Movement in Child Development",
      category: "Arts",
      date: "February 01, 2024",
      author: "Michael Chen",
      readTime: "5 min read",
      image: "https://picsum.photos/seed/music/800/500",
      excerpt: "Understanding how rhythm, melody, and physical movement contribute to motor skills, social interaction, and emotional expression."
    }
  ];

  const categories = ["All", "Learning", "Parenting", "Nutrition", "Environment", "Literacy", "Arts"];

  return (
    <div className="pt-20">
      {/* Blog Hero */}
      <section className="bg-brand-lt/30 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand bg-white px-5 py-2 rounded-full mb-6 shadow-sm"
            >
              Our Blog
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-black text-dark leading-tight mb-8"
            >
              Expert <span className="text-brand italic">Childcare</span> Advice in Wahroonga
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-mid text-xl leading-relaxed font-medium"
            >
              Helpful resources and centre updates from the premier kindergarten in Wahroonga.
            </motion.p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-brand/5 -skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-brand/5 skew-x-12 -translate-x-1/2" />
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-brand/10 border border-brand-lt grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img 
                src={posts[0].image} 
                alt={posts[0].title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-brand text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                Featured Post
              </div>
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6 text-soft text-sm font-bold">
                <span className="text-brand uppercase tracking-widest">{posts[0].category}</span>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {posts[0].date}
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-dark mb-6 leading-tight">
                {posts[0].title}
              </h2>
              <p className="text-mid text-lg leading-relaxed mb-8">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-lt flex items-center justify-center text-brand font-bold">
                    SJ
                  </div>
                  <div>
                    <div className="text-dark font-bold text-sm">{posts[0].author}</div>
                    <div className="text-soft text-xs">{posts[0].readTime}</div>
                  </div>
                </div>
                <button className="text-brand font-display font-black flex items-center gap-2 hover:gap-4 transition-all group">
                  Read Article <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-10 bg-brand-lt/10 border-y border-brand-lt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
              {categories.map((cat, i) => (
                <button 
                  key={i} 
                  className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                    i === 0 ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'bg-white text-mid hover:bg-brand-lt border border-brand-lt'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-soft" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-6 py-3 rounded-2xl border border-brand-lt focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.slice(1).map((post) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-brand-lt hover:shadow-2xl hover:shadow-brand/10 transition-all flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4 text-soft text-xs font-bold">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-black text-dark mb-4 leading-tight group-hover:text-brand transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-mid text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-brand-lt flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-lt flex items-center justify-center text-brand text-[10px] font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-dark font-bold text-xs">{post.author}</span>
                    </div>
                    <button className="text-brand font-display font-black text-xs flex items-center gap-1.5 group-hover:gap-3 transition-all">
                      Read More <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-4">
            <button className="w-12 h-12 rounded-2xl border border-brand-lt flex items-center justify-center text-mid hover:bg-brand-lt transition-all disabled:opacity-50" disabled>
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-2xl bg-brand text-white font-black shadow-lg shadow-brand/20">1</button>
              <button className="w-12 h-12 rounded-2xl border border-brand-lt text-mid font-black hover:bg-brand-lt transition-all">2</button>
              <button className="w-12 h-12 rounded-2xl border border-brand-lt text-mid font-black hover:bg-brand-lt transition-all">3</button>
            </div>
            <button className="w-12 h-12 rounded-2xl border border-brand-lt flex items-center justify-center text-mid hover:bg-brand-lt transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-brand relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase text-brand mb-4">Stay Updated</span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-dark mb-6">Join Our Newsletter</h2>
              <p className="text-mid text-lg leading-relaxed">
                Get the latest parenting tips, educational resources, and centre news delivered straight to your inbox every month.
              </p>
            </div>
            <div className="flex-1 w-full">
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-8 py-5 rounded-2xl bg-brand-lt border-none focus:ring-2 focus:ring-brand transition-all font-medium text-dark"
                  required
                />
                <button className="bg-brand text-white font-display font-black px-10 py-5 rounded-2xl hover:bg-brand-dk transition-all shadow-xl shadow-brand/20 whitespace-nowrap">
                  Subscribe Now
                </button>
              </form>
              <p className="mt-4 text-soft text-xs text-center lg:text-left">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 -skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/10 skew-x-12 -translate-x-1/2" />
      </section>
    </div>
  );
};

export default BlogPage;
