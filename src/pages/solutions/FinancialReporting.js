import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const FinancialReporting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{
                background: 'linear-gradient(to right, #E0F2FE 0%, #FEF3E2 100%)',
                fontFamily: 'var(--brand-font)'
            }}>
        {/* Organic white wave shape */}
        <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg
            className="absolute bottom-0 left-0 w-full"
            style={{ height: '600px' }}
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            <path
              d="M0,600 Q300,420 600,460 T1200,360 L1200,600 L0,600 Z"
              fill="white"
              opacity="0.85"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          {/* Top Banner */}
          <div className="mb-8">
            <div
              className="inline-flex items-center rounded-full px-4 py-2 border"
              style={{ backgroundColor: '#E5E2FF', borderColor: '#1470D2' }}
            >
              <span className="text-sm font-semibold" style={{ color: '#0013C1' }}>
                #1 AI VIDEO PLATFORM FOR FINANCIAL REPORTING
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
            <span className="text-gray-900">Turn complex</span>{' '}
            <span className="text-[#1470D2]">numbers into clear</span>{' '}
            <span className="text-gray-900">executive-ready reels</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl">
            Auto-generate board-ready recaps of quarterly performance, forecasts, and KPI trends.
            Deliver concise, compliant updates that busy stakeholders actually watch—and act on.
          </p>

          {/* CTA */}
          <div className="mb-4">
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:opacity-90"
              style={{
                background: 'linear-gradient(90deg, rgb(20, 112, 210) 0%, rgb(142, 35, 192) 100%)',
              }}
            >
              Create a financial recap
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Financial Reporting Reel Showcase */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20" style={{ fontFamily: 'var(--brand-font)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="inline-block px-4 py-1.5 rounded-lg text-sm font-semibold uppercase tracking-wide border border-[#c6c1f0] text-[#0013C1]">
              EXECUTIVE DASHBOARD
            </span>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=675&fit=crop"
              alt="Financial Reporting Reel Screenshot"
              className="w-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675"%3E%3Crect fill="%23E5E7EB" width="1200" height="675"/%3E%3Cg fill="%239CA3AF"%3E%3Cpath d="M425 250h350v190H425z"/%3E%3Ccircle cx="540" cy="330" r="30"/%3E%3Cpath d="M470 400l70-70 70 70 90-90 90 90v70H470z"/%3E%3C/g%3E%3Ctext x="600" y="520" font-family="Arial, sans-serif" font-size="24" fill="%239CA3AF" text-anchor="middle"%3EFinancial Reporting Reel%3C/text%3E%3C/svg%3E';
              }}
            />
            <div className="absolute top-6 left-6">
              
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-20 bg-white" style={{ fontFamily: 'var(--brand-font)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-lg text-sm font-semibold uppercase tracking-wide border border-[#1470D2] text-[#1470D2]">
              FINANCE OPERATIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-8 leading-tight">
              Automate QBR decks<br />and regulatory-ready disclosures
            </h2>
            <div className="space-y-5 mb-10">
              {[
                'Sync live metrics from Snowflake, Looker, or Excel to keep reels accurate to the minute.',
                'Translate GAAP/IFRS narratives into plain language with automatic compliance disclaimers.',
                'Layer charts, animated KPI callouts, and AI avatars for executive-level clarity.',
              ].map((copy) => (
                <div className="flex items-start gap-3" key={copy}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#1470D2] to-[#8E23C0] flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg text-gray-700">{copy}</p>
                </div>
              ))}
            </div>
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold text-base rounded-lg hover:opacity-90 transition-all"
              style={{ border: '2px solid #1470D2' }}
            >
              Create financial reel
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&h=450&fit=crop"
              alt="Financial dashboards"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0013C1]/70 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-2xl font-semibold">
                Revenue + margin walk-through with automated chapter markers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Section */}
      <div className="py-20 bg-white" style={{ fontFamily: 'var(--brand-font)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-lg text-sm font-semibold uppercase tracking-wide bg-[#E5E2FF] text-[#0013C1]">
            THE ROI FOR YOUR FINANCE TEAM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Finance leaders who modernize reporting workflows
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            {
              company: "FIS",
              metric: "↓45%",
              label: "REPORTING TIME",
              description:
                "Automated quarter-close recaps free 200+ analyst hours each month without sacrificing accuracy or compliance.",
            },
            {
              company: "HSBC",
              metric: "↑3x",
              label: "EXECUTIVE ENGAGEMENT",
              description:
                "Video-ready dashboards improved leadership consumption of KPIs, enabling faster adjustments to forecasts.",
            },
            {
              company: "INTUIT",
              metric: "↓60%",
              label: "REVISION CYCLES",
              description:
                "Template-driven reels ensure consistent storytelling and reduce back-and-forth with legal and IR teams.",
            },
          ].map((card) => (
            <div key={card.company} className="bg-[#F8F9FC] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{card.company}</h3>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-bold text-[#1470D2]">{card.metric}</span>
                <p className="text-sm font-medium text-gray-600 mt-1">{card.label}</p>
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-6">{card.description}</p>
              {/* <Link
                to={`/case-study/${card.company.toLowerCase()}`}
                className="inline-flex items-center gap-2 text-base font-medium text-[#1470D2] hover:gap-3 transition-all"
              >
                Read case study
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialReporting;

