'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Evento', [
            {
                nome: 'Salario',
                codigo: '001',
                eSocial: 'Salario, vencimento, soldo, ou subsidio',
                tipo: 'Provento',
                tributarIrrf: true,
                tributarInss: true,
                tributarFgts: true,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: 'Ferias',
                codigo: '991',
                eSocial: 'Ferias - gozadas',
                tipo: 'Desconto',
                tributarIrrf: true,
                tributarInss: true,
                tributarFgts: true,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: true,
                campoAtivo: true,
                createdAt: new Date(),
            },
            {
                nome: 'Afastamentos',
                codigo: '992',
                eSocial: 'Atrasos',
                tipo: 'Desconto',
                tributarIrrf: false,
                tributarInss: false,
                tributarFgts: false,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: true,
                campoAtivo: true,
                createdAt: new Date(),
            },
            {
                nome: 'Contribuicao sindical',
                codigo: '994',
                eSocial: 'Contribuicao sindical - Confederativa',
                tipo: 'Desconto',
                tributarIrrf: false,
                tributarInss: false,
                tributarFgts: false,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: true,
                campoAtivo: true,
                createdAt: new Date(),
            },
            {
                nome: 'DSR',
                codigo: '995',
                eSocial: 'Descanso semanal remunerado - DSR',
                tipo: 'Provento',
                tributarIrrf: true,
                tributarInss: true,
                tributarFgts: true,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: 'FGTS',
                codigo: '996',
                eSocial: 'Desconto de outros impostos e contribuicoes',
                tipo: 'Informativo',
                tributarIrrf: false,
                tributarInss: false,
                tributarFgts: false,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: 'IRRF',
                codigo: '997',
                eSocial: 'Imposto de renda retido na fonte',
                tipo: 'Desconto',
                tributarIrrf: false,
                tributarInss: false,
                tributarFgts: false,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: 'INSS patronal',
                codigo: '998',
                eSocial: 'Contribuicao previdenciaria',
                tipo: 'Exclusivo para a empresa',
                tributarIrrf: false,
                tributarInss: false,
                tributarFgts: false,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: 'INSS',
                codigo: '999',
                eSocial: 'Contribuicao previdenciaria',
                tipo: 'Desconto',
                tributarIrrf: false,
                tributarInss: false,
                tributarFgts: false,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: 'Faltas',
                codigo: '1001',
                eSocial: 'Faltas',
                tipo: 'Desconto',
                tributarIrrf: true,
                tributarInss: true,
                tributarFgts: true,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: '13 salário - Parcela Única',
                codigo: '5001',
                eSocial: '13 salário',
                tipo: 'Provento',
                tributarIrrf: true,
                tributarInss: true,
                tributarFgts: true,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: '13 salário - Primeira Parcela',
                codigo: '5002',
                eSocial: '13 salário',
                tipo: 'Provento',
                tributarIrrf: false,
                tributarInss: false,
                tributarFgts: false,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: '13 salário - Segunda Parcela',
                codigo: '5002',
                eSocial: '13 salário',
                tipo: 'Provento',
                tributarIrrf: true,
                tributarInss: true,
                tributarFgts: true,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: '13 salário - Desconto de adiantamento',
                codigo: '5004',
                eSocial: '13 salário - Primeira Parcela',
                tipo: 'Exclusivo para a empresa',
                tributarIrrf: true,
                tributarInss: true,
                tributarFgts: true,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: 'Horas extraordinárias - 1',
                codigo: '11003',
                eSocial: 'Horas extraordinarias',
                tipo: 'Provento',
                tributarIrrf: false,
                tributarInss: false,
                tributarFgts: false,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: 'Horas extraordinárias - 2',
                codigo: '11004',
                eSocial: 'Horas extraordinarias',
                tipo: 'Provento',
                tributarIrrf: false,
                tributarInss: false,
                tributarFgts: false,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: 'Horas extraordinárias - 3',
                codigo: '11005',
                eSocial: 'Horas extraordinarias',
                tipo: '',
                tributarIrrf: false,
                tributarInss: false,
                tributarFgts: false,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
            {
                nome: 'Horas extraordinárias - 4 ',
                codigo: '11006',
                eSocial: 'Horas extraordinarias',
                tipo: '',
                tributarIrrf: false,
                tributarInss: false,
                tributarFgts: false,
                considerarNoCalculoDsr: false,
                adicionarAoArquivoDeIntegracao: false,
                sobrescreverCalculoDoSistema: false,
                campoAtivo: false,
                createdAt: new Date(),
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Evento', null, {});

    }
};
