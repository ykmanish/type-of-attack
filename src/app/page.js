'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, 
  ArrowRight,
  AlertTriangle,
  Lock,
  Zap,
  Eye,
  Brain,
  Database,
  Network,
  Fingerprint,
  Radar,
  Bug,
  CheckCircle,
  Terminal,
  Play
} from 'lucide-react';

const threats = [
  {
    number: '01',
    icon: '🎣',
    title: 'PHISHING',
    description: 'Deceptive attacks masquerading as trustworthy entities to steal credentials through fake emails and websites.',
    howItWorks: 'Creates fake communication → Triggers urgency → Victim clicks link → Credentials stolen',
    impact: 'Credential theft, Financial loss, Identity theft'
  },
  {
    number: '02',
    icon: '💉',
    title: 'SQL INJECTION',
    description: 'Malicious SQL code injection into input fields to manipulate databases and extract sensitive data.',
    howItWorks: 'Finds vulnerable input → Injects SQL commands → Bypasses security → Extracts database',
    impact: 'Data breach, Authentication bypass, Admin access'
  },
  {
    number: '03',
    icon: '👤',
    title: 'MAN-IN-THE-MIDDLE',
    description: 'Secretly intercepting communications between two parties to steal or manipulate data in transit.',
    howItWorks: 'Positions in network path → Intercepts traffic → Reads/modifies data → Remains undetected',
    impact: 'Session hijacking, Data eavesdropping, Credential theft'
  },
  {
    number: '04',
    icon: '⚡',
    title: 'CROSS-SITE SCRIPTING',
    description: 'Injecting malicious JavaScript into trusted websites that executes in victims\' browsers.',
    howItWorks: 'Finds unvalidated input → Injects script → Executes in browser → Steals data',
    impact: 'Cookie theft, Session hijacking, Website defacement'
  },
  {
    number: '05',
    icon: '🌊',
    title: 'DDoS ATTACK',
    description: 'Overwhelming target servers with massive traffic from botnets to cause service disruption.',
    howItWorks: 'Builds botnet → Commands via C2 → Floods target → Server crashes',
    impact: 'Complete downtime, Revenue loss, Infrastructure damage'
  },
  {
    number: '06',
    icon: '🔐',
    title: 'RANSOMWARE',
    description: 'Malicious software that encrypts victim\'s files and demands payment for decryption keys.',
    howItWorks: 'Gains access → Encrypts files → Displays ransom note → Demands cryptocurrency payment',
    impact: 'Data loss, Business disruption, Financial extortion'
  }
];

const CyberAttacksPage = () => {
  const [mounted, setMounted] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixBackground />
      
      {/* Cyber Grid Overlay */}
      <div className="fixed inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      
      {/* Navigation */}
      <Navigation scrollYProgress={scrollYProgress} />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Threats Grid */}
      <ThreatsGridSection expandedCard={expandedCard} setExpandedCard={setExpandedCard} />
      
      {/* Attack Vectors */}
      <AttackVectorsSection />
      
      {/* Prevention Strategies */}
      <PreventionStrategiesSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

// Matrix Background Component
const MatrixBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for(let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';
      
      for(let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillStyle = i % 3 === 0 ? '#00ff41' : i % 3 === 1 ? '#ff0040' : '#0080ff';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    const interval = setInterval(draw, 35);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-10"
    />
  );
};

// Navigation
const Navigation = ({ scrollYProgress }) => {
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]
  );

  return (
    <motion.nav 
      style={{ backgroundColor }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-red-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <AlertTriangle className="h-10 w-10 text-red-500" />
              <div className="absolute inset-0 h-10 w-10 text-red-500 animate-pulse opacity-50">
                <AlertTriangle />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">
                CYBER THREATS
              </span>
              <div className="text-xs text-red-400 tracking-widest font-mono">
                INTELLIGENCE
              </div>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['THREATS', 'VECTORS', 'PREVENTION', 'CONTACT'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-red-400 transition-all duration-300 font-mono text-sm tracking-wider relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      {/* Scanning Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"
            style={{ top: `${20 + i * 15}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Status Indicator */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 bg-black/80 border border-red-500/30 px-4 py-2 rounded-sm font-mono text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-red-400">THREAT ANALYSIS: ACTIVE</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-mono">
                <span className="text-white">
                  TYPES OF
                </span>
                <br />
                <span className="text-red-500">
                  CYBER ATTACKS
                </span>
                <br />
                
                 
              </h1>
              <h1 className="text-orange-500 font-mono text-2xl">
              by Manish Yadav under the guidance of <br/><span className='text-blue-500'>Dr. Hetal Thaker Ma'am</span> 
                </h1>
              
              <div className="space-y-4 mt-10">
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-mono">
                  Comprehensive guide to modern cybersecurity threats, attack vectors, and defense strategies to protect your organization.
                </p>
                
                <div className="bg-black/60 border border-red-500/20 p-4 rounded-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Terminal className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 font-mono text-sm">threat-analysis@system:~$</span>
                  </div>
                  <div className="text-white font-mono text-sm">
                    <span className="text-yellow-400">Analyzing threat landscape...</span>
                    <br />
                    <span className="text-green-400">✓ 6 major threat categories identified</span>
                    <br />
                    <span className="text-green-400">✓ Attack patterns documented</span>
                    <br />
                    <span className="text-red-400">⚠ Immediate mitigation required</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 font-mono font-bold text-sm tracking-wider flex items-center justify-center space-x-2 border border-red-500/50 relative overflow-hidden">
                <span className="relative z-10">LEARN THREATS</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              
              <button className="group flex items-center space-x-2 text-white border border-gray-600 px-8 py-4 font-mono font-bold text-sm tracking-wider hover:border-red-400 hover:text-red-400 transition-all duration-300 relative overflow-hidden">
                <Play className="h-4 w-4" />
                <span>SECURITY TIPS</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </button>
            </motion.div>
          </div>
          
          {/* Threat Visualization */}
          <div className="relative">
            <ThreatVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};

// Threat Visualization
const ThreatVisualization = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative h-96 w-full bg-black/40 border border-red-500/20 rounded-sm p-8 overflow-hidden"
    >
      {/* Central Node */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 border border-red-500 flex items-center justify-center relative">
            <AlertTriangle className="h-10 w-10 text-white" />
            
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-red-400" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-red-400" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-red-400" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-red-400" />
          </div>
          
          {/* Pulse Rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-red-500/30"
              animate={{
                scale: [1, 2.5],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.6,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Data Nodes */}
      {[
        { icon: Bug, position: { top: '20%', left: '20%' }, label: 'MALWARE', color: 'text-red-400' },
        { icon: Zap, position: { top: '20%', right: '20%' }, label: 'EXPLOIT', color: 'text-yellow-400' },
        { icon: Database, position: { bottom: '20%', left: '20%' }, label: 'DATA', color: 'text-green-400' },
        { icon: Network, position: { bottom: '20%', right: '20%' }, label: 'NETWORK', color: 'text-cyan-400' },
        { icon: Lock, position: { top: '50%', left: '10%' }, label: 'SECURE', color: 'text-purple-400' },
        { icon: Eye, position: { top: '50%', right: '10%' }, label: 'MONITOR', color: 'text-blue-400' },
      ].map((node, index) => (
        <motion.div
          key={index}
          className={`absolute w-10 h-10 border border-gray-600 bg-black/60 flex items-center justify-center ${node.color}`}
          style={node.position}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            delay: index * 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          title={node.label}
        >
          <node.icon className="h-5 w-5" />
        </motion.div>
      ))}
      
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[
          { x1: '50%', y1: '50%', x2: '20%', y2: '20%' },
          { x1: '50%', y1: '50%', x2: '80%', y2: '20%' },
          { x1: '50%', y1: '50%', x2: '20%', y2: '80%' },
          { x1: '50%', y1: '50%', x2: '80%', y2: '80%' },
          { x1: '50%', y1: '50%', x2: '10%', y2: '50%' },
          { x1: '50%', y1: '50%', x2: '90%', y2: '50%' },
        ].map((line, index) => (
          <motion.line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#gradient)"
            strokeWidth="1"
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="absolute bottom-4 left-4 bg-black/80 border border-red-500/30 p-3 font-mono text-xs">
        <div className="text-red-400">THREAT LEVEL: CRITICAL</div>
        <div className="text-yellow-400">ATTACK VECTORS: 6</div>
        <div className="text-green-400">DEFENSE READY: TRUE</div>
      </div>
    </motion.div>
  );
};

// Threats Grid Section
const ThreatsGridSection = ({ expandedCard, setExpandedCard }) => {
  return (
    <section id="threats" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-500" />
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <span className="text-red-400 font-mono text-sm tracking-widest">MAJOR THREATS</span>
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-500" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-mono">
            <span className="text-white">CYBER ATTACK</span>
            <br />
            <span className="text-red-500">THREAT CATALOG</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Learn about the most dangerous cyber threats targeting organizations worldwide and how they operate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {threats.map((threat, index) => (
            <ThreatCard 
              key={index} 
              threat={threat} 
              index={index}
              isExpanded={expandedCard === index}
              setExpandedCard={setExpandedCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Threat Card
const ThreatCard = ({ threat, index, isExpanded, setExpandedCard }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => setExpandedCard(isExpanded ? null : index)}
    >
      <div className={`bg-black/60 border transition-all duration-500 p-8 relative overflow-hidden ${ isExpanded ? 'border-red-500/60 bg-black/80' : 'border-red-500/20 group-hover:border-red-500/40'}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-cyber-dots" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-5xl font-bold text-red-500/30 font-mono">{threat.number}</div>
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">{threat.title}</h3>
            </div>
            <div className="text-4xl">{threat.icon}</div>
          </div>
          
          <p className="text-gray-300 mb-4 leading-relaxed">
            {threat.description}
          </p>
          
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-red-500/20 pt-4 mt-4 space-y-4">
              <div>
                <p className="text-red-400 font-mono text-sm font-bold mb-2">HOW IT WORKS:</p>
                <p className="text-gray-300 text-sm leading-relaxed font-mono">{threat.howItWorks}</p>
              </div>
              
              <div>
                <p className="text-red-400 font-mono text-sm font-bold mb-2">IMPACT:</p>
                <p className="text-gray-300 text-sm leading-relaxed font-mono">{threat.impact}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {threat.impact.split(', ').map((impact, i) => (
                  <span key={i} className="px-3 py-1 bg-red-500/20 border border-red-500/40 rounded-sm text-red-300 text-xs font-mono">
                    {impact}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-red-500/10">
            <div className="text-xs text-gray-400 font-mono">
              {isExpanded ? 'Click to collapse' : 'Click to expand'}
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="h-4 w-4 text-red-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Attack Vectors Section
const AttackVectorsSection = () => {
  const vectors = [
    {
      title: 'SOCIAL ENGINEERING',
      description: 'Manipulating human psychology to trick users into revealing sensitive information or performing security-compromising actions.',
      icon: Brain
    },
    {
      title: 'TECHNICAL EXPLOITS',
      description: 'Exploiting software vulnerabilities and system weaknesses to gain unauthorized access and control.',
      icon: Zap
    },
    {
      title: 'CREDENTIAL THEFT',
      description: 'Stealing usernames, passwords, and authentication tokens through various attack methods.',
      icon: Lock
    },
    {
      title: 'DATA EXFILTRATION',
      description: 'Extracting sensitive data from systems and networks without detection or authorization.',
      icon: Database
    }
  ];

  return (
    <section id="vectors" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-mono">
            <span className="text-white">ATTACK</span>
            <br />
            <span className="text-orange-500">VECTORS</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Common pathways through which attackers compromise systems and steal data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {vectors.map((vector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-black/60 border border-orange-500/20 p-8 relative overflow-hidden group-hover:border-orange-500/40 transition-all duration-500">
                <div className="relative z-10">
                  <div className="mb-4">
                    <vector.icon className="h-12 w-12 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 font-mono">{vector.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{vector.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Prevention Strategies Section
const PreventionStrategiesSection = () => {
  const strategies = [
    {
      title: 'EMPLOYEE TRAINING',
      description: 'Regular security awareness programs to educate users about phishing, social engineering, and best practices.',
      icon: Brain
    },
    {
      title: 'MULTI-FACTOR AUTH',
      description: 'Implement strong authentication methods to prevent unauthorized access even if credentials are compromised.',
      icon: Lock
    },
    {
      title: 'NETWORK SECURITY',
      description: 'Deploy firewalls, intrusion detection systems, and network segmentation to protect against unauthorized access.',
      icon: Network
    },
    {
      title: 'DATA PROTECTION',
      description: 'Encrypt sensitive data, implement access controls, and monitor data access patterns for anomalies.',
      icon: Shield
    },
    {
      title: 'INCIDENT RESPONSE',
      description: 'Establish clear procedures to detect, respond to, and recover from security incidents quickly.',
      icon: AlertTriangle
    },
    {
      title: 'CONTINUOUS MONITORING',
      description: 'Monitor systems 24/7 for suspicious activities and potential security breaches in real-time.',
      icon: Eye
    }
  ];

  return (
    <section id="prevention" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-green-500" />
            <CheckCircle className="h-6 w-6 text-green-500" />
            <span className="text-green-400 font-mono text-sm tracking-widest">DEFENSE STRATEGY</span>
            <CheckCircle className="h-6 w-6 text-green-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-green-500" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-mono">
            <span className="text-white">PREVENTION</span>
            <br />
            <span className="text-green-500">STRATEGIES</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Essential security measures and best practices to defend against cyber threats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-black/60 border border-green-500/20 p-8 relative overflow-hidden group-hover:border-green-500/40 transition-all duration-500 h-full">
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                      <strategy.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 font-mono">{strategy.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{strategy.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 p-12 rounded-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-cyber-dots" />
          </div>
          
          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-4xl font-bold text-white font-mono">
              PROTECT YOUR ORGANIZATION
            </h2>
            
            <p className="text-xl text-gray-300 font-mono">
              Implement comprehensive cybersecurity measures and stay ahead of emerging threats.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-4 font-mono font-bold tracking-wider flex items-center justify-center space-x-2 border border-red-500/50 relative overflow-hidden mx-auto"
            >
              <span className="relative z-10">GET SECURITY ASSESSMENT</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="border-t border-red-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold font-mono mb-4">CYBER THREATS</h4>
            <p className="text-gray-400 text-sm">Advanced cybersecurity threat intelligence and defense strategies.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-mono mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-gray-400 text-sm font-mono">
              <li><a href="#threats" className="hover:text-red-400 transition-colors">Threat Catalog</a></li>
              <li><a href="#vectors" className="hover:text-red-400 transition-colors">Attack Vectors</a></li>
              <li><a href="#prevention" className="hover:text-red-400 transition-colors">Prevention Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-mono mb-4">CONTACT</h4>
            <p className="text-gray-400 text-sm font-mono">For security assistance and threat intelligence, contact our team.</p>
          </div>
        </div>
        
        <div className="border-t border-red-500/20 pt-8">
          <p className="text-center text-gray-500 text-sm font-mono">
            © 2026 Cyber Threat Intelligence. All rights reserved. | Stay Secure
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CyberAttacksPage;
