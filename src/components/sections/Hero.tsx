'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERIENCE', href: '#experience' },
  // { name: 'PROJECTS', href: '#projects' }
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/arbiasgjoshi', icon: 'github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/arbiasgjoshi', icon: 'linkedin' },
  { name: 'CodeSandbox', href: 'https://codesandbox.io/u/arbiasgjoshi', icon: 'codesandbox' }
]

export default function Hero() {
  const pathname = usePathname()
  const activeSection = pathname.split('#')[1] || 'about'

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-5xl mx-auto flex flex-col justify-between h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight text-slate-200">
            Arbias Gjoshi
          </h1>
          <h2 className="text-xl text-slate-400">
            Senior Frontend Engineer & Tech Consultant
          </h2>
          <p className="max-w-xl text-lg">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </motion.div>

        <motion.nav
          className="flex flex-col gap-8 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className="flex flex-col items-start space-y-6 mb-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center">
                  <motion.span
                    className={`mr-4 h-px w-8 origin-left bg-slate-600 transition-all duration-300 ${
                      isActive
                        ? "scale-x-100 bg-slate-200"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span
                    className={`text-sm font-light tracking-widest transition-colors duration-300 ${
                      isActive
                        ? "text-slate-200"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.nav>
        <motion.nav
          className="flex flex-col gap-8 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className="flex items-center space-x-5">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group">
                <span className="sr-only">{link.name}</span>
                <svg
                  className="h-5 w-5 fill-slate-500 transition-colors duration-300 group-hover:fill-slate-300"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  {link.icon === "github" && (
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  )}
                  {link.icon === "linkedin" && (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  )}
                  {link.icon === "codesandbox" && (
                    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0187 3.509 0 3.3802-.0093 3.5162-.0943 3.595-.0806.0726-.1635.0906-.3127.0906h-.1672l-.1558-.0751c-.1078-.0567-.1606-.111-.1927-.196l-.0428-.1182.0093-4.7108.0093-4.7115.0821-.0726c.0653-.0567.1558-.0906.2584-.0906.2022 0 .3005.0624.3818.2335.0428.0907 1.4401 2.156 3.1046 4.5902 1.6644 2.4341 3.0391 4.4456 3.0538 4.4711.0146.0182.0413-.8421.0573-1.9122.0374-2.4341.0281-2.6647-.1159-3.0767-.0971-.2741-.2711-.4711-.5011-.5715-.1091-.0429-1.0954-.0429-1.2045 0-.1558.0594-.2584.1595-.3185.3112-.0429.1089-.0429.1614-.0429 2.3234v2.2119l-.7718-1.1201-.7718-1.1189-1.3788-2.0108c-.7576-1.1056-1.3925-2.0401-1.4104-2.0783-.0586-.1155-.2275-.1985-.3997-.1985-.1347 0-.2622.0429-.3406.1089-.1927.1577-.2623.3604-.2275.6762.0147.1139.0507.1781 1.8479 3.2934 1.0335 1.2036 1.8997 2.2166 1.9244 2.2515.0454.0699.0524.1139.0524.2923 0 .1809-.0053.2167-.0667.3112-.0975.1595-.2623.196-.4375.0958-.0374-.0207-1.0955-1.529-2.3525-3.3495l-2.2869-3.3075-.0747-.0562c-.1559-.1139-.3651-.0544-.4667.1338-.0747.1359-.0401.2924.0907.4119.0187.0181 1.0521 1.529 2.2961 3.3574 1.2439 1.8297 2.2775 3.3488 2.2869 3.3748.0094.0273-.0053.0389-.0427.0389-.0747 0-2.9678-4.2367-2.9865-4.2885-.0135-.0389-.0669-.0907-.1262-.1139-.0841-.0389-.1091-.0376-.1932.0129-.1347.0777-.1691.2129-.0907.3487.0094.0194 1.0242 1.4897 2.2535 3.2672 1.2292 1.7776 2.2535 3.2619 2.2775 3.2983.0241.0363.0135.0441-.0668.0441-.0975 0-3.0518-4.3274-3.0864-4.3937-.0908-.1702-.3239-.1958-.4641-.0519-.1171.1191-.0975.2768.0561.4457.0668.0726 3.0437 4.3469 3.0997 4.4456.0841.1477.2543.196.4001.1142.0841-.0467.196-.1924.2275-.2898.0374-.1128 2.3578-8.8316 2.3952-8.9496.0374-.1167.0241-.2986-.0374-.4015-.0908-.1477-.2383-.2052-.3731-.1451z" />
                  )}
                </svg>
              </Link>
            ))}
          </div>
        </motion.nav>
      </div>
    </section>
  );
} 