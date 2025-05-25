import React from "react"; // Removed useState as it's not used in MobileAppIntro directly now
import { Card, CardContent } from "./ui/card"; // Assuming these are local
import { Button } from "./ui/button"; // Assuming these are local
import { Speaker, Smartphone, PlayCircle, Sparkles } from "lucide-react"; // Added Sparkles, removed ChevronDown/Up
import '../styles/SERPage.css'; // Keep existing styles for now

// AccordionItem component is removed as it's replaced by SERTrainingProcess

const serTrainingStepsNew = [ // Renamed to avoid conflict if old data was somehow cached/merged
  {
    title: "Understanding SER and Project Motivation",
    details: [
      "SER identifies emotions in speech using pitch, tone, and rhythm.",
      "Deep learning improves accuracy over traditional methods.",
      "Key applications: customer service, safety systems, AI, mental health.",
    ],
  },
  {
    title: "Dataset Integration",
    details: [
      "Used datasets: RAVDESS, CREMA-D, TESS, SAVEE.",
      "Unified into a single DataFrame with standardized emotion labels.",
      "Extracted emotion tags from filenames.",
    ],
  },
  {
    title: "Data Visualization",
    details: [
      "Count plots ensured balanced data distribution.",
      "Waveplots & spectrograms revealed time-frequency patterns.",
    ],
  },
  {
    title: "Data Augmentation",
    details: [
      "Noise Injection: Adds background noise.",
      "Time Stretching: Alters speed without changing pitch.",
      "Pitch & Time Shifting to increase diversity.",
    ],
  },
  {
    title: "Feature Extraction",
    details: [
      "Extracted ZCR, Chroma, MFCC, RMS Energy, Mel Spectrogram.",
      "Features form model input for learning emotional cues.",
    ],
  },
  {
    title: "Libraries & Tools Used",
    details: [
      "Librosa for audio analysis.",
      "Keras/TensorFlow for model training.",
      "Pandas, NumPy for data processing.",
      "Matplotlib, Seaborn for visualization.",
      "Sklearn for preprocessing and evaluation.",
    ],
  },
];

const SERTrainingProcess = () => {
  return (
    // Using Tailwind-like classes from user's provided JSX for this section
    // The .ser-page-container styles might need adjustment if this section is meant to have a different background
    <div className="bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-6 py-12 rounded-lg shadow-md"> {/* Applied some base styling */}
      <div className="max-w-6xl mx-auto"> {/* Changed max-w-5xl to max-w-6xl to match hero */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-16 tracking-tight"> {/* Adjusted h1 to match user, added md:text-5xl */}
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            Speech Emotion Recognition
          </span>
          <div className="text-lg text-gray-500 mt-2 font-medium">
            Deep Learning Training Pipeline Overview
          </div>
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {serTrainingStepsNew.map((step, index) => ( // Using renamed data array
            <div
              key={index}
              className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-3xl p-6 hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-indigo-600 font-bold text-2xl">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-indigo-700 mb-2"> {/* Changed h2 to match user */}
                    {step.title}
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {step.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default function MobileAppIntro() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 ser-page-container">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center my-20 md:my-32">
        <div className="text-left">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
            AI-Powered Voice Analysis
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
            Speech Emotion <span className="text-teal-400">Recognition</span> Mobile App
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12">
            Experience real-time emotion detection directly from your mobile device. Our app leverages deep learning to understand the nuances of your voice and identify underlying emotions.
          </p>
        </div>
        <div
          style={{
            maxWidth: '960px',      // container max width
            margin: '40px auto',    // center horizontally with vertical margin
            padding: '24px 32px',   // padding inside container
            backgroundColor: '#f9fafb',  // light gray background
            borderRadius: '12px',   // rounded corners
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // subtle shadow
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '3rem',            // space between image blocks
          }}
        >
          {[{
            src: "/images/MainPage.png",
            label: "Main View"
          }, {
            src: "/images/Recording.png",
            label: "Recording Screen"
          }, {
            src: "/images/Login Screen.png",
            label: "Login Screen"
          }].map(({ src, label }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1rem',
                border: '2px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',  // white background inside each block
              }}
            >
              <img
                src={src}
                alt={label}
                style={{ height: '250px', width: 'auto', objectFit: 'contain' }}
              />
              <span style={{ marginTop: '0.75rem', color: '#4a5568', fontWeight: '600' }}>{label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Rest of the page content */}
      <div className="max-w-4xl mx-auto">
        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6">
              <Smartphone className="text-blue-600 w-10 h-10 mb-4 mx-auto" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2 text-center">Mobile-Friendly</h2>
              <p className="text-gray-600 text-sm text-center">
                Intuitive interface designed for smartphones with simple record and submit functionality.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6">
              <PlayCircle className="text-green-600 w-10 h-10 mb-4 mx-auto" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2 text-center">Live Emotion Detection</h2>
              <p className="text-gray-600 text-sm text-center">
                Record your voice and get real-time emotion classification using our trained deep learning model.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-xl rounded-2xl">
            <CardContent className="p-6">
              <Speaker className="text-red-600 w-10 h-10 mb-4 mx-auto" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2 text-center">Audio Intelligence</h2>
              <p className="text-gray-600 text-sm text-center">
                Utilizes MFCC, Chroma, and other audio features to analyze and interpret user emotions accurately.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-10">
            <a 
              href="https://github.com/kpang01/FYP" // <-- Replace with your actual repo URL
              target="_blank"
              rel="noopener noreferrer"
            >
          <Button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 text-lg rounded-xl">
            Github Repository
            <span className="ml-2">🔗</span>
            
          </Button>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200"> {/* Technology Stack Section */}
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/Flutter/flutter-original-wordmark.svg" alt="Flutter" className="h-16 mx-auto mb-2"/>
              <p className="text-md font-semibold text-gray-700">Flutter</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg" alt="Python" className="h-16 mx-auto mb-2"/>
              <p className="text-md font-semibold text-gray-700">Python</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original-wordmark.svg" alt="TensorFlow" className="h-16 mx-auto mb-2"/>
              <p className="text-md font-semibold text-gray-700">TensorFlow</p>
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original-wordmark.svg" alt="Flask" className="h-16 mx-auto mb-2"/>
              <p className="text-md font-semibold text-gray-700">Flask</p>
            </div>
          </div>
        </div>
        
        {/* Model Training Section using SERTrainingProcess component */}
        <div className="mt-12 pt-8 border-t border-gray-200">
             <SERTrainingProcess />
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200"> {/* Demo Videos Section */}
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Watch Demos</h2>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              Explore various demonstrations of the Speech Emotion Recognition mobile app in our Google Drive folder.
            </p>
            <a 
              href="https://drive.google.com/drive/folders/1-VWR3zWkHHyl1oeUQKtBvUgHPY-UMO6q" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105"
            >
              View Demo Videos on Google Drive
            </a>
            <p className="text-sm text-gray-500 mt-3">
              (You will be redirected to Google Drive. Please ensure you have access to the folder.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
