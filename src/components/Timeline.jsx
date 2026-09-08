const timelineData = [
  {
    period: "Dec 2025 – Present",
    title: "Staff Product Manager",
    company: "HelloFresh",
    description: "Referrals & Sharing",
  },
  {
    period: "Jul 2024 – Dec 2025",
    title: "Senior Product Manager II",
    company: "HelloFresh",
    description: "Factor Programs",
  },
  {
    period: "Jan 2023 – Jul 2024",
    title: "Senior Product Manager",
    company: "HelloFresh",
    description: "RTE Active Experience",
  },
  {
    period: "Feb 2022 – Jan 2023",
    title: "Product Manager",
    company: "Tecsys",
    description: "OMNI OMS, Retail Platform Modernization",
  },
  {
    period: "Sep 2021 – Jan 2022",
    title: "Senior Product Manager",
    company: "Browze",
    description: "Cross-border E-commerce Marketplace",
  },
  {
    period: "Nov 2020 – Sep 2021",
    title: "Senior Product Manager",
    company: "Loblaw Digital",
    description: "PC Express Delivery, Online Grocery",
  },
  {
    period: "Jan 2017 – Jun 2020",
    title: "Product Consultant",
    company: "Greyamp Consulting",
    description: "Digital Transformation, BFSI (India & Indonesia)",
  },
  {
    period: "2015 – 2017",
    title: "Management Trainee",
    company: "Vodafone India",
    description: "Multiple rotations across business functions",
  },
];

export default function Timeline() {
  return (
    <section className="section" aria-label="Experience">
      <h2 className="section-heading">Experience</h2>
      <div className="timeline-list">
        {timelineData.map((item, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3 className="timeline-title">
                {item.title}
                <span className="timeline-company"> — {item.company}</span>
              </h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
