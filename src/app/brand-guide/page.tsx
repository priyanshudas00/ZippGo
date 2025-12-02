export default function BrandGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">ZippGo Mobility Brand Guide</h1>
        <p className="text-xl text-gray-600 mb-12">Complete brand identity and positioning strategy</p>

        {/* Brand Story */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📖 Brand Story</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In the bustling streets of Patna and the tech corridors of Bengaluru, a revolution was brewing. 
              ZippGo Mobility was born from a simple observation: India's urban mobility was broken. Commuters 
              struggled with expensive cabs, unreliable public transport, and the hassle of vehicle ownership.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Meanwhile, thousands of vehicle owners watched their bikes and scooters sit idle in garages, 
              depreciating assets that could be generating income. ZippGo Mobility bridges this gap with a 
              revolutionary three-sided marketplace connecting riders, vehicle owners, and drivers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're not just another bike rental company. We're building India's most intelligent mobility 
              ecosystem where technology meets affordability, where entrepreneurship meets sustainability, 
              and where every ride moves India forward.
            </p>
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Vision, Mission & Values</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">Vision</h3>
            <p className="text-lg text-gray-700">
              To become India's most trusted and accessible mobility platform, democratizing transportation 
              and creating wealth opportunities for vehicle owners across every city and town.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">Mission</h3>
            <p className="text-lg text-gray-700 mb-4">
              To revolutionize urban mobility by providing affordable, eco-friendly, and technology-driven 
              transport solutions while creating sustainable income streams for vehicle owners and employment 
              for drivers.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Core Values</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">🚀 Innovation First</h4>
                <p className="text-gray-700">Constantly evolving technology to solve real mobility challenges</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">🤝 Trust & Transparency</h4>
                <p className="text-gray-700">Building relationships on honesty, fair pricing, and clear communication</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">🌍 Sustainability</h4>
                <p className="text-gray-700">Reducing carbon footprint through shared mobility and electric vehicles</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">💪 Empowerment</h4>
                <p className="text-gray-700">Creating wealth and employment opportunities for our partners</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">⚡ Speed & Reliability</h4>
                <p className="text-gray-700">Delivering fast, dependable service every single time</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-2">❤️ Customer Obsession</h4>
                <p className="text-gray-700">Every decision is made with our customers and partners in mind</p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Personas */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">👥 Target Audience Personas</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-2">Persona 1: The Daily Commuter (Rajesh, 26)</h3>
              <p className="text-gray-600 mb-2"><strong>Profile:</strong> Software engineer, lives in HSR Layout Bengaluru</p>
              <p className="text-gray-700 mb-2"><strong>Pain Points:</strong> Traffic jams, expensive cabs (₹300-400/day), parking issues</p>
              <p className="text-gray-700 mb-2"><strong>Goals:</strong> Save money, reach office quickly, flexible timing</p>
              <p className="text-gray-700"><strong>ZippGo Solution:</strong> Monthly subscription at ₹2,999 (saves ₹6,000/month)</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold mb-2">Persona 2: The Vehicle Owner (Priya, 35)</h3>
              <p className="text-gray-600 mb-2"><strong>Profile:</strong> Homemaker, owns 2 scooters used occasionally</p>
              <p className="text-gray-700 mb-2"><strong>Pain Points:</strong> Idle vehicles, maintenance costs, no passive income</p>
              <p className="text-gray-700 mb-2"><strong>Goals:</strong> Generate ₹15,000-25,000/month passive income</p>
              <p className="text-gray-700"><strong>ZippGo Solution:</strong> Partner program with guaranteed ROI, full maintenance</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold mb-2">Persona 3: The Student Explorer (Ananya, 21)</h3>
              <p className="text-gray-600 mb-2"><strong>Profile:</strong> College student, loves weekend trips with friends</p>
              <p className="text-gray-700 mb-2"><strong>Pain Points:</strong> Can't afford vehicle ownership, limited transport options</p>
              <p className="text-gray-700 mb-2"><strong>Goals:</strong> Affordable weekend rentals, freedom to explore</p>
              <p className="text-gray-700"><strong>ZippGo Solution:</strong> Pay-per-ride starting ₹99, student discounts</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold mb-2">Persona 4: The Aspiring Entrepreneur (Vikram, 29)</h3>
              <p className="text-gray-600 mb-2"><strong>Profile:</strong> Wants to start business, limited capital</p>
              <p className="text-gray-700 mb-2"><strong>Pain Points:</strong> Need income source, seeking low-risk investment</p>
              <p className="text-gray-700 mb-2"><strong>Goals:</strong> Build fleet business, scale gradually</p>
              <p className="text-gray-700"><strong>ZippGo Solution:</strong> Fleet management program, start with 1 vehicle</p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-bold mb-2">Persona 5: The Corporate Team (HR Manager, 40)</h3>
              <p className="text-gray-600 mb-2"><strong>Profile:</strong> Managing employee transport for 50+ people</p>
              <p className="text-gray-700 mb-2"><strong>Pain Points:</strong> High cab bills, coordination issues, budget constraints</p>
              <p className="text-gray-700 mb-2"><strong>Goals:</strong> Reliable employee transport, cost reduction</p>
              <p className="text-gray-700"><strong>ZippGo Solution:</strong> Corporate plans with bulk discounts, dedicated support</p>
            </div>
          </div>
        </section>

        {/* Tone of Voice */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🗣️ Tone of Voice</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">We Are:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Energetic & Dynamic:</strong> Young, vibrant, fast-paced</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Trustworthy:</strong> Professional, reliable, transparent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Friendly & Approachable:</strong> Conversational, warm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Smart & Tech-Savvy:</strong> Modern, innovative</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700"><strong>Empowering:</strong> Supportive, encouraging</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-4">We Are Not:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-700">Corporate or stuffy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-700">Overly casual or unprofessional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-700">Technical jargon-heavy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-700">Pushy or sales-y</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-700">Complicated or confusing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎨 Color Palette</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-full h-32 rounded-lg mb-2" style={{backgroundColor: '#0066FF'}}></div>
                  <p className="font-mono text-sm font-semibold">#0066FF</p>
                  <p className="text-xs text-gray-600">ZippGo Blue</p>
                  <p className="text-xs text-gray-500">Trust, Innovation</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-32 rounded-lg mb-2" style={{backgroundColor: '#00D9A3'}}></div>
                  <p className="font-mono text-sm font-semibold">#00D9A3</p>
                  <p className="text-xs text-gray-600">Electric Green</p>
                  <p className="text-xs text-gray-500">Energy, Growth</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-32 rounded-lg mb-2" style={{backgroundColor: '#1A1A2E'}}></div>
                  <p className="font-mono text-sm font-semibold">#1A1A2E</p>
                  <p className="text-xs text-gray-600">Deep Navy</p>
                  <p className="text-xs text-gray-500">Premium, Stability</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-32 rounded-lg mb-2" style={{backgroundColor: '#FF6B35'}}></div>
                  <p className="font-mono text-sm font-semibold">#FF6B35</p>
                  <p className="text-xs text-gray-600">Energetic Orange</p>
                  <p className="text-xs text-gray-500">Action, Speed</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Secondary Colors</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                <div className="text-center">
                  <div className="w-full h-24 rounded-lg mb-2" style={{backgroundColor: '#F0F8FF'}}></div>
                  <p className="font-mono text-xs font-semibold">#F0F8FF</p>
                  <p className="text-xs text-gray-600">Light Blue</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-24 rounded-lg mb-2" style={{backgroundColor: '#E6F7F1'}}></div>
                  <p className="font-mono text-xs font-semibold">#E6F7F1</p>
                  <p className="text-xs text-gray-600">Mint</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-24 rounded-lg mb-2" style={{backgroundColor: '#FFE5DB'}}></div>
                  <p className="font-mono text-xs font-semibold">#FFE5DB</p>
                  <p className="text-xs text-gray-600">Peach</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-24 rounded-lg mb-2" style={{backgroundColor: '#FFFFFF'}}></div>
                  <p className="font-mono text-xs font-semibold">#FFFFFF</p>
                  <p className="text-xs text-gray-600">White</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-24 rounded-lg mb-2" style={{backgroundColor: '#F5F5F5'}}></div>
                  <p className="font-mono text-xs font-semibold">#F5F5F5</p>
                  <p className="text-xs text-gray-600">Light Gray</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-24 rounded-lg mb-2" style={{backgroundColor: '#333333'}}></div>
                  <p className="font-mono text-xs font-semibold">#333333</p>
                  <p className="text-xs text-gray-600">Charcoal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">✍️ Typography</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Primary Font: Inter</h3>
              <p className="text-gray-600 mb-4">Google Fonts: <code className="bg-gray-100 px-2 py-1 rounded">font-family: 'Inter', sans-serif;</code></p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p style={{fontFamily: 'Inter, sans-serif', fontSize: '48px', fontWeight: 700}}>ZippGo Mobility</p>
                <p style={{fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: 600}}>Headline Bold 32px</p>
                <p style={{fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: 500}}>Subheading Medium 24px</p>
                <p style={{fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 400}}>Body Regular 18px - The quick brown fox jumps over the lazy dog</p>
                <p style={{fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 400}}>Small Text 14px for captions and footnotes</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Secondary Font: Poppins</h3>
              <p className="text-gray-600 mb-4">Google Fonts: <code className="bg-gray-100 px-2 py-1 rounded">font-family: 'Poppins', sans-serif;</code></p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <p style={{fontFamily: 'Poppins, sans-serif', fontSize: '36px', fontWeight: 700}}>Numbers & Stats</p>
                <p style={{fontFamily: 'Poppins, sans-serif', fontSize: '48px', fontWeight: 700}}>₹2,999</p>
                <p style={{fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontWeight: 600}}>50,000+ Happy Riders</p>
              </div>
            </div>
          </div>
        </section>

        {/* Branding Elements */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎭 Branding Elements & Logo Ideas</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Logo Concept</h3>
              <div className="bg-gradient-to-r from-blue-500 to-green-400 rounded-lg p-8 text-white text-center mb-4">
                <p className="text-6xl font-bold mb-2">Z</p>
                <p className="text-3xl font-semibold">ZippGo</p>
                <p className="text-sm opacity-90 mt-2">MOBILITY</p>
              </div>
              <p className="text-gray-700 mb-2"><strong>Symbol:</strong> Stylized "Z" with motion lines suggesting speed</p>
              <p className="text-gray-700 mb-2"><strong>Style:</strong> Modern, minimalist, dynamic</p>
              <p className="text-gray-700"><strong>Variations:</strong> Full logo, icon only, monochrome, reversed</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Visual Elements</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border-2 border-blue-200 rounded-lg p-4">
                  <p className="font-semibold mb-2">🏍️ Vehicle Icons</p>
                  <p className="text-sm text-gray-600">Stylized bike and scooter illustrations</p>
                </div>
                <div className="border-2 border-green-200 rounded-lg p-4">
                  <p className="font-semibold mb-2">⚡ Speed Lines</p>
                  <p className="text-sm text-gray-600">Dynamic motion graphics</p>
                </div>
                <div className="border-2 border-orange-200 rounded-lg p-4">
                  <p className="font-semibold mb-2">📍 Location Pins</p>
                  <p className="text-sm text-gray-600">Map markers and route lines</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Positioning */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Unique Positioning Statement</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "ZippGo is India's first three-sided mobility marketplace that doesn't just rent vehicles—we 
              create wealth. For riders, we're the most affordable transport. For vehicle owners, we're a 
              passive income generator. For drivers, we're an employment platform. We're not competing with 
              Ola or Uber. We're democratizing mobility ownership."
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">What makes us different:</h3>
              <ul className="space-y-2 ml-6">
                <li className="text-gray-700">✓ <strong>Asset-light model:</strong> Partner-owned fleet vs owned inventory</li>
                <li className="text-gray-700">✓ <strong>Wealth creation:</strong> Vehicle owners earn 15-25K/month passive income</li>
                <li className="text-gray-700">✓ <strong>Technology-first:</strong> AI-based pricing, IoT tracking, predictive maintenance</li>
                <li className="text-gray-700">✓ <strong>Tier 2/3 focus:</strong> Not just metros—Patna, Ranchi, Bhopal, Lucknow</li>
                <li className="text-gray-700">✓ <strong>Flexible options:</strong> Hourly, daily, weekly, monthly, corporate plans</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Taglines */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💬 Tagline Options</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-xl font-semibold text-blue-900">"Ride Smart. Earn Smarter."</p>
              <p className="text-sm text-gray-600 mt-1">Emphasizes dual benefit—riders and owners</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-xl font-semibold text-green-900">"Your Ride. Your Way. Your Wealth."</p>
              <p className="text-sm text-gray-600 mt-1">Flexibility and wealth creation focus</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-xl font-semibold text-purple-900">"Mobility That Pays Back"</p>
              <p className="text-sm text-gray-600 mt-1">ROI-focused messaging</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="text-xl font-semibold text-orange-900">"Zipp Into Freedom"</p>
              <p className="text-sm text-gray-600 mt-1">Play on brand name, freedom-focused</p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
              <p className="text-xl font-semibold text-indigo-900">"Move India. Build Wealth."</p>
              <p className="text-sm text-gray-600 mt-1">National mission, economic empowerment</p>
            </div>
            <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
              <p className="text-xl font-semibold text-pink-900">"India's Smartest Ride"</p>
              <p className="text-sm text-gray-600 mt-1">Technology and intelligence positioning</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="font-semibold text-yellow-900">✨ Recommended Primary Tagline:</p>
            <p className="text-2xl font-bold text-yellow-900 mt-2">"Ride Smart. Earn Smarter."</p>
          </div>
        </section>

        {/* Elevator Pitch */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 Elevator Pitch</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">30-Second Pitch</h3>
              <p className="text-lg leading-relaxed">
                "ZippGo is revolutionizing India's ₹50,000 crore mobility market with a three-sided marketplace. 
                Riders get affordable bike rentals starting at ₹99. Vehicle owners turn idle bikes into ₹20,000 
                monthly passive income. Drivers get flexible employment. We've already onboarded 500+ vehicles 
                in Patna and are expanding to 10 cities this year. Unlike competitors who own fleets, our 
                asset-light model means we scale faster and cheaper. We're not just moving people—we're creating 
                India's largest vehicle sharing economy."
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">60-Second Pitch (Investors)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                "India has 25 crore two-wheelers, but 70% sit idle 20+ hours daily. That's ₹15 lakh crore in 
                underutilized assets. ZippGo unlocks this through a three-sided marketplace connecting riders, 
                owners, and drivers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our traction: In 6 months, we've hit ₹12 lakh monthly revenue in Patna alone with 500 vehicles 
                and 3,000+ active users. Unit economics are strong—25% take rate, 18-month payback on customer 
                acquisition.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're targeting tier 2/3 cities first—lower competition, higher margins, massive untapped demand. 
                Our asset-light model means we can launch a new city for under ₹15 lakhs vs ₹1+ crore for 
                traditional rentals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We're raising ₹5 crores to expand to 10 cities, reaching 10,000 vehicles and ₹2 crore monthly 
                revenue by next year. The Indian mobility market is exploding—we're building the infrastructure 
                to own it."
              </p>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🛡️ Why Trust Us?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-xl font-bold mb-2">100% Verified Vehicles</h3>
              <p className="text-gray-700">Every vehicle undergoes 25-point safety inspection. GPS tracking on all bikes.</p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-gray-700">No hidden charges. What you see is what you pay. Cancel anytime policy.</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold mb-2">Guaranteed Payouts for Partners</h3>
              <p className="text-gray-700">Vehicle owners get paid on time, every time. Minimum income guarantee.</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-700">Breakdown? Accident? Issue? Our team is available round the clock.</p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-bold mb-2">Insurance Covered</h3>
              <p className="text-gray-700">Comprehensive insurance on every ride. You're protected, always.</p>
            </div>

            <div className="bg-pink-50 rounded-lg p-6">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="text-xl font-bold mb-2">50,000+ Happy Customers</h3>
              <p className="text-gray-700">4.8/5 rating on Google. Read real reviews from real riders.</p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
            <p className="text-lg leading-relaxed">
              "At ZippGo, we're not just a mobility company—we're a community. Every ride should be safe, 
              affordable, and reliable. Every vehicle owner should earn fair returns. Every driver should 
              get dignified work. We're building this with integrity, transparency, and an obsessive focus 
              on your success. When you win, we win. That's the ZippGo way."
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}