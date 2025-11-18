class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex justify-between h-16 items-center">

                    <a href="index.html" class="text-xl font-bold text-green-600">
                        EcoFuturoDigital
                    </a>

                    <div class="hidden md:flex space-x-6 items-center">

                        <a href="index.html" class="relative hover:text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Início</a>

                        <div class="relative group">
                            <button class="flex items-center gap-1 hover:text-green-600">
                                Conteúdos ▾
                            </button>

                            <div class="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                <a href="green-it.html" class="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">TI verde</a>
                                <a href="water-consumption.html" class="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Consumo de água</a>
                                <a href="e-waste.html" class="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Lixo eletrônico</a>
                                <a href="economia-de-energia.html" class="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Consumo de energia</a>
                                <a href="carbon-emissions-corporativo.html" class="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Emissões de carbono</a>
                                <a href="cloud-computing.html" class="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Computação em nuvem</a>
                                <a href="green_tech2.html" class="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Tecnologias verdes</a>
                                <a href="ia-beneficios-maleficios.html" class="block px-4 py-2 hover:bg-gray-100 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">IA: benefícios e malefícios</a>
                            </div>
                        </div>
                    </div>

                    <button id="mobile-btn" class="md:hidden text-2xl">
                        ☰
                    </button>
                </div>

                <div id="mobile-menu" class="hidden md:hidden flex-col space-y-2 mt-4 pb-4">

                    <a href="index.html" class="block hover:text-green-600 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Início</a>

                    <div>
                        <button id="mobile-dropdown-btn" class="w-full text-left hover:text-green-600">
                            Conteúdos ▾
                        </button>

                        <div id="mobile-dropdown" class="hidden ml-4 mt-2 flex flex-col gap-2">
                            <a href="green-it.html" class="hover:text-green-600 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">TI Verde</a>
                            <a href="water-consumption.html" class="hover:text-green-600 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Consumo de Água</a>
                            <a href="e-waste.html" class="hover:text-green-600 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Lixo Eletrônico</a>
                            </div>
                    </div>

                    <a href="#" class="hover:text-green-600 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Contato</a>
                </div>
            </div>
        </nav>
        `;

        // BOTÃO MOBILE – abre/fecha menu principal
        const mobileBtn = this.querySelector("#mobile-btn");
        const mobileMenu = this.querySelector("#mobile-menu");

        mobileBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        // BOTÃO DROPDOWN MOBILE
        const mobileDropdownBtn = this.querySelector("#mobile-dropdown-btn");
        const mobileDropdown = this.querySelector("#mobile-dropdown");

        mobileDropdownBtn.addEventListener("click", () => {
            mobileDropdown.classList.toggle("hidden");
        });
    }
}

customElements.define("custom-navbar", CustomNavbar);
