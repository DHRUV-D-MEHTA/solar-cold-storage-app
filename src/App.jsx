import React, { useState } from 'react';
import { Menu, User, ArrowLeft, Thermometer, Droplets, Battery, Sun, Calendar, Phone, AlertCircle, CheckCircle } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedProduce, setSelectedProduce] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const produceData = {
    'Banana': {
      tamil: 'வாழைப்பழம்',
      tempC: '13–14',
      tempF: '55–57',
      humidity: '90–95',
      guidelines: 'Bananas must be stored at moderate cool temperatures to avoid chilling injury. Temperatures below 12 °C can cause peel discoloration and quality loss. High relative humidity helps prevent moisture loss and shriveling. These conditions are ideal for controlled ripening and short-term storage. Proper storage reduces wastage during transportation and market delays.'
    },
    'Mango': {
      tamil: 'மாம்பழம்',
      tempC: '12–13',
      tempF: '53–55',
      humidity: '85–90',
      guidelines: 'Mangoes should be stored at mild cold temperatures to maintain flavor and texture. Temperatures below 10 °C can cause chilling injury and uneven ripening. Moderate humidity prevents excessive moisture loss during storage. Cold storage allows seasonal buffering and better market price control. Proper conditions significantly reduce post-harvest spoilage.'
    },
    'Tomato': {
      tamil: 'தக்காளி',
      tempC: '10–13',
      tempF: '50–55',
      humidity: '90–95',
      guidelines: 'Tomatoes should be stored at moderate temperatures to avoid chilling injury. Temperatures below 10 °C can damage texture and flavor. High humidity reduces moisture loss and surface wrinkling. Cold storage helps farmers avoid sudden market price crashes. These conditions are ideal for short-term holding and distribution.'
    },
    'Onion': {
      tamil: 'வெங்காயம்',
      tempC: '4–7',
      tempF: '39–45',
      humidity: '65–70',
      guidelines: 'Onions require cooler temperatures with lower humidity than most vegetables. High humidity can lead to fungal growth and rotting. Proper ventilation is important during storage. Cold storage prevents sprouting and weight loss. Correct conditions allow long-term bulk storage.'
    },
    'Potato': {
      tamil: 'உருளைக்கிழங்கு',
      tempC: '4–7',
      tempF: '39–45',
      humidity: '~90',
      guidelines: 'Potatoes must be stored at cool temperatures to prevent sprouting. Temperatures below freezing can cause tissue damage. High humidity helps prevent excessive weight loss. Cold storage preserves firmness and quality. Proper conditions extend shelf life significantly.'
    },
    'Brinjal': {
      tamil: 'கத்திரிக்காய்',
      tempC: '7–10',
      tempF: '45–50',
      humidity: '90–95',
      guidelines: 'Brinjal is sensitive to chilling injury at very low temperatures. Storage below 7 °C can cause surface pitting and browning. High humidity reduces moisture loss and wilting. Short-term cold storage is recommended. Proper handling improves market shelf life.'
    },
    'Rice': {
      tamil: 'அரிசி',
      tempC: '10–15',
      tempF: '50–59',
      humidity: '60–70',
      guidelines: 'Rice requires cool, dry conditions to prevent moisture absorption and insect infestation. Low humidity is critical to avoid mold growth. Proper storage maintains grain quality and prevents spoilage. Temperature control extends shelf life significantly. These conditions are ideal for bulk storage.'
    },
    'Coconut': {
      tamil: 'தேங்காய்',
      tempC: '0–2',
      tempF: '32–36',
      humidity: '80–85',
      guidelines: 'Fresh coconuts need very cold temperatures for extended storage. Cool conditions slow down sprouting and moisture loss. Moderate humidity prevents excessive drying. Cold storage is essential for export quality. Proper conditions maintain freshness for weeks.'
    },
    'Sugarcane': {
      tamil: 'கரும்பு',
      tempC: '2–5',
      tempF: '36–41',
      humidity: '85–90',
      guidelines: 'Sugarcane requires cold storage to prevent sucrose loss and deterioration. Cool temperatures slow down enzymatic activity. High humidity prevents drying and weight loss. Proper storage maintains juice quality. These conditions extend processing window.'
    },
    'Groundnut': {
      tamil: 'நிலக்கடலை',
      tempC: '0–10',
      tempF: '32–50',
      humidity: '65–70',
      guidelines: 'Groundnuts must be stored in cool, low-humidity conditions to prevent aflatoxin formation. Moisture control is critical for quality. Cold storage prevents rancidity and insect damage. Proper conditions extend shelf life significantly. Temperature control maintains oil quality.'
    },
    'Maize': {
      tamil: 'மக்காச்சோளம்',
      tempC: '0–10',
      tempF: '32–50',
      humidity: '60–70',
      guidelines: 'Maize requires cool, dry storage to prevent mold and insect infestation. Low humidity is essential to maintain quality. Cold storage preserves nutritional value. Temperature control prevents spoilage. Proper conditions extend storage period significantly.'
    },
    'Milk': {
      tamil: 'பால்',
      tempC: '1–4',
      tempF: '34–39',
      humidity: '90–95',
      guidelines: 'Milk must be cooled immediately after collection to prevent spoilage. Low temperatures slow bacterial growth effectively. Consistent refrigeration ensures food safety. Cold storage extends shelf life during distribution. Temperature fluctuations should be avoided.'
    }
  };

  const produceList = [
    'Rice', 'Banana', 'Tomato', 'Onion', 'Mango', 'Potato',
    'Brinjal', 'Coconut', 'Sugarcane', 'Groundnut', 'Maize', 'Milk'
  ];

  const Watermark = () => (
    <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center opacity-15">
      <div className="text-gray-800 text-center px-8 transform -rotate-12 select-none max-w-2xl">
        <div className="text-xs leading-relaxed">
          DEMO VERSION • This showcases planned features and user flow • 
          Full implementation with hardware integration scheduled in next development phase • 
          TN-IMPACT 2026
        </div>
      </div>
    </div>
  );

  const TopAppBar = ({ title, subtitle, showBack, onBack }) => (
    <div className="bg-teal-600 text-white p-4 shadow-md flex items-center justify-between sticky top-0 z-50">
      <div className="w-12">
        {showBack ? (
          <button onClick={onBack} className="p-2 hover:bg-teal-700 rounded-full">
            <ArrowLeft size={24} />
          </button>
        ) : (
          <button onClick={() => setMenuOpen(true)} className="p-2 hover:bg-teal-700 rounded-full">
            <Menu size={24} />
          </button>
        )}
      </div>
      <div className="flex-1 text-center">
        <div className="font-semibold text-lg">{title}</div>
        <div className="text-sm opacity-90">{subtitle}</div>
      </div>
      <button onClick={() => setCurrentPage('profile')} className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center">
        <User size={24} />
      </button>
    </div>
  );

  const SideMenu = () => (
    <>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setMenuOpen(false)}>
          <div className="bg-white w-72 h-full shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-teal-600 text-white p-6">
              <h2 className="text-xl font-bold">Menu</h2>
            </div>
            <div className="p-4">
              <button
                onClick={() => {
                  setCurrentPage('select');
                  setMenuOpen(false);
                }}
                className="w-full text-left p-4 hover:bg-gray-100 rounded-lg mb-2"
              >
                <div className="font-semibold">Change Produce</div>
                <div className="text-sm text-gray-600">பொருளை மாற்றவும்</div>
              </button>
              <button
                onClick={() => {
                  setCurrentPage('service');
                  setMenuOpen(false);
                }}
                className="w-full text-left p-4 hover:bg-gray-100 rounded-lg"
              >
                <div className="font-semibold">Service & Maintenance</div>
                <div className="text-sm text-gray-600">சேவை மற்றும் பராமரிப்பு</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  const DashboardPage = () => (
    <div className="min-h-screen bg-gray-50 relative">
      <Watermark />
      <TopAppBar title="Current Status" subtitle="தற்போதைய நிலை" />
      <div className="p-4 space-y-4 relative z-10">
        <div className="bg-white rounded-3xl p-5 shadow-md flex items-center">
          <div className="bg-orange-100 p-3 rounded-2xl mr-4">
            <Thermometer className="text-orange-600" size={32} />
          </div>
          <div className="flex-1">
            <div className="font-semibold">Temperature</div>
            <div className="text-sm text-gray-600">வெப்பநிலை</div>
            <div className="text-2xl font-bold mt-1">12 °C | 53.6 °F</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-md flex items-center">
          <div className="bg-blue-100 p-3 rounded-2xl mr-4">
            <Droplets className="text-blue-600" size={32} />
          </div>
          <div className="flex-1">
            <div className="font-semibold">Humidity</div>
            <div className="text-sm text-gray-600">ஈரப்பதம்</div>
            <div className="text-2xl font-bold mt-1">90 %</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-md flex items-center">
          <div className="bg-green-100 p-3 rounded-2xl mr-4">
            <Battery className="text-green-600" size={32} />
          </div>
          <div className="flex-1">
            <div className="font-semibold">Battery Level</div>
            <div className="text-sm text-gray-600">பேட்டரி நிலை</div>
            <div className="text-2xl font-bold mt-1">78 %</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-md flex items-center">
          <div className="bg-yellow-100 p-3 rounded-2xl mr-4">
            <Sun className="text-yellow-600" size={32} />
          </div>
          <div className="flex-1">
            <div className="font-semibold">Solar Charging</div>
            <div className="text-sm text-gray-600">சூரிய சார்ஜிங்</div>
            <div className="text-2xl font-bold mt-1">1.2 kWh</div>
            <div className="text-xs text-gray-500">from Solar PWM</div>
          </div>
        </div>
      </div>
    </div>
  );

  const SelectProducePage = () => (
    <div className="min-h-screen bg-gray-50 relative">
      <Watermark />
      <TopAppBar title="Select Produce" subtitle="பொருளை தேர்ந்தெடுக்கவும்" />
      <div className="p-4 grid grid-cols-3 gap-3 relative z-10">
        {produceList.map((produce) => (
          <button
            key={produce}
            onClick={() => {
              setSelectedProduce(produce);
              setCurrentPage('settings');
            }}
            className="bg-white rounded-2xl p-3 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square bg-gradient-to-br from-teal-100 to-green-100 rounded-xl mb-2 flex items-center justify-center text-4xl">
              {produce === 'Rice' && '🌾'}
              {produce === 'Banana' && '🍌'}
              {produce === 'Tomato' && '🍅'}
              {produce === 'Onion' && '🧅'}
              {produce === 'Mango' && '🥭'}
              {produce === 'Potato' && '🥔'}
              {produce === 'Brinjal' && '🍆'}
              {produce === 'Coconut' && '🥥'}
              {produce === 'Sugarcane' && '🌱'}
              {produce === 'Groundnut' && '🥜'}
              {produce === 'Maize' && '🌽'}
              {produce === 'Milk' && '🥛'}
            </div>
            <div className="font-semibold text-sm">{produce}</div>
            <div className="text-xs text-gray-600">{produceData[produce].tamil}</div>
          </button>
        ))}
      </div>
    </div>
  );

  const ProduceSettingsPage = () => {
    const data = produceData[selectedProduce];
    
    return (
      <div className="min-h-screen bg-gray-50 pb-24 relative">
        <Watermark />
        <TopAppBar 
          title="Produce Settings" 
          subtitle="பொருள் அமைப்புகள்" 
          showBack 
          onBack={() => setCurrentPage('select')}
        />
        
        <div className="p-4 space-y-4 relative z-10">
          <div className="bg-white rounded-3xl p-6 shadow-md text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl flex items-center justify-center text-6xl mb-4">
              {selectedProduce === 'Rice' && '🌾'}
              {selectedProduce === 'Banana' && '🍌'}
              {selectedProduce === 'Tomato' && '🍅'}
              {selectedProduce === 'Onion' && '🧅'}
              {selectedProduce === 'Mango' && '🥭'}
              {selectedProduce === 'Potato' && '🥔'}
              {selectedProduce === 'Brinjal' && '🍆'}
              {selectedProduce === 'Coconut' && '🥥'}
              {selectedProduce === 'Sugarcane' && '🌱'}
              {selectedProduce === 'Groundnut' && '🥜'}
              {selectedProduce === 'Maize' && '🌽'}
              {selectedProduce === 'Milk' && '🥛'}
            </div>
            <div className="text-xl font-bold">{selectedProduce}</div>
            <div className="text-gray-600">{data.tamil}</div>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-md">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-semibold">Required Temperature</div>
                <div className="text-sm text-gray-600">தேவையான வெப்பநிலை</div>
              </div>
              <button className="px-4 py-2 border-2 border-orange-500 text-orange-600 rounded-full text-sm font-semibold">
                <span>Edit</span>
                <span className="text-xs"> திருத்தவும்</span>
              </button>
            </div>
            <div className="text-3xl font-bold text-center my-4">
              {data.tempC} °C  |  {data.tempF} °F
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-md">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-semibold">Required Humidity</div>
                <div className="text-sm text-gray-600">தேவையான ஈரப்பதம்</div>
              </div>
              <button className="px-4 py-2 border-2 border-orange-500 text-orange-600 rounded-full text-sm font-semibold">
                <span>Edit</span>
                <span className="text-xs"> திருத்தவும்</span>
              </button>
            </div>
            <div className="text-3xl font-bold text-center my-4">
              {data.humidity} %
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-md">
            <div className="font-semibold mb-2">Recommended Storage Guidelines</div>
            <div className="text-sm text-gray-600 mb-2">பரிந்துரைக்கப்பட்ட சேமிப்பு வழிமுறைகள்</div>
            <p className="text-sm leading-relaxed text-gray-700">{data.guidelines}</p>
          </div>

          <div className="text-center">
            <button className="bg-blue-100 text-blue-600 px-6 py-3 rounded-full font-semibold">
              Ask AI
            </button>
            <div className="text-xs text-gray-500 mt-2">
              (Future Implementation)
              <br />
              (எதிர்கால அம்சம்)
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-50 to-transparent z-20">
          <button
            onClick={() => setShowConfirmation(true)}
            className="w-full bg-teal-600 text-white py-4 rounded-full font-semibold text-lg shadow-lg"
          >
            <div>Confirm & Set Parameters</div>
            <div className="text-sm">அமைப்புகளை உறுதிப்படுத்தவும்</div>
          </button>
        </div>

        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-6 max-w-sm w-full">
              <div className="text-center mb-4">
                <div className="text-lg font-semibold mb-2">
                  The {selectedProduce} storage settings have been set
                </div>
                <div className="text-gray-600 mb-4">
                  Temperature: {data.tempC} °C | {data.tempF} °F<br />
                  Humidity: {data.humidity} %
                </div>
                <div className="text-sm text-gray-600">
                  சேமிப்பு அமைப்புகள் வெற்றிகரமாக அமைக்கப்பட்டுள்ளன
                </div>
              </div>
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  setCurrentPage('dashboard');
                }}
                className="w-full bg-teal-600 text-white py-3 rounded-full font-semibold"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const ServicePage = () => (
    <div className="min-h-screen bg-gray-50 relative">
      <Watermark />
      <TopAppBar 
        title="Service & Maintenance" 
        subtitle="சேவை மற்றும் பராமரிப்பு" 
        showBack 
        onBack={() => setCurrentPage('dashboard')}
      />
      
      <div className="p-4 space-y-4 relative z-10">
        <div className="bg-white rounded-3xl p-5 shadow-md">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-2xl mr-4">
              <CheckCircle className="text-green-600" size={28} />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Maintenance Status</div>
              <div className="text-sm text-gray-600 mb-1">பராமரிப்பு நிலை</div>
              <div className="font-semibold text-green-600">System Health: Good</div>
              <div className="text-sm text-green-600">அமைப்பு நிலை: நல்லது</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-md">
          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-2xl mr-4">
              <Calendar className="text-gray-600" size={28} />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Last Service</div>
              <div className="text-sm text-gray-600 mb-1">கடைசி சேவை</div>
              <div className="text-lg font-semibold">12 January 2026</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-md">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-2xl mr-4">
              <CheckCircle className="text-green-600" size={28} />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Alerts</div>
              <div className="text-sm text-gray-600 mb-1">எச்சரிக்கைகள்</div>
              <div className="text-green-600 font-semibold">No active issues</div>
              <div className="text-sm text-green-600">எந்த பிரச்சனையும் இல்லை</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-md">
          <div className="font-semibold text-lg mb-2">Have Issues?</div>
          <div className="text-sm text-gray-600 mb-1">பிரச்சனை உள்ளதா?</div>
          <p className="text-sm text-gray-600 mb-2">
            Facing problems with cooling, power, or system performance?
          </p>
          <p className="text-xs text-gray-500">
            குளிர்சாதனம், மின்சாரம் அல்லது செயல்திறன் தொடர்பான பிரச்சனைகளா?
          </p>
        </div>

        <button className="w-full bg-orange-500 text-white py-4 rounded-full font-semibold shadow-lg">
          <div>Book Service Appointment</div>
          <div className="text-sm">சேவை நேரத்தை பதிவு செய்யவும்</div>
        </button>

        <div className="bg-white rounded-3xl p-5 shadow-md">
          <div className="font-semibold mb-2">Need Help?</div>
          <div className="text-sm text-gray-600 mb-3">உதவி வேண்டுமா?</div>
          
          <div className="flex items-center">
            <div className="bg-teal-100 p-3 rounded-2xl mr-4">
              <Phone className="text-teal-600" size={28} />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-600">Call at / அழைக்கவும்</div>
              <div className="text-2xl font-bold text-teal-600">1234567890</div>
              <div className="text-xs text-gray-500 mt-1">
                Local Technician / Service Center<br />
                உள்ளூர் தொழில்நுட்ப நிபுணர்
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className="min-h-screen bg-gray-50 relative">
      <Watermark />
      <TopAppBar 
        title="Profile" 
        subtitle="சுயவிவரம்" 
        showBack 
        onBack={() => setCurrentPage('dashboard')}
      />
      
      <div className="p-4 space-y-4 relative z-10">
        <div className="bg-white rounded-3xl p-6 shadow-md text-center">
          <div className="w-24 h-24 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
            U
          </div>
          <div className="text-xl font-bold">User Name</div>
          <div className="text-gray-600">Farmer</div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-md">
          <div className="mb-4">
            <div className="text-sm text-gray-600 mb-1">Phone Number / தொலைபேசி எண்</div>
            <div className="text-lg font-semibold">1234567890</div>
          </div>
          
          <div className="mb-4">
            <div className="text-sm text-gray-600 mb-1">Email ID / மின்னஞ்சல்</div>
            <div className="text-lg font-semibold">user@gmail.com</div>
          </div>
          
          <div>
            <div className="text-sm text-gray-600 mb-1">Address / முகவரி</div>
            <div className="text-lg font-semibold">
              123, Village Road<br />
              Coimbatore District<br />
              Tamil Nadu - 641001
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      <SideMenu />
      
      {currentPage === 'dashboard' && <DashboardPage />}
      {currentPage === 'select' && <SelectProducePage />}
      {currentPage === 'settings' && selectedProduce && <ProduceSettingsPage />}
      {currentPage === 'service' && <ServicePage />}
      {currentPage === 'profile' && <ProfilePage />}
    </div>
  );
};

export default App;