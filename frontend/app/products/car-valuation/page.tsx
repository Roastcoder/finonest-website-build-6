"use client"

import React, { useState } from 'react';
import { 
  Car, 
  CheckCircle2, 
  AlertCircle, 
  Gauge, 
  Calendar, 
  Fuel, 
  Settings, 
  FileText, 
  Loader2, 
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap
} from 'lucide-react';

// --- Components Defined Outside to Prevent Re-renders ---

const ProgressBar = ({ step }) => (
  <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
    <div 
      className="bg-blue-600 h-full transition-all duration-500 ease-out"
      style={{ width: `${(step / 3) * 100}%` }}
    />
  </div>
);

const ChecklistItem = ({ label, value, options, field, onChange }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <label className="block text-sm font-semibold text-slate-700 mb-3">{label}</label>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(field, opt)}
          className={`px-4 py-2 text-sm rounded-full border transition-all ${
            value === opt
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm ring-2 ring-emerald-100'
              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-white hover:border-slate-300'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

const Step1_BasicInfo = ({ formData, handleInputChange, setFormData, setStep, fetchRCData }) => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <FileText size={16} /> RC Number
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            name="rcNumber"
            value={formData.rcNumber}
            onChange={handleInputChange}
            placeholder="e.g. MH02DN1234"
            className="flex-1 p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition uppercase"
          />
          <button
            type="button"
            onClick={fetchRCData}
            disabled={!formData.rcNumber.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 text-sm"
          >
            Fetch
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <Gauge size={16} /> Kilometers Driven
        </label>
        <input
          type="number"
          name="km"
          value={formData.km}
          onChange={handleInputChange}
          placeholder="e.g. 45000"
          className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <Car size={16} /> Make
        </label>
        <input
          type="text"
          name="make"
          value={formData.make}
          onChange={handleInputChange}
          placeholder="e.g. Maruti Suzuki"
          className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <Car size={16} /> Model
        </label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleInputChange}
          placeholder="e.g. Swift"
          className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <Calendar size={16} /> Year
        </label>
        <select
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
        >
          {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
          <Fuel size={16} /> Fuel Type
        </label>
        <div className="grid grid-cols-3 gap-2">
          {['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid'].map(type => (
            <button
              key={type}
              onClick={() => setFormData(prev => ({ ...prev, fuel: type }))}
              className={`p-2 text-sm rounded-lg border transition-all ${
                formData.fuel === type 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
    
    <div className="pt-6 flex justify-end">
      <button
        onClick={() => setStep(2)}
        disabled={!formData.make || !formData.model || !formData.km}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
      >
        Next Step <ChevronRight size={20} />
      </button>
    </div>
  </div>
);

const Step2_Checklist = ({ formData, handleChecklistChange, setStep, calculateValuation, loading }) => (
  <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ChecklistItem 
        label="Tyre Condition" 
        field="tyres"
        value={formData.checklist.tyres}
        options={['New', 'Good', 'Worn Out', 'Bald']} 
        onChange={handleChecklistChange}
      />
      <ChecklistItem 
        label="Exterior Body" 
        field="body"
        value={formData.checklist.body}
        options={['Excellent', 'Minor Scratches', 'Dents Present', 'Repainted']} 
        onChange={handleChecklistChange}
      />
      <ChecklistItem 
        label="Battery Health" 
        field="battery"
        value={formData.checklist.battery}
        options={['New', 'Good', 'Weak', 'Dead']} 
        onChange={handleChecklistChange}
      />
      <ChecklistItem 
        label="Engine Condition" 
        field="engine"
        value={formData.checklist.engine}
        options={['Smooth', 'Noisy', 'Smoke Issue', 'Leakage']} 
        onChange={handleChecklistChange}
      />
      <ChecklistItem 
        label="Insurance Status" 
        field="insurance"
        value={formData.checklist.insurance}
        options={['Comprehensive', 'Third Party', 'Expired']} 
        onChange={handleChecklistChange}
      />
      <ChecklistItem 
        label="Accident History" 
        field="accidents"
        value={formData.checklist.accidents}
        options={['None', 'Minor', 'Major Repair']} 
        onChange={handleChecklistChange}
      />
    </div>

    <div className="flex justify-between pt-6">
      <button
        onClick={() => setStep(1)}
        className="text-slate-500 hover:text-slate-800 font-medium px-6 py-3"
      >
        Back
      </button>
      <button
        onClick={calculateValuation}
        disabled={loading}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition shadow-lg hover:shadow-xl disabled:opacity-70"
      >
        {loading ? <Loader2 className="animate-spin" /> : <Zap size={20} />}
        Get Valuation
      </button>
    </div>
  </div>
);

const Step3_Result = ({ valuation, formData, setStep, setValuation }) => {
  if (!valuation) return null;
  
  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      {/* Main Valuation Card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 text-center space-y-2">
          <h2 className="text-slate-300 uppercase tracking-widest text-sm font-semibold">Estimated Market Value</h2>
          <div className="text-5xl md:text-6xl font-bold font-mono tracking-tight flex justify-center items-center gap-2">
            <span className="text-2xl text-slate-400">₹</span>
            {valuation.min_price}L <span className="text-slate-500 text-4xl">-</span> {valuation.max_price}L
          </div>
          <p className="text-slate-400 mt-2">
            {formData.year} {formData.make} {formData.model} • {formData.km} km
          </p>
        </div>
      </div>

      {/* Analysis Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-semibold text-lg text-slate-800 mb-4 flex items-center gap-2">
            <TrendingUp className="text-blue-600" size={20} /> Market Analysis
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            {valuation.analysis}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm font-medium text-slate-500">Demand Rating:</span>
            <span className={`text-sm font-bold px-3 py-1 rounded-full ${
              valuation.demand_rating === 'High' ? 'bg-green-100 text-green-700' :
              valuation.demand_rating === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
            }`}>
              {valuation.demand_rating}
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-semibold text-lg text-slate-800 mb-4 flex items-center gap-2">
            <ShieldCheck className="text-emerald-600" size={20} /> Vehicle Health
          </h3>
          <div className="space-y-3">
            <div>
              <span className="text-xs font-semibold text-green-600 uppercase">Positives</span>
              <ul className="mt-1 space-y-1">
                {valuation.positive_factors?.map((factor, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-green-500 mt-1 shrink-0" /> {factor}
                  </li>
                ))}
              </ul>
            </div>
            {valuation.negative_factors?.length > 0 && (
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-semibold text-amber-600 uppercase">Areas of Concern</span>
                  <ul className="mt-1 space-y-1">
                  {valuation.negative_factors?.map((factor, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <AlertCircle size={14} className="text-amber-500 mt-1 shrink-0" /> {factor}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <button 
        onClick={() => { setStep(1); setValuation(null); }}
        className="w-full py-4 bg-slate-100 text-slate-600 font-semibold rounded-xl hover:bg-slate-200 transition"
      >
        Check Another Vehicle
      </button>
    </div>
  );
};

const CarValuationApp = () => {
  // --- State Management ---
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [valuation, setValuation] = useState(null);
  const [error, setError] = useState(null);
  const [customApiKey, setCustomApiKey] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const [formData, setFormData] = useState({
    rcNumber: '',
    make: '',
    model: '',
    year: '2019',
    trim: '',
    km: '',
    fuel: 'Petrol',
    transmission: 'Manual',
    owners: '1',
    checklist: {
      tyres: 'Good',
      battery: 'Good',
      body: 'Minor Scratches',
      engine: 'Smooth',
      insurance: 'Comprehensive',
      serviceHistory: 'Available',
      accidents: 'None'
  });

  // --- Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleChecklistChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      checklist: { ...prev.checklist, [key]: value }
    }));
  };

  const fetchRCData = async () => {
    if (!formData.rcNumber.trim()) return;
    
    try {
      const response = await fetch('/api/rc-lookup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rcNumber: formData.rcNumber
        })
      });
      
      const result = await response.json();
      
      if (result.success && result.data) {
        const data = result.data;
        const manufacturingYear = data.manufacturing_date ? data.manufacturing_date.split('/')[1] || data.manufacturing_date.split('-')[0] : "";
        const brandName = data.maker_description?.includes('MARUTI') ? 'Maruti Suzuki' :
                         data.maker_description?.includes('HONDA') ? 'Honda' :
                         data.maker_description?.includes('HYUNDAI') ? 'Hyundai' :
                         data.maker_description?.includes('TATA') ? 'Tata' :
                         data.maker_description?.includes('MAHINDRA') ? 'Mahindra' :
                         data.maker_description?.includes('TOYOTA') ? 'Toyota' :
                         data.maker_description?.split(' ')[0] || "";
        
        setFormData(prev => ({
          ...prev,
          make: brandName,
          model: data.maker_model || "",
          year: manufacturingYear,
          fuel: data.fuel_type?.toLowerCase() === 'petrol' ? 'Petrol' : 
                data.fuel_type?.toLowerCase() === 'diesel' ? 'Diesel' :
                data.fuel_type?.toLowerCase() === 'cng' ? 'CNG' : 'Petrol'
        }));
    } catch (error) {
      console.error('RC fetch error:', error);
  };

  const calculateValuation = async () => {
    setLoading(true);
    setError(null);
    setValuation(null);

    // Use environment key or user provided key
    const apiKey = customApiKey || "AIzaSyBt26YmQTMzLAazF0JVLA3Sam3VXkcTIi8";
    
    const prompt = `
      Act as an expert used car valuator for the Indian market. 
      Provide a valuation estimation based on the following details.
      
      Vehicle Details:
      - RC Number: ${formData.rcNumber} (Use this to deduce state/RTO context if possible)
      - Make/Model: ${formData.make} ${formData.model} ${formData.trim}
      - Year: ${formData.year}
      - Kilometers Driven: ${formData.km}
      - Fuel Type: ${formData.fuel}
      - Transmission: ${formData.transmission}
      - Number of Owners: ${formData.owners}

      Condition Checklist:
      - Tyres: ${formData.checklist.tyres}
      - Battery: ${formData.checklist.battery}
      - Body Condition: ${formData.checklist.body}
      - Engine Sound: ${formData.checklist.engine}
      - Insurance: ${formData.checklist.insurance}
      - Service History: ${formData.checklist.serviceHistory}
      - Accident History: ${formData.checklist.accidents}

      Task:
      1. Estimate the fair market price range (Buying and Selling price) in INR (Lakhs).
      2. Provide a brief analysis of the condition.
      3. Give positive and negative factors.
      
      Output ONLY valid JSON in this format:
      {
        "min_price": "Number (in Lakhs, e.g. 4.50)",
        "max_price": "Number (in Lakhs, e.g. 5.10)",
        "currency": "₹",
        "analysis": "String (2-3 sentences explaining the value based on condition and market)",
        "positive_factors": ["Array of strings"],
        "negative_factors": ["Array of strings"],
        "demand_rating": "High/Medium/Low"
    `;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              responseMimeType: "application/json"
          }),
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);

      const data = await response.json();
      const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (resultText) {
        const parsedResult = JSON.parse(resultText);
        setValuation(parsedResult);
        setStep(3); // Move to result view
      } else {
        throw new Error("No valuation data received.");

    } catch (err) {
      console.error(err);
      // Model-specific base pricing
      const modelPricing = {
        'CRETA': 15.0, 'VERNA': 12.0, 'I20': 8.0, 'VENUE': 10.0,
        'SWIFT': 6.0, 'BALENO': 7.5, 'DZIRE': 7.0, 'VITARA BREZZA': 9.0,
        'CITY': 12.0, 'AMAZE': 8.0, 'WR-V': 9.0, 'JAZZ': 7.5,
        'INNOVA': 18.0, 'FORTUNER': 35.0, 'CAMRY': 45.0,
        'NEXON': 8.5, 'HARRIER': 16.0, 'SAFARI': 18.0,
        'XUV500': 14.0, 'SCORPIO': 13.0, 'BOLERO': 8.0
      };
      
      let baseValue = 10.0; // Default base
      
      // Find model-specific pricing
      const modelKey = Object.keys(modelPricing).find(key => 
        formData.model.toUpperCase().includes(key)
      );
      if (modelKey) {
        baseValue = modelPricing[modelKey];
      
      // Brand multiplier (more conservative)
      const brandMultiplier = {
        'Maruti Suzuki': 0.9,
        'Hyundai': 1.0,
        'Honda': 1.1,
        'Toyota': 1.2,
        'Tata': 0.85,
        'Mahindra': 0.9,
        'BMW': 1.8,
        'Mercedes-Benz': 2.0,
        'Audi': 1.9
      }[formData.make] || 1.0;
      
      baseValue *= brandMultiplier;
      
      // Reduced depreciation (5% per year)
      const yearFactor = Math.max(0, (2024 - parseInt(formData.year)) * 0.05);
      
      // KM depreciation (more realistic)
      const kmDriven = parseInt(formData.km || '50000');
      const kmFactor = Math.min(0.2, kmDriven / 150000); // Max 20% depreciation
      
      // Condition factors
      const conditionMultiplier = {
        tyres: formData.checklist.tyres === 'New' ? 1.02 : formData.checklist.tyres === 'Bald' ? 0.95 : 1.0,
        body: formData.checklist.body === 'Excellent' ? 1.05 : formData.checklist.body === 'Repainted' ? 0.9 : 0.98,
        engine: formData.checklist.engine === 'Smooth' ? 1.0 : formData.checklist.engine === 'Leakage' ? 0.8 : 0.95,
        accidents: formData.checklist.accidents === 'None' ? 1.0 : formData.checklist.accidents === 'Major Repair' ? 0.75 : 0.9
      };
      
      const totalConditionFactor = Object.values(conditionMultiplier).reduce((a, b) => a * b, 1);
      
      const calculatedValue = baseValue * (1 - yearFactor - kmFactor) * totalConditionFactor;
      const minPrice = Math.max(calculatedValue * 0.9, 2.0);
      const maxPrice = Math.max(calculatedValue * 1.1, 2.5);
      
      setValuation({
        min_price: minPrice.toFixed(1),
        max_price: maxPrice.toFixed(1),
        analysis: `Based on ${formData.year} ${formData.make} ${formData.model} with ${formData.km} km. Depreciation factors and condition assessment applied for market estimation.`,
        positive_factors: [
          formData.checklist.accidents === 'None' ? 'No accident history' : null,
          formData.checklist.engine === 'Smooth' ? 'Good engine condition' : null,
          formData.checklist.tyres === 'New' || formData.checklist.tyres === 'Good' ? 'Good tyre condition' : null,
          parseInt(formData.km || '0') < 50000 ? 'Low mileage' : null
        ].filter(Boolean),
        negative_factors: [
          parseInt(formData.year) < 2015 ? 'Older vehicle' : null,
          parseInt(formData.km || '0') > 100000 ? 'High mileage' : null,
          formData.checklist.accidents !== 'None' ? 'Accident history present' : null,
          formData.checklist.body === 'Repainted' ? 'Body repainted' : null
        ].filter(Boolean),
        demand_rating: brandMultiplier > 1.2 ? "High" : brandMultiplier < 0.9 ? "Low" : "Medium"
      });
      setStep(3);
    } finally {
      setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-700">
            <Car size={28} strokeWidth={2.5} />
            <h1 className="text-xl font-bold tracking-tight text-slate-900">AutoValue<span className="text-blue-600">AI</span></h1>
          </div>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition"
          >
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* API Key Settings (Hidden by default) */}
      {showSettings && (
        <div className="bg-slate-800 text-slate-200 px-6 py-4 animate-in slide-in-from-top-2">
          <div className="max-w-2xl mx-auto">
            <label className="text-xs font-semibold uppercase tracking-wider mb-2 block text-slate-400">API Configuration</label>
            <div className="flex gap-2">
              <input 
                type="password" 
                value={customApiKey}
                onChange={(e) => setCustomApiKey(e.target.value)}
                placeholder="Paste Gemini API Key here (Optional if environment configured)"
                className="flex-1 bg-slate-700 border-none rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Leave empty if the application environment already has the key configured.
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-8">
        {step < 3 && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {step === 1 ? 'Vehicle Details' : 'Condition Checklist'}
            </h2>
            <p className="text-slate-500 mb-6">
              {step === 1 ? 'Enter the registration and basic details.' : 'Help us assess the condition for an accurate price.'}
            </p>
            <ProgressBar step={step} />
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 flex items-start gap-3 border border-red-100">
            <AlertCircle className="shrink-0 mt-0.5" size={18} />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {step === 1 && (
          <Step1_BasicInfo 
            formData={formData} 
            handleInputChange={handleInputChange} 
            setFormData={setFormData}
            setStep={setStep}
            fetchRCData={fetchRCData}
          />
        )}
        
        {step === 2 && (
          <Step2_Checklist 
            formData={formData} 
            handleChecklistChange={handleChecklistChange} 
            setStep={setStep}
            calculateValuation={calculateValuation}
            loading={loading}
          />
        )}
        
        {step === 3 && (
          <Step3_Result 
            valuation={valuation} 
            formData={formData} 
            setStep={setStep}
            setValuation={setValuation}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto px-6 text-center text-slate-400 text-xs py-8">
        <p>Valuation provided by Gemini AI. Actual market price may vary based on physical inspection.</p>
        <p className="mt-2">© {new Date().getFullYear()} AutoValue AI</p>
      </footer>
    </div>
  );
};

export default CarValuationApp;