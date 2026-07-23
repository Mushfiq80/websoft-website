import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import Link from "next/link"
import { SITE_CONFIG } from "@/data/site"
import { CertificationMarquee } from "@/components/shared/CertificationMarquee"
import { Phone, Mail, Globe, Quote, MapPin } from "lucide-react"

export default function AboutPage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 bg-gradient-to-b from-[rgb(var(--primary-faint))] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">About Us</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--text-primary))] mb-6">
              Engineering Digital Excellence for a{" "}
              <span className="text-[rgb(var(--primary))]">Connected World</span>
            </h1>
            <p className="text-lg md:text-xl text-[rgb(var(--text-muted))] leading-relaxed">
              Since {SITE_CONFIG.company.founded}, Web Soft BD has been delivering comprehensive software solutions
              — from web and mobile applications to IoT, AI, and enterprise systems — for government and private sector clients.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[rgb(var(--navy))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {SITE_CONFIG.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[rgb(var(--primary))] mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                <div className="text-xs text-white/60 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-12 md:py-16 bg-[rgb(var(--primary-faint))]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-[rgb(var(--primary))] text-white">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--text-primary))] mb-4">
              Message from Our <span className="text-[rgb(var(--primary))]">CEO</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* CEO Image */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/team/ceo_web.png"
                    alt="Kazi Fakrul Latif - CEO and Founder of Web Soft BD"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Quote Icon */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[rgb(var(--primary))] rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* CEO Message Content */}
            <div className="lg:col-span-2">
              {/* Name and Designation */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))] mb-2">
                  Kazi Fakrul Latif
                </h3>
                <p className="text-lg text-[rgb(var(--primary))] font-medium mb-4">
                  Founder & CEO, WEB SOFT BD
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[rgb(var(--text-muted))] mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+88 01716983511 (WhatsApp)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@websoftbd.net</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>www.websoftbd.net</span>
                  </div>
                </div>
              </div>

              {/* Message Text */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[rgb(var(--border-subtle))]">
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  Thanks to all my clients for being with me and also Greetings to upcoming clients. Web Soft BD is a privately held ICT Company in Dhaka, Bangladesh. In the year of 2008, Web Soft BD started its journey. It has achieved Certification of ISO 9001:2015 & BASIS (Bangladesh Association of Software & Information Services).
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  Web Soft BD was established by a group of professionals with a desire to provide the best ICT (Information Communication Technology) Solutions in Bangladesh and abroad. We are experienced in System Development & ICT Solution of Agro-Meteorology, Meteorology, Agriculture, climate, Weather, Hydrology, Water, Food, Environment.
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  We offer cutting edge solutions for today's interactive ICT Solution, including all kinds of System Development, Portal Development, Apps Development, A.I. Solution, Server Solution, datacenter solution, Domain Expert Services, Software Development, Data Center Solution, Networking, Server Solution, ERP Solution, Web Solution, Mail Solution, Corporate Support & Consultancy.
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  Information Communication Technology (ICT) has great role to play in climate services. Linking of successful ICT pilot projects can provide weather forecast and Agromet information to farmers. Such approaches enhance the understanding of farmers' needs and improve the existing state of dissemination of Agro-met advisory services. There is a need of strengthening of ICTs in the country as well as in the world.
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  At present, Web Soft BD is actively involved in operationalization of the World Bank funded project entitled <strong className="text-[rgb(var(--text-primary))]">"Agro-Meteorological Information Systems Development Project, Component-C of Bangladesh Weather and Climate Services Regional Project"</strong> in Department of Agricultural Extension (DAE), Ministry of Agriculture, Bangladesh. Under this project, we developed a dynamic and interactive portal, Crop Weather Calendar Development, automation Solution & ICT Solution of{" "}
                  <a href="https://www.bamis.gov.bd" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary))] hover:underline">
                    BAMIS portal (bamis.gov.bd)
                  </a>
                  . The portal is very popular in Bangladesh and has been appreciated by World Bank and other national and international organizations.
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  We are also actively involved in operationalization and AI solution of <strong className="text-[rgb(var(--text-primary))]">Bangladesh Meteorological Department (BMD)</strong>, Ministry of Defence, Bangladesh. Under this project, we developed a dynamic and interactive Portal, Apps, Software, Weather Automated Dissemination System, Meteorological Data Assessment Sub System, Earth Quake Apps and other ICT services at{" "}
                  <a href="https://www.bmd.gov.bd" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary))] hover:underline">
                    bmd.gov.bd
                  </a>
                  .
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  Web Soft BD is also actively involved in operationalization and AI based portal Development, System Solution & Integration of <strong className="text-[rgb(var(--text-primary))]">Bangladesh Water Development Board (BWDB)</strong>, developing the Salinity Intrusion model, Sediment Transport and Morphological model, Drought model, and Groundwater Assessment model at{" "}
                  <a href="http://hifm.bwdb.gov.bd" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary))] hover:underline">
                    hifm.bwdb.gov.bd
                  </a>
                  .
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  Our team also worked together to construct SMRCs (SAARC Meteorological Research Centre) Portal & Server solution of{" "}
                  <a href="https://www.smrc.gov.bd" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary))] hover:underline">
                    smrc.gov.bd
                  </a>
                  . We maintain and manage various types of meteorological and agrometeorological data collected at the field level and distributed to various organizations via web API.
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  Web Soft BD also provided Server & Integration of Integrated Rice Advisory System (IRAS). IRAS Advisory system is based on NASA satellite technology co-developed and maintained by University of Washington, USA. The goal is to improve irrigation efficiency and yield for Bangladesh rice production at no additional cost during the Boro 2024 season using latest advancements in satellite technology. Impact evaluation on applying the advisory has already proven a potential 30% reduction in ground water pumping and fuel cost savings up to hundreds of millions of US dollars. Visit{" "}
                  <a href="https://www.iras.bamis.gov.bd" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary))] hover:underline">
                    iras.bamis.gov.bd
                  </a>
                  {" "}for more information.
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  We also develop & maintain Portal of Bangladesh Olympic Association (BOA){" "}
                  <a href="https://www.nocban.org" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary))] hover:underline">
                    nocban.org
                  </a>
                  , Human Development Foundation{" "}
                  <a href="https://www.hdfbd.com" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary))] hover:underline">
                    hdfbd.com
                  </a>
                  , Poly Cables Industries Ltd.{" "}
                  <a href="https://www.polycables.com.bd" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary))] hover:underline">
                    polycables.com.bd
                  </a>
                  , SOFTEL{" "}
                  <a href="https://www.softelbd.com" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary))] hover:underline">
                    softelbd.com
                  </a>
                  , DMGI Pte., Singapore{" "}
                  <a href="https://dmgi.com.sg" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary))] hover:underline">
                    dmgi.com.sg
                  </a>
                  , Earth Science Technology and Policy Services Ltd.{" "}
                  <a href="https://www.esteps.org.bd" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--primary))] hover:underline">
                    esteps.org.bd
                  </a>
                  .
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  We also developed near about 1000+ Website, Portal, Apps, Newspaper Website, API, E-commerce site, Mail Server Solution in National & International level. We also provided various of IT Service in USA, UK, Singapore, Malaysia, Thailand, India & Others.
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed mb-4">
                  Web Soft BD expresses its interest to support similar services to other countries in the World where such facilities are not available. At present, Web Soft BD has well experienced personnel having domain knowledge in agriculture, meteorology, computer science, ICT etc. Web Soft BD will be extremely happy and ready to accept any such project elsewhere and also fully justify its commitment to the project.
                </p>
                <p className="text-[rgb(var(--text-muted))] leading-relaxed">
                  In the future, I would like to be able to serve the whole world, so I wish for everyone's sincere cooperation.
                </p>
                <div className="mt-6 pt-6 border-t border-[rgb(var(--border-subtle))]">
                  <p className="text-sm text-[rgb(var(--text-subtle))]">
                    Thanks & Regards,<br />
                    <span className="text-[rgb(var(--primary))] font-semibold">Kazi Fakrul Latif</span><br />
                    Founder & CEO, WEB SOFT BD
                  </p>
                  <div className="mt-4 space-y-2 text-sm text-[rgb(var(--text-muted))]">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+88 01716983511 (WhatsApp)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Level-2B, House-30, Road-02, Block-B, Pallabi Section-12, Mirpur, Dhaka-1216, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>info@websoftbd.net, fakrulebt@yahoo.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>www.websoftbd.net, www.websoft.com.bd</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-white">
        <CertificationMarquee />
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[rgb(var(--navy))]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Let's discuss how our expertise can help transform your data into intelligent solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))]">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
