// Base de conhecimento - problemas comuns e soluções
const knowledgeBase = {
    hardware: {
        motherboard: {
            "não liga": {
                diagnose: "Problema na placa-mãe - o computador não está iniciando.",
                solution: [
                    "Verifique se todos os cabos de energia estão corretamente conectados à placa-mãe.",
                    "Teste a fonte de alimentação com um multímetro ou troque-a temporariamente.",
                    "Remova e recoloque a memória RAM, verificando se está bem encaixada.",
                    "Desconecte todos os periféricos e tente ligar apenas com os componentes essenciais.",
                    "Verifique se há capacitores estufados ou danificados na placa-mãe."
                ]
            },
            "beeps constantes": {
                diagnose: "A placa-mãe está emitindo códigos de erro através de beeps.",
                solution: [
                    "Anote o padrão de beeps (número e duração).",
                    "Consulte o manual da placa-mãe para identificar o código de erro específico.",
                    "Com base no código, verifique o componente indicado (geralmente memória RAM, processador ou placa de vídeo).",
                    "Remova e recoloque o componente identificado.",
                    "Se o problema persistir, considere substituir o componente com defeito."
                ]
            }
        },
        cpu: {
            "superaquecimento": {
                diagnose: "O processador está superaquecendo, causando desligamentos ou redução de desempenho.",
                solution: [
                    "Limpe o cooler e o dissipador de calor do processador, removendo poeira acumulada.",
                    "Verifique se o cooler está funcionando corretamente.",
                    "Remova e aplique nova pasta térmica entre o processador e o dissipador.",
                    "Certifique-se de que há ventilação adequada no gabinete.",
                    "Verifique as temperaturas usando softwares de monitoramento como HWMonitor ou Core Temp."
                ]
            },
            "velocidade reduzida": {
                diagnose: "O processador está operando abaixo da velocidade normal.",
                solution: [
                    "Verifique as configurações de energia do Windows (escolha perfil de alto desempenho).",
                    "Acesse a BIOS e verifique se não há limitações de frequência ativadas.",
                    "Monitore a temperatura, pois throttling térmico pode reduzir a velocidade.",
                    "Verifique se há processos consumindo muitos recursos no Gerenciador de Tarefas.",
                    "Atualize os drivers de chipset da placa-mãe."
                ]
            }
        },
        memoria: {
            "erros frequentes": {
                diagnose: "Problemas de memória RAM causando erros, telas azuis ou travamentos aleatórios.",
                solution: [
                    "Execute o diagnóstico de memória Windows Memory Diagnostic ou Memtest86.",
                    "Remova e recoloque os módulos de memória, limpando os contatos com borracha.",
                    "Teste um módulo de memória por vez para identificar qual está com defeito.",
                    "Verifique no manual da placa-mãe os slots e configurações recomendadas.",
                    "Se identificar um módulo defeituoso, substitua-o."
                ]
            },
            "não reconhecida": {
                diagnose: "O sistema não está reconhecendo toda a memória instalada.",
                solution: [
                    "Verifique se os módulos são compatíveis com a placa-mãe (tipo, velocidade, capacidade).",
                    "Certifique-se de que os módulos estão corretamente instalados nos slots.",
                    "Limpe os contatos dos módulos com borracha escolar.",
                    "Teste diferentes configurações de slots conforme o manual da placa-mãe.",
                    "Atualize a BIOS para a versão mais recente."
                ]
            }
        },
        armazenamento: {
            "ruídos estranhos": {
                diagnose: "O disco rígido está emitindo ruídos anormais, indicando possível falha mecânica.",
                solution: [
                    "Faça backup imediato de todos os dados importantes.",
                    "Execute ferramentas de diagnóstico como CrystalDiskInfo para verificar a saúde do disco.",
                    "Verifique a temperatura do disco com softwares de monitoramento.",
                    "Não desligue o computador se precisar recuperar dados e consulte um especialista.",
                    "Substitua o disco rígido o mais rápido possível."
                ]
            },
            "lentidão extrema": {
                diagnose: "Disco de armazenamento com desempenho muito baixo, causando lentidão no sistema.",
                solution: [
                    "Execute a desfragmentação do disco (apenas para HDDs, não para SSDs).",
                    "Verifique o espaço livre - mantenha pelo menos 15-20% do disco livre.",
                    "Execute o comando CHKDSK para verificar e reparar erros do sistema de arquivos.",
                    "Desative programas desnecessários na inicialização do Windows.",
                    "Considere atualizar para um SSD se estiver usando um HDD tradicional."
                ]
            }
        }
    },
    software: {
        sistema: {
            "tela azul": {
                diagnose: "O Windows está apresentando telas azuis (BSOD) frequentemente.",
                solution: [
                    "Anote o código de erro exibido na tela azul (ex: MEMORY_MANAGEMENT, DRIVER_IRQL_NOT_LESS_OR_EQUAL).",
                    "Verifique por atualizações recentes de hardware ou software que podem ter causado o problema.",
                    "Atualize todos os drivers, especialmente de vídeo, rede e armazenamento.",
                    "Execute o comando 'sfc /scannow' no prompt de comando como administrador.",
                    "Use a ferramenta BlueScreenView para analisar os arquivos de despejo de memória."
                ]
            },
            "inicialização lenta": {
                diagnose: "O sistema operacional está demorando muito tempo para iniciar.",
                solution: [
                    "Otimize os programas de inicialização usando o Gerenciador de Tarefas (aba Inicialização).",
                    "Desinstale programas não utilizados que possam estar consumindo recursos.",
                    "Execute uma varredura completa de malware com Windows Defender ou outro antivírus.",
                    "Verifique a saúde do disco com 'chkdsk /f /r' no prompt de comando como administrador.",
                    "Considere realizar uma reinstalação limpa do Windows se o problema persistir."
                ]
            }
        },
        aplicativos: {
            "travamentos frequentes": {
                diagnose: "Um ou mais aplicativos travam ou fecham inesperadamente.",
                solution: [
                    "Atualize o aplicativo para a versão mais recente.",
                    "Verifique por conflitos com outros softwares (antivírus, firewalls).",
                    "Execute o aplicativo no modo de compatibilidade para sistemas operacionais anteriores.",
                    "Reinstale o aplicativo completamente, removendo arquivos residuais.",
                    "Verifique os logs de eventos do Windows para identificar a causa específica do erro."
                ]
            },
            "alto consumo de recursos": {
                diagnose: "Um aplicativo está consumindo muita memória ou CPU, causando lentidão no sistema.",
                solution: [
                    "Atualize o aplicativo para a versão mais recente, que pode incluir otimizações.",
                    "Ajuste as configurações do aplicativo para reduzir o uso de recursos.",
                    "Feche outras aplicações quando usar este programa específico.",
                    "Verifique se há processos em segundo plano relacionados ao aplicativo.",
                    "Contate o suporte do desenvolvedor do aplicativo para buscar soluções específicas."
                ]
            }
        }
    },
    network: {
        conexao: {
            "instabilidade": {
                diagnose: "A conexão de rede está instável, com quedas frequentes.",
                solution: [
                    "Verifique a qualidade do sinal Wi-Fi ou a integridade dos cabos de rede.",
                    "Reinicie o roteador/modem (desligue por 30 segundos e ligue novamente).",
                    "Atualize o firmware do roteador para a versão mais recente.",
                    "Altere o canal do Wi-Fi para evitar interferências de redes vizinhas.",
                    "Verifique se há muitos dispositivos conectados simultaneamente na rede."
                ]
            },
            "lentidão": {
                diagnose: "A velocidade da conexão está muito abaixo do esperado.",
                solution: [
                    "Execute testes de velocidade em diferentes horários (speedtest.net).",
                    "Verifique se há downloads ou uploads em andamento em outros dispositivos da rede.",
                    "Conecte-se diretamente ao modem via cabo para descartar problemas no Wi-Fi.",
                    "Verifique se não há softwares consumindo banda em segundo plano.",
                    "Entre em contato com seu provedor de internet se o problema persistir."
                ]
            }
        },
        wifi: {
            "sinal fraco": {
                diagnose: "O sinal Wi-Fi está fraco ou não alcança determinadas áreas.",
                solution: [
                    "Posicione o roteador em local central e elevado, longe de paredes grossas.",
                    "Remova obstáculos físicos entre o roteador e os dispositivos.",
                    "Verifique se há interferência de outros dispositivos eletrônicos (telefones sem fio, microondas).",
                    "Considere instalar repetidores Wi-Fi ou um sistema mesh para áreas maiores.",
                    "Atualize a antena do roteador ou considere um modelo com maior alcance."
                ]
            },
            "não conecta": {
                diagnose: "O dispositivo não consegue se conectar à rede Wi-Fi.",
                solution: [
                    "Verifique se o Wi-Fi está ligado no dispositivo (modo avião desativado).",
                    "Esqueça a rede e reconecte, inserindo a senha novamente.",
                    "Reinicie o dispositivo e o roteador.",
                    "Verifique se o dispositivo é compatível com o tipo de rede (2.4GHz vs 5GHz).",
                    "Restaure as configurações de rede do dispositivo ou do roteador."
                ]
            }
        }
    },
    performance: {
        lentidao: {
            "geral": {
                diagnose: "O computador está com desempenho geral lento em todas as operações.",
                solution: [
                    "Verifique o uso de CPU, memória e disco no Gerenciador de Tarefas durante a lentidão.",
                    "Execute uma limpeza de arquivos temporários com Disk Cleanup.",
                    "Desative programas e serviços desnecessários na inicialização.",
                    "Verifique se há malware com uma varredura completa do sistema.",
                    "Considere adicionar mais RAM ou atualizar para um SSD se estiver usando HDD."
                ]
            },
            "jogos": {
                diagnose: "Desempenho inadequado em jogos, com baixo FPS ou travamentos.",
                solution: [
                    "Atualize os drivers da placa de vídeo para a versão mais recente.",
                    "Ajuste as configurações gráficas do jogo para valores mais baixos.",
                    "Verifique se o sistema atende aos requisitos mínimos do jogo.",
                    "Feche aplicativos em segundo plano que possam consumir recursos.",
                    "Monitore as temperaturas durante o jogo para descartar throttling térmico."
                ]
            }
        },
        temperatura: {
            "alta": {
                diagnose: "O computador está operando em temperaturas elevadas.",
                solution: [
                    "Limpe o interior do gabinete e os coolers para remover poeira acumulada.",
                    "Verifique se todos os coolers estão funcionando corretamente.",
                    "Aplique nova pasta térmica no processador e placa de vídeo se necessário.",
                    "Melhore a ventilação do ambiente onde o computador está instalado.",
                    "Considere adicionar mais coolers ou um sistema de refrigeração mais eficiente."
                ]
            }
        }
    }
};

// Base de conhecimento - manutenção preventiva
const maintenanceBase = {
    general: {
        new: [
            "Configurar backups automáticos para seus arquivos importantes",
            "Instalar apenas softwares essenciais para manter o sistema limpo",
            "Configurar atualizações automáticas do Windows",
            "Instalar um bom antivírus e mantê-lo atualizado",
            "Criar um ponto de restauração do sistema"
        ],
        mid: [
            "Realizar limpeza de arquivos temporários mensalmente",
            "Verificar e atualizar drivers pelo menos a cada 3 meses",
            "Executar desfragmentação do disco (somente para HDDs) trimestralmente",
            "Verificar erros no disco com CHKDSK a cada 3 meses",
            "Limpar o registro do Windows com ferramentas confiáveis"
        ],
        old: [
            "Considerar uma reinstalação limpa do sistema operacional",
            "Verificar a saúde do disco e considerar substituição preventiva",
            "Aumentar a memória RAM se possível",
            "Realizar limpeza física interna completa",
            "Considerar atualização para SSD se estiver usando HDD"
        ]
    },
    performance: {
        new: [
            "Ajustar as configurações de energia para alto desempenho",
            "Desativar efeitos visuais desnecessários",
            "Configurar gerenciamento de memória virtual",
            "Otimizar programas de inicialização",
            "Manter espaço livre de pelo menos 20% no disco principal"
        ],
        mid: [
            "Limpar arquivos duplicados e desnecessários",
            "Verificar e encerrar processos que consomem muitos recursos",
            "Desfragmentar o disco (para HDDs) ou executar TRIM (para SSDs)",
            "Atualizar drivers de chipset e vídeo",
            "Verificar e remover malware e bloatware"
        ],
        old: [
            "Considerar upgrade de hardware (RAM, SSD)",
            "Reinstalar o sistema operacional para eliminar fragmentação e lixo acumulado",
            "Limpar fisicamente os componentes internos",
            "Substituir pasta térmica do processador e placa de vídeo",
            "Utilizar versões mais leves de softwares"
        ]
    },
    security: {
        new: [
            "Configurar uma senha forte para o Windows e conta Microsoft",
            "Habilitar autenticação de dois fatores onde disponível",
            "Configurar Windows Defender para varreduras programadas",
            "Manter o firewall do Windows ativado",
            "Aprender a identificar emails e sites de phishing"
        ],
        mid: [
            "Executar varreduras completas de antivírus mensalmente",
            "Verificar configurações de privacidade do Windows e aplicativos",
            "Manter navegadores e plugins atualizados",
            "Fazer backup regular de dados importantes em múltiplos locais",
            "Considerar um gerenciador de senhas"
        ],
        old: [
            "Verificar se há vulnerabilidades no sistema com ferramentas específicas",
            "Considerar soluções de segurança mais robustas",
            "Criptografar dados sensíveis",
            "Limitar permissões de aplicativos e usuários",
            "Estar atento a ataques direcionados a sistemas mais antigos"
        ]
    },
    cleaning: {
        new: [
            "Manter o computador em ambiente limpo e livre de poeira",
            "Usar capas de proteção quando não estiver em uso",
            "Limpar a tela com pano de microfibra",
            "Manter líquidos longe do equipamento",
            "Usar ar comprimido para limpeza básica dos teclados"
        ],
        mid: [
            "Limpar as entradas de ar do gabinete a cada 3 meses",
            "Verificar e limpar as ventoinhas e dissipadores de calor",
            "Limpar teclado e mouse removendo resíduos acumulados",
            "Verificar conectores e cabos quanto a desgaste",
            "Manter os periféricos limpos e em bom estado"
        ],
        old: [
            "Abrir o gabinete para limpeza completa interna a cada 6 meses",
            "Substituir a pasta térmica do processador anualmente",
            "Verificar capacitores da placa-mãe quanto a vazamentos",
            "Limpar contatos de memória RAM e placas de expansão",
            "Verificar e substituir ventoinhas com ruído ou baixo desempenho"
        ]
    }
};

// Base de conhecimento - ferramentas recomendadas
const toolsBase = {
    hardware: [
        {
            name: "Kit de Chaves de Precisão",
            description: "Conjunto de chaves para manutenção de hardware, com diversos tamanhos e tipos para diferentes parafusos."
        },
        {
            name: "Pulseira Antiestática",
            description: "Previne danos aos componentes eletrônicos durante a manutenção, descarregando a eletricidade estática do corpo."
        },
        {
            name: "Multímetro Digital",
            description: "Para testar voltagens, continuidade e outros parâmetros elétricos de componentes."
        },
        {
            name: "Ar Comprimido",
            description: "Para limpeza de poeira em áreas de difícil acesso sem danificar os componentes."
        },
        {
            name: "Pasta Térmica",
            description: "Para aplicação entre processador e cooler, melhorando a dissipação de calor."
        }
    ],
    software: [
        {
            name: "CrystalDiskInfo",
            description: "Monitora a saúde de discos rígidos e SSDs, alertando sobre possíveis falhas."
        },
        {
            name: "HWMonitor",
            description: "Monitora temperaturas, voltagens e velocidades de ventoinhas dos componentes."
        },
        {
            name: "Memtest86",
            description: "Testa exaustivamente a memória RAM para identificar problemas."
        },
        {
            name: "CPU-Z",
            description: "Fornece informações detalhadas sobre processador, memória e placa-mãe."
        },
        {
            name: "CCleaner",
            description: "Limpa arquivos temporários, registro do Windows e gerencia programas de inicialização."
        }
    ],
    network: [
        {
            name: "Ping/Traceroute",
            description: "Ferramentas de linha de comando para diagnosticar problemas de conectividade e latência."
        },
        {
            name: "Wireshark",
            description: "Analisador de protocolo de rede para identificar problemas de tráfego e segurança."
        },
        {
            name: "WiFi Analyzer",
            description: "Analisa canais de Wi-Fi e intensidade de sinal para otimizar posicionamento e configuração."
        },
        {
            name: "LAN Speed Test",
            description: "Mede a velocidade real da rede local entre diferentes pontos."
        },
        {
            name: "NetSpot",
            description: "Cria mapas de cobertura Wi-Fi para identificar pontos fracos."
        }
    ],
    recovery: [
        {
            name: "Recuva",
            description: "Recupera arquivos excluídos de discos rígidos, cartões de memória e pendrives."
        },
        {
            name: "TestDisk",
            description: "Recupera partições perdidas e torna discos não-inicializáveis em inicializáveis novamente."
        },
        {
            name: "Hiren's Boot CD",
            description: "Conjunto de ferramentas para diagnóstico e recuperação de sistemas que não iniciam."
        },
        {
            name: "AOMEI Backupper",
            description: "Cria e restaura imagens completas do sistema e backups incrementais."
        },
        {
            name: "EaseUS Data Recovery",
            description: "Software avançado para recuperação de dados em diversos cenários de perda."
        }
    ]
};

// Função para detectar sistema operacional, navegador e resolução
function detectSystemInfo() {
    // Detectar Sistema Operacional
    let osInfo = "Desconhecido";
    const userAgent = navigator.userAgent;
    
    if (userAgent.indexOf("Windows NT 10.0") !== -1) osInfo = "Windows 10";
    else if (userAgent.indexOf("Windows NT 6.3") !== -1) osInfo = "Windows 8.1";
    else if (userAgent.indexOf("Windows NT 6.2") !== -1) osInfo = "Windows 8";
    else if (userAgent.indexOf("Windows NT 6.1") !== -1) osInfo = "Windows 7";
    else if (userAgent.indexOf("Mac") !== -1) osInfo = "macOS";
    else if (userAgent.indexOf("Linux") !== -1) osInfo = "Linux";
    else if (userAgent.indexOf("Android") !== -1) osInfo = "Android";
    else if (userAgent.indexOf("iOS") !== -1) osInfo = "iOS";
    
    document.getElementById("os-info").textContent = osInfo;
    
    // Detectar Navegador
    let browserInfo = "Desconhecido";
    
    if (userAgent.indexOf("Chrome") !== -1 && userAgent.indexOf("Edg") === -1 && userAgent.indexOf("OPR") === -1) 
        browserInfo = "Google Chrome";
    else if (userAgent.indexOf("Firefox") !== -1) 
        browserInfo = "Mozilla Firefox";
    else if (userAgent.indexOf("Edg") !== -1) 
        browserInfo = "Microsoft Edge";
    else if (userAgent.indexOf("Safari") !== -1 && userAgent.indexOf("Chrome") === -1) 
        browserInfo = "Safari";
    else if (userAgent.indexOf("OPR") !== -1) 
        browserInfo = "Opera";
    else if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1) 
        browserInfo = "Internet Explorer";
    
    document.getElementById("browser-info").textContent = browserInfo;
    
    // Detectar Resolução
    const width = window.screen.width;
    const height = window.screen.height;
    document.getElementById("resolution-info").textContent = `${width}x${height}`;
}

// Função para atualizar subcategorias com base na categoria selecionada
function updateSubcategories() {
    const category = document.getElementById("problem-category").value;
    const subcategorySelect = document.getElementById("problem-subcategory");
    
    // Limpar opções atuais
    subcategorySelect.innerHTML = "";
    subcategorySelect.disabled = true;
    
    // Resetar sintomas
    document.getElementById("symptoms").innerHTML = "";
    document.getElementById("symptoms").disabled = true;
    
    if (!category) {
        subcategorySelect.innerHTML = "<option value=''>Primeiro selecione uma categoria</option>";
        return;
    }
    
    // Adicionar nova opção padrão
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Selecione um tipo de problema";
    subcategorySelect.appendChild(defaultOption);
    
    // Adicionar subcategorias com base na categoria selecionada
    if (knowledgeBase[category]) {
        const subcategories = Object.keys(knowledgeBase[category]);
        
        subcategories.forEach(subcategory => {
            const option = document.createElement("option");
            option.value = subcategory;
            
            // Formatar nome da subcategoria para exibição
            let displayName = subcategory;
            switch(subcategory) {
                case "motherboard": displayName = "Placa-mãe"; break;
                case "cpu": displayName = "Processador"; break;
                case "memoria": displayName = "Memória RAM"; break;
                case "armazenamento": displayName = "Disco/Armazenamento"; break;
                case "sistema": displayName = "Sistema Operacional"; break;
                case "aplicativos": displayName = "Aplicativos/Programas"; break;
                case "conexao": displayName = "Conexão com Internet"; break;
                case "wifi": displayName = "Rede Wi-Fi"; break;
                case "lentidao": displayName = "Lentidão"; break;
                case "temperatura": displayName = "Temperatura"; break;
            }
            
            option.textContent = displayName;
            subcategorySelect.appendChild(option);
        });
        
        subcategorySelect.disabled = false;
    }
}

// Função para atualizar sintomas com base na subcategoria selecionada
function updateSymptoms() {
    const category = document.getElementById("problem-category").value;
    const subcategory = document.getElementById("problem-subcategory").value;
    const symptomsSelect = document.getElementById("symptoms");
    
    // Limpar opções atuais
    symptomsSelect.innerHTML = "";
    symptomsSelect.disabled = true;
    
    if (!subcategory) {
        symptomsSelect.innerHTML = "<option value=''>Primeiro selecione um tipo de problema</option>";
        return;
    }
    
    // Adicionar nova opção padrão
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Selecione os sintomas específicos";
    symptomsSelect.appendChild(defaultOption);
    
    // Adicionar sintomas com base na subcategoria selecionada
    if (knowledgeBase[category] && knowledgeBase[category][subcategory]) {
        const symptoms = Object.keys(knowledgeBase[category][subcategory]);
        
        symptoms.forEach(symptom => {
            const option = document.createElement("option");
            option.value = symptom;
            option.textContent = symptom.charAt(0).toUpperCase() + symptom.slice(1);
            symptomsSelect.appendChild(option);
        });
        
        symptomsSelect.disabled = false;
    }
}

// Função para realizar diagnóstico
function diagnose() {
    const category = document.getElementById("problem-category").value;
    const subcategory = document.getElementById("problem-subcategory").value;
    const symptom = document.getElementById("symptoms").value;
    const additionalInfo = document.getElementById("additional-info").value;
    
    // Validar seleções
    if (!category || !subcategory || !symptom) {
        alert("Por favor, preencha todos os campos necessários para o diagnóstico.");
        return;
    }
    
    // Buscar diagnóstico na base de conhecimento
    const result = knowledgeBase[category][subcategory][symptom];
    
    if (result) {
        // Exibir resultado
        document.getElementById("diagnosis-text").textContent = result.diagnose;
        
        // Mostrar soluções passo a passo
        const solutionSteps = document.getElementById("solution-steps");
        solutionSteps.innerHTML = "<h3>Passos para Solução:</h3>";
        
        result.solution.forEach((step, index) => {
            const stepDiv = document.createElement("div");
            stepDiv.className = "solution-step";
            stepDiv.innerHTML = `
                <div class="solution-step-title">Passo ${index + 1}</div>
                <div class="solution-step-content">${step}</div>
            `;
            solutionSteps.appendChild(stepDiv);
        });
        
        // Mostrar resultado
        document.getElementById("result").classList.remove("hidden");
        
        // Adicionar ao histórico
        addToHistory(category, subcategory, symptom);
    } else {
        alert("Não foi possível encontrar um diagnóstico preciso. Por favor, tente com outros sintomas ou entre em contato com um técnico.");
    }
}

// Função para gerar plano de manutenção
function generateMaintenancePlan() {
    const maintenanceType = document.getElementById("maintenance-type").value;
    const computerAge = document.getElementById("computer-age").value;
    const systemType = document.getElementById("system-type").value;
    
    // Validar seleções
    if (!maintenanceType || !computerAge) {
        alert("Por favor, selecione o tipo de manutenção e a idade do computador.");
        return;
    }
    
    // Buscar plano na base de conhecimento
    if (maintenanceBase[maintenanceType] && maintenanceBase[maintenanceType][computerAge]) {
        const maintenancePlan = maintenanceBase[maintenanceType][computerAge];
        
        // Exibir plano de manutenção
        let planHtml = "<ul>";
        maintenancePlan.forEach(step => {
            planHtml += `<li>${step}</li>`;
        });
        planHtml += "</ul>";
        
        // Adicionar recomendações específicas para o sistema operacional
        if (systemType) {
            planHtml += "<h4>Recomendações específicas para " + 
                (systemType === "windows" ? "Windows" : systemType === "mac" ? "macOS" : "Linux") + 
                ":</h4><ul>";
            
            if (systemType === "windows") {
                planHtml += "<li>Use o Limpeza de Disco (Disk Cleanup) para remover arquivos temporários</li>";
                planHtml += "<li>Execute o Desfragmentador de Disco regularmente (apenas para HDDs)</li>";
                planHtml += "<li>Utilize o Windows Security para verificar ameaças</li>";
            } else if (systemType === "mac") {
                planHtml += "<li>Use o Utilitário de Disco para verificar e reparar problemas</li>";
                planHtml += "<li>Limpe arquivos de cache com ferramentas como CleanMyMac</li>";
                planHtml += "<li>Gerencie o armazenamento através das ferramentas nativas do macOS</li>";
            } else if (systemType === "linux") {
                planHtml += "<li>Use comandos como 'apt autoremove' para remover pacotes não utilizados</li>";
                planHtml += "<li>Limpe o cache com 'apt clean' ou ferramentas equivalentes</li>";
                planHtml += "<li>Utilize ferramentas como BleachBit para limpeza do sistema</li>";
            }
            
            planHtml += "</ul>";
        }
        
        document.getElementById("maintenance-text").innerHTML = planHtml;
        document.getElementById("maintenance-result").classList.remove("hidden");
    } else {
        alert("Não foi possível gerar um plano de manutenção com os parâmetros selecionados.");
    }
}

// Função para mostrar ferramentas recomendadas
function showRecommendedTools() {
    const toolCategory = document.getElementById("tool-category").value;
    
    if (!toolCategory) {
        alert("Por favor, selecione uma categoria de ferramentas.");
        return;
    }
    
    if (toolsBase[toolCategory]) {
        const tools = toolsBase[toolCategory];
        
        let toolsHtml = "<div class='tools-list'>";
        tools.forEach(tool => {
            toolsHtml += `
                <div class="tool-item">
                    <div class="tool-name">${tool.name}</div>
                    <div class="tool-description">${tool.description}</div>
                </div>
            `;
        });
        toolsHtml += "</div>";
        
        document.getElementById("tools-text").innerHTML = toolsHtml;
        document.getElementById("tools-result").classList.remove("hidden");
    } else {
        alert("Categoria de ferramentas não encontrada.");
    }
}

// Função para adicionar diagnóstico ao histórico
function addToHistory(category, subcategory, symptom) {
    const history = document.getElementById("history");
    
    // Remover mensagem de "nenhum diagnóstico" se presente
    if (history.querySelector("p")) {
        history.innerHTML = "";
    }
    
    // Formatar nomes para exibição
    let categoryName, subcategoryName, symptomName;
    
    switch(category) {
        case "hardware": categoryName = "Hardware"; break;
        case "software": categoryName = "Software"; break;
        case "network": categoryName = "Rede"; break;
        case "performance": categoryName = "Desempenho"; break;
        default: categoryName = category;
    }
    
    switch(subcategory) {
        case "motherboard": subcategoryName = "Placa-mãe"; break;
        case "cpu": subcategoryName = "Processador"; break;
        case "memoria": subcategoryName = "Memória RAM"; break;
        case "armazenamento": subcategoryName = "Disco/Armazenamento"; break;
        case "sistema": subcategoryName = "Sistema Operacional"; break;
        case "aplicativos": subcategoryName = "Aplicativos"; break;
        case "conexao": subcategoryName = "Internet"; break;
        case "wifi": subcategoryName = "Wi-Fi"; break;
        case "lentidao": subcategoryName = "Lentidão"; break;
        case "temperatura": subcategoryName = "Temperatura"; break;
        default: subcategoryName = subcategory;
    }
    
    symptomName = symptom.charAt(0).toUpperCase() + symptom.slice(1);
    
    // Criar elemento de histórico
    const historyItem = document.createElement("div");
    historyItem.className = "history-item";
    
    // Obter data e hora atual
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();
    
    historyItem.innerHTML = `
        <div class="history-date">${dateStr} ${timeStr}</div>
        <div class="history-problem">${categoryName} > ${subcategoryName} > ${symptomName}</div>
    `;
    
    // Adicionar ao início do histórico
    history.insertBefore(historyItem, history.firstChild);
}

// Função para tratar cliques nos links rápidos
function handleQuickLinks(e) {
    e.preventDefault();
    
    const linkId = e.target.id;
    let content = "";
    
    switch(linkId) {
        case "hardware-guide":
            content = `
                <h3>Guia Rápido de Hardware</h3>
                <p>Este guia contém informações básicas sobre os principais componentes de hardware de um computador e como identificar problemas.</p>
                
                <h4>Principais Componentes</h4>
                <ul>
                    <li><strong>Placa-mãe:</strong> O componente central que conecta todos os outros</li>
                    <li><strong>Processador (CPU):</strong> O "cérebro" do computador</li>
                    <li><strong>Memória RAM:</strong> Armazenamento temporário de dados em uso</li>
                    <li><strong>Disco Rígido/SSD:</strong> Armazenamento permanente de dados</li>
                    <li><strong>Placa de Vídeo:</strong> Processa imagens e vídeos</li>
                    <li><strong>Fonte de Alimentação:</strong> Fornece energia para todos os componentes</li>
                </ul>
                
                <h4>Dicas para Identificação de Problemas</h4>
                <ul>
                    <li>Ruídos estranhos podem indicar problemas em peças mecânicas</li>
                    <li>Reinicializações aleatórias geralmente estão relacionadas à energia ou temperatura</li>
                    <li>Telas azuis são normalmente causadas por problemas de hardware ou drivers</li>
                    <li>Lentidão extrema pode ser causada por falta de memória RAM ou disco rígido com problemas</li>
                </ul>
            `;
            break;
            
        case "software-guide":
            content = `
                <h3>Guia Rápido de Software</h3>
                <p>Instruções básicas para identificar e resolver problemas comuns de software.</p>
                
                <h4>Passos Básicos para Resolução de Problemas</h4>
                <ol>
                    <li>Reinicie o computador</li>
                    <li>Verifique por atualizações do sistema operacional</li>
                    <li>Atualize ou reinstale o programa com problema</li>
                    <li>Verifique por malware com um antivírus atualizado</li>
                    <li>Utilize a ferramenta de resolução de problemas do Windows</li>
                </ol>
                
                <h4>Comandos Úteis (para Windows)</h4>
                <ul>
                    <li><strong>sfc /scannow</strong> - Verifica arquivos de sistema corrompidos</li>
                    <li><strong>chkdsk C: /f /r</strong> - Verifica e repara erros no disco</li>
                    <li><strong>DISM /Online /Cleanup-Image /RestoreHealth</strong> - Repara a imagem do Windows</li>
                </ul>
            `;
            break;
            
        case "network-guide":
            content = `
                <h3>Guia Rápido de Redes</h3>
                <p>Instruções para diagnóstico e solução de problemas comuns de rede.</p>
                
                <h4>Verificações Básicas</h4>
                <ol>
                    <li>Verifique as conexões físicas (cabos)</li>
                    <li>Reinicie o roteador/modem (desligando por 30 segundos)</li>
                    <li>Verifique se outros dispositivos conseguem acessar a internet</li>
                    <li>Tente conectar via cabo em vez de Wi-Fi para isolar o problema</li>
                </ol>
                
                <h4>Comandos Úteis para Diagnóstico</h4>
                <ul>
                    <li><strong>ipconfig /all</strong> - Mostra configurações de rede detalhadas</li>
                    <li><strong>ping google.com</strong> - Testa a conexão com um servidor</li>
                    <li><strong>tracert google.com</strong> - Mostra o caminho dos pacotes pela rede</li>
                    <li><strong>ipconfig /release</strong> seguido de <strong>ipconfig /renew</strong> - Renova endereço IP</li>
                </ul>
            `;
            break;
            
        case "security-guide":
            content = `
                <h3>Guia Rápido de Segurança</h3>
                <p>Dicas essenciais para manter seu computador seguro.</p>
                
                <h4>Práticas Recomendadas</h4>
                <ul>
                    <li>Mantenha o sistema operacional e todos os softwares atualizados</li>
                    <li>Use um antivírus confiável e mantenha-o atualizado</li>
                    <li>Crie senhas fortes e únicas para cada serviço</li>
                    <li>Habilite autenticação de dois fatores quando disponível</li>
                    <li>Tenha cuidado ao abrir anexos de email ou baixar arquivos</li>
                    <li>Faça backup regularmente dos seus dados importantes</li>
                </ul>
                
                <h4>Sinais de Possível Infecção</h4>
                <ul>
                    <li>Computador lento sem motivo aparente</li>
                    <li>Programas abrindo ou fechando sozinhos</li>
                    <li>Alterações não autorizadas em arquivos</li>
                    <li>Navegador redirecionando para sites desconhecidos</li>
                    <li>Mensagens de erro incomuns ou pop-ups frequentes</li>
                </ul>
            `;
            break;
    }
    
    // Criar e mostrar modal com o conteúdo
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Adicionar estilo para o modal se não existir
    if (!document.getElementById("modal-style")) {
        const style = document.createElement("style");
        style.id = "modal-style";
        style.textContent = `
            .modal {
                display: block;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
            }
            
            .modal-content {
                background-color: white;
                margin: 10% auto;
                padding: 20px;
                border-radius: 8px;
                width: 80%;
                max-width: 700px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                animation: modalFadeIn 0.3s;
            }
            
            .close-modal {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
            }
            
            .close-modal:hover {
                color: black;
            }
            
            .modal-body {
                padding: 15px 0;
            }
            
            @keyframes modalFadeIn {
                from { opacity: 0; transform: translateY(-50px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Adicionar funcionalidade para fechar o modal
    modal.querySelector(".close-modal").addEventListener("click", function() {
        document.body.removeChild(modal);
    });
    
    // Fechar o modal clicando fora do conteúdo
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Função para alternar entre abas
function switchTab(tabId) {
    // Esconder todos os conteúdos de abas
    document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.remove("active");
    });
    
    // Remover classe ativa de todas as abas
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });
    
    // Ativar aba clicada e seu conteúdo
    document.getElementById(`${tabId}-tab`).classList.add("active");
    document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add("active");
}

// Função para atualizar subcategorias da base de conhecimento
function updateKnowledgeSubcategories() {
    const category = document.getElementById("knowledge-category").value;
    const subcategorySelect = document.getElementById("knowledge-subcategory");
    
    // Limpar opções atuais
    subcategorySelect.innerHTML = "";
    subcategorySelect.disabled = true;
    
    if (!category) {
        subcategorySelect.innerHTML = "<option value=''>Primeiro selecione uma categoria</option>";
        return;
    }
    
    // Adicionar nova opção padrão
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Selecione uma subcategoria";
    subcategorySelect.appendChild(defaultOption);
    
    // Adicionar subcategorias com base na categoria selecionada
    let subcategories = [];
    
    switch(category) {
        case "hardware":
        case "software":
        case "network":
        case "performance":
            subcategories = Object.keys(knowledgeBase[category]);
            break;
        case "maintenance":
            subcategories = Object.keys(maintenanceBase);
            break;
        case "tools":
            subcategories = Object.keys(toolsBase);
            break;
    }
    
    subcategories.forEach(subcategory => {
        const option = document.createElement("option");
        option.value = subcategory;
        
        // Formatar nome da subcategoria para exibição
        let displayName = subcategory;
        switch(subcategory) {
            // Hardware
            case "motherboard": displayName = "Placa-mãe"; break;
            case "cpu": displayName = "Processador"; break;
            case "memoria": displayName = "Memória RAM"; break;
            case "armazenamento": displayName = "Disco/Armazenamento"; break;
            
            // Software
            case "sistema": displayName = "Sistema Operacional"; break;
            case "aplicativos": displayName = "Aplicativos/Programas"; break;
            
            // Network
            case "conexao": displayName = "Conexão com Internet"; break;
            case "wifi": displayName = "Rede Wi-Fi"; break;
            
            // Performance
            case "lentidao": displayName = "Lentidão"; break;
            case "temperatura": displayName = "Temperatura"; break;
            
            // Maintenance
            case "general": displayName = "Manutenção Geral"; break;
            case "performance": displayName = "Otimização de Desempenho"; break;
            case "security": displayName = "Segurança"; break;
            case "cleaning": displayName = "Limpeza de Hardware"; break;
            
            // Tools já estão formatados corretamente
        }
        
        option.textContent = displayName;
        subcategorySelect.appendChild(option);
    });
    
    subcategorySelect.disabled = false;
}

// Função para mostrar base de conhecimento
function showKnowledgeBase() {
    const category = document.getElementById("knowledge-category").value;
    const subcategory = document.getElementById("knowledge-subcategory").value;
    
    // Validar seleção
    if (!category) {
        alert("Por favor, selecione pelo menos uma categoria.");
        return;
    }
    
    const knowledgeContent = document.getElementById("knowledge-content");
    knowledgeContent.innerHTML = "";
    
    // Determinar o conteúdo a ser mostrado com base na categoria e subcategoria
    if (category === "hardware" || category === "software" || category === "network" || category === "performance") {
        if (subcategory) {
            // Mostrar problemas específicos da subcategoria
            showProblemKnowledge(category, subcategory);
        } else {
            // Mostrar todas as subcategorias da categoria
            showAllSubcategoriesKnowledge(category);
        }
    } else if (category === "maintenance") {
        if (subcategory) {
            // Mostrar planos de manutenção específicos
            showMaintenanceKnowledge(subcategory);
        } else {
            // Mostrar todos os tipos de manutenção
            showAllMaintenanceKnowledge();
        }
    } else if (category === "tools") {
        if (subcategory) {
            // Mostrar ferramentas específicas
            showToolsKnowledge(subcategory);
        } else {
            // Mostrar todas as categorias de ferramentas
            showAllToolsKnowledge();
        }
    }
    
    // Mostrar resultado
    document.getElementById("knowledge-result").classList.remove("hidden");
}

// Função para mostrar problemas e soluções
function showProblemKnowledge(category, subcategory) {
    const knowledgeContent = document.getElementById("knowledge-content");
    const data = knowledgeBase[category][subcategory];
    
    // Obter nome formatado da subcategoria
    let subcategoryName = subcategory;
    switch(subcategory) {
        case "motherboard": subcategoryName = "Placa-mãe"; break;
        case "cpu": subcategoryName = "Processador"; break;
        case "memoria": subcategoryName = "Memória RAM"; break;
        case "armazenamento": subcategoryName = "Disco/Armazenamento"; break;
        case "sistema": subcategoryName = "Sistema Operacional"; break;
        case "aplicativos": subcategoryName = "Aplicativos/Programas"; break;
        case "conexao": subcategoryName = "Conexão com Internet"; break;
        case "wifi": subcategoryName = "Rede Wi-Fi"; break;
        case "lentidao": subcategoryName = "Lentidão"; break;
        case "temperatura": subcategoryName = "Temperatura"; break;
    }
    
    // Criar seção para a subcategoria
    const section = document.createElement("div");
    section.className = "knowledge-section";
    section.innerHTML = `<h3>Problemas e Soluções: ${subcategoryName}</h3>`;
    
    // Adicionar cada problema e solução
    for (const [symptom, details] of Object.entries(data)) {
        const item = document.createElement("div");
        item.className = "knowledge-item";
        
        let stepsHtml = "<ol>";
        details.solution.forEach(step => {
            stepsHtml += `<li>${step}</li>`;
        });
        stepsHtml += "</ol>";
        
        item.innerHTML = `
            <div class="knowledge-item-title">Problema: ${symptom.charAt(0).toUpperCase() + symptom.slice(1)}</div>
            <div class="knowledge-item-content">Diagnóstico: ${details.diagnose}</div>
            <div class="knowledge-item-steps">
                <h4>Solução:</h4>
                ${stepsHtml}
            </div>
        `;
        
        section.appendChild(item);
    }
    
    knowledgeContent.appendChild(section);
}

// Função para mostrar todas as subcategorias de uma categoria
function showAllSubcategoriesKnowledge(category) {
    const knowledgeContent = document.getElementById("knowledge-content");
    const data = knowledgeBase[category];
    
    // Obter nome formatado da categoria
    let categoryName;
    switch(category) {
        case "hardware": categoryName = "Hardware"; break;
        case "software": categoryName = "Software"; break;
        case "network": categoryName = "Rede"; break;
        case "performance": categoryName = "Desempenho"; break;
    }
    
    // Criar título principal
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = `Base de Conhecimento: ${categoryName}`;
    knowledgeContent.appendChild(categoryTitle);
    
    // Processar cada subcategoria
    for (const [subcategory, problems] of Object.entries(data)) {
        // Obter nome formatado da subcategoria
        let subcategoryName = subcategory;
        switch(subcategory) {
            case "motherboard": subcategoryName = "Placa-mãe"; break;
            case "cpu": subcategoryName = "Processador"; break;
            case "memoria": subcategoryName = "Memória RAM"; break;
            case "armazenamento": subcategoryName = "Disco/Armazenamento"; break;
            case "sistema": subcategoryName = "Sistema Operacional"; break;
            case "aplicativos": subcategoryName = "Aplicativos/Programas"; break;
            case "conexao": subcategoryName = "Conexão com Internet"; break;
            case "wifi": subcategoryName = "Rede Wi-Fi"; break;
            case "lentidao": subcategoryName = "Lentidão"; break;
            case "temperatura": subcategoryName = "Temperatura"; break;
        }
        
        // Criar seção para a subcategoria
        const section = document.createElement("div");
        section.className = "knowledge-section";
        section.innerHTML = `<h3>${subcategoryName}</h3>`;
        
        // Criar tabela de problemas
        const table = document.createElement("table");
        table.className = "knowledge-table";
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Problema</th>
                    <th>Diagnóstico</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        
        const tbody = table.querySelector("tbody");
        
        // Adicionar cada problema
        for (const [symptom, details] of Object.entries(problems)) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${symptom.charAt(0).toUpperCase() + symptom.slice(1)}</td>
                <td>${details.diagnose}</td>
            `;
            tbody.appendChild(row);
        }
        
        section.appendChild(table);
        knowledgeContent.appendChild(section);
    }
}

// Função para mostrar planos de manutenção específicos
function showMaintenanceKnowledge(maintenanceType) {
    const knowledgeContent = document.getElementById("knowledge-content");
    const data = maintenanceBase[maintenanceType];
    
    // Obter nome formatado do tipo de manutenção
    let maintenanceName;
    switch(maintenanceType) {
        case "general": maintenanceName = "Manutenção Geral"; break;
        case "performance": maintenanceName = "Otimização de Desempenho"; break;
        case "security": maintenanceName = "Segurança"; break;
        case "cleaning": maintenanceName = "Limpeza de Hardware"; break;
    }
    
    // Criar seção para o tipo de manutenção
    const section = document.createElement("div");
    section.className = "knowledge-section";
    section.innerHTML = `<h3>Planos de Manutenção: ${maintenanceName}</h3>`;
    
    // Adicionar cada plano de manutenção para diferentes idades de computador
    const ageCategories = {
        "new": "Computadores Novos (menos de 1 ano)",
        "mid": "Computadores de Média Idade (1-3 anos)",
        "old": "Computadores Antigos (mais de 3 anos)"
    };
    
    for (const [age, steps] of Object.entries(data)) {
        const item = document.createElement("div");
        item.className = "knowledge-item";
        
        let stepsHtml = "<ol>";
        steps.forEach(step => {
            stepsHtml += `<li>${step}</li>`;
        });
        stepsHtml += "</ol>";
        
        item.innerHTML = `
            <div class="knowledge-item-title">${ageCategories[age]}</div>
            <div class="knowledge-item-steps">
                <h4>Passos Recomendados:</h4>
                ${stepsHtml}
            </div>
        `;
        
        section.appendChild(item);
    }
    
    knowledgeContent.appendChild(section);
}

// Função para mostrar todos os tipos de manutenção
function showAllMaintenanceKnowledge() {
    const knowledgeContent = document.getElementById("knowledge-content");
    
    // Criar título principal
    const mainTitle = document.createElement("h3");
    mainTitle.textContent = "Planos de Manutenção Preventiva";
    knowledgeContent.appendChild(mainTitle);
    
    // Nome formatado dos tipos de manutenção
    const maintenanceTypes = {
        "general": "Manutenção Geral",
        "performance": "Otimização de Desempenho",
        "security": "Segurança",
        "cleaning": "Limpeza de Hardware"
    };
    
    // Criar seção para cada tipo de manutenção
    for (const [type, name] of Object.entries(maintenanceTypes)) {
        const section = document.createElement("div");
        section.className = "knowledge-section";
        section.innerHTML = `<h3>${name}</h3>`;
        
        // Descrições dos tipos de manutenção
        const descriptions = {
            "general": "Manutenção geral do sistema para garantir o bom funcionamento do computador.",
            "performance": "Otimizações para melhorar o desempenho e a velocidade do computador.",
            "security": "Medidas para garantir a segurança dos dados e proteger contra ameaças.",
            "cleaning": "Procedimentos de limpeza física para prolongar a vida útil do hardware."
        };
        
        // Adicionar descrição
        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "knowledge-item-content";
        descriptionDiv.textContent = descriptions[type];
        section.appendChild(descriptionDiv);
        
        // Adicionar link para ver detalhes
        const linkDiv = document.createElement("div");
        linkDiv.innerHTML = `
            <button onclick="document.getElementById('knowledge-subcategory').value='${type}'; showKnowledgeBase();" 
                    style="margin-top: 10px; padding: 8px 16px;">
                Ver Detalhes
            </button>
        `;
        section.appendChild(linkDiv);
        
        knowledgeContent.appendChild(section);
    }
}

// Função para mostrar ferramentas específicas
function showToolsKnowledge(toolCategory) {
    const knowledgeContent = document.getElementById("knowledge-content");
    const tools = toolsBase[toolCategory];
    
    // Obter nome formatado da categoria de ferramentas
    let categoryName;
    switch(toolCategory) {
        case "hardware": categoryName = "Ferramentas de Hardware"; break;
        case "software": categoryName = "Software de Diagnóstico"; break;
        case "network": categoryName = "Ferramentas de Rede"; break;
        case "recovery": categoryName = "Recuperação de Dados"; break;
    }
    
    // Criar seção para a categoria de ferramentas
    const section = document.createElement("div");
    section.className = "knowledge-section";
    section.innerHTML = `<h3>Ferramentas Recomendadas: ${categoryName}</h3>`;
    
    // Adicionar cada ferramenta
    tools.forEach(tool => {
        const item = document.createElement("div");
        item.className = "knowledge-item";
        
        item.innerHTML = `
            <div class="knowledge-item-title">${tool.name}</div>
            <div class="knowledge-item-content">${tool.description}</div>
        `;
        
        section.appendChild(item);
    });
    
    knowledgeContent.appendChild(section);
}

// Função para mostrar todas as categorias de ferramentas
function showAllToolsKnowledge() {
    const knowledgeContent = document.getElementById("knowledge-content");
    
    // Criar título principal
    const mainTitle = document.createElement("h3");
    mainTitle.textContent = "Ferramentas Recomendadas";
    knowledgeContent.appendChild(mainTitle);
    
    // Nome formatado das categorias de ferramentas
    const toolCategories = {
        "hardware": "Ferramentas de Hardware",
        "software": "Software de Diagnóstico",
        "network": "Ferramentas de Rede",
        "recovery": "Recuperação de Dados"
    };
    
    // Descrições das categorias
    const descriptions = {
        "hardware": "Ferramentas físicas para manutenção e reparo de componentes de hardware.",
        "software": "Programas para diagnóstico, monitoramento e otimização do sistema.",
        "network": "Ferramentas para análise, diagnóstico e otimização de redes.",
        "recovery": "Soluções para recuperação e backup de dados."
    };
    
    // Criar seção para cada categoria de ferramentas
    for (const [category, name] of Object.entries(toolCategories)) {
        const section = document.createElement("div");
        section.className = "knowledge-section";
        section.innerHTML = `<h3>${name}</h3>`;
        
        // Adicionar descrição
        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "knowledge-item-content";
        descriptionDiv.textContent = descriptions[category];
        section.appendChild(descriptionDiv);
        
        // Adicionar exemplos de ferramentas
        const examplesDiv = document.createElement("div");
        examplesDiv.className = "knowledge-item-content";
        examplesDiv.innerHTML = `<strong>Exemplos:</strong> ${toolsBase[category].map(tool => tool.name).slice(0, 3).join(", ")} e outras.`;
        section.appendChild(examplesDiv);
        
        // Adicionar link para ver detalhes
        const linkDiv = document.createElement("div");
        linkDiv.innerHTML = `
            <button onclick="document.getElementById('knowledge-subcategory').value='${category}'; showKnowledgeBase();" 
                    style="margin-top: 10px; padding: 8px 16px;">
                Ver Todas as Ferramentas
            </button>
        `;
        section.appendChild(linkDiv);
        
        knowledgeContent.appendChild(section);
    }
}

// Anexar manipuladores de eventos quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", function() {
    // Detectar informações do sistema
    detectSystemInfo();
    
    // Manipuladores para seleção de categoria e subcategoria
    document.getElementById("problem-category").addEventListener("change", updateSubcategories);
    document.getElementById("problem-subcategory").addEventListener("change", updateSymptoms);
    
    // Manipulador para botão de diagnóstico
    document.getElementById("diagnose-btn").addEventListener("click", diagnose);
    
    // Manipulador para botão de manutenção
    document.getElementById("maintenance-btn").addEventListener("click", generateMaintenancePlan);
    
    // Manipulador para botão de ferramentas
    document.getElementById("tools-btn").addEventListener("click", showRecommendedTools);
    
    // Manipuladores para links rápidos
    document.querySelectorAll(".quick-links a").forEach(link => {
        link.addEventListener("click", handleQuickLinks);
    });
    
    // Manipuladores para abas
    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", function() {
            const tabId = this.getAttribute("data-tab");
            switchTab(tabId);
        });
    });
    
    // Manipuladores para a Base de Conhecimento
    document.getElementById("knowledge-category").addEventListener("change", updateKnowledgeSubcategories);
    document.getElementById("show-knowledge-btn").addEventListener("click", showKnowledgeBase);
});