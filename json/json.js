import { setupCardToggle } from '../assets/js/utils/moreBtn.js';

fetch("../json/certificates.json")
.then((response) => response.json())
.then((certificates) => {
    const certificateGrid = document.getElementById("certificate-grid");
    
    certificates.forEach((certificate, index) => {
        const card = document.createElement("div");
        card.className = `bg-white p-6 rounded-lg shadow-md border transition duration-300 ease-in-out flex justify-between items-center ${
            index > 3 ? "hidden-card" : ""
        }`;
        
        card.innerHTML = `
        <div class="flex flex-col justify-between h-full">
            <div>
                <h4 class="text-lg font-semibold text-pink-600">${certificate.title}</h4>
                <p class="text-xs text-gray-600">${certificate.organisation}</p>
                <p class="text-sm text-gray-600">${certificate.description}</p>
            </div>
            <div class="flex justify-between items-center mt-2">
            <a href="https://www.nexed.com/verify?certId=${certificate.id}" 
                target="_blank" 
                class="text-pink-500 text-xs font-medium hover:!underline">
                View Certificate
            </a>
                <span class="text-gray-500 text-sm"> ${certificate.date}</span>
            </div>
        </div>
    `;
        certificateGrid.appendChild(card);
    });
    
    setupCardToggle();
})
.catch((error) => console.error("Error loading certificates:", error));
