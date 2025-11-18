class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #111827;
                    color: white;
                    padding: 3rem 0;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                .footer-heading-a{
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: #10b981;
                }
                .footer-heading-b{
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: #10b981;
                }
                .footer-links a {
                    text-decoration: none;
                    display: block;
                    margin-bottom: 0.75rem;
                    color: #d1d5db;
                    transition: color 0.2s;
                }
                .footer-links a:hover {
                    color: #10b981;
                }
                .social-icons {
                    display: flex;
                    gap: 1rem;
                }
                .social-icons a {
                    color: white;
                    transition: color 0.2s;
                }
                .social-icons a:hover {
                    color: #10b981;
                }
                .copyright {
                    margin-top: 3rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid #374151;
                    text-align: center;
                    color: #9ca3af;
                    font-size: 0.875rem;
                }
            </style>
            <footer>
                <div class="footer-container">
                    <div class="footer-grid">
                        <div>
                            <h3 class="footer-heading-a">EcoFuturoDigital</h3>
                            <p class="text-gray-300 mb-4">Explorando a interseção entre tecnologia e sustentabilidade.</p>
                            <div class="social-icons">
                                <a href="#"><i data-feather="twitter"></i></a>
                                <a href="#"><i data-feather="linkedin"></i></a>
                                <a href="#"><i data-feather="instagram"></i></a>
                                <a href="#"><i data-feather="github"></i></a>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div>
                            <h3 class="footer-heading-b">Tópicos</h3>
                            <div class="footer-links">
                                <a href="Site/green-it.html">TI verde</a>
                                <a href="Site/water-consumption.html">Consumo de água pela tecnologia</a>
                                <a href="Site/e-waste.html">Lixo eletrônico</a>
                                <a href="Site/economia-de-energia.html">Consumo de energia</a>
                                <a href="Site/carbon-emissions-corporativo.html">Emissões de carbono</a>
                                <a href="Site/cloud-computing.html">Computação em nuvem</a>
                                <a href="Site/green_tech2.html">Tecnologias verdes</a>
                                <a href="Site/ia-beneficios-maleficios.html">IA - malefícios x benefícios</a>
                            </div>
                        </div>
                        
                    </div>
                    <div class="copyright">
                        &copy; ${new Date().getFullYear()} EcoFuturoDigital. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
