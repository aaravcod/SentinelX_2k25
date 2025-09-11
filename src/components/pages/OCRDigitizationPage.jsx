import React, { useState, useRef } from 'react';
import { 
  FiUpload, 
  FiFile, 
  FiEye, 
  FiDownload,
  FiRefreshCw,
  FiTrash2,
  FiCheck,
  FiX,
  FiEdit3
} from 'react-icons/fi';
import { 
  MdCloudUpload, 
  MdDocumentScanner,
  MdTextFields,
  MdLocationOn,
  MdPerson,
  MdVerifiedUser,
  MdWarning
} from 'react-icons/md';
import axios from "axios";

const OCRDigitizationPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrResults, setOcrResults] = useState(null);
  const [nerResults, setNerResults] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const fileInputRef = useRef(null);

  // Simulated OCR processing function
const OCRprocessing = async (file) => {
  setIsProcessing(true);

  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "http://127.0.0.1:8000/api/extract",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const data = response.data;

    // Store the whole extracted JSON
    setExtractedData(data);

    // Optional: show raw JSON as text for debugging/preview
    setOcrResults(JSON.stringify(data, null, 2));

  } catch (error) {
    console.error("OCR API error:", error);
    alert("Failed to process the document. Check console for details.");
  } finally {
    setIsProcessing(false);
  }
};



  // File upload handler
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'uploaded',
      uploadDate: new Date().toISOString()
    }));
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  // Process file
  const handleProcessFile = async (fileItem) => {
    setSelectedFile(fileItem);
    await OCRprocessing(fileItem.file);
  };

  // Delete file
  const handleDeleteFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
    if (selectedFile?.id === fileId) {
      setSelectedFile(null);
      setOcrResults(null);
      setNerResults(null);
      setExtractedData(null);
    }
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Render entity with highlighting
  const renderHighlightedText = (text, entities) => {
    if (!entities || entities.length === 0) return text;
    
    let lastIndex = 0;
    const parts = [];
    
    entities.forEach((entity, index) => {
      // Add text before entity
      if (entity.start > lastIndex) {
        parts.push(
          <span key={`text-${index}`}>
            {text.substring(lastIndex, entity.start)}
          </span>
        );
      }
      
      // Add highlighted entity
      parts.push(
        <span
          key={`entity-${index}`}
          className={`px-1 py-0.5 rounded text-xs font-medium ${
            entity.label === 'PERSON' ? 'bg-blue-100 text-blue-800' :
            entity.label === 'LOCATION' ? 'bg-green-100 text-green-800' :
            entity.label === 'COORDINATES' ? 'bg-purple-100 text-purple-800' :
            entity.label === 'AREA' ? 'bg-orange-100 text-orange-800' :
            entity.label === 'CLAIM_ID' ? 'bg-indigo-100 text-indigo-800' :
            entity.label === 'STATUS' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}
          title={`${entity.label} (${Math.round(entity.confidence * 100)}% confidence)`}
        >
          {entity.text}
        </span>
      );
      
      lastIndex = entity.end;
    });
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(
        <span key="text-end">
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return parts;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <MdDocumentScanner className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-800">OCR Data Digitization</h2>
            <p className="text-slate-600 text-sm">Extract and standardize text from scanned FRA documents</p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-emerald-400 transition-colors">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.tiff,.tif"
            onChange={handleFileUpload}
            className="hidden"
          />
          <MdCloudUpload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-800 mb-2">Upload FRA Documents</h3>
          <p className="text-slate-600 mb-4">Drag & drop files here or click to browse</p>
          <p className="text-xs text-slate-500 mb-4">Supported formats: PDF, JPG, PNG, TIFF (Max 10MB each)</p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
          >
            <FiUpload className="w-4 h-4" />
            Choose Files
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* File List */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Uploaded Documents</h3>
          
          {uploadedFiles.length === 0 ? (
            <div className="text-center py-8">
              <FiFile className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500">No documents uploaded yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {uploadedFiles.map((fileItem) => (
                <div
                  key={fileItem.id}
                  className={`border rounded-lg p-4 ${
                    selectedFile?.id === fileItem.id 
                      ? 'border-emerald-500 bg-emerald-50' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FiFile className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-800 text-sm">{fileItem.name}</p>
                        <p className="text-xs text-slate-500">{formatFileSize(fileItem.size)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleProcessFile(fileItem)}
                        disabled={isProcessing}
                        className="text-emerald-600 hover:text-emerald-700 p-1 disabled:opacity-50"
                        title="Process with OCR"
                      >
                        {isProcessing && selectedFile?.id === fileItem.id ? (
                          <FiRefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <FiEye className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => handleDeleteFile(fileItem.id)}
                        className="text-red-600 hover:text-red-700 p-1"
                        title="Delete file"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Processing Status */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Processing Status</h3>
          
          {!selectedFile ? (
            <div className="text-center py-8">
              <MdTextFields className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500">Select a document to start processing</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <FiFile className="w-5 h-5 text-slate-600" />
                <div>
                  <p className="font-medium text-slate-800 text-sm">{selectedFile.name}</p>
                  <p className="text-xs text-slate-500">Selected for processing</p>
                </div>
              </div>

              {/* Processing Steps */}
              <div className="space-y-3">
                <div className={`flex items-center gap-3 p-3 rounded-lg ${
                  ocrResults ? 'bg-emerald-50 border border-emerald-200' : 'bg-slate-50'
                }`}>
                  {isProcessing ? (
                    <FiRefreshCw className="w-5 h-5 text-emerald-600 animate-spin" />
                  ) : ocrResults ? (
                    <FiCheck className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-slate-300 rounded-full"></div>
                  )}
                  <div>
                    <p className="font-medium text-slate-800 text-sm">OCR Text Extraction</p>
                    <p className="text-xs text-slate-500">
                      {isProcessing ? 'Extracting text from document...' :
                       ocrResults ? 'Text extraction completed' :
                       'Waiting to process'}
                    </p>
                  </div>
                </div>

                <div className={`flex items-center gap-3 p-3 rounded-lg ${
                  nerResults ? 'bg-emerald-50 border border-emerald-200' : 'bg-slate-50'
                }`}>
                  {nerResults ? (
                    <FiCheck className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-slate-300 rounded-full"></div>
                  )}
                  <div>
                    <p className="font-medium text-slate-800 text-sm">Named Entity Recognition</p>
                    <p className="text-xs text-slate-500">
                      {nerResults ? 'Entity extraction completed' : 'Waiting for OCR completion'}
                    </p>
                  </div>
                </div>

                <div className={`flex items-center gap-3 p-3 rounded-lg ${
                  extractedData ? 'bg-emerald-50 border border-emerald-200' : 'bg-slate-50'
                }`}>
                  {extractedData ? (
                    <FiCheck className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-slate-300 rounded-full"></div>
                  )}
                  <div>
                    <p className="font-medium text-slate-800 text-sm">Data Standardization</p>
                    <p className="text-xs text-slate-500">
                      {extractedData ? 'Data structuring completed' : 'Waiting for NER completion'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      {ocrResults && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* OCR Results */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-800">Extracted Text</h3>
              <button className="text-emerald-600 hover:text-emerald-700 text-sm">
                <FiDownload className="w-4 h-4 inline mr-1" />
                Export
              </button>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 max-h-80 overflow-y-auto">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">
                {nerResults ? renderHighlightedText(ocrResults, nerResults.entities) : ocrResults}
              </pre>
            </div>
            
            {/* Entity Legend */}
            {nerResults && (
              <div className="mt-4">
                <p className="text-sm font-medium text-slate-700 mb-2">Entity Types:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Person</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Location</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Coordinates</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Area</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Claim ID</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Status</span>
                </div>
              </div>
            )}
          </div>

          {/* Structured Data */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-800">Structured Data</h3>
              <div className="flex gap-2">
                <button className="text-emerald-600 hover:text-emerald-700 text-sm">
                  <FiEdit3 className="w-4 h-4 inline mr-1" />
                  Edit
                </button>
                <button className="text-emerald-600 hover:text-emerald-700 text-sm">
                  <FiDownload className="w-4 h-4 inline mr-1" />
                  Export JSON
                </button>
              </div>
            </div>
            
            {extractedData && (
              <div className="space-y-4">
                {/* Claim Information */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                    <MdVerifiedUser className="w-4 h-4 text-emerald-600" />
                    Claim Information
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <label className="text-slate-500">Claim Number</label>
                      <p className="font-medium text-slate-800">{extractedData.claimNumber}</p>
                    </div>
                    <div>
                      <label className="text-slate-500">Status</label>
                      <p className="font-medium text-slate-800">{extractedData.status}</p>
                    </div>
                    <div>
                      <label className="text-slate-500">Application Date</label>
                      <p className="font-medium text-slate-800">{extractedData.applicationDate}</p>
                    </div>
                    <div>
                      <label className="text-slate-500">Claim Type</label>
                      <p className="font-medium text-slate-800">{extractedData.claimType}</p>
                    </div>
                  </div>
                </div>

                {/* Personal Details */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                    <MdPerson className="w-4 h-4 text-blue-600" />
                    Personal Details
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <label className="text-slate-500">Claimant Name</label>
                      <p className="font-medium text-slate-800">{extractedData.claimantName}</p>
                    </div>
                    <div>
                      <label className="text-slate-500">Father's Name</label>
                      <p className="font-medium text-slate-800">{extractedData.fatherName}</p>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-2 flex items-center gap-2">
                    <MdLocationOn className="w-4 h-4 text-green-600" />
                    Location Details
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <label className="text-slate-500">Village</label>
                      <p className="font-medium text-slate-800">{extractedData.village}</p>
                    </div>
                    <div>
                      <label className="text-slate-500">Block</label>
                      <p className="font-medium text-slate-800">{extractedData.block}</p>
                    </div>
                    <div>
                      <label className="text-slate-500">District</label>
                      <p className="font-medium text-slate-800">{extractedData.district}</p>
                    </div>
                    <div>
                      <label className="text-slate-500">State</label>
                      <p className="font-medium text-slate-800">{extractedData.state}</p>
                    </div>
                    <div className="col-span-2">
                      <label className="text-slate-500">Coordinates</label>
                      <p className="font-medium text-slate-800">{extractedData.coordinates}</p>
                    </div>
                  </div>
                </div>

                {/* Land Details */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">Land Details</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <label className="text-slate-500">Survey Number</label>
                      <p className="font-medium text-slate-800">{extractedData.surveyNumber}</p>
                    </div>
                    <div>
                      <label className="text-slate-500">Area Claimed</label>
                      <p className="font-medium text-slate-800">{extractedData.areaClaimed} hectares</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex gap-3">
                    <button className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors text-sm">
                      Save to Database
                    </button>
                    <button className="flex-1 border border-slate-300 text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                      Verify Data
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OCRDigitizationPage;
