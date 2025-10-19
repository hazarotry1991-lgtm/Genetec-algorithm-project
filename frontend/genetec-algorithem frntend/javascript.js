function runGA() {
  const csvFile = document.getElementById('csvInput').files[0];
  const target = document.getElementById('targetInput').value;
  const model = document.getElementById('modelSelect').value;
  const population = document.getElementById('populationInput').value;
  const generations = document.getElementById('generationsInput').value;
  const mutation = document.getElementById('mutationInput').value;
  const crossover = document.getElementById('crossoverInput').value;
  const alpha = document.getElementById('alphaInput').value;

  if (!csvFile || !target) {
    alert("يرجى رفع ملف CSV وتحديد اسم عمود الهدف.");
    return;
  }

  // محاكاة النتائج (بدون تنفيذ فعلي للخوارزمية)
  document.getElementById('resultsSection').style.display = 'block';
  document.getElementById('accuracyResult').innerText = `دقة الاختبار: 0.92`;
  document.getElementById('featuresCount').innerText = `عدد الميزات المختارة: 12 من أصل 50`;
  document.getElementById('selectedIndices').innerText = `فهرس الميزات المختارة: [1, 3, 5, 7, 9, 12, 15, 18, 22, 25, 30, 33]`;

  const report = {
    model,
    population,
    generations,
    mutation,
    crossover,
    alpha,
    accuracy: 0.92,
    selected_features: [1, 3, 5, 7, 9, 12, 15, 18, 22, 25, 30, 33]
  };

  document.getElementById('reportJson').innerText = JSON.stringify(report, null, 2);
}
