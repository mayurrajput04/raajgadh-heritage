'use client';

import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { Download, Share2, ExternalLink } from 'lucide-react';
import { Language } from '@/types';

interface QRCodeGeneratorProps {
  language: Language;
}

export default function QRCodeGenerator({ language }: QRCodeGeneratorProps) {
  // This will be automatically updated after deployment
  const [url, setUrl] = useState('https://raajgadh-heritage.vercel.app');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Automatically use the current URL in production
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.origin;
      // Only use actual URL if not localhost
      if (!currentUrl.includes('localhost') && !currentUrl.includes('127.0.0.1')) {
        setUrl(currentUrl);
      }
    }
  }, []);

  const downloadQR = () => {
    const svg = document.getElementById('qr-code');
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Create larger QR code for better scanning
        canvas.width = 512;
        canvas.height = 512;
        ctx!.fillStyle = 'white';
        ctx!.fillRect(0, 0, 512, 512);
        ctx?.drawImage(img, 0, 0, 512, 512);
        const pngFile = canvas.toDataURL('image/png');
        
        const downloadLink = document.createElement('a');
        downloadLink.download = 'raajgadh-heritage-qr.png';
        downloadLink.href = pngFile;
        downloadLink.click();
      };
      
      img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
    }
  };

  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: language === 'mr' ? 'राजगड वारसा' : 'Raajgadh Heritage',
          text: language === 'mr' ? 'राजगड किल्ल्याची वेबसाइट पहा' : 'Visit Raajgadh Fort Website',
          url: url,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url);
      alert(language === 'mr' ? 'लिंक कॉपी केली!' : 'Link copied to clipboard!');
    }
  };

  const openInNewTab = () => {
    window.open(url, '_blank');
  };

  if (!mounted) {
    return (
      <div className="bg-sandstone-800/50 backdrop-blur-sm p-8 rounded-lg border border-heritage-gold/20">
        <div className="animate-pulse">
          <div className="h-8 bg-heritage-gold/20 rounded mb-4"></div>
          <div className="w-[256px] h-[256px] bg-heritage-gold/20 rounded mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sandstone-800/50 backdrop-blur-sm p-8 rounded-lg border border-heritage-gold/20 max-w-md mx-auto">
      <h3 className={`text-2xl font-bold text-heritage-gold mb-2 text-center ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
        {language === 'mr' ? 'QR कोड' : 'QR Code'}
      </h3>
      
      <p className={`text-sandstone-300 text-sm text-center mb-6 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
        {language === 'mr' 
          ? 'कुठूनही या वेबसाइटला भेट द्या'
          : 'Visit this website from anywhere in the world'}
      </p>

      {/* QR Code */}
      <div className="bg-white p-6 rounded-lg inline-block mb-6 mx-auto flex justify-center">
        <QRCode
          id="qr-code"
          value={url}
          size={256}
          level="H"
          className="max-w-full h-auto"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={downloadQR}
          className="w-full bg-heritage-gold text-heritage-brown px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-saffron-400 transition-colors"
        >
          <Download size={20} />
          <span className={language === 'mr' ? 'font-marathi' : 'font-english'}>
            {language === 'mr' ? 'QR कोड डाउनलोड करा' : 'Download QR Code'}
          </span>
        </button>

        <button
          onClick={shareLink}
          className="w-full bg-sandstone-700 text-heritage-gold px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-sandstone-600 transition-colors border border-heritage-gold/30"
        >
          <Share2 size={20} />
          <span className={language === 'mr' ? 'font-marathi' : 'font-english'}>
            {language === 'mr' ? 'लिंक सामायिक करा' : 'Share Link'}
          </span>
        </button>

        <button
          onClick={openInNewTab}
          className="w-full bg-sandstone-700 text-heritage-gold px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-sandstone-600 transition-colors border border-heritage-gold/30"
        >
          <ExternalLink size={20} />
          <span className={language === 'mr' ? 'font-marathi' : 'font-english'}>
            {language === 'mr' ? 'वेबसाइट उघडा' : 'Open Website'}
          </span>
        </button>
      </div>

      {/* URL Display */}
      <div className="mt-6 p-4 bg-sandstone-900 rounded-lg border border-heritage-gold/20">
        <p className="text-xs text-sandstone-500 mb-1 text-center">
          {language === 'mr' ? 'वेबसाइट URL:' : 'Website URL:'}
        </p>
        <p className="text-sm text-heritage-gold text-center break-all font-mono">
          {url}
        </p>
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-saffron-900/20 rounded-lg border border-saffron-600/30">
        <p className={`text-sandstone-300 text-xs text-center ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
          {language === 'mr' 
            ? '📱 QR कोड स्कॅन करा किंवा लिंक सामायिक करा. जगातील कोणीही या वेबसाइटला भेट देऊ शकतो!'
            : '📱 Scan the QR code or share the link. Anyone in the world can visit this website!'}
        </p>
      </div>
    </div>
  );
}