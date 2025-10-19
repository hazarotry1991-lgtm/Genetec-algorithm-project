function runAlgorithm() {
  const fileInput = document.getElementById('datasetInput');
  const selectedFeatures = document.getElementById('selectedFeatures');
  const comparisonResults = document.getElementById('comparisonResults');

  if (fileInput.files.length === 0) {
    alert("يرجى تحميل قاعدة بيانات أولاً.");
    return;
  }

  // محاكاة تشغيل الخوارزمية
  selectedFeatures.innerHTML = "تم اختيار الميزات: [X1, X5, X9]";
  comparisonResults.innerHTML = "دقة النموذج باستخدام الخوارزمية الجينية: 92% مقارنة بـ 85% باستخدام الطرق التقليدية.";
}
