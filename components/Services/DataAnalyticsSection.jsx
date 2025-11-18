export default function DataAnalyticsSection() {
  return (
    <section className=" py-10">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 mb-4 flex flex-wrap gap-2">
        <a href="/" className="text-blue-600 hover:underline">
          Home
        </a>
        <span>›</span>
        <a href="/services" className="text-blue-600 hover:underline">
          Data Analytics Services
        </a>
        <span>›</span>
        <span className="text-blue-600 font-medium">
          Data Analytics Consulting Services
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold leading-snug">
        Solve Data Challenges with AI-enabled{" "}
        <span className="text-pink-600">
          Data Analytics Consulting Services
        </span>
      </h2>

      {/* Divider */}
      <div className="border-b-2 border-pink-600 w-full mt-3 mb-6"></div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
        <p>
          Enterprises struggle with fragmented data, outdated systems, and slow
          decision-making. Poor governance, disconnected platforms, and a lack
          of real-time insights create inefficiencies, driving up costs and
          limiting growth.
          <br />
          <br />
          At Rishabh Software, we bridge the gap between raw data and business
          intelligence. Our data analytics and consulting services modernize
          your data infrastructure, enhance governance, and embed AI-powered
          insights into workflows. We assess your current data maturity, define
          a clear roadmap, and deploy scalable solutions tailored to your
          industry challenges.
        </p>

        <p>
          With expertise in big data, cloud ecosystems, predictive analytics,
          and machine learning, we architect high-performing, secure, and
          scalable data frameworks. Whether you need guidance on data strategy
          development, governance framework design, or analytics program
          optimization, our consultants provide the expertise required to
          maximize the value of your data assets for sustainable and long-term
          business outcomes.
          <br />
          <br />
          As a forward-thinking data analytics consulting company, we help
          enterprises move beyond reactive decision-making to predictive market
          positioning. Our proven methodologies help enterprises optimize costs,
          increase efficiency, and unlock new revenue streams.
        </p>
      </div>
    </section>
  );
}
