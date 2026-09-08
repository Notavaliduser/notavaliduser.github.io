export const caseStudies = [
  {
    id: "referrals-sharing-vision",
    title: "Rebuilding HelloFresh's Referral Programme",
    company: "HelloFresh",
    timeframe: "2026 – Present",
    role: "Staff Product Manager",
    metric: "€115M/year programme, narrowed -26% YoY decline to growth",
    tagline:
      "Customers had stopped sharing. The experience made referring feel like selling — tactical, impersonal, and unchanged for three years.",
    summary: [
      "A €115M/year referral channel was in decline across every metric — invites, visits, conversions, viral coefficient.",
      "The core insight: 52% of referred friends were individually value-negative, and the programme optimised for volume over quality.",
      "Rebuilt the sharing experience, launched campaign infrastructure, and narrowed the YoY gap from -26% to growth — weekly invites up +18%, sessions +19%.",
      "Key decision: shipped campaigns before fully consolidating the backend, accepting technical debt to capture seasonal windows.",
    ],
    sections: [
      {
        title: "Context",
        content:
          "HelloFresh's Refer-a-Friend (RAF) programme lets existing customers invite friends to try the service — both get a reward. At scale, it generated €115M/year in customer value globally and was one of the highest-intent, lowest-cost acquisition channels in the business. By early 2026, the programme had no dedicated product team. The last major structural changes were made over three years prior. I took ownership in January 2026 as part of a newly formed squad tasked with reversing the decline.",
      },
      {
        title: "The Problem",
        content:
          "Customers had stopped sharing. The ones who did share were sending invites that friends ignored. Every metric reflected this:",
        table: {
          headers: ["Metric", "YoY Change"],
          rows: [
            ["Invite rate", "-9%"],
            ["RAF page visits", "-29%"],
            ["Invite-to-session rate", "-40%"],
            ["K-factor (viral coefficient)", "-27%"],
            ["US referral conversions", "-33%"],
          ],
        },
        afterTable:
          "US referral conversions fell -33% YoY — double the rate of overall platform conversions. The channel was underperforming the product it was meant to grow.",
      },
      {
        title: "Insights",
        subsections: [
          {
            title:
              "For the customer sharing: nothing worth coming back to",
            content:
              "The referral page asked customers to copy a discount code and send it to a friend. That was it. No personal touch, no imagery of real people or food, no reason the act of sharing should feel good. Qualitative research described the experience as \'tactical and pushy\' — it felt like selling, not giving. The page never changed. A customer who visited once saw the same layout, same copy, same offer six months later. There was no fresh content, no campaigns, no reason to return. The primary entry point (app navigation bar) drove 90%+ of traffic, but it reached people at arbitrary moments — not after cooking a great meal or rating a recipe they loved.",
          },
          {
            title:
              "For the friend receiving: no compelling reason to act",
            content:
              "The referral discount had been diluted into complex tier structures. A friend receiving a referral link could find an equivalent or better deal through a homepage promo or paid ad. There was no unique value in being referred — and the invite itself was a generic discount code with no personal context about who sent it or why. The follow-up email sequence sent 16 emails over 31 days — a month of messages for a decision most people make in the first few days or not at all.",
          },
          {
            title:
              "For the broader customer base: sharing existed only as referring",
            content:
              "The referral funnel only ever addressed self-identified \'referrers\' — customers who actively decided to invite someone. But the much larger base of customers who share food content, talk about meals, or recommend recipes to friends had no surface in the product at all. The programme treated sharing as a single action (send a code) rather than a spectrum of behaviours.",
          },
          {
            title:
              "The economics were pointing in the wrong direction",
            content:
              "The old programme optimised for volume from newly activated customers — they were the highest-sending segment and the easiest to prompt. A deep-dive with the analytics team showed this was fundamentally wrong. 52% of referred friends were individually value-negative — the programme was paying acquisition costs on conversions that destroyed value. The top 10% of friends carried 57% of all CVA. The quality signal wasn't random. Sender loyalty predicted friend value: a referral from a tenured, high-fit customer was worth ~3× more than one from a recently activated customer. Crucially, a causal analysis showed this wasn't tenure building quality over time — the quality was baked in from a customer's first referral. High-fit customers both referred well and stayed. The programme just wasn't distinguishing between them.",
          },
          {
            title: "Why the experience couldn't evolve",
            content:
              "Customers experienced the same static page for three years — and the infrastructure was why. The programme ran on three disconnected backend systems. Only 6 of 13 international markets shared the same offer structure. Running a single experiment required configuring 144 individual settings across four platforms, manually synchronised — 60.5 hours for key markets, nearly 4× slower than comparable teams had achieved for similar scope. Five documented failure modes at every handoff, each silent. Average issue resolution: 151 hours. Data lagged by a minimum of 3 days. The result: roughly one experiment per quarter on a €115M channel. Assuming a 3% gain per test at quarterly cadence — conservative given the bundled test later delivered 4.5% — the opportunity cost of that constraint was estimated at ~€14M in annual CVA foregone.",
          },
        ],
      },
      {
        title: "Hypotheses",
        numbered: true,
        items: [
          "Make sharing feel like giving, not selling. If the experience used personal imagery, relational language, and a simple \'free box for every friend\' offer, customers would share more — because the old experience made them feel like a salesperson handing out a coupon.",
          "Give customers a reason to come back. If the programme rotated monthly campaigns — sweepstakes, partner rewards — customers would revisit and re-share. The static page gave no reason for a second visit.",
          "Reach people at the right moment. If we prompted customers to share when they're already feeling positive about the product — and compressed the follow-up to the days when friends are most likely to act — both invite volume and per-send conversion would increase.",
          "Reach customers who don't engage with the referral page. Most customers don't think of themselves as \'referrers.\' A lighter sharing surface — recipe sharing — would tap a different motivation without requiring them to enter the referral funnel.",
        ],
      },
      {
        title: "What We Built",
        content:
          "The work moved in three phases: Q1 — fix what was actively broken (infrastructure, data, platform migration). Q2 — build and launch RAF 2.0 (new experience, CRM, offer structure, campaign mechanics). Q3 — scale across markets and layer on new campaign types. Across those phases, the rebuild covered four layers.",
        subsections: [
          {
            title: "Experience",
            content:
              "Redesigned from the customer's perspective. Imagery of people and food replaced promo-code visuals. Copy reframed the action as giving a friend a free box, not distributing a discount. The flat \"free box for every friend\" offer restored referrals as the highest-value way for someone new to try HelloFresh — something that had eroded as other channels caught up. A customer visiting the referral page now sees something different every month: a sweepstakes for FIFA World Cup tickets one month, a cookware reward the next, Meta Ray-Ban glasses after that. There's always a reason to come back and something new to share.",
          },
          {
            title: "Triggers and follow-up",
            content:
              "Redesigned around how customers and friends actually behave. Nudges moved from scheduled cadences to behavioural triggers: prompting customers to share after they rate a meal highly, finish choosing their weekly box, or receive a delivery — moments when they're already thinking positively about the product. A redesigned post-meal-choice nudge — appearing immediately after a customer selects their weekly meals — went from fewer than 100 invites per week to over 600. The invite email sequence went from 16 emails over 31 days to 7 emails over 10 days — concentrating on the window when friends are most likely to act.",
          },
          {
            title: "Platform",
            content:
              "The infrastructure that had blocked iteration was replaced entirely. Experiments now launch same-day, meaning the team can validate what works for customers in days, not quarters. New campaign types use shared templates and spin up in days, not sprints. Market expansion happens via configuration, not months of manual setup — Germany was the first expansion market; additional markets follow the same pattern. Commercial teams update page content, messaging, and rewards without engineering or app releases — so what customers see stays fresh without waiting for a development cycle.",
          },
          {
            title: "Mechanics",
            content:
              "RAF 2.0 was built as a modular menu card — easy to extend, easy to configure per market. Two campaign levers launched first: raffles (time-limited sweepstakes that give customers something exciting to tell a friend about) and partner rewards (tangible products like cookware that make the invite more compelling to the recipient). Campaign rewards replace the base reward rather than stacking — a deliberate choice to keep acquisition costs controlled as new mechanics layer on. Both configurable per market without code changes. Recipe Share launched as the first non-referral sharing surface — a share button on the recipe page for customers who don't engage with the referral page but will share something they cooked.",
          },
        ],
      },
      {
        title: "Results",
        subsections: [
          {
            title: "Volume recovery",
            table: {
              headers: ["Period", "US weekly invites (avg)", "YoY gap"],
              rows: [
                ["Q2 baseline", "~8,600", "-26%"],
                ["Q3 first 5 weeks", "10,300", "-13%"],
              ],
            },
            content: [
              "By late August, US weekly invites reached 13,100 — continuing to climb as full rollout and campaign mechanics compounded.",
              "The US test bundled page, offer, CRM, and entry point changes together — multiple simultaneous platform migrations meant isolating each variable would have required waiting out dependencies rather than shipping. To de-risk the bundle, we ran prototype user tests on key experience changes and launched to a friends-and-family cohort in Germany before the full US rollout. The bundle delivered a >4.5% uplift in weekly invites relative to the control group — statistically significant — and was rolled to 100% of users.",
              "Canada narrowed from -22% YoY to -3%. Germany posted a ~29% invite-to-conversion rate in early results on a smaller base — directionally the highest across markets.",
            ],
          },
          {
            title: "The conversion trade-off",
            content: [
              "Invite-to-conversion rate dropped from 15.4% to the 9.7–12.6% range. This is real, and it matters to name.",
              "The new experience reaches customers who previously never shared — people activated by the redesigned page, campaign mechanics, or a nudge after a good meal. These are first-time sharers. Their networks convert at a lower per-invite rate because the intent is different: they're sharing because the experience prompted them to, not because they've been actively trying to earn a reward. But they are net-new volume the old programme never reached.",
              "By late August: 1,658 US weekly conversions, above the Q2 average (~1,318/wk) for the first time. The model produces net-positive conversions as volume scales.",
            ],
          },
          {
            title: "Campaigns",
            subsections: [
              {
                title: "FIFA World Cup Sweepstakes (US, 2.5 weeks)",
                content:
                  "+20.2% page sessions · +10.7% invites · +8.5% conversions. Take rate (% of visitors who entered): 14.8% vs 8.5% expected. Net economics: -$11.7K — the urgency mechanic drove measurable behavioural change, but prize cost exceeded incremental value in the short window.",
              },
              {
                title: "Fissler Cookware Partner Reward (DE, 3 weeks)",
                content:
                  "+15.7% conversions (95% CI: +9.0% to +22.9%). +6.53 percentage points on conversion rate. Net economics: +€5,646.",
              },
            ],
            content:
              "Two levers, independently testable. Raffles drive reach. Partner rewards drive conversion quality. The programme runs both simultaneously — something the old infrastructure would never have supported.",
          },
          {
            title: "Operational velocity",
            table: {
              headers: ["Before", "After"],
              rows: [
                ["60.5h experiment setup (international)", "Same-day launch"],
                ["~1 experiment per quarter", "Multiple concurrent, shipping biweekly"],
                ["151h average issue resolution", "Detection in hours, not weeks"],
                ["Creative updates require app release", "Commercial team updates directly"],
                ["New campaign type = custom build", "Shared template — new types in days"],
              ],
            },
          },
          {
            title: "Non-referral sharing",
            content: [
              "A customer who just cooked a recipe they loved sees a share button — no referral pitch, no discount code, just an easy way to send the recipe to a friend.",
              "Recipe Share (US) added 3,755 invites per week from ~20,000 unique customers who don't engage with the traditional referral page (only 1.7% overlap between the two audiences). Conversion rate: 0.94% — structurally lower than traditional referrals because the intent is different. This is content virality, not peer-to-peer referral. The audience is net new, and recipe shares turned the blended invite trend from -5.0% to +0.8% growth.",
            ],
          },
        ],
      },
      {
        title: "What Didn't Work",
        content: [
          "The old entry point strategy was the wrong model entirely. Before RAF 2.0, the approach to improving referral volume was to add more touchpoints — popups, modals, banners — across the app. These placements lived on other teams' surfaces: post-checkout, in-menu, on the homepage. They generated impressions, but the invites they produced were low-intent and low-quality. Internally, other product teams pushed back because referral popups were appearing across their domains. Users saw it as noise. The programme had optimised for visibility when the actual problem was that the experience behind the visibility wasn't worth engaging with. Stripping back to fewer, higher-intent entry points — triggered by moments of satisfaction rather than scheduled interruptions — was a deliberate reversal of the prior strategy.",
          "FIFA economics didn't close. The sweepstakes mechanic worked behaviourally — higher engagement, more invites, more conversions. But the prize cost exceeded the incremental value generated in the 2.5-week window, producing a net loss of $11.7K. The learning was clear (urgency drives action) but the unit economics need tuning: shorter durations, lower prize costs, or higher-volume markets. This is an open problem, not a solved one.",
          "Early Q3 weeks underperformed Q2 on conversions. The volume recovery was not instant. Before full rollout and campaign mechanics were both in place, weekly conversions sat below Q2 levels. The model only turned net-positive once sufficient volume compounded — which took weeks, not days. If we had been measured on conversion rate alone during those early weeks, the programme would have looked like a regression.",
          "The bundled US test made attribution impossible. Page, offer, CRM, and entry points all shipped together because simultaneous platform migrations forced the timeline. The result was a statistically significant uplift — but no ability to isolate which lever mattered most. Decomposition is ongoing, but the honest answer is that six months in, we still cannot say with confidence whether the new page or the new offer was the primary driver.",
        ],
      },
      {
        title: "What's Next",
        content: [
          "The programme addressed volume first — that was the immediate crisis. The value concentration insight arrived after launch and pointed the programme toward its next phase: quality.",
          "Early signals suggest the direction is right. The US experiment showed friends referred through the new experience placed ~20% more orders over 52 weeks (significant), with friend Net CCV up +16% and the unprofitable conversion rate down -13% — both directional. The Fissler partner reward mechanic drove a +15.7% conversion lift not by generating more invites, but by making each invite more compelling to the recipient — a quality lever, not a volume lever.",
          "For customers, this means challenges they can enter with friends, more reasons to share beyond a discount, and a programme that feels different every month. For the business, the programme is heading toward full self-serve — market teams already update creative and offers independently; the next step is removing product involvement from campaign operations entirely.",
        ],
      },
      {
        title: "My Role",
        content:
          "End-to-end ownership of the RAF programme rebuild — from strategy through delivery and ongoing optimisation.",
        items: [
          "Accepted the conversion rate trade-off. The new experience activates lower-intent sharers who convert at a lower per-invite rate. Argued for volume over per-invite efficiency — the old programme optimised for conversion rate on a shrinking base, which produced a clean metric and a dying channel.",
          "Shipped campaigns before fully consolidating the backend. FIFA World Cup was a two-week window — if we waited for clean infrastructure, the moment was gone. Raffles and partner rewards launched on the new template architecture while parts of the legacy system were still being retired. The debt was real (dual systems running in parallel, manual config for some markets), but the alternative was another quarter of decline with nothing new to show stakeholders. The campaigns proved the programme could evolve; that bought us the runway to finish the migration.",
          "Built the squad's operating rhythm from scratch. Daily demos, weekly deploys, biweekly experiment reads. The team had no established cadence when I joined. The rhythm was designed to make iteration the default, not a special event.",
        ],
      },
    ],
  },
  {
    id: "factor-weight-loss-program",
    title: "Building Factor's Weight-Loss Programme",
    company: "HelloFresh",
    timeframe: "Dec 2024 – Oct 2025",
    role: "Senior Product Manager II",
    metric: "$202 AOV (vs $120 Classic) · Conversion gap closed to neutral",
    tagline:
      "Customers were manually building a weight-loss programme out of a meal delivery service. We gave them the structure they were already trying to create — and a premium tier worth paying for.",
    summary: [
      "Factor had millions of customers already using the service for weight loss — manually, with no product support. The company had never entered the weight-loss market.",
      "Built a 0-to-1 programme from strategy through launch: personalised caloric planning, curated meals, premium pricing. No competitor combined all three.",
      "Programme AOV of $202 vs $120 Classic — driven by additional meal occasions and structured guidance, not just price. Conversion gap closed from -13% at launch to neutral.",
      "Key decision: merged two planned phases into one MVP after research showed Phase 1 without meal swap would fail the experience bar — a two-month delay that avoided a likely failed launch.",
    ],
    sections: [
      {
        title: "Context",
        content: [
          "Factor, HelloFresh's ready-to-eat brand, served millions of active customers. Internal research — behavioural data from meal filter usage, menu category selection patterns, and purchase behaviour — showed 52% of them were already using the service for weight loss. They were manually sifting through 100+ meals and add-ons each week to find calorie-appropriate options across four daily meal occasions. They had built themselves a weight-loss programme out of a product that was never designed to be one.",
          "The company decided to enter the weight-loss market with a structured, programme-based offering — initially conceived as a proof-of-concept for a standalone weight-loss brand, later repositioned as the primary market entry vehicle. I took ownership in December 2024. There was a high-level vision prototype and a strategy doc, but no detailed requirements, no workback plan, and no data brief. My job was to define the MVP strategy, align six-plus cross-functional teams, and take the product from zero to market.",
        ],
      },
      {
        title: "The Problem",
        content:
          "Factor had a customer base with a clear weight-loss motivation and no product to support it. Customers wanting to lose weight had to evaluate 100+ meals weekly against their caloric targets, manually planning across meals and add-ons for each day. No structured guidance. No calorie tracking. No curated plans. Just a meal delivery service that happened to serve health-conscious food. And the company had never competed in weight loss. Every established player had years of positioning.",
        table: {
          headers: ["Missing capability", "Impact"],
          rows: [
            ["No personalised funnels", "Could not tailor sign-up to weight-loss goals"],
            ["No programme-specific pricing", "No premium tier to capture additional value"],
            ["No goal-oriented experience", "No meal plans, no dashboard, no calorie tracking"],
            ["No legal-approved health claims", "Could not market as a weight-loss product"],
          ],
        },
        afterTable:
          "The initial timeline called for two phased launches in H1 2025.",
      },
      {
        title: "Insights",
        subsections: [
          {
            title: "52% were already doing it themselves",
            content:
              "52% of active customers were already using Factor for weight loss — visible in how they filtered meals, which categories they gravitated toward, which SKUs they reordered. The demand was not theoretical. What was missing was any product that supported what these customers were already trying to do. They had the motivation. Factor had no structure around it. The question: could we build something worth paying a premium for?",
          },
          {
            title: "Nobody combined the food with the plan",
            content:
              "A competitive analysis of 14 weight-loss services revealed two camps:",
            table: {
              headers: ["Category", "Examples", "Strength", "Gap"],
              rows: [
                ["Personalised programmes, no food", "Noom, WeightWatchers", "Structured guidance, tracking", "No meal delivery"],
                ["Meal delivery, no personalisation", "Trifecta, BistroMD, Sakara", "Prepared food, convenience", "No caloric planning or goals"],
              ],
            },
            afterTable:
              "No product combined structured meal delivery with personalised caloric planning. Factor could sit at the intersection. But providing caloric recommendations meant navigating legal constraints around health claims, nutritional guidance, and menu variety that a standard meal service never had to face.",
          },
          {
            title: "The original two-phase plan would not survive contact with reality",
            content:
              "The initial plan split the work into Phase 1 (April: basic programme with pre-assigned meals, no meal swap) and Phase 2 (June: meal selection, dashboard, logging). When Phase 1 designs went through stakeholder and UXR feedback in December 2024 and January 2025, multiple inputs flagged the same problem: launching without meal swap — the ability for customers to choose their own meals within the programme — would produce an experience that fell below the floor customers expected. Research described it as removing the one thing that made Factor appealing (choice) in exchange for a benefit (structure) that the first version could not yet deliver convincingly. The physical product team's evolving assortment strategy also no longer matched the original scope's assumptions about meal availability. I proposed merging both phases into a single June MVP with meal swap included. A two-month delay versus the original Phase 1 date — but it avoided launching a version that had a high probability of failing the experience bar.",
          },
          {
            title: "Legal went from blocking us to enabling us",
            content:
              "Weight-loss claims required legal review, nutritional sign-off, and carefully worded disclaimers. The starting position was restrictive: legal required disclaimers including 'not a weight loss program' — directly contradicting the product positioning. Through iterative negotiation with legal and nutrition teams, we moved from that starting position to an approved claim: 'Lose 7 pounds in 8 weeks' — along with a calorie calculator in the funnel and personalised plan recommendations via a quiz. Each approval unlocked product capability. Legal became a design partner, not a gate.",
          },
          {
            title: "Why we skipped lock-in",
            content:
              "Early scoping explored requiring customers to commit to a multi-week programme duration — the standard model for weight-loss products. Three signals pushed us away from it: no competitor with food delivery had succeeded with long-term lock-in; qualitative feedback showed prospects were unwilling to commit without tasting the food first; and Factor's menu variety did not yet support the allergen/exclusion coverage needed for confident multi-week commitment. A previous experiment with pay-in-advance pricing had shown improved cancellation rates but no meaningful AOR change and significantly negative net revenue per customer. We bet on flexibility. Lock-in might have protected retention numbers, but the product was unproven — asking customers to commit before they had tasted the food felt like the wrong sequence.",
          },
        ],
      },
      {
        title: "Hypotheses",
        numbered: true,
        items: [
          "A structured programme with personalised caloric planning and curated meal selection would convert existing self-service weight-loss customers into a higher-value subscription tier — because the unmet need was structure, not food quality.",
          "Allowing meal swap within the programme (rather than pre-assigning all meals) would be critical to conversion and retention — because customers chose Factor for choice, and removing it would undermine the core value proposition.",
          "The unique positioning of personalisation plus convenience plus food delivery would justify a premium price point — because no competitor offered all three, and the competitive analysis showed the gap was real.",
          "A flexible subscription (no lock-in) would outperform a commitment-based model at the MVP stage — because trust in the product needed to be earned before duration could be demanded.",
        ],
      },
      {
        title: "What We Built",
        content:
          "The modified MVP launched in mid-July 2025. It consolidated what had originally been planned as two separate phases into a single release, including capabilities that the original Phase 1 had explicitly scoped out.",
        subsections: [
          {
            title: "Sign-up funnel with personalisation",
            content:
              "Built a programme-specific sign-up flow with two calorie-tier options (covering approximately 80% of the weight-loss customer base per nutritionist guidance), dietary preference capture, and a calorie calculator. The funnel was designed to progressively increase commitment. Early data showed that customers who reached the summary step were converting at only 46%. We iterated on reassurance and price communication at each step, improving that micro-conversion to 55%.",
          },
          {
            title: "Meal planning with customer choice",
            content:
              "Customers saw a daily plan matched to their caloric target across four meal occasions, with the ability to swap individual meals. This was the feature that almost got cut. The implementation was harder than scoped. Most eligible add-ons were multi-serve SKUs not designed for single-meal-occasion use. We worked through multiple options with assortment and fulfilment teams — bundles, smaller serving sizes, limiting swap to lunch and dinner only. The final trade-off: we constrained swap eligibility to meals where the fulfilment pipeline could handle single-serve allocation, which covered the majority of selections but left some add-on categories unavailable for swap.",
          },
          {
            title: "Customer dashboard",
            content:
              "Introduced a pared-down dashboard that was originally planned for Phase 2. During design review, we identified that adding both a week-view navigation and a separate dashboard would make the app unnecessarily complex. Simplified to critical information only and integrated into the existing navigation flow. Post-launch UXUM score: 8.1.",
          },
          {
            title: "Programme-specific pricing and fulfilment",
            content:
              "Developed a premium pricing tier reflecting the additional value of structured guidance, integrated with the existing Factor fulfilment pipeline. Coordinated with SCM teams on tray processing logic and delivery scheduling specific to programme orders.",
          },
        ],
      },
      {
        title: "Results",
        subsections: [
          {
            title: "Conversion recovery",
            content: [
              "The programme launched at 10% rollout in mid-July 2025. The first week was rough. A -13% conversion rate drop versus Classic Factor, made worse by a misconfigured feature gate that blocked the first users from meal selection and delivery problems — 25% of boxes experienced late delivery, with meals and add-ons arriving on separate days and items not packaged properly.",
              "The technical bugs were fixed immediately. The conversion gap took longer. We iterated on the funnel to ensure users entering the programme flow were more intentional, refined reassurance and price communication at key steps, and adjusted the active meal selection experience based on friends-and-family tester feedback.",
            ],
            table: {
              headers: ["Lever", "Before", "After"],
              rows: [
                ["Classic option selection rate", "25%", "34%"],
                ["Summary-to-Registration micro-conversion", "46%", "55%"],
                ["Conversion gap vs Classic", "-13%", "-8.6% after first round, then neutral"],
              ],
            },
            afterTable:
              "Post-launch data deep dives identified further subsets of customers who were best fits for the programme. Entry points were redesigned to target these segments.",
          },
          {
            title: "Revenue and retention",
            content:
              "Programme subscribers showed an AOV of $202 versus $120 for Classic Factor — a +68% increase. The higher price reflected the additional meal occasions and structured guidance in the programme tier. Blended AOV improved +1.8%. Customer loyalty increased +4.3%. The retention picture was more nuanced. Predicted AOR was 4.6 — below Classic's 5.3. But the higher AOV meant net customer value was roughly comparable: the programme broke approximately even on CCV despite the shorter predicted lifetime. This is based on early data — weeks, not months — so the AOR prediction carries real uncertainty. Whether retention converges as the active experience improves is the question the next phase needed to answer.",
          },
          {
            title: "Strategic pivot",
            content:
              "The original H2 plan was to launch a second programme (GLP-1 support) in November 2025. Post-launch data told a different story: the active experience — meal selection friction, meal plan usability, logging, educational content — was where the retention gap lived. Launching a second programme on a foundation that still needed strengthening would have spread the team thin across two undercooked experiences. I presented retention and engagement data to senior leadership. The strategy shifted from launching programme #2 to improving programme #1. Stakeholders who had already committed to the GLP-1 timeline in their own planning needed convincing. The data made the case: depth first, breadth later.",
          },
        ],
      },
      {
        title: "What Didn't Work",
        content: [
          "The conversion rate drop at launch was steeper than anyone had modelled. The -13% impact was outside the range of scenarios we had prepared for. The first week's technical and delivery issues made it worse. The team iterated rapidly, but the early period exposed a gap in the launch plan: conversion monitoring should have been instrumented and rehearsed before rollout, not built reactively once the drop was already visible.",
          "The meal swap implementation was harder than scoped. The add-on assortment was designed for multi-serve consumption, not single-meal-occasion programme use. The hardest trade-off: whether to limit swap to lunch and dinner only (simpler fulfilment, worse experience) or to solve single-serve allocation across all meal occasions (better experience, more downstream complexity). We shipped a working solution, but the underlying product-catalogue mismatch remained a source of friction that would need structural resolution for the programme to scale.",
          "The lock-in decision left retention exposed. Choosing flexibility over commitment meant we had no lever to protect retention beyond the quality of the experience itself. AOR of 4.6 was sufficient to break even but sat below Classic's 5.3. Whether a commitment model would have changed this is an open question — but every week was a retention challenge that the product had to win on its own merits.",
        ],
      },
      {
        title: "What's Next",
        content:
          "The AOR gap (4.6 vs 5.3) was the biggest open question. The hypothesis: improving the daily active experience — meal logging, educational content, reduced selection friction — would close it by making the programme a daily habit rather than a weekly delivery. The programme had also established the technical foundation for cycle-based offerings (e.g., 30-day reset, 8-week plans) and integration with external health tools (Apple Health, MyFitnessPal) — capabilities scoped for 2026 that would extend Factor's positioning from meal subscription to goal-driven lifestyle platform.",
      },
      {
        title: "My Role",
        content:
          "Owned the programme from strategy through launch and post-launch iteration. Translated a high-level vision into detailed requirements, a workback plan, and a data brief — none of which existed when I took over. Managed the product through three SLT reviews and ongoing steering committee alignment.",
        items: [
          "Merged Phase 1 and Phase 2 into a single MVP — accepting a two-month delay to avoid launching a version that research indicated would fail the experience bar. This was controversial: it meant the team would have no in-market signal until June instead of April. I argued that a failed Phase 1 would cost more than a delayed MVP, and that the Phase 1 scope without meal swap would produce data on a product nobody would actually use.",
          "Led the strategic pivot from GLP-1 to improving the existing programme. Presented the retention and engagement data that showed depth would produce more value than breadth. The pivot required convincing stakeholders who had already committed to the GLP-1 timeline in their own planning.",
          "Turned legal from a blocker into a product lever. Iterated from restrictive disclaimers ('not a weight loss program') to an approved claim ('Lose 7 pounds in 8 weeks') that the funnel, CRM, and landing page could all use.",
          "Ran the conversion recovery. When the -13% drop hit, I identified the highest-leverage fixes — Classic option visibility, summary-step reassurance copy, price communication — and tracked each through to impact. The first round of changes brought the gap to -8.6%; further iteration brought it to neutral.",
          "Coordinated across eight teams (physical product, supply chain, CRM, marketing, legal, nutrition, data science, conversions) through an initiative where most of them had competing priorities.",
          "Mentored a junior PM (Alison) through the initiative. We worked together on breaking ambiguous asks into things a squad could build against. She was promoted to Senior PM by the end of the programme.",
        ],
      },
    ],
  },
  {
    id: "rapid-experimentation-rte",
    title: "Rapid Experimentation in Ready-to-Eat",
    company: "HelloFresh",
    timeframe: "2023 – 2024",
    role: "Senior Product Manager",
    metric: "$16M+ in cumulative customer value added",
    tagline:
      "The active experience for millions of RTE subscribers was underperforming, and nobody could agree on what to fix first. Nine experiments, each targeting a specific customer behaviour, settled the debate with data.",
    summary: [
      "Six product surfaces, three competing theories about what to fix, and a debate between a large redesign and incremental work. Nobody had the data to prioritise confidently.",
      "Ran nine targeted experiments with a survey-paired methodology (a first for the tribe) that produced both metric movement and the qualitative insight to interpret it.",
      "$16M+ in cumulative customer value added. The methodology was adopted across other HelloFresh brands.",
      "Key decision: chose a bigger Cart MVP than the first experiment required — slower to ship initially, but subsequent experiments built on it instead of starting from scratch.",
    ],
    sections: [
      {
        title: "Context",
        content:
          "I owned the active experience for HelloFresh's Ready-to-Eat brands — Factor and Youfoodz — across seven geographies. The active experience is everything a subscriber interacts with between sign-up and churn: My Deliveries, Edit Meals, Add-ons, Settings, Cart, and pricing. It was the primary surface for retention, average order value, and meal choice rate. By early 2023, these metrics had flattened. Retention improvements had stalled. AOV growth was marginal. Meal choice rate was stagnant. The product served millions of active subscribers, and the organisation was debating whether to invest in a large-scale redesign or continue shipping incremental features. Both options had advocates. Neither had evidence.",
      },
      {
        title: "The Problem",
        content:
          "The RTE active experience was broad — six major product surfaces, two brands, seven geographies. Every stakeholder group had a theory about what would move the numbers:",
        table: {
          headers: ["Stakeholder", "Theory"],
          rows: [
            ["Commercial team", "Pricing communication was the bottleneck"],
            ["Design team", "Navigation overhaul needed"],
            ["Brand team", "Richer recipe content would drive engagement"],
          ],
        },
        afterTable:
          "Each argument had supporting data — correlations, customer feedback, comparisons across markets. None was conclusive. And the risk of a large bundled release was real. A redesign that improved one segment could regress another on a product serving millions of subscribers. I argued against the redesign. The data needed to prioritise well did not exist yet — we were debating which wall to repaint when we hadn't checked which walls were load-bearing. Nine cheap tests would generate that data in months. A single redesign would take just as long and produce one data point. If we were going to redesign, we should know which surfaces actually mattered first. The risk was that stakeholders would lose patience before cumulative signal emerged — no single experiment would be transformative. I committed to transparent read-outs after every cycle so the data could build the case incrementally.",
      },
      {
        title: "Insights",
        subsections: [
          {
            title: "The metrics were lying by omission",
            content:
              "Early experiments produced statistically significant metric movements, but the numbers alone did not explain why. The quick filters experiment showed a -2.3% cancellation rate reduction — but was that because customers found meals faster, or because the filter UI made the menu feel less overwhelming? The first interpretation pointed toward filter specificity. The second pointed toward a different navigation model entirely. I introduced experiment-paired surveys (Sprig integrated with Optimizely) — a first for the RTE tribe. The integration delayed experiment launches by a few days, but the qualitative data changed what we built next. When recipe card enrichment showed improved meal choice rates, the survey revealed that confidence in meal selection — not speed — was what mattered. That distinction redirected our next round of investment. The methodology was adopted across the broader TAM tribe. The Sprig implementation also opened the platform for Pets Table and GoodChop — valuable given limited UXR bandwidth across brands.",
          },
          {
            title: "Features designed for extension pay off faster",
            content:
              "The Cart was the clearest example. The immediate hypothesis was about add-on uptake. But the Cart was built to support future use cases: an Order Confirmation Modal, add-on promotion surfaces, pricing communication. The second and third experiments built on the first instead of starting from scratch. The same principle applied to Favourites. RTE lacked tooling to link recipes across menu weeks, which meant favourite information would not persist week-over-week. Rather than building a narrow workaround, I worked with assortment teams to introduce a new ProductCode field in CCM that persisted across multiple tools and services. Other teams built on this solution, and it became an input for future personalisation.",
          },
        ],
      },
      {
        title: "Hypotheses",
        numbered: true,
        items: [
          "A cart experience would increase add-on uptake and AOV by making the purchase flow feel transactional and familiar — reducing the friction of the existing inline add-on interaction.",
          "An order confirmation modal with bulk meal choice would improve active order rate — the hypothesis was that prompting meal selection at the moment of order commitment (when attention is highest) would outperform the default flow where meal selection happened separately.",
          "Quick filters and goal-focused collections would reduce cancellation by addressing the cognitive load of browsing 100+ meals — the bet was that customers who could not find meals matching their dietary goals were churning, not that they disliked the food.",
          "A favourites feature would reduce pause rates by making it easier for returning customers to resurface previously enjoyed meals — the insight was that pausing correlated with the effort of re-discovering meals after a break.",
          "Enriched recipe cards would improve meal choice rate and re-engagement — the hypothesis was that confidence in meal selection was as important as convenience.",
        ],
      },
      {
        title: "What We Built",
        content:
          "Nine experiments shipped across 18 months, each targeting a specific customer behaviour with a clear success metric. The programme ran on two-week experiment cycles: ship, measure, survey, decide.",
        subsections: [
          {
            title: "The Cart",
            content:
              "The Cart was the foundation. RTE needed its own cart experience — HelloFresh's Editable Order Summary did not meet RTE use cases. I designed it as an extensible surface, not a standalone feature, and incorporated a 'Time Saved' element showing customers how much time they saved using Factor — consolidating messaging that had previously lived in separate banners (banner overload was a top consumer pain point identified through UXR). The Order Confirmation Modal followed, adding bulk meal choice at the point of order commitment. This was an extension point we had scoped into the Cart from the beginning — the Cart was always meant to support surfaces like this. The Cart and its extensions became the highest-value initiative in the programme.",
          },
          {
            title: "Discovery and navigation",
            content:
              "Quick filters and goal-focused meal collections tackled the cognitive load of browsing 100+ meals per week with no structured way to find what matched a dietary goal. Favourites addressed a different problem: customers returning after a pause had to rediscover the menu from scratch. The ProductCode fix made favourites persist across weeks — a systemic solution rather than a patch. Sorting meals initially failed on Youfoodz in 2023. The menu was too small and uniform for sort parameters to surface meaningfully different results. A retest six months later with a larger, more varied menu worked. Learnings from these experiments were shared with the HelloFresh Browse squad, enabling their own iterations on meal discovery — one squad's experiment data informing another's roadmap.",
          },
          {
            title: "Content and engagement",
            content:
              "Enhanced recipe cards with nutritional detail, preparation context, and ingredient transparency. The paired survey revealed that confidence — not speed — drove the meal choice improvement. Customers who felt uncertain about what they were ordering skipped meal selection entirely, which meant lower engagement and higher pause rates. One-click deselect removed friction from changing previous selections. After launch on RTE, GoodChop adopted the feature for their customers. Banner consolidation combined the convenience banner with the seamless prompt, reducing banner overload while preserving the messaging that mattered.",
          },
        ],
      },
      {
        title: "Results",
        subsections: [
          {
            title: "The big numbers",
            table: {
              headers: ["Theme", "Key result"],
              rows: [
                ["Cart", "~$11M CVA — AOV up, add-on uptake +3.2%, meal choice rate up across both brands"],
                ["Discovery and navigation", "~$5M CVA — cancellation -2.3%, pause rate down"],
                ["Content and engagement", "Meal choice rate up, unpause +1.98%, net revenue per customer up"],
                ["Total", "$16M+ in cumulative customer value added"],
              ],
            },
            content:
              "UXUM score across the active experience: 8.1. CVA was not calculated for every experiment — some were measured on engagement and retention metrics rather than modelled for lifetime value. The $16M is concentrated in the Cart and discovery themes.",
          },
          {
            title: "What the data settled",
            content:
              "The programme resolved the original prioritisation debate empirically. Navigation and discovery drove the largest retention impact — cancellation and pause rate. The Cart drove the largest revenue impact — AOV, add-on uptake, and pricing communication (which was built into the Cart experience). Recipe content improved engagement and re-activation. None of the three original theories was right on its own. Multiple levers contributed, with discovery and the Cart producing the highest returns in different dimensions.",
          },
        ],
      },
      {
        title: "What Didn't Work",
        content: [
          "Sorting failed on smaller menus. The first attempt on Youfoodz did not produce meaningful results because the menu was not large or varied enough for sort parameters to matter. A retest six months later with a larger menu succeeded — but the initial failure cost a full experiment cycle and forced us to revisit the hypothesis.",
          "Not every experiment produced a clean win. Several variants improved one metric while regressing another. A filter change that improved meal choice rate also increased time-to-complete. The survey-paired methodology helped diagnose these trade-offs but added lead time: each read-out took longer because we waited for qualitative data before making ship/kill decisions. In a programme designed for speed, the methodology sometimes worked against the cadence.",
          "One-click deselect shipped with a bug. After launch, I identified a spike in complaints about meal selections being reset — traced to a bug in the experiment. The team fixed it, relaunched, and put better testing and monitoring in place. We documented improved testing steps as part of ways of working, but the incident consumed time and eroded initial confidence in the feature.",
          "Cross-pollination created confounding effects. When the Browse squad used our filter experiment data to inform their own roadmap, changes they shipped affected the baseline our subsequent experiments were measured against. We did not anticipate this feedback loop. Some later read-outs required re-analysis to account for confounding changes on shared surfaces.",
        ],
      },
      {
        title: "What's Next",
        content:
          "The experiment programme established both a results foundation and a methodology that outlasted the individual experiments. The Sprig + Optimizely survey-paired approach was adopted across the TAM tribe and paved the way for other brands to use it. The Cart supported subsequent work on promotional surfaces and pricing communication. The ProductCode field introduced for Favourites became infrastructure for personalisation. GoodChop adopted the one-click deselect feature after RTE validated it. Most importantly, the programme produced a prioritised map of what actually drove customer behaviour on the active experience — data that directly informed the Factor Weight-Loss Programme's active experience decisions the following year.",
      },
      {
        title: "My Role",
        content:
          "Sole product owner for one squad (5-8 developers plus designer). This was foundational work that built the judgment and methodology I later applied at a broader scope.",
        items: [
          "Chose experimentation over the redesign proposal. The information needed to redesign well did not exist yet. I argued that nine cheap tests would generate it faster than one expensive bet, and that if we were going to redesign, we should know which surfaces actually mattered first. The risk was that stakeholders would lose patience before the cumulative signal emerged. I managed this by sharing results transparently after each cycle and letting the data build the case.",
          "Chose a bigger Cart MVP than the first experiment required. Slower start — but subsequent experiments built on it instead of starting from scratch.",
          "Introduced the survey-paired methodology for the tribe. Spearheaded the Sprig + Optimizely integration and pushed for adoption across brands. The speed trade-off was real — experiments launched days later. But the qualitative data changed what we built, not just whether we shipped. The recipe card enrichment survey, for instance, showed that confidence was the driver — not speed — which redirected subsequent investment.",
          "Solved systemic tooling gaps instead of working around them. The Favourites ProductCode fix took longer than a workaround but created infrastructure other teams used. Identifying and prioritising improved sold-out error messaging (spotted through Usabilla monitoring during capacity-constrained weeks) fixed a live pain point before it scaled.",
          "Managed alignment across physical product, assortment, brand, and commercial teams. Each group had opinions about which experiment should run first and whether results justified scaling. The two-week cadence and transparent read-outs provided structure, but alignment still required active management — particularly when experiments contradicted a stakeholder's preferred theory.",
        ],
      },
    ],
  },
  {
    id: "loblaw-delivery-expansion",
    earlier: true,
    title: "Online Grocery Delivery Expansion",
    company: "Loblaw Digital",
    timeframe: "2020 – 2021",
    role: "Senior Product Manager",
    metric: "CAD $40M incremental revenue",
    tagline:
      "PC Express delivery covered a fraction of Canada. Four approaches on the table, a pandemic accelerating demand, and a bet that speed-to-coverage would outperform a cleaner but slower build.",
    summary: [
      "Loblaw's delivery coverage was limited to select urban centres. Most of Canada had no access, and pandemic demand was surging.",
      "Evaluated four expansion approaches. Chose 3PL integration — the fastest path — accepting a service-level trade-off to unlock nationwide coverage in months instead of 18+.",
      "CAD $40M in incremental revenue from previously inaccessible postal codes. Serviceability portal cut manual operational effort by 20%.",
      "Key decision: presented the service-level trade-off explicitly to leadership rather than minimising the risk — speed-to-coverage justified it, and the revenue funded subsequent quality improvements.",
    ],
    sections: [
      {
        title: "Context",
        content:
          "PC Express was Loblaw's online grocery platform — the digital arm of Canada's largest food retailer. Delivery was available in a handful of urban markets, while the rest of the country could only use curbside pickup. The COVID-19 pandemic had accelerated demand for grocery delivery nationwide, and the business needed to expand coverage rapidly while managing the complexity of integrating third-party logistics into an existing fulfilment ecosystem built for first-party operations.",
      },
      {
        title: "The Problem",
        content: [
          "Delivery coverage was limited to select urban centres where Loblaw operated its own last-mile logistics. Customers outside these areas — the majority of the Canadian population by geography — had no access to PC Express delivery. Demand signals were clear: search traffic, app downloads, and customer service inquiries from uncovered regions were all climbing, accelerated by pandemic-driven behaviour change.",
          "Expanding delivery required solving a multi-system integration problem. The existing order orchestration pipeline was designed for first-party delivery: Loblaw-operated trucks, Loblaw-controlled delivery windows, Loblaw-staffed drivers. Introducing a third-party logistics provider meant touching order routing, serviceability rules, customer-facing delivery promises, operational dashboards, and customer support tooling simultaneously — without disrupting the existing first-party delivery experience that was already under pandemic-driven load.",
        ],
      },
      {
        title: "Insights",
        subsections: [
          {
            title: "Coverage, not conversion, was the growth constraint",
            content:
              "The conversion rate within existing delivery markets was healthy. Customers who could access delivery used it. The gap was not in the product experience but in the operational footprint — every postal code without delivery coverage represented latent demand that could not convert regardless of how good the app was. Expanding coverage was a higher-leverage growth opportunity than optimising the existing delivery experience.",
          },
          {
            title: "Four paths to nationwide — only one fit the timeline",
            content:
              "We evaluated four MVP approaches, scored across speed-to-market, implementation complexity, customer experience quality, and long-term scalability. The options ranged from a full in-house delivery build (highest quality, 18+ month timeline) to a lightweight 3PL integration with Loblaw handling orchestration (fastest, moderate complexity). The pandemic had compressed the acceptable timeline from years to months. The fastest viable approach — integrating a third-party logistics provider for last-mile fulfilment while keeping order orchestration in-house — won on speed while preserving Loblaw's control over the customer-facing experience. The trade-off was explicit: delivery reliability in 3PL-served areas would be lower than in first-party markets, and the customer experience would not fully surface this difference at launch.",
          },
          {
            title: "Operational fragmentation was already costing money",
            content:
              "Before expansion, delivery coverage and serviceability rules were managed through fragmented manual processes — spreadsheets, email chains, and tribal knowledge about which postal codes were served by which fulfilment centre. There was no single source of truth. This fragmentation meant that customer support could not reliably answer questions about delivery availability, operations could not identify underperforming routes, and product could not make data-informed coverage decisions. Additionally, non-feasible delivery orders (items that could not physically be shipped, like oversized goods) were reaching the fulfilment pipeline and generating costs before anyone caught them.",
          },
        ],
      },
      {
        title: "Hypotheses",
        numbered: true,
        items: [
          "A third-party logistics integration for last-mile fulfilment, with in-house order orchestration, would enable nationwide coverage in months rather than the 18+ months required for a first-party build — and the revenue from expanded coverage would justify the service-level trade-off.",
          "A serviceability portal establishing a single source of truth for delivery coverage would eliminate fragmented manual processes and enable data-driven coverage decisions — reducing operational overhead and improving the accuracy of customer-facing delivery promises.",
          "Automated item-level classification would catch non-feasible delivery items before they entered the fulfilment pipeline — reducing costs from orders that could not be completed and improving the customer experience by preventing failed deliveries.",
        ],
      },
      {
        title: "What We Built",
        subsections: [
          {
            title: "Order orchestration and 3PL integration",
            content:
              "Built the order orchestration layer that routed orders to either Loblaw's first-party delivery fleet or the third-party logistics provider based on serviceability rules. The integration connected the existing PC Express shopping experience to a new delivery network while preserving the first-party experience in markets where it already operated. The routing logic needed to handle edge cases: split orders where some items were 3PL-eligible and others were not, dynamic serviceability windows that changed based on 3PL capacity, and graceful fallbacks when 3PL coverage was temporarily unavailable.",
          },
          {
            title: "Serviceability portal",
            content:
              "Created a serviceability portal that served as the single source of truth for delivery coverage across both first-party and 3PL networks. Operations, customer support, and product teams could see which postal codes were served, by which provider, with what delivery windows and reliability metrics. The portal replaced the fragmented manual processes that had made coverage decisions ad-hoc and support answers unreliable. It also became the tool used to plan expansion sequencing — identifying which new postal codes to activate based on demand signals and fulfilment capacity.",
          },
          {
            title: "Automated item classification",
            content:
              "Mentored a product co-op to design and deliver an automated item-level classification system. The system flagged non-feasible delivery items (oversized, fragile, temperature-sensitive beyond 3PL capability) before they entered the fulfilment pipeline, preventing failed deliveries and reducing the cost of orders that could never be completed. The classification logic was based on item attributes and delivery method, running at the point of order creation rather than downstream in fulfilment.",
          },
        ],
      },
      {
        title: "Results",
        subsections: [
          {
            title: "Revenue and coverage",
            content:
              "Nationwide delivery coverage launched in August 2021, extending PC Express delivery from a handful of urban markets to customers across Canada. The expansion generated CAD $40M in incremental revenue from postal codes that had previously had zero delivery access. The revenue was incremental in the strict sense — these were customers who could not have converted through the delivery channel before the expansion, regardless of marketing spend or product optimisation.",
          },
          {
            title: "Operational efficiency",
            content:
              "The serviceability portal reduced manual operational effort by 20%, eliminating the spreadsheet-and-email processes that had previously governed coverage decisions. The automated item classification system reduced costs from non-feasible delivery orders by catching them at order creation rather than at fulfilment. Customer support resolution times for delivery-related inquiries improved as agents gained access to real-time serviceability data.",
          },
        ],
      },
      {
        title: "What Didn't Work",
        content: [
          "The service-level trade-off was real and visible to customers. Delivery windows and reliability in 3PL-served areas were noticeably worse than in first-party markets — wider windows, less predictable timing, higher rates of delayed or missed deliveries. The customer experience did not adequately surface this difference: a customer ordering in a 3PL area saw similar delivery promises to a customer in a first-party area, but the actual experience diverged. This drove a higher rate of customer complaints and support contacts from newly served areas than the model had anticipated.",
          "The decision to prioritise speed over service-level parity was correct for the business case — the $40M in incremental revenue justified the trade-off. But the customer experience gap required sustained post-launch iteration on delivery promise communication, expectation setting, and serviceability rules. The portal we built became the tool for managing this, but the initial launch would have benefited from more explicit customer-facing differentiation between delivery tiers.",
        ],
      },
      {
        title: "What's Next",
        content:
          "With nationwide coverage established, the focus shifted to closing the service-level gap between first-party and 3PL delivery. The serviceability portal's data enabled systematic analysis of underperforming routes and informed decisions about where to invest in first-party capacity versus where to improve 3PL reliability. The automated classification system was extended to handle new item categories as the grocery assortment evolved.",
      },
      {
        title: "My Role",
        content:
          "Led product development for PC Express delivery across the end-to-end customer and fulfilment journey — from shopping through order handoff.",
        items: [
          "Drove the MVP option evaluation that selected the 3PL integration approach over three alternatives — arguing that speed-to-coverage justified the service-level trade-off, and that the revenue from expanded access would fund the subsequent quality improvements. This required presenting the trade-off explicitly to leadership rather than minimising the service-level risk.",
          "Defined the serviceability portal scope as strategic tooling, not just an operational dashboard — positioning it as the platform for data-driven coverage decisions rather than a one-time launch support tool. This framing secured investment that a narrower scope would not have justified.",
          "Mentored a product co-op who took on a critical delivery-eligibility problem: poor data on item sizes and weights meant customers could order items like washing machines or bulk packs of 2L bottles that exceeded vehicle capacity or carrier weight limits. He developed a weight-assignment framework combining volume, dimensions, and category data to flag products that should be excluded from delivery. The framework shipped before his term ended.",
        ],
      },
    ],
  },
  {
    id: "tecsys-new-store-platform",
    earlier: true,
    title: "New Store Platform MVP",
    company: "Tecsys",
    timeframe: "2022",
    role: "Product Manager",
    metric: "MVP to pilot in 6 months",
    tagline:
      "A legacy OMS that retail clients had outgrown. The hard part was deciding what to leave behind — and finding the one net-new capability that would turn a defensive migration into something clients actually wanted.",
    summary: [
      "An enterprise OMS built on legacy .NET/SOAP that retail clients had outgrown. A full rewrite was not feasible; the challenge was finding where modernisation would deliver the most visible value.",
      "Used support ticket analysis to scope the MVP around the highest-friction workflows, and turned a defensive migration into an offensive play by including Customer 360 View — a capability the old architecture could never support.",
      "MVP to pilot in 6 months with two clients. Customer 360 View became the standout feature in client feedback and sales conversations.",
      "Key decision: course-corrected to contract-first API design mid-project after discovering parallel development coordination was failing — required admitting the original process was not working.",
    ],
    sections: [
      {
        title: "The Problem",
        content:
          "Tecsys OMNI is an enterprise Order Management System serving retail clients. The platform was built on legacy .NET with SOAP-based integrations — expensive to maintain and difficult to extend. A full rewrite was neither feasible within the timeline nor politically survivable: retail clients depended on existing workflows daily and would not tolerate disruption. The challenge was to find the slice where modernisation would deliver the most visible value, prove the approach to sceptical stakeholders, and create a foundation for subsequent phases — all within six months.",
      },
      {
        title: "Insights",
        subsections: [
          {
            title: "Support tickets revealed where to start",
            content:
              "Rather than relying on stakeholder opinions, we analysed support ticket volume, workflow completion times, and client escalation patterns. Two areas dominated: warehousing operations and customer support flows. Together they accounted for the majority of daily usage and the highest density of friction-related tickets.",
          },
          {
            title: "The modernisation could fill a gap the legacy system never could",
            content:
              "Customer 360 View — a unified screen showing a customer's complete order, return, and support history — had been on client wish lists for years. The legacy SOAP architecture made it prohibitively expensive. Moving to REST APIs meant it could be built as a natural part of the new architecture, turning the modernisation from a defensive 'keep the lights on' project into an offensive 'here is something you could never have before' story.",
          },
        ],
      },
      {
        title: "What We Built",
        content: [
          "Migrated Returns Processing and Order Creation from the legacy .NET/SOAP system to a Vue.js frontend backed by REST APIs, preserving all existing business logic and client-configured workflows. Delivered the Customer 360 View as a net-new capability — replacing a workflow that previously required navigating three or four separate screens.",
          "The REST APIs served both the new Vue.js frontend and the legacy .NET frontend during the transition, so clients could be migrated individually with rollback capability rather than in a single cutover.",
        ],
      },
      {
        title: "Results",
        content:
          "Delivered within six months and began piloting with two existing clients. Customer 360 View was the standout — the most-cited feature in client feedback and a reference point in sales conversations. The REST API layer and dual-serve architecture established the template for all subsequent modernisation phases. This was an enterprise B2B context where adoption metrics were measured in client migrations, not conversion funnels — the MVP validated the approach and the methodology, which was the goal.",
      },
      {
        title: "What Didn't Work",
        content:
          "Parallel backend and frontend development created coordination overhead we underestimated. API contract changes mid-sprint meant the frontend team was either building against stale assumptions or waiting. We adopted a contract-first approach partway through, but the early sprints absorbed more rework than they should have. The six-month timeline also left no room for visual polish — first client feedback was positive on capability but lukewarm on aesthetics, which made the initial conversations harder than they needed to be.",
      },
      {
        title: "My Role",
        content:
          "Led product modernisation for the Retail org, reporting to the VP of Product.",
        items: [
          "Scoped the MVP based on support ticket analysis rather than stakeholder wish lists — choosing warehousing and customer support workflows over candidates with louder internal advocates but less user-facing impact.",
          "Made the case for including Customer 360 View in MVP scope — arguing that net-new capability would change the client narrative from 'you are making us switch' to 'you are giving us something we could never have.' Accepted the timeline risk because the adoption benefits outweighed it.",
          "Introduced the contract-first API approach mid-project — a course correction that required admitting the original process was not working and convincing both backend and frontend leads to change.",
          "Mentored a product co-op through an accessibility audit of the platform — by the end, she knew the WCAG guidelines, the audit tooling, how to break accessibility requirements into actionable stories, and had led part of a sprint planning session independently.",
        ],
      },
    ],
  },
];
