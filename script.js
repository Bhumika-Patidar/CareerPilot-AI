document
.getElementById("analyzeBtn")
.addEventListener("click", () => {

const generatedResume =
document.getElementById("generatedResume");

generatedResume.innerHTML = `
<h2>Generated Resume</h2>

<p>
Your AI optimized resume will appear here after backend integration.
</p>
`;

});