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
            },
            "não reconhece dispositivos": {
                diagnose: "A placa-mãe não está reconhecendo alguns dispositivos conectados.",
                solution: [
                    "Verifique se os dispositivos estão corretamente conectados aos slots/portas.",
                    "Tente conectar o dispositivo em outra porta para descartar problema na porta específica.",
                    "Atualize a BIOS da placa-mãe para a versão mais recente.",
                    "Verifique se há conflitos de IRQ nas configurações da BIOS.",
                    "Teste o dispositivo em outro computador para confirmar se o problema é na placa-mãe."
                ]
            },
            "erro no boot": {
                diagnose: "A placa-mãe apresenta erros durante o processo de inicialização.",
                solution: [
                    "Anote a mensagem de erro exata exibida na tela.",
                    "Resetar as configurações da BIOS para o padrão de fábrica (clear CMOS).",
                    "Remova temporariamente todos os dispositivos não essenciais.",
                    "Teste com apenas um módulo de memória RAM no primeiro slot.",
                    "Verifique se a bateria da BIOS precisa ser substituída."
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
            },
            "falhas aleatórias": {
                diagnose: "O processador está causando travamentos ou erros aleatórios no sistema.",
                solution: [
                    "Verifique a temperatura do processador sob carga usando ferramentas de monitoramento.",
                    "Execute um teste de estresse como Prime95 para verificar a estabilidade.",
                    "Reverta qualquer overclock aplicado e teste novamente.",
                    "Atualize a BIOS para a versão mais recente que pode conter correções para o seu CPU.",
                    "Verifique se a fonte de alimentação está fornecendo energia estável e suficiente."
                ]
            },
            "incompatibilidade": {
                diagnose: "O processador pode ser incompatível com a placa-mãe ou outros componentes.",
                solution: [
                    "Verifique a lista de compatibilidade no manual da placa-mãe ou no site do fabricante.",
                    "Confirme se a BIOS está atualizada para suportar o seu modelo de processador.",
                    "Verifique se a fonte de alimentação atende aos requisitos de energia do processador.",
                    "Verifique se o processador está instalado corretamente no socket, sem pinos tortos.",
                    "Consulte fóruns específicos do fabricante para casos semelhantes ao seu."
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
            },
            "incompatibilidade": {
                diagnose: "Os módulos de memória são incompatíveis entre si ou com a placa-mãe.",
                solution: [
                    "Verifique se todos os módulos têm a mesma frequência, latência e voltagem.",
                    "Consulte a lista de memórias compatíveis no manual da placa-mãe.",
                    "Teste os módulos individualmente para identificar qual está causando o problema.",
                    "Atualize a BIOS da placa-mãe para melhorar a compatibilidade com memórias.",
                    "Evite misturar módulos de diferentes fabricantes, mesmo com especificações idênticas."
                ]
            },
            "lentidão extrema": {
                diagnose: "O sistema está lento devido a problemas com a memória RAM.",
                solution: [
                    "Verifique a utilização da memória no Gerenciador de Tarefas.",
                    "Feche aplicativos que estejam consumindo muita memória.",
                    "Verifique se há um módulo com defeito executando um teste de memória.",
                    "Confirme se as memórias estão operando na velocidade correta na BIOS.",
                    "Considere adicionar mais memória RAM se o uso estiver consistentemente próximo do limite."
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
            },
            "não reconhecido": {
                diagnose: "O dispositivo de armazenamento não é reconhecido pelo sistema.",
                solution: [
                    "Verifique se o dispositivo está conectado corretamente (cabos de dados e energia).",
                    "Tente usar uma porta ou cabo diferente para descartar problemas de conexão.",
                    "Verifique se o dispositivo aparece no Gerenciador de Dispositivos ou no Disk Management.",
                    "Para SSDs, verifique se é necessário atualizar o firmware do dispositivo.",
                    "Em HDDs externos, verifique se o enclosure pode estar com defeito."
                ]
            },
            "falhas na partição": {
                diagnose: "O sistema não consegue acessar ou apresenta erros em uma ou mais partições.",
                solution: [
                    "Execute o comando 'chkdsk /f /r' no prompt de comando para verificar e reparar erros.",
                    "Utilize ferramentas como TestDisk para recuperar partições perdidas ou corrompidas.",
                    "Verifique se há vírus ou malware que possam estar afetando as partições.",
                    "Faça backup dos dados acessíveis antes de qualquer tentativa mais invasiva de reparo.",
                    "Se for disco físico, considere uma análise profissional para recuperação de dados."
                ]
            },
            "arquivos corrompidos": {
                diagnose: "Arquivos estão corrompidos ou sendo corrompidos durante o uso ou salvamento.",
                solution: [
                    "Execute verificação de disco com 'chkdsk /f /r' para identificar e reparar setores ruins.",
                    "Utilize ferramentas como CrystalDiskInfo para verificar a saúde do dispositivo.",
                    "Faça backup de todos os dados importantes imediatamente.",
                    "Verifique se há problemas de energia que possam estar causando corrupção durante gravações.",
                    "Se o problema persistir, substitua o dispositivo de armazenamento."
                ]
            }
        },
        video: {
            "artefatos visuais": {
                diagnose: "A placa de vídeo está apresentando distorções ou elementos gráficos estranhos na tela.",
                solution: [
                    "Verifique a temperatura da GPU durante o uso com ferramentas como MSI Afterburner.",
                    "Atualize os drivers de vídeo para a versão mais recente (ou tente uma versão anterior estável).",
                    "Remova overclock se aplicado e retorne a GPU às configurações de fábrica.",
                    "Verifique se o problema ocorre em diferentes aplicações ou apenas em um jogo específico.",
                    "Se possível, teste a placa de vídeo em outro computador para confirmar o problema."
                ]
            },
            "tela preta": {
                diagnose: "O computador liga, mas não há sinal de vídeo no monitor.",
                solution: [
                    "Verifique se o cabo de vídeo está conectado firmemente à placa de vídeo (não à placa-mãe se houver GPU dedicada).",
                    "Teste com um monitor ou cabo diferentes para descartar problemas com esses componentes.",
                    "Remova e recoloque a placa de vídeo, verificando se está bem encaixada no slot PCIe.",
                    "Verifique se há algum sinal sonoro da placa-mãe que possa indicar um problema com a GPU.",
                    "Teste a saída de vídeo onboard da placa-mãe (se disponível) para isolar o problema."
                ]
            },
            "baixo desempenho": {
                diagnose: "A placa de vídeo está apresentando desempenho inferior ao esperado em jogos ou aplicações gráficas.",
                solution: [
                    "Atualize os drivers para a versão mais recente recomendada pelo fabricante.",
                    "Verifique se há processos em segundo plano consumindo recursos da GPU.",
                    "Monitore a temperatura para verificar se não está ocorrendo throttling térmico.",
                    "Verifique se as configurações de energia do Windows estão em 'Alto Desempenho'.",
                    "Limpe os drivers atuais com DDU (Display Driver Uninstaller) e reinstale a versão mais recente."
                ]
            },
            "múltiplos monitores": {
                diagnose: "Problemas com configuração ou funcionamento de múltiplos monitores.",
                solution: [
                    "Verifique se todos os cabos estão corretamente conectados à placa de vídeo ou placa-mãe.",
                    "Nas configurações de exibição do Windows, detecte e configure corretamente cada monitor.",
                    "Verifique se os drivers de vídeo estão atualizados para suportar múltiplos monitores.",
                    "Teste cada monitor individualmente para verificar se funcionam separadamente.",
                    "Verifique se a placa de vídeo suporta a quantidade de monitores conectados simultaneamente."
                ]
            }
        },
        audio: {
            "sem som": {
                diagnose: "O computador não está reproduzindo áudio por nenhuma saída.",
                solution: [
                    "Verifique se o volume está ligado e não está mudo no controle do Windows e no dispositivo.",
                    "Confirme se o dispositivo de saída correto está selecionado nas configurações de som.",
                    "Atualize ou reinstale os drivers de áudio.",
                    "Teste com fones de ouvido ou alto-falantes diferentes.",
                    "Verifique se há conflitos de dispositivo no Gerenciador de Dispositivos."
                ]
            },
            "ruídos estranhos": {
                diagnose: "O áudio contém estática, chiados ou outros ruídos indesejados.",
                solution: [
                    "Verifique a qualidade e integridade dos cabos de áudio utilizados.",
                    "Afaste os cabos de áudio de fontes de interferência eletromagnética (cabos de energia, etc.).",
                    "Atualize os drivers de áudio para a versão mais recente.",
                    "Ajuste as configurações de qualidade de áudio nas configurações do Windows.",
                    "Verifique se o problema está na placa de som integrada ou em um dispositivo externo."
                ]
            },
            "microfone não funciona": {
                diagnose: "O sistema não está detectando ou utilizando o microfone corretamente.",
                solution: [
                    "Verifique se o microfone está habilitado nas configurações de privacidade do Windows.",
                    "Confirme se o dispositivo de entrada correto está selecionado nas configurações de som.",
                    "Teste o microfone em outro dispositivo para verificar se não é um problema de hardware.",
                    "Atualize ou reinstale os drivers de áudio.",
                    "Verifique se algum software está bloqueando o acesso ao microfone."
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
                    "Execute uma varre  dura completa de malware com Windows Defender ou outro antivírus.",
                    "Verifique a saúde do disco com 'chkdsk /f /r' no prompt de comando como administrador.",
                    "Considere realizar uma reinstalação limpa do Windows se o problema persistir."
                ]
            },
            "congelamento frequente": {
                diagnose: "O sistema operacional congela com frequência, exigindo reinicialização forçada.",
                solution: [
                    "Verifique o uso de disco, memória e CPU durante os congelamentos, se possível.",
                    "Desative programas de inicialização e serviços não essenciais usando MSConfig.",
                    "Execute uma verificação completa de malware com diferentes ferramentas.",
                    "Verifique a integridade dos arquivos do sistema com 'sfc /scannow'.",
                    "Atualize drivers de hardware, especialmente de placa de vídeo e controladores de disco."
                ]
            },
            "erros de atualização": {
                diagnose: "O sistema não consegue instalar atualizações ou apresenta erros durante o processo.",
                solution: [
                    "Anote o código de erro específico para pesquisa direcionada.",
                    "Execute a Solução de Problemas de Atualização do Windows nas configurações.",
                    "Limpe a pasta SoftwareDistribution com comandos específicos no PowerShell.",
                    "Verifique se há espaço suficiente no disco para as atualizações.",
                    "Em casos persistentes, considere usar a Ferramenta de Criação de Mídia para atualização."
                ]
            },
            "falhas no registro": {
                diagnose: "Erros relacionados ao registro do Windows comprometendo o funcionamento do sistema.",
                solution: [
                    "Execute o verificador de arquivos do sistema com 'sfc /scannow'.",
                    "Utilize o comando 'DISM /Online /Cleanup-Image /RestoreHealth' para reparar imagem do sistema.",
                    "Restaure o sistema para um ponto de restauração anterior ao problema.",
                    "Use ferramentas confiáveis de limpeza e reparo de registro como CCleaner com cautela.",
                    "Em casos graves, considere um reparo de inicialização usando a mídia de instalação do Windows."
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
            },
            "incompatibilidade": {
                diagnose: "O aplicativo apresenta problemas de compatibilidade com o sistema operacional.",
                solution: [
                    "Execute o aplicativo no modo de compatibilidade com versão anterior do sistema operacional.",
                    "Verifique se há uma versão atualizada do aplicativo compatível com seu sistema.",
                    "Consulte a documentação oficial ou site do desenvolvedor para requisitos de sistema.",
                    "Execute o aplicativo como administrador para conceder permissões elevadas.",
                    "Considere usar máquinas virtuais para executar aplicativos incompatíveis com seu sistema atual."
                ]
            },
            "não inicia": {
                diagnose: "O aplicativo não abre ou fecha imediatamente após tentar iniciá-lo.",
                solution: [
                    "Verifique logs de eventos do Windows para identificar erros específicos.",
                    "Reinstale completamente o aplicativo, removendo arquivos residuais antes da reinstalação.",
                    "Verifique requisitos mínimos de sistema, especialmente em jogos e aplicativos pesados.",
                    "Desative temporariamente o antivírus para verificar se está bloqueando a execução.",
                    "Execute uma reparação do aplicativo através do Painel de Controle ou instalador original."
                ]
            },
            "erro de DLLs ausentes": {
                diagnose: "O aplicativo não inicia devido a arquivos DLL ausentes ou corrompidos.",
                solution: [
                    "Identifique o nome exato da DLL ausente na mensagem de erro.",
                    "Procure o arquivo DLL em outros diretórios do sistema e copie para a pasta do aplicativo.",
                    "Reinstale o aplicativo para restaurar todos os arquivos necessários.",
                    "Instale o Microsoft Visual C++ Redistributable (várias versões podem ser necessárias).",
                    "Verifique se o DirectX está atualizado, especialmente para jogos e aplicativos multimídia."
                ]
            }
        },
        malware: {
            "vírus detectado": {
                diagnose: "O sistema está infectado com vírus ou outro tipo de malware.",
                solution: [
                    "Execute uma varredura completa com seu antivírus principal atualizado.",
                    "Use uma segunda ferramenta especializada como Malwarebytes para verificação adicional.",
                    "Inicie o computador em Modo Seguro para remover infecções persistentes.",
                    "Verifique programas de inicialização suspeitos com o Gerenciador de Tarefas ou Autoruns.",
                    "Em infecções graves, considere restaurar o sistema para um backup anterior ou reinstalar o sistema operacional."
                ]
            },
            "ransomware": {
                diagnose: "Arquivos foram criptografados por ransomware que exige pagamento para recuperação.",
                solution: [
                    "Desconecte imediatamente o computador da internet e redes locais para evitar propagação.",
                    "Não pague o resgate - não há garantia de recuperação e incentiva criminosos.",
                    "Verifique se existem ferramentas de descriptografia disponíveis para a variante específica.",
                    "Restaure arquivos de backups externos não afetados pelo ataque.",
                    "Reporte o ataque às autoridades competentes e busque ajuda profissional especializada."
                ]
            },
            "adware": {
                diagnose: "O sistema está infestado com adware, exibindo anúncios indesejados e redirecionamentos.",
                solution: [
                    "Execute ferramentas específicas contra adware como AdwCleaner.",
                    "Verifique e desinstale programas suspeitos instalados recentemente.",
                    "Limpe extensões de navegadores que possam conter adware.",
                    "Restaure as configurações padrão dos navegadores afetados.",
                    "Verifique e corrija as configurações de proxy e DNS que possam ter sido alteradas."
                ]
            }
        },
        drivers: {
            "desatualizados": {
                diagnose: "Drivers de dispositivos desatualizados causando instabilidade ou funcionalidade reduzida.",
                solution: [
                    "Identifique os dispositivos com drivers desatualizados no Gerenciador de Dispositivos.",
                    "Visite o site do fabricante da placa-mãe/dispositivo para obter os drivers mais recentes.",
                    "Utilize ferramentas de atualização automática de drivers com cautela.",
                    "Para placas de vídeo, use os instaladores oficiais da NVIDIA, AMD ou Intel.",
                    "Após atualizações, reinicie o sistema para aplicar todas as alterações."
                ]
            },
            "corrompidos": {
                diagnose: "Drivers corrompidos causando falhas de dispositivos ou crashes no sistema.",
                solution: [
                    "Identifique o driver problemático através do Visualizador de Eventos do Windows.",
                    "Desinstale completamente o driver atual através do Gerenciador de Dispositivos.",
                    "Reinicie o computador para limpar resíduos do driver anterior.",
                    "Instale uma versão limpa do driver, preferencialmente do site do fabricante.",
                    "Em caso de falhas contínuas, tente uma versão mais antiga e estável do driver."
                ]
            },
            "conflitos": {
                diagnose: "Conflitos entre diferentes drivers causando instabilidade no sistema.",
                solution: [
                    "Verifique dispositivos com símbolos de atenção no Gerenciador de Dispositivos.",
                    "Procure por conflitos de recursos (IRQ, endereço de memória) nas propriedades do dispositivo.",
                    "Atualize para os drivers mais recentes de todos os dispositivos envolvidos.",
                    "Desative temporariamente dispositivos não essenciais para isolar o conflito.",
                    "Reinstale o chipset da placa-mãe, que serve como base para outros drivers."
                ]
            }
        }
    },
    rede: {
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
            },
            "sem internet": {
                diagnose: "O dispositivo está conectado à rede, mas não tem acesso à internet.",
                solution: [
                    "Verifique se outros dispositivos na mesma rede conseguem acessar a internet.",
                    "Execute o diagnóstico de rede do Windows para identificação automática de problemas.",
                    "Verifique as configurações de IP para garantir que estejam configuradas corretamente (DHCP ou manual).",
                    "Reinicie o modem e roteador, aguardando 30 segundos com eles desligados.",
                    "Use o comando 'ipconfig /release' seguido de 'ipconfig /renew' para atualizar o endereço IP."
                ]
            },
            "problema DNS": {
                diagnose: "Problemas de resolução DNS impedindo acesso a websites por nome.",
                solution: [
                    "Tente acessar sites por IP em vez de nome de domínio para confirmar problema de DNS.",
                    "Altere os servidores DNS para alternativas como Google (8.8.8.8) ou Cloudflare (1.1.1.1).",
                    "Limpe o cache DNS com o comando 'ipconfig /flushdns'.",
                    "Verifique se não há softwares de firewall ou VPN interferindo na resolução DNS.",
                    "Desative IPv6 temporariamente se estiver usando apenas IPv4 para testar."
                ]
            },
            "IP conflitante": {
                diagnose: "Conflito de endereços IP na rede local causando desconexões intermitentes.",
                solution: [
                    "Verifique a mensagem de conflito de IP no Windows para identificar o endereço envolvido.",
                    "Configure endereços IP estáticos para dispositivos críticos fora da faixa DHCP do roteador.",
                    "Reduza o tempo de lease DHCP no roteador para liberar IPs não utilizados mais rapidamente.",
                    "Reinicie todos os dispositivos da rede, começando pelo modem/roteador.",
                    "Verifique se não há múltiplos servidores DHCP na mesma rede (vários roteadores)."
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
            },
            "queda frequente": {
                diagnose: "A conexão Wi-Fi cai com frequência, exigindo reconexão manual.",
                solution: [
                    "Atualize os drivers da placa de rede sem fio para a versão mais recente.",
                    "Verifique nas configurações avançadas do adaptador se o modo de economia de energia está desativado.",
                    "Altere o canal Wi-Fi no roteador para evitar interferências de redes vizinhas.",
                    "Desative e reative a banda 2.4GHz ou 5GHz se o roteador for dual-band.",
                    "Verifique se o firmware do roteador está atualizado."
                ]
            },
            "interferência": {
                diagnose: "Interferências físicas ou de frequência afetando a qualidade do sinal Wi-Fi.",
                solution: [
                    "Use aplicativos de análise Wi-Fi para identificar canais menos congestionados.",
                    "Reposicione o roteador longe de paredes grossas, metal, espelhos e eletrodomésticos.",
                    "Afaste o roteador de dispositivos que operem na mesma frequência (telefones sem fio, microondas).",
                    "Mude a faixa de frequência de 2.4GHz para 5GHz se disponível (menor alcance, maior velocidade).",
                    "Considere a instalação de repetidores Wi-Fi ou sistema mesh em ambientes maiores."
                ]
            }
        },
        ethernet: {
            "sem conexão": {
                diagnose: "O computador não detecta conexão via cabo Ethernet.",
                solution: [
                    "Verifique se o cabo está corretamente conectado em ambas as extremidades.",
                    "Teste com outro cabo Ethernet para descartar problemas no cabo.",
                    "Confira se as luzes da porta Ethernet no computador e no roteador estão acesas.",
                    "Verifique no Gerenciador de Dispositivos se a placa de rede está funcionando corretamente.",
                    "Teste a porta em outro dispositivo para verificar se o problema é na porta do roteador."
                ]
            },
            "desconexões": {
                diagnose: "A conexão Ethernet cai ou desconecta intermitentemente.",
                solution: [
                    "Substitua o cabo de rede por um de qualidade superior e verificado.",
                    "Verifique se o cabo não está próximo de fontes de interferência eletromagnética.",
                    "Atualize o driver da placa de rede para a versão mais recente.",
                    "Desative recursos de economia de energia da placa de rede nas configurações avançadas.",
                    "Teste com outra porta no switch/roteador para descartar problemas na porta."
                ]
            },
            "velocidade reduzida": {
                diagnose: "A conexão Ethernet está operando abaixo da velocidade esperada.",
                solution: [
                    "Verifique a categoria do cabo - use pelo menos Cat5e para Gigabit Ethernet.",
                    "Confirme que a placa de rede, cabo e roteador/switch suportam a mesma velocidade máxima.",
                    "Nas propriedades avançadas da placa de rede, force a velocidade/duplex desejada em vez de 'Auto'.",
                    "Verifique se não há outros dispositivos consumindo a banda na mesma rede.",
                    "Teste a velocidade conectando diretamente ao modem para isolar problemas no roteador."
                ]
            }
        },
        compartilhamento: {
            "acesso negado": {
                diagnose: "Não é possível acessar pastas ou arquivos compartilhados na rede.",
                solution: [
                    "Verifique as permissões de compartilhamento e NTFS da pasta compartilhada.",
                    "Confirme que o usuário tem as credenciais corretas para acessar o recurso.",
                    "Habilite a descoberta de rede e o compartilhamento de arquivos no Windows.",
                    "Verifique se o firewall não está bloqueando o acesso ao compartilhamento.",
                    "Certifique-se que ambos os computadores estão na mesma workgroup ou domínio."
                ]
            },
            "dispositivo não visível": {
                diagnose: "Computadores ou dispositivos não aparecem na rede local.",
                solution: [
                    "Habilite a descoberta de rede em todos os dispositivos.",
                    "Verifique se o Serviço de Compartilhamento de Arquivos e Impressoras está ativo.",
                    "Certifique-se que todos os dispositivos estão na mesma sub-rede.",
                    "Reinicie o serviço de Estação de Trabalho e Explorador de Rede nos dispositivos Windows.",
                    "Desative temporariamente firewalls para testar se são a causa do problema."
                ]
            },
            "lentidão transferência": {
                diagnose: "Transferência de arquivos na rede local está extremamente lenta.",
                solution: [
                    "Verifique a velocidade das conexões de rede em ambos os dispositivos.",
                    "Reduza o número de transferências simultâneas de arquivos.",
                    "Desative softwares que possam estar escaneando ou monitorando a transferência de arquivos.",
                    "Verifique se há gargalos de hardware (HDD lento, CPU sobrecarregada) em algum dos dispositivos.",
                    "Comprima arquivos grandes antes da transferência para reduzir o volume de dados."
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
            },
            "inicialização": {
                diagnose: "O sistema demora muito tempo para inicializar completamente.",
                solution: [
                    "Otimize os programas de inicialização desativando itens desnecessários no Gerenciador de Tarefas.",
                    "Verifique se há serviços não essenciais que podem ser definidos como manuais em vez de automáticos.",
                    "Execute uma limpeza de disco para remover arquivos temporários e desnecessários.",
                    "Verifique se o disco de inicialização está com boa saúde e não está muito fragmentado (para HDDs).",
                    "Considere migrar o sistema operacional para um SSD se estiver usando um HDD tradicional."
                ]
            },
            "multitarefa": {
                diagnose: "O sistema apresenta lentidão significativa ao executar múltiplas tarefas simultaneamente.",
                solution: [
                    "Verifique o uso de CPU, memória e disco durante a execução de múltiplas tarefas.",
                    "Aumente a quantidade de memória RAM se o uso estiver consistentemente acima de 80%.",
                    "Priorize aplicações importantes usando o Gerenciador de Tarefas.",
                    "Desative efeitos visuais desnecessários do Windows para liberar recursos.",
                    "Considere atualizar o processador se for o gargalo principal identificado."
                ]
            },
            "após atualização": {
                diagnose: "O sistema ficou visivelmente mais lento após uma atualização de software ou sistema operacional.",
                solution: [
                    "Verifique se todos os drivers foram atualizados para corresponder à nova versão do sistema.",
                    "Desinstale a atualização problemática se for possível identificá-la.",
                    "Execute a solução de problemas de desempenho do Windows.",
                    "Verifique se há novos processos em segundo plano consumindo recursos após a atualização.",
                    "Em casos extremos, considere fazer uma reinstalação limpa do sistema operacional."
                ]
            }
        },
        temperatura: {
            "Temperatura Alta": {
                diagnose: "O computador está operando em temperaturas elevadas.",
                solution: [
                    "Limpe o interior do gabinete e os coolers para remover poeira acumulada.",
                    "Verifique se todos os coolers estão funcionando corretamente.",
                    "Aplique nova pasta térmica no processador e cooler se necessário.",
                    "Melhore a ventilação do ambiente onde o computador está instalado.",
                    "Considere adicionar mais coolers ou um sistema de refrigeração mais eficiente."
                ]
            },
            "throttling": {
                diagnose: "O sistema está reduzindo o desempenho automaticamente para controlar a temperatura.",
                solution: [
                    "Monitore as temperaturas usando ferramentas como HWMonitor ou Core Temp.",
                    "Melhore a ventilação do gabinete adicionando mais ventoinhas ou organizando a passagem de ar.",
                    "Limpe os dissipadores de calor e ventoinhas, removendo poeira acumulada.",
                    "Aplique nova pasta térmica no processador e na placa de vídeo.",
                    "Considere soluções de refrigeração mais eficientes, como watercooling."
                ]
            },
            "desligamento térmico": {
                diagnose: "O computador desliga repentinamente devido ao superaquecimento.",
                solution: [
                    "Desligue o computador e deixe-o esfriar completamente antes de religá-lo.",
                    "Verifique se todos os coolers estão funcionando corretamente.",
                    "Limpe completamente o sistema, removendo poeira dos componentes e vias de ventilação.",
                    "Verifique as configurações da BIOS relacionadas à temperatura e redefinir caso necessário.",
                    "Em notebooks, considere o uso de bases refrigeradoras com ventoinhas extras."
                ]
            }
        },
        consumo: {
            "alto uso de CPU": {
                diagnose: "O processador está constantemente com alto uso, mesmo em repouso.",
                solution: [
                    "Identifique os processos consumindo CPU no Gerenciador de Tarefas (ordenar por uso de CPU).",
                    "Verifique se há malware executando em segundo plano com uma varredura completa do sistema.",
                    "Desative serviços e tarefas em segundo plano não essenciais.",
                    "Verifique se o sistema de refrigeração está adequado, evitando throttling térmico.",
                    "Atualize ou reinstale drivers de dispositivos que possam estar causando alto uso de CPU."
                ]
            },
            "alto uso memória": {
                diagnose: "O sistema está constantemente com alto uso de memória RAM.",
                solution: [
                    "Identifique aplicativos consumindo muita memória no Gerenciador de Tarefas.",
                    "Feche abas de navegadores não utilizadas, especialmente em Chrome ou Firefox.",
                    "Verifique se há vazamentos de memória em aplicativos específicos.",
                    "Reinicie o computador periodicamente para limpar a memória.",
                    "Considere aumentar a quantidade de RAM se o uso for legitimamente alto para suas necessidades."
                ]
            },
            "alto uso disco": {
                diagnose: "O disco rígido ou SSD está constantemente com 100% de utilização.",
                solution: [
                    "Identifique os processos consumindo I/O de disco no Gerenciador de Tarefas.",
                    "Desative o serviço Windows Search e Superfetch se estiverem causando alto uso.",
                    "Verifique a saúde do disco com CrystalDiskInfo.",
                    "Desative a indexação de arquivos para melhorar o desempenho em discos lentos.",
                    "Considere atualizar para um SSD se estiver usando HDD tradicional."
                ]
            },
            "bateria rápida": {
                diagnose: "A bateria do notebook está descarregando muito rapidamente.",
                solution: [
                    "Verifique quais aplicativos estão consumindo mais energia nas configurações de bateria.",
                    "Reduza o brilho da tela, que é um dos maiores consumidores de energia.",
                    "Desative conectividade sem fio (Wi-Fi, Bluetooth) quando não estiver em uso.",
                    "Ative o modo de economia de energia no Windows.",
                    "Verifique a saúde da bateria com o comando 'powercfg /batteryreport' no prompt de comando."
                ]
            }
        }
    },
    perifericos: {
        teclado: {
            "teclas não funcionam": {
                diagnose: "Uma ou mais teclas do teclado não respondem ao serem pressionadas.",
                solution: [
                    "Limpe o teclado removendo poeira e resíduos sob as teclas com ar comprimido.",
                    "Teste o teclado em outro computador para verificar se o problema é físico.",
                    "Reinstale ou atualize os drivers do teclado.",
                    "Verifique se não há configurações de acessibilidade ativas que possam estar interferindo.",
                    "Para teclados mecânicos, considere remover e limpar os switches das teclas afetadas."
                ]
            },
            "teclas repetindo": {
                diagnose: "As teclas repetem caracteres involuntariamente ao serem pressionadas.",
                solution: [
                    "Ajuste as configurações de repetição de teclas no Painel de Controle do Windows.",
                    "Verifique se não há teclas fisicamente presas no teclado.",
                    "Reinstale os drivers do teclado ou atualize para a versão mais recente.",
                    "Teste com outro teclado para verificar se é um problema de hardware ou software.",
                    "Se for um teclado mecânico, limpe ou substitua o switch da tecla afetada."
                ]
            },
            "layout incorreto": {
                diagnose: "O layout do teclado não corresponde às teclas físicas do dispositivo.",
                solution: [
                    "Verifique as configurações de idioma e teclado no Windows.",
                    "Ajuste o layout para corresponder ao seu teclado físico (ABNT, US, etc.).",
                    "Use a combinação Alt+Shift para alternar entre layouts configurados.",
                    "Remova layouts de teclado não utilizados nas configurações de idioma.",
                    "Reinicie o computador após fazer alterações nas configurações de teclado."
                ]
            }
        },
        mouse: {
            "movimento errático": {
                diagnose: "O ponteiro do mouse se move de forma irregular ou imprevisível.",
                solution: [
                    "Limpe o sensor do mouse com ar comprimido ou cotonete com álcool isopropílico.",
                    "Troque a superfície onde o mouse é utilizado, preferindo mousepad adequado.",
                    "Atualize ou reinstale os drivers do mouse.",
                    "Ajuste a velocidade e a aceleração do ponteiro nas configurações do Windows.",
                    "Teste o mouse em outro computador para verificar se é um problema de hardware."
                ]
            },
            "cliques indesejados": {
                diagnose: "O mouse executa cliques não intencionais ou duplos cliques ao clicar uma vez.",
                solution: [
                    "Ajuste a velocidade de duplo clique nas configurações do mouse no Windows.",
                    "Verifique se não há pó ou sujeira nos botões que possam estar causando mau contato.",
                    "Abra o mouse (se possível) e limpe os switches dos botões.",
                    "Atualize ou reinstale os drivers do mouse.",
                    "Se persistir, provavelmente é um problema mecânico no switch, considerando substituição."
                ]
            },
            "sem resposta": {
                diagnose: "O mouse não responde ou é detectado intermitentemente pelo sistema.",
                solution: [
                    "Verifique a conexão do cabo ou a bateria no caso de mouse sem fio.",
                    "Tente conectar o mouse em outra porta USB.",
                    "Para mouses sem fio, reinicie o receptor e verifique interferências.",
                    "Reinstale os drivers do dispositivo no Gerenciador de Dispositivos.",
                    "Teste o mouse em outro computador para confirmar se é um problema de hardware."
                ]
            }
        },
        impressora: {
            "não imprime": {
                diagnose: "A impressora não executa trabalhos de impressão enviados.",
                solution: [
                    "Verifique se a impressora está ligada, conectada e com papel e tinta/toner.",
                    "Cancele todos os trabalhos na fila de impressão e reinicie o serviço de spooler.",
                    "Reinicie a impressora e o computador.",
                    "Reinstale ou atualize os drivers da impressora.",
                    "Verifique se a impressora está definida como padrão e não está em modo offline."
                ]
            },
            "qualidade ruim": {
                diagnose: "A qualidade da impressão está abaixo do esperado, com manchas ou falhas.",
                solution: [
                    "Execute o utilitário de limpeza de cabeçotes através do software da impressora.",
                    "Verifique os níveis de tinta ou toner e substitua se necessário.",
                    "Utilize a função de alinhamento de cabeçotes no software da impressora.",
                    "Verifique se está usando papel adequado para o tipo de impressão.",
                    "Para impressoras a laser, limpe o tambor e outros componentes internos conforme o manual."
                ]
            },
            "erro de conexão": {
                diagnose: "O computador não consegue se comunicar com a impressora em rede ou USB.",
                solution: [
                    "Verifique se a impressora está ligada e corretamente conectada via cabo ou rede.",
                    "Reinicie a impressora e o roteador (para impressoras em rede).",
                    "Verifique se o endereço IP da impressora não mudou (para impressoras em rede).",
                    "Reinstale os drivers da impressora usando o instalador mais recente do fabricante.",
                    "Adicione a impressora manualmente nas configurações do Windows usando seu endereço IP."
                ]
            }
        },
        webcam: {
            "não detectada": {
                diagnose: "A webcam não é reconhecida pelo sistema ou pelos aplicativos.",
                solution: [
                    "Verifique se a webcam está corretamente conectada ou integrada.",
                    "Confirme que a webcam não está desativada nas configurações de privacidade do Windows.",
                    "Reinstale ou atualize os drivers da webcam.",
                    "Verifique se há algum botão físico ou combinação de teclas que possa ter desativado a webcam.",
                    "Teste a webcam em outro computador para verificar se é um problema de hardware."
                ]
            },
            "imagem ruim": {
                diagnose: "A imagem da webcam está com baixa qualidade, escura ou com ruídos.",
                solution: [
                    "Ajuste as configurações de brilho, contraste e exposição no software da webcam.",
                    "Melhore a iluminação do ambiente, evitando contraluz.",
                    "Limpe a lente da webcam com um pano macio e seco.",
                    "Atualize os drivers para a versão mais recente.",
                    "Verifique se a resolução está configurada corretamente no software que está usando a webcam."
                ]
            }
        }
    },
    energia: {
        fonte: {
            "não liga": {
                diagnose: "A fonte de alimentação não liga ou não fornece energia ao sistema.",
                solution: [
                    "Verifique se o cabo de energia está corretamente conectado à tomada e à fonte.",
                    "Teste a tomada com outro dispositivo para confirmar que está funcionando.",
                    "Verifique o botão de liga/desliga da fonte e a chave de seleção de voltagem (110V/220V).",
                    "Se possível, teste com outra fonte de alimentação para isolar o problema.",
                    "Inspecione visualmente a fonte em busca de componentes queimados ou inchados."
                ]
            },
            "ruídos anormais": {
                diagnose: "A fonte de alimentação está emitindo ruídos estranhos como estalos ou zumbidos.",
                solution: [
                    "Desligue o computador imediatamente para evitar danos a outros componentes.",
                    "Verifique se o ventilador da fonte não está obstruído por poeira ou cabos.",
                    "Observe se o ruído ocorre em momentos específicos (alta carga, inicialização).",
                    "Fontes com coil whine (zumbido) sob carga podem não indicar problema grave.",
                    "Se o ruído for de estalos ou estalidos, substitua a fonte imediatamente."
                ]
            },
            "insuficiente": {
                diagnose: "A fonte não fornece energia suficiente para todos os componentes, causando instabilidade.",
                solution: [
                    "Calcule o consumo total do seu sistema com todas as peças (use calculadoras online).",
                    "Verifique se a fonte tem potência suficiente para o seu hardware atual.",
                    "Desconecte dispositivos não essenciais para reduzir o consumo energético.",
                    "Verifique se há picos de energia que podem estar sobrecarregando a fonte.",
                    "Substitua por uma fonte de maior potência e boa qualidade, de preferência com certificação."
                ]
            }
        },
        bateria: {
            "não carrega": {
                diagnose: "A bateria do notebook não carrega quando conectada à energia.",
                solution: [
                    "Verifique se o carregador está conectado corretamente e a luz indicadora acende.",
                    "Teste com outro carregador compatível, se disponível.",
                    "Remova a bateria (se removível) e reconecte-a.",
                    "Verifique o status de saúde da bateria com o comando 'powercfg /batteryreport'.",
                    "No BIOS/UEFI, verifique se há opções relacionadas à bateria que possam estar desativadas."
                ]
            },
            "descarrega rápido": {
                diagnose: "A bateria do notebook descarrega muito mais rápido que o normal.",
                solution: [
                    "Verifique quais aplicativos estão consumindo mais energia nas configurações.",
                    "Reduza o brilho da tela e desative recursos como Wi-Fi e Bluetooth quando não utilizados.",
                    "Verifique a saúde da bateria com 'powercfg /batteryreport' para ver sua capacidade atual.",
                    "Ative o modo de economia de energia do Windows.",
                    "Baterias com mais de 2-3 anos geralmente perdem capacidade e podem precisar de substituição."
                ]
            },
            "inflada": {
                diagnose: "A bateria do notebook está inchada ou deformada.",
                solution: [
                    "PARE de usar a bateria imediatamente - baterias infladas são perigosas e podem causar incêndios.",
                    "Remova a bateria do notebook com cuidado se for removível.",
                    "Não perfure, dobre ou danifique a bateria inflada.",
                    "Descarte a bateria em local apropriado para resíduos eletrônicos.",
                    "Substitua por uma bateria nova e original do fabricante do notebook."
                ]
            }
        },
        picos: {
            "desligamentos": {
                diagnose: "O computador desliga repentinamente devido a picos ou quedas de energia.",
                solution: [
                    "Conecte o computador a um estabilizador ou, preferencialmente, a um nobreak (UPS).",
                    "Verifique se a tomada e a instalação elétrica estão em boas condições.",
                    "Reduza o número de dispositivos conectados no mesmo circuito elétrico.",
                    "Verifique se a fonte de alimentação tem proteções contra picos e quedas de energia.",
                    "Configure o Windows para salvar automaticamente documentos e realizar hibernação na falta de energia."
                ]
            },
            "reinicia sozinho": {
                diagnose: "O computador reinicia sozinho sem aviso, possivelmente por problemas elétricos.",
                solution: [
                    "Verifique os logs de eventos do Windows para identificar a causa da reinicialização.",
                    "Desative a opção de reinicialização automática em caso de falha nas configurações avançadas do sistema.",
                    "Teste o computador em outra tomada ou circuito elétrico.",
                    "Utilize um nobreak (UPS) para fornecer energia estável ao sistema.",
                    "Verifique se a fonte de alimentação está fornecendo voltagens estáveis aos componentes."
                ]
            }
        }
    }
};


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


const toolsBase = {
    Hardware: [
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
    Software: [
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
    Rede: [
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
    Recuperação: [
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



function mapCategoryToKnowledgeBase(category) {
    const categoryMap = {
        "hardware": "hardware",
        "software": "software",
        "network": "rede",
        "performance": "performance",
        "perifericos": "perifericos",
        "energia": "energia",
        "seguranca": "seguranca",
        "manutencao": "manutencao",
        "dispositivos_especificos": "dispositivos_especificos"
    };
    
    return categoryMap[category] || category;
}


function diagnose() {
    try {
        const category = document.getElementById("problem-category")?.value;
        const subcategory = document.getElementById("problem-subcategory")?.value;
        const symptom = document.getElementById("symptoms")?.value;
        const additionalInfo = document.getElementById("additional-info")?.value || "";
        
        if (!category || !subcategory || !symptom) {
            alert("Por favor, preencha todos os campos necessários para o diagnóstico.");
            return;
        }
        
        const knowledgeBaseCategory = mapCategoryToKnowledgeBase(category);
        
        if (!knowledgeBase[knowledgeBaseCategory]) {
            console.error(`Categoria '${knowledgeBaseCategory}' não encontrada na base de conhecimento.`);
            alert("Erro: Categoria não encontrada na base de conhecimento.");
            return;
        }
        
        if (!knowledgeBase[knowledgeBaseCategory][subcategory]) {
            console.error(`Subcategoria '${subcategory}' não encontrada na categoria '${knowledgeBaseCategory}'.`);
            alert("Erro: Tipo de problema não encontrado na base de conhecimento.");
            return;
        }
        
        if (!knowledgeBase[knowledgeBaseCategory][subcategory][symptom]) {
            console.error(`Sintoma '${symptom}' não encontrado na subcategoria '${subcategory}'.`);
            alert("Erro: Sintoma não encontrado na base de conhecimento.");
            return;
        }
        
        const result = knowledgeBase[knowledgeBaseCategory][subcategory][symptom];
        
        let resultContainer = document.getElementById("result");
        if (!resultContainer) {
            console.log("Criando container de resultado que não existe");
            resultContainer = document.createElement("div");
            resultContainer.id = "result";
            resultContainer.className = "hidden";
            
            const resultTitle = document.createElement("div");
            resultTitle.className = "result-title";
            resultTitle.textContent = "Resultado do Diagnóstico:";
            
            const diagnosisText = document.createElement("div");
            diagnosisText.id = "diagnosis-text";
            
            const solutionSteps = document.createElement("div");
            solutionSteps.id = "solution-steps";
            solutionSteps.className = "fade-in";
            
            resultContainer.appendChild(resultTitle);
            resultContainer.appendChild(diagnosisText);
            resultContainer.appendChild(solutionSteps);
            
            const diagnosticTab = document.getElementById("diagnostic-tab");
            if (diagnosticTab) {
                diagnosticTab.appendChild(resultContainer);
            } else {
                const diagnosticPanel = document.querySelector(".diagnostic-panel");
                if (diagnosticPanel) {
                    diagnosticPanel.appendChild(resultContainer);
                } else {
                    document.body.appendChild(resultContainer);
                    console.warn("Adicionando resultado ao body porque não encontrou o local adequado");
                }
            }
        }
        
        let diagnosisTextElement = document.getElementById("diagnosis-text");
        if (!diagnosisTextElement) {
            console.log("Criando elemento de texto de diagnóstico que não existe");
            diagnosisTextElement = document.createElement("div");
            diagnosisTextElement.id = "diagnosis-text";
            resultContainer.appendChild(diagnosisTextElement);
        }
        
        let solutionStepsElement = document.getElementById("solution-steps");
        if (!solutionStepsElement) {
            console.log("Criando elemento de passos de solução que não existe");
            solutionStepsElement = document.createElement("div");
            solutionStepsElement.id = "solution-steps";
            solutionStepsElement.className = "fade-in";
            resultContainer.appendChild(solutionStepsElement);
        }
        
        diagnosisTextElement.textContent = result.diagnose;
        
        solutionStepsElement.innerHTML = "<h3>Passos para Solução:</h3>";
        
        result.solution.forEach((step, index) => {
            const stepDiv = document.createElement("div");
            stepDiv.className = "solution-step";
            stepDiv.innerHTML = `
                <div class="solution-step-title">Passo ${index + 1}</div>
                <div class="solution-step-content">${step}</div>
            `;
            solutionStepsElement.appendChild(stepDiv);
        });
        
        resultContainer.classList.remove("hidden");
        
        try {
            addToHistory(category, subcategory, symptom);
        } catch (historyError) {
            console.error("Erro ao adicionar ao histórico:", historyError);
        }
    } catch (error) {
        console.error("Erro ao executar diagnóstico:", error);
        alert("Ocorreu um erro ao processar o diagnóstico. Por favor, recarregue a página e tente novamente.");
    }
}


function generateMaintenancePlan() {
    const maintenanceType = document.getElementById("maintenance-type").value;
    const computerAge = document.getElementById("computer-age").value;
    const systemType = document.getElementById("system-type").value;


    if (!maintenanceType || !computerAge) {
        alert("Por favor, selecione o tipo de manutenção e a idade do computador.");
        return;
    }


    if (maintenanceBase[maintenanceType] && maintenanceBase[maintenanceType][computerAge]) {
        const maintenancePlan = maintenanceBase[maintenanceType][computerAge];


        let planHtml = "<ul>";
        maintenancePlan.forEach(step => {
            planHtml += `<li>${step}</li>`;
        });
        planHtml += "</ul>";


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


function addToHistory(category, subcategory, symptom) {
    const history = document.getElementById("history");


    if (history.querySelector("p")) {
        history.innerHTML = "";
    }


    let categoryName, subcategoryName, symptomName;

    switch (category) {
        case "hardware": categoryName = "Hardware"; break;
        case "software": categoryName = "Software"; break;
        case "rede": categoryName = "Rede"; break;
        case "performance": categoryName = "Desempenho"; break;
        case "perifericos": categoryName = "Periféricos"; break;
        case "energia": categoryName = "Energia"; break;
        default: categoryName = category;
    }

    switch (subcategory) {
        case "motherboard": subcategoryName = "Placa-mãe"; break;
        case "cpu": subcategoryName = "Processador"; break;
        case "memoria": subcategoryName = "Memória RAM"; break;
        case "armazenamento": subcategoryName = "Disco/Armazenamento"; break;
        case "video": subcategoryName = "Placa de Vídeo"; break;
        case "audio": subcategoryName = "Áudio"; break;
        case "sistema": subcategoryName = "Sistema Operacional"; break;
        case "aplicativos": subcategoryName = "Aplicativos"; break;
        case "malware": subcategoryName = "Vírus/Malware"; break;
        case "drivers": subcategoryName = "Drivers"; break;
        case "conexao": subcategoryName = "Internet"; break;
        case "wifi": subcategoryName = "Wi-Fi"; break;
        case "ethernet": subcategoryName = "Ethernet"; break;
        case "compartilhamento": subcategoryName = "Compartilhamento"; break;
        case "lentidao": subcategoryName = "Lentidão"; break;
        case "temperatura": subcategoryName = "Temperatura"; break;
        case "consumo": subcategoryName = "Consumo"; break;
        case "teclado": subcategoryName = "Teclado"; break;
        case "mouse": subcategoryName = "Mouse"; break;
        case "impressora": subcategoryName = "Impressora"; break;
        case "webcam": subcategoryName = "Webcam"; break;
        case "fonte": subcategoryName = "Fonte de Alimentação"; break;
        case "bateria": subcategoryName = "Bateria"; break;
        case "picos": subcategoryName = "Problemas Elétricos"; break;
        default: subcategoryName = subcategory;
    }

    symptomName = symptom.charAt(0).toUpperCase() + symptom.slice(1);


    const historyItem = document.createElement("div");
    historyItem.className = "history-item";


    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();

    historyItem.innerHTML = `
        <div class="history-date">${dateStr} ${timeStr}</div>
        <div class="history-problem">${categoryName} > ${subcategoryName} > ${symptomName}</div>
    `;


    history.insertBefore(historyItem, history.firstChild);
}


function handleQuickLinks(e) {
    e.preventDefault();

    const linkId = e.target.id;
    let content = "";

    switch (linkId) {
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

    modal.querySelector(".close-modal").addEventListener("click", function () {
        document.body.removeChild(modal);
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && document.querySelector(".modal")) {
            document.body.removeChild(modal);
        }
    });
}


function switchTab(tabId) {

    document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.remove("active");
    });


    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });


    document.getElementById(`${tabId}-tab`).classList.add("active");
    document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add("active");
}


function updateKnowledgeSubcategories() {
    const category = document.getElementById("knowledge-category").value;
    const subcategorySelect = document.getElementById("knowledge-subcategory");
    
    console.log(`Base de Conhecimento - Categoria selecionada: "${category}"`);
    
    subcategorySelect.innerHTML = "";
    subcategorySelect.disabled = true;
    
    if (!category) {
        subcategorySelect.innerHTML = "<option value=''>Primeiro selecione uma categoria</option>";
        return;
    }
    
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Selecione uma subcategoria";
    subcategorySelect.appendChild(defaultOption);
    
        const knowledgeBaseCategory = mapCategoryToKnowledgeBase(category);
    console.log(`Base de Conhecimento - Categoria mapeada: "${knowledgeBaseCategory}"`);
    
    if (knowledgeBase[knowledgeBaseCategory]) {
        console.log(`Base de Conhecimento - Encontrou categoria "${knowledgeBaseCategory}" na base de conhecimento`);
        const subcategories = Object.keys(knowledgeBase[knowledgeBaseCategory]);
        console.log(`Base de Conhecimento - Subcategorias encontradas: ${subcategories}`);
        
        subcategories.forEach(subcategory => {
            const option = document.createElement("option");
            option.value = subcategory;
            
            let displayName = subcategory;
            switch(subcategory) {
                case "motherboard": displayName = "Placa-mãe"; break;
                case "cpu": displayName = "Processador"; break;
                case "memoria": displayName = "Memória RAM"; break;
                case "armazenamento": displayName = "Disco/Armazenamento"; break;
                case "video": displayName = "Placa de Vídeo"; break;
                case "audio": displayName = "Áudio"; break;
                case "rede": displayName = "Hardware de Rede"; break;
                case "usb": displayName = "Portas USB"; break;
                
                case "sistema": displayName = "Sistema Operacional"; break;
                case "aplicativos": displayName = "Aplicativos/Programas"; break;
                case "malware": displayName = "Vírus/Malware"; break;
                case "drivers": displayName = "Drivers"; break;
                case "atualizacoes": displayName = "Atualizações"; break;
                
                case "conexao": displayName = "Conexão com Internet"; break;
                case "wifi": displayName = "Rede Wi-Fi"; break;
                case "ethernet": displayName = "Conexão Ethernet"; break;
                case "compartilhamento": displayName = "Compartilhamento de Rede"; break;
                case "conectividade": displayName = "Problemas de Conectividade"; break;
                
                case "lentidao": displayName = "Lentidão"; break;
                case "temperatura": displayName = "Temperatura"; break;
                case "consumo": displayName = "Consumo de Recursos"; break;
                
                case "teclado": displayName = "Teclado"; break;
                case "mouse": displayName = "Mouse"; break;
                case "impressora": displayName = "Impressora"; break;
                case "webcam": displayName = "Webcam"; break;
                case "monitor": displayName = "Monitor"; break;
                
                case "fonte": displayName = "Fonte de Alimentação"; break;
                case "bateria": displayName = "Bateria"; break;
                case "picos": displayName = "Problemas Elétricos"; break;
                case "nobreak": displayName = "No-break/UPS"; break;
                
                case "virus": displayName = "Vírus e Malware"; break;
                case "privacidade": displayName = "Privacidade"; break;
                case "ransomware": displayName = "Ransomware"; break;
                
                case "preventiva": displayName = "Manutenção Preventiva"; break;
                case "backup": displayName = "Backup e Recuperação"; break;
                
                case "notebook": displayName = "Notebooks"; break;
                case "allinone": displayName = "Computadores All-in-One"; break;
            }
            
            option.textContent = displayName;
            subcategorySelect.appendChild(option);
        });
        
        subcategorySelect.disabled = false;
    } else {
        console.log(`Base de Conhecimento - ERRO: Categoria "${knowledgeBaseCategory}" não encontrada na base de conhecimento`);
        console.log(`Base de Conhecimento - Chaves disponíveis: ${Object.keys(knowledgeBase)}`);
    }
}


function updateSubcategories() {
    const category = document.getElementById("problem-category").value;
    const subcategorySelect = document.getElementById("problem-subcategory");
    
    console.log(`Categoria selecionada: "${category}"`);
    
    subcategorySelect.innerHTML = "";
    subcategorySelect.disabled = true;
    
    subcategorySelect.innerHTML = "";
    subcategorySelect.disabled = true;
    
    document.getElementById("symptoms").innerHTML = "";
    document.getElementById("symptoms").disabled = true;
    
    if (!category) {
        subcategorySelect.innerHTML = "<option value=''>Primeiro selecione uma categoria</option>";
        return;
    }
    
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Selecione um tipo de problema";
    subcategorySelect.appendChild(defaultOption);
    
    const knowledgeBaseCategory = mapCategoryToKnowledgeBase(category);
    console.log(`Categoria mapeada para a base de conhecimento: "${knowledgeBaseCategory}"`);
    
    if (knowledgeBase[knowledgeBaseCategory]) {
        console.log(`Encontrou categoria "${knowledgeBaseCategory}" na base de conhecimento`);
        const subcategories = Object.keys(knowledgeBase[knowledgeBaseCategory]);
        console.log(`Subcategorias encontradas: ${subcategories}`);
        
        subcategories.forEach(subcategory => {
            const option = document.createElement("option");
            option.value = subcategory;
            
            let displayName = subcategory;
            switch(subcategory) {
                case "motherboard": displayName = "Placa-mãe"; break;
                case "cpu": displayName = "Processador"; break;
                case "memoria": displayName = "Memória RAM"; break;
                case "armazenamento": displayName = "Disco/Armazenamento"; break;
                case "video": displayName = "Placa de Vídeo"; break;
                case "audio": displayName = "Áudio"; break;
                case "sistema": displayName = "Sistema Operacional"; break;
                case "aplicativos": displayName = "Aplicativos/Programas"; break;
                case "malware": displayName = "Vírus/Malware"; break;
                case "drivers": displayName = "Drivers"; break;
                case "conexao": displayName = "Conexão com Internet"; break;
                case "wifi": displayName = "Rede Wi-Fi"; break;
                case "ethernet": displayName = "Conexão Ethernet"; break;
                case "compartilhamento": displayName = "Compartilhamento de Rede"; break;
                case "lentidao": displayName = "Lentidão"; break;
                case "temperatura": displayName = "Temperatura"; break;
                case "consumo": displayName = "Consumo de Recursos"; break;
                case "teclado": displayName = "Teclado"; break;
                case "mouse": displayName = "Mouse"; break;
                case "impressora": displayName = "Impressora"; break;
                case "webcam": displayName = "Webcam"; break;
                case "fonte": displayName = "Fonte de Alimentação"; break;
                case "bateria": displayName = "Bateria"; break;
                case "picos": displayName = "Problemas Elétricos"; break;
            }
            
            option.textContent = displayName;
            subcategorySelect.appendChild(option);
        });
        
        subcategorySelect.disabled = false;
    } else {
        console.log(`ERRO: Categoria "${knowledgeBaseCategory}" não encontrada na base de conhecimento`);
        console.log(`Chaves disponíveis: ${Object.keys(knowledgeBase)}`);
    }
}


function updateSymptoms() {
    const category = document.getElementById("problem-category").value;
    const subcategory = document.getElementById("problem-subcategory").value;
    const symptomsSelect = document.getElementById("symptoms");
    
    symptomsSelect.innerHTML = "";
    symptomsSelect.disabled = true;
    
    if (!subcategory) {
        symptomsSelect.innerHTML = "<option value=''>Primeiro selecione um tipo de problema</option>";
        return;
    }
    
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Selecione os sintomas específicos";
    symptomsSelect.appendChild(defaultOption);
    
    const knowledgeBaseCategory = mapCategoryToKnowledgeBase(category);
    
    if (knowledgeBase[knowledgeBaseCategory] && knowledgeBase[knowledgeBaseCategory][subcategory]) {
        const symptoms = Object.keys(knowledgeBase[knowledgeBaseCategory][subcategory]);
        
        symptoms.forEach(symptom => {
            const option = document.createElement("option");
            option.value = symptom;
            option.textContent = symptom.charAt(0).toUpperCase() + symptom.slice(1);
            symptomsSelect.appendChild(option);
        });
        
        symptomsSelect.disabled = false;
    }
}


function showKnowledgeBase() {
    const category = document.getElementById("knowledge-category").value;
    const subcategory = document.getElementById("knowledge-subcategory").value;


    if (!category) {
        alert("Por favor, selecione pelo menos uma categoria.");
        return;
    }

    const knowledgeContent = document.getElementById("knowledge-content");
    knowledgeContent.innerHTML = "";


    if (category === "hardware" || category === "software" || category === "rede" || category === "performance" || category === "perifericos" || category === "energia") {
        if (subcategory) {

            showProblemKnowledge(category, subcategory);
        } else {

            showAllSubcategoriesKnowledge(category);
        }
    } else if (category === "maintenance") {
        if (subcategory) {

            showMaintenanceKnowledge(subcategory);
        } else {

            showAllMaintenanceKnowledge();
        }
    } else if (category === "tools") {
        if (subcategory) {

            showToolsKnowledge(subcategory);
        } else {

            showAllToolsKnowledge();
        }
    }


    document.getElementById("knowledge-result").classList.remove("hidden");
}


function showProblemKnowledge(category, subcategory) {
    const knowledgeContent = document.getElementById("knowledge-content");
    const data = knowledgeBase[category][subcategory];


    let subcategoryName = subcategory;
    switch (subcategory) {
        case "motherboard": subcategoryName = "Placa-mãe"; break;
        case "cpu": subcategoryName = "Processador"; break;
        case "memoria": subcategoryName = "Memória RAM"; break;
        case "armazenamento": subcategoryName = "Disco/Armazenamento"; break;
        case "video": subcategoryName = "Placa de Vídeo"; break;
        case "audio": subcategoryName = "Áudio"; break;
        case "sistema": subcategoryName = "Sistema Operacional"; break;
        case "aplicativos": subcategoryName = "Aplicativos/Programas"; break;
        case "malware": subcategoryName = "Vírus/Malware"; break;
        case "drivers": subcategoryName = "Drivers"; break;
        case "conexao": subcategoryName = "Conexão com Internet"; break;
        case "wifi": subcategoryName = "Rede Wi-Fi"; break;
        case "ethernet": subcategoryName = "Conexão Ethernet"; break;
        case "compartilhamento": subcategoryName = "Compartilhamento de Rede"; break;
        case "lentidao": subcategoryName = "Lentidão"; break;
        case "temperatura": subcategoryName = "Temperatura"; break;
        case "consumo": subcategoryName = "Consumo de Recursos"; break;
        case "teclado": subcategoryName = "Teclado"; break;
        case "mouse": subcategoryName = "Mouse"; break;
        case "impressora": subcategoryName = "Impressora"; break;
        case "webcam": subcategoryName = "Webcam"; break;
        case "fonte": subcategoryName = "Fonte de Alimentação"; break;
        case "bateria": subcategoryName = "Bateria"; break;
        case "picos": subcategoryName = "Problemas Elétricos"; break;
    }


    const section = document.createElement("div");
    section.className = "knowledge-section";
    section.innerHTML = `<h3>Problemas e Soluções: ${subcategoryName}</h3>`;


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


function showAllSubcategoriesKnowledge(category) {
    const knowledgeContent = document.getElementById("knowledge-content");
    const data = knowledgeBase[category];


    let categoryName;
    switch (category) {
        case "hardware": categoryName = "Hardware"; break;
        case "software": categoryName = "Software"; break;
        case "rede": categoryName = "Rede"; break;
        case "performance": categoryName = "Desempenho"; break;
        case "perifericos": categoryName = "Periféricos"; break;
        case "energia": categoryName = "Energia"; break;
    }


    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = `Base de Conhecimento: ${categoryName}`;
    knowledgeContent.appendChild(categoryTitle);


    for (const [subcategory, problems] of Object.entries(data)) {

        let subcategoryName = subcategory;
        switch (subcategory) {
            case "motherboard": subcategoryName = "Placa-mãe"; break;
            case "cpu": subcategoryName = "Processador"; break;
            case "memoria": subcategoryName = "Memória RAM"; break;
            case "armazenamento": subcategoryName = "Disco/Armazenamento"; break;
            case "video": subcategoryName = "Placa de Vídeo"; break;
            case "audio": subcategoryName = "Áudio"; break;
            case "sistema": subcategoryName = "Sistema Operacional"; break;
            case "aplicativos": subcategoryName = "Aplicativos/Programas"; break;
            case "malware": subcategoryName = "Vírus/Malware"; break;
            case "drivers": subcategoryName = "Drivers"; break;
            case "conexao": subcategoryName = "Conexão com Internet"; break;
            case "wifi": subcategoryName = "Rede Wi-Fi"; break;
            case "ethernet": subcategoryName = "Conexão Ethernet"; break;
            case "compartilhamento": subcategoryName = "Compartilhamento de Rede"; break;
            case "lentidao": subcategoryName = "Lentidão"; break;
            case "temperatura": subcategoryName = "Temperatura"; break;
            case "consumo": subcategoryName = "Consumo de Recursos"; break;
            case "teclado": subcategoryName = "Teclado"; break;
            case "mouse": subcategoryName = "Mouse"; break;
            case "impressora": subcategoryName = "Impressora"; break;
            case "webcam": subcategoryName = "Webcam"; break;
            case "fonte": subcategoryName = "Fonte de Alimentação"; break;
            case "bateria": subcategoryName = "Bateria"; break;
            case "picos": subcategoryName = "Problemas Elétricos"; break;
        }


        const section = document.createElement("div");
        section.className = "knowledge-section";
        section.innerHTML = `<h3>${subcategoryName}</h3>`;


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


function showMaintenanceKnowledge(maintenanceType) {
    const knowledgeContent = document.getElementById("knowledge-content");
    const data = maintenanceBase[maintenanceType];


    let maintenanceName;
    switch (maintenanceType) {
        case "general": maintenanceName = "Manutenção Geral"; break;
        case "performance": maintenanceName = "Otimização de Desempenho"; break;
        case "security": maintenanceName = "Segurança"; break;
        case "cleaning": maintenanceName = "Limpeza de Hardware"; break;
    }


    const section = document.createElement("div");
    section.className = "knowledge-section";
    section.innerHTML = `<h3>Planos de Manutenção: ${maintenanceName}</h3>`;


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


function showAllMaintenanceKnowledge() {
    const knowledgeContent = document.getElementById("knowledge-content");


    const mainTitle = document.createElement("h3");
    mainTitle.textContent = "Planos de Manutenção Preventiva";
    knowledgeContent.appendChild(mainTitle);


    const maintenanceTypes = {
        "general": "Manutenção Geral",
        "performance": "Otimização de Desempenho",
        "security": "Segurança",
        "cleaning": "Limpeza de Hardware"
    };


    for (const [type, name] of Object.entries(maintenanceTypes)) {
        const section = document.createElement("div");
        section.className = "knowledge-section";
        section.innerHTML = `<h3>${name}</h3>`;


        const descriptions = {
            "general": "Manutenção geral do sistema para garantir o bom funcionamento do computador.",
            "performance": "Otimizações para melhorar o desempenho e a velocidade do computador.",
            "security": "Medidas para garantir a segurança dos dados e proteger contra ameaças.",
            "cleaning": "Procedimentos de limpeza física para prolongar a vida útil do hardware."
        };


        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "knowledge-item-content";
        descriptionDiv.textContent = descriptions[type];
        section.appendChild(descriptionDiv);


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


function showToolsKnowledge(toolCategory) {
    const knowledgeContent = document.getElementById("knowledge-content");
    const tools = toolsBase[toolCategory];


    let categoryName;
    switch (toolCategory) {
        case "hardware": categoryName = "Ferramentas de Hardware"; break;
        case "software": categoryName = "Software de Diagnóstico"; break;
        case "rede": categoryName = "Ferramentas de Rede"; break;
        case "recovery": categoryName = "Recuperação de Dados"; break;
    }


    const section = document.createElement("div");
    section.className = "knowledge-section";
    section.innerHTML = `<h3>Ferramentas Recomendadas: ${categoryName}</h3>`;


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


function showAllToolsKnowledge() {
    const knowledgeContent = document.getElementById("knowledge-content");


    const mainTitle = document.createElement("h3");
    mainTitle.textContent = "Ferramentas Recomendadas";
    knowledgeContent.appendChild(mainTitle);


    const toolCategories = {
        "hardware": "Ferramentas de Hardware",
        "software": "Software de Diagnóstico",
        "rede": "Ferramentas de Rede",
        "recovery": "Recuperação de Dados"
    };


    const descriptions = {
        "hardware": "Ferramentas físicas para manutenção e reparo de componentes de hardware.",
        "software": "Programas para diagnóstico, monitoramento e otimização do sistema.",
        "rede": "Ferramentas para análise, diagnóstico e otimização de redes.",
        "recovery": "Soluções para recuperação e backup de dados."
    };


    for (const [category, name] of Object.entries(toolCategories)) {
        const section = document.createElement("div");
        section.className = "knowledge-section";
        section.innerHTML = `<h3>${name}</h3>`;


        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "knowledge-item-content";
        descriptionDiv.textContent = descriptions[category];
        section.appendChild(descriptionDiv);


        const examplesDiv = document.createElement("div");
        examplesDiv.className = "knowledge-item-content";
        examplesDiv.innerHTML = `<strong>Exemplos:</strong> ${toolsBase[category].map(tool => tool.name).slice(0, 3).join(", ")} e outras.`;
        section.appendChild(examplesDiv);


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


document.addEventListener("DOMContentLoaded", function () {

    detectSystemInfo();


    document.getElementById("problem-category").addEventListener("change", updateSubcategories);
    document.getElementById("problem-subcategory").addEventListener("change", updateSymptoms);


    document.getElementById("diagnose-btn").addEventListener("click", diagnose);


    document.getElementById("maintenance-btn").addEventListener("click", generateMaintenancePlan);


    document.getElementById("tools-btn").addEventListener("click", showRecommendedTools);


    document.querySelectorAll(".quick-links a").forEach(link => {
        link.addEventListener("click", handleQuickLinks);
    });


    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", function () {
            const tabId = this.getAttribute("data-tab");
            switchTab(tabId);
        });
    });


    document.getElementById("knowledge-category").addEventListener("change", updateKnowledgeSubcategories);
    document.getElementById("show-knowledge-btn").addEventListener("click", showKnowledgeBase);
});


function detectSystemInfo() {
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
    
    const osInfoElement = document.getElementById("os-info");
    if (osInfoElement) {
        osInfoElement.textContent = osInfo;
    }
    
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
    
    const browserInfoElement = document.getElementById("browser-info");
    if (browserInfoElement) {
        browserInfoElement.textContent = browserInfo;
    }
    
    const width = window.screen.width;
    const height = window.screen.height;
    
    const resolutionInfoElement = document.getElementById("resolution-info");
    if (resolutionInfoElement) {
        resolutionInfoElement.textContent = `${width}x${height}`;
    }
}