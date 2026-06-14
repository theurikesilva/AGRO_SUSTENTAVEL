/**
 * ==========================================================================
 * app.js - Lógica e Interatividade do Site "Cultivar o Amanhã"
 * ==========================================================================
 */

// Garante que o script rode apenas após o HTML estar totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. CONFIGURAÇÃO DO GRÁFICO INTERATIVO (CHART.JS) */
    const ctx = document.getElementById('impactoChart');
    
    if (ctx) {
        new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: [
                    'Consumo de Água Doce', 
                    'Emissão de Carbono', 
                    'Uso de Terras de Cultivo', 
                    'Demais Setores Globais'
                ],
                datasets: [{
                    label: 'Impacto Global da Agricultura (%)',
                    data: [70, 24, 38, 15],
                    backgroundColor: [
                        '#36533d', // Verde principal (Floresta)
                        '#bc6c25', // Accent (Terra/Castanho)
                        '#839788', // Verde acinzentado sutil
                        '#e6e3df'  // Cinza claro de contraste
                    ],
                    borderWidth: 2,
                    borderColor: '#fcfbfa' // Combina com o fundo do site para dar respiro
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true, // Transforma os quadrados da legenda em círculos elegantes
                            font: {
                                family: "'Inter', sans-serif",
                                size: 12
                            },
                            color: '#2b2927'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Pegada Ecológica Média da Atividade (%)',
                        padding: {
                            top: 10,
                            bottom: 30
                        },
                        font: {
                            family: "'Playfair Display', serif",
                            size: 18,
                            weight: '600'
                        },
                        color: '#36533d'
                    }
                }
            }
        });
    }

    /* 2. EFEITO DE ROLAGEM NO CABEÇALHO (UX HUMANIZADA) */
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        // Quando o usuário rolar mais de 50px para baixo, adiciona uma sombra sutil no menu
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(43, 41, 39, 0.05)';
            header.style.transition = 'box-shadow 0.3s ease';
        } else {
            header.style.boxShadow = 'none';
        }
    });

});